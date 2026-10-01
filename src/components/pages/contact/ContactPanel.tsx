import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { ButtonLink, Container } from "@/components/ui";
import { siteConfig } from "@/config/site";
import styles from "./Page.module.css";

const demoEmail = "mailto:sales@dagsis.com?subject=Book%20a%20Dagsis%20Demo";

export function ContactPanel() {
  return <section className={styles.section}>
    <Container className="max-w-[1440px]">
      <div className={styles.contactPanel}>
        <div>
          <span className="section-eyebrow">Start a conversation</span>
          <h2 className="section-title">Tell us what your business needs.</h2>
          <p>Ask a question or request a demo. Our team will help you find the right next step.</p>
          <div className={styles.contactActions}>
            <ButtonLink href={demoEmail}>Book a Demo <ArrowUpRight size={17} aria-hidden="true" /></ButtonLink>
            <ButtonLink href={siteConfig.links.contactSales} variant="secondary">Email Us <ArrowRight size={17} aria-hidden="true" /></ButtonLink>
          </div>
        </div>
        <div className={styles.contactAside}>
          <span>Get in touch</span>
          <Link href={siteConfig.links.contactSales}>sales@dagsis.com <ArrowUpRight size={21} aria-hidden="true" /></Link>
          <p>Questions, a demo request or just curious? We&apos;re happy to help.</p>
        </div>
      </div>
    </Container>
  </section>;
}
