import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { reasons, whyCta, whyIntro } from "@/content";
import { ButtonLink, Section } from "@/components/ui";
import { BentoGrid, BentoGridItem } from "@/components/ui/BentoGrid";
import { WhyVisual } from "./WhyVisuals";
import styles from "./WhyDagsis.module.css";

export function WhyDagsis() {
  return <Section id="why-dagsis" aria-labelledby="why-title" containerClassName="max-w-[1440px]" className={`${styles.section} py-8 sm:py-10`}>
    <div className={styles.inner}>
      <header className={styles.intro}>
        <div><span className={styles.kicker}>{whyIntro.eyebrow}</span><h2 id="why-title" className={`section-title ${styles.title}`}>{whyIntro.title}</h2></div>
        <p className={`section-description ${styles.description}`}>{whyIntro.description}</p>
      </header>
      <BentoGrid className={styles.reasonGrid}>
        {reasons.map(reason => <BentoGridItem key={reason.id} data-reason={reason.id} aria-labelledby={`reason-${reason.id}`} className={styles.reasonCard} copyClassName={styles.cardCopy}
          title={<span id={`reason-${reason.id}`}>{reason.title}</span>}
          description={reason.description}
          header={<div className={styles.cardVisual}><WhyVisual id={reason.id} /></div>}
        />)}
      </BentoGrid>
      <div className={styles.ctaRow}><p>{whyCta.title}<span>{whyCta.description}</span></p><ButtonLink href={siteConfig.links.signUp}>{whyCta.label}<ArrowUpRight size={17} /></ButtonLink></div>
    </div>
  </Section>;
}
