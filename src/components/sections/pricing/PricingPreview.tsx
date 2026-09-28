"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { featureFlags } from "@/config/site";
import { pricingIntro, pricingPlans, yearlyDiscountLabel } from "@/content";
import type { BillingCycle } from "@/types/content";
import { cn } from "@/lib/utils";
import { Section, SectionHeader } from "@/components/ui";
import { BillingToggle } from "./BillingToggle";
import { CompareTable } from "./CompareTable";
import { PricingCard } from "./PricingCard";

/** Pricing preview: 4 plan cards + expandable compare-plans table. */
export function PricingPreview() {
  const [cycle, setCycle] = useState<BillingCycle>("monthly");
  const [compareOpen, setCompareOpen] = useState(false);

  return (
    <Section id="pricing">
      <SectionHeader {...pricingIntro} />

      {featureFlags.showBillingToggle && (
        <div className="mt-10 flex justify-center">
          <BillingToggle value={cycle} onChange={setCycle} discountLabel={yearlyDiscountLabel} />
        </div>
      )}

      <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {pricingPlans.map((plan) => (
          <PricingCard key={plan.id} plan={plan} cycle={cycle} />
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <button
          type="button"
          onClick={() => setCompareOpen((v) => !v)}
          aria-expanded={compareOpen}
          aria-controls="compare-plans"
          className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-brand-700 dark:text-brand-300 ring-1 ring-brand-200 transition-colors hover:bg-brand-50"
        >
          Compare plans
          <ChevronDown className={cn("size-4 transition-transform", compareOpen && "rotate-180")} />
        </button>
      </div>

      <div
        id="compare-plans"
        className={cn(
          "grid transition-all duration-500",
          compareOpen ? "mt-10 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden">
          <CompareTable />
        </div>
      </div>
    </Section>
  );
}
