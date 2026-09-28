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
  Testimonial,
  TrustedBy,
  UseCases,
  VideoSection,
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
      <VideoSection />
      <Features />
      <ProductShowcase />
      <DeployEverywhere />
      <WhyDagsis />
      {featureFlags.showTestimonial && <Testimonial />}
      <PricingPreview />
      <Faq />
      <FinalCta />
    </>
  );
}
