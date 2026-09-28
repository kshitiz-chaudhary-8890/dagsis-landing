import type { FooterColumn, NavItem } from "@/types/content";

/** Top navigation. Hrefs are section anchors on the landing page. */
export const mainNav: NavItem[] = [
  { label: "Product", href: "#features" },
  { label: "Use cases", href: "#use-cases" },
  { label: "Integrations", href: "#deploy" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export const footerColumns: FooterColumn[] = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Integrations", href: "#deploy" },
      { label: "Pricing", href: "#pricing" },
      { label: "Changelog", href: "#" },
    ],
  },
  {
    title: "Use cases",
    links: [
      { label: "Customer support", href: "#use-cases" },
      { label: "Lead qualification", href: "#use-cases" },
      { label: "FAQ automation", href: "#use-cases" },
      { label: "Customer engagement", href: "#use-cases" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Security", href: "#" },
    ],
  },
];
