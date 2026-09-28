/**
 * DEVELOPMENT ONLY — 16:9 artwork for the Product tour (1280×720), captured
 * by `npm run media:placeholders` → /public/images/showcase/tour-<id>.webp
 *
 * Each stop is a designed scene: a vivid backdrop in the Dagsis.ai logo
 * blues with large, readable product UI layered on top (the tour cards are
 * shown big, so the UI is drawn at ~1.5× normal size). Fixed colours, so the
 * same image works in light and dark theme.
 */
import {
  ArrowUpRight,
  Check,
  FileText,
  Globe,
  Link2,
  RefreshCw,
  Search,
  Send,
  ShoppingBag,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import type { ReactNode } from "react";
import type { ShowcaseMockVariant } from "@/types/content";
import { DiscordIcon, TelegramIcon, WhatsAppIcon } from "@/components/shared/BrandIcons";
import { RobotAvatar } from "@/components/shared/RobotAvatar";

const backdrops: Record<ShowcaseMockVariant, string> = {
  knowledge:
    "radial-gradient(55% 70% at 12% 10%, #56bbf7 0%, transparent 65%), radial-gradient(60% 80% at 100% 100%, #0a1eb0 0%, transparent 70%), linear-gradient(135deg, #3171f3, #1f5ce0)",
  builder:
    "radial-gradient(60% 70% at 90% 0%, #8db3f8 0%, transparent 65%), radial-gradient(60% 80% at 0% 100%, #0a1eb0 0%, transparent 70%), linear-gradient(160deg, #2f6df4, #1a4bbb)",
  widget:
    "radial-gradient(60% 70% at 0% 0%, #bcd3fb 0%, transparent 65%), radial-gradient(55% 70% at 100% 90%, #56bbf7 0%, transparent 70%), linear-gradient(135deg, #5c91f5, #1f5ce0)",
  conversations:
    "radial-gradient(60% 70% at 100% 0%, #56bbf7 0%, transparent 60%), radial-gradient(60% 80% at 10% 100%, #0c1a40 0%, transparent 70%), linear-gradient(150deg, #1f5ce0, #1a3f96)",
  analytics:
    "radial-gradient(55% 70% at 15% 0%, #8db3f8 0%, transparent 65%), radial-gradient(60% 80% at 100% 100%, #0a1eb0 0%, transparent 70%), linear-gradient(135deg, #3171f3, #1a4bbb)",
};

const ink = "text-[#0d1328]";
const muted = "text-[#5a6175]";
const card = `rounded-3xl bg-white ${ink} shadow-[0_30px_80px_-20px_rgba(6,20,90,0.55)]`;

function Stage({ id, children }: { id: ShowcaseMockVariant; children: ReactNode }) {
  return (
    <div id="capture" className="relative h-[720px] w-[1280px] overflow-hidden" style={{ background: backdrops[id] }}>
      {/* soft light grid for depth */}
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse at center, black 20%, transparent 75%)",
        }}
      />
      {children}
    </div>
  );
}

function Pill({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-base font-semibold ${ink} shadow-xl ${className}`}>
      {children}
    </span>
  );
}

/* 1 — Knowledge: files flow into the knowledge base */
function KnowledgeScene() {
  const sources = [
    { icon: FileText, name: "Product catalog 2026.pdf", meta: "214 chunks" },
    { icon: Globe, name: "yourstore.com", meta: "1,280 chunks" },
    { icon: FileText, name: "Shipping & returns.docx", meta: "36 chunks" },
    { icon: Link2, name: "help.yourstore.com/faq", meta: "Syncing…", syncing: true },
  ];
  const tiles = [
    { label: "PDF", cls: "left-[70px] top-[110px] -rotate-6" },
    { label: "DOCX", cls: "left-[150px] top-[330px] rotate-3" },
    { label: "URL", cls: "left-[60px] top-[520px] -rotate-3" },
  ];
  return (
    <Stage id="knowledge">
      {tiles.map((t) => (
        <div key={t.label} className={`absolute ${t.cls} flex h-[120px] w-[96px] flex-col justify-between rounded-2xl bg-white p-3 shadow-2xl`}>
          <FileText className="size-7 text-[#1f5ce0]" />
          <span className={`text-lg font-bold ${ink}`}>{t.label}</span>
        </div>
      ))}
      <svg className="absolute left-[250px] top-[150px]" width="200" height="420" fill="none" aria-hidden="true">
        <path d="M10 20C120 40 130 200 190 210M40 250C120 250 140 220 190 215M20 400C130 380 130 230 190 220" stroke="white" strokeOpacity="0.55" strokeWidth="3" strokeDasharray="6 8" />
      </svg>
      <div className={`${card} absolute left-[460px] top-[100px] w-[720px] p-8`}>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-3xl font-semibold">Knowledge base</p>
            <p className={`mt-1 text-lg ${muted}`}>4 sources · 1,622 chunks indexed</p>
          </div>
          <span className="rounded-full bg-[#1f5ce0] px-5 py-2.5 text-lg font-semibold text-white">+ Add source</span>
        </div>
        <div className={`mt-6 flex items-center gap-3 rounded-2xl bg-[#f6f7fa] px-5 py-3.5 text-lg ${muted}`}>
          <Search className="size-5" /> Search sources…
        </div>
        <ul className="mt-4 space-y-3">
          {sources.map((s) => (
            <li key={s.name} className="flex items-center gap-4 rounded-2xl border border-[#e1e4ec] px-5 py-4">
              <s.icon className="size-6 text-[#1f5ce0]" />
              <span className="flex-1 text-xl font-medium">{s.name}</span>
              <span className={`text-lg ${muted}`}>{s.meta}</span>
              {s.syncing ? (
                <RefreshCw className="size-6 text-amber-600" />
              ) : (
                <span className="flex size-7 items-center justify-center rounded-full bg-emerald-500 text-white">
                  <Check className="size-4" strokeWidth={3} />
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
      <Pill className="absolute right-[70px] bottom-[60px]">
        <Sparkles className="size-5 text-[#1f5ce0]" /> Agent trained on your content
      </Pill>
    </Stage>
  );
}

/* 2 — Agents: profile + live test chat */
function BuilderScene() {
  return (
    <Stage id="builder">
      <div className={`${card} absolute left-[80px] top-[90px] w-[520px] p-8`}>
        <div className="flex items-center gap-5">
          <div className="size-28 shrink-0 rounded-3xl bg-[#eef4fe] p-2">
            <RobotAvatar idPrefix="tour-robot" />
          </div>
          <div>
            <p className="text-4xl font-semibold">Ava</p>
            <p className={`mt-1 text-xl ${muted}`}>Support agent · YourStore</p>
          </div>
        </div>
        <p className={`mt-7 text-lg font-medium ${muted}`}>Tone</p>
        <div className="mt-2 flex gap-2.5">
          {["Friendly", "Concise", "Uses emoji"].map((t, i) => (
            <span key={t} className={`rounded-full px-4 py-2 text-lg font-medium ${i === 0 ? "bg-[#1f5ce0] text-white" : "bg-[#eef0f5] text-[#30364a]"}`}>
              {t}
            </span>
          ))}
        </div>
        {["Answer only from my docs", "Hand off refunds to a human"].map((label) => (
          <div key={label} className="mt-4 flex items-center justify-between rounded-2xl bg-[#f6f7fa] px-5 py-4 text-xl font-medium">
            {label}
            <span className="flex h-8 w-14 items-center rounded-full bg-[#1f5ce0] p-1">
              <span className="ml-auto size-6 rounded-full bg-white" />
            </span>
          </div>
        ))}
      </div>
      <div className={`${card} absolute right-[80px] top-[150px] w-[520px] overflow-hidden`}>
        <div className="flex items-center gap-3 border-b border-[#e1e4ec] px-7 py-5">
          <span className="size-3 rounded-full bg-emerald-500" />
          <p className="text-xl font-semibold">Test playground</p>
        </div>
        <div className="space-y-4 p-7">
          <p className="ml-auto w-fit max-w-[80%] rounded-3xl rounded-tr-md bg-[#1f5ce0] px-5 py-3.5 text-xl text-white">Is the blue jacket waterproof?</p>
          <p className="w-fit max-w-[85%] rounded-3xl rounded-tl-md bg-[#eef0f5] px-5 py-3.5 text-xl">
            Yes! The Nordic Shell is fully waterproof, with sealed seams 🌧️
          </p>
          <div className={`flex items-center gap-3 rounded-full border border-[#e1e4ec] px-5 py-3.5 text-lg ${muted}`}>
            <span className="flex-1">Ask something…</span>
            <Send className="size-5 text-[#1f5ce0]" />
          </div>
        </div>
      </div>
    </Stage>
  );
}

/* 3 — Widget: a store website with the chat widget open */
function WidgetScene() {
  const products = [
    { name: "Nordic Shell", price: "€149", tone: "from-[#bcd3fb] to-[#8db3f8]" },
    { name: "Trail Runner", price: "€119", tone: "from-[#dce8fd] to-[#56bbf7]" },
    { name: "City Pack", price: "€79", tone: "from-[#eef4fe] to-[#bcd3fb]" },
  ];
  return (
    <Stage id="widget">
      <div className={`${card} absolute left-[70px] top-[70px] w-[900px] overflow-hidden`}>
        <div className="flex items-center gap-2 border-b border-[#e1e4ec] bg-[#f6f7fa] px-5 py-3.5">
          <span className="size-3.5 rounded-full bg-[#ff5f57]" />
          <span className="size-3.5 rounded-full bg-[#febc2e]" />
          <span className="size-3.5 rounded-full bg-[#28c840]" />
          <span className={`mx-auto rounded-lg bg-white px-6 py-1.5 text-base ${muted}`}>yourstore.com</span>
        </div>
        <div className="flex items-center justify-between px-8 py-5">
          <p className="flex items-center gap-2 text-2xl font-bold"><ShoppingBag className="size-6 text-[#1f5ce0]" /> YourStore</p>
          <p className={`flex gap-7 text-lg ${muted}`}><span>New in</span><span>Outdoor</span><span>Sale</span></p>
        </div>
        <div className="mx-8 rounded-3xl bg-gradient-to-br from-[#0c1a40] to-[#1f5ce0] px-10 py-10 text-white">
          <p className="text-lg text-white/80">Autumn collection</p>
          <p className="mt-1 max-w-md text-4xl leading-tight font-semibold">Built for the rain. Styled for the city.</p>
        </div>
        <div className="grid grid-cols-3 gap-5 p-8">
          {products.map((p) => (
            <div key={p.name}>
              <div className={`h-28 rounded-2xl bg-gradient-to-br ${p.tone}`} />
              <p className="mt-3 text-lg font-semibold">{p.name}</p>
              <p className={`text-base ${muted}`}>{p.price}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={`${card} absolute right-[60px] bottom-[50px] w-[400px] overflow-hidden`}>
        <div className="flex items-center gap-3 bg-[#1f5ce0] px-6 py-4 text-white">
          <span className="flex size-10 items-center justify-center rounded-full bg-white/20">
            <Sparkles className="size-5" />
          </span>
          <div>
            <p className="text-xl font-semibold">Ava</p>
            <p className="text-sm text-white/85">Replies instantly</p>
          </div>
        </div>
        <div className="space-y-3 p-6">
          <p className="w-fit rounded-3xl rounded-tl-md bg-[#eef0f5] px-4 py-3 text-lg">Hi 👋 Looking for something?</p>
          <p className="ml-auto w-fit rounded-3xl rounded-tr-md bg-[#1f5ce0] px-4 py-3 text-lg text-white">Nordic Shell in size M?</p>
          <p className="w-fit rounded-3xl rounded-tl-md bg-[#eef0f5] px-4 py-3 text-lg">In stock! Ships tomorrow 📦</p>
        </div>
      </div>
    </Stage>
  );
}

/* 4 — Inbox: every channel in one place */
function ConversationsScene() {
  const threads = [
    { n: "Priya Shah", m: "Can I change my address?", icon: WhatsAppIcon, c: "text-emerald-600", t: "2m", active: true },
    { n: "Tom Keller", m: "Which plan has analytics?", icon: Globe, c: "text-[#1f5ce0]", t: "8m" },
    { n: "Lina M.", m: "Open on Sunday?", icon: TelegramIcon, c: "text-sky-600", t: "15m" },
    { n: "Omar R.", m: "Thanks, that worked!", icon: DiscordIcon, c: "text-indigo-600", t: "1h" },
  ];
  return (
    <Stage id="conversations">
      <div className={`${card} absolute left-[80px] top-[80px] flex h-[560px] w-[1120px] overflow-hidden`}>
        <div className="w-[420px] border-r border-[#e1e4ec]">
          <div className="flex items-center justify-between px-7 py-6">
            <p className="text-3xl font-semibold">Inbox</p>
            <span className="rounded-full bg-[#eef4fe] px-3 py-1 text-base font-semibold text-[#1a4bbb]">4 open</span>
          </div>
          {threads.map((t) => (
            <div key={t.n} className={`flex items-center gap-4 px-7 py-4 ${t.active ? "bg-[#eef4fe]" : ""}`}>
              <span className="flex size-12 items-center justify-center rounded-full bg-[#eef0f5] text-lg font-semibold">
                {t.n.split(" ").map((p) => p[0]).join("")}
              </span>
              <div className="min-w-0 flex-1">
                <p className="flex items-center gap-2 text-lg font-semibold">
                  {t.n} <t.icon className={`size-4 ${t.c}`} />
                  <span className={`ml-auto text-sm font-normal ${muted}`}>{t.t}</span>
                </p>
                <p className={`truncate text-base ${muted}`}>{t.m}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-1 flex-col bg-[#f6f7fa] p-8">
          <div className="flex items-center justify-between">
            <p className="flex items-center gap-2 text-2xl font-semibold">
              Priya Shah <WhatsAppIcon className="size-5 text-emerald-600" />
            </p>
            <span className="rounded-full bg-[#1f5ce0] px-5 py-2.5 text-lg font-semibold text-white">Take over</span>
          </div>
          <div className="mt-8 flex flex-1 flex-col gap-4">
            <p className="ml-auto w-fit max-w-[75%] rounded-3xl rounded-tr-md bg-[#d9fdd3] px-5 py-3.5 text-xl">Hi! Can I change the address for order #4821?</p>
            <p className="w-fit max-w-[75%] rounded-3xl rounded-tl-md bg-white px-5 py-3.5 text-xl shadow-sm">Of course! What’s the new address?</p>
            <p className="ml-auto w-fit max-w-[75%] rounded-3xl rounded-tr-md bg-[#d9fdd3] px-5 py-3.5 text-xl">22 Baker Street, London</p>
            <p className="w-fit max-w-[75%] rounded-3xl rounded-tl-md bg-white px-5 py-3.5 text-xl shadow-sm">Done ✅ Your order now ships to 22 Baker Street.</p>
          </div>
        </div>
      </div>
    </Stage>
  );
}

/* 5 — Analytics: resolution, trend and top questions */
function AnalyticsScene() {
  const trend = [30, 42, 38, 55, 50, 64, 60, 72, 68, 80, 78, 88];
  const pts = trend.map((v, i) => `${(i / (trend.length - 1)) * 100},${100 - v}`).join(" ");
  const top = [
    { q: "Where is my order?", n: 842 },
    { q: "Return policy", n: 611 },
    { q: "Shipping to Canada", n: 390 },
  ];
  const r = 70;
  const c = 2 * Math.PI * r;
  return (
    <Stage id="analytics">
      <div className={`${card} absolute left-[80px] top-[80px] flex w-[380px] flex-col items-center p-8`}>
        <p className={`self-start text-xl font-medium ${muted}`}>Resolved by AI</p>
        <svg viewBox="0 0 180 180" className="mt-4 size-56" aria-hidden="true">
          <circle cx="90" cy="90" r={r} stroke="#eef0f5" strokeWidth="18" fill="none" />
          <circle
            cx="90"
            cy="90"
            r={r}
            stroke="url(#ring)"
            strokeWidth="18"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={`${c * 0.86} ${c}`}
            transform="rotate(-90 90 90)"
          />
          <defs>
            <linearGradient id="ring" x1="0" x2="1">
              <stop offset="0" stopColor="#56bbf7" />
              <stop offset="1" stopColor="#1f5ce0" />
            </linearGradient>
          </defs>
          <text x="90" y="100" textAnchor="middle" className="fill-[#0d1328] text-[34px] font-semibold">86%</text>
        </svg>
        <p className="mt-4 flex items-center gap-2 text-lg font-semibold text-emerald-700">
          <TrendingUp className="size-5" /> +6% this month
        </p>
      </div>
      <div className={`${card} absolute left-[500px] top-[80px] w-[700px] p-8`}>
        <div className="flex items-center justify-between">
          <p className="text-2xl font-semibold">Conversations</p>
          <p className="text-3xl font-semibold">12.4k</p>
        </div>
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="mt-5 h-40 w-full" aria-hidden="true">
          <defs>
            <linearGradient id="area" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#3171f3" stopOpacity="0.35" />
              <stop offset="1" stopColor="#3171f3" stopOpacity="0" />
            </linearGradient>
          </defs>
          <polygon points={`0,100 ${pts} 100,100`} fill="url(#area)" />
          <polyline points={pts} fill="none" stroke="#1f5ce0" strokeWidth="2.5" vectorEffect="non-scaling-stroke" />
        </svg>
      </div>
      <div className={`${card} absolute left-[500px] top-[400px] w-[700px] p-8`}>
        <p className="text-2xl font-semibold">Top questions this week</p>
        <ul className="mt-5 space-y-4">
          {top.map((t) => (
            <li key={t.q}>
              <div className="flex justify-between text-xl font-medium">
                <span>{t.q}</span>
                <span className={muted}>{t.n}</span>
              </div>
              <div className="mt-2 h-2.5 rounded-full bg-[#eef0f5]">
                <div className="h-full rounded-full bg-gradient-to-r from-[#1f5ce0] to-[#56bbf7]" style={{ width: `${(t.n / top[0].n) * 100}%` }} />
              </div>
            </li>
          ))}
        </ul>
      </div>
      <Pill className="absolute bottom-[70px] left-[110px]">
        Export report <ArrowUpRight className="size-5 text-[#1f5ce0]" />
      </Pill>
    </Stage>
  );
}

const scenes: Record<ShowcaseMockVariant, () => ReactNode> = {
  knowledge: KnowledgeScene,
  builder: BuilderScene,
  widget: WidgetScene,
  conversations: ConversationsScene,
  analytics: AnalyticsScene,
};

export function TourShot({ variant }: { variant: ShowcaseMockVariant }) {
  const Scene = scenes[variant];
  return <Scene />;
}
