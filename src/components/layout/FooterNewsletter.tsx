"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { siteConfig } from "@/config/site";
import { industryNav, mainNav } from "@/content";
import { Container } from "@/components/ui";
import { Logo } from "@/components/shared/Logo";

const find = (label: string) => mainNav.find((item) => item.label === label)!;

const columns = [
  {
    title: "Product",
    links: ["Features", "Solutions", "Pricing", "Demo Websites"].map(find),
  },
  {
    title: "Company",
    links: ["About Us", "Industries", "Contact Us"].map(find),
  },
  { title: "Industries", links: industryNav.slice(0, 4).map((item) => ({ ...item })) },
];

const bottomLinks = [
  { label: "Terms of Service", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Cookies", href: "#" },
];

const socialLinks = [
  { label: "X / Twitter", href: siteConfig.social.twitter, Icon: XIcon },
  { label: "Instagram", href: "#", Icon: InstagramIcon },
  { label: "Facebook", href: "#", Icon: FacebookIcon },
  { label: "LinkedIn", href: siteConfig.social.linkedin, Icon: LinkedInIcon },
  { label: "Email", href: siteConfig.links.contactSales, Icon: MailIcon },
];

function BrandSvg({ d }: { d: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d={d} />
    </svg>
  );
}

function XIcon() {
  return (
    <BrandSvg d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.451-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644z" />
  );
}

function LinkedInIcon() {
  return (
    <BrandSvg d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.119 20.452H3.554V9h3.565v11.452z" />
  );
}

function MailIcon() {
  return <Mail size={16} aria-hidden="true" />;
}

function InstagramIcon() {
  return (
    <BrandSvg d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  );
}

function FacebookIcon() {
  return (
    <BrandSvg d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  );
}

const SERIF = "var(--font-dm-serif), Georgia, serif";
const SANS = "var(--font-dm-sans), Arial, sans-serif";

const rowVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export function FooterNewsletter() {
  const year = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    window.setTimeout(() => {
      setSubscribed(false);
      setEmail("");
    }, 3000);
  };

  return (
    <footer
      id="footer-section"
      className="relative overflow-hidden text-ink-900"
      style={{
        background: [
          "radial-gradient(760px 520px at 0% 100%, #fdeee2 0%, rgba(253, 238, 226, 0) 70%)",
          "radial-gradient(980px 700px at 80% 100%, #e2ecff 0%, #ebf2ff 40%, rgba(235, 242, 255, 0) 72%)",
          "radial-gradient(820px 640px at 100% 30%, #eae3fe 0%, rgba(234, 227, 254, 0) 72%)",
          "radial-gradient(760px 520px at 8% 0%, #f0f4fe 0%, rgba(240, 244, 254, 0) 70%)",
          "#ffffff",
        ].join(", "),
      }}
    >
      <div className="border-t border-ink-200" aria-hidden="true" />
      <Container className="max-w-[1440px]">
        <motion.div
          className="flex flex-col pt-[64px] pb-[28px] sm:pt-[80px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], staggerChildren: 0.1 },
            },
          }}
        >
          {/* Newsletter row */}
          <motion.div
            variants={rowVariants}
            className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center"
          >
            <div className="max-w-[480px]">
              <h2
                className="text-ink-900 text-[28px] leading-[34px] font-normal sm:text-[36px] sm:leading-[44px]"
                style={{ fontFamily: SERIF, letterSpacing: "-0.02em" }}
              >
                Join our newsletter to <em className="title-accent">keep up to date</em> with
                us!
              </h2>
            </div>
            <form
              onSubmit={onSubmit}
              className="flex w-full flex-col items-stretch gap-4 sm:flex-row lg:w-auto"
            >
              <label className="flex h-[56px] min-w-full items-center rounded-full border border-ink-200 bg-white px-6 transition-all duration-300 hover:border-ink-300 focus-within:border-brand-600 sm:min-w-[320px] md:min-w-[380px]">
                <Mail size={20} aria-hidden="true" className="mr-3 flex-shrink-0 text-ink-400" />
                <span className="sr-only">Email address</span>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Enter your email"
                  className="w-full bg-transparent text-[15px] text-ink-900 placeholder-ink-400 outline-none"
                  style={{ fontFamily: SANS }}
                />
              </label>
              <button
                type="submit"
                className="flex h-[56px] items-center justify-center gap-2 rounded-full bg-brand-600 px-8 text-[15px] font-semibold text-white transition-all duration-200 hover:bg-brand-700 active:scale-[0.98]"
                style={{ fontFamily: SANS }}
              >
                {subscribed ? (
                  "Subscribed!"
                ) : (
                  <>
                    Subscribe
                    <ArrowRight size={16} aria-hidden="true" />
                  </>
                )}
              </button>
            </form>
          </motion.div>

          <motion.div variants={rowVariants} className="mt-14 h-[1px] w-full bg-ink-200" aria-hidden="true" />

          {/* Main content row */}
          <motion.div
            variants={rowVariants}
            className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8"
          >
            <div className="flex flex-col items-start gap-4 lg:col-span-5">
              <Logo variant="compact" logoSize="lg" />
              <p
                className="max-w-[340px] text-[15px] leading-[24px] font-normal text-ink-500 sm:text-[16px]"
                style={{ fontFamily: SANS }}
              >
                AI agents that know your business. Train them on your own
                knowledge, deploy to WhatsApp, Instagram and your website, and
                start answering your customers around the clock.
              </p>
              <ul className="mt-2 flex items-center gap-3" aria-label="Social links">
                {socialLinks.map(({ label, href, Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      aria-label={label}
                      target={href.startsWith("https://") ? "_blank" : undefined}
                      rel={href.startsWith("https://") ? "noopener noreferrer" : undefined}
                      className="grid h-10 w-10 place-items-center rounded-full border border-ink-200 text-ink-700 transition-all duration-200 hover:border-ink-950 hover:bg-ink-950 hover:text-white"
                    >
                      <Icon />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <nav
              className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7"
              aria-label="Footer navigation"
            >
              {columns.map((column, columnIndex) => (
                <div
                  key={column.title}
                  className={columnIndex === 2 ? "col-span-2 sm:col-span-1" : undefined}
                >
                  <h4
                    className="text-[17px] font-bold tracking-wide text-ink-900"
                    style={{ fontFamily: SERIF }}
                  >
                    {column.title}
                  </h4>
                  <ul className="mt-4 flex flex-col gap-3">
                    {column.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="text-[14px] text-ink-500 transition-colors duration-200 hover:text-brand-700"
                          style={{ fontFamily: SANS }}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </motion.div>

          <motion.div variants={rowVariants} className="mt-14 h-[1px] w-full bg-ink-200" aria-hidden="true" />

          {/* Bottom metadata row */}
          <motion.div
            variants={rowVariants}
            className="mt-8 flex flex-col items-center justify-between gap-4 text-[14px] text-ink-500 md:flex-row"
            style={{ fontFamily: SANS }}
          >
            <p className="m-0">
              &copy; {year} {siteConfig.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {bottomLinks.map((link) => (
                <a key={link.label} href={link.href} className="transition-colors hover:text-ink-900">
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </footer>
  );
}
