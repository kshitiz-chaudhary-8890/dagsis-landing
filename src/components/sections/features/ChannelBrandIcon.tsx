import { Globe } from "lucide-react";

export function ChannelBrandIcon({ channel }: { channel: string }) {
  if (channel === "Website") return <Globe size={25} strokeWidth={1.6} aria-hidden="true" />;

  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {channel === "WhatsApp" && <>
        <path d="M20.8 11.6a8.9 8.9 0 0 1-13.2 7.8L3 21l1.5-4.5A8.9 8.9 0 1 1 20.8 11.6Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="m8.2 7.1 1.4 2.4-.9 1.1c.7 1.6 2 2.9 3.6 3.6l1.1-.9 2.4 1.4c.1.8-.4 1.9-1.5 1.9-3.6-.2-7.8-4.4-8-8 0-1.1 1.1-1.6 1.9-1.5Z" fill="currentColor" />
      </>}
      {channel === "Instagram" && <>
        <rect x="3" y="3" width="18" height="18" rx="5.4" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="17.6" cy="6.5" r="1.1" fill="currentColor" />
      </>}
      {channel === "Facebook" && <path d="M13.4 22v-8.6h2.9l.43-3.35H13.4V7.91c0-.97.27-1.63 1.66-1.63h1.77v-3a23 23 0 0 0-2.58-.13c-2.55 0-4.3 1.56-4.3 4.43v2.47H7.07v3.35h2.88V22h3.45Z" fill="currentColor" />}
      {channel === "Telegram" && <path d="m21.5 3.8-3.3 15.6c-.25 1.1-.9 1.37-1.81.85l-5.03-3.7-2.43 2.34c-.27.27-.49.49-1 .49l.36-5.12 9.32-8.42c.41-.36-.09-.56-.64-.2L5.45 12.89.5 11.34c-1.07-.33-1.09-1.07.23-1.58L20.1 2.3c.9-.33 1.69.2 1.4 1.5Z" fill="currentColor" />}
      {channel === "Discord" && <path d="M19.7 5.2a18.9 18.9 0 0 0-4.5-1.4l-.55 1.1a17 17 0 0 0-5.3 0L8.8 3.8a18.9 18.9 0 0 0-4.5 1.4C1.46 9.4.69 13.5 1.07 17.54a18.2 18.2 0 0 0 5.57 2.83l1.14-1.85a12 12 0 0 1-1.76-.84l.43-.33a13.1 13.1 0 0 0 11.1 0l.43.33c-.57.33-1.16.61-1.76.84l1.14 1.85a18.2 18.2 0 0 0 5.57-2.83c.45-4.68-.78-8.74-3.23-12.34ZM8.7 14.7c-1.07 0-1.94-.97-1.94-2.16s.85-2.17 1.94-2.17c1.08 0 1.95.98 1.93 2.17 0 1.19-.85 2.16-1.93 2.16Zm6.6 0c-1.07 0-1.94-.97-1.94-2.16s.85-2.17 1.94-2.17c1.08 0 1.95.98 1.93 2.17 0 1.19-.85 2.16-1.93 2.16Z" fill="currentColor" />}
    </svg>
  );
}
