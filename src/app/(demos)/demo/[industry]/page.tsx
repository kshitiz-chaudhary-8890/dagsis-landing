import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { industryDemos } from "@/content/demos";
import { DemoWebsite } from "@/components/sections/product-showcase/DemoWebsite";

export function generateStaticParams() { return industryDemos.map(demo => ({ industry: demo.id })); }

export default async function DemoPage({ params }: { params: Promise<{ industry: string }> }) {
  const { industry } = await params;
  const demo = industryDemos.find(item => item.id === industry);
  if (!demo) notFound();

  return <main className="min-h-screen bg-white">
    <div className="flex flex-wrap items-center justify-between gap-3 bg-[#15345b] px-5 py-4 font-sans text-xs text-white sm:px-8">
      <Link href="/#showcase" className="inline-flex min-h-8 items-center gap-2 rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"><ArrowLeft size={15} /> Back to Dagsis</Link>
      <p>{demo.title} · Sample business & preset replies</p>
    </div>
    <DemoWebsite industryId={demo.id} fullPage />
  </main>;
}
