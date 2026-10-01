# AI Customer Support Visual Rebuild — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the AI Customer Support bento visual into a premium, realistic, animated support-chat loop.

**Architecture:** Pure JSX + CSS keyframe loop inside the existing `SolutionsList.tsx` / `Page.module.css` (no new files, no new deps). A 6s infinite cycle shows typing dots first, then the resolved answer — the "instant resolution" story in one glance.

**Tech Stack:** Next.js 16, React 19, CSS Modules, lucide-react (`Check` only), DM Sans 13px chat type.

## Global Constraints

- No new dependencies, no new files, no copy changes outside the visual mock.
- Reduced-motion users see the final static state (animations off).
- No fake business claims — mock text stays illustrative support copy already approved on this card.
- Typecheck (`npx tsc --noEmit`) must pass; impeccable `detect.mjs` must report no new findings.

---

### Task 1: Rewrite `SupportVisual` as a typing → answer loop

**Files:**
- Modify: `src/components/pages/solutions/SolutionsList.tsx` (`SupportVisual` only, lines ~15-30)

**Interfaces:**
- Consumes: existing `styles` module classes (new class names defined in Task 2).
- Produces: JSX using classes `visual`, `supportThread`, `chatCustomer`, `agentCycle`, `typingRow`, `typingDot`, `chatAgent`, `agentMeta`, `visualCaption`.

- [ ] **Step 1: Replace the `SupportVisual` function body**

```tsx
function SupportVisual() {
  return (
    <div className={styles.visual} aria-hidden="true">
      <div className={styles.supportThread}>
        <div className={styles.chatCustomer}>
          Do you offer refunds?
          <small>10:23</small>
        </div>
        <div className={styles.agentCycle}>
          <div className={styles.typingRow}>
            <span className={styles.typingDot} />
            <span className={styles.typingDot} />
            <span className={styles.typingDot} />
          </div>
          <div className={styles.chatAgent}>
            <p>Yes — full refunds within 30 days, no questions asked.</p>
            <small>
              <Check size={11} strokeWidth={3.5} /> Resolved in 4s · 10:23
            </small>
          </div>
        </div>
      </div>
      <p className={styles.visualCaption}>Watches the inbox, resolves in seconds</p>
    </div>
  );
}
```

- [ ] **Step 2: Verify placement** — Read back the `SupportVisual` block; confirm only that function changed and `aria-hidden="true"` is kept.

### Task 2: Add loop + typing CSS

**Files:**
- Modify: `src/components/pages/solutions/Page.module.css` (append near `.chatAgent` rules)

**Interfaces:**
- Consumes: class names from Task 1.
- Produces: 6s `supportLoop`/`typingLoop` keyframes + `.supportThread`, `.agentCycle`, `.typingRow`, `.typingDot` styles.

- [ ] **Step 1: Append the CSS block**

```css
.supportThread { display: flex; flex-direction: column; gap: 10px; }
.agentCycle { position: relative; display: grid; }
.typingRow { display: inline-flex; align-items: center; gap: 5px; padding: 13px 16px; border: 1px solid #e3eaf2; border-radius: 4px 14px 14px 14px; background: #fff; justify-self: start; animation: typingPhase 6s ease-in-out infinite; }
.typingDot { width: 7px; height: 7px; border-radius: 50%; background: #8fa0b8; animation: typingBounce 1.1s ease-in-out infinite; }
.typingDot:nth-child(2) { animation-delay: .18s; }
.typingDot:nth-child(3) { animation-delay: .36s; }
@keyframes typingBounce { 0%, 60%, 100% { opacity: .3; transform: translateY(0); } 30% { opacity: 1; transform: translateY(-3px); } }
.agentCycle .chatAgent { grid-area: 1 / 1; animation: answerPhase 6s ease-in-out infinite; }
.typingRow { grid-area: 1 / 1; }
@keyframes typingPhase { 0%, 30% { opacity: 1; } 36%, 92% { opacity: 0; } 96%, 100% { opacity: 1; } }
@keyframes answerPhase { 0%, 30% { opacity: 0; transform: translateY(8px); } 38%, 92% { opacity: 1; transform: none; } 96%, 100% { opacity: 0; } }
```

- [ ] **Step 2: Extend the reduced-motion rule** — add `.typingRow, .typingDot, .agentCycle .chatAgent` to the existing `animation: none` list, and force final state:

```css
@media (prefers-reduced-motion: reduce) { .typingRow { opacity: 0; } .agentCycle .chatAgent { opacity: 1; animation: none; } }
```

(Note: existing file already has a reduced-motion block ending with `.visual > *, ... { animation: none; }` — append the force-final-state rule beside it.)

### Task 3: Verify (typecheck + detector + responsive)

- [ ] **Step 1: Run typecheck** — Run: `npx tsc --noEmit`. Expected: no output (clean).
- [ ] **Step 2: Run detector** — Run: `node "C:\Users\jabit\.agents\skills\impeccable\scripts\detect.mjs" --json src/components/pages/solutions/SolutionsList.tsx src/components/pages/solutions/Page.module.css`. Expected: only the pre-existing hero-grid advisory.
- [ ] **Step 3: Eyeball mobile** — Confirm `.chatCustomer`/bubbles fit 360px (max-width 80-88% already constrains them; no new CSS needed).

## Self-Review

- **Spec coverage:** typing→answer loop (Tasks 1-2), realism kept (timestamps/ticks untouched), clarity (caption names the story), verification (Task 3). No gaps.
- **Placeholder scan:** all code blocks are complete; no TBDs.
- **Type consistency:** class names match 1:1 between Task 1 JSX and Task 2 CSS (`supportThread`, `agentCycle`, `typingRow`, `typingDot`, `chatAgent`, `visualCaption` — all defined or pre-existing).
