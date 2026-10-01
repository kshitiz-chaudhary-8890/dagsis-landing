import { solutionsPage } from "@/content/inner-pages";
import { CtaBand } from "./CtaBand";
import { PageHero } from "./PageHero";
import { SolutionsList } from "./SolutionsList";

export function SolutionsPageContent() {
  return <>
    <PageHero eyebrow="Solutions" title={<>Solutions for <em className="title-accent">Every Customer Conversation.</em></>} description={solutionsPage.description} />
    <SolutionsList />
    <CtaBand title={solutionsPage.closing} />
  </>;
}
