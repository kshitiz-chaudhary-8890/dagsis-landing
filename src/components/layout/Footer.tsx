import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { footerColumns } from "@/content";
import { Container } from "@/components/ui";
import styles from "./Footer.module.css";

export function Footer() {
  const year = new Date().getFullYear();
  const pages = footerColumns.find(column => column.title === "Legal")?.links ?? [];
  const socials = [
    { label: "X / Twitter", href: siteConfig.social.twitter },
    { label: "LinkedIn", href: siteConfig.social.linkedin },
    { label: "Contact", href: siteConfig.links.contactSales },
  ];

  return <footer className={styles.footer}>
    <Container className="max-w-[1440px]">
      <div className={styles.main}>
        <div className={styles.brand}>
          <Link href="/" aria-label={`${siteConfig.name}.ai home`} className={styles.logo}><Image src="/brand/dagsis-footer-reference.png" alt="Dagsis.ai — Platform for your AI solutions" width={5200} height={2000} sizes="250px" /></Link>
          <p>AI agents that know your business. Train, deploy and start answering your customers.<br /><a href={siteConfig.links.signUp}>Start for Free<ArrowUpRight size={16} strokeWidth={1.5} aria-hidden="true" /></a></p>
        </div>
        <nav className={styles.navigation} aria-label="Footer navigation">
          <div className={styles.column}><h2>Pages</h2><ul>{pages.map(page => <li key={page.label}>{page.href === "#" ? <span className={styles.unavailable} aria-disabled="true" title="This page is not available yet">{page.label}</span> : <Link href={page.href}>{page.label}</Link>}</li>)}</ul></div>
          <div className={styles.column}><h2>Socials</h2><ul>{socials.map(social => <li key={social.label}><a href={social.href} target={social.href.startsWith("https://") ? "_blank" : undefined} rel={social.href.startsWith("https://") ? "noopener noreferrer" : undefined}>{social.label}<ArrowUpRight size={15} strokeWidth={1.5} aria-hidden="true" /></a></li>)}</ul></div>
        </nav>
      </div>
      <div className={styles.copyright}><p>&copy; {year} {siteConfig.name}. All rights reserved.</p></div>
    </Container>
  </footer>;
}
