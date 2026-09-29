"use client";

import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";
import { mainNav } from "@/content";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/shared/Logo";
import { ButtonLink } from "@/components/ui";

/**
 * Floating white navigation, matching the centered hero reference.
 */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-3 z-50 px-3 sm:top-4">
      <div
        className={cn(
          "mx-auto flex h-16 max-w-[960px] items-center justify-between gap-4 rounded-2xl pr-3 pl-4 transition-all duration-300 sm:h-18 sm:pl-6",
          "bg-surface-raised/90 ring-1 ring-ink-200/70 backdrop-blur-xl",
          scrolled ? "shadow-lg shadow-black/5" : "shadow-sm",
        )}
      >
        <Logo />

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Main">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-ink-600 transition-colors hover:bg-ink-100 hover:text-ink-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <ButtonLink href={siteConfig.links.signUp} size="sm" className="bg-gradient-to-r from-brand-500 to-brand-700 shadow-md shadow-brand-500/20">
            Start for Free
            <span className="flex size-5 items-center justify-center rounded-full bg-white text-brand-700"><ArrowRight className="size-3" aria-hidden="true" /></span>
          </ButtonLink>
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-full text-ink-700 hover:bg-ink-100"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={cn(
          "mx-auto mt-2 max-w-6xl rounded-3xl bg-surface-raised p-4 shadow-xl ring-1 ring-ink-200/70 lg:hidden",
          open ? "block" : "hidden",
        )}
      >
        <nav className="flex flex-col" aria-label="Mobile">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-3 text-base font-medium text-ink-800 hover:bg-ink-50"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="mt-3 grid gap-2">
          <ButtonLink href={siteConfig.links.signUp} onClick={() => setOpen(false)}>
            Start for Free
          </ButtonLink>
          <ButtonLink href={siteConfig.links.bookDemo} variant="secondary" onClick={() => setOpen(false)}>
            Book a Demo
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}
