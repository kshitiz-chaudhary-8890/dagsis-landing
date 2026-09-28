import Link from "next/link";
import { siteConfig } from "@/config/site";
import { footerColumns } from "@/content";
import { Logo } from "@/components/shared/Logo";
import { Container } from "@/components/ui";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink-200 bg-surface text-ink-500">
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <Logo variant="full" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed">{siteConfig.description}</p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-4">
            {footerColumns.map((col) => (
              <div key={col.title}>
                <p className="text-sm font-semibold text-ink-900">{col.title}</p>
                <ul className="mt-4 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="text-sm transition-colors hover:text-ink-900">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-ink-200 pt-8 text-sm sm:flex-row sm:items-center">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-5">
            <a href={siteConfig.social.twitter} className="hover:text-ink-900" target="_blank" rel="noreferrer">
              X / Twitter
            </a>
            <a href={siteConfig.social.linkedin} className="hover:text-ink-900" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
