import type { SectionIntro } from "@/types/content";
import { cn } from "@/lib/utils";
import { Eyebrow } from "./Eyebrow";

interface SectionHeaderProps extends SectionIntro {
  /**
   * center: stacked and centred.
   * left:   stacked, left-aligned.
   * split:  title on the left, description on the right (desktop). Use it to
   *         break up the rhythm of centred sections.
   */
  align?: "center" | "left" | "split";
  /** Use light text on fixed dark sections. */
  inverted?: boolean;
  className?: string;
}

/**
 * Eyebrow + title + description block used at the top of sections.
 * `titleAccent` is rendered in brand-coloured italic serif (joinboardly / youratlas style).
 */
export function SectionHeader({
  eyebrow,
  title,
  titleAccent,
  accentFirst = false,
  description,
  align = "center",
  inverted = false,
  className,
}: SectionHeaderProps) {
  const accent = titleAccent ? (
    <span
      className={cn(
        "accent-serif text-[1.08em]",
        inverted ? "text-brand-300" : "text-brand-600 dark:text-brand-400",
      )}
    >
      {titleAccent}
    </span>
  ) : null;

  const heading = (
    <>
      {eyebrow && <Eyebrow inverted={inverted}>{eyebrow}</Eyebrow>}
      <h2
        className={cn(
          "mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl",
          inverted ? "text-white" : "text-ink-900",
        )}
      >
        {accentFirst && accent && <>{accent} </>}
        {title}
        {!accentFirst && accent && <> {accent}</>}
      </h2>
    </>
  );

  const body = description && (
    <p
      className={cn(
        "text-lg text-pretty",
        align === "split" ? "max-w-md lg:justify-self-end" : "mt-4",
        align === "center" && "mx-auto max-w-2xl",
        inverted ? "text-white/65" : "text-ink-500",
      )}
    >
      {description}
    </p>
  );

  if (align === "split") {
    return (
      <div className={cn("grid grid-cols-1 items-end gap-6 lg:grid-cols-2 lg:gap-16", className)}>
        <div className="max-w-xl">{heading}</div>
        {body}
      </div>
    );
  }

  return (
    <div className={cn("max-w-3xl", align === "center" ? "mx-auto text-center" : "text-left", className)}>
      {heading}
      {body}
    </div>
  );
}
