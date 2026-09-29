# Dagsis — Landing Page

Marketing site for **Dagsis: AI Agents That Know Your Business**.

Built with **Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · lucide-react · Lenis**. Uses a fixed **light theme**, with scroll animations modelled on the reference sites.

```bash
npm install
npm run dev                 # http://localhost:3000
npm run build               # production build
npm run lint
npm run media:placeholders  # regenerate placeholder screenshots + video (dev server must be running)
```

---

## Project structure

```
src/
├── app/
│   ├── layout.tsx              # <html>, fonts, SEO metadata, light colour scheme
│   ├── globals.css             # Design tokens (colours per theme, animations) + utilities
│   ├── (site)/                 # Public marketing pages
│   │   ├── layout.tsx          #   Navbar, Footer, smooth scroll, skip link
│   │   └── page.tsx            #   The landing page: section ORDER lives here
│   └── (dev)/media-preview/    # DEV ONLY (404 in production): renders product screens
│                               #   so the media script can capture them
├── config/site.ts              # Brand name, URLs (sign-up, demo, video), feature flags
├── content/                    # ALL page copy, one file per section (edit text here)
├── types/content.ts            # TypeScript shapes for all content
├── hooks/
│   ├── useScrollProgress.ts    # 0→1 scroll progress of an element (+ lerp/range/easeOut)
│   ├── useInView.ts            # true once an element is on screen
│   └── useMediaQuery.ts        # media queries, useReducedMotion()
├── lib/
│   ├── utils.ts                # cn() class merger, formatPrice()
│   └── smooth-scroll.ts        # Lenis handle + scrollToY()
└── components/
    ├── ui/                     # Generic building blocks (no business copy)
    │   Button, Container, Section, SectionHeader, Eyebrow, IconBadge
    ├── layout/                 # Navbar, Footer, SmoothScroll
    ├── shared/                 # Reusable visuals + motion primitives:
    │   RobotAvatar, BrowserFrame, ChatBubble, BrandIcons, Logo (official Dagsis.ai artwork),
    │   Reveal, Marquee (ticker: speed, hover slow-down, drag/scroll), ScrollRevealText
    ├── dev/                    # MediaTour (only used by /media-preview)
    └── sections/               # One folder per landing section (+ its sub-components)
        ├── hero/               Hero, HeroBot, HeroRobot, HeroChatPreview, ChannelIcon, HeroGradient + scoped CSS
        ├── trusted-by/         TrustedBy            (hidden by flag)
        ├── problem/            Problem, ProblemItem, ProblemInbox
        ├── use-cases/          UseCases, UseCaseChat
        ├── video/              VideoSection
        ├── features/           Features, FeatureCards
        ├── product-showcase/   ProductShowcase, ShowcaseMedia, ShowcaseMocks, TourBubble
        ├── deploy-everywhere/  DeployEverywhere, ChannelHub
        ├── why-dagsis/         WhyDagsis, WhyVisuals
        ├── testimonial/        Testimonial
        ├── pricing/            PricingPreview, PricingCard, BillingToggle, CompareTable
        ├── faq/                Faq
        ├── final-cta/          FinalCta
        └── index.ts            # Barrel export

public/
├── brand/                                              # Web-sized official logo files (see "Logo")
├── images/showcase/<tab>-light.webp, <tab>-dark.webp   # PLACEHOLDER screenshots
├── images/video-poster.webp
└── videos/product-walkthrough.mp4                      # PLACEHOLDER walkthrough

scripts/generate-placeholder-media.mjs                  # makes the placeholder media above
design/brand/Final Dagsis Logo/                         # ORIGINAL logo artwork (not deployed)
```

### Principles

1. **Copy is data.** Components never hard-code marketing text; they read from `src/content`. Changing a headline is a one-file edit, and TypeScript catches missing fields.
2. **One section, one folder.** A section's helper components stay in its folder. Only truly reusable pieces go in `components/shared` or `components/ui`.
3. **Server components by default.** `"use client"` is only used where there's state or scroll/animation logic. Client components import content directly instead of receiving icon components as props, because functions can't be passed across the server/client boundary.
4. **Design tokens in one place.** Colours (`surface`, `ink-*`, `brand-*`, `night-*`) and keyframes live in `globals.css`. Public pages use the light neutral palette.
5. **Motion is built from shared primitives** (see below) and always respects `prefers-reduced-motion`.

---

## Light theme

Public pages always render in light mode. The navbar has no theme toggle, and OS colour preferences or an old `dagsis-theme` localStorage value do not change the site. Browser controls and the browser theme colour also use the light scheme.

**Rules for new components**
- Use semantic tokens: `bg-surface`, `bg-surface-raised`, `text-ink-900`, `text-ink-500`, and `ring-ink-200`.
- Primary buttons use the logo blue. Use the fixed deep-blue `night-*` palette for intentional contrast sections such as the video and pricing highlight.
- Use readable colours on light backgrounds and `currentColor` for SVG strokes.
- Use the light versions of product screenshots and logos. Legacy dark styles and paired assets remain available for media previews, but public pages do not activate dark mode.

---
## Logo

The official artwork is kept in `design/brand/Final Dagsis Logo/` (full-size PNGs, **not** deployed; `public/` would make 7 MB of source files downloadable).
The site uses small copies made from it:

| File | Made from | Used in |
|------|-----------|---------|
| `public/brand/dagsis-mark.png` | `1926.png` (mark, transparent) | Navbar, integrations orb |
| `public/brand/dagsis-wordmark-light.png` / `-dark.png` | `1924.png` "Dagsis.ai" text (dark version: navy text → white) | Navbar |
| `public/brand/dagsis-logo-light.png` / `-dark.png` | `1924.png` full lock-up with tagline | Footer |
| `src/app/favicon.ico`, `src/app/icon.png` | `1926.png` | Browser tab icon |
| `src/app/apple-icon.png` | `1926.png` on white | iOS home screen |
| `src/app/opengraph-image.png` | `1924.png` on white, 1200×630 | Link previews (WhatsApp, Slack, X…) |

All logo rendering goes through `components/shared/Logo.tsx` (`<Logo />` compact, `<Logo variant="full" />`, `<LogoMark />`). To update the logo, replace these files (same names and similar proportions), or regenerate them from new artwork.

---

## Motion

Motion follows the reference sites (mostly built in Framer, with Lenis smooth scroll on youratlas and joinboardly).

| Section | Motion | Reference | Built with |
|---------|--------|-----------|------------|
| Whole page | Inertial smooth scrolling | youratlas, joinboardly | `layout/SmoothScroll.tsx` (Lenis) |
| Hero | Full-viewport introduction with eyebrow, italic headline and CTAs; wide white agent demonstration follows on scroll | PDF + Framer references | `Hero`, `HeroBot`, `HeroRobot`, `HeroChatPreview`, `ChannelIcon`, `HeroGradient` |
| Problem | As the section arrives the left column builds in from the left: accent line + label, headline word by word (slide + un-blur), description, then a "Support inbox" illustration. The section then pins: problem cards slide in from the right while matching inbox rows slide in from the left, and the unanswered counter / waiting timer climb with scroll. Mobile: heading and inbox from the left, cards from the right | joinboardly / Intercom-style scroll storytelling | `Problem` (`enter` + `pin`), `ProblemInbox`, `ProblemItem`, content in `content/problem.ts` (`problemInbox`) |
| Use cases | Sticky cards that stack while scrolling (big gradient numerals, WhatsApp chat per use case); covered cards shrink and dim | cevver | `UseCases` + `useScrollProgress` |
| Video | Player grows to full size as it arrives | Framer sites | `VideoSection` |
| Features | Frosted cards on logo-colour gradients alternate with a product scene per feature. Ticker glides left at 25 px/s, eases to 10% speed on hover, drag / sideways-scroll to browse (measured from the reference) | dagis.framer.website | `Marquee` |
| Product tour | Section pins; each scroll step swings the active 16:9 card out to the left in 3D while the next turns in from top-right; a Dagsis bubble types then confirms the next stop; titles blur in/out. The front card is a link (↗ button on the image + ↗ on the title; hover zooms the image and fills the button blue); set `href` per tab in `content/showcase.ts` (default: Book a Demo) | anubi.io | `ProductShowcase`, `TourBubble` |
| Deploy | Pills pop in; dots travel along the connectors; arc rotates round the orb | youratlas | `ChannelHub` (SVG `animateMotion`) |
| Why Dagsis | Cards stagger in; each illustration plays once in view (bubbles appear, timeline dots pop, reply bars grow, checklist ticks); cards lift on hover | – | `WhyDagsis`, `WhyVisuals` |
| Testimonial | Quote brightens word by word | joinboardly | `ScrollRevealText` |
| FAQ | Smooth open/close | joinboardly | `.faq-item` in globals.css |
| Everything else | Fade up when scrolled into view | – | `Reveal` |

**Adding motion to a new section:** use `Reveal` for entrances. For scroll-linked effects, use `useScrollProgress(ref, mode)` with `range()` / `lerp()` / `easeOut()`, and fall back to the end state when `useReducedMotion()` is true.

---

## Visual style guidelines

The site should read as designed by people, not generated. Keep it that way:
- **Colour:** taken from the Dagsis.ai logo. Neutrals are navy-tinted (`ink-950` = wordmark navy `#030d26`), the accent is the ".ai" blue (`brand-500` = `#3171f3`), and `logo-cyan` / `logo-deep` come from the mark. **No purple and no black.** Primary buttons and highlights are the logo blue; dark blocks use deep blues (`night-*`). No glowing blur blobs or grid textures.
- **Type:** Instrument Sans for UI; Instrument Serif *italic* for the accent part of a headline (`titleAccent`).
- **Section labels:** plain text (`Eyebrow`), not pills with dots.
- **Layout rhythm:** mix `align="center"`, `"left"` and `"split"` headers; not every section is a centred title over a card grid.
- **Copy:** specific and plain. Avoid em dashes, "supercharge / seamless / unlock / elevate", and unverifiable numbers.

---

## Page sections & references

| # | Section | Reference | How it follows the reference |
|---|---------|-----------|------------------------------|
| – | Navbar | dagis.framer.website | Floating white rounded navigation with one primary CTA |
| 1 | Hero | PDF + Framer references | The first viewport contains the eyebrow, centered headline, explanation and CTAs over the reference gradient. A scroll link leads to a separate white agent demo with a 1440px container, larger robot, readable knowledge cards and chat previews up to 420px wide. A single sequence starts when the chat enters view: question, source lookup, reply and acknowledgement. Channels reset the example; replay brings the chat into view. Content stacks on mobile; reduced-motion preferences show the completed conversation without animation. |
| 2 | Trusted By | — | Built, **hidden** (`featureFlags.showTrustedBy`) until verified |
| 3 | The Problem | joinboardly (scroll storytelling) | Pinned split layout; problems slide in from the right as you scroll |
| 4 | Use Cases | cevver.com (stacking cards) | Sticky stacking cards: numeral `01–04`, icon + title, description, highlights; the use case's **WhatsApp** conversation on the right |
| 5 | Video | — | Poster + play; placeholder walkthrough video |
| 6 | Core Features | dagis.framer.website ("Who this platform is built for") | Edge-to-edge ticker alternating frosted feature cards (on scenic photos) with people photos; pill chips below |
| 7 | Product Tour | anubi.io ("In Evidenza") | Pinned 3D card carousel: 16:9 product scenes swing out left while the next turns in from the right (poses measured from the reference); Dagsis bubble announces each stop; counter + progress line; standard header and buttons |
| 8 | Deploy Everywhere | youratlas.com integrations | Centre orb, 6 channel pills (Website, WhatsApp, Instagram, Facebook, Telegram, Discord) on animated connectors |
| 9 | Why Dagsis | Bento grid (own design) | Lead card + 4 cards, each with a live illustration: sourced answer, 24h timeline, reply-time bars, channel row, setup checklist; slim CTA below |
| 10 | Testimonial | joinboardly founders quote | Magazine pull-quote, scroll-revealed |
| 11 | Pricing Preview | — | Free / Starter / Professional / Custom, monthly/yearly, compare table |
| 12 | FAQ | joinboardly.com | Centred single column of question cards |
| 13 | Final CTA | — | "No credit card" line only if `featureFlags.noCreditCardRequired` |

---

## Placeholder media

All images and the video in `public/` are **placeholders generated from the coded mock-ups**, so the site ships with real files in the right places.

**To use real media, replace the files and keep the names.**

| File | Used by |
|------|---------|
| `public/images/showcase/<tab>-light.webp` / `-dark.webp` (tabs: knowledge, builder, widget, conversations, analytics) | Product showcase (`content/showcase.ts`) |
| `public/images/features/bg-*.jpg`, `photo-*.jpg` | Feature ticker backgrounds and people photos (`content/features.ts`). **Taken from the Dagsis Framer draft (dagis.framer.website)**: confirm licensing or replace |
| `public/videos/product-walkthrough.mp4` | Video section (`siteConfig.links.productVideo`) |
| `public/images/video-poster.webp` | Video poster (`siteConfig.links.productVideoPoster`) |

If the new screenshots have a different pixel size, update `width`/`height` in `content/showcase.ts`. A YouTube/Vimeo embed URL also works for `productVideo`.

**Regenerating the placeholders** (after changing the mock-ups): run `npm run dev`, then `npm run media:placeholders` in a second terminal. The script uses your installed Chrome (set `CHROME_PATH` if it isn't found) and a bundled ffmpeg, and it clears the `next/image` cache afterwards.

> **Replacing an image with a file of the same name?** `next/image` may keep serving the cached old version. Delete `.next/cache/images` (and `.next/dev/cache/images` while developing) or restart with a fresh build.

---

## Common tasks

**Change copy.** Edit the matching file in `src/content/`.

**Reorder, add, or remove a section.** Edit `src/app/(site)/page.tsx`. To add a new section:
1. Add `src/content/my-section.ts` (plus types in `types/content.ts` if needed) and export it from `content/index.ts`.
2. Create `src/components/sections/my-section/MySection.tsx` using `<Section>` and `<SectionHeader>`.
3. Export it from `components/sections/index.ts` and place it in `page.tsx`.
4. To link it from the navbar, give the `<Section id="...">` an id and add it to `content/navigation.ts`.

**Turn on social proof.** Add logos to `public/images/logos/`, fill in `content/trusted-by.ts`, and set `featureFlags.showTrustedBy = true`.

**Rebrand colours.** Change the `brand` values in `src/app/globals.css`. Tints 50–200 are set per theme in `:root` / `.dark`, and 300–950 are in `@theme`.

---

## Before launch — placeholder checklist

- [ ] Real sign-up / sign-in / demo URLs (`config/site.ts`)
- [ ] Confirm pricing, limits, and compare table (`content/pricing.ts`)
- [ ] Confirm "No credit card required", then enable `noCreditCardRequired`
- [ ] Real, approved testimonial and metrics (`content/testimonials.ts`; metrics currently show "—")
- [ ] Real Dagsis screenshots for the showcase (`public/images/showcase/`)
- [ ] Real product video + poster (`public/videos/`, `public/images/video-poster.webp`)
- [ ] Hero agent sample conversations (`content/hero.ts`)
- [x] Official logo, favicon, app icons and social-share image (from `design/brand/`)
- [ ] FAQ answers reviewed, especially security (`content/faq.ts`)
- [ ] Footer links and social URLs
- [ ] `NEXT_PUBLIC_SITE_URL` env var for SEO metadata
