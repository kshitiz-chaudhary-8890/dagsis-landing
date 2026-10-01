import Image from "next/image";
import { Container } from "@/components/ui";
import { Reveal } from "@/components/shared/Reveal";
import { aboutPage } from "@/content/inner-pages";
import styles from "./FounderStory.module.css";

export function FounderStory() {
  const founder = aboutPage.founder;
  return (
    <section className={styles.section} aria-labelledby="about-founder-title">
      <Container className="max-w-[1440px]">
        <div className={styles.layout}>
          <Reveal className={styles.photoWrap}>
            <div className={styles.photo}>
              <Image
                src={founder.photo}
                alt={`Portrait of ${founder.name}, ${founder.role} of Dagsis`}
                fill
                sizes="(max-width: 900px) 100vw, 40vw"
              />
            </div>
          </Reveal>

          <Reveal className={styles.letter} delay={140}>
            <span className="section-eyebrow">A note from our founder</span>
            <h2 id="about-founder-title" className={styles.title}>Meet Our <em>Founder and CEO</em></h2>
            <blockquote className={styles.quote}>“{founder.quote}”</blockquote>
            <div className={styles.signature}>
              <strong>{founder.name}</strong>
              <span>{founder.role}</span>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
