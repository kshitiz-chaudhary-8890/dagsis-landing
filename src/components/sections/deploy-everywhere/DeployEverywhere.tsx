import { Plus } from "lucide-react";
import { channelsFootnote, channelsIntro } from "@/content";
import { Section, SectionHeader } from "@/components/ui";
import { Reveal } from "@/components/shared/Reveal";
import { ChannelHub } from "./ChannelHub";

/**
 * Deploy everywhere — reference: youratlas.com integrations
 * ("Plugs into your stack. No rip-and-replace.").
 * Light section; glowing Dagsis orb in the centre with channel pills fanned
 * out on both sides along curved dashed connectors.
 */
export function DeployEverywhere() {
  return (
    <Section id="deploy" className="overflow-hidden">
      <SectionHeader {...channelsIntro} />

      <Reveal className="mt-12">
        <ChannelHub />
      </Reveal>

      <div className="mt-8 flex justify-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-surface-raised px-5 py-2.5 text-sm font-semibold text-ink-800 shadow-sm ring-1 ring-ink-200">
          <Plus className="size-4 text-brand-600 dark:text-brand-400" />
          {channelsFootnote}
        </span>
      </div>
    </Section>
  );
}
