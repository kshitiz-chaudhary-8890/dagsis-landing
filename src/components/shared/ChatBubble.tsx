import type { ChatMessage } from "@/types/content";
import { cn } from "@/lib/utils";

type Theme = "whatsapp" | "brand";

const themes: Record<Theme, { user: string; agent: string }> = {
  whatsapp: {
    // WhatsApp's own light / dark bubble colours.
    user: "bg-[#d9fdd3] text-[#111b21] dark:bg-[#005c4b] dark:text-[#e9edef] rounded-tr-sm ml-auto",
    agent: "bg-white text-[#111b21] dark:bg-[#202c33] dark:text-[#e9edef] rounded-tl-sm shadow-sm",
  },
  brand: {
    user: "bg-brand-600 text-white rounded-tr-sm ml-auto",
    agent: "bg-ink-100 text-ink-900 rounded-tl-sm",
  },
};

/** A single chat message bubble. */
export function ChatBubble({
  message,
  theme = "brand",
  className,
}: {
  message: ChatMessage;
  theme?: Theme;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "w-fit max-w-[85%] rounded-2xl px-3 py-2 text-[13px] leading-snug",
        themes[theme][message.from],
        className,
      )}
    >
      {message.text}
      {message.time && (
        <span className="ml-2 inline-block translate-y-0.5 text-[10px] opacity-50">{message.time}</span>
      )}
    </div>
  );
}

/** Animated three-dot "agent is typing" indicator. */
export function TypingIndicator({ className }: { className?: string }) {
  return (
    <div className={cn("flex w-fit gap-1 rounded-2xl rounded-tl-sm bg-surface-raised px-3 py-2.5 shadow-sm", className)}>
      {[0, 150, 300].map((delay) => (
        <span
          key={delay}
          className="size-1.5 animate-typing rounded-full bg-ink-400"
          style={{ animationDelay: `${delay}ms` }}
        />
      ))}
    </div>
  );
}
