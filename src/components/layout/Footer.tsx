import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { industryNav, mainNav } from "@/content";
import { Container } from "@/components/ui";
import styles from "./Footer.module.css";

const find = (label: string) => mainNav.find((item) => item.label === label)!;

const columns = [
  {
    title: "Product",
    links: ["Features", "Solutions", "Pricing", "Demo Websites"].map(find),
  },
  {
    title: "Company",
    links: ["About Us", "Industries", "Contact Us"].map(find),
  },
  { title: "Industries", links: [...industryNav] },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Container className="max-w-[1440px]">
        <div className={styles.top}>
          <div className={styles.brand}>
            <Link href="/" aria-label="Dagsis.ai home" className={styles.logo}>
              <Image
                src="/brand/dagsis-wordmark-dark.png"
                alt="Dagsis.ai"
                width={520}
                height={200}
                sizes="210px"
              />
            </Link>
            <p>
              AI agents that know your business. Train, deploy and start
              answering your customers.
            </p>
          </div>

          <nav className={styles.nav} aria-label="Footer navigation">
            {columns.map((column) => (
              <div key={column.title} className={styles.column}>
                <h2>{column.title}</h2>
                <ul>
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className={styles.bottom}>
          <p>
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
