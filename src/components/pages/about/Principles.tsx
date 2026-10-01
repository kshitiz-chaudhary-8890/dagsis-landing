import { ShieldCheck, SlidersHorizontal, Sparkles, TrendingUp } from "lucide-react";
import { Container } from "@/components/ui";
import { Reveal } from "@/components/shared/Reveal";
import { aboutPage } from "@/content/inner-pages";
import styles from "./Principles.module.css";

const beliefs = [
  { icon: ShieldCheck },
  { icon: Sparkles },
  { icon: TrendingUp },
  { icon: SlidersHorizontal },
] as const;

export function Principles() {
  return (
    <section className={styles.section} aria-labelledby="about-principles-title">
      <Container className="max-w-[1440px]">
        <Reveal className={styles.head}>
          <span className="section-eyebrow">What guides us</span>
          <h2 id="about-principles-title" className={styles.title}>
            What We <em>Believe</em>
          </h2>
        </Reveal>

        <div className={styles.grid}>
          {beliefs.map(({ icon: Icon }, index) => {
            const belief = aboutPage.beliefs[index];
            return (
              <Reveal key={belief.title} delay={index * 100} className={styles.cellWrap}>
                <article className={styles.cell}>
                  <span className={styles.badge}>
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <h3>{belief.title}</h3>
                  <p>{belief.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
