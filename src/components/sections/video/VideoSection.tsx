"use client";

import { Play } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import { siteConfig } from "@/config/site";
import { videoIntro, videoMeta } from "@/content";
import { Section, SectionHeader } from "@/components/ui";
import { easeOut, lerp, range, useScrollProgress } from "@/hooks/useScrollProgress";
import { useReducedMotion } from "@/hooks/useMediaQuery";

const isFileVideo = (src: string) => /\.(mp4|webm|mov)$/i.test(src);

/**
 * Product video. Shows a poster until clicked, then loads the video.
 * Set `siteConfig.links.productVideo` to an embed URL (YouTube/Vimeo) or an
 * .mp4 path. With no URL, the play button is disabled ("coming soon").
 *
 * Motion: the player grows from ~88% to full width as it scrolls into view.
 */
export function VideoSection() {
  const [playing, setPlaying] = useState(false);
  const src: string = siteConfig.links.productVideo;
  const hasVideo = src.length > 0;
  const ref = useRef<HTMLDivElement>(null);
  const progress = useScrollProgress(ref, "enter");
  const reduced = useReducedMotion();
  const grow = reduced ? 1 : easeOut(range(progress, 0, 0.85));

  return (
    <Section id="video" tone="dark">
      <SectionHeader {...videoIntro} inverted />

      <div
        ref={ref}
        className="mx-auto mt-14 max-w-5xl origin-top will-change-transform"
        style={{ transform: `scale(${lerp(0.88, 1, grow)})`, opacity: lerp(0.4, 1, grow) }}
      >
        <div className="relative aspect-video overflow-hidden rounded-3xl bg-night-900 ring-1 ring-white/10">
          {playing && hasVideo ? (
            isFileVideo(src) ? (
              <video src={src} poster={siteConfig.links.productVideoPoster} className="size-full" controls autoPlay playsInline />
            ) : (
              <iframe
                src={src}
                title={videoMeta.caption}
                className="size-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            )
          ) : (
            <button
              type="button"
              onClick={() => hasVideo && setPlaying(true)}
              className="group absolute inset-0 flex items-center justify-center"
              aria-label={hasVideo ? `Play ${videoMeta.caption}` : "Video coming soon"}
              disabled={!hasVideo}
            >
              {/* Poster: dark frame of the walkthrough (fits the dark section in both themes) */}
              <Image
                src={siteConfig.links.productVideoPoster}
                alt=""
                fill
                sizes="(min-width: 1024px) 1024px, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-night-950/85 via-night-950/30 to-transparent" />

              <span className="relative flex size-20 items-center justify-center sm:size-24">
                <span className="absolute inset-0 animate-ping rounded-full bg-white/20 [animation-duration:2.4s]" />
                <span className="relative flex size-full items-center justify-center rounded-full bg-white text-night-950 shadow-xl transition-transform group-hover:scale-105">
                  <Play className="ml-1 size-8 fill-current" />
                </span>
              </span>

              <span className="absolute bottom-5 left-6 text-left text-sm text-white">
                <span className="font-semibold">{videoMeta.caption}</span>
                <span className="ml-2 text-white/60">{hasVideo ? videoMeta.duration : "Coming soon"}</span>
              </span>
            </button>
          )}
        </div>
      </div>
    </Section>
  );
}
