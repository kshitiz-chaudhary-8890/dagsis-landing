"use client";

import { useEffect, useState, type RefObject } from "react";

/**
 * True once the element is on screen. With `once` (default) it stays true,
 * which is what entrance animations want.
 */
export function useInView(
  ref: RefObject<Element | null>,
  { once = true, threshold = 0.15, rootMargin = "0px 0px -40px 0px" } = {},
) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold, rootMargin },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [ref, once, threshold, rootMargin]);

  return inView;
}
