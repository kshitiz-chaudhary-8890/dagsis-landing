import { ArrowRight, ArrowDown, Sparkles } from "lucide-react";
import { heroContent } from "@/content";
import { ButtonLink, Container } from "@/components/ui";
import { HeroGradient } from "./HeroGradient";
import styles from "./HeroVariantC.module.css";

/**
 * Design 1 — previous dark centered hero (restored from `design/hero-backup/`).
 * "Your Business, Answering Customers 24/7." with purple atmosphere.
 * The interactive agent demo lives below the slider and is shared.
 */
export function HeroVariantC() {
  const c = heroContent;
  return (
    <section aria-label="Hero design 1" className={styles.hero}>
      <div aria-hidden="true" className={styles.atmosphere}><HeroGradient /></div>
      <Container className={`${styles.introContent} relative z-10`}>
        <div className="mx-auto text-center">
          <p className={`${styles.eyebrow} animate-fade-up`}><Sparkles size={14} aria-hidden="true" />{c.eyebrow}</p>
          <h1 className={`${styles.headline} animate-fade-up`}>
            <span className={styles.firstLine}><span>{c.titleStart}</span>{" "}<span>{c.titleEnd}</span></span>
            <span className={styles.titleAccent}>{c.titleAccent}</span>
          </h1>
          <p className={`${styles.description} animate-fade-up mx-auto mt-6 max-w-xl text-base leading-relaxed sm:text-lg`} style={{ animationDelay: "120ms" }}>
            {c.description}
          </p>
          <div className="animate-fade-up mt-7 flex flex-wrap items-center justify-center gap-3" style={{ animationDelay: "220ms" }}>
            <ButtonLink href={c.primaryCta.href} size="lg" className={styles.primaryButton}>
              {c.primaryCta.label}<ArrowRight className="ml-1 size-4" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href={c.secondaryCta.href} variant="outline-light" size="lg" className={styles.secondaryButton}>
              {c.secondaryCta.label}
            </ButtonLink>
          </div>
        </div>
      </Container>
      <a href="#agent-demo" className={styles.scrollHint}>Meet your AI agent<ArrowDown size={15} aria-hidden="true" /></a>
    </section>
  );
}
