import type { Metadata } from "next";
import { AboutPageContent } from "@/components/pages/about/AboutPage";
import { aboutPage } from "@/content/inner-pages";

export const metadata: Metadata = { title: "About Us", description: aboutPage.description };

export default function AboutPage() {
  return <AboutPageContent />;
}
