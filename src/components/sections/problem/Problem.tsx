"use client";

import { useRef } from "react";
import { problemIntro, problems } from "@/content";
import { easeOut, lerp, range, useScrollProgress } from "@/hooks/useScrollProgress";
import { useMediaQuery, useReducedMotion } from "@/hooks/useMediaQuery";
import { cn } from "@/lib/utils";
import { Container, SectionHeader } from "@/components/ui";
import { Reveal } from "@/components/shared/Reveal";
import { ProblemInbox } from "./ProblemInbox";
import { ProblemItem } from "./ProblemItem";

/** Scroll distance per problem while pinned, in viewport heights. */
const VH_PER_ITEM = 0.6;
/** Share of the pinned scroll before the first item starts arriving. */
const LEAD_IN = 0.06;
/** Share of the pinned scroll each item takes to slide in. */
const SLIDE = 0.16;
/** Share left at the end with everything shown, before the page moves on. */
const HOLD = 0.14;

const pad = (n: number) => String(n).padStart(2, "0");

/** Slide in from the left with a fade (and optional blur), driven by `t` 0→1. */
const fromLeft = (t: number, distance: number, blur = 0) => ({
  opacity: t,
  transform: `translateX(${lerp(-distance, 0, t)}px)`,
  filter: blur ? `blur(${lerp(blur, 0, t)}px)` : undefined,
});

/**
 * The problem — scroll-driven story.
 *
 * Desktop (tall enough screens):
 *  1. As the section scrolls into view, the left column builds in from the
 *     left: accent line + label, the headline word by word (sliding and
 *     un-blurring), the description, then the "Support inbox" illustration.
 *  2. The section pins. The left column stays still while the four problem
 *     cards slide in from the right, one per scroll step. Each arrival also
 *     adds its row to the inbox (from the left), and the inbox's unanswered
 *     counter and waiting timer climb as you scroll.
 *  3. After a short hold the page continues.
 *
 * Mobile / reduced motion: normal flow; heading and inbox slide in from the
 * left, cards from the right (or simply appear with reduced motion).
 */
export function Problem() {
  const pinnable = useMediaQuery("(min-width: 1024px) and (min-height: 760px)");
  const reduced = useReducedMotion();
  const pinned = pinnable && !reduced;

  const ref = useRef<HTMLElement>(null);
  const progress = useScrollProgress(ref, "pin");
  // How far the section has come onto the screen (before it pins).
  const entered = useScrollProgress(ref, "enter");
  const count = problems.length;

  // Card arrivals, spread evenly between the lead-in and the final hold.
  const step = (1 - LEAD_IN - HOLD - SLIDE) / Math.max(1, count - 1);
  const arrivals = problems.map((_, i) =>
    pinned ? easeOut(range(progress, LEAD_IN + i * step, LEAD_IN + i * step + SLIDE)) : 1,
  );
  const arrived = arrivals.filter((t) => t > 0.5).length;
  const timeline = pinned ? range(progress, LEAD_IN, 1 - HOLD) : 1;

  // Left column entrance, staged while the section arrives.
  const stage = (from: number, to: number) => (pinned ? easeOut(range(entered, from, to)) : 1);
  const words = problemIntro.title.split(" ");
  const wordGap = 0.3 / words.length;

  return (
    <section
      id="problem"
      ref={ref}
      className="relative overflow-x-clip bg-ink-50"
      style={pinned ? { height: `${100 + count * VH_PER_ITEM * 100}vh` } : undefined}
    >
      <div className={cn(pinned ? "sticky top-0 flex h-screen items-center pt-16" : "py-20 sm:py-28")}>
        <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left: builds in from the left, then stays still while pinned */}
          <div className="lg:col-span-5">
            {pinned ? (
              <div>
                <p
                  className="flex items-center gap-3 text-sm font-medium text-brand-600 dark:text-brand-400"
                  style={fromLeft(stage(0.12, 0.45), 40)}
                >
                  <span
                    className="h-px bg-current"
                    style={{ width: `${lerp(0, 28, stage(0.15, 0.5))}px` }}
                    aria-hidden="true"
                  />
                  {problemIntro.eyebrow}
                </p>
                <h2 className="mt-3 text-4xl font-semibold tracking-tight text-balance text-ink-900 xl:text-5xl">
                  {words.map((word, i) => (
                    <span key={i}>
                      <span
                        className="inline-block will-change-transform"
                        style={fromLeft(stage(0.18 + i * wordGap, 0.48 + i * wordGap), 48, 8)}
                      >
                        {word}
                      </span>{" "}
                    </span>
                  ))}
                </h2>
                <p className="mt-4 text-lg text-pretty text-ink-500" style={fromLeft(stage(0.45, 0.85), 64)}>
                  {problemIntro.description}
                </p>
                <div className="mt-8 will-change-transform" style={fromLeft(stage(0.55, 1), 160)}>
                  <ProblemInbox arrivals={arrivals} timeline={timeline} active={arrived - 1} />
                </div>
              </div>
            ) : (
              <>
                <Reveal from="left">
                  <SectionHeader {...problemIntro} align="left" />
                </Reveal>
                <Reveal from="left" delay={150} className="mt-8">
                  <ProblemInbox arrivals={arrivals} timeline={timeline} active={-1} />
                </Reveal>
              </>
            )}
          </div>

          {/* Right: problem cards arrive from the right */}
          <ol className="space-y-4 lg:col-span-7">
            {problems.map((p, i) => {
              const t = arrivals[i];
              const item = <ProblemItem problem={p} number={pad(i + 1)} active={pinned && i === arrived - 1} />;
              return (
                <li key={p.title}>
                  {pinned ? (
                    <div
                      className="will-change-transform"
                      style={{
                        opacity: t,
                        transform: `translateX(${lerp(160, 0, t)}px) scale(${lerp(0.96, 1, t)})`,
                      }}
                    >
                      {item}
                    </div>
                  ) : (
                    <Reveal from="right" delay={i * 90}>
                      {item}
                    </Reveal>
                  )}
                </li>
              );
            })}
          </ol>
        </Container>
      </div>
    </section>
  );
}
