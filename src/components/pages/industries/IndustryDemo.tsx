import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui";
import { Reveal } from "@/components/shared/Reveal";
import type { Industry } from "@/content/inner-pages";
import styles from "./Page.module.css";

const demos: Record<string, { name: string; href: string; image: string; imageAlt: string }> = {
  education: {
    name: "Apex Institute",
    href: "https://university-seven-beta.vercel.app/",
    image: "/images/showcase/demo-education.webp",
    imageAlt: "Apex Institute demo website",
  },
  healthcare: {
    name: "Vitalis Health",
    href: "https://clinic-and-healthcare.vercel.app/",
    image: "/images/showcase/demo-healthcare.webp",
    imageAlt: "Vitalis Health demo website",
  },
  travel: {
    name: "Voyanta",
    href: "https://tours-travel-ochre.vercel.app/",
    image: "/images/showcase/demo-travel.webp",
    imageAlt: "Voyanta demo website",
  },
  food: {
    name: "Savora",
    href: "https://restaurants-f-b.vercel.app/",
    image: "/images/showcase/demo-restaurant-site.webp",
    imageAlt: "Savora demo website",
  },
  property: {
    name: "AUREA Estates",
    href: "https://property-ten-olive.vercel.app/",
    image: "/images/showcase/demo-realestate.webp",
    imageAlt: "AUREA Estates demo website",
  },
};

export function IndustryDemo({ industry }: { industry: Industry }) {
  const demo = demos[industry.slug];

  return (
    <section className={styles.section} aria-labelledby="industry-demo-title">
      <Container className="max-w-[1440px]">
        <div className={styles.demoSplit}>
          <Reveal className={styles.demoMedia}>
            <span className={styles.liveBadge}>
              <i /> Live demo
            </span>
            <Image
              src={demo?.image ?? "/images/showcase/demo-retail.webp"}
              alt={demo?.imageAlt ?? `${industry.name} demo website`}
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              className={styles.coverImage}
            />
          </Reveal>
          <Reveal delay={120} className={styles.demoCopy}>
            <span className="section-eyebrow">Try it live</span>
            <h2 id="industry-demo-title" className={styles.demoTitle}>
              {demo ? (
                <>Chat with the {demo.name} <em className="title-accent">demo.</em></>
              ) : (
                <>See Dagsis <em className="title-accent">in action.</em></>
              )}
            </h2>
            <p>
              {demo
                ? `Open the ${demo.name} demo site and ask anything a ${industry.name.toLowerCase()} customer would ask — the agent answers from its own knowledge.`
                : `Open any of our live demo websites and chat like a real customer — then imagine it trained on your business.`}
            </p>
            <a
              href={demo?.href ?? "/demo-websites"}
              {...(demo ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className={styles.demoLink}
            >
              {demo ? `Open ${demo.name}` : "Explore all demos"}
              <span aria-hidden="true">
                <ArrowUpRight size={16} />
              </span>
            </a>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
