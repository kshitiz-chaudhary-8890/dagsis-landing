"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, CalendarClock, Check, Mail, Send } from "lucide-react";
import { Container } from "@/components/ui";
import { Reveal } from "@/components/shared/Reveal";
import { siteConfig } from "@/config/site";
import styles from "./Page.module.css";

const demoEmail = "mailto:sales@dagsis.com?subject=Book%20a%20Dagsis%20Demo";

const channels = [
  {
    icon: Mail,
    title: "Email us",
    text: "sales@dagsis.com",
    href: siteConfig.links.contactSales,
  },
  {
    icon: CalendarClock,
    title: "Book a demo",
    text: "See Dagsis on your own data",
    href: demoEmail,
  },
] as const;

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <section className={styles.formSection} aria-labelledby="contact-form-title">
      <Container className="max-w-[1440px]">
        <Reveal className={styles.formPanel}>
          <div className={styles.formIntro}>
            <span className="section-eyebrow">Start a conversation</span>
            <h2 id="contact-form-title" className={styles.formTitle}>
              Tell us what your <em>business needs.</em>
            </h2>
            <p>
              Ask a question or request a demo. Our team will help you find the
              right next step.
            </p>
            <ul className={styles.channelList}>
              {channels.map((channel) => (
                <li key={channel.title}>
                  <Link href={channel.href}>
                    <span className={styles.channelIcon} aria-hidden="true">
                      <channel.icon size={18} />
                    </span>
                    <span>
                      <strong>{channel.title}</strong>
                      <small>{channel.text}</small>
                    </span>
                    <ArrowUpRight size={17} aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.formCard}>
            {sent ? (
              <div className={styles.success}>
                <span className={styles.successMark} aria-hidden="true">
                  <Check size={22} strokeWidth={3} />
                </span>
                <h3>Message received.</h3>
                <p>
                  Thanks{form.name ? `, ${form.name}` : ""} — our team will get
                  back to you shortly. Prefer email? Write to us at{" "}
                  <a href={siteConfig.links.contactSales}>sales@dagsis.com</a>.
                </p>
                <button
                  type="button"
                  className={styles.ghostButton}
                  onClick={() => {
                    setSent(false);
                    setForm({ name: "", email: "", company: "", message: "" });
                  }}
                >
                  Send another message
                  <ArrowRight size={16} aria-hidden="true" />
                </button>
              </div>
            ) : (
              <form
                className={styles.form}
                onSubmit={onSubmit}
                aria-label="Contact form"
              >
                <div className={styles.fieldRow}>
                  <label className={styles.field}>
                    <span>Name</span>
                    <input
                      type="text"
                      name="name"
                      required
                      autoComplete="name"
                      placeholder="Your full name"
                      value={form.name}
                      onChange={(event) =>
                        setForm({ ...form, name: event.target.value })
                      }
                    />
                  </label>
                  <label className={styles.field}>
                    <span>Work email</span>
                    <input
                      type="email"
                      name="email"
                      required
                      autoComplete="email"
                      placeholder="you@company.com"
                      value={form.email}
                      onChange={(event) =>
                        setForm({ ...form, email: event.target.value })
                      }
                    />
                  </label>
                </div>
                <label className={styles.field}>
                  <span>
                    Company <small>(optional)</small>
                  </span>
                  <input
                    type="text"
                    name="company"
                    autoComplete="organization"
                    placeholder="Company name"
                    value={form.company}
                    onChange={(event) =>
                      setForm({ ...form, company: event.target.value })
                    }
                  />
                </label>
                <label className={styles.field}>
                  <span>How can we help?</span>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us about your business and what you'd like Dagsis to handle…"
                    value={form.message}
                    onChange={(event) =>
                      setForm({ ...form, message: event.target.value })
                    }
                  />
                </label>
                <button type="submit" className={styles.submitButton}>
                  Send message
                  <Send size={16} aria-hidden="true" />
                </button>
                <p className={styles.formNote}>
                  Prefer to talk directly? Email us at{" "}
                  <a href={siteConfig.links.contactSales}>sales@dagsis.com</a>.
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
