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
            <h2 className={`section-title ${styles.title}`}>{problemIntro.title}</h2>
          </div>
          <p className={`section-description ${styles.desc}`}>{problemIntro.description}</p>
        </div>

        <ol className="border-t border-ink-200">
          {problems.map((p, i) => (
            <li
              key={p.title}
              className="grid grid-cols-[auto_1fr] items-center gap-x-6 px-2 py-8 sm:grid-cols-[72px_1fr] sm:px-4"
            >
              <span
                aria-hidden="true"
                className="font-serif text-4xl leading-none text-ink-900 sm:text-5xl"
              >
                {pad(i + 1)}
              </span>
              <div className="min-w-0">
                <h3 className={`${styles.pointTitle} text-ink-900`}>{p.title}</h3>
                <p className="font-description mt-2 max-w-2xl text-ink-500">
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
