"use client";

import { useRef } from "react";
import { range, useScrollProgress } from "@/hooks/useScrollProgress";
import { useReducedMotion } from "@/hooks/useMediaQuery";
import { cn } from "@/lib/utils";

/**
 * Text whose words brighten one by one as it scrolls through the viewport
 * (joinboardly founders quote). Unread words sit at low opacity.
 */
export function ScrollRevealText({
  text,
  as: Tag = "p",
  className,
}: {
  text: string;
  as?: "p" | "blockquote" | "h2" | "h3";
  className?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const progress = useScrollProgress(ref, "view");
  const reduced = useReducedMotion();
  const words = text.split(" ");
  // Reading happens while the block moves from ~85% to ~45% of the screen.
  const read = range(progress, 0.15, 0.55) * words.length;

  return (
    <Tag ref={ref as never} className={cn(className)} aria-label={text}>
      {words.map((word, i) => (
        <span
          key={i}
          aria-hidden="true"
          className="transition-opacity duration-200"
          style={{ opacity: reduced ? 1 : 0.18 + 0.82 * Math.min(1, Math.max(0, read - i)) }}
        >
          {word}
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </Tag>
  );
}
