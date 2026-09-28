"use client";

import { Check } from "lucide-react";
import { useRef } from "react";
import { useCases, useCasesIntro } from "@/content";
import { clamp01, useScrollProgress } from "@/hooks/useScrollProgress";
import { useReducedMotion } from "@/hooks/useMediaQuery";
import { Section, SectionHeader } from "@/components/ui";
import { UseCaseChat } from "./UseCaseChat";

/**
 * Use cases — stacking sticky cards (reference: cevver.com).
 * Each card: big italic gradient numeral + divider + icon/title, description
 * and highlights on the left; the use case's WhatsApp conversation on the
 * right.
 *
 * Motion: `position: sticky` does the stacking; on top of that, a card
 * shrinks and dims slightly as the next one slides over it.
 */
export function UseCases() {
  const listRef = useRef<HTMLOListElement>(null);
  const progress = useScrollProgress(listRef, "pin");
  const reduced = useReducedMotion();
  const count = useCases.length;

  return (
    <Section id="use-cases">
      <SectionHeader {...useCasesIntro} />

      <ol ref={listRef} className="mx-auto mt-16 max-w-5xl space-y-8 pb-8">
        {useCases.map((u, i) => {
          // 0 while this card is on top, → 1 as the next card covers it.
          const covered = reduced || i === count - 1 ? 0 : clamp01(progress * count - i - 0.4);
          return (
            <li
              key={u.id}
              className="sticky"
              // Each card sticks a little lower than the previous one, so the
              // stack's edges stay visible (cevver's layered effect).
              style={{ top: `${96 + i * 28}px` }}
            >
              <article
                className="grid origin-top overflow-hidden rounded-[2rem] bg-surface-raised shadow-[0_-8px_40px_-12px_rgba(0,0,0,0.18)] ring-1 ring-ink-200/80 will-change-transform md:min-h-[380px] md:grid-cols-2"
                style={{ transform: `scale(${1 - covered * 0.06})`, filter: `brightness(${1 - covered * 0.12})` }}
              >
                <div className="flex flex-col p-8 sm:p-10">
                  <span className="accent-serif text-gradient-logo text-7xl leading-none sm:text-8xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <hr className="my-6 border-ink-200" />
                  <div className="flex items-center gap-3">
                    <u.icon className="size-5 text-brand-600 dark:text-brand-400" aria-hidden="true" />
                    <h3 className="text-2xl font-semibold tracking-tight text-ink-900 sm:text-3xl">{u.title}</h3>
                  </div>
                  <p className="mt-3 max-w-sm text-ink-500">{u.description}</p>
                  <ul className="mt-5 space-y-2">
                    {u.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-sm text-ink-700">
                        <Check className="size-4 shrink-0 text-brand-600 dark:text-brand-400" aria-hidden="true" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center bg-ink-50 p-6 sm:p-8">
                  <div className="w-full">
                    <UseCaseChat messages={u.conversation} />
                  </div>
                </div>
              </article>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
