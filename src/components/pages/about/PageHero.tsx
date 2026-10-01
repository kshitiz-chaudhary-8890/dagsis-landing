import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { ButtonLink, Container } from "@/components/ui";
import { aboutPage } from "@/content/inner-pages";
import styles from "./Page.module.css";

const demoEmail = "mailto:sales@dagsis.com?subject=Book%20a%20Dagsis%20Demo";

export function PageHero() {
  return (
    <section className={styles.hero} aria-labelledby="about-hero-title">
      <Container className="max-w-[1440px]">
        <div className={styles.heroIntro}>
          <span className={styles.pill}>
            About Dagsis
          </span>
          <h1 id="about-hero-title" className={styles.heroTitle}>
            Making Every Customer <span>Conversation Count.</span>
          </h1>
          <p className={styles.heroDescription}>{aboutPage.description}</p>
          <div className={styles.heroCtas}>
            <ButtonLink href={demoEmail} size="lg">
              Book a Demo <ArrowUpRight size={18} aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href="/contact" variant="secondary" size="lg">
              Contact Us <ArrowRight size={18} aria-hidden="true" />
            </ButtonLink>
          </div>
        </div>

        <div className={styles.heroVisual}>
          <Image
            src="/images/hero/about-conversations.png"
            alt="Small business owner attending to a customer while working at a shop counter"
            fill
            priority
            sizes="(max-width: 700px) 100vw, (max-width: 1440px) 94vw, 1360px"
            className={styles.heroPhoto}
          />
          <div className={styles.heroVisualShade} aria-hidden="true" />
          <p className={styles.heroVisualStatement}>Every conversation is an opportunity.</p>
        </div>
      </Container>
    </section>
  );
}
