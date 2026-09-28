"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { ShowcaseMockVariant } from "@/types/content";
import { showcaseTabs } from "@/content";
import { ShowcaseMock } from "@/components/sections/product-showcase/ShowcaseMocks";
import { BrowserFrame } from "@/components/shared/DeviceFrames";
import { LogoMark } from "@/components/shared/Logo";

/** Time each screen is shown in the placeholder walkthrough video. */
export const TOUR_SCENE_MS = 3000;

/**
 * DEVELOPMENT ONLY. A self-playing product tour (1280×720) that the media
 * script records into /public/videos/product-walkthrough.mp4 as a stand-in
 * for the real product video. Each scene slides in with a caption.
 */
export function MediaTour({ variants }: { variants: ShowcaseMockVariant[] }) {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setI((n) => (n + 1) % variants.length), TOUR_SCENE_MS);
    return () => window.clearInterval(id);
  }, [variants.length]);

  const variant = variants[i];
  // Showcase tab ids match the mock variant names.
  const tab = showcaseTabs.find((t) => t.id === variant) ?? showcaseTabs[i];

  return (
    <div id="capture" className="relative flex h-[720px] w-[1280px] flex-col overflow-hidden bg-night-950 px-16 pt-10">
      <div className="flex items-center justify-between text-white">
        <div className="flex items-center gap-2">
          <LogoMark className="h-8" />
          <Image src="/brand/dagsis-wordmark-dark.png" alt="Dagsis.ai" width={409} height={96} className="h-6 w-auto" />
        </div>
        <div className="flex gap-2">
          {variants.map((v, n) => (
            <span key={v} className={`h-1.5 w-10 rounded-full ${n === i ? "bg-white" : "bg-white/20"}`} />
          ))}
        </div>
      </div>

      <div key={`cap-${variant}`} className="animate-fade-up mt-6 text-white">
        <p className="text-sm text-white/60">
          Step {i + 1} of {variants.length}
        </p>
        <p className="mt-1 text-3xl font-semibold">{tab.title}</p>
      </div>

      <div key={variant} className="animate-fade-up mt-6">
        <BrowserFrame url="yourstore.com · Dagsis">
          <ShowcaseMock variant={variant} />
        </BrowserFrame>
      </div>
    </div>
  );
}
