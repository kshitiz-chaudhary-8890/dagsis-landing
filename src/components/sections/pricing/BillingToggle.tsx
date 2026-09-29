import type { BillingCycle } from "@/types/content";
import { cn } from "@/lib/utils";
import styles from "./Pricing.module.css";

const options: { value: BillingCycle; label: string }[] = [
  { value: "monthly", label: "Monthly" },
  { value: "yearly", label: "Yearly" },
];

export function BillingToggle({ value, onChange, discountLabel }: {
  value: BillingCycle;
  onChange: (value: BillingCycle) => void;
  discountLabel?: string;
}) {
  return <div role="radiogroup" aria-label="Billing cycle" className={styles.billingToggle}>
    {options.map((option, index) => <button key={option.value} type="button" role="radio"
      aria-checked={value === option.value} tabIndex={value === option.value ? 0 : -1}
      onClick={() => onChange(option.value)}
      onKeyDown={event => {
        if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(event.key)) return;
        event.preventDefault();
        const nextIndex = event.key === "Home" ? 0 : event.key === "End" ? options.length - 1 : (index + 1) % options.length;
        onChange(options[nextIndex].value);
        const buttons = event.currentTarget.parentElement?.querySelectorAll<HTMLButtonElement>("button");
        buttons?.[nextIndex]?.focus();
      }}
      className={cn(styles.billingOption, value === option.value && styles.selectedOption)}>
      {option.label}{option.value === "yearly" && discountLabel && <span>{discountLabel}</span>}
    </button>)}
  </div>;
}
