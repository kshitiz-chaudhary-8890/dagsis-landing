"use client";

import { useRef } from "react";
import { useCases, useCasesIntro } from "@/content";
import { clamp01, useScrollProgress } from "@/hooks/useScrollProgress";
import { useReducedMotion } from "@/hooks/useMediaQuery";
import { Section } from "@/components/ui";
import { ShowcaseMock } from "@/components/sections/product-showcase/ShowcaseMocks";
import { UseCaseChat } from "./UseCaseChat";
import styles from "./UseCases.module.css";

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
    <Section id="use-cases" containerClassName="max-w-[1440px]" className="pt-16 sm:pt-20 pb-8 sm:pb-10">
      <div className={styles.inner}>
        <div className={styles.intro}>
          <div>
            <span className={styles.kicker}>{useCasesIntro.eyebrow}</span>
            <h2 className={`section-title ${styles.title}`}>{useCasesIntro.title}</h2>
          </div>
          <p className={`section-description ${styles.desc}`}>{useCasesIntro.description}</p>
        </div>

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
                className="grid origin-top overflow-hidden rounded-[1.75rem] bg-surface-raised shadow-[0_-8px_40px_-12px_rgba(0,0,0,0.18)] ring-1 ring-ink-200/80 will-change-transform md:min-h-[420px] md:grid-cols-[1.05fr_0.95fr]"
                style={{ transform: `scale(${1 - covered * 0.06})`, filter: `brightness(${1 - covered * 0.12})` }}
              >
                <div className="flex flex-col p-8 sm:p-12">
                  <div className="flex items-center gap-4">
                    <span className="inline-flex size-11 items-center justify-center rounded-2xl bg-brand-100 text-brand-600 dark:text-brand-400">
                      <u.icon className="size-5" aria-hidden="true" />
                    </span>
                    <span className="text-sm font-bold tracking-[0.1em] text-brand-600 dark:text-brand-400">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="h-px flex-1 bg-ink-200" aria-hidden="true" />
                  </div>
                  <h3 className={`${styles.cardTitle} mt-6 text-balance`}>{u.title}</h3>
                  <p className="mt-3 max-w-md text-[15px] leading-relaxed text-ink-500 sm:text-base">{u.description}</p>
                </div>
                <div className="flex items-center bg-ink-50 p-6 sm:p-10">
                  <div className="w-full overflow-hidden rounded-[1.25rem] bg-surface shadow-[0_18px_45px_-20px_rgba(13,19,40,0.3)] ring-1 ring-ink-200/70">
                    {u.visual === "chat" ? (
                      <UseCaseChat messages={u.conversation} />
                    ) : (
                      <ShowcaseMock
                        variant={u.visual === "widget" ? "widget" : u.visual === "inbox" ? "conversations" : "knowledge"}
                      />
                    )}
                  </div>
                </div>
              </article>
            </li>
          );
        })}
      </ol>
      </div>
    </Section>
  );
}
