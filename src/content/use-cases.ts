import { Headset, MessageCircle, Target, Users } from "lucide-react";
import type { SectionIntro, UseCase } from "@/types/content";

export const useCasesIntro: SectionIntro = {
  eyebrow: "Use cases",
  title: "One Platform, Many Ways to Grow.",
  description:
    "See how businesses put Dagsis to work every day.",
};

export const useCases: UseCase[] = [
  {
    id: "whatsapp-sales",
    visual: "chat",
    icon: MessageCircle,
    title: "Turn WhatsApp Into Your Best Sales and Support Agent",
    description:
      "Everyone in Singapore is on WhatsApp, so your business should be too. Dagsis connects an AI agent to your WhatsApp Business number. It answers product and service questions instantly, shares pricing and availability, and handles bookings and FAQs. Customers get replies in seconds, and you never lose an enquiry that comes in after hours.",
    highlights: [],
    conversation: [
      { from: "user", text: "Hi! Do you have the black sneakers in size 38?", time: "18:20" },
      { from: "agent", text: "Yes, in stock! $89 — I can reserve a pair for pickup today.", time: "18:20" },
      { from: "user", text: "Great, reserve one please", time: "18:21" },
      { from: "agent", text: "Done ✅ Reserved under your number. Anything else?", time: "18:21" },
    ],
  },
  {
    id: "support",
    visual: "widget",
    icon: Headset,
    title: "Customer Support That Never Sleeps",
    description:
      "Train an agent on your help articles, policies and product guides, then place it on your website. It resolves common questions on its own. Your team focuses on the issues that need real attention.",
    highlights: [],
    conversation: [
      { from: "user", text: "What time do you close on Sundays?", time: "09:15" },
      { from: "agent", text: "We're open 10:00–16:00 on Sundays. Want me to book you a slot?", time: "09:15" },
      { from: "user", text: "Yes, 2pm please", time: "09:16" },
      { from: "agent", text: "Booked ✅ See you Sunday at 2pm!", time: "09:16" },
    ],
  },
  {
    id: "leads",
    visual: "inbox",
    icon: Target,
    title: "Capture and Qualify Leads Automatically",
    description:
      "When the agent detects a potential buyer on any channel, it politely asks for their name, email and phone number and saves them as a lead in your dashboard. Your sales team sees who is interested and what they asked about, and can follow up while the interest is fresh.",
    highlights: [],
    conversation: [
      { from: "user", text: "Do you offer bulk pricing for offices?", time: "14:03" },
      { from: "agent", text: "We do! Can I take your name and email so sales can share a quote?", time: "14:03" },
      { from: "user", text: "Sara, sara@co.com", time: "14:04" },
      { from: "agent", text: "Thanks Sara! Our team will reach out today ✅", time: "14:04" },
    ],
  },
  {
    id: "internal",
    visual: "knowledge",
    icon: Users,
    title: "Internal Team Assistant",
    description:
      "Upload your SOPs, onboarding guides and internal documents, and give your team an agent that answers their questions instantly. New hires get up to speed faster, and experienced staff stop being interrupted with the same questions.",
    highlights: [],
    conversation: [
      { from: "user", text: "How do I file an expense claim?", time: "11:02" },
      { from: "agent", text: "Submit receipts in the finance portal by Friday. Anything over $500 needs manager approval.", time: "11:02" },
      { from: "user", text: "Got it, thanks!", time: "11:03" },
    ],
  },
];
