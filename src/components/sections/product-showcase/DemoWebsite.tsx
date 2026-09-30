"use client";

import Image from "next/image";
import { ArrowRight, Menu, MessageCircle, Minus, RotateCcw, Send } from "lucide-react";
import { useRef, useState, type CSSProperties, type FormEvent } from "react";
import { industryDemos } from "@/content/demos";
import styles from "./ProductShowcase.module.css";

type Message = { role: "customer" | "agent"; text: string };

const websiteDetails: Record<string, { label: string; value: string }[]> = {
  realestate: [{ label: "Featured", value: "Marina Bay penthouse" }, { label: "Prime psf", value: "From S$2,798" }, { label: "Viewings", value: "By private appointment" }],
  education: [{ label: "Courses", value: "100 accredited" }, { label: "Faculty", value: "30 doctoral scholars" }, { label: "Intakes", value: "Oct & Nov 2026" }],
  travel: [{ label: "Destinations", value: "50 precincts & islands" }, { label: "Journeys", value: "100 curated packages" }, { label: "Stays", value: "5-star certified" }],
  healthcare: [{ label: "Clinics", value: "20 sanctuaries" }, { label: "Specialists", value: "80 doctors" }, { label: "Insurance", value: "30 direct panels" }],
};

const previewReplies: Record<string, string> = {
  realestate: "Yes — The Sky Penthouse at Marina Bay Residences: 4 beds, 5,200 sqft at S$24.8M. Would you like a private viewing?",
  education: "Data science, AI, cyber security, cloud and Cambridge prep — 100 accredited courses. Which field interests you?",
  travel: "We curate 50 Singapore precincts and islands — from Marina Bay to Lazarus Island. What kind of journey do you have in mind?",
  healthcare: "Health screenings, 25 specialist disciplines and 24/7 teleconsultation. How can we help you today?",
};

const supportTopics: Record<string, string> = {
  realestate: "Listings & viewings",
  education: "Programmes & admissions",
  travel: "Itineraries & bookings",
  healthcare: "Appointments & insurance",
};

export function DemoWebsite({ industryId, fullPage = false }: { industryId: string; fullPage?: boolean }) {
  const demo = industryDemos.find(item => item.id === industryId) ?? industryDemos[0];
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [chatOpen, setChatOpen] = useState(true);
  const messagesRef = useRef<HTMLDivElement>(null);
  const theme = { "--demo-accent": demo.accent, "--demo-background": demo.background, "--demo-ink": demo.websiteInk } as CSSProperties;

  function ask(question: string) {
    const text = question.trim().slice(0, 240);
    if (!text) return;
    const match = demo.questions.find(item => item.question === text) ?? demo.questions.find(item => item.keywords.some(keyword => text.toLowerCase().includes(keyword)));
    const answer = match?.answer ?? "This is a sample preview with preset replies. Try one of the suggested questions to explore how this business could answer customers.";
    setMessages(current => [...current.slice(-10), { role: "customer", text }, { role: "agent", text: answer }]);
    setInput("");
    requestAnimationFrame(() => { if (messagesRef.current) messagesRef.current.scrollTop = messagesRef.current.scrollHeight; });
  }

  function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); ask(input); }

  function agentMessage(text: string) {
    return <div className={styles.agentMessage}><span className={styles.replyAvatar}>{demo.brand[0]}</span><div><small>{demo.brand}</small><div className={styles.agentReply}>{text}</div></div></div>;
  }

  return (
    <div className={`${styles.demoWebsite} ${fullPage ? styles.fullPage : ""}`} style={theme} data-industry={demo.id}>
      <div className={styles.websiteCanvas}>
        {!fullPage && <div className={styles.sceneImage}><Image src={demo.image} alt={demo.imageAlt} fill sizes="(max-width: 1023px) 100vw, 55vw" className={styles.websitePhoto} /></div>}
        {fullPage && <>
        <nav className={styles.websiteNav} aria-label={`${demo.brand} sample website`}><span className={styles.websiteBrand}>{demo.brand}<span>.</span></span><div>{demo.navigation.map(item => <span key={item}>{item}</span>)}</div><span className={styles.websiteMenu}><Menu size={16} /></span></nav>
        <div className={styles.websiteHero}>
          <div className={styles.websitePhotoPanel}><Image src={demo.image} alt={demo.imageAlt} fill sizes={fullPage ? "55vw" : "(max-width: 767px) 100vw, 35vw"} className={styles.websitePhoto} /></div>
          <div className={styles.websiteWords}><span>{demo.category}</span><h3>{demo.headline.split("\n").map((line, index) => <span key={line}>{index > 0 && <br />}{line}</span>)}</h3><p>{demo.websiteDescription}</p><span className={styles.websiteAction}>{demo.action}<ArrowRight size={13} /></span></div>
        </div>
        <div className={styles.websiteBottom}>{websiteDetails[demo.id].map(detail => <div key={detail.label}><small>{detail.label}</small><strong>{detail.value}</strong></div>)}</div>
        </>}
        {!fullPage && <a className={styles.sceneLink} href={demo.href} target="_blank" rel="noopener noreferrer" aria-label={`Open the ${demo.brand} demo website in a new tab`} />}
        {chatOpen && <div className={styles.chatWidget}>
          <div className={styles.widgetHeader}><span className={styles.widgetAvatar}>{demo.brand[0]}</span><div>{demo.brand}<small>{supportTopics[demo.id]}</small></div><button type="button" aria-label="Minimise chat" onClick={() => setChatOpen(false)}><Minus size={17} /></button></div>
          <div className={styles.widgetMessages} ref={messagesRef} role="log" aria-label="Sample chat messages" aria-live="polite" aria-relevant="additions">
            {fullPage && agentMessage(demo.greeting)}
            {!fullPage && messages.length === 0 && <><div className={styles.customerReply}>{demo.questions[0].question}</div>{agentMessage(previewReplies[demo.id])}</>}
            {messages.map((message, index) => <div key={`${index}-${message.text}`}>{message.role === "customer" ? <div className={styles.customerReply}>{message.text}</div> : agentMessage(message.text)}</div>)}
            {fullPage && messages.length === 0 && <div className={styles.promptSuggestions}>{demo.questions.map(item => <button key={item.question} type="button" onClick={() => ask(item.question)}>{item.question}<ArrowRight size={11} /></button>)}</div>}
          </div>
          <form className={styles.widgetComposer} onSubmit={submit}><label className={styles.srOnly} htmlFor={`sample-message-${demo.id}`}>Ask the sample {demo.label} assistant</label><input id={`sample-message-${demo.id}`} value={input} onChange={event => setInput(event.target.value)} placeholder="Write your message…" maxLength={240} autoComplete="off" /><button type="submit" aria-label="Send sample message" disabled={!input.trim()}><Send size={15} /></button></form>
          <div className={styles.widgetFooter}>Powered by <strong>Dagsis</strong><span>Sample</span><button type="button" aria-label="Reset sample conversation" onClick={() => { setMessages([]); setInput(""); }}><RotateCcw size={11} /></button></div>
        </div>}
        {!chatOpen && <button type="button" className={styles.chatLauncher} aria-label={`Open ${demo.brand} chat`} onClick={() => setChatOpen(true)}><MessageCircle size={22} /></button>}
      </div>
    </div>
  );
}
