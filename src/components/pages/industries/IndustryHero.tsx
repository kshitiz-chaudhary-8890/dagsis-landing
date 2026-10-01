import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { ButtonLink, Container } from "@/components/ui";
import type { Industry } from "@/content/inner-pages";
import styles from "./Page.module.css";

const demoEmail = "mailto:sales@dagsis.com?subject=Book%20a%20Dagsis%20Demo";

export function IndustryHero({ industry }: { industry: Industry }) {
  return (
    <section className={styles.detailHero} aria-labelledby="industry-hero-title">
      <Container className="max-w-[1440px]">
        <div className={styles.detailHeroCopy}>
          <span className={styles.pill}>Industries</span>
          <h1 id="industry-hero-title" className={styles.detailHeroTitle}>
            {industry.name}
          </h1>
          <p className={styles.detailHeroSub}>{industry.subtitle}</p>
          <div className={styles.heroCtas}>
            <ButtonLink href={demoEmail} size="lg">
              Book a Demo <ArrowUpRight size={18} aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href="/contact" variant="secondary" size="lg">
              Contact Us <ArrowRight size={18} aria-hidden="true" />
            </ButtonLink>
          </div>
        </div>
        <div className={styles.detailHeroVisual}>
          <Image
            src={industry.image}
            alt={industry.imageAlt}
            fill
            priority
            sizes="(max-width: 700px) 100vw, (max-width: 1440px) 94vw, 1360px"
            className={styles.heroPhoto}
          />
        </div>
      </Container>
    </section>
  );
}
