import type { Industry } from "@/content/inner-pages";
import { CtaBand } from "./CtaBand";
import { FaqList } from "./FaqList";
import { IndustryDemo } from "./IndustryDemo";
import { IndustryHero } from "./IndustryHero";
import { IndustryIntroduction } from "./IndustryIntroduction";
import { IndustryUseCases } from "./IndustryUseCases";

export function IndustryPageContent({ industry }: { industry: Industry }) {
  return <>
    <IndustryHero industry={industry} />
    <IndustryIntroduction industry={industry} />
    <IndustryUseCases industry={industry} />
    <IndustryDemo industry={industry} />
    <FaqList items={industry.faqs} />
    <CtaBand title={`Ready to bring Dagsis to your ${industry.name.toLowerCase()} business?`} />
  </>;
}
