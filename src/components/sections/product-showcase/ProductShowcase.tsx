"use client";

import { ArrowDown, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useRef, type CSSProperties } from "react";
import { showcaseIntro, showcaseTabs, showcaseTour } from "@/content";
import type { ShowcaseTab } from "@/types/content";
import { clamp01, useScrollProgress } from "@/hooks/useScrollProgress";
import { useMediaQuery, useReducedMotion } from "@/hooks/useMediaQuery";
import { cn } from "@/lib/utils";
import { ButtonLink, Container, SectionHeader } from "@/components/ui";
import { Reveal } from "@/components/shared/Reveal";
import { ShowcaseMedia } from "./ShowcaseMedia";
import { TourBubble } from "./TourBubble";

/** Scroll distance per card change while pinned, in viewport heights (anubi ≈ 1.08). */
const VH_PER_STEP = 1.1;

/**
 * Card pose by position `p` relative to the active card (0 = active,
 * 1 = next, -1 = gone). Measured from anubi.io "In Evidenza" at 1440px:
 * translate (px, scaled with the stage width), rotateY / rotateZ (deg),
 * opacity. Values between keys are interpolated linearly.
 */
interface Key {
  p: number;
  tx: number;
  ty: number;
  tz: number;
  ry: number;
  rz: number;
  o: number;
}

const KEYS: Key[] = [
  { p: -1, tx: -1290, ty: 190, tz: 550, ry: 40, rz: -14, o: 0 },
  { p: -0.75, tx: -954, ty: 143, tz: 418, ry: 30.6, rz: -10.4, o: 0.73 },
  { p: -0.5, tx: -620, ty: 95, tz: 286, ry: 20.2, rz: -6.9, o: 1 },
  { p: -0.25, tx: -301, ty: 46, tz: 147, ry: 10.4, rz: -3.6, o: 1 },
  { p: 0, tx: 0, ty: 0, tz: 0, ry: 1.8, rz: -0.6, o: 1 },
  { p: 0.25, tx: 305, ty: -45, tz: -161, ry: -6.4, rz: 2.2, o: 1 },
  { p: 0.5, tx: 573, ty: -85, tz: -313, ry: -13.8, rz: 4.7, o: 1 },
  { p: 0.75, tx: 805, ty: -121, tz: -465, ry: -20.3, rz: 6.8, o: 1 },
  { p: 1, tx: 983, ty: -151, tz: -618, ry: -25.2, rz: 8.3, o: 1 },
  { p: 2, tx: 963, ty: -183, tz: -1236, ry: -31.4, rz: 7.7, o: 1 },
  { p: 3, tx: 963, ty: -183, tz: -1800, ry: -31.4, rz: 7.7, o: 0 },
];

type Pose = Omit<Key, "p">;

function poseAt(p: number): Pose {
  if (p <= KEYS[0].p) return KEYS[0];
  const last = KEYS[KEYS.length - 1];
  if (p >= last.p) return last;
  const i = KEYS.findIndex((k) => k.p > p);
  const a = KEYS[i - 1];
  const b = KEYS[i];
  const t = (p - a.p) / (b.p - a.p);
  const mix = (x: number, y: number) => x + (y - x) * t;
  return { tx: mix(a.tx, b.tx), ty: mix(a.ty, b.ty), tz: mix(a.tz, b.tz), ry: mix(a.ry, b.ry), rz: mix(a.rz, b.rz), o: mix(a.o, b.o) };
}

const pad = (n: number) => String(n).padStart(2, "0");
const metaOf = (tab: ShowcaseTab) => [tab.label, tab.bullets.slice(0, 2).join(", ")];

/**
 * Image + title row, as one link (anubi-style): a round ↗ button sits on the
 * image and another ↗ ends the title row. On hover the image zooms a touch,
 * the button fills blue and both arrows nudge up-right.
 * `interactive={false}` for cards waiting in the background of the tour.
 */
function TourCard({
  tab,
  index,
  titleStyle,
  interactive = true,
}: {
  tab: ShowcaseTab;
  index: number;
  titleStyle?: CSSProperties;
  interactive?: boolean;
}) {
  const [category, detail] = metaOf(tab);
  return (
    <Link
      href={tab.href ?? showcaseTour.primaryCta.href}
      tabIndex={interactive ? undefined : -1}
      aria-label={`${tab.title}: ${showcaseTour.primaryCta.label}`}
      className={cn(
        "group block rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-500",
        interactive ? "cursor-pointer" : "pointer-events-none",
      )}
      draggable={false}
    >
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-ink-100 shadow-xl shadow-black/10">
        <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.03]">
          <ShowcaseMedia media={tab.media} priority={index === 0} />
        </div>
        <span
          aria-hidden="true"
          className="absolute top-4 right-4 flex size-12 items-center justify-center rounded-full bg-white text-night-950 shadow-lg ring-1 ring-black/5 transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-600 group-hover:text-white"
        >
          <ArrowUpRight className="size-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
      <div className="mt-4 flex items-start justify-between gap-6" style={titleStyle}>
        <div>
          <h3 className="text-xl font-semibold text-ink-900 transition-colors group-hover:text-brand-600 sm:text-2xl dark:group-hover:text-brand-400">
            {tab.title}
          </h3>
          <p className="mt-1.5 flex flex-wrap items-center gap-2 text-sm text-ink-500">
            <span className="font-medium text-brand-600 dark:text-brand-400">{category}</span>
            <span className="h-3 w-px bg-ink-300" aria-hidden="true" />
            <span>{detail}</span>
          </p>
        </div>
        <ArrowUpRight
          aria-hidden="true"
          className="mt-1 size-6 shrink-0 text-ink-900 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-brand-600 dark:group-hover:text-brand-400"
        />
      </div>
    </Link>
  );
}

/**
 * Product tour — reference: anubi.io "In Evidenza".
 *
 * Desktop: the section pins for one scroll-screen per product area. The
 * active shot sits centre-left with its title; the next one waits top-right,
 * smaller and turned away in 3D. Scrolling swings the active card towards
 * the viewer and out to the left while the next one turns and settles into
 * place; a Dagsis message bubble pops up in the gap announcing the next
 * stop (our own touch instead of anubi's doodles); the outgoing title
 * blurs away and the incoming one sharpens. A counter and progress line run
 * along the bottom.
 *
 * Mobile / short screens / reduced motion: a simple vertical list.
 */
export function ProductShowcase() {
  const pinnable = useMediaQuery("(min-width: 1024px) and (min-height: 700px)");
  const reduced = useReducedMotion();
  const pinned = pinnable && !reduced;

  // On the section itself so it exists in both layouts (the hook attaches once).
  const outerRef = useRef<HTMLElement>(null);
  const progress = useScrollProgress(outerRef, "pin");
  const count = showcaseTabs.length;
  const position = progress * (count - 1); // continuous index of the active card
  const activeIndex = Math.min(count - 1, Math.round(position));
  const transition = Math.min(count - 2, Math.floor(position));

  // Same header and buttons as every other section.
  const header = <SectionHeader {...showcaseIntro} />;

  const ctas = (
    <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
      <ButtonLink href={showcaseTour.primaryCta.href} size="lg">
        {showcaseTour.primaryCta.label}
      </ButtonLink>
      <ButtonLink href={showcaseTour.secondaryCta.href} variant="secondary" size="lg">
        {showcaseTour.secondaryCta.label}
      </ButtonLink>
    </div>
  );

  if (!pinned) {
    return (
      <section id="showcase" ref={outerRef} className="bg-surface py-20 sm:py-28">
        <Container>
          {header}
          <div className="mt-14 space-y-14">
            {showcaseTabs.map((tab, i) => (
              <Reveal key={tab.id} from="right">
                <TourCard tab={tab} index={i} />
              </Reveal>
            ))}
          </div>
          {ctas}
        </Container>
      </section>
    );
  }

  return (
    <>
      <section
        id="showcase"
        ref={outerRef}
        className="relative bg-surface"
        style={{ height: `${100 + (count - 1) * VH_PER_STEP * 100}vh` }}
      >
        <div className="sticky top-0 flex h-screen flex-col overflow-hidden pt-24 pb-6">
          <Container>{header}</Container>

          {/* Stage: cards in perspective */}
          <div className="relative flex-1" style={{ perspective: "86vw" }}>
            {transition >= 0 && <TourBubble note={showcaseTabs[transition + 1].note} t={position - transition} />}

            {showcaseTabs.map((tab, i) => {
              const p = i - position;
              if (p < -1.05 || p > 2.5) return null;
              const pose = poseAt(p);
              // Poses were measured on a 1440px-wide stage; scale with the viewport.
              const px = (v: number) => `calc(${v} * 100vw / 1440)`;
              const titleOn = clamp01(1 - Math.abs(p) * 3);
              return (
                <article
                  key={tab.id}
                  className="absolute top-[5%] left-[20%] w-[48%] will-change-transform"
                  aria-hidden={i !== activeIndex}
                  style={{
                    zIndex: Math.round(1000 - p * 100),
                    opacity: pose.o,
                    transform: `translate3d(${px(pose.tx)}, ${px(pose.ty)}, ${px(pose.tz)}) rotateY(${pose.ry}deg) rotateZ(${pose.rz}deg)`,
                  }}
                >
                  <TourCard
                    tab={tab}
                    index={i}
                    interactive={i === activeIndex}
                    titleStyle={{ opacity: titleOn, filter: `blur(${(1 - titleOn) * 8}px)` }}
                  />
                </article>
              );
            })}
          </div>

          {/* Footer: counter + progress line, scroll hint */}
          <Container className="relative z-[2000] grid grid-cols-3 items-center text-sm text-ink-500">
            <div className="flex items-center gap-3">
              <span className="text-lg font-semibold text-ink-900 tabular-nums">{pad(activeIndex + 1)}</span>
              <span className="h-1 w-24 overflow-hidden rounded-full bg-ink-200">
                <span
                  className="block h-full origin-left rounded-full bg-brand-600 dark:bg-brand-400"
                  style={{ transform: `scaleX(${progress})` }}
                />
              </span>
              <span className="tabular-nums">{pad(count)}</span>
            </div>
            <p className="flex items-center justify-center gap-2">
              {showcaseTour.scrollHint}
              <ArrowDown className="size-4 text-brand-600 dark:text-brand-400" />
            </p>
            <span />
          </Container>
        </div>
      </section>

      <div className="bg-surface pb-20 sm:pb-28">{ctas}</div>
    </>
  );
}
