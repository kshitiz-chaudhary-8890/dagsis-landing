import { siteConfig } from "@/config/site";

export const finalCtaContent = {
  title: "Build your first AI agent today.",
  /** Rendered only when `featureFlags.noCreditCardRequired` is true. */
  noCardNote: "Start free. No credit card required.",
  /** Fallback note used otherwise. */
  defaultNote: "Start free and upgrade anytime.",
  primaryCta: { label: "Start for Free", href: siteConfig.links.signUp },
  secondaryCta: { label: "Book a Demo", href: siteConfig.links.bookDemo },
};
