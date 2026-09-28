import { Headset, HelpCircle, MessageCircleHeart, Target } from "lucide-react";
import type { SectionIntro, UseCase } from "@/types/content";

export const useCasesIntro: SectionIntro = {
  eyebrow: "Use cases",
  title: "Trusted by people who live on",
  titleAccent: "WhatsApp",
  description:
    "Your customers already message you there. Here is what a Dagsis agent does with those chats.",
};

export const useCases: UseCase[] = [
  {
    id: "support",
    icon: Headset,
    title: "Customer Support",
    description:
      "Resolve common questions instantly and hand off complex cases to your team with full context.",
    highlights: ["Instant answers from your docs", "Smart human handoff", "Works after hours"],
    conversation: [
      { from: "user", text: "Hi, my order #4821 hasn't arrived yet", time: "10:41" },
      { from: "agent", text: "Sorry about that! Order #4821 shipped on Monday and is out for delivery today 📦", time: "10:41" },
      { from: "user", text: "Great, thanks!", time: "10:42" },
      { from: "agent", text: "Anything else I can help with? 😊", time: "10:42" },
    ],
  },
  {
    id: "leads",
    icon: Target,
    title: "Lead Qualification",
    description:
      "Ask the right questions, score intent, and route hot leads straight to your sales team.",
    highlights: ["Custom qualifying questions", "Captures contact details", "Syncs leads to your team"],
    conversation: [
      { from: "user", text: "Do you offer plans for teams?", time: "14:03" },
      { from: "agent", text: "We do! How many people are on your team?", time: "14:03" },
      { from: "user", text: "Around 25", time: "14:04" },
      { from: "agent", text: "Then the Professional plan is the one. Want me to book a quick call with sales?", time: "14:04" },
    ],
  },
  {
    id: "faq",
    icon: HelpCircle,
    title: "FAQ Automation",
    description:
      "Turn your help center into a conversational agent that answers accurately, every time.",
    highlights: ["Learns from PDFs & URLs", "Always up to date", "Cites your sources"],
    conversation: [
      { from: "user", text: "What's your refund policy?", time: "09:15" },
      { from: "agent", text: "You can request a full refund within 30 days of purchase. Just reply with your order number and I'll start it for you.", time: "09:15" },
    ],
  },
  {
    id: "engagement",
    icon: MessageCircleHeart,
    title: "Customer Engagement",
    description:
      "Recommend products, share restock news and follow up with customers one by one, without anyone on your team typing it.",
    highlights: ["Personalized recommendations", "Proactive follow-ups", "Multi-language replies"],
    conversation: [
      { from: "agent", text: "Hi Sara! The sneakers you liked are back in stock in size 38 👟", time: "18:20" },
      { from: "user", text: "Oh nice! Can I reserve a pair?", time: "18:22" },
      { from: "agent", text: "Done ✅ They're held for you for 24 hours.", time: "18:22" },
    ],
  },
];
