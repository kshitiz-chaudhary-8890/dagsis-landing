import type { IconItem } from "@/types/content";
import { cn } from "@/lib/utils";

/** One pain point: icon tile, number + title, description. */
export function ProblemItem({
  problem,
  number,
  active = false,
}: {
  problem: IconItem;
  number: string;
  /** The item that arrived most recently (highlighted while pinned). */
  active?: boolean;
}) {
  const Icon = problem.icon;

  return (
    <article
      className={cn(
        "relative flex gap-5 overflow-hidden rounded-2xl bg-surface-raised p-5 ring-1 transition-shadow duration-500 sm:p-6",
        active ? "shadow-xl shadow-brand-900/10 ring-brand-300 dark:ring-brand-400/50" : "shadow-sm ring-ink-200/80",
      )}
    >
      {/* Accent bar on the active item */}
      <span
        aria-hidden="true"
        className={cn(
          "absolute inset-y-0 left-0 w-1 origin-top bg-brand-600 transition-transform duration-500 dark:bg-brand-400",
          active ? "scale-y-100" : "scale-y-0",
        )}
      />
      <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100 dark:text-brand-400">
        <Icon className="size-5" aria-hidden="true" />
      </span>
      <div className="min-w-0">
        <div className="flex items-baseline gap-3">
          <span className="font-mono text-xs text-ink-400">{number}</span>
          <h3 className="text-lg font-semibold text-ink-900">{problem.title}</h3>
        </div>
        <p className="mt-1.5 text-sm leading-relaxed text-ink-500">{problem.description}</p>
      </div>
    </article>
  );
}
