import { featureFlags } from "@/config/site";
import {
  DeployEverywhere,
  Faq,
  Features,
  FinalCta,
  Hero,
  PricingPreview,
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
      <Features />
      <ProductShowcase />
      <DeployEverywhere />
      <WhyDagsis />
      <PricingPreview />
      <Faq />
      <FinalCta />
    </>
  );
}
