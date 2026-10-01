import { Container } from "@/components/ui";
import { Reveal } from "@/components/shared/Reveal";
import type { Industry } from "@/content/inner-pages";
import styles from "./Page.module.css";

export function IndustryIntroduction({ industry }: { industry: Industry }) {
  return <section className={styles.section}>
    <Container className="max-w-[1440px]">
      <div className={styles.introSplit}>
        <Reveal>
          <span className="section-eyebrow">{industry.name} with Dagsis</span>
          <h2 className={styles.introTitle}>The full <em className="title-accent">picture.</em></h2>
        </Reveal>
        <Reveal delay={120}>
          <p className={styles.introText}>{industry.introduction}</p>
        </Reveal>
      </div>
    </Container>
  </section>;
}
