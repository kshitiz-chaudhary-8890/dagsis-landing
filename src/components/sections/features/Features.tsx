import { featureBackgrounds, featureChips, features, featuresIntro } from "@/content";
import { Container, SectionHeader } from "@/components/ui";
import { Marquee } from "@/components/shared/Marquee";
import { Reveal } from "@/components/shared/Reveal";
import { FeatureCard, PhotoCard } from "./FeatureCards";

/**
 * Core platform features — reference: dagis.framer.website ("Who this
 * platform is built for").
 * Centred heading, then an edge-to-edge ticker that alternates frosted
 * feature cards (on brand gradients) with a product scene for each feature,
 * then a row of pills.
 *
 * Motion: the ticker glides left at 25 px/s, eases to 10% speed on hover,
 * and can be dragged / scrolled sideways (see shared/Marquee).
 */
export function Features() {
  return (
    <section id="features" className="relative bg-surface py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeader {...featuresIntro} />
        </Reveal>
      </Container>

      <Reveal className="mt-14">
        <Marquee speed={25} gap="10px">
          {features.flatMap((f, i) => [
            <FeatureCard key={f.title} feature={f} background={featureBackgrounds[i % featureBackgrounds.length]} />,
            <PhotoCard key={`${f.title}-image`} src={f.image.src} alt={f.image.alt} />,
          ])}
        </Marquee>
      </Reveal>

      <Container>
        <Reveal delay={150}>
          <ul className="mt-12 flex flex-wrap justify-center gap-2.5">
            {featureChips.map((chip) => (
              <li key={chip} className="rounded-full bg-ink-100 px-4 py-1.5 text-sm font-medium text-ink-700">
                {chip}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
