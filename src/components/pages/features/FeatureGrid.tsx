"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Activity, ArrowLeft, ArrowRight, Bot, Database, FileText, Globe, History, SlidersHorizontal, UserPlus, Users } from "lucide-react";
import { Container } from "@/components/ui";
import { Reveal } from "@/components/shared/Reveal";
import { featuresPage } from "@/content/inner-pages";
import { SectionHeading } from "./SectionHeading";
import styles from "./Page.module.css";

const marks = [
  Database,
  Users,
  SlidersHorizontal,
  FileText,
  Bot,
  UserPlus,
  Activity,
  History,
  Globe,
] as const;

export function FeatureGrid() {
  const trackRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const [progress, setProgress] = useState(0);

  const updateProgress = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const max = track.scrollWidth - track.clientWidth;
    setProgress(max > 0 ? track.scrollLeft / max : 0);
  }, []);

  useEffect(() => {
    updateProgress();
    window.addEventListener("resize", updateProgress);
    return () => window.removeEventListener("resize", updateProgress);
  }, [updateProgress]);

  const scrollByStep = useCallback((direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>(`.${styles.card}`);
    const step = card ? card.offsetWidth + 20 : 360;
    const max = track.scrollWidth - track.clientWidth;
    if (direction === 1 && track.scrollLeft + step >= max - 8) {
      track.scrollTo({ left: 0, behavior: "smooth" });
      return;
    }
    track.scrollBy({ left: direction * step, behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      if (!pausedRef.current && document.visibilityState === "visible") scrollByStep(1);
    }, 3500);
    return () => window.clearInterval(id);
  }, [scrollByStep]);


  return <section className={styles.section}>
    <Container className="max-w-[1440px]">
      <div className={styles.carouselHead}>
        <SectionHeading eyebrow="The platform" title={<>Everything <em className="title-accent">works together.</em></>} />
        <div className={styles.controls}>
          <button type="button" aria-label="Previous features" onClick={() => scrollByStep(-1)}>
            <ArrowLeft size={18} aria-hidden="true" />
          </button>
          <button type="button" aria-label="Next features" onClick={() => scrollByStep(1)}>
            <ArrowRight size={18} aria-hidden="true" />
          </button>
        </div>
      </div>
      <Reveal delay={100}>
        <div
          ref={trackRef}
          className={styles.track}
          onScroll={updateProgress}
          onPointerEnter={() => { pausedRef.current = true; }}
          onPointerLeave={() => { pausedRef.current = false; }}
          onFocus={() => { pausedRef.current = true; }}
          onBlur={() => { pausedRef.current = false; }}
          tabIndex={0}
          role="region"
          aria-label="Platform features carousel"
        >
          {featuresPage.features.map((feature, index) => {
            const Icon = marks[index];
            return (
              <article key={feature.title} className={styles.card}>
                <span className={styles.markBadge} aria-hidden="true">
                  <Icon size={24} strokeWidth={2} />
                </span>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            );
          })}
        </div>
        <div className={styles.progress} aria-hidden="true">
          <span style={{ transform: `scaleX(${progress || 0.06})` }} />
        </div>
      </Reveal>
    </Container>
  </section>;
}
