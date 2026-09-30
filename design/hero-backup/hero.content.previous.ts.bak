import { siteConfig } from "@/config/site";
import type { CtaLink } from "@/types/content";

export const heroContent = {
  eyebrow: "AI agents for every messaging channel",
  /** The headline is split into two phrases for the existing hero layout. */
  title: "Your Business,",
  titleStart: "Your",
  titleEnd: "Business,",
  titleAccent: "Answering Customers 24/7.",
  description:
    "Build an AI agent trained on your own business knowledge and deploy it to WhatsApp, your website, and more in minutes. No coding required.",
  primaryCta: { label: "Book a Demo", href: siteConfig.links.bookDemo } satisfies CtaLink,
  secondaryCta: { label: "Get Started Free", href: siteConfig.links.signUp } satisfies CtaLink,

  /**
   * Sample conversations available to the standalone agent card.
   */
  agentCard: {
    name: "Dagsis Agent",
    status: "Online · replies instantly",
    samples: [
      {
        channel: "WhatsApp",
        source: "documents",
        sourceTitle: "Shipping policy.pdf",
        sourceDetail: "Canada · 3–5 business days",
        question: "Do you ship to Canada?",
        answer: "Yes! Standard shipping to Canada takes 3–5 business days 🇨🇦",
      },
      {
        channel: "Website",
        source: "website",
        sourceTitle: "Pricing page",
        sourceDetail: "Professional · up to 10 agents",
        question: "Which plan fits a team of 10?",
        answer: "Professional covers up to 10 agents and all channels. Want a quick comparison?",
      },
      {
        channel: "Telegram",
        source: "faqs",
        sourceTitle: "Business hours",
        sourceDetail: "Sunday · 10:00–16:00",
        question: "Are you open on Sunday?",
        answer: "We are, from 10:00 to 16:00. See you there!",
      },
    ],
  },
};
