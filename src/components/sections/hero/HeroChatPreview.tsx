import { ArrowLeft, BadgeCheck, CheckCheck, ChevronDown, LockKeyhole, Mic, MoreVertical, Paperclip, Phone, Send, Smile, Video, X } from "lucide-react";
import { ChannelIcon } from "./ChannelIcon";
import styles from "./HeroBot.module.css";
import type { DemoPhase } from "./HeroBot";

type Sample = { channel: string; question: string; answer: string };

export function HeroChatPreview({ sample, phase }: { sample: Sample; phase: DemoPhase }) {
  const website = sample.channel === "Website";
  const telegram = sample.channel === "Telegram";
  const theme = website ? "website" : telegram ? "telegram" : "whatsapp";
  const answered = phase === "reply" || phase === "complete";

  return (
    <div className={styles.chatShell} data-channel={theme} role="group" aria-label={`${sample.channel} example conversation`}>
      <div className={styles.appBar}>
        <span><ChannelIcon channel={sample.channel} size={15} />{website ? "Your website" : sample.channel}</span>
        <span className={styles.exampleLabel}>PREVIEW</span>
      </div>
      {website && <div className={styles.browserAddress}><LockKeyhole size={10} aria-hidden="true" /> yourstore.com <span>•••</span></div>}
      <div className={styles.chatHeader}>
        {!website && <ArrowLeft size={19} aria-hidden="true" />}
        <span className={styles.chatAvatar} aria-hidden="true">D<span /></span>
        <div className={styles.chatIdentity}>
          <span>{website ? "Dagsis Assistant" : "Dagsis Store"}<BadgeCheck size={14} aria-hidden="true" /></span>
          <small>{phase === "thinking" ? "typing…" : website ? "We're here to help" : telegram ? "bot" : "online"}</small>
        </div>
        <div className={styles.headerActions} aria-hidden="true">
          {website ? <><ChevronDown size={18} /><X size={17} /></> : <>{!telegram && <Video size={19} />}<Phone size={17} /><MoreVertical size={19} /></>}
        </div>
      </div>
      <div className={styles.chatBody}>
        {!website && (
          <svg className={styles.wallpaper} width="100%" height="100%" aria-hidden="true">
            <defs>
              <pattern id={`hero-wallpaper-${theme}`} width="110" height="105" patternUnits="userSpaceOnUse" patternTransform="rotate(-12)">
                <g fill="none" stroke="currentColor" strokeWidth="1.1">
                  <path d="M14 20h24a6 6 0 0 1 6 6v12a6 6 0 0 1-6 6H25l-8 6v-6h-3a6 6 0 0 1-6-6V26a6 6 0 0 1 6-6Z" />
                  <path d="m74 66 19-9-7 21-5-9-7-3Zm7 3 12-12M60 21l3-5 3 5 5 3-5 3-3 5-3-5-5-3 5-3Z" />
                  <circle cx="27" cy="78" r="8" /><path d="M24 77h.1M30 77h.1M24 81q3 3 6 0M94 29l3 3m0-3-3 3" />
                </g>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#hero-wallpaper-${theme})`} />
          </svg>
        )}
        <span className={styles.chatDay}>{website ? "Example conversation" : "Today"}</span>
        <div key={sample.channel} className={styles.messages} aria-live="polite" aria-atomic="true">
          <div className={styles.outgoing}>
            <p>{sample.question}</p>
            <span className={styles.messageTime}>10:41 <CheckCheck size={14} aria-hidden="true" /></span>
          </div>
          {phase === "thinking" && <div className={`${styles.incoming} ${styles.typing}`} aria-label="Agent is finding an answer"><span /><span /><span /></div>}
          {answered && <div className={`${styles.incoming} ${styles.newMessage}`}>
            {website && <span className={styles.agentName}>Dagsis Assistant</span>}
            <p>{sample.answer}</p>
            <span className={styles.messageTime}>10:41</span>
          </div>}
          {phase === "complete" && <div className={`${styles.outgoing} ${styles.newMessage}`}>
            <p>Great, thank you! 🙌</p>
            <span className={styles.messageTime}>10:42 <CheckCheck size={14} aria-hidden="true" /></span>
          </div>}
        </div>
      </div>
      <div className={styles.chatComposer} aria-hidden="true">
        <div className={styles.composerField}><Smile size={19} /><span>{website ? "Ask us anything…" : "Message"}</span><Paperclip size={18} /></div>
        <span className={styles.composerAction}>{website || telegram ? <Send size={18} /> : <Mic size={19} />}</span>
      </div>
      {website && <div className={styles.widgetCredit}>Powered by <strong>Dagsis.ai</strong></div>}
    </div>
  );
}
