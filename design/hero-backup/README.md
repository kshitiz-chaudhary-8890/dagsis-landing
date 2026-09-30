# Previous Hero Layout — Backup (30 Sep 2026)

Ye backup us dark centered hero ka hai jo abhi live tha, taaki naya light 2-column design banane ke baad zarurat pade to wapas la sakein.

## Files backed up
- `Hero.backup.tsx` — `src/components/sections/hero/Hero.tsx` ka full copy
- `Hero.backup.module.css` — `src/components/sections/hero/Hero.module.css` ka full copy
- `hero.content.backup.ts` — `src/content/hero.ts` ka full copy

## Layout summary (previous)
- Full-screen dark hero (`min-height: 100svh`, black bg + radial purple/blue atmosphere)
- Center aligned: eyebrow pill, Instrument Serif italic headline (Your Business, / Answering Customers 24/7), description, 2 CTAs (Book a Demo primary, Get Started Free outline)
- Scroll hint "Meet your AI agent"
- Neeche alag `#agent-demo` section me `HeroBot` interactive demo (Your data -> Agent -> Chat preview)

## Restore kaise karein
1. `Hero.backup.tsx` ko `src/components/sections/hero/Hero.tsx` me copy karo
2. `Hero.backup.module.css` ko `src/components/sections/hero/Hero.module.css` me copy karo
3. Agar content बदला हो तो `hero.content.backup.ts` se `src/content/hero.ts` restore karo

## Naya design (current)
- Light 2-column hero (reference screenshot): left text "Always here. / Always helpful.", right me 3D glass D image
- File: `public/images/hero/d-glass-3d.png` (second image user se — black background wali image ko yahan save karna hai, background remove karke)
