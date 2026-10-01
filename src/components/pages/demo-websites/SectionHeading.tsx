import type { ReactNode } from "react";
import styles from "./Page.module.css";

export function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: ReactNode; description?: string }) {
  return <header className={styles.sectionHeading}>
    <div>
      <span className="section-eyebrow">{eyebrow}</span>
      <h2 className={`section-title ${styles.sectionTitle}`}>{title}</h2>
    </div>
    {description && <p className={`section-description ${styles.sectionDescription}`}>{description}</p>}
  </header>;
}
