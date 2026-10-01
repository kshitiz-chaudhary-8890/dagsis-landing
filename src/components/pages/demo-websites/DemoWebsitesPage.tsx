import { demoWebsitesPage } from "@/content/inner-pages";
import { CtaBand } from "./CtaBand";
import { DemoCards } from "./DemoCards";
import { PageHero } from "./PageHero";

export function DemoWebsitesPageContent() {
  return <>
    <PageHero eyebrow="Demo websites" title={<>See Dagsis <em className="title-accent">in Action.</em></>} description={demoWebsitesPage.description} />
    <DemoCards />
    <CtaBand title={demoWebsitesPage.closing} />
  </>;
}
