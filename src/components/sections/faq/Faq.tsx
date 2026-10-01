import { ArrowUpRight, Plus } from "lucide-react";
import { siteConfig } from "@/config/site";
import { faqGroups, faqIntro } from "@/content/faq";
import { ButtonLink, Section } from "@/components/ui";
import styles from "./Faq.module.css";

export function Faq() {
  return <Section id="faq" aria-labelledby="faq-title" containerClassName="max-w-[1440px]" className={`${styles.section} py-8 sm:py-10`}>
    <div className={styles.inner}>
      <header className={styles.intro}>
        <div><span className={styles.kicker}>{faqIntro.eyebrow}</span><h2 id="faq-title" className={`section-title ${styles.title}`}>Frequently Asked <em className="title-accent">Questions.</em></h2></div>
        <p className={`section-description ${styles.description}`}>{faqIntro.description}</p>
      </header>
      <div className={styles.layout}>
        <aside className={styles.sidebar}>
          <nav className={styles.topicNav} aria-label="FAQ topics">
            <p>Browse by topic</p>
            {faqGroups.map(group => <a href={`#faq-${group.id}`} key={group.id}><span>{group.title}</span><span className={styles.topicCount}>{group.items.length}<span className="sr-only"> questions</span></span></a>)}
          </nav>
          <div className={styles.help}>
            <h3>Still have questions?</h3>
            <p>Book a demo and talk through your business with our team.</p>
            <ButtonLink href={siteConfig.links.bookDemo} className={styles.helpCta}>Book a Demo<ArrowUpRight size={17} aria-hidden="true" /></ButtonLink>
          </div>
        </aside>
        <div className={styles.questions}>
          {faqGroups.map((group, groupIndex) => <section key={group.id} id={`faq-${group.id}`} className={styles.group} aria-labelledby={`faq-heading-${group.id}`}>
            <h3 id={`faq-heading-${group.id}`}>{group.title}</h3>
            <div className={styles.groupItems}>
              {group.items.map((item, itemIndex) => <details key={item.question} className={styles.item} open={groupIndex === 0 && itemIndex === 0}>
                <summary><span>{item.question}</span><span className={styles.expandMark}><Plus size={17} strokeWidth={1.5} aria-hidden="true" /></span></summary>
                <div className={styles.answer}><p>{item.answer}</p></div>
              </details>)}
            </div>
          </section>)}
        </div>
      </div>
    </div>
  </Section>;
}
