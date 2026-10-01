import { Plus } from "lucide-react";
import { Container } from "@/components/ui";
import { SectionHeading } from "./SectionHeading";
import styles from "./Page.module.css";

export function FaqList({ items }: { items: readonly { question: string; answer: string }[] }) {
  return <section className={styles.section}>
    <Container className="max-w-[1440px]">
      <SectionHeading eyebrow="FAQs" title="Frequently Asked Questions." />
      <div className={styles.faqList}>
        {items.map((item, index) => <details key={item.question} className={styles.faqItem}>
          <summary>
            <span className={styles.faqNumber}>{String(index + 1).padStart(2, "0")}</span>
            <span>{item.question}</span>
            <Plus className={styles.faqPlus} size={20} aria-hidden="true" />
          </summary>
          <p>{item.answer}</p>
        </details>)}
      </div>
    </Container>
  </section>;
}
