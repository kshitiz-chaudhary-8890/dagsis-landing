import Image from "next/image";
import type { Feature } from "@/types/content";

/** Card size, matching the reference (380×420, 300×340 on small screens). */
const card = "relative h-[340px] w-[300px] shrink-0 overflow-hidden rounded-[30px] sm:h-[420px] sm:w-[380px]";
const sizes = "(min-width: 640px) 380px, 300px";

/**
 * Feature card (dagis.framer.website "use cases" style): a brand gradient with
 * an inset frosted panel. Title + description at the top, the headline stat
 * at the bottom. Colours are fixed (the background is always light), so it reads
 * the same in both themes.
 */
export function FeatureCard({ feature, background }: { feature: Feature; background: string }) {
  return (
    <article className={card}>
      <Image src={background} alt="" fill sizes={sizes} className="object-cover" draggable={false} />
      <div className="absolute inset-2.5 flex flex-col justify-between rounded-[22px] bg-gradient-to-b from-white/85 via-white/45 to-white/40 p-6 ring-1 ring-white/60 backdrop-blur-md sm:p-7">
        <div>
          <h3 className="text-2xl leading-tight font-semibold text-[#0d1328] sm:text-[28px]">{feature.title}</h3>
          <p className="mt-3 text-[15px] leading-snug text-[#30364a] sm:text-[17px]">{feature.description}</p>
        </div>
        <div>
          <p className="text-lg font-semibold text-[#0d1328] sm:text-[22px]">{feature.stat.value}</p>
          <p className="mt-1 text-sm font-medium text-[#1d2336] sm:text-[15px]">{feature.stat.label}</p>
        </div>
      </div>
    </article>
  );
}

/** Full-bleed picture card (the feature's product scene) placed after each feature card. */
export function PhotoCard({ src, alt }: { src: string; alt: string }) {
  return (
    <figure className={card}>
      <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" draggable={false} />
    </figure>
  );
}
