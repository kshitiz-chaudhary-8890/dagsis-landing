import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Desktop browser chrome used around product screenshots / mocks. */
export function BrowserFrame({
  url = "app.dagsis.com",
  className,
  children,
}: {
  url?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl bg-surface-raised shadow-2xl shadow-black/10 ring-1 ring-ink-200",
        className,
      )}
    >
      <div className="flex items-center gap-2 border-b border-ink-100 bg-ink-50 px-4 py-3">
        <span className="size-3 rounded-full bg-[#ff5f57]" />
        <span className="size-3 rounded-full bg-[#febc2e]" />
        <span className="size-3 rounded-full bg-[#28c840]" />
        <div className="mx-auto hidden max-w-xs flex-1 truncate rounded-md bg-surface-raised px-3 py-1 text-center text-xs text-ink-400 ring-1 ring-ink-200 sm:block">
          {url}
        </div>
        <span className="hidden w-12 sm:block" />
      </div>
      {children}
    </div>
  );
}
