import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { SmoothScroll } from "@/components/layout/SmoothScroll";

/** Chrome for public marketing pages: skip link, smooth scroll, navbar, footer. */
export default function SiteLayout({ children }: LayoutProps<"/">) {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-surface-raised focus:px-4 focus:py-2 focus:shadow-lg"
      >
        Skip to content
      </a>
      <SmoothScroll />
      <Navbar />
      {/* overflow-x-clip: slide-in effects never widen the page (unlike overflow-hidden it keeps position: sticky working) */}
      <main id="main" className="flex-1 overflow-x-clip">
        {children}
      </main>
      <Footer />
    </>
  );
}
