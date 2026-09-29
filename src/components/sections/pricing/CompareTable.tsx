import { Check, Minus } from "lucide-react";
import { Fragment } from "react";
import { planComparison, pricingPlans } from "@/content";
import { cn } from "@/lib/utils";
import styles from "./Pricing.module.css";

function Cell({ value }: { value: string | boolean }) {
  if (value === true) return <><Check size={16} className={styles.included} aria-hidden="true" /><span className="sr-only">Included</span></>;
  if (value === false) return <><Minus size={16} className={styles.excluded} aria-hidden="true" /><span className="sr-only">Not included</span></>;
  return <span>{value}</span>;
}

/** Feature-by-plan comparison table. Scrolls horizontally on small screens. */
export function CompareTable() {
  return (
    <div className={styles.tableScroll} role="region" aria-label="Plan comparison" tabIndex={0}>
      <table className={styles.table}>
        <caption className="sr-only">Features included in each Dagsis plan</caption>
        <thead>
          <tr>
            <th scope="col">
              Features
            </th>
            {pricingPlans.map((p) => (
              <th
                key={p.id}
                scope="col"
                className={cn(p.highlighted && styles.recommended)}
              >
                {p.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {planComparison.map((group) => (
            <Fragment key={group.group}>
              <tr>
                <th
                  colSpan={pricingPlans.length + 1}
                  scope="colgroup"
                  className={styles.group}
                >
                  {group.group}
                </th>
              </tr>
              {group.rows.map((row) => (
                <tr key={row.feature}>
                  <th scope="row">
                    {row.feature}
                  </th>
                  {pricingPlans.map((p) => (
                    <td key={p.id} className={cn(p.highlighted && styles.recommended)}>
                      <Cell value={row.values[p.id] ?? false} />
                    </td>
                  ))}
                </tr>
              ))}
            </Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}
