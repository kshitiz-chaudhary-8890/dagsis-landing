import {
  BarChart3,
  Bot,
  Database,
  History,
  LayoutDashboard,
  Share2,
  ShieldCheck,
  UserPlus,
  Users,
} from "lucide-react";
import type { Feature, SectionIntro } from "@/types/content";

export const featuresIntro: SectionIntro = {
  eyebrow: "Platform",
  title: "Everything You Need to Run AI Customer Conversations.",
  description:
    "A single dashboard to build, deploy, manage and measure your AI agents.",
};

export const features: Feature[] = [
  {
    icon: LayoutDashboard,
    title: "Workspace",
    description:
      "A dedicated space for your business where all your agents, knowledge, conversations and settings live together, organised and secure.",
  },
  {
    icon: Users,
    title: "Team Members",
    description:
      "Invite colleagues into your workspace. Each member sees only the conversations and data relevant to them.",
  },
  {
    icon: ShieldCheck,
    title: "Role-Based Access",
    description:
      "Decide exactly who can see and do what. Assign roles and set permissions so admins keep full control while team members get only the access they need.",
  },
  {
    icon: Database,
    title: "Knowledge Base",
    description:
      "Teach your AI using your own content. Upload files, add URLs or connect your website, and your agent learns your business.",
  },
  {
    icon: Bot,
    title: "Agents",
    description:
      "Create AI agents from your knowledge bases. Define the role, tone and behaviour of each one so it speaks the way your brand does.",
  },
  {
    icon: UserPlus,
    title: "Leads",
    description:
      "Automatically capture buyer details from conversations and store them in one place, ready for your sales team to act on.",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    description:
      "Track how well your AI is performing, including how many conversations it handles, how many it resolves, and where it needs improvement.",
  },
  {
    icon: History,
    title: "Session and Chat History",
    description:
      "Review every conversation in full. Understand what customers ask, check the quality of replies, and step in when needed.",
  },
  {
    icon: Share2,
    title: "Multiple Channels",
    description:
      "Run the same agent across WhatsApp, Instagram, Facebook, Discord, Telegram and your website from one dashboard.",
  },
];
