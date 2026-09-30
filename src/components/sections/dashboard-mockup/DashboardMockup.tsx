"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Bot,
  Briefcase,
  Users,
  BookOpen,
  FileText,
  Globe,
  ChevronRight,
  Check,
  X,
  RefreshCw,
  Eye,
  Trash2,
  Copy,
  Plus,
  Send,
  Upload,
  Sparkles,
  CheckCircle2,
  Terminal,
  Database,
  Zap,
  Layers,
  TrendingUp,
  ArrowRight,
  ChevronLeft,
} from "lucide-react";

type TourStep = {
  title: string;
  shortTitle: string;
  description: string;
  sidebarId:
    | "knowledge"
    | "agents"
    | "inbox"
    | "integrations"
    | "analytics"
    | "brand";
  buttonText: string;
};

const stepConfig = [
  {
    number: "01",
    Icon: Database,
    gradientFrom: "from-blue-600",
    gradientTo: "to-violet-600",
    bgClass: "bg-blue-500/10",
    textClass: "text-blue-400",
    borderClass: "border-blue-500/30",
    shadowClass: "shadow-blue-500/20",
    barColor: "from-blue-500 to-violet-500",
    features: [
      "Upload PDFs, DOCX, TXT or sync any public sitemap URL",
      "AI ingestion engine indexes your content in seconds",
      "Private knowledge graph — zero hallucinations guaranteed",
    ],
  },
  {
    number: "02",
    Icon: Bot,
    gradientFrom: "from-violet-600",
    gradientTo: "to-purple-600",
    bgClass: "bg-violet-500/10",
    textClass: "text-violet-400",
    borderClass: "border-violet-500/30",
    shadowClass: "shadow-violet-500/20",
    barColor: "from-blue-500 via-violet-500 to-violet-500",
    features: [
      "Map each agent to a dedicated knowledge source",
      "Configure custom persona, tone and core directives",
      "Multi-language agent deployment supported out of the box",
    ],
  },
  {
    number: "03",
    Icon: Zap,
    gradientFrom: "from-cyan-600",
    gradientTo: "to-blue-600",
    bgClass: "bg-cyan-500/10",
    textClass: "text-cyan-400",
    borderClass: "border-cyan-500/30",
    shadowClass: "shadow-cyan-500/20",
    barColor: "from-blue-500 via-violet-500 to-cyan-500",
    features: [
      "Chat with your agent live — every reply cites the exact source it used",
      "Every answer cites the exact source document it used",
      "No hallucinations — all replies grounded in your data",
    ],
  },
  {
    number: "04",
    Icon: Layers,
    gradientFrom: "from-emerald-600",
    gradientTo: "to-teal-600",
    bgClass: "bg-emerald-500/10",
    textClass: "text-emerald-400",
    borderClass: "border-emerald-500/30",
    shadowClass: "shadow-emerald-500/20",
    barColor: "from-blue-500 via-cyan-500 to-emerald-500",
    features: [
      "1-line script embed works on any HTML, React or Next.js site",
      "WhatsApp Business Cloud API — official Meta integration",
      "Telegram & Discord bot channels supported natively",
    ],
  },
  {
    number: "05",
    Icon: TrendingUp,
    gradientFrom: "from-amber-500",
    gradientTo: "to-orange-500",
    bgClass: "bg-amber-500/10",
    textClass: "text-amber-400",
    borderClass: "border-amber-500/30",
    shadowClass: "shadow-amber-500/20",
    barColor: "from-blue-500 via-emerald-500 to-amber-500",
    features: [
      "Track auto-resolution rates and per-channel response latency",
      "Full conversation history with source citation audit trails",
      "Credit usage dashboard across all channels and agents",
    ],
  },
];

const tourSteps: TourStep[] = [
  {
    title: "Upload Knowledge Base",
    shortTitle: "Knowledge",
    description:
      "Upload PDFs, Docx, or input website links. Dagsis crawls websites and processes documents to train your private AI in seconds.",
    sidebarId: "knowledge",
    buttonText: "Next Step",
  },
  {
    title: "Build Your Custom Agent",
    shortTitle: "Build Agent",
    description:
      "Create custom agents mapped to specific knowledge sources. Configure the AI core directives, persona, and brand language.",
    sidebarId: "agents",
    buttonText: "Next Step",
  },
  {
    title: "Test Your Agent Live",
    shortTitle: "Test Live",
    description:
      "Chat with your agent live and watch it pull accurate, cited answers directly from your knowledge base.",
    sidebarId: "inbox",
    buttonText: "Next Step",
  },
  {
    title: "Deploy to Any Channel",
    shortTitle: "Deploy",
    description:
      "Embed the chatbot widget via a 1-line script tag, or connect your agent to WhatsApp Cloud, Telegram, and Discord bots.",
    sidebarId: "integrations",
    buttonText: "Finish Tour",
  },
];

export function DashboardMockup() {
  const isDark = false;
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [isTourActive, setIsTourActive] = useState<boolean>(true);
  const [copied, setCopied] = useState<boolean>(false);
  const [animKey, setAnimKey] = useState<number>(0);

  const [chatProgress, setChatProgress] = useState<number>(0);
  const [userText, setUserText] = useState<string>("");
  const [chatMessages, setChatMessages] = useState<
    Array<{
      sender: "user" | "bot";
      text: string;
      time: string;
      source?: string;
    }>
  >([]);

  const [activeSidebarItem, setActiveSidebarItem] = useState<
    "knowledge" | "agents" | "inbox" | "integrations" | "analytics" | "brand"
  >("knowledge");

  const handleSidebarClick = (
    sidebarId:
      | "knowledge"
      | "agents"
      | "inbox"
      | "integrations"
      | "analytics"
      | "brand",
  ) => {
    setActiveSidebarItem(sidebarId);
    setAnimKey((k) => k + 1);
    const stepIdx = tourSteps.findIndex((step) => step.sidebarId === sidebarId);
    if (stepIdx !== -1) {
      setCurrentStep(stepIdx);
      setIsTourActive(true);
    } else {
      setIsTourActive(false);
    }
  };

  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    if (activeSidebarItem === "inbox") {
      setChatMessages([
        {
          sender: "bot",
          text: "Hi 👋 I am Stitch Agent. How can I help you today?",
          time: "12:05 PM",
        },
      ]);
      setChatProgress(1);
      setUserText("");
      const t1 = setTimeout(() => {
        setChatProgress(2);
        setUserText("Do you have a refund policy?");
      }, 400);
      const t2 = setTimeout(() => {
        setChatMessages((prev) => [
          ...prev,
          {
            sender: "user",
            text: "Do you have a refund policy?",
            time: "12:05 PM",
          },
        ]);
        setUserText("");
        setChatProgress(3);
      }, 1000);
      const t3 = setTimeout(() => {
        setChatProgress(4);
      }, 1400);
      const t4 = setTimeout(() => {
        setChatMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text: "Yes! We offer a 14-day full refund policy for all subscription packages. If you are not satisfied, please contact our billing team.",
            time: "12:06 PM",
            source: "refund_policy.pdf",
          },
        ]);
        setChatProgress(5);
      }, 2000);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
        clearTimeout(t4);
      };
    }
  }, [activeSidebarItem]);
  /* eslint-enable react-hooks/set-state-in-effect */

  const handleNext = () => {
    if (currentStep < tourSteps.length - 1) {
      const next = currentStep + 1;
      setCurrentStep(next);
      setActiveSidebarItem(tourSteps[next].sidebarId);
      setAnimKey((k) => k + 1);
    } else {
      setIsTourActive(false);
    }
  };
  const handleBack = () => {
    if (currentStep > 0) {
      const prev = currentStep - 1;
      setCurrentStep(prev);
      setActiveSidebarItem(tourSteps[prev].sidebarId);
      setAnimKey((k) => k + 1);
    }
  };
  const restartTour = () => {
    setCurrentStep(0);
    setIsTourActive(true);
    setActiveSidebarItem(tourSteps[0].sidebarId);
    setAnimKey((k) => k + 1);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(
      `<!-- Dagsis Chatbot Integration -->\n<script src="https://dagsis.jsuite.in/widget.js"></script>\n<script>\n  window.DagsisChat.init({\n    agentId: "3332c441-d61f-4de2-9c62-115638220397",\n    apiKey: "b2d38216-91b2-4454-8679-6fca49d6971b"\n  });\n</script>`,
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getStepConfig = (idx: number, isDarkTheme: boolean) => {
    const base = stepConfig[idx];
    if (isDarkTheme) {
      return base;
    } else {
      const lightColors: Record<
        number,
        {
          bgClass: string;
          textClass: string;
          borderClass: string;
          shadowClass: string;
        }
      > = {
        0: {
          bgClass: "bg-blue-50/80",
          textClass: "text-blue-600",
          borderClass: "border-blue-200",
          shadowClass: "shadow-blue-500/5",
        },
        1: {
          bgClass: "bg-violet-50/80",
          textClass: "text-violet-600",
          borderClass: "border-violet-200",
          shadowClass: "shadow-violet-500/5",
        },
        2: {
          bgClass: "bg-cyan-50/80",
          textClass: "text-cyan-800",
          borderClass: "border-cyan-200",
          shadowClass: "shadow-cyan-500/5",
        },
        3: {
          bgClass: "bg-emerald-50/80",
          textClass: "text-emerald-800",
          borderClass: "border-emerald-200",
          shadowClass: "shadow-emerald-500/5",
        },
        4: {
          bgClass: "bg-amber-50/80",
          textClass: "text-amber-800",
          borderClass: "border-amber-200",
          shadowClass: "shadow-amber-500/5",
        },
      };
      return {
        ...base,
        ...lightColors[idx],
      };
    }
  };

  const cfg = getStepConfig(currentStep, isDark);
  const progressPct = (currentStep / (tourSteps.length - 1)) * 100;

  return (
    <div className="hidden md:block relative dm-fade">
      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] bg-blue-600/8 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 -right-40 w-[500px] h-[500px] bg-violet-600/6 rounded-full blur-[140px]" />
      </div>

      {/* ── Section Header ── */}
      <div className="dm-head">
        <div>
          <span className="dm-kicker">Interactive Platform Demo</span>
          <h2 className="section-title dm-title">
            From Zero to Deployed in Under 5 Minutes.
          </h2>
        </div>
        <p className="section-description dm-desc">
          Walk through every step of the Dagsis platform — live, interactive, no
          account required.
        </p>
      </div>

      {/* ── Step Navigator ── */}
      <div className="dm-ui max-w-3xl mx-auto mb-10 overflow-x-auto scrollbar-none pb-2">
        <div className="relative flex items-start justify-between min-w-[540px] md:min-w-0">
          {/* Background track line */}
          <div className="absolute left-[5%] right-[5%] top-5 h-px bg-slate-200 dark:bg-white/[0.06]" />
          {/* Animated fill */}
          <div
            className={`absolute left-[5%] top-5 h-px bg-gradient-to-r ${cfg.barColor} transition-all duration-700 ease-out`}
            style={{ width: `${progressPct * 0.9}%` }}
          />

          {tourSteps.map((step, idx) => {
            const c = getStepConfig(idx, isDark);
            const isActive = idx === currentStep;
            const isDone = idx < currentStep;
            return (
              <button
                key={idx}
                onClick={() => handleSidebarClick(step.sidebarId)}
                className="relative flex flex-col items-center gap-2.5 group z-10"
              >
                {/* Circle */}
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 relative ${
                    isActive
                      ? `bg-gradient-to-br ${c.gradientFrom} ${c.gradientTo} border-transparent text-white shadow-lg ${c.shadowClass}`
                      : isDone
                        ? "bg-slate-100 dark:bg-white/10 border-slate-200 dark:border-white/20 text-slate-800 dark:text-white"
                        : "bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-white/[0.08] text-slate-400 dark:text-slate-600 hover:border-slate-300 dark:hover:border-white/20 hover:text-slate-650 dark:hover:text-slate-400"
                  }`}
                >
                  {isActive && (
                    <span className="absolute inset-0 rounded-full animate-ping opacity-20 bg-white pointer-events-none" />
                  )}
                  {isDone ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <span className="text-xs font-black">{idx + 1}</span>
                  )}
                </div>
                {/* Label */}
                <span
                  className={`text-[9px] sm:text-[10px] font-bold uppercase tracking-wider transition-colors ${
                    isActive
                      ? c.textClass
                      : isDone
                        ? "text-slate-600 dark:text-slate-400"
                        : "text-slate-400 dark:text-slate-600 group-hover:text-slate-550 dark:group-hover:text-slate-550"
                  }`}
                >
                  {step.shortTitle}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Main Panel ── */}
      <div className="dm-ui">
        <div
          className={`grid grid-cols-1 lg:grid-cols-[4fr_8fr] rounded-[28px] border overflow-hidden backdrop-blur-2xl transition-all duration-300 relative lg:h-[600px] ${
            isDark
              ? "border-white/[0.07] bg-slate-950/60 shadow-[0_0_80px_rgba(0,0,0,0.5)]"
              : "border-slate-200/80 bg-white/90 shadow-[0_0_80px_rgba(0,102,255,0.06)]"
          }`}
        >
          {/* Accent top border across full width */}
          <div
            className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${cfg.gradientFrom} ${cfg.gradientTo} opacity-70 z-20`}
          />

          {/* ═══ LEFT: Step Context Panel ═══ */}
          <div
            key={`left-${currentStep}`}
            className={`relative flex flex-col justify-between p-8 lg:p-10 border-b lg:border-b-0 lg:border-r overflow-hidden min-h-[320px] lg:h-full transition-all duration-300 ${
              isDark ? "border-white/[0.07]" : "border-slate-200/80"
            }`}
          >
            {/* Watermark number */}
            <div
              className={`absolute -bottom-6 -right-2 text-[180px] font-black leading-none ${cfg.textClass} ${
                isDark ? "opacity-[0.04]" : "opacity-[0.08]"
              } pointer-events-none select-none tracking-tight`}
            >
              {cfg.number}
            </div>

            {/* Subtle gradient wash */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${cfg.gradientFrom} ${cfg.gradientTo} ${
                isDark ? "opacity-[0.03]" : "opacity-[0.015]"
              } pointer-events-none`}
            />

            <div className="relative z-10">
              {/* Step badge */}
              <div
                className={`inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full ${cfg.bgClass} border ${cfg.borderClass} mb-7`}
              >
                <cfg.Icon className={`w-3.5 h-3.5 ${cfg.textClass}`} />
                <span
                  className={`text-[10px] font-black uppercase tracking-widest ${cfg.textClass}`}
                >
                  Step {currentStep + 1} / {tourSteps.length}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
                {tourSteps[currentStep].title}
              </h3>

              {/* Description */}
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-8 max-w-xs">
                {tourSteps[currentStep].description}
              </p>

              {/* Feature highlights */}
              <div className="space-y-3.5">
                {cfg.features.map((feat, fi) => (
                  <div key={fi} className="flex items-start gap-3.5">
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${cfg.bgClass} border ${cfg.borderClass}`}
                    >
                      <Check className={`w-2.5 h-2.5 ${cfg.textClass}`} />
                    </div>
                    <span className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div
              className={`relative z-10 flex items-center justify-between mt-10 pt-6 border-t ${
                isDark ? "border-white/[0.06]" : "border-slate-200"
              }`}
            >
              <button
                onClick={handleBack}
                disabled={currentStep === 0}
                className={`flex items-center gap-2 text-xs font-semibold disabled:opacity-25 disabled:cursor-not-allowed transition-all px-4 py-2.5 rounded-xl border ${
                  isDark
                    ? "text-slate-400 hover:text-white border-white/[0.06] hover:bg-white/5 hover:border-white/10"
                    : "text-slate-600 hover:text-slate-900 border-slate-200 hover:bg-slate-50 hover:border-slate-300"
                }`}
              >
                <ChevronLeft className="w-4 h-4" /> Back
              </button>

              {isTourActive ? (
                <button
                  onClick={handleNext}
                  className={`flex items-center gap-2.5 text-sm font-bold text-white px-6 py-2.5 rounded-xl bg-gradient-to-r ${cfg.gradientFrom} ${cfg.gradientTo} shadow-lg ${cfg.shadowClass} hover:shadow-xl hover:opacity-90 transition-all duration-200`}
                >
                  {tourSteps[currentStep].buttonText}
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={restartTour}
                  className="flex items-center gap-2.5 text-sm font-bold text-white px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 shadow-lg shadow-blue-500/20 hover:opacity-90 transition-all"
                >
                  <RefreshCw className="w-4 h-4" /> Restart Tour
                </button>
              )}
            </div>
          </div>

          {/* ═══ RIGHT: Live Mockup Panel ═══ */}
          <div
            className={`flex flex-col min-h-[560px] lg:h-full lg:min-h-0 transition-colors duration-300 relative ${
              isDark ? "bg-slate-950/20" : "bg-slate-100/30"
            }`}
          >
            {/* Browser chrome bar */}
            <div
              className={`flex items-center justify-between px-5 py-3.5 border-b shrink-0 select-none ${
                isDark ? "border-white/[0.06]" : "border-slate-200/80"
              }`}
            >
              <div className="flex items-center gap-1.5">
                <span
                  className={`w-3 h-3 rounded-full border ${isDark ? "bg-red-500/40 border-red-500/50" : "bg-red-500/60 border-red-500/70"}`}
                />
                <span
                  className={`w-3 h-3 rounded-full border ${isDark ? "bg-yellow-500/40 border-yellow-500/50" : "bg-yellow-500/60 border-yellow-500/70"}`}
                />
                <span
                  className={`w-3 h-3 rounded-full border ${isDark ? "bg-green-500/40 border-green-500/50" : "bg-green-500/60 border-green-500/70"}`}
                />
              </div>
              <div
                className={`border px-6 py-1.5 rounded-lg text-[10px] font-medium flex items-center gap-1.5 transition-colors duration-300 ${
                  isDark
                    ? "bg-white/[0.04] border-white/[0.06] text-slate-500"
                    : "bg-slate-100/80 border-slate-200 text-slate-500"
                }`}
              >
                <Globe
                  className={`w-3 h-3 ${isDark ? "text-slate-600" : "text-slate-400"}`}
                />{" "}
                dagsis.ai/dashboard
              </div>
              <button
                onClick={restartTour}
                className={`flex items-center gap-1.5 text-[10px] transition px-2.5 py-1 rounded-lg border ${
                  isDark
                    ? "text-slate-500 hover:text-slate-300 hover:bg-white/5 border-transparent hover:border-white/5"
                    : "text-slate-500 hover:text-slate-800 hover:bg-slate-100 border-transparent hover:border-slate-200"
                }`}
              >
                <RefreshCw className="w-3 h-3" />
                <span className="hidden sm:inline">Reset</span>
              </button>
            </div>

            {/* Inner white dashboard */}
            <div
              key={`mockup-${animKey}`}
              className={`flex-1 m-3 rounded-[20px] border overflow-hidden flex flex-col md:flex-row text-left relative transition-all duration-300 ${
                isDark
                  ? "border-slate-200/80 bg-white text-slate-800"
                  : "border-slate-800/80 bg-[#121826] text-slate-100"
              }`}
              style={{ minHeight: "490px" }}
            >
              {/* ── Mockup Sidebar ── */}
              <div
                className={`w-full md:w-[190px] border-b md:border-b-0 md:border-r p-4 flex flex-row md:flex-col justify-between md:justify-start gap-4 shrink-0 select-none transition-all duration-300 ${
                  isDark
                    ? "border-slate-200/80 bg-slate-50/90"
                    : "border-slate-800/60 bg-[#0B0F17]"
                }`}
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-600/20">
                    <Bot className="w-4 h-4" />
                  </div>
                  <span
                    className={`font-bold text-sm tracking-tight transition-colors duration-300 ${
                      isDark ? "text-slate-800" : "text-white"
                    }`}
                  >
                    Dagsis<span className="text-blue-500">.ai</span>
                  </span>
                </div>

                <div className="hidden md:flex flex-col gap-1 mt-6 w-full">
                  <div
                    className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-xs cursor-pointer transition-all duration-200 ${
                      activeSidebarItem === "brand"
                        ? isDark
                          ? "bg-blue-50 text-blue-600 font-bold border-l-2 border-blue-500 shadow-sm"
                          : "bg-blue-600/15 text-blue-400 font-bold border-l-2 border-blue-500 shadow-sm"
                        : isDark
                          ? "text-slate-600 hover:text-slate-800 hover:bg-slate-200/40 font-semibold"
                          : "text-slate-300 hover:text-white hover:bg-slate-800/60 font-semibold"
                    }`}
                    onClick={() => handleSidebarClick("brand")}
                  >
                    <span className="flex items-center gap-2.5">
                      <Briefcase
                        className={`w-4 h-4 ${activeSidebarItem === "brand" ? "text-blue-500" : isDark ? "text-slate-500" : "text-slate-400"}`}
                      />
                      Brand Management
                    </span>
                    {activeSidebarItem === "brand" && (
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                    )}
                  </div>

                  <div
                    className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-xs cursor-pointer transition-all duration-200 ${
                      activeSidebarItem === "agents" ||
                      activeSidebarItem === "inbox" ||
                      activeSidebarItem === "integrations"
                        ? isDark
                          ? "bg-blue-50 text-blue-600 font-bold border-l-2 border-blue-500 shadow-sm"
                          : "bg-blue-600/15 text-blue-400 font-bold border-l-2 border-blue-500 shadow-sm"
                        : isDark
                          ? "text-slate-600 hover:text-slate-800 hover:bg-slate-200/40 font-semibold"
                          : "text-slate-300 hover:text-white hover:bg-slate-800/60 font-semibold"
                    }`}
                    onClick={() => handleSidebarClick("agents")}
                  >
                    <span className="flex items-center gap-2.5">
                      <Users className="w-4 h-4" /> Agents
                    </span>
                    {(activeSidebarItem === "agents" ||
                      activeSidebarItem === "inbox" ||
                      activeSidebarItem === "integrations") && (
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                    )}
                  </div>

                  <div
                    className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-xs cursor-pointer transition-all duration-200 ${
                      activeSidebarItem === "knowledge"
                        ? isDark
                          ? "bg-blue-50 text-blue-600 font-bold border-l-2 border-blue-500 shadow-sm"
                          : "bg-blue-600/15 text-blue-400 font-bold border-l-2 border-blue-500 shadow-sm"
                        : isDark
                          ? "text-slate-600 hover:text-slate-800 hover:bg-slate-200/40 font-semibold"
                          : "text-slate-300 hover:text-white hover:bg-slate-800/60 font-semibold"
                    }`}
                    onClick={() => handleSidebarClick("knowledge")}
                  >
                    <span className="flex items-center gap-2.5">
                      <BookOpen className="w-4 h-4" /> Knowledge Base
                    </span>
                    {activeSidebarItem === "knowledge" && (
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                    )}
                  </div>
{/* 
                  <div
                    className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl font-semibold text-xs cursor-pointer transition ${
                      isDark
                        ? "text-slate-600 hover:text-slate-800 hover:bg-slate-200/40"
                        : "text-slate-300 hover:text-white hover:bg-slate-800/60"
                    }`}
                  >
                    <Play
                      className={`w-4 h-4 ${isDark ? "text-slate-500" : "text-slate-400"}`}
                    />{" "}
                    Tutorials
                  </div> */}

                  {/* <div
                    className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-semibold select-none cursor-not-allowed transition ${
                      isDark ? "text-slate-400/80" : "text-slate-500/80"
                    }`}
                    title="Analytics is disabled for preview"
                  >
                    <BarChart3
                      className={`w-4 h-4 ${isDark ? "text-slate-400" : "text-slate-500"}`}
                    />{" "}
                    Analytics
                  </div> */}

                  {/* <div
                    className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl font-semibold text-xs cursor-pointer transition ${
                      isDark
                        ? "text-slate-600 hover:text-slate-800 hover:bg-slate-200/40"
                        : "text-slate-300 hover:text-white hover:bg-slate-800/60"
                    }`}
                  >
                    <Users
                      className={`w-4 h-4 ${isDark ? "text-slate-500" : "text-slate-400"}`}
                    />{" "}
                   Team Members
                  </div>  */}
                </div>
              </div>

              {/* ── Mockup Work Area ── */}
              <div
                className={`flex-1 flex flex-col h-full min-w-0 relative overflow-hidden transition-colors duration-300 ${
                  isDark ? "bg-slate-50/50" : "bg-[#0F1420]"
                }`}
              >
                <div
                  className={`absolute inset-0 bg-[size:16px_16px] pointer-events-none ${
                    isDark
                      ? "bg-[radial-gradient(rgba(0,0,0,0.03)_1.5px,transparent_1.5px)]"
                      : "bg-[radial-gradient(rgba(255,255,255,0.02)_1.5px,transparent_1.5px)]"
                  }`}
                />

                {/* VIEW 0: BRAND MANAGEMENT */}
                {activeSidebarItem === "brand" && (
                  <div className="flex-1 p-5 overflow-y-auto space-y-5 animate-view relative z-10 custom-scrollbar">
                    <div className="flex justify-between items-center select-none shrink-0">
                      <div>
                        <h2
                          className={`text-sm font-bold tracking-tight ${isDark ? "text-slate-800" : "text-white"}`}
                        >
                          Dashboard
                        </h2>
                      </div>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div
                        className={`border rounded-2xl p-4 shadow-sm flex items-center justify-between transition duration-300 ${isDark ? "bg-white border-slate-200/80 text-slate-800" : "bg-[#1E293B] border-slate-800 text-white"}`}
                      >
                        <div className="space-y-1">
                          <span className="text-[8px] font-bold uppercase tracking-wider text-slate-400 block">
                            Agents
                          </span>
                          <h3 className={`text-xl font-extrabold ${isDark ? "text-slate-800" : "text-white"}`}>1</h3>
                          <span className="text-[8px] text-slate-400 block">
                            Active agents
                          </span>
                        </div>
                        <div className="w-8 h-8 rounded-lg bg-blue-500 text-white flex items-center justify-center shrink-0 shadow-sm shadow-blue-500/20">
                          <Users className="w-4 h-4" />
                        </div>
                      </div>

                      <div
                        className={`border rounded-2xl p-4 shadow-sm flex items-center justify-between transition duration-300 ${isDark ? "bg-white border-slate-200/80 text-slate-800" : "bg-[#1E293B] border-slate-800 text-white"}`}
                      >
                        <div className="space-y-1">
                          <span className="text-[8px] font-bold uppercase tracking-wider text-slate-400 block">
                            Interactions
                          </span>
                          <h3 className={`text-xl font-extrabold ${isDark ? "text-slate-800" : "text-white"}`}>25</h3>
                          <span className="text-[8px] text-slate-400 block">
                            Total Interactions
                          </span>
                        </div>
                        <div className="w-8 h-8 rounded-lg bg-blue-500 text-white flex items-center justify-center shrink-0 shadow-sm shadow-blue-500/20">
                          <Globe className="w-4 h-4" />
                        </div>
                      </div>

                      <div
                        className={`border rounded-2xl p-4 shadow-sm flex items-center justify-between transition duration-300 ${isDark ? "bg-white border-slate-200/80 text-slate-800" : "bg-[#1E293B] border-slate-800 text-white"}`}
                      >
                        <div className="space-y-1">
                          <span className="text-[8px] font-bold uppercase tracking-wider text-slate-400 block">
                            Credits Remaining
                          </span>
                          <h3 className={`text-xl font-extrabold ${isDark ? "text-slate-800" : "text-white"}`}>412</h3>
                          <span className="text-[8px] text-slate-400 block">
                            Credits available
                          </span>
                        </div>
                        <div className="w-8 h-8 rounded-lg bg-blue-500 text-white flex items-center justify-center shrink-0 shadow-sm shadow-blue-500/20">
                          <FileText className="w-4 h-4" />
                        </div>
                      </div>
                    </div>

                    {/* Middle row: Welcome Card, Create Agent, Upload Files */}
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
                      <div
                        className={`lg:col-span-2 border rounded-2xl p-5 overflow-hidden shadow-sm relative flex flex-col justify-between transition duration-300 ${isDark ? "bg-gradient-to-br from-[#f8fafc] via-slate-100 to-[#dbeafe] border-slate-200/80 text-slate-850" : "bg-gradient-to-br from-[#0b1a3a] via-[#102c6b] to-[#1e40af] border-slate-800 text-slate-200"}`}
                      >
                        {/* Decorative accent */}
                        <div className="absolute right-[-20px] top-[50%] -translate-y-1/2 w-[145px] h-[145px] opacity-85 pointer-events-none z-0 drop-shadow-[0_0_10px_rgba(59,130,246,0.3)]">
                          <Sparkles className="w-full h-full text-blue-500" strokeWidth={0.8} />
                        </div>

                        <div className="space-y-1.5 relative z-10">
                          <span className={`text-[7.5px] font-extrabold tracking-widest uppercase ${isDark ? "text-slate-500" : "text-slate-400"}`}>
                            ∞ FREE PLAN
                          </span>
                          <span className={`text-[9.5px] font-bold block uppercase tracking-wider mt-1.5 ${isDark ? "text-slate-550" : "text-slate-400"}`}>
                            Welcome back,
                          </span>
                          <h3
                            className={`text-lg font-black tracking-tight leading-tight ${isDark ? "text-slate-850" : "text-white"}`}
                          >
                            John Doe
                          </h3>
                          <p
                            className={`text-[9.5px] leading-relaxed ${isDark ? "text-slate-550" : "text-slate-400"}`}
                          >
                            Glad to see you again!
                          </p>
                        </div>
                        <div className="relative z-10 pt-4">
                          <button className={`px-3 py-1.5 rounded-lg border text-[8.5px] font-extrabold flex items-center gap-1 transition ${isDark ? "bg-white border-slate-200 text-slate-700 hover:bg-slate-50" : "bg-[#1E293B] border-slate-800 text-slate-300 hover:bg-slate-800/80"}`}>
                            View Profile <ChevronRight className="w-3 h-3" />
                          </button>
                        </div>
                      </div>

                      {/* Create New Agent Card */}
                      <div className={`border rounded-2xl p-5 shadow-sm flex flex-col items-center justify-between text-center transition duration-300 ${isDark ? "bg-white border-slate-200/80" : "bg-[#1E293B] border-slate-800"}`}>
                        <div className="w-9 h-9 rounded-full bg-blue-600/10 text-blue-500 flex items-center justify-center shrink-0 mb-3">
                          <Users className="w-4 h-4" />
                        </div>
                        <div className="space-y-1">
                          <h4 className={`text-[11px] font-bold ${isDark ? "text-slate-800" : "text-white"}`}>Create New Agent</h4>
                          <p className="text-[8.5px] text-slate-400">Add intelligent agents to your brand</p>
                        </div>
                        <button onClick={() => handleSidebarClick("agents")} className="w-full bg-blue-600 hover:bg-blue-500 text-white text-[9.5px] font-bold py-1.5 rounded-lg transition mt-4 shadow-sm shadow-blue-500/20">
                          Create Agent
                        </button>
                      </div>

                      {/* Upload Files Card */}
                      <div className={`border rounded-2xl p-5 shadow-sm flex flex-col items-center justify-between text-center transition duration-300 ${isDark ? "bg-white border-slate-200/80" : "bg-[#1E293B] border-slate-800"}`}>
                        <div className="w-9 h-9 rounded-full bg-blue-600/10 text-blue-500 flex items-center justify-center shrink-0 mb-3">
                          <Upload className="w-4 h-4" />
                        </div>
                        <div className="space-y-1">
                          <h4 className={`text-[11px] font-bold ${isDark ? "text-slate-800" : "text-white"}`}>Upload Files</h4>
                          <p className="text-[8.5px] text-slate-400">Upload brand documents and FAQs</p>
                        </div>
                        <button onClick={() => handleSidebarClick("knowledge")} className="w-full bg-blue-600 hover:bg-blue-500 text-white text-[9.5px] font-bold py-1.5 rounded-lg transition mt-4 shadow-sm shadow-blue-500/20">
                          Upload Files
                        </button>
                      </div>
                    </div>

                    {/* Bottom grid layout: KB / Active Agents table on left, Recent Activity on right */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                      <div className="lg:col-span-2 space-y-5">
                        {/* Knowledge Base */}
                        <div className={`border rounded-2xl p-4 shadow-sm space-y-4 ${isDark ? "bg-white border-slate-200/80" : "bg-[#1E293B] border-slate-800"}`}>
                          <div>
                            <h4 className={`text-[11px] font-bold ${isDark ? "text-slate-800" : "text-white"}`}>Knowledge Base</h4>
                            <p className="text-[8.5px] text-slate-450">Monitor your urls, files and database sources</p>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-200/10">
                            {/* URLs column */}
                            <div className="space-y-3">
                              <span className="text-[9px] font-bold text-slate-400 block uppercase tracking-wider">URLs</span>
                              <div className="flex gap-4 text-center">
                                <div>
                                  <span className="text-[7.5px] text-slate-400 block">Active</span>
                                  <span className="w-5 h-5 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-[9px] mx-auto mt-1 shadow-sm">2</span>
                                </div>
                                <div>
                                  <span className="text-[7.5px] text-slate-400 block">Processing</span>
                                  <span className="w-5 h-5 rounded-full bg-blue-500/10 text-blue-500 border border-blue-500/20 flex items-center justify-center font-bold text-[9px] mx-auto mt-1">0</span>
                                </div>
                                <div>
                                  <span className="text-[7.5px] text-slate-400 block">Pending</span>
                                  <span className="w-5 h-5 rounded-full bg-blue-500/10 text-blue-500 border border-blue-500/20 flex items-center justify-center font-bold text-[9px] mx-auto mt-1">0</span>
                                </div>
                              </div>
                            </div>
                            {/* Files column */}
                            <div className="space-y-3 sm:pl-4">
                              <span className="text-[9px] font-bold text-slate-400 block uppercase tracking-wider">Files</span>
                              <div className="flex gap-4 text-center">
                                <div>
                                  <span className="text-[7.5px] text-slate-400 block">Active</span>
                                  <span className="w-5 h-5 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-[9px] mx-auto mt-1 shadow-sm">2</span>
                                </div>
                                <div>
                                  <span className="text-[7.5px] text-slate-400 block">Processing</span>
                                  <span className="w-5 h-5 rounded-full bg-blue-500/10 text-blue-500 border border-blue-500/20 flex items-center justify-center font-bold text-[9px] mx-auto mt-1">0</span>
                                </div>
                                <div>
                                  <span className="text-[7.5px] text-slate-400 block">Pending</span>
                                  <span className="w-5 h-5 rounded-full bg-blue-500/10 text-blue-500 border border-blue-500/20 flex items-center justify-center font-bold text-[9px] mx-auto mt-1">0</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Active Agents */}
                        <div className={`border rounded-2xl p-4 shadow-sm space-y-3 ${isDark ? "bg-white border-slate-200/80" : "bg-[#1E293B] border-slate-800"}`}>
                          <div className="flex justify-between items-center">
                            <div>
                              <h4 className={`text-[11px] font-bold ${isDark ? "text-slate-800" : "text-white"}`}>Active Agents</h4>
                              <p className="text-[8.5px] text-green-500 font-semibold flex items-center gap-1">✓ 1 Active this month</p>
                            </div>
                          </div>
                          <div className="overflow-x-auto">
                            <table className="w-full text-[9px]">
                              <thead>
                                <tr className="border-b border-slate-200/10 text-slate-400 uppercase font-bold text-[7.5px]">
                                  <th className="text-left pb-1.5">Agent</th>
                                  <th className="text-left pb-1.5">Category</th>
                                  <th className="text-right pb-1.5">Interaction</th>
                                </tr>
                              </thead>
                              <tbody className={isDark ? "text-slate-700" : "text-slate-350"}>
                                <tr className="font-semibold border-b border-slate-100/5">
                                  <td className="py-2">AKTU</td>
                                  <td className="py-2">Customer Support</td>
                                  <td className="py-2 text-right">4</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>

                      {/* Recent Interactions */}
                      <div className={`border rounded-2xl p-4 shadow-sm space-y-3 ${isDark ? "bg-white border-slate-200/80" : "bg-[#1E293B] border-slate-800"}`}>
                        <h4 className={`text-[11px] font-bold mb-1.5 ${isDark ? "text-slate-800" : "text-white"}`}>Recent Interactions</h4>
                        <div className="space-y-3">
                          {[
                            { text: "New chat with agent AKTU", time: "4 Jul, 19:17", type: "chat" },
                            { text: "Apple Bot is deleted", time: "2 Jul, 12:04", type: "delete" },
                            { text: "New chat with agent AKTU", time: "20 Jun, 13:10", type: "chat" },
                            { text: "AKTU knowledge base is updated", time: "20 Jun, 13:10", type: "update" },
                            { text: "New file is uploaded", time: "20 Jun, 13:06", type: "upload" },
                            { text: "New chat with agent AKTU", time: "18 Jun, 10:22", type: "chat" }
                          ].map((item, index) => {
                            let bgIcon = "bg-blue-500/10 text-blue-500";
                            if (item.type === "delete") bgIcon = "bg-red-500/10 text-red-500";
                            if (item.type === "update") bgIcon = "bg-green-500/10 text-green-500";
                            if (item.type === "upload") bgIcon = "bg-yellow-500/10 text-yellow-500";

                            return (
                              <div key={index} className="flex gap-2.5 text-[9px] items-start">
                                <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 text-[8.5px] ${bgIcon}`}>
                                  {item.type === "chat" && "💬"}
                                  {item.type === "delete" && "🗑️"}
                                  {item.type === "update" && "🔄"}
                                  {item.type === "upload" && "📁"}
                                </div>
                                <div className="min-w-0">
                                  <span className={`block font-bold truncate ${isDark ? "text-slate-700" : "text-slate-200"}`}>{item.text}</span>
                                  <span className="text-[7.5px] text-slate-400 block">{item.time}</span>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* VIEW 1: KNOWLEDGE BASE */}
                {activeSidebarItem === "knowledge" && (
                  <div className="flex-1 p-5 overflow-y-auto space-y-5 animate-view relative z-10 custom-scrollbar">
                    <div>
                      <h2
                        className={`text-sm font-bold tracking-tight ${isDark ? "text-slate-800" : "text-white"}`}
                      >
                        Train your AI agent with links, docs & FAQs.
                      </h2>
                      <p
                        className={`text-[10px] mt-0.5 ${isDark ? "text-slate-500" : "text-slate-400"}`}
                      >
                        Integrate resources to populate the agent&apos;s semantic
                        knowledge library.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                      {/* URLs card */}
                      <div
                        className={`lg:col-span-2 border rounded-2xl p-4 shadow-sm space-y-4 ${
                          isDark
                            ? "bg-white border-slate-200/80"
                            : "bg-[#1E293B] border-slate-800"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-xl bg-blue-600/10 text-blue-500 flex items-center justify-center shrink-0">
                            <Globe className="w-4 h-4" />
                          </div>
                          <div>
                            <h3
                              className={`text-xs font-bold ${isDark ? "text-slate-800" : "text-white"}`}
                            >
                              Knowledge Base URLs
                            </h3>
                            <p className="text-[9px] text-slate-400">
                              Add website URLs to crawl for knowledge
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <input
                            type="text"
                            placeholder="Enter website URL"
                            className={`flex-grow border rounded-xl px-3 py-2 text-[11px] outline-none focus:border-blue-500/50 placeholder:text-slate-400 transition ${
                              isDark
                                ? "bg-slate-50 border-slate-200 text-slate-800"
                                : "bg-[#0F1420] border-slate-800 text-slate-200 placeholder:text-slate-600"
                            }`}
                            disabled
                          />
                          <button className="bg-blue-600 hover:bg-blue-500 text-white text-[11px] font-bold px-4 py-2 rounded-xl shrink-0 flex items-center gap-1 shadow-lg shadow-blue-600/20 transition">
                            <Plus className="w-3.5 h-3.5" /> Add URL
                          </button>
                        </div>
                        <div
                          className={`border rounded-xl overflow-hidden text-[10px] ${
                            isDark
                              ? "border-slate-200 bg-slate-50/50 divide-slate-100"
                              : "border-slate-800 bg-[#0F1420]/50 divide-slate-800"
                          }`}
                        >
                          <div
                            className={`grid grid-cols-12 px-3 py-2 font-bold ${
                              isDark
                                ? "bg-slate-50 text-slate-500"
                                : "bg-[#0F1420] text-slate-400"
                            }`}
                          >
                            <div className="col-span-8 sm:col-span-6">URL</div>
                            <div className="col-span-4 sm:col-span-3 text-center">
                              STATUS
                            </div>
                            <div className="hidden sm:block col-span-3 text-right">
                              ACTIONS
                            </div>
                          </div>
                          {[
                            "https://en.wikipedia.org/wiki/Mango",
                            "https://stitch.withgoogle.com",
                            "https://stripe.com",
                          ].map((url) => (
                            <div
                              key={url}
                              className={`grid grid-cols-12 px-3 py-2.5 items-center transition ${
                                isDark
                                  ? "hover:bg-slate-50/85"
                                  : "hover:bg-[#1E293B]/50"
                              }`}
                            >
                              <div
                                className={`col-span-8 sm:col-span-6 font-semibold truncate pr-2 ${
                                  isDark ? "text-slate-700" : "text-slate-300"
                                }`}
                              >
                                {url}
                              </div>
                              <div className="col-span-4 sm:col-span-3 text-center">
                                <span
                                  className={`inline-flex items-center gap-1 text-[8px] font-bold px-2 py-0.5 rounded-full border ${
                                    isDark
                                      ? "text-green-600 bg-green-50 border-green-200/60"
                                      : "text-green-400 bg-green-950/30 border-green-900/50"
                                  }`}
                                >
                                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />{" "}
                                  Success
                                </span>
                              </div>
                              <div className="hidden sm:flex col-span-3 text-right items-center justify-end gap-2 text-slate-400">
                                <RefreshCw className="w-3 h-3 cursor-not-allowed" />
                                <Trash2 className="w-3 h-3 cursor-not-allowed text-red-500/60" />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Upload cards */}
                      <div className="space-y-4">
                        <div
                          className={`border rounded-2xl p-4 shadow-sm space-y-3 ${
                            isDark
                              ? "bg-white border-slate-200/80"
                              : "bg-[#1E293B] border-slate-800"
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <div
                              className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 border ${
                                isDark
                                  ? "bg-blue-50/80 border-blue-100 text-blue-500"
                                  : "bg-blue-950/40 border-blue-900/50 text-blue-400"
                              }`}
                            >
                              <Upload className="w-4 h-4" />
                            </div>
                            <div>
                              <h4
                                className={`text-[10px] font-bold ${isDark ? "text-slate-800" : "text-white"}`}
                              >
                                Upload Files
                              </h4>
                              <p className="text-[8px] text-slate-400">
                                PDF, DOCX, TXT, CSV, JSON, MD
                              </p>
                            </div>
                          </div>
                          <div
                            className={`border border-dashed rounded-xl p-4 text-center cursor-pointer transition duration-300 group ${
                              isDark
                                ? "border-slate-200 bg-slate-50 hover:bg-slate-100/50 hover:border-blue-500/30"
                                : "border-slate-800 bg-[#0F1420] hover:bg-[#0F1420]/80 hover:border-blue-500/30"
                            }`}
                          >
                            <Upload className="w-5 h-5 text-slate-400 group-hover:text-blue-500 mx-auto mb-1.5 transition animate-bounce" />
                            <p
                              className={`text-[9px] font-bold ${isDark ? "text-slate-600" : "text-slate-400"}`}
                            >
                              Drag & drop, or{" "}
                              <span className="text-blue-500 underline">
                                Browse
                              </span>
                            </p>
                            <p className="text-[7px] text-slate-400 mt-0.5">
                              Max size: 10MB per file
                            </p>
                          </div>
                          <div className="space-y-1">
                            <div
                              className={`flex justify-between text-[8px] font-semibold ${
                                isDark ? "text-slate-500" : "text-slate-400"
                              }`}
                            >
                              <span>Storage (FREE Plan)</span>
                              <span>2.9 KB / 20 MB</span>
                            </div>
                            <div
                              className={`w-full h-1.5 rounded-full overflow-hidden ${
                                isDark ? "bg-slate-100" : "bg-slate-800"
                              }`}
                            >
                              <div className="w-[1%] h-full bg-blue-500 rounded-full" />
                            </div>
                          </div>
                        </div>

                        <div
                          className={`border rounded-2xl p-4 shadow-sm space-y-2.5 ${
                            isDark
                              ? "bg-white border-slate-200/80"
                              : "bg-[#1E293B] border-slate-800"
                          }`}
                        >
                          <h4
                            className={`text-[10px] font-bold ${isDark ? "text-slate-800" : "text-white"}`}
                          >
                            Uploaded Files
                          </h4>
                          {[
                            { name: "Mango_Details.pdf", size: "2.9 KB" },
                            { name: "dummy-pdf_2.pdf", size: "14 KB" },
                          ].map((f) => (
                            <div
                              key={f.name}
                              className={`flex items-center justify-between p-2 rounded-xl text-[9px] border ${
                                isDark
                                  ? "bg-slate-50 border-slate-150"
                                  : "bg-[#0F1420] border-slate-800"
                              }`}
                            >
                              <div className="flex items-center gap-1.5 min-w-0">
                                <FileText className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                                <div className="min-w-0">
                                  <span
                                    className={`font-bold block truncate ${
                                      isDark
                                        ? "text-slate-700"
                                        : "text-slate-300"
                                    }`}
                                  >
                                    {f.name}
                                  </span>
                                  <span className="text-[7px] text-slate-400">
                                    {f.size}
                                  </span>
                                </div>
                              </div>
                              <span
                                className={`text-[7px] font-bold px-1.5 py-0.5 rounded uppercase border shrink-0 ${
                                  isDark
                                    ? "text-green-600 bg-green-50 border-green-100"
                                    : "text-green-400 bg-green-950/30 border-green-900/50"
                                }`}
                              >
                                SUCCESS
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {/* VIEW 2/3/4: AI AGENTS */}
                {(activeSidebarItem === "agents" ||
                  activeSidebarItem === "inbox" ||
                  activeSidebarItem === "integrations") && (
                  <div className="flex-1 p-5 overflow-y-auto space-y-5 animate-view relative z-10 custom-scrollbar">
                    <div className="flex justify-between items-center select-none shrink-0">
                      <div>
                        <h2
                          className={`text-sm font-bold tracking-tight ${isDark ? "text-slate-800" : "text-white"}`}
                        >
                          AI Agents Core
                        </h2>
                        <p className="text-[10px] text-slate-400 mt-0.5">
                          Manage and deploy custom agents trained on specialized
                          assets.
                        </p>
                      </div>
                      <div className="flex gap-2">
                        {/* <select
                          className={`px-2.5 py-1.5 text-[10px] font-bold rounded-lg outline-none transition border ${
                            isDark
                              ? "bg-blue border-slate-800 text-White"
                              : "bg-white border-slate-200 text-slate-600"
                          }`}
                          disabled
                        >
                          <option>Filter</option>
                        </select> */}
                        <button className="bg-blue-600 hover:bg-blue-500 text-white text-[10px] font-bold px-3 py-1.5 rounded-lg shadow-lg shadow-blue-600/20 transition flex items-center gap-1">
                          <Plus className="w-3.5 h-3.5" /> Create Agent
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[600px]">
                      {/* Stitch Agent */}
                      <div
                        className={`border rounded-2xl p-4 shadow-sm space-y-3 relative flex flex-col justify-between h-[210px] transition duration-300 group ${
                          isDark
                            ? "bg-white border-slate-200/80 hover:border-slate-300"
                            : "bg-[#1E293B] border-slate-800 hover:border-slate-700"
                        }`}
                      >
                        <div className="space-y-2.5">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-600/20 font-bold text-sm">
                                S
                              </div>
                              <div>
                                <h3
                                  className={`text-xs font-bold transition ${isDark ? "text-slate-800 group-hover:text-blue-500" : "text-white group-hover:text-blue-400"}`}
                                >
                                  Stitch Agent
                                </h3>
                                <p className="text-[8px] font-extrabold text-blue-500 uppercase tracking-widest mt-0.5">
                                  COMMUNITY MANAGER
                                </p>
                              </div>
                            </div>
                            <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-blue-400 transition rotate-90" />
                          </div>
                          <p
                            className={`text-[9.5px] leading-relaxed line-clamp-2 ${isDark ? "text-slate-400" : "text-slate-400"}`}
                          >
                            You are a Community Manager AI agent for Discord &
                            Telegram. Your primary goal is to welcome new
                            members, answer general FAQs...
                          </p>
                          <div className="flex gap-6 text-[9px] pt-1">
                            <div>
                              <span className="text-slate-500 block">
                                LANGUAGE
                              </span>
                              <span
                                className={`inline-block border px-2 py-0.5 rounded font-bold mt-1 uppercase ${
                                  isDark
                                    ? "bg-slate-100 border-slate-200 text-slate-600"
                                    : "bg-[#0F1420] border-slate-850 text-slate-300"
                                }`}
                              >
                                en
                              </span>
                            </div>
                            <div>
                              <span className="text-slate-500 block">
                                CHANNELS
                              </span>
                              <span className="inline-flex bg-blue-600/10 border border-blue-500/20 text-blue-400 px-2 py-0.5 rounded font-bold items-center gap-1 mt-1">
                                <Globe className="w-3 h-3" /> 1 Live
                              </span>
                            </div>
                          </div>
                        </div>
                        <div
                          className={`flex gap-2 shrink-0 pt-2 border-t ${
                            isDark ? "border-slate-150" : "border-slate-800"
                          }`}
                        >
                          <button
                            onClick={() => handleSidebarClick("inbox")}
                            className={`flex-1 font-semibold text-[10px] py-1.5 rounded-xl transition flex items-center justify-center gap-1 border ${
                              isDark
                                ? "bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-600"
                                : "bg-[#0F1420] hover:bg-[#0F1420]/80 border-slate-800 text-slate-300"
                            }`}
                          >
                            <Eye className="w-3.5 h-3.5 text-blue-400" /> Test
                            Agent
                          </button>
                          <button
                            onClick={() => handleSidebarClick("integrations")}
                            className="flex-1 bg-blue-600 hover:bg-blue-500 text-white font-bold text-[10px] py-1.5 rounded-xl transition flex items-center justify-center gap-1 shadow-lg shadow-blue-600/20"
                          >
                            <Plus className="w-3.5 h-3.5" /> Deploy
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Blur overlay for inbox/integrations */}
                    {(activeSidebarItem === "inbox" ||
                      activeSidebarItem === "integrations") && (
                      <div className="absolute inset-0 bg-slate-900/30 backdrop-blur-[1.5px] z-10 rounded-[20px] animate-fade-in" />
                    )}

                    {/* VIEW 3: SIMULATOR CHAT PANEL */}
                    {activeSidebarItem === "inbox" && (
                      <div
                        className={`absolute right-0 top-0 bottom-0 w-[280px] sm:w-[320px] border-l shadow-2xl z-20 flex flex-col justify-between animate-slideIn transition-all duration-300 ${
                          isDark
                            ? "bg-white border-slate-200"
                            : "bg-[#0F172A] border-slate-800"
                        }`}
                      >
                        <div
                          className={`px-4 py-3.5 border-b flex items-center justify-between shrink-0 select-none ${
                            isDark
                              ? "border-slate-200/80 bg-slate-50/50"
                              : "border-slate-800 bg-[#1E293B]/50"
                          }`}
                        >
                          <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-xs shadow-lg shadow-blue-600/20">
                              S
                            </div>
                            <div>
                              <h4
                                className={`text-xs font-bold ${isDark ? "text-slate-800" : "text-white"}`}
                              >
                                Stitch Agent
                              </h4>
                              <span className="text-[8px] text-green-600 font-bold block flex items-center gap-1 mt-0.5">
                                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-ping" />{" "}
                                Simulator Online
                              </span>
                            </div>
                          </div>
                          <button
                            onClick={() => handleSidebarClick("agents")}
                            className={`p-1.5 rounded-lg transition ${
                              isDark
                                ? "hover:bg-slate-100"
                                : "hover:bg-slate-800"
                            }`}
                          >
                            <X
                              className={`w-4 h-4 ${isDark ? "text-slate-400 hover:text-slate-700" : "text-slate-500 hover:text-slate-200"}`}
                            />
                          </button>
                        </div>

                        <div
                          className={`flex-grow p-4 space-y-3.5 overflow-y-auto text-[10px] custom-scrollbar transition-all duration-300 ${
                            isDark ? "bg-slate-50/30" : "bg-[#0B0F19]/30"
                          }`}
                        >
                          {chatMessages.map((msg, i) => (
                            <div
                              key={i}
                              className={`flex gap-2 max-w-[85%] ${msg.sender === "user" ? "ml-auto flex-row-reverse" : ""}`}
                            >
                              <div
                                className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-[9px] shrink-0 ${
                                  msg.sender === "user"
                                    ? "bg-blue-600 text-white"
                                    : isDark
                                      ? "bg-slate-100 text-slate-600 border border-slate-200"
                                      : "bg-slate-800 text-slate-300 border border-slate-700"
                                }`}
                              >
                                {msg.sender === "user" ? "U" : "S"}
                              </div>
                              <div className="space-y-1">
                                <div
                                  className={`p-2.5 rounded-2xl leading-relaxed text-xs shadow-sm ${
                                    msg.sender === "user"
                                      ? "bg-blue-600 text-white rounded-tr-none"
                                      : isDark
                                        ? "bg-white border border-slate-200/80 rounded-tl-none text-slate-800"
                                        : "bg-[#1E293B] border border-slate-800 rounded-tl-none text-slate-100"
                                  }`}
                                >
                                  {msg.text}
                                </div>
                                <span
                                  className={`text-[7.5px] ${isDark ? "text-slate-400" : "text-slate-500"} block px-1`}
                                >
                                  {msg.time}
                                </span>
                                {msg.source && (
                                  <div
                                    className={`flex items-center gap-1.5 text-[8.5px] font-semibold border px-2 py-1 rounded-lg w-fit mt-1.5 transition ${
                                      isDark
                                        ? "text-green-600 bg-green-50 border-green-200/60 hover:text-green-700"
                                        : "text-green-400 bg-green-950/40 border-green-900/60 hover:text-green-300"
                                    }`}
                                  >
                                    <Check className="w-3.5 h-3.5" /> Cited
                                    Source:{" "}
                                    <span className="underline cursor-pointer transition">
                                      {msg.source}
                                    </span>
                                  </div>
                                )}
                              </div>
                            </div>
                          ))}
                          {chatProgress === 2 && (
                            <div className="flex gap-2 max-w-[85%] ml-auto flex-row-reverse">
                              <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-[9px]">
                                U
                              </div>
                              <div
                                className={`p-2.5 rounded-2xl rounded-tr-none text-[10px] italic border animate-pulse ${
                                  isDark
                                    ? "bg-slate-100 border-slate-200 text-slate-500"
                                    : "bg-slate-800 border-slate-700 text-slate-400"
                                }`}
                              >
                                {userText}
                              </div>
                            </div>
                          )}
                          {chatProgress === 4 && (
                            <div className="flex gap-2 max-w-[85%]">
                              <div
                                className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-[9px] ${
                                  isDark
                                    ? "bg-slate-100 text-slate-600 border border-slate-200"
                                    : "bg-slate-800 text-slate-300 border border-slate-700"
                                }`}
                              >
                                S
                              </div>
                              <div
                                className={`p-3 rounded-2xl rounded-tl-none flex items-center gap-1 shadow-sm border ${
                                  isDark
                                    ? "bg-white border-slate-200"
                                    : "bg-[#1E293B] border-slate-800"
                                }`}
                              >
                                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce" />
                                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce [animation-delay:0.2s]" />
                                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce [animation-delay:0.4s]" />
                              </div>
                            </div>
                          )}
                        </div>

                        <div
                          className={`p-3.5 border-t shrink-0 space-y-2 ${
                            isDark
                              ? "border-slate-150 bg-slate-50/50"
                              : "border-slate-800 bg-[#1E293B]/30"
                          }`}
                        >
                          <div
                            className={`border rounded-xl p-1.5 flex items-center gap-2 shadow-sm ${
                              isDark
                                ? "border-slate-200 bg-white"
                                : "border-neutral-900 bg-black"
                            }`}
                          >
                            <span
                              className={`text-xs cursor-pointer px-1 ${isDark ? "" : "opacity-80"}`}
                            >
                              😊
                            </span>
                            <input
                              type="text"
                              placeholder={
                                chatProgress === 2
                                  ? "Simulating user query..."
                                  : "Simulator interface is read-only..."
                              }
                              className={`flex-grow bg-transparent text-[10.5px] outline-none cursor-not-allowed ${
                                isDark
                                  ? "text-slate-400 placeholder-slate-400"
                                  : "text-slate-400 dark:text-slate-500 placeholder-slate-600"
                              }`}
                              disabled
                            />
                            <button
                              className="w-6 h-6 rounded-lg bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-600/20 cursor-not-allowed shrink-0"
                              disabled
                            >
                              <Send className="w-3.5 h-3.5" />
                            </button>
                          </div>
                          <div className="flex justify-between items-center text-[7.5px] text-slate-400 select-none px-1">
                            <span className="font-semibold text-blue-500">
                              Dagsis Core Sandbox
                            </span>
                            <span>12:05 PM</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* VIEW 4: DEPLOY MODAL */}
                    {activeSidebarItem === "integrations" && (
                      <div
                        className={`absolute inset-4 sm:inset-6 border shadow-2xl z-20 rounded-2xl flex flex-col overflow-hidden animate-zoomIn text-xs transition-all duration-300 ${
                          isDark
                            ? "bg-white border-slate-200"
                            : "bg-[#0F172A] border-slate-800"
                        }`}
                      >
                        <div
                          className={`px-5 py-4 border-b flex justify-between items-center shrink-0 select-none ${
                            isDark
                              ? "border-slate-150 bg-slate-50/50"
                              : "border-slate-800 bg-[#1E293B]/50"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-blue-600/10 text-blue-600 flex items-center justify-center">
                              <Terminal className="w-4 h-4" />
                            </div>
                            <div>
                              <h3
                                className={`font-bold text-xs ${isDark ? "text-slate-800" : "text-white"}`}
                              >
                                Deploy Stitch Agent
                              </h3>
                              <p className="text-[8px] text-blue-600 font-bold uppercase tracking-wider mt-0.5">
                                COMMUNITY MANAGER
                              </p>
                            </div>
                          </div>
                          <button
                            onClick={() => handleSidebarClick("agents")}
                            className={`p-1.5 rounded-lg transition ${
                              isDark
                                ? "hover:bg-slate-100"
                                : "hover:bg-slate-800"
                            }`}
                          >
                            <X
                              className={`w-4 h-4 ${isDark ? "text-slate-400 hover:text-slate-700" : "text-slate-500 hover:text-slate-200"}`}
                            />
                          </button>
                        </div>

                        <div
                          className={`flex-1 flex min-h-0 flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x ${
                            isDark
                              ? "bg-slate-50 divide-slate-150"
                              : "bg-[#0F172A] divide-slate-800"
                          }`}
                        >
                          <div
                            className={`w-full sm:w-[160px] p-3 flex sm:flex-col gap-1 overflow-x-auto sm:overflow-x-visible select-none shrink-0 custom-scrollbar ${
                              isDark ? "bg-white" : "bg-black"
                            }`}
                          >
                            {[
                              "Vanilla JavaScript",
                              "React.js",
                              "Next.js",
                              "PHP Website",
                            ].map((fw, fi) => (
                              <div
                                key={fw}
                                className={`px-3 py-2 font-bold rounded-lg text-[10px] cursor-pointer whitespace-nowrap ${
                                  fi === 0
                                    ? isDark
                                      ? "bg-blue-50 border border-blue-200/80 text-blue-600"
                                      : "bg-blue-600/15 border border-blue-900/60 text-blue-400"
                                    : isDark
                                      ? "text-slate-500 hover:text-slate-800 hover:bg-slate-100"
                                      : "text-slate-400 hover:text-white hover:bg-slate-850"
                                }`}
                              >
                                {fw}
                              </div>
                            ))}
                          </div>

                          <div className="flex-grow p-4 overflow-y-auto space-y-4 custom-scrollbar">
                            <div>
                              <h4
                                className={`font-bold text-[11px] ${isDark ? "text-slate-800" : "text-white"}`}
                              >
                                Vanilla JavaScript Integration
                              </h4>
                              <p
                                className={`text-[9px] ${isDark ? "text-slate-500" : "text-slate-400"} mt-0.5`}
                              >
                                Directly embed the chatbot into any HTML website
                                using a script tag.
                              </p>
                            </div>
                            <div className={`px-3 py-2 flex justify-between items-center select-none rounded-t-xl border-t border-x ${isDark ? "bg-slate-100/70 border-slate-200 text-slate-700" : "bg-[#0B0F19] border-slate-800 text-slate-300"}`}>
                              <span className="font-bold text-[10px]">
                                Integration Script
                              </span>
                              <button
                                onClick={handleCopy}
                                className={`flex items-center gap-1.5 transition px-2.5 py-1 rounded border text-[9.5px] font-semibold ${isDark ? "bg-white border-slate-200 hover:bg-slate-50 text-slate-655 text-slate-600" : "bg-[#1E293B] border-slate-705 border-slate-700 hover:bg-slate-800 text-slate-300"}`}
                              >
                                {copied ? (
                                  <>
                                    <Check className="w-3.5 h-3.5 text-green-500" />{" "}
                                    Copied!
                                  </>
                                ) : (
                                  <>
                                    <Copy className={`w-3.5 h-3.5 ${isDark ? "text-blue-600" : "text-blue-400"}`} />
                                    Copy Code
                                  </>
                                )}
                              </button>
                            </div>

                            <div
                              className={`border-b border-x rounded-b-xl overflow-hidden text-[9.5px] shadow-inner ${
                                isDark ? "bg-slate-50/50 border-slate-200" : "bg-black/30 border-slate-800"
                              }`}
                            >
                              <pre className={`p-3 overflow-x-auto leading-relaxed select-text font-mono text-[9px] ${isDark ? "text-slate-700" : "text-slate-300"}`}>
                                <code className={isDark ? "text-slate-400 font-semibold" : "text-slate-500"}>
                                  {"<!-- Dagsis Chatbot Integration -->\n"}
                                </code>
                                <code className={isDark ? "text-blue-600 font-semibold" : "text-blue-400"}>
                                  {"<script "}
                                </code>
                                <code className={isDark ? "text-amber-700 font-semibold" : "text-amber-400"}>{"src="}</code>
                                <code className={isDark ? "text-green-600 font-semibold" : "text-green-400"}>
                                  {'"https://dagsis.jsuite.in/widget.js"'}
                                </code>
                                <code className={isDark ? "text-blue-600 font-semibold" : "text-blue-400"}>
                                  {">\n</script>\n"}
                                </code>
                                <code className={isDark ? "text-blue-600 font-semibold" : "text-blue-400"}>
                                  {"<script>\n"}
                                </code>
                                <code className={isDark ? "text-purple-650 font-semibold" : "text-purple-400"}>
                                  {"  window"}
                                </code>
                                <code className={isDark ? "text-slate-700" : "text-slate-305 text-slate-300"}>
                                  {".DagsisChat.init({\n"}
                                </code>
                                <code className={isDark ? "text-amber-700 font-semibold" : "text-amber-400"}>
                                  {"    agentId: "}
                                </code>
                                <code className={isDark ? "text-green-600 font-semibold" : "text-green-400"}>
                                  {'"3332c441-d61f-4de2-9c62-115638220397"'}
                                </code>
                                <code className={isDark ? "text-slate-700" : "text-slate-305 text-slate-300"}>{",\n"}</code>
                                <code className={isDark ? "text-amber-700 font-semibold" : "text-amber-400"}>
                                  {"    apiKey: "}
                                </code>
                                <code className={isDark ? "text-green-600 font-semibold" : "text-green-400"}>
                                  {'"b2d38216-91b2-4454-8679-6fca49d6971b"'}
                                </code>
                                <code className={isDark ? "text-slate-700" : "text-slate-305 text-slate-300"}>
                                  {"\n  });\n"}
                                </code>
                                <code className={isDark ? "text-blue-600 font-semibold" : "text-blue-400"}>
                                  {"</script>"}
                                </code>
                              </pre>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-[9px] leading-relaxed">
                              {[
                                "Include the script tag in your HTML header or body.",
                                "Initialize chatbot with your secret Agent ID.",
                                "Floating widget appears automatically on bottom-right.",
                              ].map((step, si) => (
                                <div
                                  key={si}
                                  className={`p-3 rounded-xl shadow-sm border ${
                                    isDark
                                      ? "bg-white border-slate-200/80"
                                      : "bg-[#1E293B] border-slate-800"
                                  }`}
                                >
                                  <div
                                    className={`w-5 h-5 rounded-lg flex items-center justify-center font-bold text-[9px] mb-2 border ${
                                      isDark
                                        ? "bg-blue-50 text-blue-600 border-blue-150"
                                        : "bg-blue-600/15 text-blue-400 border-blue-900/60"
                                    }`}
                                  >
                                    {si + 1}
                                  </div>
                                  <p
                                    className={
                                      isDark
                                        ? "text-slate-600"
                                        : "text-slate-300"
                                    }
                                  >
                                    {step}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* VIEW 5: ANALYTICS */}
                {activeSidebarItem === "analytics" && (
                  <div
                    className={`flex-1 p-5 overflow-y-auto space-y-4 animate-view text-xs relative z-10 custom-scrollbar transition-colors ${
                      isDark ? "text-slate-700" : "text-slate-300"
                    }`}
                  >
                    <div className="flex justify-between items-center select-none shrink-0">
                      <div>
                        <h2
                          className={`text-sm font-bold tracking-tight ${isDark ? "text-slate-800" : "text-white"}`}
                        >
                          Conversational Analytics
                        </h2>
                        <p className="text-[10px] text-slate-400 mt-0.5">
                          Real-time data feeds detailing chatbot operations and
                          logs.
                        </p>
                      </div>
                      <select
                        className={`px-2.5 py-1.5 text-[10px] font-bold rounded-lg outline-none transition border ${
                          isDark
                            ? "bg-white border-slate-200 text-slate-655 text-slate-600"
                            : "bg-[#1E293B] border-slate-800 text-slate-300"
                        }`}
                        disabled
                      >
                        <option>Stitch Agent</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
                      {[
                        {
                          label: "Auto-Resolution",
                          value: "88.5%",
                          color: isDark ? "text-blue-600" : "text-blue-400",
                          sub: "▲ +4.2% auto resolving",
                          subColor: "text-green-600",
                        },
                        {
                          label: "Avg Response Speed",
                          value: "1.5 sec",
                          color: isDark ? "text-cyan-600" : "text-cyan-400",
                          sub: "▼ Saved 12s on avg",
                          subColor: "text-green-600",
                        },
                        {
                          label: "Total Automations",
                          value: "1,248",
                          color: isDark ? "text-purple-600" : "text-purple-400",
                          sub: "No human intervention",
                          subColor: isDark
                            ? "text-slate-500"
                            : "text-slate-400",
                        },
                      ].map((s) => (
                        <div
                          key={s.label}
                          className={`border p-4 rounded-xl shadow-sm transition ${
                            isDark
                              ? "bg-white border-slate-200 hover:border-slate-300"
                              : "bg-[#1E293B] border-slate-800 hover:border-slate-700"
                          }`}
                        >
                          <span className="text-[8px] font-bold uppercase tracking-wider text-slate-400 block">
                            {s.label}
                          </span>
                          <h3
                            className={`text-xl font-extrabold mt-1 ${s.color}`}
                          >
                            {s.value}
                          </h3>
                          <p
                            className={`text-[8px] font-semibold mt-1 ${s.subColor}`}
                          >
                            {s.sub}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div
                      className={`border rounded-xl p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 shadow-sm ${
                        isDark
                          ? "border-slate-200 bg-slate-50/50"
                          : "border-slate-800 bg-[#0F1420]/50"
                      }`}
                    >
                      <div className="space-y-1.5 flex-1">
                        <div
                          className={`flex items-center justify-between text-[9px] font-semibold ${
                            isDark
                              ? "text-slate-555 text-slate-500"
                              : "text-slate-400"
                          }`}
                        >
                          <span>Message Credits Quota Meter</span>
                          <span
                            className={
                              isDark
                                ? "font-bold text-slate-800"
                                : "font-bold text-white"
                            }
                          >
                            325 / 500 Credits Used
                          </span>
                        </div>
                        <div
                          className={`w-full h-2 rounded-full overflow-hidden ${
                            isDark ? "bg-slate-200/80" : "bg-slate-800"
                          }`}
                        >
                          <div className="w-[65%] h-full bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full" />
                        </div>
                      </div>
                      <span
                        className={`px-2.5 py-1 text-[8.5px] font-bold rounded-lg shrink-0 border ${
                          isDark
                            ? "bg-blue-50 text-blue-600 border-blue-100"
                            : "bg-blue-950/40 text-blue-400 border-blue-900/50"
                        }`}
                      >
                        65% Quota Used
                      </span>
                    </div>

                    <div className="space-y-2">
                      <span
                        className={`text-[9px] font-bold uppercase tracking-wider block ${
                          isDark ? "text-slate-500" : "text-slate-400"
                        }`}
                      >
                        Historical Conversation Logs
                      </span>
                      <div
                        className={`border rounded-xl overflow-hidden divide-y text-[9.5px] ${
                          isDark
                            ? "border-slate-200 bg-white divide-slate-100"
                            : "border-slate-800 bg-[#1E293B] divide-slate-800"
                        }`}
                      >
                        {[
                          {
                            label: "WhatsApp User (+1 555-0199)",
                            color: "bg-green-500",
                            source: "refund_policy.pdf",
                          },
                          {
                            label: "Web Chat Visitor",
                            color: "bg-blue-500",
                            source: "brand_faq_sheet.docx",
                          },
                          {
                            label: "WhatsApp User (+1 555-0145)",
                            color: "bg-green-500",
                            source: "dagsis.ai/docs",
                          },
                        ].map((log) => (
                          <div
                            key={log.label}
                            className={`px-3.5 py-2.5 flex items-center justify-between transition ${
                              isDark
                                ? "hover:bg-slate-50"
                                : "hover:bg-[#0F1420]/50"
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              <span
                                className={`w-1.5 h-1.5 rounded-full ${log.color} ${log.color === "bg-green-500" ? "animate-pulse" : ""}`}
                              />
                              <span
                                className={`font-bold ${isDark ? "text-slate-700" : "text-slate-200"}`}
                              >
                                {log.label}
                              </span>
                            </div>
                            <span
                              className={
                                isDark
                                  ? "text-slate-500 font-medium"
                                  : "text-slate-400 font-medium"
                              }
                            >
                              Resolved via{" "}
                              <span
                                className={`font-bold underline ${
                                  isDark ? "text-blue-600" : "text-blue-400"
                                }`}
                              >
                                {log.source}
                              </span>
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Tour Completed State ── */}
      {!isTourActive && (
        <div className="dm-ui mt-6">
          <div
            className={`rounded-2xl border backdrop-blur-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 transition-all duration-300 ${
              isDark
                ? "border-white/[0.08] bg-white/[0.03]"
                : "border-slate-200 bg-white/70 shadow-sm"
            }`}
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4
                  className={`text-base font-extrabold ${isDark ? "text-white" : "text-slate-900"}`}
                >
                  Tour Complete!
                </h4>
                <p
                  className={`text-xs mt-0.5 ${isDark ? "text-slate-400" : "text-slate-500"}`}
                >
                  You&apos;ve seen everything Dagsis has to offer. Ready to start for
                  real?
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={restartTour}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-xs font-semibold transition ${
                  isDark
                    ? "border-white/[0.08] text-slate-400 hover:text-white hover:bg-white/5 hover:border-white/15"
                    : "border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-55/80 hover:border-slate-300"
                }`}
              >
                <RefreshCw className="w-3.5 h-3.5" /> Replay Tour
              </button>
              <Link
                href="/signup"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-white text-xs font-bold shadow-lg shadow-blue-500/20 hover:opacity-90 transition"
              >
                Get Started Free <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      )}

      <style>{`
                .dm-fade { animation: fadeIn 0.7s ease both; }
                .dm-ui { font-family: var(--font-inter), ui-sans-serif, system-ui, sans-serif; }
                .dm-ui h2, .dm-ui h3, .dm-ui h4 { font-family: var(--font-jakarta), var(--font-inter), ui-sans-serif, system-ui, sans-serif; }

                .dm-head { display: grid; grid-template-columns: minmax(0, 1.15fr) minmax(0, .85fr); align-items: end; gap: 16px 56px; margin: 0 0 80px; text-align: left; }
                .dm-kicker { display: inline-flex; align-items: center; gap: 14px; font-family: var(--font-dm-sans), Arial, sans-serif; font-size: 13px; font-weight: 600; letter-spacing: .22em; text-transform: uppercase; white-space: nowrap; color: #16213a; }
                .dm-kicker::before { content: ""; width: 44px; height: 2px; flex-shrink: 0; border-radius: 2px; background: #1f5cf0; }
                .dm-title { margin-top: 18px; color: #16213a; font-size: clamp(40px, 4.4vw, 60px); line-height: 1.05; letter-spacing: 0; }
                .dm-desc { margin: 0; max-width: 400px; justify-self: end; text-wrap: pretty; border-left: 2px solid #d9dcff; padding-left: 32px; }
                @media (max-width: 767px) {
                    .dm-head { grid-template-columns: minmax(0, 1fr); gap: 14px; }
                    .dm-desc { justify-self: start; border-left: 0; padding-left: 0; }
                }

                @keyframes slideIn {
                    from { transform: translateX(100%); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
                @keyframes zoomIn {
                    from { transform: scale(0.94); opacity: 0; }
                    to { transform: scale(1); opacity: 1; }
                }
                .animate-slideIn { animation: slideIn 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
                .animate-zoomIn { animation: zoomIn 0.22s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
                .animate-fade-in { animation: fadeIn 0.2s ease forwards; }
                @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
                @keyframes viewIn {
                    from { transform: translateY(12px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }
                .animate-view { animation: viewIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards; }

                /* Custom scrollbar styling */
                .custom-scrollbar::-webkit-scrollbar {
                    width: 5px;
                    height: 5px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #cbd5e1;
                    border-radius: 9999px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #94a3b8;
                }
                .custom-scrollbar {
                    scrollbar-width: thin;
                    scrollbar-color: #cbd5e1 transparent;
                }
            `}</style>
    </div>
  );
}
