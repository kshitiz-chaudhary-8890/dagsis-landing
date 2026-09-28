import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

/**
 * Official Dagsis.ai logo artwork (source files: design/brand/Final Dagsis Logo).
 * Web-sized copies live in /public/brand:
 *   dagsis-mark.png                  the "D" mark (transparent)
 *   dagsis-wordmark-{light,dark}.png "Dagsis.ai" text, navy / white
 *   dagsis-logo-{light,dark}.png     full lock-up with "Platform for your AI solutions"
 * The dark versions only recolour the navy text to white; the mark and the
 * blue ".ai" are untouched.
 */
const MARK = { src: "/brand/dagsis-mark.png", width: 242, height: 256 };
const WORDMARK = { width: 409, height: 96 };
const FULL = { width: 960, height: 303 };

/** The "D" mark on its own. Size it with a height class, e.g. `h-8`. */
export function LogoMark({ className, priority = false }: { className?: string; priority?: boolean }) {
  return (
    <Image
      src={MARK.src}
      alt=""
      width={MARK.width}
      height={MARK.height}
      priority={priority}
      className={cn("w-auto", className)}
    />
  );
}

/** Light/dark pair of the same artwork; the right one shows for the theme. */
function ThemedArtwork({
  name,
  size,
  className,
  priority,
}: {
  name: "wordmark" | "logo";
  size: { width: number; height: number };
  className: string;
  priority?: boolean;
}) {
  return (
    <>
      <Image
        src={`/brand/dagsis-${name}-light.png`}
        alt=""
        {...size}
        priority={priority}
        className={cn("w-auto dark:hidden", className)}
      />
      <Image
        src={`/brand/dagsis-${name}-dark.png`}
        alt=""
        {...size}
        priority={priority}
        className={cn("hidden w-auto dark:block", className)}
      />
    </>
  );
}

/**
 * Site logo, linking home.
 * - `compact` (navbar): mark + "Dagsis.ai" wordmark, no tagline.
 * - `full` (footer): the complete lock-up with the tagline.
 */
export function Logo({
  variant = "compact",
  className,
}: {
  variant?: "compact" | "full";
  className?: string;
}) {
  return (
    <Link
      href="/"
      className={cn("inline-flex shrink-0 items-center", className)}
      aria-label={`${siteConfig.name}.ai home`}
    >
      {variant === "full" ? (
        <ThemedArtwork name="logo" size={FULL} className="h-20" />
      ) : (
        <span className="inline-flex items-center gap-2">
          <LogoMark className="h-8" priority />
          <ThemedArtwork name="wordmark" size={WORDMARK} className="h-[22px]" priority />
        </span>
      )}
    </Link>
  );
}
