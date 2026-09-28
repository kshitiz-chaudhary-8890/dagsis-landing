#!/usr/bin/env node
/**
 * Generates PLACEHOLDER product media into /public from the coded mock-ups,
 * so the site ships with real image/video files that can later be swapped
 * for genuine Dagsis screenshots and recordings (same file names).
 *
 * Usage:
 *   1. npm run dev                      (in one terminal)
 *   2. npm run media:placeholders       (in another)
 *
 * Env:
 *   BASE_URL     dev server URL        (default http://localhost:3000)
 *   CHROME_PATH  Chrome/Chromium path  (default: auto-detect common paths)
 *
 * Output:
 *   public/images/showcase/tour-<tab>.webp          (16:9 product tour scenes)
 *   public/images/video-poster.webp
 *   public/images/features/bg-<0..3>.webp          feature card backgrounds
 *   public/images/features/scene-<feature>.webp    feature picture cards
 *   public/videos/product-walkthrough.mp4
 */
import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import ffmpegPath from "ffmpeg-static";
import puppeteer from "puppeteer-core";

const BASE_URL = process.env.BASE_URL ?? "http://localhost:3000";
const ROOT = new URL("..", import.meta.url).pathname;
const OUT_IMG = join(ROOT, "public/images");
const OUT_SHOWCASE = join(OUT_IMG, "showcase");
const OUT_VIDEO = join(ROOT, "public/videos");

const VARIANTS = ["knowledge", "builder", "widget", "conversations", "analytics"];
/** Must match FEATURE_SCENES / FEATURE_BACKGROUNDS in src/components/dev/FeatureScenes.tsx */
const FEATURE_SCENES = ["knowledge", "builder", "widget", "channels", "conversations", "analytics"];
const FEATURE_BACKGROUNDS = 4;
const OUT_FEATURES = join(ROOT, "public/images/features");
/** Must match TOUR_SCENE_MS in src/components/dev/MediaTour.tsx */
const SCENE_MS = 3000;

function findChrome() {
  if (process.env.CHROME_PATH) return process.env.CHROME_PATH;
  const candidates = [
    "/usr/bin/google-chrome",
    "/usr/bin/google-chrome-stable",
    "/usr/bin/chromium",
    "/usr/bin/chromium-browser",
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  ];
  const found = candidates.find((p) => existsSync(p));
  if (!found) throw new Error("Chrome not found. Set CHROME_PATH.");
  return found;
}

async function openPage(browser, { theme, width, height, scale = 1 }) {
  const page = await browser.newPage();
  await page.setViewport({ width, height, deviceScaleFactor: scale });
  await page.evaluateOnNewDocument((t) => localStorage.setItem("dagsis-theme", t), theme);
  return page;
}

/** Hide the Next.js dev-tools badge so it doesn't end up in the media. */
const hideDevOverlay = (page) => page.addStyleTag({ content: "nextjs-portal{display:none!important}" });

async function captureElement(page, url, file) {
  await page.goto(url, { waitUntil: "networkidle0" });
  await hideDevOverlay(page);
  // Let entrance animations settle.
  await new Promise((r) => setTimeout(r, 900));
  const el = await page.$("#capture");
  if (!el) throw new Error(`#capture not found on ${url} (is the dev server running?)`);
  await el.screenshot({ path: file, type: "webp", quality: 88 });
  console.log("  ✓", file.replace(ROOT, ""));
}

async function main() {
  for (const dir of [OUT_IMG, OUT_SHOWCASE, OUT_VIDEO, OUT_FEATURES]) mkdirSync(dir, { recursive: true });
  const browser = await puppeteer.launch({ executablePath: findChrome(), headless: true, args: ["--no-sandbox"] });

  try {
    console.log("Product tour scenes");
    {
      // 1280×720 captured at 1.25× → 1600×900 (16:9). Fixed colours: one image for both themes.
      const page = await openPage(browser, { theme: "light", width: 1400, height: 800, scale: 1.25 });
      for (const v of VARIANTS) {
        await captureElement(page, `${BASE_URL}/media-preview?variant=tour-shot&id=${v}`, join(OUT_SHOWCASE, `tour-${v}.webp`));
      }
      await page.close();
    }

    console.log("Feature ticker artwork");
    {
      // 380×420 cards captured at 2× for sharp display.
      const page = await openPage(browser, { theme: "light", width: 600, height: 600, scale: 2 });
      for (let i = 0; i < FEATURE_BACKGROUNDS; i++) {
        await captureElement(page, `${BASE_URL}/media-preview?variant=feature-bg&id=${i}`, join(OUT_FEATURES, `bg-${i}.webp`));
      }
      for (const id of FEATURE_SCENES) {
        await captureElement(page, `${BASE_URL}/media-preview?variant=feature-scene&id=${id}`, join(OUT_FEATURES, `scene-${id}.webp`));
      }
      await page.close();
    }

    console.log("Walkthrough video");
    const page = await openPage(browser, { theme: "dark", width: 1280, height: 720 });
    await page.goto(`${BASE_URL}/media-preview?variant=tour`, { waitUntil: "networkidle0" });
    await hideDevOverlay(page);
    await new Promise((r) => setTimeout(r, 900));
    const tour = await page.$("#capture");
    await tour.screenshot({ path: join(OUT_IMG, "video-poster.webp"), type: "webp", quality: 85 });
    console.log("  ✓ /public/images/video-poster.webp");

    // Record frames for one full loop of the tour, then encode with ffmpeg.
    const frames = mkdtempSync(join(tmpdir(), "dagsis-frames-"));
    const duration = SCENE_MS * VARIANTS.length;
    const start = Date.now();
    let n = 0;
    while (Date.now() - start < duration) {
      await tour.screenshot({ path: join(frames, `f${String(n++).padStart(5, "0")}.png`) });
    }
    const fps = Math.max(1, Math.round((n / duration) * 1000));
    const mp4 = join(OUT_VIDEO, "product-walkthrough.mp4");
    execFileSync(ffmpegPath, [
      "-y", "-loglevel", "error",
      "-framerate", String(fps),
      "-i", join(frames, "f%05d.png"),
      "-vf", "fps=30,format=yuv420p,scale=1280:-2",
      "-c:v", "libx264", "-preset", "slow", "-crf", "24", "-movflags", "+faststart",
      mp4,
    ]);
    rmSync(frames, { recursive: true, force: true });
    console.log(`  ✓ /public/videos/product-walkthrough.mp4 (${n} frames @ ${fps}fps)`);

    // next/image caches optimised copies by URL. The files keep their names,
    // so drop the cache or the old versions keep being served.
    rmSync(join(ROOT, ".next/cache/images"), { recursive: true, force: true });
    rmSync(join(ROOT, ".next/dev/cache/images"), { recursive: true, force: true });
    console.log("  ✓ cleared next/image cache");
  } finally {
    await browser.close();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
