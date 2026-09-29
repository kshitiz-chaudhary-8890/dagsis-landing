/**
 * Shared content types for the landing page.
 *
 * Every section reads its copy from `src/content/*`. Keeping the shapes here
 * means copywriters can edit content files safely and TypeScript will flag
 * anything missing.
 */
import type { LucideIcon } from "lucide-react";
import type { ComponentType, SVGProps } from "react";

/** Any icon component: Lucide icons or our own brand SVGs. */
export type IconComponent =
  | LucideIcon
  | ComponentType<SVGProps<SVGSVGElement>>;

export interface CtaLink {
  label: string;
  href: string;
}

export interface SectionIntro {
  eyebrow?: string;
  title: string;
  /** Highlighted part of the title (brand colour). */
  titleAccent?: string;
  /** Render the accent before the title ("One platform. Every…"). Default: after. */
  accentFirst?: boolean;
  description?: string;
}

export interface IconItem {
  icon: IconComponent;
  title: string;
  description: string;
}

/** A "Why Dagsis" reason; `id` picks its illustration. */
export interface WhyReason extends IconItem {
  id: "singapore" | "knowledge" | "setup" | "security" | "growth";
}

/** A platform feature: icon, title, description. Copy-only, no mock stats. */
export type Feature = IconItem;

export interface ChatMessage {
  from: "user" | "agent";
  text: string;
  /** Optional display time, e.g. "10:42". */
  time?: string;
}

/** Right-side visual for a use-case card, matched to the case content. */
export type UseCaseVisual = "chat" | "widget" | "inbox" | "knowledge";

export interface UseCase {
  id: string;
  icon: IconComponent;
  title: string;
  description: string;
  highlights: string[];
  /** Sample WhatsApp-style conversation shown in the phone mockup. */
  conversation: ChatMessage[];
  visual: UseCaseVisual;
}

/**
 * Media shown in the product showcase.
 * - `image`: a screenshot. Give `srcDark` too and it's used in dark mode.
 * - `video`: a looping screen recording.
 * - `mock`: the coded UI itself (also what the placeholder screenshots are made from).
 */
export type ShowcaseMedia =
  | { type: "mock"; variant: ShowcaseMockVariant }
  | { type: "image"; src: string; srcDark?: string; alt: string; width: number; height: number }
  | { type: "video"; src: string; poster?: string };

export type ShowcaseMockVariant =
  | "knowledge"
  | "builder"
  | "widget"
  | "conversations"
  | "analytics";

export interface ShowcaseTab {
  id: string;
  label: string;
  icon: IconComponent;
  title: string;
  description: string;
  bullets: string[];
  media: ShowcaseMedia;
  /** Short status the Dagsis bubble shows while the tour moves on to this stop. */
  note: string;
  /** Where the tour card links to. Default: the "Book a Demo" link. */
  href?: string;
}

export interface Channel {
  id: string;
  name: string;
  description: string;
  icon: IconComponent;
  /** Tailwind classes for the icon badge background/foreground. */
  accent: string;
  status: "available" | "coming-soon";
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarInitials: string;
  metrics?: { value: string; label: string }[];
}

export type BillingCycle = "monthly" | "yearly";

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  /** `null` means "custom / contact sales". */
  price: Record<BillingCycle, number | null>;
  cta: CtaLink;
  features: string[];
  highlighted?: boolean;
  badge?: string;
}

/** A row in the compare-plans table. Values are keyed by plan id. */
export interface PlanComparisonRow {
  feature: string;
  values: Record<string, string | boolean>;
}

export interface PlanComparisonGroup {
  group: string;
  rows: PlanComparisonRow[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: NavItem[];
}
