import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui";
import { Reveal } from "@/components/shared/Reveal";
import { demoWebsitesPage } from "@/content/inner-pages";
import { SectionHeading } from "./SectionHeading";
import styles from "./Page.module.css";

type Demo = {
  name: string;
  tag: string;
  description: string;
  image: string;
  imageAlt: string;
  href: string;
  span: number;
};

const demos: readonly Demo[] = [
  {
    name: "AUREA Estates",
    tag: "Real Estate",
    description: "Ask AUREA about listings, prices and viewings — serious buyers are saved as leads.",
    image: "/images/showcase/demo-realestate.webp",
    imageAlt: "Real estate demo website",
    href: "https://property-ten-olive.vercel.app/",
    span: 7,
  },
  {
    name: "Apex Institute", tag: "Education", description: "Ask about courses, fees and admissions � built for student and parent enquiries.",
    image: "/images/showcase/demo-education.webp",
    imageAlt: "Education demo website",
    href: "https://university-seven-beta.vercel.app/",
    span: 5,
  },
  {
    name: "Tours & Travel", tag: "Travel", description: "Ask about packages, itineraries and bookings  -  built for travellers in any time zone.",
    image: "/images/showcase/demo-travel.webp",
    imageAlt: "Travel demo website",
    href: "https://tours-travel-ochre.vercel.app/",
    span: 5,
  },
  {
    name: "Healthcare", tag: "Clinic", description: "Ask about services, opening hours and appointments, and see how it shares general clinic information.",
    image: "/images/showcase/demo-healthcare.webp",
    imageAlt: "Healthcare demo website",
    href: "https://clinic-and-healthcare.vercel.app/",
    span: 7,
  },
  {
    name: "Restaurant", tag: "Food", description: "Ask about the menu, dietary options and reservations, right where food customers already are.",
    image: "/images/showcase/demo-restaurant-site.webp",
    imageAlt: "Savora restaurant demo website",
    href: "https://restaurants-f-b.vercel.app/",
    span: 4,
  },
  {
    name: "Property Plus", tag: "Property", description: "Browse listings and ask about pricing, availability and site visits on another live property demo.",
    image: "/images/showcase/demo-property-plus.webp",
    imageAlt: "Horizon Living property demo website",
    href: "http://prop4-qcpm.vercel.app/",
    span: 4,
  },
  {
    name: "Prop Homes", tag: "Property", description: "A third live property site  -  compare how the same agent brain adapts to a different catalogue.",
    image: "/images/showcase/demo-prop-homes.webp",
    imageAlt: "Property demo website",
    href: "https://prop3-eight.vercel.app/",
    span: 4,
  },
];

export function DemoCards() {
  return <section className={styles.section}>
    <Container className="max-w-[1440px]">
      <SectionHeading eyebrow="Explore the demos" title={<>Try a <em className="title-accent">real conversation.</em></>} description={demoWebsitesPage.intro} />
      <div className={styles.demoList}>
        {demos.map((demo, index) => (
          <Reveal
            key={demo.href}
            delay={Math.min(index, 2) * 90}
          >
            <article className={styles.demoRow}>
              <a
                href={demo.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.rowLink}
                aria-label={`Open ${demo.name} live demo`}
              />
              <a
                href={demo.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.demoThumb}
                aria-hidden="true"
                tabIndex={-1}
              >
                <Image src={demo.image} alt={demo.imageAlt} fill sizes="(max-width: 700px) 100vw, 340px" className={styles.coverImage} />
                <span className={styles.liveBadge}>
                  <i /> Live
                </span>
              </a>
              <div className={styles.demoBody}>
                <div className={styles.demoText}>
                  <span className={styles.demoTag}>{demo.tag}</span>
                  <h3>{demo.name}</h3>
                  <p>{demo.description}</p>
                </div>
                <span className={styles.demoLink}>
                  Open live demo
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
