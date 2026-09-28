import type Lenis from "lenis";

/**
 * Shared handle to the Lenis smooth-scroll instance (created in
 * components/layout/SmoothScroll.tsx). Components that scroll
 * programmatically should use `scrollToY` so they go through Lenis when it's
 * active and fall back to native smooth scrolling when it isn't
 * (reduced motion, touch devices).
 */
let instance: Lenis | null = null;

export function setLenis(lenis: Lenis | null) {
  instance = lenis;
}

export function scrollToY(y: number) {
  if (instance) instance.scrollTo(y, { duration: 1.1 });
  else window.scrollTo({ top: y, behavior: "smooth" });
}

/** Offset applied to anchor jumps so headings clear the floating navbar. */
export const ANCHOR_OFFSET = -96;
