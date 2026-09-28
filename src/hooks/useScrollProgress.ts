"use client";

import { useEffect, useState, type RefObject } from "react";

/**
 * How far an element has travelled through the viewport, from 0 to 1.
 *
 * - "view":  0 when its top enters at the bottom of the screen,
 *            1 when its bottom leaves at the top.
 * - "enter": 0 when its top enters at the bottom, 1 once its top reaches
 *            20% from the top of the screen. Good for "animate in" effects.
 * - "pin":   for tall wrappers around a `position: sticky` child.
 *            0 when the wrapper's top hits the top of the screen,
 *            1 when its bottom hits the bottom of the screen.
 *
 * Updates at most once per animation frame.
 */
export type ScrollProgressMode = "view" | "enter" | "pin";

export function useScrollProgress(
  ref: RefObject<HTMLElement | null>,
  mode: ScrollProgressMode = "view",
) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      let value: number;
      if (mode === "pin") value = -rect.top / Math.max(1, rect.height - vh);
      else if (mode === "enter") value = (vh - rect.top) / (vh * 0.8);
      else value = (vh - rect.top) / (vh + rect.height);
      setProgress(clamp01(value));
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      cancelAnimationFrame(frame);
    };
  }, [ref, mode]);

  return progress;
}

export const clamp01 = (n: number) => Math.min(1, Math.max(0, n));

/** Map `value` from [inMin, inMax] onto 0..1 (clamped). */
export const range = (value: number, inMin: number, inMax: number) =>
  clamp01((value - inMin) / (inMax - inMin));

/** Linear interpolation. */
export const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

/** Smooth ease-out for scroll-linked motion. */
export const easeOut = (t: number) => 1 - (1 - t) ** 3;
