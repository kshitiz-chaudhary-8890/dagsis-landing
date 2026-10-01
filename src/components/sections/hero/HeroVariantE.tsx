"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Play,
  Sparkles,
  Check,
  Inbox,
  Bot,
  BookOpen,
  BarChart3,
  Settings,
  FileText,
  CheckCheck,
  Send,
} from "lucide-react";
import { heroContent } from "@/content";
import { ButtonLink, Container } from "@/components/ui";
import { LogoMark } from "@/components/shared/Logo";
import { ChannelBrandIcon } from "@/components/sections/features/ChannelBrandIcon";
import styles from "./HeroVariantE.module.css";

/* Demo data — sirf product window ke liye, apne hisaab se edit kar lo */
const kpis = [
  { label: "Conversations handled", value: "1,284", delta: "+18%", points: "0,26 14,22 28,24 42,16 56,18 70,9 84,11 100,3" },
  { label: "Avg. first reply", value: "2.1s", delta: "-0.6s", points: "0,6 14,10 28,8 42,14 56,13 70,20 84,18 100,24" },
  { label: "Resolved by AI", value: "92%", delta: "+4%", points: "0,24 14,20 28,21 42,15 56,14 70,10 84,8 100,4" },
];
const convos = {
  WhatsApp: {
    user: "Do you deliver on weekends?",
    agent: "Yes! We deliver Saturday and Sunday, 10 AM to 6 PM. Want me to place an order?",
    source: "Delivery policy.pdf",
  },
  Instagram: {
    user: "Is the blue jacket available in size M?",
    agent: "It is! The blue jacket is in stock in M and L. Want the link to order?",
    source: "Product catalog",
  },
  Website: {
    user: "What are your pricing plans?",
    agent: "We have three plans: Starter, Growth and Scale. Want a quick comparison?",
    source: "Pricing page",
  },
} as const;
type Channel = keyof typeof convos;
const channelTabs = Object.keys(convos) as Channel[];
const sources = ["Delivery policy.pdf", "Store FAQ page", "Product catalog"];
const nav = [Inbox, Bot, BookOpen, BarChart3, Settings];
const eyebrow = "AI Agents For Every Messaging Channel";

/**
 * Design 5 — light hero: gradient (peach → blue → lavender) + grid background,
 * centered copy, and an interactive product dashboard fading into the next section.
 */
export function HeroVariantE() {
  const [tab, setTab] = useState<Channel>("WhatsApp");
  const convo = convos[tab];
  const c = heroContent;

  return (
    <section aria-label="Hero" className={styles.hero}>
      <div aria-hidden="true" className={styles.grid} />

      <Container className={styles.inner}>
        <div className={styles.copy}>
          <Link href="#agent-demo" className={`${styles.announce} animate-fade-up`}>
            <Sparkles size={15} aria-hidden="true" />
            {eyebrow}
          </Link>
          <h1 className={`${styles.headline} animate-fade-up`} style={{ animationDelay: "80ms" }}>
            <span className={styles.lineDark}>Your Customers Have</span>
            <span className={styles.lineGradient}>
              <em className="title-accent">Questions,</em> You Have <em className="title-accent">Dagsis</em>
            </span>
          </h1>
          <p className={`${styles.description} animate-fade-up`} style={{ animationDelay: "160ms" }}>
            {c.description}
          </p>
          <div className={`${styles.ctaRow} animate-fade-up`} style={{ animationDelay: "240ms" }}>
            <ButtonLink href={c.primaryCta.href} size="custom" className={styles.primaryButton}>
              {c.primaryCta.label}
              <ArrowRight size={18} aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href={c.secondaryCta.href} variant="secondary" size="custom" className={styles.secondaryButton}>
              <span className={styles.playCircle}>
                <Play size={13} aria-hidden="true" />
              </span>
              {c.secondaryCta.label}
            </ButtonLink>
          </div>
          <ul className={`${styles.proof} animate-fade-up`} style={{ animationDelay: "300ms" }}>
            <li>
              <Check size={15} aria-hidden="true" /> No coding required
            </li>
            <li>
              <Check size={15} aria-hidden="true" /> WhatsApp, Instagram, Website &amp; more
            </li>
          </ul>
        </div>

        {/* ---- product dashboard ---- */}
        <div className={`${styles.stage} animate-fade-up`} style={{ animationDelay: "380ms" }}>
          <div className={styles.window}>
            <div className={styles.titleBar} aria-hidden="true">
              <span className={styles.trafficDots}>
                <i /> <i /> <i />
              </span>
              <span className={styles.url}>app.dagsis.ai / overview</span>
              <span className={styles.liveTag}>
                <i /> Agent live
              </span>
            </div>

            <div className={styles.app}>
              <nav className={styles.rail} aria-hidden="true">
                <span className={styles.railLogo}>
                  <LogoMark className={styles.railMark} />
                </span>
                {nav.map((Icon, i) => (
                  <span key={i} className={`${styles.railItem} ${i === 1 ? styles.railActive : ""}`}>
                    <Icon size={18} />
                  </span>
                ))}
              </nav>

              <div className={styles.main}>
                <div className={styles.mainHead} aria-hidden="true">
                  <strong>Overview</strong>
                  <span className={styles.range}>Last 7 days</span>
                </div>

                <div className={styles.kpis} aria-hidden="true">
                  {kpis.map((k) => (
                    <div key={k.label} className={styles.kpi}>
                      <small>{k.label}</small>
                      <div className={styles.kpiRow}>
                        <b>{k.value}</b>
                        <em>{k.delta}</em>
                      </div>
                      <svg viewBox="0 0 100 30" preserveAspectRatio="none" className={styles.spark}>
                        <polyline points={k.points} fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  ))}
                </div>

                <div className={styles.lower}>
                  <div className={styles.panel}>
                    <div className={styles.panelHead}>
                      <strong>Live conversation</strong>
                      <div className={styles.tabs} role="tablist" aria-label="Channel">
                        {channelTabs.map((t) => (
                          <button
                            key={t}
                            type="button"
                            role="tab"
                            aria-selected={tab === t}
                            data-channel={t}
                            className={`${styles.tab} ${tab === t ? styles.tabActive : ""}`}
                            onClick={() => setTab(t)}
                          >
                            <ChannelBrandIcon channel={t} />
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className={styles.msgs} key={tab} aria-live="polite">
                      <p className={styles.userBubble}>
                        {convo.user}
                        <span>
                          10:24 <CheckCheck size={12} />
                        </span>
                      </p>
                      <div className={styles.agentRow}>
                        <span className={styles.agentAvatar}>
                          <LogoMark className={styles.agentMark} />
                        </span>
                        <div>
                          <p className={styles.agentBubble}>{convo.agent}</p>
                          <span className={styles.sourceChip}>
                            <FileText size={12} /> {convo.source}
                          </span>
                        </div>
                      </div>
                      <div className={styles.agentRow}>
                        <span className={styles.agentAvatar}>
                          <LogoMark className={styles.agentMark} />
                        </span>
                        <span className={styles.typing} aria-hidden="true">
                          <i /> <i /> <i />
                        </span>
                      </div>
                    </div>

                    <div className={styles.composer} aria-hidden="true">
                      <span className={styles.aiBadge}>
                        <Sparkles size={12} /> Handled by AI
                      </span>
                      <span className={styles.composerText}>Reply as agent or let AI handle it...</span>
                      <span className={styles.send}>
                        <Send size={14} />
                      </span>
                    </div>
                  </div>

                  <div className={styles.side} aria-hidden="true">
                    <div className={styles.panel}>
                      <div className={styles.panelHead}>
                        <strong>Knowledge</strong>
                        <small>3 sources synced</small>
                      </div>
                      {sources.map((s) => (
                        <span key={s} className={styles.row}>
                          <FileText size={14} /> {s}
                        </span>
                      ))}
                    </div>
                    <div className={styles.panel}>
                      <div className={styles.panelHead}>
                        <strong>Channels</strong>
                        <small>All connected</small>
                      </div>
                      {channelTabs.map((ch) => (
                        <span key={ch} className={styles.row}>
                          <i className={styles.statusDot} /> {ch}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
