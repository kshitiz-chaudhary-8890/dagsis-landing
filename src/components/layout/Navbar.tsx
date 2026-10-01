"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/config/site";
import { mainNav } from "@/content";
import { industryNav } from "@/content/navigation";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/shared/Logo";
import { ButtonLink } from "@/components/ui";

const navItemClass = "relative flex items-center gap-1 rounded-full px-[5px] py-2 text-sm font-medium text-ink-600 transition-colors hover:text-ink-900 data-[active=true]:text-ink-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 after:absolute after:bottom-1 after:left-[5px] after:right-[5px] after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-brand-600 after:content-[''] after:transition-transform after:duration-300 hover:after:scale-x-100 focus-visible:after:scale-x-100 group-open:after:scale-x-100 data-[active=true]:after:scale-x-100";

const dropdownItemClass = "block rounded-xl px-3 py-2 text-sm text-ink-700 transition-colors hover:text-ink-900 data-[active=true]:font-semibold data-[active=true]:text-ink-900 focus-visible:outline-2 focus-visible:outline-brand-600";

/**
 * Floating white navigation, matching the centered hero reference.
 */
export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const industryCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isActive = (href: string) => pathname === href || (href === "/industries" && pathname.startsWith("/industries/"));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => () => {
    if (industryCloseTimer.current) clearTimeout(industryCloseTimer.current);
  }, []);

  return (
    <header className="fixed inset-x-0 top-3 z-50 px-3 sm:top-4">
      <div
        className={cn(
          "mx-auto flex h-16 max-w-[1160px] items-center justify-between gap-4 rounded-2xl pr-3 pl-4 transition-all duration-300 sm:h-18 sm:pl-6",
          "bg-surface-raised/90 ring-1 ring-ink-200/70 backdrop-blur-xl",
          scrolled ? "shadow-lg shadow-black/5" : "shadow-sm",
        )}
      >
        <Logo />

        <nav className="hidden items-center gap-4 xl:flex" aria-label="Main">
          {mainNav.map((item) => item.href === "/industries" ? (
            <details
              key={item.href}
              className="group relative"
              onMouseEnter={(event) => {
                if (industryCloseTimer.current) clearTimeout(industryCloseTimer.current);
                industryCloseTimer.current = null;
                event.currentTarget.open = true;
              }}
              onMouseLeave={(event) => {
                const details = event.currentTarget;
                industryCloseTimer.current = setTimeout(() => {
                  details.open = false;
                  industryCloseTimer.current = null;
                }, 200);
              }}
            >
              <summary data-active={isActive(item.href)} className={`${navItemClass} cursor-pointer list-none [&::-webkit-details-marker]:hidden`}>
                {item.label}
                <ChevronDown className="size-3.5 transition-transform group-open:rotate-180" aria-hidden="true" />
              </summary>
              <div className="absolute left-0 top-full z-50 min-w-44">
                <div className="rounded-2xl bg-surface-raised p-2 shadow-xl ring-1 ring-ink-200/70">
                  <Link href={item.href} data-active={pathname === item.href} aria-current={pathname === item.href ? "page" : undefined} className={dropdownItemClass}>
                    All Industries
                  </Link>
                  {industryNav.map((industry) => (
                    <Link key={industry.href} href={industry.href} data-active={pathname === industry.href} aria-current={pathname === industry.href ? "page" : undefined} className={dropdownItemClass}>
                      {industry.label}
                    </Link>
                  ))}
                </div>
              </div>
            </details>
          ) : (
            <Link
              key={item.href}
              href={item.href}
              data-active={isActive(item.href)}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={navItemClass}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 xl:flex">
          <ButtonLink href={siteConfig.links.signUp} size="sm">
            Start for Free
            <ArrowRight className="size-4" aria-hidden="true" />
          </ButtonLink>
        </div>

        <div className="flex items-center gap-1 xl:hidden">
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
          "mx-auto mt-2 max-h-[calc(100dvh-6rem)] max-w-[1160px] overflow-y-auto rounded-3xl bg-surface-raised p-4 shadow-xl ring-1 ring-ink-200/70 xl:hidden",
          open ? "block" : "hidden",
        )}
      >
        <nav className="flex flex-col" aria-label="Mobile">
          {mainNav.map((item) => item.href === "/industries" ? (
            <div key={item.href}>
              <Link href={item.href} onClick={() => setOpen(false)} className="block rounded-xl px-3 py-3 text-base font-medium text-ink-800 hover:bg-ink-50">
                {item.label}
              </Link>
              <div className="mb-2 ml-3 border-l border-ink-200 pl-3">
                {industryNav.map((industry) => (
                  <Link key={industry.href} href={industry.href} onClick={() => setOpen(false)} className="block rounded-xl px-3 py-2 text-sm text-ink-700 hover:bg-ink-50">
                    {industry.label}
                  </Link>
                ))}
              </div>
            </div>
          ) : (
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
          <ButtonLink href={siteConfig.links.bookDemo} onClick={() => setOpen(false)}>
            Book a Demo
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}
