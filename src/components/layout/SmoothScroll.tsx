"use client";

import Lenis from "lenis";
import { useEffect } from "react";
import { useReducedMotion } from "@/hooks/useMediaQuery";
import { ANCHOR_OFFSET, setLenis } from "@/lib/smooth-scroll";

/**
 * Inertial smooth scrolling (Lenis), as used on youratlas and joinboardly.
 * - Uses native scroll under the hood, so `position: sticky`, anchors and
 *   IntersectionObserver keep working.
 * - Off for visitors who prefer reduced motion.
 * - Touch devices keep native scrolling (Lenis default).
 * - In-page anchor links are handled with an offset for the floating navbar.
 */
export function SmoothScroll() {
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const lenis = new Lenis({
      autoRaf: true,
      lerp: 0.1,
      anchors: { offset: ANCHOR_OFFSET },
    });
    setLenis(lenis);
    return () => {
      setLenis(null);
      lenis.destroy();
    };
  }, [reduced]);

  return null;
}
