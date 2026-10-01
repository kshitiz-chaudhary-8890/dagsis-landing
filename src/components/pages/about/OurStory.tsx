import Image from "next/image";
import { ArrowDown, Check, Clock, FileText, Globe, Moon, ShieldCheck, UserX, Zap } from "lucide-react";
import { Container } from "@/components/ui";
import { Reveal } from "@/components/shared/Reveal";
import { WhatsAppIcon } from "@/components/shared/BrandIcons";
import { aboutPage } from "@/content/inner-pages";
import styles from "./OurStory.module.css";

/** Instagram official gradient mark (matches hero gradient treatment). */
function InstagramMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="os-ig" x1="2" y1="22" x2="22" y2="2" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#feda75" />
          <stop offset="0.3" stopColor="#fa7e1e" />
          <stop offset="0.55" stopColor="#d62976" />
          <stop offset="0.8" stopColor="#962fbf" />
          <stop offset="1" stopColor="#4f5bd5" />
        </linearGradient>
      </defs>
      <rect x="3" y="3" width="18" height="18" rx="5.5" stroke="url(#os-ig)" strokeWidth="2" />
      <circle cx="12" cy="12" r="4.2" stroke="url(#os-ig)" strokeWidth="2" />
      <circle cx="17.2" cy="6.8" r="1.25" fill="url(#os-ig)" />
    </svg>
  );
}

const MISSION_ACCENT = "reliable, brand-safe AI customer conversations";

function MissionText() {
  const mission = aboutPage.mission;
  const index = mission.indexOf(MISSION_ACCENT);
  if (index === -1) return <>{mission}</>;
  return (
    <>
      {mission.slice(0, index)}
      <span className={styles.missionAccent}>{MISSION_ACCENT}</span>
      {mission.slice(index + MISSION_ACCENT.length)}
    </>
  );
}

const REALITIES = [
  { icon: Moon, title: "Customers message at midnight", text: "WhatsApp first — especially after hours." },
  { icon: Clock, title: "Teams can't cover 24/7", text: "Hiring at the same pace isn't possible." },
  { icon: Zap, title: "Slow replies lose sales", text: "No answer? They go to another store." },
] as const;

export function OurStory() {
  return (
    <section className={styles.section} aria-labelledby="about-story-title">
      <Container className="max-w-[1440px]">
        {/* Intro: editorial headline + lede */}
        <div className={styles.intro}>
          <Reveal className={styles.introHead}>
            <span className="section-eyebrow">Why Dagsis exists</span>
            <h2 id="about-story-title" className={styles.title}>
              Who <em>we are</em>
            </h2>
          </Reveal>
          <Reveal className={styles.lede} delay={120}>
            <p>{aboutPage.whoWeAre[0]}</p>
          </Reveal>
        </div>

        {/* Story panel: the observation → the gap Dagsis closes */}
        <Reveal className={styles.panel} delay={80}>
          <div className={styles.observation}>
            <span className={styles.obsKicker}>The Observation We Started From</span>
            <p className={styles.obsQuote}>{aboutPage.whoWeAre[1]}</p>
            <ul className={styles.realities}>
              {REALITIES.map((item) => (
                <li key={item.title}>
                  <span className={styles.realityIcon} aria-hidden="true">
                    <item.icon size={17} />
                  </span>
                  <span>
                    <strong>{item.title}</strong>
                    <small>{item.text}</small>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.gap} aria-hidden="false">
            <div className={styles.before}>
              <div className={styles.gapHead}>
                <span className={styles.gapDot} data-state="missed" />
                Without Dagsis
              </div>
              <div className={styles.missedChat}>
                <div className={styles.missedHead}>
                  <span className={styles.missedAvatar} aria-hidden="true">C</span>
                  <strong>Customer</strong>
                  <span className={styles.missedChannel}>
                    <WhatsAppIcon width={11} height={11} style={{ color: "#25D366" }} /> WhatsApp
                  </span>
                </div>
                <p>Hi! Is this in stock? Can it arrive by Friday?</p>
                <small>
                  <Moon size={11} aria-hidden="true" /> 2:14 AM · seen 11 hours later
                </small>
              </div>
              <div className={styles.missedNote}>
                <span className={styles.missedNoteIcon} aria-hidden="true">
                  <UserX size={13} strokeWidth={2.5} />
                </span>
                <span>
                  <strong>Customer already left.</strong>
                  <small>No reply for 11 hours</small>
                </span>
              </div>
            </div>

            <div className={styles.bridge}>
              <span className={styles.bridgePill}>
                <ArrowDown size={14} aria-hidden="true" /> Dagsis closes that gap
              </span>
            </div>

            <div className={styles.after}>
              <div className={styles.gapHead}>
                <span className={styles.gapDot} data-state="live" />
                With Dagsis
                <span className={styles.liveTag}>Instant</span>
              </div>
              <div className={styles.answeredChat}>
                <span className={styles.botMark} aria-hidden="true">
                  <Image src="/brand/dagsis-mark.png" alt="" width={20} height={20} className={styles.botLogo} />
                </span>
                <div>
                  <p>Yes — in stock, arrives Thursday. Want me to reserve one for you?</p>
                  <small>
                    <FileText size={10} aria-hidden="true" /> Answered from your knowledge
                  </small>
                </div>
                <span className={styles.check} aria-hidden="true">
                  <Check size={14} strokeWidth={3} />
                </span>
              </div>
              <div className={styles.channels}>
                <span><WhatsAppIcon width={13} height={13} style={{ color: "#25D366" }} />WhatsApp</span>
                <span><Globe size={13} aria-hidden="true" style={{ color: "#235de0" }} />Website</span>
                <span><InstagramMark className={styles.channelMark} />Instagram</span>
                <span>+3 more</span>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Mission: light editorial statement */}
        <Reveal className={styles.mission} delay={60}>
          <span className="section-eyebrow">Our Mission</span>
          <p className={styles.missionText}>
            <MissionText />
          </p>
          <div className={styles.missionMeta}>
            <span>
              <span className={styles.missionMetaIcon} aria-hidden="true">
                <ShieldCheck size={16} strokeWidth={2.5} />
              </span>
              Brand-Safe
            </span>
            <span>
              <span className={styles.missionMetaIcon} aria-hidden="true">
                <FileText size={16} strokeWidth={2.5} />
              </span>
              From Your Knowledge
            </span>
            <span>
              <span className={styles.missionMetaIcon} aria-hidden="true">
                <Zap size={16} strokeWidth={2.5} />
              </span>
              No Developers Needed
            </span>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
