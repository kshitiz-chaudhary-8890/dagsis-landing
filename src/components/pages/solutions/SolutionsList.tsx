import Image from "next/image";
import type { CSSProperties } from "react";
import { ArrowLeft, Camera, Check, FileText, Lock, Mic, MoreVertical, Paperclip, Phone, Search, Send, Smile, Video } from "lucide-react";
import { Container } from "@/components/ui";
import { Reveal } from "@/components/shared/Reveal";
import { solutionsPage } from "@/content/inner-pages";
import {
  DiscordIcon,
  FacebookIcon,
  InstagramIcon,
  TelegramIcon,
  WhatsAppIcon,
} from "@/components/shared/BrandIcons";
import { SectionHeading } from "./SectionHeading";
import styles from "./Page.module.css";

function SupportVisual() {
  return (
    <div className={styles.visual} aria-hidden="true">
      <div className={styles.inboxWindow}>
        <div className={styles.inboxHead}>
          <Image src="/brand/dagsis-mark.png" alt="" width={20} height={20} />
          <span>
            <strong>Support Agent</strong>
            <small>
              <i /> Online · replies instantly
            </small>
          </span>
        </div>
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
        <div className={styles.composer}>
          <span>Type a reply…</span>
          <span className={styles.sendBubble}>
            <Send size={13} aria-hidden="true" />
          </span>
        </div>
      </div>
      <p className={styles.visualCaption}>Watches the inbox, resolves in seconds</p>
    </div>
  );
}

function WhatsAppVisual() {
  return (
    <div className={`${styles.visual} ${styles.wallpaper}`} aria-hidden="true">
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
        <Lock size={11} aria-hidden="true" /> Messages are end-to-end encrypted.
        No one outside of this chat can read them.
      </div>
      <div className={styles.waBubble}>
        Is this in stock in blue?
        <small>10:24</small>
      </div>
      <div className={styles.waReply}>
        Yes! 14 left in blue. Want the link?
        <small>
          10:24 <span className={styles.ticks}>✓✓</span>
        </small>
      </div>
      <div className={styles.waComposer}>
        <span className={styles.waField}>
          <Smile size={19} aria-hidden="true" />
          Message
          <span className={styles.waFieldIcons}>
            <Paperclip size={17} aria-hidden="true" />
            <Camera size={18} aria-hidden="true" />
          </span>
        </span>
        <span className={styles.micButton}>
          <Mic size={16} aria-hidden="true" />
        </span>
      </div>
    </div>
  );
}

function LeadsVisual() {
  return (
    <div className={styles.visual} aria-hidden="true">
      <div className={styles.leadCard}>
        <span className={styles.leadAvatar}>AR</span>
        <span className={styles.leadLines}>
          <strong>Amelia Rose</strong>
          <small>amelia@studio.co · +65 8123 4567</small>
        </span>
        <span className={styles.leadSaved}>
          <Check size={12} strokeWidth={3.5} /> Lead
        </span>
      </div>
      <p className={styles.visualCaption}>Captured 2m ago — no forms needed</p>
    </div>
  );
}

function WebsiteVisual() {
  return (
    <div className={styles.visual} aria-hidden="true">
      <div className={styles.browserBar}>
        <i />
        <i />
        <i />
        <span>yourstore.com</span>
      </div>
      <div className={styles.pageLines}>
        <span style={{ width: "72%" }} />
        <span style={{ width: "94%" }} />
        <span style={{ width: "58%" }} />
      </div>
      <div className={styles.widgetBubble}>
        <Image src="/brand/dagsis-mark.png" alt="" width={18} height={18} />
        <div>
          <p>Hi! Ask me anything about our plans.</p>
          <small>
            <i /> Online · replies instantly
          </small>
        </div>
      </div>
      <p className={styles.visualCaption}>Website chat widget on your store</p>
    </div>
  );
}

function InternalVisual() {
  return (
    <div className={styles.visual} aria-hidden="true">
      <div className={styles.searchBar}>
        <Search size={14} />
        <span>How do we handle weekend returns?</span>
      </div>
      <div className={styles.docStack}>
        <div className={styles.doc}>
          <FileText size={15} />
          <span>
            <strong>Returns SOP v3 — §2 Weekend cover</strong>
            <small>Matched 1 paragraph · used in reply</small>
          </span>
        </div>
        <div className={styles.doc}>
          <FileText size={15} />
          <span>
            <strong>Onboarding guide</strong>
            <small>Related reading</small>
          </span>
        </div>
      </div>
      <p className={styles.visualCaption}>Grounded in your workspace docs</p>
    </div>
  );
}

function ChannelsVisual() {
  return (
    <div className={styles.visual} aria-hidden="true">
      <div className={styles.channelGrid}>
        <span>
          <WhatsAppIcon width={17} height={17} style={{ color: "#25D366" }} /> WhatsApp
          <i />
        </span>
        <span>
          <InstagramIcon width={17} height={17} /> Instagram
          <i />
        </span>
        <span>
          <FacebookIcon width={17} height={17} style={{ color: "#1877F2" }} /> Facebook
          <i />
        </span>
        <span>
          <TelegramIcon width={17} height={17} style={{ color: "#229ED9" }} /> Telegram
          <i />
        </span>
        <span>
          <DiscordIcon width={17} height={17} style={{ color: "#5865F2" }} /> Discord
          <i />
        </span>
      </div>
      <p className={styles.visualCaption}>One agent live on every channel</p>
    </div>
  );
}

const visuals = [
  SupportVisual,
  WhatsAppVisual,
  LeadsVisual,
  WebsiteVisual,
  InternalVisual,
  ChannelsVisual,
];

const spans = [7, 5, 5, 7, 6, 6];

export function SolutionsList() {
  return <section className={styles.section}>
    <Container className="max-w-[1440px]">
      <SectionHeading
        eyebrow="How businesses use Dagsis"
        title={<>How Businesses Use <em className="title-accent">Dagsis.</em></>}
      />
      <div className={styles.bento}>
        {solutionsPage.solutions.map((solution, index) => {
          const Visual = visuals[index];
          return (
            <Reveal
              key={solution.title}
              delay={(index % 2) * 100}
              className={styles.bentoCell}
              style={{ "--span": spans[index] } as CSSProperties}
            >
              <article className={styles.bentoCard}>
                <Visual />
                <div className={styles.bentoCopy}>
                  <h3>{solution.title}</h3>
                  <p>{solution.description}</p>
                  <p className={styles.bestFor}>
                    <span>Best for</span>
                    {solution.bestFor}
                  </p>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Container>
  </section>;
}
