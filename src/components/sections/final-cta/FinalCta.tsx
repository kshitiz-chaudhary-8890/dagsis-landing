import { ArrowRight } from "lucide-react";
import { featureFlags } from "@/config/site";
import { finalCtaContent } from "@/content";
import { ButtonLink, Container } from "@/components/ui";
import { Reveal } from "@/components/shared/Reveal";

/** Closing call to action: a flat brand panel, headline left, actions right. */
export function FinalCta() {
  const c = finalCtaContent;
  // Brief: only claim "no credit card" if it's accurate, so it's behind a flag.
  const note = featureFlags.noCreditCardRequired ? c.noCardNote : c.defaultNote;

  return (
    <section id="book-demo" className="bg-surface pt-8 pb-20 sm:pb-28">
      <Container>
        <Reveal>
          <div className="grid grid-cols-1 items-end gap-10 rounded-[2rem] bg-brand-600 px-6 py-14 sm:px-12 sm:py-16 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <h2 className="max-w-xl text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
                {c.title}
              </h2>
              <p className="mt-4 text-lg text-white/85">{note}</p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <ButtonLink href={c.primaryCta.href} variant="white" size="lg" className="w-full sm:w-auto">
                {c.primaryCta.label}
                <ArrowRight className="size-4" />
              </ButtonLink>
              <ButtonLink href={c.secondaryCta.href} variant="outline-light" size="lg" className="w-full sm:w-auto">
                {c.secondaryCta.label}
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
