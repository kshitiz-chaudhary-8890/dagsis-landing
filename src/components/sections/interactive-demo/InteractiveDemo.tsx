"use client";

import { useState, useEffect, useRef, useCallback, type FormEvent, type MouseEvent as ReactMouseEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Zap, Send } from "lucide-react";
import { WhatsAppIcon, DiscordIcon, TelegramIcon } from "@/components/shared/BrandIcons";

type Channel = "whatsapp" | "discord" | "telegram";

interface Message {
  id: number;
  sender: "user" | "bot";
  text: string;
  time: string;
}

interface QA {
  question: string;
  answer: string;
}

const qaMap: Record<Channel, QA[]> = {
  whatsapp: [
    {
      question: "How do I connect WhatsApp Business?",
      answer:
        "Go to Integrations > WhatsApp. Enter your Meta WhatsApp Business Phone Number ID and Access Token to start receiving messages directly in your inbox.",
    },
    {
      question: "Can I manage multiple AI agents?",
      answer:
        "Yes! Navigate to the Agents page to create custom AI personas. Each agent can be assigned its own distinct knowledge base and instructions.",
    },
    {
      question: "How do I update the bot's knowledge?",
      answer:
        "Whenever your business information changes, simply add or remove documents in the Knowledge Base, and the bot instantly learns the updated facts.",
    },
    {
      question: "How does the bot know what to answer?",
      answer:
        "Upload your documents or website links to the Knowledge Base section. The AI uses this data to provide accurate, context-aware answers to customers.",
    },
    {
      question: "What types of files can I use for training?",
      answer:
        "You can upload PDFs, Word documents, and text files directly to the Knowledge Base, or provide website URLs for the AI to learn from.",
    },
  ],
  discord: [
    {
      question: "Can the AI handle support questions?",
      answer:
        "Yes, once connected to your Discord server, the AI agent can automatically answer support queries based on your Knowledge Base.",
    },
    {
      question: "How fast does the bot respond?",
      answer:
        "The AI agent responds in seconds, ensuring your community members get instant, accurate answers to their questions 24/7.",
    },
    {
      question: "Can I use the bot across multiple servers?",
      answer:
        "Yes, you can invite your configured AI agent to as many Discord servers as you need, all managed from a single dashboard.",
    },
    {
      question: "How to train the Discord bot?",
      answer:
        "Upload your FAQs and company documentation to the Knowledge Base. The AI automatically learns and updates its responses.",
    },
    {
      question: "Does it support multiple brands?",
      answer:
        "Yes, you can manage different AI setups and configurations using the Brand Management section in your dashboard.",
    },
  ],
  telegram: [
    {
      question: "How do I connect a Telegram bot?",
      answer:
        "Create a bot using @BotFather on Telegram, copy your API token, and paste it into Dagsis > Integrations > Telegram.",
    },
    {
      question: "Can it reply to group chats?",
      answer:
        "Yes, once added as an admin to your channel or group, the AI can automatically reply to user questions based on its training.",
    },
    {
      question: "Is there a limit to concurrent chats?",
      answer:
        "The bot can handle unlimited concurrent conversations, scaling automatically. Overall usage is based on your billing plan.",
    },
    {
      question: "Can I customize the bot's tone?",
      answer:
        "Yes, when creating an Agent, you can specify its persona, tone, and strict guidelines to match your brand's voice perfectly.",
    },
    {
      question: "How do I test the bot before going live?",
      answer:
        "You can test your trained AI directly in the Dagsis dashboard before deploying it to your active Telegram channels.",
    },
  ],
};

const fallbackMessage =
  "🔒 Kindly log in or register your account to train and test custom chatbot interactions, or click one of the suggested test questions above to preview the agent response.";

const initialMessages: Record<Channel, Message[]> = {
  whatsapp: [
    {
      id: 1,
      sender: "user",
      text: "How do I connect WhatsApp Business?",
      time: "11:24 AM",
    },
    {
      id: 2,
      sender: "bot",
      text: "Go to Integrations > WhatsApp. Enter your Meta WhatsApp Phone Number ID and Access Token to start receiving messages directly in your inbox.",
      time: "11:24 AM",
    },
  ],
  discord: [
    {
      id: 1,
      sender: "user",
      text: "Can the AI handle support questions?",
      time: "11:25 AM",
    },
    {
      id: 2,
      sender: "bot",
      text: "Yes, once connected to your Discord server, the AI agent can automatically answer support queries based on your Knowledge Base.",
      time: "11:25 AM",
    },
  ],
  telegram: [
    {
      id: 1,
      sender: "user",
      text: "How do I connect a Telegram bot?",
      time: "11:26 AM",
    },
    {
      id: 2,
      sender: "bot",
      text: "Create a bot using @BotFather on Telegram, copy your API token, and paste it into Dagsis > Integrations > Telegram.",
      time: "11:26 AM",
    },
  ],
};

const isMockupDark = true;

const channelTabs: { id: Channel; label: string; color: string; Icon: typeof WhatsAppIcon }[] = [
  { id: "whatsapp", label: "WhatsApp", color: "#25D366", Icon: WhatsAppIcon },
  { id: "discord", label: "Discord", color: "#5865F2", Icon: DiscordIcon },
  { id: "telegram", label: "Telegram", color: "#229ED9", Icon: TelegramIcon },
];

const chatBackgrounds: Record<Channel, string> = {
  whatsapp:
    "radial-gradient(ellipse at 15% 15%, rgba(37, 211, 102, 0.06), transparent 55%), linear-gradient(180deg, #0b141a, #111b21)",
  discord:
    "radial-gradient(ellipse at 80% 0%, rgba(88, 101, 242, 0.10), transparent 55%), linear-gradient(180deg, #313338, #2b2d31)",
  telegram:
    "radial-gradient(ellipse at 15% 90%, rgba(34, 158, 217, 0.10), transparent 55%), linear-gradient(180deg, #17212b, #1c2733)",
};

const highlights = [
  "One knowledge base powers every channel",
  "Instant AI replies across WhatsApp, Discord & Telegram",
  "Ask anything, the agent answers from your own content",
];

export function InteractiveDemo() {
  const [activeChannel, setActiveChannel] = useState<Channel>("whatsapp");
  const [messages, setMessages] = useState<Message[]>(initialMessages.whatsapp);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [actionDone, setActionDone] = useState(false);
  const [usedQuestions, setUsedQuestions] = useState<Set<string>>(new Set());

  const wrapperRef = useRef<HTMLDivElement>(null);
  const chatFeedRef = useRef<HTMLDivElement>(null);
  const [spotlightPos, setSpotlightPos] = useState({ x: 0, y: 0 });
  const idRef = useRef(100);

  const scrollToBottom = () => {
    if (chatFeedRef.current) {
      chatFeedRef.current.scrollTop = chatFeedRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, actionDone]);

  const [prevChannel, setPrevChannel] = useState<Channel>(activeChannel);
  if (prevChannel !== activeChannel) {
    setPrevChannel(activeChannel);
    setMessages(initialMessages[activeChannel]);
    setActionDone(false);
    setIsTyping(false);
    setUsedQuestions(new Set());
  }

  const handleMouseMove = (e: ReactMouseEvent) => {
    if (!wrapperRef.current) return;
    const rect = wrapperRef.current.getBoundingClientRect();
    setSpotlightPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const findAnswer = useCallback(
    (query: string): string | null => {
      const qas = qaMap[activeChannel];
      const lowerQuery = query.toLowerCase().trim();
      for (const qa of qas) {
        if (lowerQuery.includes(qa.question.toLowerCase().slice(0, 20))) {
          return qa.answer;
        }
      }
      for (const qa of qas) {
        const qWords = qa.question
          .toLowerCase()
          .split(" ")
          .filter((w) => w.length > 3);
        const matchCount = qWords.filter((w) => lowerQuery.includes(w)).length;
        if (matchCount >= 2) {
          return qa.answer;
        }
      }
      return null;
    },
    [activeChannel],
  );

  const sendBotResponse = (userText: string) => {
    setIsTyping(true);
    setActionDone(false);

    setTimeout(() => {
      setIsTyping(false);
      const answer = findAnswer(userText);
      const botMsg: Message = {
        id: idRef.current++,
        sender: "bot",
        text: answer ?? fallbackMessage,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages((prev) => [...prev, botMsg]);
      if (answer) {
        setUsedQuestions((prev) => new Set(prev).add(userText.toLowerCase()));
      }
      setTimeout(() => {
        setActionDone(true);
      }, 1000);
    }, 2000);
  };

  const handleSendMessage = (e: FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const text = inputText;
    const userMsg: Message = {
      id: idRef.current++,
      sender: "user",
      text,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText("");
    sendBotResponse(text);
  };

  const handleSuggestedClick = (question: string) => {
    const userMsg: Message = {
      id: idRef.current++,
      sender: "user",
      text: question,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
    setMessages((prev) => [...prev, userMsg]);
    sendBotResponse(question);
  };

  return (
    <div ref={wrapperRef} onMouseMove={handleMouseMove} className="relative w-full overflow-hidden">
      <div
        className="pointer-events-none absolute z-0 opacity-60"
        style={{
          width: "800px",
          height: "800px",
          borderRadius: "50%",
          background: `radial-gradient(circle at ${spotlightPos.x}px ${spotlightPos.y}px, rgba(0, 102, 255, 0.08) 0%, transparent 60%)`,
          transform: "translate(-50%, -50%)",
          left: 0,
          top: 0,
        }}
      />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center w-full max-w-[1280px] mx-auto">
        <div className="lg:col-span-5 text-left">
          <span className="inline-flex items-center gap-[14px] text-[13px] font-semibold uppercase tracking-[0.22em] text-[#16213a]">
            <span aria-hidden="true" className="inline-block h-[2px] w-[44px] rounded-full bg-[#1f5cf0]" />
            See Dagsis in action
          </span>
          <h2 id="agent-demo-title" className="section-title mt-[18px] text-[#16213a] text-[clamp(20px,2.1vw,28px)] lg:whitespace-nowrap">
            Your knowledge. Their favorite chat.
          </h2>
          <p className="section-description mt-5 max-w-[420px]">
            Watch your agent answer straight from your data, <span className="desc-accent">live on WhatsApp.</span>
          </p>
          <div className="mt-9 space-y-7">
            {highlights.map((point) => (
              <div key={point} className="flex items-center gap-2.5 text-sm font-semibold text-slate-900">
                <span className="w-1.5 h-1.5 flex-shrink-0 rounded-full bg-blue-500" />
                {point}
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-7 relative w-full h-[520px]">
        <div
          className={`absolute inset-0 rounded-3xl blur-3xl z-0 transition-all duration-700 opacity-60 ${
            activeChannel === "whatsapp"
              ? "bg-gradient-to-tr from-green-500/20 to-emerald-400/10"
              : activeChannel === "discord"
                ? "bg-gradient-to-tr from-indigo-500/20 to-purple-400/10"
                : "bg-gradient-to-tr from-sky-500/20 to-blue-400/10"
          }`}
        />

        <div
          className={`relative w-full h-full border rounded-2xl p-4 flex flex-col z-10 overflow-hidden transition-all duration-500 ${
            isMockupDark
              ? "bg-[#121826] border-slate-800 text-slate-200"
              : "bg-gradient-to-b from-white to-slate-50 border-slate-200/80 text-slate-800"
          }`}
          style={{
            borderTop: `4px solid ${
              activeChannel === "whatsapp"
                ? "#25D366"
                : activeChannel === "discord"
                  ? "#5865F2"
                  : "#229ED9"
            }`,
          }}
        >
          <div
            className={`flex items-center justify-between border-b pb-3 mb-4 ${
              isMockupDark ? "border-slate-800/80" : "border-slate-100"
            }`}
          >
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500/80 cursor-pointer" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80 cursor-pointer" />
              <span className="w-3 h-3 rounded-full bg-green-500/80 cursor-pointer" />
            </div>
            <div
              className={`text-[10px] font-mono tracking-wider px-3 py-1 rounded-md border ${
                isMockupDark
                  ? "text-slate-400 bg-slate-900/50 border-slate-800"
                  : "text-slate-400 bg-slate-50 border-slate-100"
              }`}
            >
              dagsis.ai/inbox
            </div>
            <div className="w-6" />
          </div>

          <div className="flex flex-col lg:grid lg:grid-cols-12 gap-3 lg:gap-4 flex-1 overflow-hidden">
            <div
              className={`flex flex-row lg:flex-col lg:col-span-4 border-b lg:border-b-0 lg:border-r pb-2 lg:pb-0 lg:pr-3 gap-1.5 lg:gap-2 relative shrink-0 ${isMockupDark ? "border-slate-800/80" : "border-slate-100"}`}
            >
              <div
                className={`hidden lg:block text-[10px] uppercase font-bold tracking-wider mb-2 px-1 ${isMockupDark ? "text-slate-600" : "text-slate-400"}`}
              >
                Channels
              </div>

              {channelTabs.map((chan) => {
                const isActive = activeChannel === chan.id;
                return (
                  <button
                    key={`chan-${chan.id}`}
                    onClick={() => setActiveChannel(chan.id)}
                    className={`w-auto flex-grow lg:flex-grow-0 lg:w-full h-9 lg:h-10 rounded-lg flex items-center justify-center lg:justify-start px-2 lg:px-3 gap-1.5 lg:gap-2.5 transition-all text-xs font-semibold relative overflow-hidden ${
                      isMockupDark
                        ? "text-slate-400 hover:text-slate-200"
                        : "text-slate-700 hover:text-slate-800"
                    }`}
                    style={{
                      color: isActive ? chan.color : isMockupDark ? "#94a3b8" : "#64748b",
                    }}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeChannelTabPill"
                        className={`absolute inset-0 rounded-lg border transition-all duration-300 ${
                          activeChannel === "whatsapp"
                            ? isMockupDark
                              ? "bg-green-950/20 border-green-900/30 shadow-sm shadow-green-900/10"
                              : "bg-green-50/80 border-green-200/60 shadow-sm shadow-green-100/50"
                            : activeChannel === "discord"
                              ? isMockupDark
                                ? "bg-indigo-950/20 border-indigo-900/30 shadow-sm shadow-indigo-900/10"
                                : "bg-indigo-50/80 border-indigo-200/60 shadow-sm shadow-indigo-100/50"
                              : isMockupDark
                                ? "bg-sky-950/20 border-sky-900/30 shadow-sm shadow-sky-900/10"
                                : "bg-sky-50/80 border-sky-200/60 shadow-sm shadow-sky-100/50"
                        }`}
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 28,
                        }}
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-1.5 lg:gap-2.5">
                      <chan.Icon
                        className="w-3.5 h-3.5 lg:w-4 lg:h-4"
                        style={{ color: chan.color }}
                      />
                      <span>{chan.label}</span>
                    </span>
                  </button>
                );
              })}
            </div>

            <div
              className="lg:col-span-8 flex flex-col flex-1 h-full rounded-xl overflow-hidden border min-h-0 transition-all duration-300 relative"
              style={{
                backgroundImage: chatBackgrounds[activeChannel],
                backgroundColor:
                  activeChannel === "whatsapp"
                    ? isMockupDark
                      ? "#0b141a"
                      : "#efeae2"
                    : activeChannel === "discord"
                      ? isMockupDark
                        ? "#313338"
                        : "#f2f3f5"
                      : isMockupDark
                        ? "#17212b"
                        : "#e7ebf0",
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderColor:
                  activeChannel === "whatsapp"
                    ? isMockupDark
                      ? "#2a3942"
                      : "#e1e1e1"
                    : activeChannel === "discord"
                      ? isMockupDark
                        ? "#1e1f22"
                        : "#d4d6dc"
                      : isMockupDark
                        ? "#24303f"
                        : "#b8c9d9",
              }}
            >
              {activeChannel === "whatsapp" && (
                <div
                  className={`px-3.5 py-2 flex items-center justify-between shrink-0 shadow-sm border-b transition-colors duration-300 ${
                    isMockupDark
                      ? "bg-[#202c33] border-[#2a3942] text-white"
                      : "bg-[#00a884] border-transparent text-white"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs ${
                        isMockupDark
                          ? "bg-[#128c7e]/20 text-[#25D366]"
                          : "bg-[#128c7e] text-white"
                      }`}
                    >
                      <WhatsAppIcon className="w-4 h-4" />
                    </div>
                    <div className="text-left">
                      <div className="text-xs font-bold leading-tight">
                        Dagsis Business Support
                      </div>
                      <div
                        className={`text-[9px] font-semibold leading-none mt-0.5 flex items-center gap-1 ${
                          isMockupDark ? "text-[#25D366]" : "text-[#cfebd5]"
                        }`}
                      >
                        {isMockupDark && (
                          <span className="w-1.5 h-1.5 bg-[#25D366] rounded-full animate-pulse" />
                        )}
                        online
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {activeChannel === "discord" && (
                <div
                  className={`px-3.5 py-2 flex items-center justify-between shrink-0 border-b shadow-sm transition-colors duration-300 ${
                    isMockupDark
                      ? "bg-[#2b2d31] text-[#dbdee1] border-[#1f2023]"
                      : "bg-[#f2f3f5] text-[#313338] border-[#d4d6dc]"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span
                      className={`font-bold text-base leading-none ${isMockupDark ? "text-[#80848e]" : "text-[#4e5058]"}`}
                    >
                      #
                    </span>
                    <div className="text-left">
                      <div
                        className={`text-xs font-bold leading-tight ${isMockupDark ? "text-white" : "text-[#313338]"}`}
                      >
                        support-channel
                      </div>
                      <div
                        className={`text-[9px] leading-none mt-0.5 ${isMockupDark ? "text-[#949ba4]" : "text-[#6d6f78]"}`}
                      >
                        AI assistant for general server support
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {activeChannel === "telegram" && (
                <div
                  className={`px-3.5 py-2 flex items-center justify-between shrink-0 border-b shadow-sm transition-colors duration-300 ${
                    isMockupDark
                      ? "bg-[#24303f] border-[#1c242f] text-white"
                      : "bg-[#517da2] border-transparent text-white"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs ${
                        isMockupDark
                          ? "bg-[#3e6280]/20 text-[#229ED9]"
                          : "bg-[#3e6280] text-white"
                      }`}
                    >
                      <TelegramIcon className="w-4 h-4" />
                    </div>
                    <div className="text-left">
                      <div className="text-xs font-bold leading-tight">
                        Dagsis Support Bot
                      </div>
                      <div
                        className={`text-[9px] leading-none mt-0.5 ${
                          isMockupDark ? "text-[#229ED9]" : "text-[#b3d4f0]"
                        }`}
                      >
                        bot
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div
                ref={chatFeedRef}
                className="overflow-y-auto p-3 flex-1 flex flex-col min-h-0 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-slate-400/40"
              >
                <div className="mt-auto space-y-3 flex flex-col w-full">
                  <AnimatePresence initial={false}>
                    {messages.map((msg, idx) => {
                      const isUser = msg.sender === "user";
                      return (
                        <motion.div
                          key={`msg-${msg.id}-${idx}`}
                          initial={{ opacity: 0, y: 15, scale: 0.92 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          transition={{
                            type: "spring",
                            stiffness: 250,
                            damping: 22,
                          }}
                          className={`flex gap-2 shrink-0 ${isUser ? "flex-col items-end" : "items-start"}`}
                        >
                          {!isUser && (
                            <div
                              className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 shadow-sm ${
                                activeChannel === "whatsapp"
                                  ? "bg-[#00a884]"
                                  : activeChannel === "discord"
                                    ? "bg-[#5865F2]"
                                    : "bg-[#517da2]"
                              }`}
                            >
                              {activeChannel === "whatsapp" ? (
                                <WhatsAppIcon className="w-3.5 h-3.5 text-white" />
                              ) : activeChannel === "discord" ? (
                                <DiscordIcon className="w-3.5 h-3.5 text-white" />
                              ) : (
                                <Bot className="w-3.5 h-3.5 text-white" />
                              )}
                            </div>
                          )}
                          <div className="flex flex-col max-w-[85%]">
                            {activeChannel === "discord" && !isUser && (
                              <div className="flex items-center gap-1.5 mb-0.5">
                                <span
                                  className={`text-[9px] font-bold ${isMockupDark ? "text-white" : "text-[#313338]"}`}
                                >
                                  Dagsis Bot
                                </span>
                                <span className="bg-[#5865F2] text-white text-[7px] font-extrabold px-1 rounded uppercase tracking-wider leading-none py-0.5 scale-90">
                                  BOT
                                </span>
                              </div>
                            )}
                            {activeChannel === "discord" && isUser && (
                              <span
                                className={`text-[9px] font-bold mb-0.5 text-right ${isMockupDark ? "text-[#f2f3f5]" : "text-[#313338]"}`}
                              >
                                User
                              </span>
                            )}
                            <div
                              className={`rounded-2xl px-3 py-1.5 text-xs leading-relaxed shadow-sm ${
                                activeChannel === "whatsapp"
                                  ? isUser
                                    ? isMockupDark
                                      ? "bg-[#005c4b] text-[#e9edef] rounded-tr-none"
                                      : "bg-[#d9fdd3] text-[#111b21] rounded-tr-none"
                                    : isMockupDark
                                      ? "bg-[#202c33] text-[#e9edef] rounded-tl-none border border-[#2a3942]"
                                      : "bg-white text-[#111b21] rounded-tl-none border border-[#e2ebd7]"
                                  : activeChannel === "discord"
                                    ? isUser
                                      ? isMockupDark
                                        ? "bg-[#35363c] text-[#dbdee1] border border-[#1e1f22] rounded-tr-none"
                                        : "bg-[#5865F2]/15 text-[#313338] border border-[#5865F2]/20 rounded-tr-none"
                                      : isMockupDark
                                        ? "bg-[#2b2d31] text-[#dbdee1] rounded-tl-none"
                                        : "bg-white text-[#313338] rounded-tl-none border border-[#d4d6dc]"
                                    : isUser
                                      ? isMockupDark
                                        ? "bg-[#2b5278] text-[#f5f5f5] rounded-tr-none"
                                        : "bg-[#effdde] text-[#1d2a39] rounded-tr-none"
                                      : isMockupDark
                                        ? "bg-[#182533] text-[#f5f5f5] rounded-tl-none border border-[#24303f]"
                                        : "bg-white text-[#1d2a39] rounded-tl-none border border-[#d9e5ec]"
                              }`}
                            >
                              {msg.text}
                            </div>
                            <span
                              className={`text-[8px] mt-0.5 font-semibold ${
                                activeChannel === "discord"
                                  ? isMockupDark
                                    ? "text-[#949ba4]"
                                    : "text-[#6d6f78]"
                                  : activeChannel === "whatsapp"
                                    ? isMockupDark
                                      ? "text-[#8696a0]"
                                      : "text-[#667781]"
                                    : isMockupDark
                                      ? "text-[#708499]"
                                      : "text-slate-500"
                              } ${isUser ? "text-right" : ""}`}
                            >
                              {msg.time} {isUser ? "" : "• Dagsis AI"}
                            </span>
                          </div>
                        </motion.div>
                      );
                    })}

                    {isTyping && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="flex gap-2 items-center shrink-0"
                      >
                        <div
                          className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 shadow-sm ${
                            activeChannel === "whatsapp"
                              ? "bg-[#00a884]"
                              : activeChannel === "discord"
                                ? "bg-[#5865F2]"
                                : "bg-[#517da2]"
                          }`}
                        >
                          {activeChannel === "whatsapp" ? (
                            <WhatsAppIcon className="w-3.5 h-3.5 text-white" />
                          ) : activeChannel === "discord" ? (
                            <DiscordIcon className="w-3.5 h-3.5 text-white" />
                          ) : (
                            <Bot className="w-3.5 h-3.5 text-white" />
                          )}
                        </div>
                        <div
                          className={`rounded-2xl rounded-tl-none px-3 py-1.5 flex gap-1 items-center shadow-sm border ${
                            activeChannel === "whatsapp"
                              ? isMockupDark
                                ? "bg-[#202c33] border-[#2a3942]"
                                : "bg-white border-[#e2ebd7]"
                              : activeChannel === "discord"
                                ? isMockupDark
                                  ? "bg-[#404249] border-transparent"
                                  : "bg-white border-[#d4d6dc]"
                                : isMockupDark
                                  ? "bg-[#182533] border-[#24303f]"
                                  : "bg-white border-[#e2ebd7]"
                          }`}
                        >
                          <span
                            className={`w-1 h-1 rounded-full animate-bounce delay-75 ${activeChannel === "discord" ? "bg-[#b5bac1]" : isMockupDark ? "bg-[#b5bac1]" : "bg-blue-400"}`}
                          />
                          <span
                            className={`w-1 h-1 rounded-full animate-bounce [animation-delay:0.2s] ${activeChannel === "discord" ? "bg-[#b5bac1]" : isMockupDark ? "bg-[#b5bac1]" : "bg-blue-400"}`}
                          />
                          <span
                            className={`w-1 h-1 rounded-full animate-bounce [animation-delay:0.4s] ${activeChannel === "discord" ? "bg-[#b5bac1]" : isMockupDark ? "bg-[#b5bac1]" : "bg-blue-400"}`}
                          />
                        </div>
                      </motion.div>
                    )}

                    {actionDone && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        className={`mx-auto w-full rounded-lg p-2 flex items-center justify-between shrink-0 shadow-sm border transition-colors ${
                          isMockupDark
                            ? "bg-emerald-950/30 border-emerald-900/50 text-emerald-400"
                            : "bg-emerald-50 border border-emerald-100 text-emerald-800"
                        }`}
                      >
                        <div className="flex items-center gap-1.5">
                          <Zap
                            className={`w-3 h-3 animate-pulse ${isMockupDark ? "text-emerald-400" : "text-emerald-500"}`}
                          />
                          <span
                            className={`text-[9px] font-bold ${isMockupDark ? "text-emerald-400" : "text-emerald-700"}`}
                          >
                            Workflow Action Executed Successfully
                          </span>
                        </div>
                        <span
                          className={`text-[8px] font-mono font-bold ${isMockupDark ? "text-emerald-500" : "text-emerald-600"}`}
                        >
                          Dagsis Hub &gt; Success
                        </span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              <div
                className={`px-2.5 py-1.5 flex flex-wrap gap-1.5 border-t transition-all ${
                  activeChannel === "discord"
                    ? isMockupDark
                      ? "border-[#1e1f22] bg-[#2b2d31]/50"
                      : "border-[#d4d6dc] bg-[#f2f3f5]/80"
                    : activeChannel === "whatsapp"
                      ? isMockupDark
                        ? "border-[#202c33] bg-[#0b141a]/50"
                        : "border-[#e9ecef] bg-slate-50/50"
                      : isMockupDark
                        ? "border-[#1c242f] bg-[#17212b]/50"
                        : "border-[#e9ecef] bg-slate-50/50"
                }`}
              >
                {qaMap[activeChannel].map((qa, idx) => {
                  const isUsed = usedQuestions.has(qa.question.toLowerCase());
                  return (
                    <button
                      key={`qa-${activeChannel}-${idx}`}
                      onClick={() =>
                        !isUsed && handleSuggestedClick(qa.question)
                      }
                      disabled={isUsed}
                      className={`text-[9px] font-bold px-2 py-0.5 rounded-full border transition-all ${
                        isUsed
                          ? activeChannel === "discord"
                            ? isMockupDark
                              ? "border-[#383a40] text-[#4e5058] cursor-not-allowed bg-transparent"
                              : "border-slate-200 text-slate-400 cursor-not-allowed bg-transparent"
                            : activeChannel === "whatsapp"
                              ? isMockupDark
                                ? "border-[#202c33] text-[#667781] cursor-not-allowed bg-transparent"
                                : "border-slate-100 text-slate-300 cursor-not-allowed bg-transparent"
                              : isMockupDark
                                ? "border-[#24303f] text-[#55697d] cursor-not-allowed bg-transparent"
                                : "border-slate-100 text-slate-300 cursor-not-allowed bg-transparent"
                          : activeChannel === "discord"
                            ? isMockupDark
                              ? "border-[#5865F2]/40 text-[#5865F2] hover:bg-[#5865F2]/10 hover:border-[#5865F2] cursor-pointer bg-[#313338]"
                              : "border-[#5865F2]/30 text-[#5865F2] hover:bg-[#5865F2]/10 hover:border-[#5865F2] cursor-pointer bg-white shadow-sm"
                            : activeChannel === "whatsapp"
                              ? isMockupDark
                                ? "border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366]/10 hover:border-[#25D366] cursor-pointer bg-[#202c33] shadow-sm"
                                : "border-blue-100 text-blue-700 bg-white hover:bg-blue-50/50 hover:border-blue-300 cursor-pointer shadow-sm"
                              : isMockupDark
                                ? "border-[#229ED9]/40 text-[#229ED9] hover:bg-[#229ED9]/10 hover:border-[#229ED9] cursor-pointer bg-[#182533] shadow-sm"
                                : "border-blue-100 text-blue-700 bg-white hover:bg-blue-50/50 hover:border-blue-300 cursor-pointer shadow-sm"
                      }`}
                    >
                      {qa.question}
                    </button>
                  );
                })}
              </div>

              <form
                onSubmit={handleSendMessage}
                className={`h-9 border-t flex items-center px-3 justify-between shrink-0 transition-colors ${
                  activeChannel === "whatsapp"
                    ? isMockupDark
                      ? "bg-[#202c33] border-[#2a3942]"
                      : "bg-[#f0f2f5] border-[#e1e1e1]"
                    : activeChannel === "discord"
                      ? isMockupDark
                        ? "bg-[#383a40] border-[#2b2d31] mx-2 my-1 rounded-lg"
                        : "bg-[#e9eaec] border-[#d4d6dc] mx-2 my-1 rounded-lg"
                      : isMockupDark
                        ? "bg-[#17212b] border-[#1c242f]"
                        : "bg-white border-[#b8c9d9]"
                }`}
              >
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder={
                    activeChannel === "discord"
                      ? "Message #support-channel"
                      : activeChannel === "whatsapp"
                        ? "Type a message..."
                        : "Write a message..."
                  }
                  disabled={isTyping}
                  className={`bg-transparent border-none outline-none text-xs flex-grow pr-3 disabled:opacity-50 transition-colors ${
                    activeChannel === "discord"
                      ? isMockupDark
                        ? "text-[#dbdee1] placeholder-[#80848e]"
                        : "text-[#313338] placeholder-[#6d6f78]"
                      : activeChannel === "whatsapp"
                        ? isMockupDark
                          ? "text-[#e9edef] placeholder-[#8696a0]"
                          : "text-slate-800 placeholder-slate-400"
                        : isMockupDark
                          ? "text-[#f5f5f5] placeholder-[#708499]"
                          : "text-slate-800 placeholder-slate-500"
                  }`}
                />
                <button
                  type="submit"
                  disabled={isTyping || !inputText.trim()}
                  className={`w-6 h-6 rounded-full flex items-center justify-center transition-all ${
                    inputText.trim() && !isTyping
                      ? activeChannel === "discord"
                        ? "bg-[#5865F2] text-white hover:scale-105"
                        : "bg-[#00a884] text-white hover:scale-105"
                      : activeChannel === "discord"
                        ? "bg-transparent text-[#4e5058]"
                        : isMockupDark
                          ? "bg-transparent text-[#708499]"
                          : "bg-slate-100 text-slate-300"
                  }`}
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
