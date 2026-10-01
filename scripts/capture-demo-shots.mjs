#!/usr/bin/env node
/** One-off: capture real website screenshots for the last 3 demo cards. */
import puppeteer from "puppeteer-core";

const SHOTS = [
  { url: "https://restaurants-f-b.vercel.app/", out: "public/images/showcase/demo-restaurant-site.webp" },
  { url: "http://prop4-qcpm.vercel.app/", out: "public/images/showcase/demo-property-plus.webp" },
  { url: "https://prop3-eight.vercel.app/", out: "public/images/showcase/demo-prop-homes.webp" },
];

const browser = await puppeteer.launch({
  executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  headless: "new",
  args: ["--no-sandbox", "--disable-gpu", "--window-size=1440,900"],
});

try {
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
  for (const shot of SHOTS) {
    console.log("capturing", shot.url);
    await page.goto(shot.url, { waitUntil: "networkidle2", timeout: 60000 });
    await new Promise((r) => setTimeout(r, 2500));
    await page.screenshot({ path: shot.out, type: "webp", quality: 82 });
    console.log("saved", shot.out);
  }
} finally {
  await browser.close();
}
