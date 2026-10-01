import Image from "next/image";
import type { ReactNode } from "react";
import { Check } from "lucide-react";
import { Container } from "@/components/ui";
import styles from "./Page.module.css";

const proof = ["Start free", "No hidden fees", "Scale as you grow"];

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
          <ul className={styles.proof} aria-label="Pricing highlights">
            {proof.map((item) => (
              <li key={item}>
                <Check size={15} aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        {image && <div className={styles.heroImage}>
          <Image src={image} alt={imageAlt ?? ""} fill priority sizes="(max-width: 900px) 100vw, 45vw" className={styles.coverImage} />
        </div>}
      </div>
    </Container>
  </section>;
}
