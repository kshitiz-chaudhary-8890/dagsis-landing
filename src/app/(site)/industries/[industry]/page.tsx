import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { IndustryPageContent } from "@/components/pages/industries/IndustryDetailPage";
import { industries } from "@/content/inner-pages";

type Props = { params: Promise<{ industry: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return industries.map(({ slug }) => ({ industry: slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { industry: slug } = await params;
  const industry = industries.find((item) => item.slug === slug);
  if (!industry) notFound();
  return { title: `${industry.name} Industry`, description: industry.subtitle };
}

export default async function IndustryDetailPage({ params }: Props) {
  const { industry: slug } = await params;
  const industry = industries.find((item) => item.slug === slug);
  if (!industry) notFound();
  return <IndustryPageContent industry={industry} />;
}
