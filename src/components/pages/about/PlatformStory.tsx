import {
  Activity,
  Bot,
  Database,
  FileText,
  Globe,
  Globe2,
  History,
  MessageCircle,
  Mic,
  SlidersHorizontal,
  TrendingUp,
  User,
  Users,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui";
import { Reveal } from "@/components/shared/Reveal";
import { aboutPage } from "@/content/inner-pages";
import { ChannelBrandIcon } from "@/components/sections/features/ChannelBrandIcon";
import styles from "./PlatformStory.module.css";

type StageChip = { label: string; Icon?: LucideIcon };

type Stage = {
  step: string;
  icon: LucideIcon;
  title: string;
  description: string;
  chips: readonly StageChip[];
  brands?: boolean;
};

const stages: readonly Stage[] = [
  {
    step: "Step 01",
    icon: Database,
    title: "Knowledge Base",
    description: "Build a knowledge base from your documents, website pages and FAQs.",
    chips: [
      { label: "Documents", Icon: FileText },
      { label: "Website pages", Icon: Globe },
      { label: "FAQs", Icon: MessageCircle },
    ],
  },
  {
    step: "Step 02",
    icon: Bot,
    title: "AI Agents",
    description: "Create agents from your knowledge that speak in your brand's voice.",
    chips: [
      { label: "Role", Icon: User },
      { label: "Tone of voice", Icon: Mic },
      { label: "Behaviour", Icon: SlidersHorizontal },
    ],
  },
  {
    step: "Step 03",
    icon: Globe2,
    title: "Every Channel",
    description: "Deploy to the channels your customers already use.",
    chips: [
      { label: "WhatsApp" },
      { label: "Instagram" },
      { label: "Facebook" },
      { label: "Discord" },
      { label: "Telegram" },
      { label: "Website" },
    ],
    brands: true,
  },
  {
    step: "Step 04",
    icon: TrendingUp,
    title: "Outcomes",
    description: "Capture leads and measure how well your AI is performing.",
    chips: [
      { label: "Leads", Icon: Users },
      { label: "Analytics", Icon: Activity },
      { label: "Chat history", Icon: History },
    ],
  },
] as const;

export function PlatformStory() {
  return (
    <section className={styles.section} aria-labelledby="about-platform-title">
      <Container className="max-w-[1440px]">
        <div className={styles.layout}>
          <div className={styles.head}>
            <Reveal>
              <span className="section-eyebrow">A connected platform</span>
              <h2 id="about-platform-title" className={styles.title}>
                What We <em>Offer</em>
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className={styles.lede}>{aboutPage.offer}</p>
            </Reveal>
          </div>

          <ol className={styles.steps}>
            {stages.map((stage, index) => {
              const Icon = stage.icon;
              return (
                <Reveal key={stage.title} delay={index * 90} className={styles.stepWrap}>
                  <li className={styles.step}>
                    <span className={styles.node} aria-hidden="true">
                      <Icon size={20} />
                    </span>
                    <article className={styles.card}>
                      <span className={styles.stepLabel}>{stage.step}</span>
                      <h3>{stage.title}</h3>
                      <p>{stage.description}</p>
                      <ul className={styles.chips}>
                        {stage.chips.map((chip) => (
                          <li key={chip.label}>
                            {chip.Icon ? (
                              <chip.Icon size={13} aria-hidden="true" className={styles.chipIcon} />
                            ) : (
                              stage.brands && <ChannelBrandIcon channel={chip.label} />
                            )}
                            {chip.label}
                          </li>
                        ))}
                      </ul>
                    </article>
                  </li>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </Container>
    </section>
  );
}
