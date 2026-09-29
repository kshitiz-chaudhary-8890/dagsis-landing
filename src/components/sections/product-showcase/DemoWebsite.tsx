"use client";

import Image from "next/image";
import { ArrowRight, Menu, MessageCircle, Minus, RotateCcw, Send } from "lucide-react";
import { useRef, useState, type CSSProperties, type FormEvent } from "react";
import { industryDemos } from "@/content/demos";
import styles from "./ProductShowcase.module.css";

type Message = { role: "customer" | "agent"; text: string };

const websiteDetails: Record<string, { label: string; value: string }[]> = {
  restaurant: [{ label: "Dining", value: "Seasonal menu" }, { label: "Opening hours", value: "Tue–Sun, 12pm–10pm" }, { label: "Reservations", value: "Tables & private dining" }],
  retail: [{ label: "Collection", value: "New season essentials" }, { label: "Delivery", value: "2–4 working days" }, { label: "Returns", value: "Within 14 days" }],
  salon: [{ label: "Services", value: "Cut, colour & care" }, { label: "Haircuts", value: "From S$45" }, { label: "Appointments", value: "Find your next slot" }],
  property: [{ label: "Bedrooms", value: "3 bedrooms" }, { label: "Outdoor space", value: "Private garden" }, { label: "Viewings", value: "By appointment" }],
};

const previewReplies: Record<string, string> = {
  restaurant: "Yes! We have mushroom pasta and a roasted vegetable bowl. Let us know about any dietary requirements when you book.",
  retail: "Standard delivery takes 2–4 working days. We'll send a tracking link as soon as your order is dispatched.",
  salon: "Haircuts, colour, styling and conditioning treatments. Which service would you like to explore?",
  property: "Yes, our featured home has three bedrooms, a private garden and an open-plan living area. Are you looking to buy or rent?",
};

const supportTopics: Record<string, string> = {
  restaurant: "Menu & reservations",
  retail: "Orders & delivery",
  salon: "Services & appointments",
  property: "Listings & viewings",
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
