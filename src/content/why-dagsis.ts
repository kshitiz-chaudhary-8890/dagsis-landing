import { BookOpen, MessageCircle, ShieldCheck, TrendingUp, Wand2 } from "lucide-react";
import type { SectionIntro, WhyReason } from "@/types/content";

export const whyIntro: SectionIntro = {
  eyebrow: "Why Dagsis",
  title: "Why Businesses Choose Dagsis.",
  description: "Powerful enough for growing teams, simple enough to launch in a day.",
};

export const reasons: WhyReason[] = [
  {
    id: "singapore", icon: MessageCircle,
    title: "Built for how Singapore communicates",
    description: "WhatsApp-first, so you meet customers where they already are.",
  },
  {
    id: "knowledge", icon: BookOpen,
    title: "Trained on your business, not generic answers",
    description: "Your agent only speaks from the knowledge you give it.",
  },
  {
    id: "setup", icon: Wand2,
    title: "No technical skills needed",
    description: "Set up, train and deploy without writing a line of code.",
  },
  {
    id: "security", icon: ShieldCheck,
    title: "Secure and organised",
    description: "Role-based access keeps your data protected.",
  },
  {
    id: "growth", icon: TrendingUp,
    title: "Grows with you",
    description: "Start free, then move to a package that fits as your business expands.",
  },
];

export const whyCta = {
  title: "Start with your business.",
  description: "Create your workspace and launch your first agent.",
  label: "Start for Free",
};
