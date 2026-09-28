import { siteConfig } from "@/config/site";
import type { PlanComparisonGroup, PricingPlan, SectionIntro } from "@/types/content";

export const pricingIntro: SectionIntro = {
  eyebrow: "Pricing",
  title: "Start free.",
  titleAccent: "Pay once it's working.",
  description: "Every plan includes the knowledge base and the web widget.",
};

/** Yearly discount label shown on the billing toggle. */
export const yearlyDiscountLabel = "Save 20%";

/**
 * PLACEHOLDER prices & limits — confirm with the business before launch.
 */
export const pricingPlans: PricingPlan[] = [
  {
    id: "free",
    name: "Free",
    description: "For trying Dagsis on a side project.",
    price: { monthly: 0, yearly: 0 },
    cta: { label: "Start for Free", href: siteConfig.links.signUp },
    features: ["1 AI agent", "100 messages / month", "Web widget", "Basic knowledge base"],
  },
  {
    id: "starter",
    name: "Starter",
    description: "For small businesses getting started.",
    price: { monthly: 29, yearly: 23 },
    cta: { label: "Get Starter", href: siteConfig.links.signUp },
    features: ["2 AI agents", "2,000 messages / month", "Website + WhatsApp", "Conversation inbox"],
  },
  {
    id: "professional",
    name: "Professional",
    description: "For growing teams that need scale.",
    price: { monthly: 99, yearly: 79 },
    cta: { label: "Get Professional", href: siteConfig.links.signUp },
    features: ["10 AI agents", "10,000 messages / month", "All channels", "Analytics & human handoff"],
    highlighted: true,
    badge: "Most popular",
  },
  {
    id: "custom",
    name: "Custom",
    description: "For enterprises with advanced needs.",
    price: { monthly: null, yearly: null },
    cta: { label: "Contact Sales", href: siteConfig.links.contactSales },
    features: ["Unlimited agents", "Custom message volume", "SSO & advanced security", "Dedicated success manager"],
  },
];

/** Compare-plans table. `true`/`false` render as check/dash icons. */
export const planComparison: PlanComparisonGroup[] = [
  {
    group: "Usage",
    rows: [
      { feature: "AI agents", values: { free: "1", starter: "2", professional: "10", custom: "Unlimited" } },
      { feature: "Messages / month", values: { free: "100", starter: "2,000", professional: "10,000", custom: "Custom" } },
      { feature: "Knowledge sources", values: { free: "5", starter: "50", professional: "500", custom: "Unlimited" } },
    ],
  },
  {
    group: "Channels",
    rows: [
      { feature: "Web widget", values: { free: true, starter: true, professional: true, custom: true } },
      { feature: "WhatsApp", values: { free: false, starter: true, professional: true, custom: true } },
      { feature: "Instagram & Facebook", values: { free: false, starter: false, professional: true, custom: true } },
      { feature: "Telegram & Discord", values: { free: false, starter: false, professional: true, custom: true } },
    ],
  },
  {
    group: "Platform",
    rows: [
      { feature: "Conversation inbox", values: { free: false, starter: true, professional: true, custom: true } },
      { feature: "Human handoff", values: { free: false, starter: false, professional: true, custom: true } },
      { feature: "Analytics", values: { free: "Basic", starter: "Basic", professional: "Advanced", custom: "Advanced" } },
      { feature: "Remove Dagsis branding", values: { free: false, starter: false, professional: true, custom: true } },
      { feature: "SSO & audit logs", values: { free: false, starter: false, professional: false, custom: true } },
      { feature: "Support", values: { free: "Community", starter: "Email", professional: "Priority", custom: "Dedicated" } },
    ],
  },
];
