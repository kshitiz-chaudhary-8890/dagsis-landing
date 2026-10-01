import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui";
import { Reveal } from "@/components/shared/Reveal";
import { industries, industriesPage } from "@/content/inner-pages";
import { SectionHeading } from "./SectionHeading";
import styles from "./Page.module.css";

export function IndustryCards() {
  return <section className={styles.section}>
    <Container className="max-w-[1440px]">
      <SectionHeading
        eyebrow="Find your fit"
        title={<>Made for the <em className="title-accent">way you work.</em></>}
        description={industriesPage.intro}
      />
      <div className={styles.zigzag}>
        {industries.map((industry, index) => (
          <Reveal key={industry.slug} delay={Math.min(index, 1) * 100}>
            <article
              className={styles.zigRow}
              data-flip={index % 2 === 1 || undefined}
            >
              <Link
                href={`/industries/${industry.slug}`}
                className={styles.rowLink}
                aria-label={`Know more about ${industry.name}`}
              />
              <div className={styles.zigMedia} aria-hidden="true">
                <Image src={industry.image} alt="" fill sizes="(max-width: 900px) 100vw, 50vw" className={styles.coverImage} />
              </div>
              <div className={styles.zigBody}>
                <span className={styles.zigTag}>Industry</span>
                <h3>{industry.name}</h3>
                <p>{industry.summary}</p>
                <span className={styles.knowLink}>
                  Know More
                  <span aria-hidden="true">
                    <ArrowUpRight size={16} />
                  </span>
                </span>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Container>
  </section>;
}
