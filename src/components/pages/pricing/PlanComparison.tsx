import { ArrowRight, Check, X } from "lucide-react";
import { ButtonLink, Container } from "@/components/ui";
import styles from "./Page.module.css";

type PlanName = "Free" | "Pro" | "Business" | "Custom";
type CellValue = string | boolean;

const planNames: PlanName[] = ["Free", "Pro", "Business", "Custom"];

const rows: { label: string; values: Record<PlanName, CellValue> }[] = [
  { label: "AI agents", values: { Free: "1", Pro: "5", Business: "25", Custom: "Unlimited" } },
  { label: "Credits", values: { Free: "500", Pro: "5,000", Business: "50,000", Custom: "Custom" } },
  { label: "Upload limit", values: { Free: "20 MB", Pro: "100 MB", Business: "500 MB", Custom: "Discuss" } },
  { label: "Chat history", values: { Free: true, Pro: true, Business: true, Custom: "Discuss" } },
  { label: "Detailed analytics", values: { Free: false, Pro: true, Business: true, Custom: "Discuss" } },
  { label: "Team members", values: { Free: false, Pro: "Up to 5", Business: "Unlimited", Custom: "Unlimited" } },
  { label: "Organization workspace", values: { Free: false, Pro: "1", Business: "1", Custom: "Discuss" } },
  { label: "White-label solution", values: { Free: false, Pro: false, Business: false, Custom: true } },
  { label: "Custom integrations", values: { Free: false, Pro: false, Business: false, Custom: true } },
  { label: "Dedicated manager", values: { Free: false, Pro: false, Business: false, Custom: true } },
  { label: "SLA & contracts", values: { Free: false, Pro: false, Business: false, Custom: true } },
];

function ComparisonValue({ value }: { value: CellValue }) {
  if (typeof value === "string") return <span>{value}</span>;

  return value ? (
    <span className={styles.included}>
      <Check size={16} strokeWidth={2.7} aria-hidden="true" />
      <span className="sr-only">Included</span>
    </span>
  ) : (
    <span className={styles.notIncluded}>
      <X size={16} strokeWidth={2.5} aria-hidden="true" />
      <span className="sr-only">Not included</span>
    </span>
  );
}

export function PlanComparison() {
  return (
    <section className={styles.compareSection} aria-labelledby="compare-title">
      <Container className="max-w-[1440px]">
        <div className={styles.compareHead}>
          <span className={styles.compareEyebrow}>Compare plans</span>
          <h2 id="compare-title" className={styles.compareTitle}>Every plan, <em>side by side.</em></h2>
          <p className={styles.compareCopy}>The details that matter when you choose.</p>
        </div>

        <div className={styles.compareScroll} role="region" aria-label="Plan comparison table" tabIndex={0}>
          <table className={styles.compareTable} aria-label="Plan feature comparison">
            <thead>
              <tr>
                <th scope="col" className={styles.featureHeader}>What&apos;s included</th>
                {planNames.map((name) => (
                  <th
                    key={name}
                    scope="col"
                  >
                    <span className={styles.planHeading}>{name}</span>
                    {name === "Pro" && <span className={styles.popularLabel}>Most popular</span>}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.label}>
                  <th scope="row" className={styles.featureName}>{row.label}</th>
                  {planNames.map((name) => (
                    <td key={name}>
                      <ComparisonValue value={row.values[name]} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className={styles.compareFooter}>
          <p>Custom plan details are confirmed with sales.</p>
          <ButtonLink href="/contact-sales">
            Talk to sales <ArrowRight size={17} aria-hidden="true" />
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
