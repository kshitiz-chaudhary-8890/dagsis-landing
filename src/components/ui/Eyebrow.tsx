import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Small label above a section title. Deliberately plain text (no pill/dot) so
 * sections read like editorial headings rather than template blocks.
 */
export function Eyebrow({
  children,
  inverted = false,
  className,
}: {
  children: ReactNode;
  inverted?: boolean;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "text-sm font-medium",
        inverted ? "text-white/60" : "text-brand-600 dark:text-brand-400",
        className,
      )}
    >
      {children}
    </p>
  );
}
