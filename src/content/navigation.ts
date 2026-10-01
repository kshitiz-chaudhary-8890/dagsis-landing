import type { FooterColumn, NavItem } from "@/types/content";

/** Top navigation for the pages in the inner-page content brief. */
export const mainNav: NavItem[] = [
  { label: "About Us", href: "/about" },
  { label: "Industries", href: "/industries" },
  { label: "Demo Websites", href: "/demo-websites" },
  { label: "Features", href: "/features" },
  { label: "Solutions", href: "/solutions" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact Us", href: "/contact" },
];

export const industryNav: NavItem[] = [
  { label: "Real Estate", href: "/industries/property" },
  { label: "Retail", href: "/industries/retail" },
  { label: "Education", href: "/industries/education" },
  { label: "Healthcare", href: "/industries/healthcare" },
  { label: "Travel", href: "/industries/travel" },
  { label: "Food", href: "/industries/food" },
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
