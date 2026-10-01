import { industriesPage } from "@/content/inner-pages";
import { CtaBand } from "./CtaBand";
import { IndustryCards } from "./IndustryCards";
import { PageHero } from "./PageHero";

export function IndustriesPageContent() {
  return <>
    <PageHero eyebrow="Industries" title={<>AI Customer Conversations, <em className="title-accent">Built for Your Industry.</em></>} description={industriesPage.description} />
    <IndustryCards />
    <CtaBand title="See how Dagsis fits your business." />
  </>;
}
