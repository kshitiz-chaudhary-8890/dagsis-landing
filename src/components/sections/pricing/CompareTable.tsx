import { Check, Minus } from "lucide-react";
import { Fragment } from "react";
import { planComparison, pricingPlans } from "@/content";
import { cn } from "@/lib/utils";

function Cell({ value }: { value: string | boolean }) {
  if (value === true) return <Check className="mx-auto size-4 text-brand-600 dark:text-brand-400" aria-label="Included" />;
  if (value === false) return <Minus className="mx-auto size-4 text-ink-300" aria-label="Not included" />;
  return <span className="text-ink-700">{value}</span>;
}

/** Feature-by-plan comparison table. Scrolls horizontally on small screens. */
export function CompareTable() {
  return (
    <div className="overflow-x-auto rounded-3xl ring-1 ring-ink-200">
      <table className="w-full min-w-[640px] text-sm">
        <thead>
          <tr className="bg-ink-50">
            <th scope="col" className="px-6 py-4 text-left font-semibold text-ink-900">
              Features
            </th>
            {pricingPlans.map((p) => (
              <th
                key={p.id}
                scope="col"
                className={cn("px-4 py-4 text-center font-semibold", p.highlighted ? "text-brand-700 dark:text-brand-300" : "text-ink-900")}
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
                  className="border-t border-ink-200 bg-surface-raised px-6 pt-6 pb-2 text-left text-xs font-semibold tracking-wider text-ink-400 uppercase"
                >
                  {group.group}
                </th>
              </tr>
              {group.rows.map((row) => (
                <tr key={row.feature} className="border-t border-ink-100">
                  <th scope="row" className="px-6 py-3.5 text-left font-medium text-ink-600">
                    {row.feature}
                  </th>
                  {pricingPlans.map((p) => (
                    <td key={p.id} className={cn("px-4 py-3.5 text-center", p.highlighted && "bg-brand-50/50")}>
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
