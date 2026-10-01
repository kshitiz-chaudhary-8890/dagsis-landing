import { problemIntro, problems } from "@/content";
import { Section } from "@/components/ui";
import styles from "./Problem.module.css";

const pad = (n: number) => String(n).padStart(2, "0");

/**
 * The problem — editorial pain ledger.
 *
 * Header mirrors the demo header above it (split grid, editorial kicker,
 * oversized serif title, description right) so both sections read as one
 * language. Same 1440/1360 width and same mobile breakpoint. No motion yet.
 */
export function Problem() {
  return (
    <Section id="problem" tone="muted" containerClassName="max-w-[1440px]" className="pt-8 sm:pt-10">
      <div className={styles.inner}>
        <div className={styles.intro}>
          <div>
            <span className={styles.kicker}>{problemIntro.eyebrow}</span>
            <h2 className={`section-title ${styles.title}`}>Customers <em className="title-accent">Don&apos;t Wait.</em> Your Team Can&apos;t Be Everywhere.</h2>
          </div>
          <p className={`section-description ${styles.desc}`}>{problemIntro.description}</p>
        </div>

        <ol className="grid grid-cols-1 border-t border-ink-200 md:grid-cols-2">
          {problems.map((p, i) => (
            <li
              key={p.title}
              className={`grid grid-cols-[auto_1fr] items-start gap-x-6 border-b border-ink-200 px-2 py-9 sm:px-6 ${i % 2 === 0 ? "md:border-r" : ""}`}
            >
              <span
                aria-hidden="true"
                className={`${styles.pointNum} leading-none text-ink-900`}
              >
                {pad(i + 1)}
              </span>
              <div className="min-w-0">
                <h3 className={`${styles.pointTitle} text-ink-900`}>{p.title}</h3>
                <p className="font-description mt-2 text-ink-500">
                  {p.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
