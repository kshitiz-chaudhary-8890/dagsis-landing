"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { featureFlags } from "@/config/site";
import { pricingIntro, pricingPlans, yearlyDiscountLabel } from "@/content";
import type { BillingCycle } from "@/types/content";
import { cn } from "@/lib/utils";
import { Section } from "@/components/ui";
import { BillingToggle } from "./BillingToggle";
import { CompareTable } from "./CompareTable";
import { PricingCard } from "./PricingCard";
import styles from "./Pricing.module.css";

export function PricingPreview() {
  const [cycle, setCycle] = useState<BillingCycle>("monthly");
  const [compareOpen, setCompareOpen] = useState(false);
  const standardPlans = pricingPlans.filter(plan => plan.price.monthly !== null);
  const customPlan = pricingPlans.find(plan => plan.price.monthly === null);

  return <Section id="pricing" aria-labelledby="pricing-title" containerClassName="max-w-[1440px]" className={styles.section}>
    <div className={styles.inner}>
      <header className={styles.intro}>
        <div><span className={styles.kicker}>{pricingIntro.eyebrow}</span><h2 id="pricing-title" className={`section-title ${styles.title}`}>{pricingIntro.title} {pricingIntro.titleAccent}</h2></div>
        <p className={`section-description ${styles.description}`}>{pricingIntro.description}</p>
      </header>
      <div className={styles.pricingStage}>
        <div className={styles.toolbar}>
          <p>Your next stage starts here.<span>Choose the plan that fits your business.</span></p>
          {featureFlags.showBillingToggle && <BillingToggle value={cycle} onChange={setCycle} discountLabel={yearlyDiscountLabel} />}
        </div>
        <div className={styles.planGrid}>{standardPlans.map(plan => <PricingCard key={plan.id} plan={plan} cycle={cycle} />)}</div>
        {customPlan && <PricingCard plan={customPlan} cycle={cycle} />}
        <div className={styles.compareRow}>
          <p>Every plan includes a knowledge base and web widget.</p>
          <button type="button" onClick={() => setCompareOpen(value => !value)} aria-expanded={compareOpen} aria-controls="compare-plans" className={styles.compareButton}>Compare all plans<ChevronDown strokeWidth={1.5} className={cn("size-4 transition-transform", compareOpen && "rotate-180")} /></button>
        </div>
        <div id="compare-plans" hidden={!compareOpen} className={styles.comparison}><CompareTable /></div>
      </div>
    </div>
  </Section>;
}
