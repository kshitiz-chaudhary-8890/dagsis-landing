import { ArrowUpRight, Check } from "lucide-react";
import type { BillingCycle, PricingPlan } from "@/types/content";
import { cn, formatPrice } from "@/lib/utils";
import styles from "./Pricing.module.css";

export function PricingCard({ plan, cycle }: { plan: PricingPlan; cycle: BillingCycle }) {
  const price = plan.price[cycle];
  const billingNote = price === 0 ? "Free to get started" : cycle === "yearly" && price !== null ? `${formatPrice(price * 12)} billed yearly` : "Billed monthly";
  const features = <ul className={styles.features}>{plan.features.map(feature => <li key={feature}><Check size={15} strokeWidth={1.5} aria-hidden="true" /><span>{feature}</span></li>)}</ul>;
  const cta = <a href={plan.cta.href} className={styles.planButton}>{plan.cta.label}<span className={styles.buttonArrow}><ArrowUpRight size={17} strokeWidth={1.5} aria-hidden="true" /></span></a>;

  if (price === null) return <article className={styles.customPlan} aria-labelledby={`plan-${plan.id}`}>
    <div><h3 id={`plan-${plan.id}`}>{plan.name}</h3><p>{plan.description}</p></div>
    {features}{cta}
  </article>;

  return <article className={cn(styles.plan, plan.highlighted && styles.featured)} aria-labelledby={`plan-${plan.id}`}>
    <div className={styles.planHeading}><h3 id={`plan-${plan.id}`}>{plan.name}</h3>{plan.badge && <span className={styles.badge}>{plan.badge}</span>}</div>
    <p className={styles.planDescription}>{plan.description}</p>
    <div className={styles.priceBlock}><p className={styles.price}><span>{formatPrice(price)}</span><small>/ month</small></p><p className={styles.billingNote}>{billingNote}</p></div>
    {cta}
    <div className={styles.inclusions}><p className={styles.listLabel}>Included with {plan.name}</p>{features}</div>
  </article>;
}
