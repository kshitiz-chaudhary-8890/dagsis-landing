import Image from "next/image";
import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { ButtonLink, Container } from "@/components/ui";
import styles from "./Page.module.css";

const demoEmail = "mailto:sales@dagsis.com?subject=Book%20a%20Dagsis%20Demo";

export function PageHero({ eyebrow, title, description, image, imageAlt }: {
  eyebrow: string;
  title: ReactNode;
  description: string;
  image?: string;
  imageAlt?: string;
}) {
  return <section className={styles.hero}>
    <Container className="max-w-[1440px]">
      <div className={`${styles.heroInner} ${image ? styles.heroSplit : ""}`}>
        <div className={styles.heroCopy}>
          <span className={styles.pill}>{eyebrow}</span>
          <h1 className={styles.heroTitle}>{title}</h1>
          <p className={styles.heroDescription}>{description}</p>
          <div className={styles.heroCtas}>
            <ButtonLink href={demoEmail} size="lg">
              Book a Demo <ArrowUpRight size={18} aria-hidden="true" />
            </ButtonLink>
          </div>
        </div>
        {image && <div className={styles.heroImage}>
          <Image src={image} alt={imageAlt ?? ""} fill priority sizes="(max-width: 900px) 100vw, 45vw" className={styles.coverImage} />
        </div>}
      </div>
    </Container>
  </section>;
}
