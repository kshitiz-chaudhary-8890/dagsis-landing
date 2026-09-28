import { siteConfig } from "@/config/site";
import type { CtaLink } from "@/types/content";

export const heroContent = {
  badge: "Built for WhatsApp-first businesses",
  /** Rendered in sans, then `titleAccent` in italic serif (youratlas style). */
  title: "AI Agents That Know",
  titleAccent: "Your Business",
  description:
    "Point Dagsis at your docs, website and FAQs. It answers your customers on your site, WhatsApp, Instagram, Facebook, Telegram and Discord, day and night, using only what you gave it.",
  primaryCta: { label: "Start for Free", href: siteConfig.links.signUp } satisfies CtaLink,
  secondaryCta: { label: "Book a Demo", href: siteConfig.links.bookDemo } satisfies CtaLink,

  /**
   * The AI agent panel on the right (replaces youratlas' toggle widget).
   * The panel plays these conversations in a loop.
   */
  agentCard: {
    name: "Dagsis Agent",
    status: "Online · replies instantly",
    samples: [
      {
        channel: "WhatsApp",
        question: "Do you ship to Canada?",
        answer: "Yes! Standard shipping to Canada takes 3–5 business days 🇨🇦",
      },
      {
        channel: "Website",
        question: "Which plan fits a team of 10?",
        answer: "Professional covers up to 10 agents and all channels. Want a quick comparison?",
      },
      {
        channel: "Telegram",
        question: "Are you open on Sunday?",
        answer: "We are, from 10:00 to 16:00. See you there!",
      },
    ],
  },
};
