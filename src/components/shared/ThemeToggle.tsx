"use client";

import { Moon, Sun } from "lucide-react";
import { useSyncExternalStore } from "react";
import { applyTheme, getDocumentTheme, type Theme } from "@/lib/theme";
import { cn } from "@/lib/utils";

// Subscribe to class changes on <html> so every toggle instance stays in sync.
function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
  return () => observer.disconnect();
}

/** Sun/moon switch. Theme is applied before paint by the script in layout.tsx. */
export function ThemeToggle({ className }: { className?: string }) {
  // Server render has no theme; `null` renders a neutral placeholder icon.
  const theme = useSyncExternalStore<Theme | null>(subscribe, getDocumentTheme, () => null);
  const next: Theme = theme === "dark" ? "light" : "dark";

  return (
    <button
      type="button"
      onClick={() => applyTheme(next)}
      aria-label={`Switch to ${next} theme`}
      title={`Switch to ${next} theme`}
      className={cn(
        "relative inline-flex size-10 items-center justify-center rounded-full text-ink-600 transition-colors hover:bg-ink-100 hover:text-ink-900",
        className,
      )}
    >
      <Sun
        className={cn(
          "size-[18px] transition-all duration-300",
          theme === "dark" ? "scale-0 -rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100",
        )}
      />
      <Moon
        className={cn(
          "absolute size-[18px] transition-all duration-300",
          theme === "dark" ? "scale-100 rotate-0 opacity-100" : "scale-0 rotate-90 opacity-0",
        )}
      />
    </button>
  );
}
