import { PageHero } from "./PageHero";
import { OurStory } from "./OurStory";
import { Principles } from "./Principles";
import { FounderStory } from "./FounderStory";
import { PlatformStory } from "./PlatformStory";
import { AboutCta } from "./AboutCta";

export function AboutPageContent() {
  return <>
    <PageHero />
    <OurStory />
    <Principles />
    <FounderStory />
    <PlatformStory />
    <AboutCta />
  </>;
}
