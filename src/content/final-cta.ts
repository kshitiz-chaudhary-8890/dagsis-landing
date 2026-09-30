import { siteConfig } from "@/config/site";

export const finalCtaContent = {
  eyebrow: "Get started today",
  title: "Ready to Let AI Handle Your Customer Conversations?",
  description: "Launch your Dagsis agent on WhatsApp and your website today, and never miss another enquiry or lead.",
  /** Rendered only when `featureFlags.noCreditCardRequired` is true. */
  noCardNote: "Start free. No credit card required.",
  /** Fallback note used otherwise. */
  defaultNote: "Start free and upgrade anytime.",
  primaryCta: { label: "Book a Demo", href: `${siteConfig.links.contactSales}?subject=Book%20a%20Dagsis%20demo` },
  secondaryCta: { label: "Start for Free", href: siteConfig.links.signUp },
};
