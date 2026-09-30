import { featureFlags } from "@/config/site";
import { Section } from "@/components/ui";
import {
  DashboardMockup,
  DeployEverywhere,
  Faq,
  Features,
  FinalCta,
  Hero,
  Pricing,
  Problem,
  ProductShowcase,
  TrustedBy,
  UseCases,
  WhyDagsis,
} from "@/components/sections";

/**
 * Landing page. The order below IS the page order — reorder, add or remove
 * sections here. Copy lives in `src/content`, flags in `src/config/site.ts`.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      {featureFlags.showTrustedBy && <TrustedBy />}
      <Problem />
      <UseCases />
      <Section className="py-8 sm:py-10" containerClassName="max-w-[1440px]">
        <DashboardMockup />
      </Section>
      <ProductShowcase />
      <Features />
      <DeployEverywhere />
      <WhyDagsis />
      <Pricing />
      <Faq />
      <FinalCta />
    </>
  );
}
