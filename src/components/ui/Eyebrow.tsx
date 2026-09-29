import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Shared section label; hero has its own independently styled eyebrow.
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
        "section-eyebrow",
        inverted && "section-eyebrow--inverted",
        className,
      )}
    >
      {children}
    </p>
  );
}
