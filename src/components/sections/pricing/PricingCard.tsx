import { Check } from "lucide-react";
import type { BillingCycle, PricingPlan } from "@/types/content";
import { cn, formatPrice } from "@/lib/utils";
import { ButtonLink } from "@/components/ui";

export function PricingCard({ plan, cycle }: { plan: PricingPlan; cycle: BillingCycle }) {
  const price = plan.price[cycle];
  const isPaid = price !== null && price > 0;

  return (
    <article
      className={cn(
        "relative flex flex-col rounded-3xl p-7",
        plan.highlighted
          ? // Fixed dark card so it stands out in both themes.
          "bg-night-950 text-white ring-2 ring-brand-500"
          : "bg-surface-raised ring-1 ring-ink-200",
      )}
    >
      {plan.badge && (
        <span className="absolute -top-3 left-7 rounded-full bg-brand-600 px-3 py-1 text-xs font-semibold text-white">
          {plan.badge}
        </span>
      )}

      <h3 className={cn("text-lg font-semibold", plan.highlighted ? "text-white" : "text-ink-900")}>
        {plan.name}
      </h3>
      <p className={cn("mt-1 text-sm", plan.highlighted ? "text-white/65" : "text-ink-500")}>
        {plan.description}
      </p>

      <p className="mt-6 flex items-baseline gap-1">
        {/* key: re-run the entrance when the billing cycle changes the price */}
        <span key={`${plan.id}-${cycle}`} className="animate-fade-up text-4xl font-semibold tracking-tight">
          {formatPrice(price)}
        </span>
        {isPaid && (
          <span className={cn("text-sm", plan.highlighted ? "text-white/55" : "text-ink-500")}>
            / month{cycle === "yearly" && ", billed yearly"}
          </span>
        )}
      </p>

      <ButtonLink
        href={plan.cta.href}
        variant={plan.highlighted ? "white" : "secondary"}
        className="mt-6 w-full"
      >
        {plan.cta.label}
      </ButtonLink>

      <ul className="mt-7 space-y-3 text-sm">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-3">
            <Check
              className={cn("mt-0.5 size-4 shrink-0", plan.highlighted ? "text-brand-300" : "text-brand-600 dark:text-brand-400")}
            />
            <span className={plan.highlighted ? "text-white/85" : "text-ink-600"}>{f}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
