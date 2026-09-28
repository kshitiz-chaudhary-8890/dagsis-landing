import type { IconComponent } from "@/types/content";
import { cn } from "@/lib/utils";

type Size = "sm" | "md" | "lg";

const sizes: Record<Size, { box: string; icon: string }> = {
  sm: { box: "size-9 rounded-lg", icon: "size-4" },
  md: { box: "size-11 rounded-xl", icon: "size-5" },
  lg: { box: "size-14 rounded-2xl", icon: "size-7" },
};

/** Rounded square holding an icon. Pass `className` to change colors. */
export function IconBadge({
  icon: Icon,
  size = "md",
  className,
}: {
  icon: IconComponent;
  size?: Size;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center bg-ink-100 text-ink-800 ring-1 ring-ink-200",
        sizes[size].box,
        className,
      )}
    >
      <Icon className={sizes[size].icon} aria-hidden="true" />
    </span>
  );
}
