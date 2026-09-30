import { ArrowUpRight } from "lucide-react";

import { demoShowcase, industryDemos } from "@/content/demos";
import { siteConfig } from "@/config/site";
import { ButtonLink, Section } from "@/components/ui";
import { DemoWebsite } from "./DemoWebsite";
import styles from "./ProductShowcase.module.css";

export function ProductShowcase() {
  return <Section id="showcase" aria-labelledby="showcase-title" containerClassName="max-w-[1440px]" className={`${styles.section} py-8 sm:py-10`}>
    <div className={styles.inner}>
      <header className={styles.intro}>
        <div><span className={styles.kicker}>{demoShowcase.eyebrow}</span><h2 id="showcase-title" className={`section-title ${styles.title}`}>{demoShowcase.title}</h2></div>
        <p className={`section-description ${styles.description}`}>{demoShowcase.description}</p>
      </header>
      <div className={styles.demoGrid}>
        {industryDemos.map(demo => <article key={demo.id} className={styles.demoCard} data-industry={demo.id} aria-labelledby={`demo-title-${demo.id}`}>
          <DemoWebsite industryId={demo.id} />
          <div className={styles.cardDetails}>
            <div><span className={styles.cardCategory}><demo.icon size={15} /> {demo.label}</span><h3 id={`demo-title-${demo.id}`}>{demo.title}</h3><p>{demo.description}</p></div>
            <ButtonLink href={demo.href} className={styles.demoCta}>{demoShowcase.cta}<ArrowUpRight size={16} /></ButtonLink>
          </div>
        </article>)}
      </div>
      <div className={styles.showcaseFooter}>
        <div className={styles.footerGuide}>
          <h3>Try a conversation.</h3>
          <ol className={styles.demoSteps} aria-label="How to try a demo">
            <li><span aria-hidden="true">1</span>Choose an industry</li>
            <li><span aria-hidden="true">2</span>Open its demo</li>
            <li><span aria-hidden="true">3</span>Ask a question</li>
          </ol>
          <p>Ask about listings, programmes, itineraries or appointments and see how the agent responds.</p>
        </div>
        <div className={styles.footerCta}>
          <div><span className={styles.footerLabel}>For your business</span><h3>{demoShowcase.closing}</h3></div>
          <ButtonLink href={siteConfig.links.bookDemo} className={styles.bookDemoCta}>Book a Demo<ArrowUpRight size={18} /></ButtonLink>
        </div>
      </div>
    </div>
  </Section>;
}
