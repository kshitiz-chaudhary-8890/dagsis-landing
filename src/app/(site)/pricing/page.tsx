import type { Metadata } from "next";
import { PricingPageContent } from "@/components/pages/pricing/PricingPage";
import { pricingPage } from "@/content/inner-pages";

export const metadata: Metadata = { title: "Pricing", description: pricingPage.description };

export default function PricingPage() {
  return <PricingPageContent />;
}
