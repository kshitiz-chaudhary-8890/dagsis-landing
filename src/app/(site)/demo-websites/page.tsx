import type { Metadata } from "next";
import { DemoWebsitesPageContent } from "@/components/pages/demo-websites/DemoWebsitesPage";
import { demoWebsitesPage } from "@/content/inner-pages";

export const metadata: Metadata = { title: "Demo Websites", description: demoWebsitesPage.description };

export default function DemoWebsitesPage() {
  return <DemoWebsitesPageContent />;
}
