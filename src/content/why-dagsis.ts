import { Brain, Clock3, Layers, Wand2, Zap } from "lucide-react";
import type { SectionIntro, WhyReason } from "@/types/content";

export const whyIntro: SectionIntro = {
  eyebrow: "Why Dagsis",
  titleAccent: "One platform.",
  accentFirst: true,
  title: "Every customer conversation.",
  description:
    "Built for small teams that can't staff a support desk around the clock, and bigger ones that are tired of answering the same thing twice.",
};

/**
 * Rendered as a bento grid; each reason's `id` picks its illustration
 * (components/sections/why-dagsis/WhyVisuals.tsx). Order = grid order.
 */
export const reasons: WhyReason[] = [
  {
    icon: Brain,
    id: "knowledge",
    title: "Business-specific knowledge",
    description:
      "Answers come from your documents and website, not from whatever the internet thinks.",
  },
  {
    icon: Clock3,
    id: "always-on",
    title: "24/7 availability",
    description: "Nights, weekends and holidays. Your customers never wait for business hours.",
  },
  {
    icon: Zap,
    id: "speed",
    title: "Instant responses",
    description: "Replies in seconds, even when thousands of customers write at once.",
  },
  {
    icon: Layers,
    id: "channels",
    title: "Multi-channel",
    description: "Website, WhatsApp, Instagram, Facebook, Telegram and Discord, all managed from one dashboard.",
  },
  {
    icon: Wand2,
    id: "setup",
    title: "Easy setup",
    description: "No code and no ML expertise. If you can upload a file, you can launch an agent.",
  },
];

/** Fills the last grid cell. */
export const whyCta = {
  title: "Ready when you are",
  description: "Launch your first agent today and see the difference this week.",
  label: "Start for Free",
};
