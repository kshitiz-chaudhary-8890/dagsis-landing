import { featuresPage } from "@/content/inner-pages";
import { CtaBand } from "./CtaBand";
import { FeatureGrid } from "./FeatureGrid";
import { PageHero } from "./PageHero";

export function FeaturesPageContent() {
  return <>
    <PageHero eyebrow="Features" title={<>Everything You Need to Run <em className="title-accent">AI Customer Conversations.</em></>} description={featuresPage.description} />
    <FeatureGrid />
    <CtaBand title={featuresPage.closing} />
  </>;
}
