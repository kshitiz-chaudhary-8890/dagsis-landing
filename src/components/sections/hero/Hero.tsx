"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Container } from "@/components/ui";
import { HeroBot } from "./HeroBot";
import { HeroVariantA } from "./HeroVariantA";
import { HeroVariantB } from "./HeroVariantB";
import { HeroVariantC } from "./HeroVariantC";
import { HeroVariantD } from "./HeroVariantD";
import { HeroVariantE } from "./HeroVariantE";
import sliderStyles from "./HeroSlider.module.css";
import demoStyles from "./Hero.module.css";

const SLIDES = [
  { id: "dashboard", label: "Design 5 · Dashboard" },
  { id: "dark", label: "Design 1 · Dark centered (previous)" },
  { id: "glass", label: "Design 2 · Glass D" },
  { id: "chat", label: "Design 3 · Chat mockup" },
  { id: "product", label: "Design 4 · Product phone" },
];

/**
 * Hero slider for design review — switch between hero variants
 * to finalize the design. Prev/next arrows + dots included.
 * To ship a single design later, render that variant directly.
 */
export function Hero() {
  const [index, setIndex] = useState(0);
  const total = SLIDES.length;
  const go = (dir: 1 | -1) => setIndex((i) => (i + dir + total) % total);

  return (
    <>
      <div className={sliderStyles.sliderWrap}>
        <div key={SLIDES[index].id} className={sliderStyles.slide}>
          {index === 0 ? <HeroVariantE /> : index === 1 ? <HeroVariantC /> : index === 2 ? <HeroVariantA /> : index === 3 ? <HeroVariantB /> : <HeroVariantD />}
        </div>

        <div className={sliderStyles.controls} role="group" aria-label="Hero design switcher">
          <button
            type="button"
            onClick={() => go(-1)}
            className={sliderStyles.arrow}
            aria-label="Previous hero design"
          >
            <ChevronLeft size={16} aria-hidden="true" />
          </button>
          <span className={sliderStyles.counter}>
            {index + 1} / {total}
          </span>
          <span className={sliderStyles.dots}>
            {SLIDES.map((slide, i) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => setIndex(i)}
                title={slide.label}
                aria-label={`Show ${slide.label}`}
                aria-current={i === index}
                className={sliderStyles.dot}
                data-active={i === index}
              />
            ))}
          </span>
          <button
            type="button"
            onClick={() => go(1)}
            className={sliderStyles.arrow}
            aria-label="Next hero design"
          >
            <ChevronRight size={16} aria-hidden="true" />
          </button>
        </div>
      </div>

      <section id="agent-demo" aria-labelledby="agent-demo-title" className={demoStyles.demoSection}>
        <Container className="max-w-[1440px]">
          <HeroBot />
        </Container>
      </section>
    </>
  );
}
