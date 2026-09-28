import Image from "next/image";
import type { ShowcaseMedia as ShowcaseMediaType } from "@/types/content";
import { BrowserFrame } from "@/components/shared/DeviceFrames";
import { ShowcaseMock } from "./ShowcaseMocks";

const sizes = "(min-width: 1024px) 60vw, 100vw";

/**
 * Fills a tour card (16:9) with the tab's media:
 * - `image`: full-bleed shot, with an optional dark-mode version
 * - `video`: full-bleed looping recording
 * - `mock`:  the live coded UI in a browser frame
 */
export function ShowcaseMedia({ media, priority = false }: { media: ShowcaseMediaType; priority?: boolean }) {
  switch (media.type) {
    case "image":
      return (
        <>
          <Image
            src={media.src}
            alt={media.alt}
            fill
            sizes={sizes}
            priority={priority}
            draggable={false}
            className={media.srcDark ? "object-cover dark:hidden" : "object-cover"}
          />
          {media.srcDark && (
            <Image
              src={media.srcDark}
              alt={media.alt}
              fill
              sizes={sizes}
              priority={priority}
              draggable={false}
              className="hidden object-cover dark:block"
            />
          )}
        </>
      );
    case "video":
      return (
        <video
          src={media.src}
          poster={media.poster}
          className="absolute inset-0 size-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        />
      );
    case "mock":
      return (
        <div className="absolute inset-0 overflow-hidden bg-ink-100 p-6">
          <BrowserFrame url="yourstore.com · Dagsis">
            <ShowcaseMock variant={media.variant} />
          </BrowserFrame>
        </div>
      );
  }
}
