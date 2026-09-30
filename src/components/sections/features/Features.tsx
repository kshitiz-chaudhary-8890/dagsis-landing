import { ArrowLeft, ArrowUpRight, Bot, Check, CheckCheck, ChevronDown, FileText, Globe, LayoutDashboard, LockKeyhole, MessageCircle, Mic, MoreVertical, Paperclip, Phone, Search, ShieldCheck, Smile, Sparkles, Users, Video } from "lucide-react";
import { features, featuresIntro } from "@/content";
import { Section } from "@/components/ui";
import styles from "./Features.module.css";
import { ChannelBrandIcon } from "./ChannelBrandIcon";

function FeatureCopy({ title }: { title: string }) {
  const feature = features.find((item) => item.title === title)!;
  return <div className={styles.featureCopy}><h3>{feature.title}</h3><p>{feature.description}</p></div>;
}

function KnowledgePreview() {
  return <div className={styles.knowledgeDiagram} aria-hidden="true">
    <div className={styles.sourceCards}>
      <div><span><FileText size={22} /></span><strong>Product guide<small>PDF document</small></strong><Check size={13} /></div>
      <div><span><Globe size={22} /></span><strong>Your website<small>Pages & URLs</small></strong><Check size={13} /></div>
      <div><span><FileText size={22} /></span><strong>Business FAQs<small>Questions & answers</small></strong><Check size={13} /></div>
    </div>
    <div className={styles.knowledgeConnectors}><svg viewBox="0 0 500 65" preserveAspectRatio="none" fill="none"><path d="M85 0V12Q85 29 110 29H220Q250 29 250 50V65M250 0V65M415 0V12Q415 29 390 29H280Q250 29 250 50" /></svg><span>Connected to your knowledge</span></div>
    <div className={styles.agentCard}>
      <div className={styles.agentIdentity}><span><Bot size={28} /></span><div>Customer care agent<small><i /> Ready to answer</small></div><Sparkles size={17} /></div>
      <div className={styles.agentRule}><span>Personality</span><strong>Friendly & helpful</strong></div>
      <div className={styles.agentRule}><span>Knowledge</span><strong><Check size={12} /> Your business content</strong></div>
      <div className={styles.agentMessage}>“Hi! How can I help you today?”</div>
    </div>
  </div>;
}

function WorkspacePreview() {
  return <div className={styles.workspaceFrame} aria-hidden="true">
    <div className={styles.appTopbar}><span><span className={styles.appDot} /> Dagsis workspace</span><span>Settings <ChevronDown size={11} /></span></div>
    <div className={styles.workspaceBody}>
      <aside className={styles.appSidebar}><span className={styles.sidebarMark}>D.</span><LayoutDashboard size={17} /><Bot size={17} /><MessageCircle size={17} /><span className={styles.sidebarActive}><Users size={17} /></span><LockKeyhole size={17} /></aside>
      <div className={styles.workspacePreview}>
        <div className={styles.workspaceTop}><div>Team members<small>Manage your team and their access.</small></div><span className={styles.inviteMember}>+ Invite</span></div>
        <div className={styles.workspaceFolders}><span className={styles.settingsTabActive}>Members</span><span>Roles</span><span>Permissions</span></div>
        <div className={styles.memberHeading}>Member <span>Role</span></div>
        {[{ initials: "JL", name: "Jamie Lee", role: "Admin" }, { initials: "AT", name: "Alex Tan", role: "Support" }, { initials: "SL", name: "Sarah Lim", role: "Sales" }].map((member) => <div key={member.name} className={styles.member}><span className={styles.avatar}>{member.initials}</span><span>{member.name}<small>{member.name.toLowerCase().replace(" ", ".")}@example.com</small></span><b>{member.role}<ChevronDown size={10} /></b></div>)}
        <div className={styles.permission}><ShieldCheck size={14} /> Only admins can manage permissions.</div>
      </div>
    </div>
  </div>;
}

function ConversationPreview() {
  return <div className={`${styles.smallPreview} ${styles.conversationPreview}`} aria-hidden="true">
    <div className={styles.whatsappHeader}><ArrowLeft size={16} /><span className={styles.whatsappAvatar}><Bot size={21} /></span><div>Your Business<small>Business account</small></div><Video size={17} /><Phone size={15} /><MoreVertical size={16} /></div>
    <div className={styles.whatsappBody}>
      <span className={styles.chatDay}>TODAY</span>
      <span className={styles.chatSecurity}><LockKeyhole size={9} /> Messages are end-to-end encrypted.</span>
      <div className={styles.customerBubble}>Do you deliver on weekends?<small>10:42 <CheckCheck size={12} /></small></div>
      <div className={styles.agentBubble}>Yes! We deliver on Saturdays from 9am to 6pm.<small>10:42</small></div>
    </div>
    <div className={styles.whatsappComposer}><span><Smile size={17} /><span>Message</span><Paperclip size={16} /></span><i><Mic size={17} /></i></div>
    <div className={styles.conversationFooter}><Check size={12} /> Saved to session history <ArrowUpRight size={12} /></div>
  </div>;
}

function LeadsPreview() {
  return <div className={`${styles.smallPreview} ${styles.leadsPreview}`} aria-hidden="true">
    <div className={styles.miniAppBar}><span>Leads <ChevronDown size={11} /></span><Search size={13} /><MoreVertical size={14} /></div>
    <div className={styles.leadContent}>
      <div className={styles.leadRecord}><span className={styles.leadAvatar}>SC</span><div>Sam Chen<small>Added today at 10:42</small></div><span className={styles.leadTag}>New</span></div>
      <div className={styles.leadField}><span>Email</span><b>sam@example.com</b></div>
      <div className={styles.leadField}><span>Source</span><b><ChannelBrandIcon channel="WhatsApp" /> WhatsApp</b></div>
      <div className={styles.leadField}><span>Assigned to</span><b><span className={styles.assigneeAvatar}>SL</span> Sarah Lim</b></div>
      <div className={styles.leadNote}><MessageCircle size={12} /><div>Conversation summary<small>Interested in a demo. Asked about weekend delivery.</small></div></div>
    </div>
  </div>;
}

function AnalyticsPreview() {
  return <div className={`${styles.smallPreview} ${styles.analyticsPreview}`} aria-hidden="true">
    <div className={styles.miniAppBar}><span>Analytics</span><span className={styles.dateFilter}>Last 7 days <ChevronDown size={10} /></span></div>
    <div className={styles.analyticsContent}>
      <div className={styles.metrics}><div><span>Conversations</span><b>1,284</b><small>Across all channels</small></div><div><span>Resolved by AI</span><b>86<small>%</small></b><small>Demo data</small></div></div>
      <div className={styles.chartLegend}><span><i /> Conversations</span><span><i /> Resolved</span></div>
      <div className={styles.chart}>{[42, 64, 54, 76, 68, 92, 86].map((height, index) => <div key={index}><span style={{ height: `${height}%` }} /><span style={{ height: `${height * .78}%` }} /></div>)}</div>
      <div className={styles.chartLabels}>{["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(day => <span key={day}>{day}</span>)}</div>
    </div>
  </div>;
}

export function Features() {
  return <Section id="features" aria-labelledby="features-title" containerClassName="max-w-[1440px]" className={`${styles.section} py-8 sm:py-10`}>
    <div className={styles.inner}>
      <header className={styles.intro}>
        <div><span className={styles.kicker}>Core platform features</span><h2 id="features-title" className={`section-title ${styles.title}`}>{featuresIntro.title}</h2></div>
        <div className={styles.introAside}><span className={styles.platformLabel}><span /> One connected platform</span><p className={`section-description ${styles.desc}`}>{featuresIntro.description}</p></div>
      </header>
      <div className={styles.featureGrid}>
        <article className={`${styles.panel} ${styles.knowledgePanel}`}>
          <div className={styles.panelHeading}><span>Built around your business</span><Sparkles size={18} /></div>
          <KnowledgePreview />
          <div className={styles.knowledgeMessage}>
            <h3>Your Knowledge. Your Agent. Better Conversations.</h3>
            <p>Bring your website content, documents, and FAQs together to give your AI agent the knowledge it needs. Choose its tone and role, then connect it to your channels to answer customer questions in your brand’s voice.</p>
          </div>
          <div className={styles.pairedCopy}><FeatureCopy title="Knowledge Base" /><FeatureCopy title="Agents" /></div>
        </article>
        <article className={`${styles.panel} ${styles.workspacePanel}`}>
          <div className={styles.panelHeading}><span>A place for your whole team</span><ShieldCheck size={18} /></div>
          <WorkspacePreview />
          <div className={styles.workspaceCopy}><FeatureCopy title="Workspace" /><div className={styles.pairedCopy}><FeatureCopy title="Team Members" /><FeatureCopy title="Role-Based Access" /></div></div>
        </article>
        <article className={`${styles.panel} ${styles.detailPanel}`}><ConversationPreview /><FeatureCopy title="Session and Chat History" /></article>
        <article className={`${styles.panel} ${styles.detailPanel}`}><LeadsPreview /><FeatureCopy title="Leads" /></article>
        <article className={`${styles.panel} ${styles.detailPanel}`}><AnalyticsPreview /><FeatureCopy title="Analytics" /></article>
      </div>
    </div>
  </Section>;
}
