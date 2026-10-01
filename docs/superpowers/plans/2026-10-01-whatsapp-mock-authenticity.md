# WhatsApp Mock Authenticity Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the WhatsApp solution visual indistinguishable-at-a-glance from a real WhatsApp Business chat.

**Architecture:** Extend the existing `WhatsAppVisual` JSX + `.wa*` CSS only (no new files/deps). Add the 3 missing iconic WA elements identified in gap analysis below.

**Tech Stack:** React 19, CSS Modules, lucide-react glyphs (`MoreVertical`, `Smile`, `Paperclip`, `Camera` — verify exports first, fallback: omit).

## Global Constraints

- Keep the card's size budget: visual stays ~same height (composer replaces caption space; caption line is removed, story is told by the UI itself).
- Reduced-motion: ping/entrance already covered; new elements are static.
- `npx tsc --noEmit` clean; detector: no new findings.

---

## Gap analysis (real WA Android vs ours)

| # | Real element | Ours | Verdict |
|---|--------------|------|---------|
| 1 | Header: back + avatar + name/status + video, voice, ⋮ menu | Missing ⋮ | ADD |
| 2 | Yellow encryption notice chip under date | Missing | ADD |
| 3 | Composer: emoji + field + attach/camera + green round mic button | Plain grey bar, grey mic | REWORK |
| 4 | Colors (#075E54, #D9FDD3, #53BDEB ticks, #667781 time) | Already exact | KEEP |

---

### Task 1: Header ⋮ menu + composer rework (TSX)

**Files:**
- Modify: `src/components/pages/solutions/SolutionsList.tsx` (`WhatsAppVisual` only)

**Interfaces:**
- Consumes: `styles.waMenu`, `styles.waComposer`, `styles.waField`, `styles.micButton`, `styles.waNotice`, `styles.waLock` (defined in Task 2).
- Produces: unchanged component signature.

- [ ] **Step 1: Verify icon exports**

Run: `node -e "const l=require('lucide-react'); for (const n of ['MoreVertical','Smile','Paperclip','Camera']) console.log(n, typeof l[n]);"`
Expected: all `object`. If any is `undefined`, drop that icon from the JSX below (keep the rest).

- [ ] **Step 2: Rewrite header end + notice + composer**

```tsx
<div className={styles.waHead}>
  <ArrowLeft size={17} aria-hidden="true" className={styles.waBack} />
  <span className={styles.waAvatar}>S</span>
  <span className={styles.waName}>
    <strong>Shop Assistant</strong>
    <small>online</small>
  </span>
  <Video size={17} aria-hidden="true" />
  <Phone size={16} aria-hidden="true" />
  <MoreVertical size={17} aria-hidden="true" />
</div>
<div className={styles.waDate}>Today</div>
<div className={styles.waNotice}>
  <Lock size={11} aria-hidden="true" /> Messages are end-to-end encrypted. No one
  outside of this chat can read them.
</div>
```

(`Lock` must be added to the lucide import after Step 1 verification.)

```tsx
<div className={styles.waComposer}>
  <span className={styles.waField}>
    <Smile size={19} aria-hidden="true" />
    Message
    <Paperclip size={17} aria-hidden="true" />
    <Camera size={18} aria-hidden="true" />
  </span>
  <span className={styles.micButton}>
    <Mic size={16} aria-hidden="true" />
  </span>
</div>
```

- [ ] **Step 3: Remove the old caption line** — delete `<p className={styles.visualCaption}>WhatsApp Business · replies instantly</p>` from `WhatsAppVisual` (the UI now tells the story; keeps height budget).

### Task 2: Notice + composer CSS

**Files:**
- Modify: `src/components/pages/solutions/Page.module.css` (`.wa*` area)

- [ ] **Step 1: Replace composer + add notice styles**

```css
.waNotice { align-self: center; max-width: 92%; padding: 7px 12px; border-radius: 8px; background: #fdf3c6; color: #54656f; font-family: var(--font-dm-sans), Arial, sans-serif; font-size: 10.5px; line-height: 1.5; text-align: center; box-shadow: 0 1px 1px rgb(11 20 26 / 12%); }
.waNotice svg { display: inline; width: 11px; height: 11px; vertical-align: -1px; }
.waComposer { display: flex; align-items: center; gap: 8px; margin: 2px -24px -24px; padding: 7px 10px; background: transparent; }
.waField { display: flex; flex: 1; align-items: center; gap: 10px; padding: 10px 14px; border-radius: 999px; background: #fff; color: #8696a0; font-family: var(--font-dm-sans), Arial, sans-serif; font-size: 13.5px; box-shadow: 0 1px 1px rgb(11 20 26 / 10%); }
.waField svg { flex: none; color: #8696a0; }
.waField svg:nth-of-type(2), .waField svg:nth-of-type(3) { margin-left: auto; }
```

Wait — three trailing icons won't all sit right with that selector. Use explicit: wrap trailing pair. Simpler final JSX: `<Smile/> Message <span className={styles.waFieldIcons}><Paperclip/><Camera/></span>` with `.waFieldIcons { display:inline-flex; gap:10px; margin-left:auto; }`. (Adjust Step 2 JSX accordingly when implementing.)

```css
.micButton { display: grid; place-items: center; flex: none; width: 42px; height: 42px; border-radius: 50%; background: #00a884; color: #fff; box-shadow: 0 1px 2px rgb(11 20 26 / 25%); }
```

- [ ] **Step 2: Update the 560px media rule** — change `.waComposer { margin: 2px -16px -20px; }` to `.waComposer { margin: 2px -16px -20px; padding: 6px 8px; }`.

### Task 3: Verify

- [ ] **Step 1: Typecheck** — Run: `npx tsc --noEmit`. Expected: clean.
- [ ] **Step 2: Detector** — Run impeccable `detect.mjs --json` on both files. Expected: only pre-existing hero-grid advisory.

## Self-Review

- **Spec coverage:** ⋮ menu, encryption notice, real composer (Tasks 1-2); budget kept by removing caption; verification (Task 3). No gaps.
- **Placeholder scan:** complete code, no TBDs. (Step 2's `waFieldIcons` wrapper note is incorporated at implementation.)
- **Type consistency:** new class names identical in TSX/CSS (`waNotice`, `waField`, `waFieldIcons`, `micButton`, `waLock` not needed — Lock used bare).
