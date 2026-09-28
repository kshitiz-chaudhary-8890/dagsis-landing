import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { reasons, whyCta, whyIntro } from "@/content";
import type { WhyReason } from "@/types/content";
import { cn } from "@/lib/utils";
import { ButtonLink, Section, SectionHeader } from "@/components/ui";
import { Reveal } from "@/components/shared/Reveal";
import { WhyVisual } from "./WhyVisuals";

/**
 * Bento placement (desktop, 6 columns). Row 1: the lead reason (4 cols) +
 * one card (2). Row 2: three equal cards. Reorder `reasons` in content to
 * change what goes where.
 */
const spans = ["lg:col-span-4", "lg:col-span-2", "lg:col-span-2", "lg:col-span-2", "lg:col-span-2"];

function ReasonCard({ reason, lead = false }: { reason: WhyReason; lead?: boolean }) {
  const Icon = reason.icon;
  return (
    <article
      className={cn(
        "group flex h-full gap-6 rounded-3xl bg-surface-raised p-5 ring-1 ring-ink-200/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5 hover:ring-brand-200 sm:p-6",
        lead ? "flex-col md:flex-row md:items-center" : "flex-col",
      )}
    >
      <div className={lead ? "md:order-2 md:w-[55%]" : undefined}>
        <WhyVisual id={reason.id} />
      </div>
      <div className={cn("px-1", lead && "md:order-1 md:flex-1")}>
        <span className="inline-flex size-9 items-center justify-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100 transition-transform duration-300 group-hover:-rotate-6 dark:text-brand-400">
          <Icon className="size-4.5" aria-hidden="true" />
        </span>
        <h3 className={cn("mt-4 font-semibold text-ink-900", lead ? "text-2xl" : "text-lg")}>{reason.title}</h3>
        <p className={cn("mt-2 leading-relaxed text-ink-500", lead ? "text-base" : "text-sm")}>{reason.description}</p>
      </div>
    </article>
  );
}

/**
 * Why Dagsis: a bento grid where every reason shows itself with a small
 * live illustration (sourced answer, 24h timeline, reply-time bars, channel
 * row, setup checklist), followed by a slim call to action.
 */
export function WhyDagsis() {
  return (
    <Section id="why-dagsis" tone="muted">
      <SectionHeader {...whyIntro} />

      <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-6">
        {reasons.map((r, i) => (
          <Reveal key={r.id} delay={i * 90} className={cn(spans[i] ?? "lg:col-span-2", i === 0 && "md:col-span-2")}>
            <ReasonCard reason={r} lead={i === 0} />
          </Reveal>
        ))}
      </div>

      <Reveal delay={200}>
        <div className="mt-4 flex flex-col items-start justify-between gap-5 rounded-3xl bg-surface-raised p-6 ring-1 ring-ink-200/70 sm:flex-row sm:items-center sm:p-8">
          <div>
            <h3 className="text-xl font-semibold text-ink-900">{whyCta.title}</h3>
            <p className="mt-1 text-ink-500">{whyCta.description}</p>
          </div>
          <ButtonLink href={siteConfig.links.signUp}>
            {whyCta.label} <ArrowRight className="size-4" />
          </ButtonLink>
        </div>
      </Reveal>
    </Section>
  );
}
