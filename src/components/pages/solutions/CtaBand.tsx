import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { ButtonLink, Container } from "@/components/ui";
import { Reveal } from "@/components/shared/Reveal";
import styles from "./Page.module.css";

const demoEmail = "mailto:sales@dagsis.com?subject=Book%20a%20Dagsis%20Demo";

export function CtaBand({ title }: { title: string }) {
  return (
    <section className={styles.ctaSection} aria-labelledby="solutions-cta-title">
      <Container className="max-w-[1440px]">
        <Reveal className={styles.ctaPanel}>
          <Image
            src="/images/cta/cta-solutions.jpg"
            alt=""
            fill
            sizes="(max-width: 1440px) 94vw, 1360px"
            className={styles.ctaPhoto}
          />
          <div className={styles.ctaOverlay} aria-hidden="true" />
          <div className={styles.ctaContent}>
            <span className="section-eyebrow section-eyebrow--inverted">See it in action</span>
            <h2 id="solutions-cta-title" className={styles.ctaTitle}>{title}</h2>
            <div className={styles.ctaAction}>
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
