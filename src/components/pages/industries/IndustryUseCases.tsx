import { Container } from "@/components/ui";
import { Reveal } from "@/components/shared/Reveal";
import type { Industry } from "@/content/inner-pages";
import styles from "./Page.module.css";

export function IndustryUseCases({ industry }: { industry: Industry }) {
  return <section className={`${styles.section} ${styles.roomy}`}>
    <Container className="max-w-[1440px]">
      <div className={styles.useCaseLayout}>
        <Reveal className={styles.useCaseHead}>
          <span className="section-eyebrow">Use cases</span>
          <h2 className={styles.useCaseTitle}>How {industry.name} teams use <em className="title-accent">Dagsis.</em></h2>
          <p>Four proven ways {industry.name.toLowerCase()} businesses put their AI agent to work.</p>
        </Reveal>
        <ol className={styles.timeline}>
          {industry.useCases.map((useCase, index) => (
            <Reveal key={useCase.title} delay={Math.min(index, 2) * 90}>
              <li className={styles.step}>
                <span className={styles.node} aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <article className={styles.stepCard}>
                  <h3>{useCase.title}</h3>
                  <p>{useCase.description}</p>
                </article>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </Container>
  </section>;
}
