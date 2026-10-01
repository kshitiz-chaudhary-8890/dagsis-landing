import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { ButtonLink, Container } from "@/components/ui";
import { Reveal } from "@/components/shared/Reveal";
import { aboutPage } from "@/content/inner-pages";
import styles from "./AboutCta.module.css";

const demoEmail = "mailto:sales@dagsis.com?subject=Book%20a%20Dagsis%20Demo";

export function AboutCta() {
  return (
    <section className={styles.section} aria-labelledby="about-cta-title">
      <Container className="max-w-[1440px]">
        <Reveal className={styles.panel}>
          <Image
            src="/images/cta/cta-about.jpg"
            alt=""
            fill
            sizes="(max-width: 1440px) 94vw, 1360px"
            className={styles.photo}
          />
          <div className={styles.overlay} aria-hidden="true" />
          <div className={styles.content}>
            <span className="section-eyebrow section-eyebrow--inverted">See it in action</span>
            <h2 id="about-cta-title" className={styles.title}>{aboutPage.closing}</h2>
            <div className={styles.action}>
              <ButtonLink href={demoEmail} variant="white" size="lg">
                Book a Demo <ArrowUpRight size={18} aria-hidden="true" />
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
