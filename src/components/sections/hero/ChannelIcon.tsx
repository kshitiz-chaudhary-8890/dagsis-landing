import { Globe, Send } from "lucide-react";

export function ChannelIcon({ channel, size = 18 }: { channel: string; size?: number }) {
  if (channel === "Website") return <Globe size={size} aria-hidden="true" />;
  if (channel === "Telegram") return <Send size={size} fill="currentColor" strokeWidth={1.4} aria-hidden="true" />;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M20.8 11.6a8.9 8.9 0 0 1-13.2 7.8L3 21l1.5-4.5A8.9 8.9 0 1 1 20.8 11.6Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="m8.2 7.1 1.4 2.4-.9 1.1c.7 1.6 2 2.9 3.6 3.6l1.1-.9 2.4 1.4c.1.8-.4 1.9-1.5 1.9-3.6-.2-7.8-4.4-8-8 0-1.1 1.1-1.6 1.9-1.5Z" fill="currentColor" />
    </svg>
  );
}
