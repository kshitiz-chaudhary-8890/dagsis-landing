import { cn } from "@/lib/utils";

/**
 * Friendly AI robot avatar used in the hero (replaces the reference's toggle
 * widget). Pure SVG + CSS animation — no images to load.
 *
 * To use a 3D render / Lottie later, swap this component's contents; the
 * hero only depends on its outer size.
 */
export function RobotAvatar({
  className,
  idPrefix = "robot",
}: {
  className?: string;
  /** Unique prefix for SVG gradient ids — required when rendering more than one avatar. */
  idPrefix?: string;
}) {
  const id = (name: string) => `${idPrefix}-${name}`;
  return (
    <div className={cn("relative aspect-square w-full", className)} aria-hidden="true">
      <svg viewBox="0 0 200 200" className="relative size-full animate-float drop-shadow-xl">
        <defs>
          <linearGradient id={id("head")} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#dce8fd" />
          </linearGradient>
          <linearGradient id={id("visor")} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0a1eb0" />
            <stop offset="100%" stopColor="#0c1a40" />
          </linearGradient>
          <linearGradient id={id("accent")} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#3171f3" />
            <stop offset="100%" stopColor="#56bbf7" />
          </linearGradient>
          <radialGradient id={id("eye")}>
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="45%" stopColor="#67e8f9" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Antenna */}
        <line x1="100" y1="42" x2="100" y2="24" stroke="#8db3f8" strokeWidth="4" strokeLinecap="round" />
        <circle cx="100" cy="20" r="7" fill={`url(#${id("accent")})`} />
        <circle cx="100" cy="20" r="12" fill="#22d3ee" opacity="0.25" />

        {/* Ears */}
        <rect x="30" y="86" width="16" height="36" rx="8" fill={`url(#${id("accent")})`} />
        <rect x="154" y="86" width="16" height="36" rx="8" fill={`url(#${id("accent")})`} />

        {/* Head */}
        <rect x="40" y="42" width="120" height="112" rx="40" fill={`url(#${id("head")})`} stroke="#bcd3fb" strokeWidth="2" />

        {/* Visor */}
        <rect x="54" y="68" width="92" height="56" rx="26" fill={`url(#${id("visor")})`} />
        <rect x="60" y="72" width="40" height="6" rx="3" fill="#ffffff" opacity="0.12" />

        {/* Eyes (blink) */}
        <g className="animate-blink" style={{ transformOrigin: "100px 96px", transformBox: "view-box" }}>
          <circle cx="80" cy="96" r="14" fill={`url(#${id("eye")})`} />
          <circle cx="120" cy="96" r="14" fill={`url(#${id("eye")})`} />
          <rect x="74" y="90" width="12" height="12" rx="6" fill="#ecfeff" />
          <rect x="114" y="90" width="12" height="12" rx="6" fill="#ecfeff" />
        </g>

        {/* Smile */}
        <path d="M86 136 Q100 146 114 136" stroke="#3171f3" strokeWidth="4" fill="none" strokeLinecap="round" />

        {/* Cheeks */}
        <circle cx="62" cy="136" r="5" fill="#f9a8d4" opacity="0.5" />
        <circle cx="138" cy="136" r="5" fill="#f9a8d4" opacity="0.5" />

        {/* Body hint */}
        <path d="M66 160 Q100 150 134 160 L140 196 H60 Z" fill={`url(#${id("head")})`} stroke="#bcd3fb" strokeWidth="2" />
        <circle cx="100" cy="176" r="8" fill={`url(#${id("accent")})`} />
      </svg>
    </div>
  );
}
