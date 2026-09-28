import { Clock, FileQuestion, FolderSearch, Users } from "lucide-react";
import type { IconItem, SectionIntro } from "@/types/content";

export const problemIntro: SectionIntro = {
  eyebrow: "The problem",
  title: "Most support work is the same twenty questions",
  description:
    "The answers already exist somewhere in your docs. Someone still has to find them, copy them and paste them, one customer at a time.",
};

export const problems: IconItem[] = [
  {
    icon: FileQuestion,
    title: "Repetitive customer questions",
    description:
      "Pricing, shipping, opening hours, refunds. The same handful of questions, answered by hand every day.",
  },
  {
    icon: Clock,
    title: "Slow response times",
    description:
      "Customers expect answers in seconds. Hours-long replies (or none after hours) mean lost sales and frustrated buyers.",
  },
  {
    icon: FolderSearch,
    title: "Information scattered everywhere",
    description:
      "PDFs, the help center, the website, someone's memory. Every reply starts with a search.",
  },
  {
    icon: Users,
    title: "Support teams overloaded",
    description:
      "Your best people spend their day copy-pasting instead of solving the problems that actually need a human.",
  },
];

/**
 * The "Support inbox" illustration under the problem heading. One row per
 * problem above (same order): each row shows that problem happening, and
 * appears when its problem card arrives on scroll.
 */
export type InboxRowStatus =
  | { kind: "duplicates"; label: string } // e.g. "×47 today"
  | { kind: "waiting"; fromMinutes: number; toMinutes: number } // timer climbs on scroll
  | { kind: "searching"; label: string } // e.g. "Searching 3 docs…"
  | { kind: "busy"; label: string }; // e.g. "All agents busy"

export interface InboxRow {
  name: string;
  channel: "whatsapp" | "website" | "telegram" | "discord";
  message: string;
  status: InboxRowStatus;
}

export const problemInbox = {
  title: "Support inbox",
  unansweredLabel: "Unanswered",
  /** The unanswered counter climbs between these values as rows arrive. */
  unanswered: { from: 12, to: 148 },
  rows: [
    {
      name: "Priya S.",
      channel: "whatsapp",
      message: "Where is my order #4821?",
      status: { kind: "duplicates", label: "×47 today" },
    },
    {
      name: "Tom K.",
      channel: "website",
      message: "Hello?? Is anyone there?",
      status: { kind: "waiting", fromMinutes: 4, toMinutes: 252 },
    },
    {
      name: "Lina M.",
      channel: "telegram",
      message: "Is the warranty 1 or 2 years?",
      status: { kind: "searching", label: "Searching 3 docs…" },
    },
    {
      name: "Omar R.",
      channel: "discord",
      message: "Can I change my booking?",
      status: { kind: "busy", label: "All agents busy" },
    },
  ] satisfies InboxRow[],
};
