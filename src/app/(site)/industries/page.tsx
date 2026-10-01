import type { Metadata } from "next";
import { IndustriesPageContent } from "@/components/pages/industries/IndustriesPage";
import { industriesPage } from "@/content/inner-pages";

export const metadata: Metadata = { title: "Industries", description: industriesPage.description };

export default function IndustriesPage() {
  return <IndustriesPageContent />;
}
