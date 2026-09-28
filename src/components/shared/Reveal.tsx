"use client";

import { useRef, type ComponentProps } from "react";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

interface RevealProps extends ComponentProps<"div"> {
  /** Delay in ms, handy for staggering items in a grid. */
  delay?: number;
  /** Direction the content arrives from. Default: slides up. */
  from?: "below" | "left" | "right";
}

/**
 * Fades + slides children in when they scroll into view.
 * Styles live in globals.css (`.reveal`). Respects prefers-reduced-motion.
 */
export function Reveal({ delay = 0, from = "below", className, style, children, ...props }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref);

  return (
    <div
      ref={ref}
      data-visible={visible}
      data-from={from}
      className={cn("reveal", className)}
      style={{ ...style, ["--reveal-delay" as string]: `${delay}ms` }}
      {...props}
    >
      {children}
    </div>
  );
}
