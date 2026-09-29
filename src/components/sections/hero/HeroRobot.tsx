import styles from "./HeroBot.module.css";

/** Hero-specific illustration; the shared avatar stays unchanged elsewhere. */
export function HeroRobot({ thinking }: { thinking: boolean }) {
  return (
    <div className={styles.robotIllustration} data-thinking={thinking} aria-hidden="true">
      <svg viewBox="0 0 300 320" className={styles.robotSvg}>
        <defs>
          <linearGradient id="hero-shell" x1=".2" y1="0" x2=".9" y2="1">
            <stop stopColor="#fff" /><stop offset=".45" stopColor="#eef1ff" /><stop offset=".8" stopColor="#c5c7e9" /><stop offset="1" stopColor="#9195c7" />
          </linearGradient>
          <linearGradient id="hero-side" x1="0" x2="1" y2="1">
            <stop stopColor="#dbe2ff" /><stop offset=".5" stopColor="#9f9bd9" /><stop offset="1" stopColor="#626394" />
          </linearGradient>
          <linearGradient id="hero-face" x1="0" y1="0" x2=".8" y2="1">
            <stop stopColor="#242644" /><stop offset=".5" stopColor="#121b38" /><stop offset="1" stopColor="#070d22" />
          </linearGradient>
          <linearGradient id="hero-light" x1="0" x2="1" y2="1">
            <stop stopColor="#c6fcff" /><stop offset=".5" stopColor="#73e0ff" /><stop offset="1" stopColor="#7778ff" />
          </linearGradient>
          <radialGradient id="hero-eye"><stop stopColor="#81eaff" stopOpacity=".6" /><stop offset="1" stopColor="#81eaff" stopOpacity="0" /></radialGradient>
          <linearGradient id="hero-reflection" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#fff" stopOpacity=".2" /><stop offset="1" stopColor="#fff" stopOpacity="0" /></linearGradient>
        </defs>
        <ellipse cx="150" cy="300" rx="60" ry="7" fill="#7274e8" opacity=".15" />
        <g className={styles.robotFloat}>
          <path d="M150 62V43" stroke="#bfc9f6" strokeWidth="5" strokeLinecap="round" />
          <circle cx="150" cy="34" r="12" fill="url(#hero-eye)" /><circle cx="150" cy="34" r="6" fill="url(#hero-light)" />
          <rect x="43" y="118" width="27" height="58" rx="13" fill="url(#hero-side)" />
          <rect x="230" y="118" width="27" height="58" rx="13" fill="url(#hero-side)" />
          <rect x="47" y="126" width="8" height="37" rx="4" fill="url(#hero-light)" /><rect x="245" y="126" width="8" height="37" rx="4" fill="url(#hero-light)" />
          <path d="M128 211h44v22h-44Z" fill="url(#hero-side)" />
          <path d="M111 228q39-13 78 0l17 44q-6 20-56 21-50-1-56-21Z" fill="url(#hero-shell)" stroke="#e6e8ff" strokeOpacity=".4" />
          <path d="M109 235q-7 19-9 35 18 14 47 16" fill="none" stroke="#fff" strokeOpacity=".6" strokeWidth="3" />
          <circle cx="150" cy="256" r="12" fill="#8f99d5" /><circle cx="150" cy="256" r="9" fill="url(#hero-light)" /><circle cx="148" cy="253" r="3" fill="#fff" opacity=".7" />
          <rect x="62" y="61" width="176" height="157" rx="57" fill="url(#hero-shell)" stroke="#fff" strokeOpacity=".6" />
          <path d="M76 113q0-39 44-40h54" fill="none" stroke="#fff" strokeOpacity=".8" strokeWidth="4" strokeLinecap="round" />
          <rect x="79" y="95" width="142" height="89" rx="35" fill="url(#hero-side)" />
          <rect x="82" y="98" width="136" height="83" rx="33" fill="url(#hero-face)" stroke="#969de0" strokeOpacity=".55" />
          <path d="M97 114q10-11 28-10h65l-55 45H91q-4-24 6-35Z" fill="url(#hero-reflection)" />
          <g className={styles.robotEyes}>
            <circle cx="121" cy="138" r="24" fill="url(#hero-eye)" /><circle cx="179" cy="138" r="24" fill="url(#hero-eye)" />
            <rect x="113" y="127" width="16" height="23" rx="8" fill="url(#hero-light)" /><rect x="171" y="127" width="16" height="23" rx="8" fill="url(#hero-light)" />
          </g>
          <path d="M140 160q10 8 20 0" fill="none" stroke="#8ae7ff" strokeWidth="3" strokeLinecap="round" />
          <circle cx="150" cy="200" r="3" fill="#858dcc" /><circle cx="140" cy="200" r="2" fill="#bdc2e1" /><circle cx="160" cy="200" r="2" fill="#bdc2e1" />
        </g>
      </svg>
    </div>
  );
}
