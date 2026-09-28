import type { BillingCycle } from "@/types/content";
import { cn } from "@/lib/utils";

const options: { value: BillingCycle; label: string }[] = [
  { value: "monthly", label: "Monthly" },
  { value: "yearly", label: "Yearly" },
];

export function BillingToggle({
  value,
  onChange,
  discountLabel,
}: {
  value: BillingCycle;
  onChange: (value: BillingCycle) => void;
  discountLabel?: string;
}) {
  return (
    <div role="radiogroup" aria-label="Billing cycle" className="inline-flex rounded-full bg-ink-100 p-1">
      {options.map((o) => {
        const selected = value === o.value;
        return (
          <button
            key={o.value}
            type="button"
            role="radio"
            aria-checked={selected}
            onClick={() => onChange(o.value)}
            className={cn(
              "inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold transition-all",
              selected ? "bg-surface-raised text-ink-900 shadow-sm" : "text-ink-500 hover:text-ink-800",
            )}
          >
            {o.label}
            {o.value === "yearly" && discountLabel && (
              <span className="rounded-full bg-emerald-100 dark:bg-emerald-500/15 px-2 py-0.5 text-[11px] text-emerald-700 dark:text-emerald-300">
                {discountLabel}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
