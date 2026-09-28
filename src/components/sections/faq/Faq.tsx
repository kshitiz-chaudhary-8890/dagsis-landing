import { Plus } from "lucide-react";
import { siteConfig } from "@/config/site";
import { faqIntro, faqs } from "@/content";
import { ButtonLink, Section, SectionHeader } from "@/components/ui";

/**
 * FAQ — reference: joinboardly.com
 * Centred heading, single narrow column, each question in its own card.
 * Uses native <details name="faq"> so only one opens at a time — no JS needed.
 */
export function Faq() {
  return (
    <Section id="faq" tone="muted">
      <SectionHeader {...faqIntro} />

      <div className="mx-auto mt-12 max-w-2xl space-y-3">
        {faqs.map((f) => (
          <details
            key={f.question}
            name="faq"
            className="faq-item group rounded-2xl bg-surface-raised px-5 shadow-sm ring-1 ring-ink-200/70 transition-shadow open:shadow-md sm:px-6"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-4 text-left font-medium text-ink-900 [&::-webkit-details-marker]:hidden">
              {f.question}
              <Plus className="size-5 shrink-0 text-ink-500 transition-transform duration-300 group-open:rotate-45 group-open:text-brand-600" />
            </summary>
            <p className="pb-5 pr-8 leading-relaxed text-ink-500">{f.answer}</p>
          </details>
        ))}
      </div>

      <div className="mt-10 text-center">
        <p className="text-ink-500">Still have questions?</p>
        <ButtonLink href={siteConfig.links.bookDemo} variant="secondary" className="mt-4">
          Talk to our team
        </ButtonLink>
      </div>
    </Section>
  );
}
