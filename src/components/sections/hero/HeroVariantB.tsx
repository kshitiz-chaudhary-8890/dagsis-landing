import Link from "next/link";
import {
  ArrowRight,
  Play,
  Sparkles,
  BookOpen,
  Share2,
  Zap,
  Send,
  Paperclip,
  Laptop,
  Store,
  User,
  CheckCheck,
  Globe,
  Ellipsis,
  Pointer, // agar purane lucide version me na mile: MousePointerClick use kar lo
  Mail,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui";
import { LogoMark } from "@/components/shared/Logo";
import { WhatsAppIcon, TelegramIcon } from "@/components/shared/BrandIcons";
import styles from "./HeroVariantB.module.css";

/** Instagram gradient mark (image me colorful hai, BrandIcons wala mono tha) */
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="hvb-ig" x1="2" y1="22" x2="22" y2="2" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#feda75" />
          <stop offset="0.3" stopColor="#fa7e1e" />
          <stop offset="0.55" stopColor="#d62976" />
          <stop offset="0.8" stopColor="#962fbf" />
          <stop offset="1" stopColor="#4f5bd5" />
        </linearGradient>
      </defs>
      <rect x="3" y="3" width="18" height="18" rx="5.5" stroke="url(#hvb-ig)" strokeWidth="2" />
      <circle cx="12" cy="12" r="4.2" stroke="url(#hvb-ig)" strokeWidth="2" />
      <circle cx="17.2" cy="6.8" r="1.25" fill="url(#hvb-ig)" />
    </svg>
  );
}

/** Messenger brand mark (inline so BrandIcons ko touch na karna pade) */
function MessengerIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <defs>
        <linearGradient id="hvb-msgr" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#0099ff" />
          <stop offset="1" stopColor="#a033ff" />
        </linearGradient>
      </defs>
      <path
        fill="url(#hvb-msgr)"
        d="M12 2C6.48 2 2 6.13 2 11.25c0 2.9 1.45 5.48 3.72 7.17V22l3.4-1.87c.86.24 1.77.37 2.88.37 5.52 0 10-4.13 10-9.25S17.52 2 12 2z"
      />
      <path
        fill="#fff"
        d="M5.9 14.2l3.3-5.25a1.5 1.5 0 0 1 2.17-.4l2.6 1.95a.6.6 0 0 0 .72 0l3.5-2.66c.47-.35 1.08.2.77.7l-3.3 5.25a1.5 1.5 0 0 1-2.17.4l-2.6-1.95a.6.6 0 0 0-.72 0l-3.5 2.66c-.47.35-1.08-.2-.77-.7z"
      />
    </svg>
  );
}

/**
 * Design 2 — "Your business. Always ready to reply."
 * Light 2-column hero with a tilted (3D) chat-mockup card on the right.
 */
export function HeroVariantB() {
  return (
    <section aria-label="Hero design 2" className={styles.hero}>
      <div aria-hidden="true" className={styles.wash}>
        <span className={styles.washTop} />
        <span className={styles.washRight} />
        <span className={styles.washBottom} />
      </div>

      <Container className={styles.inner}>
        <div className={styles.grid}>
          {/* ---- left copy ---- */}
          <div className={styles.copy}>
            <p className={`${styles.eyebrow} animate-fade-up`}>
              <Sparkles size={16} aria-hidden="true" />
              AI agents for every messaging channel
            </p>
            <h1 className={`${styles.headline} animate-fade-up`} style={{ animationDelay: "80ms" }}>
              <span className={styles.lineDark}>Your business.</span>
              <span className={styles.lineGradient}>Always ready to reply.</span>
            </h1>
            <p className={`${styles.description} animate-fade-up`} style={{ animationDelay: "160ms" }}>
              Turn your business knowledge into an AI agent that answers customers across WhatsApp,
              your website, and more.
            </p>
            <div className={`${styles.ctaRow} animate-fade-up`} style={{ animationDelay: "240ms" }}>
              <Link href={siteConfig.links.signUp} className={styles.primaryButton}>
                Get Started Free
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <Link href="#agent-demo" className={styles.demoButton}>
                <span className={styles.playCircle}>
                  <Play size={14} aria-hidden="true" />
                </span>
                Try the AI Demo
              </Link>
            </div>
            <ul className={styles.miniBadges}>
              <li>
                <span className={styles.miniIcon}>
                  <BookOpen size={15} aria-hidden="true" />
                </span>
                Your knowledge
              </li>
              <li>
                <span className={styles.miniIcon}>
                  <Share2 size={15} aria-hidden="true" />
                </span>
                Multiple channels
              </li>
              <li>
                <span className={`${styles.miniIcon} ${styles.miniIconPurple}`}>
                  <Zap size={15} aria-hidden="true" />
                </span>
                No coding required
              </li>
            </ul>
          </div>

          {/* ---- right chat mockup ---- */}
          <div className={`${styles.visual} animate-fade-up`} style={{ animationDelay: "200ms" }}>
            <div aria-hidden="true" className={styles.radar} />
            <svg className={styles.arcs} viewBox="0 0 600 680" fill="none" aria-hidden="true">
              <path
                d="M418 96 C 470 66, 505 48, 552 34"
                stroke="#b9a8e8"
                strokeWidth="1.5"
                strokeDasharray="4 7"
                strokeLinecap="round"
              />
              <circle cx="552" cy="34" r="5.5" fill="#7c3aed" />
              <circle cx="418" cy="96" r="4" fill="#a78bfa" />
              <path
                d="M566 430 C 596 478, 592 552, 560 606"
                stroke="#b9a8e8"
                strokeWidth="1.5"
                strokeDasharray="4 7"
                strokeLinecap="round"
              />
              <circle cx="560" cy="606" r="5.5" fill="#7c3aed" />
            </svg>

            <div className={styles.chatCard}>
              <div className={styles.tabs} role="tablist" aria-label="Channels">
                <span className={`${styles.tab} ${styles.tabActive}`} role="tab" aria-selected="true">
                  <WhatsAppIcon className={styles.tabIcon} />
                  WhatsApp
                </span>
                <span className={styles.tab} role="tab" aria-selected="false">
                  <InstagramIcon className={styles.tabIcon} />
                  Instagram
                </span>
                <span className={styles.tab} role="tab" aria-selected="false">
                  <Globe size={17} aria-hidden="true" className={styles.tabIcon} />
                  Website
                  <Pointer size={24} aria-hidden="true" className={styles.tabCursor} />
                </span>
              </div>

              {/* white inner panel (image me card ke andar wala white area) */}
              <div className={styles.panel}>
                <div className={styles.chatHead}>
                  <span className={styles.avatar}>
                    <LogoMark className={styles.avatarMark} />
                  </span>
                  <span className={styles.chatHeadText}>
                    <strong>Dagsis AI</strong>
                    <small>Demo conversation</small>
                  </span>
                  <Ellipsis size={18} aria-hidden="true" className={styles.chatHeadDots} />
                </div>

                <div className={styles.messages}>
                  <div className={styles.userRow}>
                    <p className={styles.userBubble}>
                      Can I book a consultation?
                      <span className={styles.msgMeta}>
                        10:24 <CheckCheck size={14} aria-hidden="true" />
                      </span>
                    </p>
                    <span className={styles.userAvatar}>
                      <User size={18} aria-hidden="true" />
                    </span>
                  </div>

                  <div className={styles.agentRow}>
                    <span className={styles.avatarSm}>
                      <LogoMark className={styles.avatarMark} />
                    </span>
                    <p className={styles.agentBubble}>
                      Of course! Would you prefer an online or in-store consultation?
                      <span className={styles.msgMetaLeft}>10:24</span>
                    </p>
                  </div>

                  <div className={styles.quickReplies}>
                    <span className={styles.quickReply}>
                      <Laptop size={15} aria-hidden="true" />
                      Online consultation
                    </span>
                    <span className={styles.quickReply}>
                      <Store size={15} aria-hidden="true" />
                      In-store consultation
                    </span>
                  </div>
                </div>

                <div className={styles.inputBar}>
                  <Paperclip size={18} aria-hidden="true" className={styles.inputIcon} />
                  <span className={styles.inputPlaceholder}>Ask a question...</span>
                  <span className={styles.sendButton}>
                    <Send size={16} aria-hidden="true" />
                  </span>
                </div>
              </div>
            </div>

            <aside className={`${styles.floatCard} ${styles.floatTop}`}>
              <span className={styles.floatIcon}>
                <BookOpen size={17} aria-hidden="true" />
              </span>
              <span>
                <strong>Knowledge connected</strong>
                <small>Uses your business content to give accurate answers.</small>
              </span>
            </aside>

            <aside className={`${styles.floatCard} ${styles.floatBottom}`}>
              <span className={`${styles.floatIcon} ${styles.floatIconPink}`}>
                <User size={17} aria-hidden="true" />
              </span>
              <span>
                <strong>Human handoff</strong>
                <small>Seamlessly transfer to your team when needed.</small>
              </span>
            </aside>
          </div>
        </div>
      </Container>

      {/* ---- bottom strip: one agent, every conversation ---- */}
      <div className={styles.strip}>
        <Container className={styles.stripInner}>
          <h2 className={styles.stripTitle}>One agent. Every conversation.</h2>
          <div className={styles.stripRow}>
            <span aria-hidden="true" className={`${styles.stripLine} ${styles.stripLineL}`} />
            <ul className={styles.stripTiles} aria-label="Channels">
              <li className={`${styles.tile} ${styles.tileGreen}`}>
                <WhatsAppIcon className={styles.tileIcon} />
              </li>
              <li className={styles.tile}>
                <InstagramIcon className={styles.tileIcon} />
              </li>
              <li className={`${styles.tile} ${styles.tileNavy}`}>
                <Globe size={24} aria-hidden="true" />
              </li>
              <li className={`${styles.tile} ${styles.tileSky}`}>
                <MessengerIcon className={styles.tileIcon} />
              </li>
              <li className={`${styles.tile} ${styles.tileSky} ${styles.tileTelegram}`}>
                <TelegramIcon className={styles.tileIcon} />
              </li>
              <li className={`${styles.tile} ${styles.tilePurple}`}>
                <Mail size={24} aria-hidden="true" />
              </li>
            </ul>
            <span aria-hidden="true" className={`${styles.stripLine} ${styles.stripLineR}`} />
          </div>
        </Container>
      </div>
    </section>
  );
}