import Image from "next/image";
import { ArrowUpRight, CheckCheck, Mic, MoreVertical, Paperclip, Phone, Smile } from "lucide-react";
import { featureFlags } from "@/config/site";
import { finalCtaContent } from "@/content";
import { Container } from "@/components/ui";
import { ChannelBrandIcon } from "@/components/sections/features/ChannelBrandIcon";
import styles from "./FinalCta.module.css";

export function FinalCta() {
  const content = finalCtaContent;
  const note = featureFlags.noCreditCardRequired ? content.noCardNote : content.defaultNote;
  return <section id="book-demo" aria-labelledby="final-cta-title" className={styles.section}>
    <Container className="max-w-[1440px]">
      <div className={styles.panel}>
        <div className={styles.copy}>
          <span className={styles.kicker}>{content.eyebrow}</span>
          <h2 id="final-cta-title" className={`section-title ${styles.title}`}>{content.title}</h2>
          <p className={`section-description ${styles.description}`}>{content.description}</p>
          <div className={styles.actions}>
            <a className={styles.primaryAction} href={content.primaryCta.href}>{content.primaryCta.label}<span><ArrowUpRight size={19} strokeWidth={1.5} aria-hidden="true" /></span></a>
            <a className={styles.secondaryAction} href={content.secondaryCta.href}>{content.secondaryCta.label}<ArrowUpRight size={17} strokeWidth={1.5} aria-hidden="true" /></a>
          </div>
          <p className={styles.note}>{note}</p>
        </div>
        <div className={styles.visual} aria-hidden="true">
          <Image src="/images/showcase/demo-restaurant.webp" alt="" fill sizes="(max-width: 767px) 100vw, 45vw" className={styles.businessPhoto} />
          <div className={styles.channelLabel}><ChannelBrandIcon channel="WhatsApp" /><span>Your business, on WhatsApp.</span></div>
          <div className={styles.chat}>
            <div className={styles.chatHeader}><span className={styles.avatar}><Image src="/images/showcase/demo-restaurant.webp" alt="" fill sizes="34px" /></span><div>Your business<small>Dagsis AI assistant</small></div><Phone size={15} strokeWidth={1.5} /><MoreVertical size={17} strokeWidth={1.5} /></div>
            <div className={styles.chatMessages}>
              <span className={styles.chatDate}>Today</span>
              <div className={styles.customerMessage}>Hi, can I book a table for tonight?<small>19:42 <CheckCheck size={12} strokeWidth={1.5} /></small></div>
              <div className={styles.agentMessage}>Of course. What time would you like to come, and how many guests?<small>19:42</small></div>
            </div>
            <div className={styles.composer}><span><Smile size={17} strokeWidth={1.5} /><span>Message</span><Paperclip size={16} strokeWidth={1.5} /></span><span className={styles.mic}><Mic size={16} strokeWidth={1.5} /></span></div>
          </div>
          <p className={styles.exampleLabel}>Example conversation</p>
        </div>
      </div>
    </Container>
  </section>;
}
