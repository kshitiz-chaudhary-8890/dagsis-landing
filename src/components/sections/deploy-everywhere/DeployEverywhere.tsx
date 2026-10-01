import { Plus } from "lucide-react";
import { channelsFootnote, channelsIntro } from "@/content";
import { Section } from "@/components/ui";
import { Reveal } from "@/components/shared/Reveal";
import { ChannelHub } from "./ChannelHub";
import styles from "./DeployEverywhere.module.css";

/**
 * Deploy everywhere with the channel hub beneath the section introduction.
 * Light section; glowing Dagsis orb in the centre with channel pills fanned
 * out on both sides along curved dashed connectors.
 */
export function DeployEverywhere() {
  return (
    <Section id="deploy" aria-labelledby="deploy-title" containerClassName="max-w-[1440px]" className="overflow-hidden py-8 sm:py-10">
      <div className={styles.inner}>
      <header className={styles.intro}>
        <div>
          <span className={styles.kicker}>{channelsIntro.eyebrow}</span>
          <h2 id="deploy-title" className={`section-title ${styles.title}`}>{channelsIntro.title} <em className="title-accent">{channelsIntro.titleAccent}</em></h2>
        </div>
        <p className={`section-description ${styles.description}`}>{channelsIntro.description}</p>
      </header>

      <Reveal className={styles.visual}>
        <ChannelHub />
      </Reveal>

      <div className="mt-8 flex justify-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-surface-raised px-5 py-2.5 text-sm font-semibold text-ink-800 shadow-sm ring-1 ring-ink-200">
          <Plus className="size-4 text-brand-600 dark:text-brand-400" />
          {channelsFootnote}
        </span>
      </div>
      </div>
    </Section>
  );
}
