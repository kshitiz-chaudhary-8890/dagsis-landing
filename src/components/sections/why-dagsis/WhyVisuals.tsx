import Image from "next/image";
import { ArrowLeft, ArrowRight, Camera, Check, CheckCheck, ChevronDown, FileText, LayoutDashboard, LockKeyhole, Mic, MoreVertical, Paperclip, Phone, Plus, Search, Send, ShieldCheck, Smile, Video } from "lucide-react";
import type { ReactNode } from "react";
import type { WhyReason } from "@/types/content";
import { LogoMark } from "@/components/shared/Logo";
import { WhatsAppIcon } from "@/components/shared/BrandIcons";
import styles from "./WhyDagsis.module.css";

function AppFrame({ label, children }: { label: string; children: ReactNode }) {
  return <div className={styles.appFrame}><div className={styles.appHeader}><LogoMark className="h-4" /><strong>Dagsis</strong><span>/ {label}</span><MoreVertical size={14} /></div><div className={styles.appBody}>{children}</div></div>;
}

function SingaporeVisual() {
  return <div className={styles.whatsappScene}>
    <div className={styles.whatsappBrand}><WhatsAppIcon className="size-5" /><span>WhatsApp Business</span></div>
    <div className={styles.whatsappWindow}>
      <div className={styles.whatsappHeader}><ArrowLeft size={17} /><span className={styles.businessAvatar}><Image src="/images/showcase/demo-salon.webp" alt="" fill sizes="36px" /></span><div>Studio &amp; You<small>Business account</small></div><Video size={18} /><Phone size={16} /><MoreVertical size={17} /></div>
      <div className={styles.whatsappMessages}>
        <span className={styles.chatDate}>Today</span>
        <div className={styles.whatsappOutgoing}>Hi! Do you have appointments this Saturday?<small>10:42 <CheckCheck size={13} /></small></div>
        <div className={styles.whatsappIncoming}>Yes, we have a slot at 11am. Would you like a haircut or a colour appointment?<small>10:42</small></div>
        <div className={styles.whatsappOutgoing}>A haircut, please.<small>10:43 <CheckCheck size={13} /></small></div>
        <div className={styles.whatsappIncoming}>Great! Can I have your name to help arrange it?<small>10:43</small></div>
      </div>
      <div className={styles.whatsappComposer}><div><Smile size={18} /><span>Message</span><Paperclip size={17} /><Camera size={18} /></div><span className={styles.voiceButton}><Mic size={19} /></span></div>
    </div>
    <span className={styles.sampleNote}>Sample business conversation</span>
  </div>;
}

function KnowledgeVisual() {
  return <AppFrame label="Playground">
    <div className={styles.agentToolbar}><span className={styles.agentDot} /> Customer care<span className={styles.readyBadge}>Ready</span></div>
    <div className={styles.question}>What is your return policy?</div>
    <div className={styles.answer}><span className={styles.answerAvatar}><LogoMark className="h-5" /></span><div><small>Customer care</small><p>Unused items can be returned within 14 days in their original packaging.</p></div></div>
    <div className={styles.sourceCard}><FileText size={15} /><div><strong>Returns policy.pdf</strong><span>Source used for this answer</span></div><Check size={13} /></div>
    <div className={styles.testComposer}>Test your agent...<Send size={13} /></div>
  </AppFrame>;
}

function SetupVisual() {
  return <AppFrame label="Agent settings">
    <div className={styles.sceneHeading}><strong>Create an agent</strong><span>Draft</span></div>
    <div className={styles.sceneField}><small>Agent name</small><div>Customer support</div></div>
    <div className={styles.sceneField}><small>Knowledge base</small><div><FileText size={13} /> Business documents<ChevronDown size={12} /></div></div>
    <div className={styles.toneSetting}><span>Tone of voice</span><span>Friendly<ChevronDown size={11} /></span></div>
    <div className={styles.publishRow}><span><Check size={12} /> Settings saved</span><span>Publish agent<ArrowRight size={13} /></span></div>
  </AppFrame>;
}

function SecurityVisual() {
  return <AppFrame label="Team">
    <div className={styles.sceneHeading}><strong>Team members</strong><span className={styles.inviteBadge}><Plus size={11} /> Invite</span></div>
    <div className={styles.memberTabs}><span>Members</span><span>Roles &amp; permissions</span></div>
    <div className={styles.memberSearch}><Search size={12} /> Search members...</div>
    <div className={styles.tableLabels}><span>Member</span><span>Role</span></div>
    {[{ initials: "JL", name: "Jamie Lee", role: "Admin" }, { initials: "AT", name: "Alex Tan", role: "Support" }].map(member => <div className={styles.teamMember} key={member.name}><span className={styles.memberAvatar}>{member.initials}</span><div><strong>{member.name}</strong></div><span className={styles.memberRole}>{member.role}<ChevronDown size={11} /></span></div>)}
    <div className={styles.permissionNote}><LockKeyhole size={12} /> Only admins can manage permissions.</div>
  </AppFrame>;
}

function GrowthVisual() {
  return <AppFrame label="Plans & billing">
    <div className={styles.sceneHeading}><strong>Your subscription</strong><LayoutDashboard size={14} /></div>
    <div className={styles.currentPlan}><span>Current plan</span><div><strong>Free</strong><span><Check size={11} /> Active</span></div><small>Start with your first workspace.</small></div>
    <div className={styles.businessOffer}><div><strong>Ready to grow?</strong><p>Choose a package that fits your business.</p></div><ArrowRight size={18} /></div>
    <div className={styles.billingFooter}><ShieldCheck size={13} /> Keep your workspace as you upgrade.</div>
  </AppFrame>;
}

const visuals = { singapore: SingaporeVisual, knowledge: KnowledgeVisual, setup: SetupVisual, security: SecurityVisual, growth: GrowthVisual };

export function WhyVisual({ id }: { id: WhyReason["id"] }) {
  const Visual = visuals[id];
  return <div className={styles.visual} aria-hidden="true"><Visual /></div>;
}
