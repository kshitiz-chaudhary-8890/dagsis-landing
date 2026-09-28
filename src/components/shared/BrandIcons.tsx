/**
 * Channel brand glyphs drawn in the same 24px / stroke-2 style as Lucide,
 * so they sit visually alongside the rest of the icon set.
 *
 * Swap for official brand assets (public/images/logos) if marketing requires
 * exact logos.
 */
import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base: IconProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

export function WhatsAppIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3.5 20.5l1.3-4.1A9 9 0 1 1 8 19.6z" />
      <path d="M9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.6-2-1-1 .8c-1-.4-2.3-1.7-2.7-2.7l.8-1-1-2z" />
    </svg>
  );
}

export function TelegramIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M21.5 3.5 2.8 10.8c-.8.3-.7 1.4.1 1.6l4.6 1.4 1.8 5.6c.2.7 1.1.9 1.6.3l2.5-2.6 4.6 3.4c.6.4 1.4.1 1.6-.6z" />
      <path d="m7.5 13.8 9.5-6.3-6.8 7.4" />
    </svg>
  );
}

export function DiscordIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M8.5 16.5c-.6 1.1-1.5 2.5-1.5 2.5-3-.8-4.8-2.6-4.8-2.6 0-5.7 2.6-10.6 2.6-10.6S7 4.5 9.5 4.2l.6 1.3h3.8l.6-1.3c2.5.3 4.7 1.6 4.7 1.6s2.6 4.9 2.6 10.6c0 0-1.8 1.8-4.8 2.6 0 0-.9-1.4-1.5-2.5" />
      <path d="M7.5 15.5c3 1.5 6 1.5 9 0" />
      <circle cx="9" cy="12" r="1" />
      <circle cx="15" cy="12" r="1" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  );
}

export function FacebookIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M15 3.5h-2.2A3.3 3.3 0 0 0 9.5 6.8V10H7v3.2h2.5V21h3.3v-7.8h2.6l.6-3.2h-3.2V7.3c0-.6.4-1 1-1H15z" />
    </svg>
  );
}
