import { Clock, Copy, Globe, LoaderCircle, UsersRound } from "lucide-react";
import { problemInbox, type InboxRow } from "@/content";
import type { IconComponent } from "@/types/content";
import { lerp } from "@/hooks/useScrollProgress";
import { cn } from "@/lib/utils";
import { DiscordIcon, TelegramIcon, WhatsAppIcon } from "@/components/shared/BrandIcons";

const channelIcon: Record<InboxRow["channel"], { icon: IconComponent; cls: string }> = {
  whatsapp: { icon: WhatsAppIcon, cls: "text-emerald-600 dark:text-emerald-400" },
  website: { icon: Globe, cls: "text-brand-600 dark:text-brand-400" },
  telegram: { icon: TelegramIcon, cls: "text-sky-600 dark:text-sky-400" },
  discord: { icon: DiscordIcon, cls: "text-indigo-600 dark:text-indigo-400" },
};

const formatWait = (minutes: number) => {
  const m = Math.round(minutes);
  return m < 60 ? `${m}m` : `${Math.floor(m / 60)}h ${String(m % 60).padStart(2, "0")}m`;
};

const chip = "inline-flex shrink-0 items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-medium";

function Status({ status, timeline }: { status: InboxRow["status"]; timeline: number }) {
  switch (status.kind) {
    case "duplicates":
      return (
        <span className={cn(chip, "bg-ink-100 text-ink-700")}>
          <Copy className="size-3" /> {status.label}
        </span>
      );
    case "waiting":
      return (
        <span className={cn(chip, "bg-rose-50 text-rose-700 tabular-nums dark:bg-rose-500/10 dark:text-rose-300")}>
          <Clock className="size-3" /> {formatWait(lerp(status.fromMinutes, status.toMinutes, timeline))}
        </span>
      );
    case "searching":
      return (
        <span className={cn(chip, "bg-amber-50 text-amber-800 dark:bg-amber-500/10 dark:text-amber-300")}>
          <LoaderCircle className="size-3 animate-spin" /> {status.label}
        </span>
      );
    case "busy":
      return (
        <span className={cn(chip, "bg-rose-50 text-rose-700 dark:bg-rose-500/10 dark:text-rose-300")}>
          <UsersRound className="size-3" /> {status.label}
        </span>
      );
  }
}

/**
 * "Support inbox" illustration for the problem section. Each row shows one
 * problem happening and slides in from the left as its problem arrives.
 *
 * @param arrivals  0→1 per row (row entrance progress)
 * @param timeline  0→1 overall scroll progress; drives the counters/timer
 * @param active    index of the newest row (highlighted), or -1
 */
export function ProblemInbox({
  arrivals,
  timeline,
  active,
  className,
}: {
  arrivals: number[];
  timeline: number;
  active: number;
  className?: string;
}) {
  const { title, unansweredLabel, unanswered, rows } = problemInbox;
  const arrived = arrivals.filter((t) => t > 0.5).length;

  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl bg-surface-raised shadow-xl shadow-black/5 ring-1 ring-ink-200/80",
        className,
      )}
      aria-hidden="true"
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-ink-100 px-4 py-3">
        <p className="text-sm font-semibold text-ink-900">{title}</p>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-rose-50 px-2.5 py-1 text-[11px] font-semibold text-rose-700 tabular-nums dark:bg-rose-500/10 dark:text-rose-300">
          <span className="size-1.5 animate-pulse rounded-full bg-rose-500" />
          {Math.round(lerp(unanswered.from, unanswered.to, timeline))} {unansweredLabel.toLowerCase()}
        </span>
      </div>

      {/* Rows */}
      <ul className="divide-y divide-ink-100">
        {rows.map((row, i) => {
          const t = arrivals[i] ?? 1;
          const { icon: ChannelIcon, cls } = channelIcon[row.channel];
          return (
            <li
              key={row.name}
              className={cn(
                "flex items-center gap-3 px-4 py-2.5 transition-colors duration-500",
                i === active && "bg-brand-50/70",
              )}
              style={{ opacity: t, transform: `translateX(${lerp(-60, 0, t)}px)` }}
            >
              <span className="relative flex size-8 shrink-0 items-center justify-center rounded-full bg-ink-100 text-[11px] font-semibold text-ink-700">
                {row.name.split(" ").map((p) => p[0]).join("")}
                <span className="absolute -right-0.5 -bottom-0.5 flex size-4 items-center justify-center rounded-full bg-surface-raised ring-1 ring-ink-200">
                  <ChannelIcon className={cn("size-2.5", cls)} />
                </span>
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-semibold text-ink-900">{row.name}</p>
                <p className="truncate text-xs text-ink-500">{row.message}</p>
              </div>
              <Status status={row.status} timeline={timeline} />
            </li>
          );
        })}
      </ul>

      {/* Footer: progress through the four problems */}
      <div className="flex items-center gap-4 border-t border-ink-100 px-4 py-3">
        <p className="font-mono text-xs text-ink-500 tabular-nums">
          <span className="text-sm font-semibold text-ink-950">{String(arrived).padStart(2, "0")}</span> /{" "}
          {String(rows.length).padStart(2, "0")}
        </p>
        <div className="flex flex-1 gap-1.5">
          {arrivals.map((a, i) => (
            <span key={i} className="h-1 flex-1 overflow-hidden rounded-full bg-ink-200">
              <span
                className="block h-full origin-left rounded-full bg-brand-600 dark:bg-brand-400"
                style={{ transform: `scaleX(${a})` }}
              />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
