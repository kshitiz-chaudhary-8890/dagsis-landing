import { Globe } from "lucide-react";
import {
  DiscordIcon,
  FacebookIcon,
  InstagramIcon,
  TelegramIcon,
  WhatsAppIcon,
} from "@/components/shared/BrandIcons";
import type { Channel, SectionIntro } from "@/types/content";

export const channelsIntro: SectionIntro = {
  eyebrow: "Deploy",
  title: "Deploy Everywhere",
  titleAccent: "Your Customers Are.",
  description:
    "Connect your AI agent to WhatsApp, Instagram, Facebook, Discord, Telegram and your website in a few clicks.",
};

/** Pill under the diagram, shown with a "+" icon (youratlas: "+ any SIP-based system."). */
export const channelsFootnote = "More channels on the way";

export const channels: Channel[] = [
  {
    id: "website",
    name: "Website",
    description: "Embeddable chat widget for any site or web app.",
    icon: Globe,
    accent: "bg-brand-100 text-brand-700 dark:text-brand-300",
    status: "available",
  },
  {
    id: "whatsapp",
    name: "WhatsApp",
    description: "Answer customers on the world's most popular messenger.",
    icon: WhatsAppIcon,
    accent: "bg-emerald-100 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-300",
    status: "available",
  },
  {
    id: "telegram",
    name: "Telegram",
    description: "Run your agent as a Telegram bot in a few clicks.",
    icon: TelegramIcon,
    accent: "bg-sky-100 dark:bg-sky-500/15 text-sky-700 dark:text-sky-300",
    status: "available",
  },
  {
    id: "discord",
    name: "Discord",
    description: "Support your community right inside your server.",
    icon: DiscordIcon,
    accent: "bg-indigo-100 dark:bg-indigo-500/15 text-indigo-700 dark:text-indigo-300",
    status: "available",
  },
  {
    id: "instagram",
    name: "Instagram",
    description: "Reply to Instagram DMs automatically.",
    icon: InstagramIcon,
    accent: "bg-pink-100 text-pink-700 dark:bg-pink-500/15 dark:text-pink-300",
    status: "available",
  },
  {
    id: "facebook",
    name: "Facebook",
    description: "Answer Messenger chats from your Facebook page.",
    icon: FacebookIcon,
    accent: "bg-blue-100 text-blue-700 dark:bg-blue-500/15 dark:text-blue-300",
    status: "available",
  },
];
