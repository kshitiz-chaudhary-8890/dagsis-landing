import { Clock, FileQuestion, FolderSearch, Users } from "lucide-react";
import type { IconItem, SectionIntro } from "@/types/content";

export const problemIntro: SectionIntro = {
  eyebrow: "The problem",
  title: "Customers Don't Wait. Your Team Can't Be Everywhere.",
  description:
    "Every missed message is a missed sale. Here is what is holding most businesses back.",
};

export const problems: IconItem[] = [
  {
    icon: Clock,
    title: "Slow replies lose customers",
    description:
      "Customers expect answers in minutes. When enquiries sit unanswered after hours or during busy periods, they move on to a competitor.",
  },
  {
    icon: Users,
    title: "Support costs keep rising",
    description:
      "Hiring more people to answer repetitive questions about pricing, hours and orders is expensive and doesn't scale.",
  },
  {
    icon: FolderSearch,
    title: "Knowledge is scattered",
    description:
      "Answers live in PDFs, websites, chat threads and people's heads, so replies are inconsistent.",
  },
  {
    icon: FileQuestion,
    title: "Leads slip through the cracks",
    description:
      "Potential buyers ask questions in chat, but their details are never captured or followed up on.",
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
