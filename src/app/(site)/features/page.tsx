import type { Metadata } from "next";
import { FeaturesPageContent } from "@/components/pages/features/FeaturesPage";
import { featuresPage } from "@/content/inner-pages";

export const metadata: Metadata = { title: "Features", description: featuresPage.description };

export default function FeaturesPage() {
  return <FeaturesPageContent />;
}
