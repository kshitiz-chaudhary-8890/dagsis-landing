"use client";

import { useEffect, useRef, useState } from "react";
import { Check, RotateCcw, ArrowRight, Sparkles } from "lucide-react";
import { heroContent } from "@/content";
import { useReducedMotion } from "@/hooks/useMediaQuery";
import { HeroChatPreview } from "./HeroChatPreview";
import { HeroRobot } from "./HeroRobot";
import styles from "./HeroBot.module.css";

export type DemoPhase = "ready" | "question" | "thinking" | "reply" | "complete";
const sources = [
  { key: "website", text: "Answer customer questions instantly" },
  { key: "documents", text: "Help shoppers find the right product" },
  { key: "faqs", text: "Capture leads and booking enquiries" },
];
const nextPhase = { question: "thinking", thinking: "reply", reply: "complete" } as const;
const duration = { question: 1400, thinking: 1900, reply: 1600 };

function AgentDemo({ selected, onReplay }: { selected: number; onReplay: () => void }) {
  const sample = heroContent.agentCard.samples[selected];
  const [phase, setPhase] = useState<DemoPhase>("ready");
  const previewRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const visiblePhase = reduced ? "complete" : phase;
  const answered = visiblePhase === "reply" || visiblePhase === "complete";

  useEffect(() => {
    if (reduced) return;
    const preview = previewRef.current;
    if (!preview) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setPhase("question");
        observer.disconnect();
      }
    }, { threshold: 0.35 });
    observer.observe(preview);
    return () => observer.disconnect();
  }, [reduced]);

  useEffect(() => {
    if (reduced || phase === "ready" || phase === "complete") return;
    const timer = window.setTimeout(() => setPhase(nextPhase[phase]), duration[phase]);
    return () => window.clearTimeout(timer);
  }, [phase, reduced]);

  return (
    <>
      <div className={styles.stage} data-phase={visiblePhase}>
        <div className={styles.sourceColumn}>
          <div className={styles.sourceCards}>
            {sources.map(({ key, text }) => {
              const active = key === sample.source && (visiblePhase === "thinking" || answered);
              return (
                <div key={key} className={styles.sourceCard} data-active={active}>
                  <span className={styles.sourceName}>{text}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.agent}>
          <div className={styles.glow} aria-hidden="true" />
          <div className={styles.halo} aria-hidden="true" />
          <div className={styles.orbit} aria-hidden="true" />
          <HeroRobot thinking={visiblePhase === "thinking"} />
          <span className={styles.status}><span /> Dagsis Agent</span>
          <div className={styles.agentActivity}>
            {visiblePhase === "thinking" ? <><Sparkles size={13} aria-hidden="true" />Finding the right answer</> : answered ? <><Check size={13} aria-hidden="true" />Answer delivered</> : <>Ready for your customers</>}
          </div>
          <p className={styles.agentCaption}>Trained on your knowledge.<br /><span>Ready for every conversation.</span></p>
        </div>
        <div className={styles.chatColumn} ref={previewRef}>
          <HeroChatPreview sample={sample} phase={visiblePhase} />
          <p className={styles.knowledgeNote}><Sparkles size={12} aria-hidden="true" />An example of your agent at work</p>
        </div>
      </div>
      <div className={styles.flowFooter}>
        <ol className={styles.flowSteps} aria-label="Example conversation progress">
          <li data-active={visiblePhase === "question" || visiblePhase === "ready"}><span>{visiblePhase !== "ready" && visiblePhase !== "question" ? <Check size={11} aria-hidden="true" /> : "1"}</span>Customer asks</li>
          <li aria-hidden="true" className={styles.flowArrow}><ArrowRight size={14} /></li>
          <li data-active={visiblePhase === "thinking"}><span>{answered ? <Check size={11} aria-hidden="true" /> : "2"}</span>Agent uses your knowledge</li>
          <li aria-hidden="true" className={styles.flowArrow}><ArrowRight size={14} /></li>
          <li data-active={answered}><span>{answered ? <Check size={11} aria-hidden="true" /> : "3"}</span>Reply delivered</li>
        </ol>
        <button type="button" className={styles.replayButton} onClick={() => { previewRef.current?.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "center" }); onReplay(); }}><RotateCcw size={13} aria-hidden="true" />Replay example</button>
      </div>
    </>
  );
}

export function HeroBot() {
  const [run, setRun] = useState(0);
  const selected = 0;
  return (
    <div className={styles.experience}>
      <div className={styles.demoIntro}>
        <div>
          <span className={styles.demoKicker}>See Dagsis in action</span>
          <h2 id="agent-demo-title" className={`section-title ${styles.demoTitle}`}>Your knowledge. <span>Their favorite chat.</span></h2>
        </div>
        <p className={`section-description ${styles.demoDesc}`}>Watch your agent answer straight from your data, <span className="desc-accent">live on WhatsApp.</span></p>
      </div>
      <AgentDemo key={`${selected}-${run}`} selected={selected} onReplay={() => setRun((value) => value + 1)} />
    </div>
  );
}
