import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui";
import styles from "./Hero.module.css";

/**
 * Design 1 — "Always here. Always helpful."
 * Light 2-column hero with 3D glass "D" artwork on the right.
 */
export function HeroVariantA() {
  return (
    <section aria-label="Hero design 1" className={styles.hero}>
      {/* soft peach / blue / lavender wash behind everything */}
      <div aria-hidden="true" className={styles.wash}>
        <span className={styles.peach} />
        <span className={styles.sky} />
        <span className={styles.lilac} />
      </div>

      <Container className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.copy}>
            <p className={`${styles.eyebrow} animate-fade-up`}>Your knowledge. Your AI.</p>
            <h1 className={`${styles.headline} animate-fade-up`} style={{ animationDelay: "80ms" }}>
              <span className={styles.lineDark}>Always here.</span>
              <span className={styles.lineBlue}>Always helpful.</span>
            </h1>
            <p className={`${styles.description} animate-fade-up`} style={{ animationDelay: "160ms" }}>
              Turn your business knowledge into answers,
              <br />
              wherever your customers reach you.
            </p>
            <div className={`${styles.ctaRow} animate-fade-up`} style={{ animationDelay: "240ms" }}>
              <Link href={siteConfig.links.signUp} className={styles.primaryButton}>
                Get Started Free
              </Link>
              <Link href={siteConfig.links.bookDemo} className={styles.demoLink}>
                Book a Demo
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>
            <p className={styles.channels}>WhatsApp&nbsp;&middot;&nbsp;Instagram&nbsp;&middot;&nbsp;Website</p>
          </div>

          <div className={`${styles.visual} animate-fade-up`} style={{ animationDelay: "200ms" }}>
            <div aria-hidden="true" className={styles.visualGlow} />
            <Image
              src="/images/hero/d-glass-3d.png"
              alt="Dagsis 3D glass mark"
              width={1024}
              height={1024}
              priority
              sizes="(max-width: 1024px) 70vw, 400px"
              className={styles.visualImg}
            />
            <span aria-hidden="true" className={styles.floorShadow} />
          </div>
        </div>
      </Container>
    </section>
  );
}
