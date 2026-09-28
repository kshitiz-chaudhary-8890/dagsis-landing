/**
 * Coded placeholder screens for the product showcase.
 * These stand in for real Dagsis screenshots of a dummy website; see
 * `src/content/showcase.ts` for how to swap them out.
 */
import {
  Bot,
  CheckCircle2,
  FileText,
  Globe,
  Link2,
  RefreshCw,
  Search,
  Send,
  TrendingUp,
  X,
} from "lucide-react";
import type { ShowcaseMockVariant } from "@/types/content";
import { cn } from "@/lib/utils";
import { ChatBubble } from "@/components/shared/ChatBubble";
import { TelegramIcon, WhatsAppIcon } from "@/components/shared/BrandIcons";

const frame = "min-h-[360px] sm:min-h-[420px] bg-surface-raised p-4 sm:p-6 text-left";

export function ShowcaseMock({ variant }: { variant: ShowcaseMockVariant }) {
  switch (variant) {
    case "knowledge":
      return <KnowledgeMock />;
    case "builder":
      return <BuilderMock />;
    case "widget":
      return <WidgetMock />;
    case "conversations":
      return <ConversationsMock />;
    case "analytics":
      return <AnalyticsMock />;
  }
}

function KnowledgeMock() {
  const sources = [
    { icon: FileText, name: "Product catalog 2026.pdf", type: "PDF", chunks: 214, status: "Synced" },
    { icon: Globe, name: "yourstore.com", type: "Website", chunks: 1280, status: "Synced" },
    { icon: FileText, name: "Shipping & returns.docx", type: "DOCX", chunks: 36, status: "Synced" },
    { icon: Link2, name: "help.yourstore.com/faq", type: "URL", chunks: 92, status: "Syncing" },
    { icon: FileText, name: "Warranty terms.pdf", type: "PDF", chunks: 18, status: "Synced" },
  ];
  return (
    <div className={frame}>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-lg font-semibold">Knowledge base</p>
          <p className="text-xs text-ink-400">5 sources · 1,640 chunks indexed</p>
        </div>
        <span className="rounded-full bg-brand-600 px-3 py-1.5 text-xs font-semibold text-white">+ Add source</span>
      </div>
      <div className="mt-4 flex items-center gap-2 rounded-lg px-3 py-2 text-xs text-ink-400 ring-1 ring-ink-200">
        <Search className="size-3.5" /> Search sources…
      </div>
      <div className="mt-4 overflow-hidden rounded-xl ring-1 ring-ink-100">
        {sources.map((s, i) => (
          <div
            key={s.name}
            className={cn("flex items-center gap-3 px-4 py-3 text-xs", i % 2 === 1 && "bg-ink-50/60")}
          >
            <s.icon className="size-4 text-brand-600 dark:text-brand-400" />
            <span className="flex-1 truncate font-medium text-ink-800">{s.name}</span>
            <span className="hidden w-16 text-ink-400 sm:block">{s.type}</span>
            <span className="hidden w-20 text-ink-400 sm:block">{s.chunks} chunks</span>
            <span
              className={cn(
                "inline-flex items-center gap-1 rounded-full px-2 py-0.5 font-medium",
                s.status === "Synced" ? "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-300" : "bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-300",
              )}
            >
              {s.status === "Synced" ? <CheckCircle2 className="size-3" /> : <RefreshCw className="size-3 animate-spin" />}
              {s.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function BuilderMock() {
  return (
    <div className={cn(frame, "grid gap-4 md:grid-cols-2")}>
      <div className="space-y-4">
        <p className="text-lg font-semibold">Agent settings</p>
        {[
          ["Name", "Ava"],
          ["Role", "Customer support for YourStore"],
          ["Goal", "Resolve questions, capture leads"],
        ].map(([label, value]) => (
          <div key={label}>
            <p className="text-[11px] font-medium text-ink-400">{label}</p>
            <p className="mt-1 rounded-lg bg-ink-50 px-3 py-2 text-xs ring-1 ring-ink-200">{value}</p>
          </div>
        ))}
        <div>
          <p className="text-[11px] font-medium text-ink-400">Creativity</p>
          <div className="mt-2 h-1.5 rounded-full bg-ink-100">
            <div className="relative h-full w-1/3 rounded-full bg-brand-500">
              <span className="absolute -top-1 -right-2 size-3.5 rounded-full bg-surface-raised ring-2 ring-brand-500" />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {["Friendly", "Uses emoji", "Hand off on refunds"].map((t) => (
            <span key={t} className="rounded-full bg-brand-50 px-2.5 py-1 text-[11px] font-medium text-brand-700 dark:text-brand-300">
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-col rounded-2xl bg-ink-50 p-3 ring-1 ring-ink-200">
        <p className="flex items-center gap-2 text-xs font-semibold text-ink-600">
          <Bot className="size-4 text-brand-600 dark:text-brand-400" /> Test playground
        </p>
        <div className="mt-3 flex flex-1 flex-col gap-2">
          <ChatBubble message={{ from: "user", text: "Is the blue jacket waterproof?" }} />
          <ChatBubble message={{ from: "agent", text: "Yes! The Nordic Shell jacket is fully waterproof (10k mm) with sealed seams 🌧️" }} />
        </div>
        <div className="mt-3 flex items-center gap-2 rounded-full bg-surface-raised px-3 py-2 text-xs text-ink-400 ring-1 ring-ink-200">
          <span className="flex-1">Ask something…</span>
          <Send className="size-3.5 text-brand-600 dark:text-brand-400" />
        </div>
      </div>
    </div>
  );
}

function WidgetMock() {
  return (
    <div className="relative min-h-[360px] bg-gradient-to-br from-ink-50 to-surface-raised p-6 text-left sm:min-h-[420px]">
      {/* Dummy website */}
      <div className="flex items-center justify-between">
        <span className="font-semibold">YourStore</span>
        <div className="hidden gap-4 text-xs text-ink-400 sm:flex">
          <span>Shop</span><span>About</span><span>Contact</span>
        </div>
      </div>
      <div className="mt-10 max-w-[55%] space-y-3">
        <div className="h-6 w-4/5 rounded bg-ink-200" />
        <div className="h-6 w-3/5 rounded bg-ink-200" />
        <div className="h-3 w-full rounded bg-ink-100" />
        <div className="h-3 w-5/6 rounded bg-ink-100" />
        <div className="mt-4 h-8 w-28 rounded-full bg-ink-800" />
      </div>

      {/* Widget */}
      <div className="absolute right-4 bottom-4 w-64 overflow-hidden rounded-2xl bg-surface-raised shadow-2xl ring-1 ring-ink-200 sm:w-72">
        <div className="flex items-center gap-2 bg-gradient-to-r from-brand-600 to-brand-500 px-4 py-3 text-white">
          <span className="flex size-7 items-center justify-center rounded-full bg-white/20">
            <Bot className="size-4" />
          </span>
          <div className="flex-1 leading-tight">
            <p className="text-sm font-semibold">Ava</p>
            <p className="text-[10px] text-white/80">Typically replies instantly</p>
          </div>
          <X className="size-4 opacity-80" />
        </div>
        <div className="space-y-2 p-3">
          <ChatBubble message={{ from: "agent", text: "Hi there 👋 How can I help you today?" }} />
          <div className="flex flex-wrap gap-1.5">
            {["Track my order", "Returns", "Sizing"].map((q) => (
              <span key={q} className="rounded-full px-2.5 py-1 text-[11px] font-medium text-brand-700 dark:text-brand-300 ring-1 ring-brand-200">
                {q}
              </span>
            ))}
          </div>
        </div>
        <div className="border-t border-ink-100 px-3 py-2 text-[11px] text-ink-400">Powered by Dagsis</div>
      </div>
    </div>
  );
}

function ConversationsMock() {
  const threads = [
    { name: "Priya Shah", icon: WhatsAppIcon, cls: "text-emerald-600 dark:text-emerald-400", msg: "Can I change my address?", time: "2m", active: true },
    { name: "Tom Keller", icon: Globe, cls: "text-brand-600 dark:text-brand-400", msg: "Which plan has analytics?", time: "8m" },
    { name: "Lina M.", icon: TelegramIcon, cls: "text-sky-600 dark:text-sky-400", msg: "Store hours on Sunday?", time: "15m" },
    { name: "Omar R.", icon: WhatsAppIcon, cls: "text-emerald-600 dark:text-emerald-400", msg: "Thanks, that worked!", time: "1h" },
  ];
  return (
    <div className="grid min-h-[360px] text-left sm:min-h-[420px] md:grid-cols-5">
      <div className="border-r border-ink-100 md:col-span-2">
        <p className="px-4 pt-4 pb-2 text-sm font-semibold">Inbox</p>
        {threads.map((t) => (
          <div key={t.name} className={cn("flex gap-3 px-4 py-3", t.active && "bg-brand-50")}>
            <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-ink-100 text-[11px] font-semibold">
              {t.name[0]}
            </span>
            <div className="min-w-0 flex-1">
              <p className="flex items-center gap-1.5 text-xs font-semibold">
                {t.name} <t.icon className={cn("size-3.5", t.cls)} />
                <span className="ml-auto font-normal text-ink-400">{t.time}</span>
              </p>
              <p className="truncate text-xs text-ink-500">{t.msg}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="hidden flex-col bg-ink-50/50 p-4 md:col-span-3 md:flex">
        <div className="flex items-center justify-between border-b border-ink-100 pb-3">
          <p className="text-sm font-semibold">Priya Shah</p>
          <span className="rounded-full bg-brand-600 px-3 py-1 text-[11px] font-semibold text-white">Take over</span>
        </div>
        <div className="flex flex-1 flex-col gap-2 pt-4">
          <ChatBubble message={{ from: "user", text: "Hi! Can I change my delivery address for order #4821?" }} />
          <ChatBubble message={{ from: "agent", text: "Of course! What's the new address?" }} />
          <ChatBubble message={{ from: "user", text: "22 Baker Street, London" }} />
          <ChatBubble message={{ from: "agent", text: "Done ✅ Your order will now ship to 22 Baker Street." }} />
        </div>
      </div>
    </div>
  );
}

function AnalyticsMock() {
  const line = [30, 42, 38, 55, 50, 64, 60, 72, 68, 80, 78, 90];
  const points = line.map((v, i) => `${(i / (line.length - 1)) * 100},${100 - v}`).join(" ");
  const top = [
    { q: "Where is my order?", n: 842 },
    { q: "Return policy", n: 611 },
    { q: "Shipping to Canada", n: 390 },
    { q: "Size guide", n: 254 },
  ];
  return (
    <div className={cn(frame, "space-y-4")}>
      <div className="grid grid-cols-3 gap-3">
        {[
          ["Resolution rate", "86%"],
          ["Conversations", "12.4k"],
          ["CSAT", "4.8/5"],
        ].map(([l, v]) => (
          <div key={l} className="rounded-xl p-3 ring-1 ring-ink-100">
            <p className="truncate text-[11px] text-ink-400">{l}</p>
            <p className="mt-1 text-lg font-semibold">{v}</p>
            <p className="flex items-center gap-1 text-[10px] text-emerald-700 dark:text-emerald-400">
              <TrendingUp className="size-3" /> vs last month
            </p>
          </div>
        ))}
      </div>
      <div className="grid gap-3 md:grid-cols-5">
        <div className="rounded-xl p-4 ring-1 ring-ink-100 md:col-span-3">
          <p className="text-xs font-medium text-ink-600">Resolved by AI</p>
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="mt-3 h-36 w-full">
            <defs>
              <linearGradient id="analytics-fill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3171f3" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#3171f3" stopOpacity="0" />
              </linearGradient>
            </defs>
            <polygon points={`0,100 ${points} 100,100`} fill="url(#analytics-fill)" />
            <polyline points={points} fill="none" stroke="#1f5ce0" strokeWidth="2" vectorEffect="non-scaling-stroke" />
          </svg>
        </div>
        <div className="rounded-xl p-4 ring-1 ring-ink-100 md:col-span-2">
          <p className="text-xs font-medium text-ink-600">Top questions</p>
          <ul className="mt-3 space-y-3">
            {top.map((t) => (
              <li key={t.q} className="text-xs">
                <div className="flex justify-between">
                  <span className="truncate text-ink-700">{t.q}</span>
                  <span className="text-ink-400">{t.n}</span>
                </div>
                <div className="mt-1 h-1.5 rounded-full bg-ink-100">
                  <div className="h-full rounded-full bg-brand-500" style={{ width: `${(t.n / top[0].n) * 100}%` }} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
