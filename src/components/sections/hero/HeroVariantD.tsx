import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui";
import styles from "./HeroVariantD.module.css";

/**
 * Design 4 — product-style centered hero.
 * Artwork: hand holding phone with Dagsis mark + crystal D + channel
 * icons (`public/images/hero/phone-channels.png`).
 */
export function HeroVariantD() {
  return (
    <section aria-label="Hero design 4" className={styles.hero}>
      <div aria-hidden="true" className={styles.wash}>
        <span className={styles.washTop} />
        <span className={styles.washLeft} />
        <span className={styles.washRight} />
        <span className={styles.spotlight} />
      </div>

      <Container className={styles.inner}>
        <div className={styles.copy}>
          <p className={`${styles.eyebrow} animate-fade-up`}>
            <Sparkles size={15} aria-hidden="true" />
            AI agents for every messaging channel
          </p>
          <h1 className={`${styles.headline} animate-fade-up`} style={{ animationDelay: "80ms" }}>
            <span className={styles.lineDark}>Meet your AI agent.</span>
            <span className={styles.lineGradient}>Live on every channel.</span>
          </h1>
          <p className={`${styles.description} animate-fade-up`} style={{ animationDelay: "160ms" }}>
            Dagsis turns your business knowledge into answers on WhatsApp, Instagram,
            your website, and more — set up in minutes, no coding required.
          </p>
          <div className={`${styles.ctaRow} animate-fade-up`} style={{ animationDelay: "240ms" }}>
            <Link href={siteConfig.links.signUp} className={styles.primaryButton}>
              Get Started Free
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link href="#agent-demo" className={styles.demoButton}>
              <span className={styles.playCircle}>
                <Play size={14} aria-hidden="true" />
              </span>
              Try the AI Demo
            </Link>
          </div>
          <p className={styles.channels}>WhatsApp&nbsp;&middot;&nbsp;Instagram&nbsp;&middot;&nbsp;Website&nbsp;&middot;&nbsp;Messenger&nbsp;&middot;&nbsp;Telegram</p>
        </div>

        <div className={`${styles.visual} animate-fade-up`} style={{ animationDelay: "200ms" }}>
          <div aria-hidden="true" className={styles.visualGlow} />
          <figure className={styles.frame}>
            <Image
              src="/images/hero/phone-channels.png"
              alt="Hand holding a phone with the Dagsis agent, surrounded by channel icons"
                width={800}
                height={1200}
              priority
              sizes="(max-width: 768px) 92vw, 880px"
              className={styles.visualImg}
            />
          </figure>
          <span aria-hidden="true" className={styles.floorShadow} />
        </div>
      </Container>
    </section>
  );
}
