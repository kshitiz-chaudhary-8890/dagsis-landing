import type { Metadata } from "next";
import { SolutionsPageContent } from "@/components/pages/solutions/SolutionsPage";
import { solutionsPage } from "@/content/inner-pages";

export const metadata: Metadata = { title: "Solutions", description: solutionsPage.description };

export default function SolutionsPage() {
  return <SolutionsPageContent />;
}
