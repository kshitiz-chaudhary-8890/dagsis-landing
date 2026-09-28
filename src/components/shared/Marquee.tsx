"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";
import { useReducedMotion } from "@/hooks/useMediaQuery";
import { cn } from "@/lib/utils";

/**
 * Infinite horizontal ticker (Framer-style, as on dagis.framer.website).
 *
 * - Moves at a constant `speed` (px/s).
 * - On hover it eases down to `hoverSpeed` (default: 10% of `speed`) and
 *   eases back up on leave, rather than stopping dead.
 * - Horizontally scrollable: drag it with mouse/touch, or scroll sideways
 *   with a trackpad; it carries on from wherever you leave it.
 * - Pauses while off screen. With reduced motion it doesn't auto-move but
 *   can still be dragged / scrolled.
 *
 * Content is rendered twice (second copy hidden from assistive tech) and the
 * track wraps by one copy's width, so the loop is seamless. One copy should
 * be at least as wide as the viewport.
 */
export function Marquee({
  children,
  speed = 25,
  hoverSpeed,
  reverse = false,
  gap = "0.75rem",
  fadeEdges = false,
  className,
}: {
  children: ReactNode;
  /** Auto-scroll speed in px per second. */
  speed?: number;
  /** Speed while hovered. Default: `speed * 0.1`. */
  hoverSpeed?: number;
  /** Move left-to-right instead of right-to-left. */
  reverse?: boolean;
  /** Space between items (any CSS length). */
  gap?: string;
  /** Fade the left/right edges. */
  fadeEdges?: boolean;
  className?: string;
}) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    const copy = copyRef.current;
    if (!viewport || !track || !copy) return;

    const cruise = reduced ? 0 : speed;
    const slow = reduced ? 0 : (hoverSpeed ?? speed * 0.1);
    const direction = reverse ? 1 : -1;

    let offset = 0;
    let current = cruise;
    let target = cruise;
    let last = performance.now();
    let frame = 0;
    let visible = true;
    let drag: { startX: number; startOffset: number; id: number } | null = null;

    const render = () => {
      const w = copy.offsetWidth;
      if (w > 0) offset = (((offset % w) + w) % w) - w; // keep within [-w, 0)
      track.style.transform = `translate3d(${offset}px, 0, 0)`;
    };

    const tick = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      current += (target - current) * Math.min(1, dt * 4); // ease towards target speed
      if (!drag) offset += direction * current * dt;
      render();
      frame = visible ? requestAnimationFrame(tick) : 0;
    };

    const start = () => {
      if (!frame) {
        last = performance.now();
        frame = requestAnimationFrame(tick);
      }
    };

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) start();
    });
    io.observe(viewport);

    const onEnter = () => (target = slow);
    const onLeave = () => (target = cruise);

    const onDown = (e: PointerEvent) => {
      if (e.pointerType === "mouse" && e.button !== 0) return;
      drag = { startX: e.clientX, startOffset: offset, id: e.pointerId };
      viewport.setPointerCapture(e.pointerId);
      viewport.dataset.dragging = "true";
    };
    const onMove = (e: PointerEvent) => {
      if (!drag || e.pointerId !== drag.id) return;
      offset = drag.startOffset + (e.clientX - drag.startX);
      render();
    };
    const onUp = (e: PointerEvent) => {
      if (!drag || e.pointerId !== drag.id) return;
      drag = null;
      delete viewport.dataset.dragging;
    };
    // Sideways trackpad / shift+wheel scrolls the strip; vertical wheel scrolls the page.
    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) <= Math.abs(e.deltaY)) return;
      e.preventDefault();
      offset -= e.deltaX;
      render();
    };

    viewport.addEventListener("pointerenter", onEnter);
    viewport.addEventListener("pointerleave", onLeave);
    viewport.addEventListener("pointerdown", onDown);
    viewport.addEventListener("pointermove", onMove);
    viewport.addEventListener("pointerup", onUp);
    viewport.addEventListener("pointercancel", onUp);
    viewport.addEventListener("wheel", onWheel, { passive: false });
    start();

    return () => {
      cancelAnimationFrame(frame);
      io.disconnect();
      viewport.removeEventListener("pointerenter", onEnter);
      viewport.removeEventListener("pointerleave", onLeave);
      viewport.removeEventListener("pointerdown", onDown);
      viewport.removeEventListener("pointermove", onMove);
      viewport.removeEventListener("pointerup", onUp);
      viewport.removeEventListener("pointercancel", onUp);
      viewport.removeEventListener("wheel", onWheel);
    };
  }, [speed, hoverSpeed, reverse, reduced]);

  const copyClass = "flex shrink-0 gap-[var(--marquee-gap)] pr-[var(--marquee-gap)]";

  return (
    <div
      ref={viewportRef}
      className={cn(
        "cursor-grab touch-pan-y overflow-hidden select-none data-[dragging]:cursor-grabbing",
        fadeEdges && "mask-fade-x",
        className,
      )}
      style={{ "--marquee-gap": gap } as CSSProperties}
    >
      <div ref={trackRef} className="flex w-max will-change-transform">
        <div ref={copyRef} className={copyClass}>
          {children}
        </div>
        <div className={copyClass} aria-hidden="true" inert>
          {children}
        </div>
      </div>
    </div>
  );
}
