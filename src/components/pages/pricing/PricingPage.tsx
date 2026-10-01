import { pricingPage } from "@/content/inner-pages";
import { PageHero } from "./PageHero";
import { PlanComparison } from "./PlanComparison";
import { PricingPlans } from "./PricingPlans";

export function PricingPageContent() {
  return (
    <>
      <PageHero eyebrow="Pricing" title={<>Simple Pricing That <em className="title-accent">Grows With Your Business.</em></>} description={pricingPage.description} />
      <PricingPlans />
      <PlanComparison />
    </>
  );
}
