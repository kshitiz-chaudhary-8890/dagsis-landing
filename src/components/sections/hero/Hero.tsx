import { Container } from "@/components/ui";
import { HeroBot } from "./HeroBot";
import { HeroVariantE } from "./HeroVariantE";
import demoStyles from "./Hero.module.css";

export function Hero() {
  return (
    <>
      <HeroVariantE />

      <section id="agent-demo" aria-labelledby="agent-demo-title" className={demoStyles.demoSection}>
        <Container className="max-w-[1440px]">
          <HeroBot />
        </Container>
      </section>
    </>
  );
}
