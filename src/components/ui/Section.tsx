import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";
import { Container } from "./Container";

type Tone = "white" | "muted" | "dark";

const tones: Record<Tone, string> = {
  white: "bg-surface",
  muted: "bg-ink-50",
  /** Stays dark in both themes. */
  dark: "bg-night-950 text-white",
};

interface SectionProps extends ComponentProps<"section"> {
  /** Anchor id used by the navbar (e.g. "pricing"). */
  id?: string;
  tone?: Tone;
  /** Class for the inner Container. */
  containerClassName?: string;
}

/** Standard vertical rhythm + background for every landing section. */
export function Section({
  tone = "white",
  className,
  containerClassName,
  children,
  ...props
}: SectionProps) {
  return (
    <section className={cn("relative isolate py-20 sm:py-28", tones[tone], className)} {...props}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
