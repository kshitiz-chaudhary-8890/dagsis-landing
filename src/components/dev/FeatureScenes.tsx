/**
 * DEVELOPMENT ONLY — artwork for the feature ticker, rendered at 380×420 and
 * captured by `npm run media:placeholders` into /public/images/features/.
 *
 * - FeatureBackground: soft mesh gradients in the Dagsis.ai logo colours,
 *   used behind the frosted feature text cards.
 * - FeatureScene: one product scene per feature (brand-blue backdrop with a
 *   focused piece of Dagsis UI), used as the picture card after each feature.
 */
import { BarChart3, Check, FileText, Globe, Link2, RefreshCw, Send, UsersRound } from "lucide-react";
import type { ReactNode } from "react";
import { ChatBubble } from "@/components/shared/ChatBubble";
import { DiscordIcon, TelegramIcon, WhatsAppIcon } from "@/components/shared/BrandIcons";
import { RobotAvatar } from "@/components/shared/RobotAvatar";

export const FEATURE_SCENES = ["knowledge", "builder", "widget", "channels", "conversations", "analytics"] as const;
export type FeatureSceneId = (typeof FEATURE_SCENES)[number];
export const FEATURE_BACKGROUNDS = 4;

const frame = "relative h-[420px] w-[380px] overflow-hidden";

/* ---------------------------------------------------------------- backgrounds */

const meshes = [
  "radial-gradient(60% 50% at 15% 10%, #bcd3fb 0%, transparent 70%), radial-gradient(55% 45% at 90% 30%, #56bbf7 0%, transparent 70%), radial-gradient(70% 60% at 60% 100%, #3171f3 0%, transparent 70%), #eef4fe",
  "radial-gradient(60% 50% at 85% 5%, #8db3f8 0%, transparent 70%), radial-gradient(60% 55% at 10% 60%, #dce8fd 0%, transparent 70%), radial-gradient(70% 60% at 80% 100%, #1f5ce0 0%, transparent 70%), #e6effd",
  "radial-gradient(55% 50% at 20% 15%, #e6f6fe 0%, transparent 70%), radial-gradient(60% 50% at 80% 45%, #56bbf7 0%, transparent 70%), radial-gradient(70% 60% at 25% 100%, #2f6df4 0%, transparent 70%), #eaf5fe",
  "radial-gradient(60% 50% at 70% 10%, #dce8fd 0%, transparent 70%), radial-gradient(55% 50% at 5% 55%, #8db3f8 0%, transparent 70%), radial-gradient(75% 60% at 60% 105%, #0a1eb0 0%, transparent 70%), #d9e6fc",
];

export function FeatureBackground({ index }: { index: number }) {
  return <div id="capture" className={frame} style={{ background: meshes[index % meshes.length] }} />;
}

/* --------------------------------------------------------------------- scenes */

/** Brand-blue stage with a soft glow; UI floats on top. */
function Stage({ children }: { children: ReactNode }) {
  return (
    <div
      id="capture"
      className={`${frame} flex items-center justify-center p-7`}
      style={{
        background:
          "radial-gradient(70% 55% at 20% 0%, #56bbf7 0%, transparent 65%), radial-gradient(80% 60% at 100% 100%, #0a1eb0 0%, transparent 70%), linear-gradient(160deg, #3171f3, #1f5ce0)",
      }}
    >
      {children}
    </div>
  );
}

const panel = "w-full rounded-2xl bg-white p-4 text-left text-[#0d1328] shadow-2xl shadow-[#0a1eb0]/40";

function KnowledgeScene() {
  const files = [
    { icon: FileText, name: "Product catalog.pdf", meta: "214 chunks" },
    { icon: Globe, name: "yourstore.com", meta: "1,280 chunks" },
    { icon: FileText, name: "Returns policy.docx", meta: "36 chunks" },
    { icon: Link2, name: "help.yourstore.com", meta: "Syncing…", syncing: true },
  ];
  return (
    <Stage>
      <div className={panel}>
        <p className="text-sm font-semibold">Knowledge base</p>
        <p className="text-[11px] text-[#5a6175]">4 sources · 1,622 chunks indexed</p>
        <ul className="mt-3 space-y-2">
          {files.map((f) => (
            <li key={f.name} className="flex items-center gap-2.5 rounded-xl bg-[#f6f7fa] px-3 py-2.5">
              <f.icon className="size-4 text-[#1f5ce0]" />
              <span className="flex-1 truncate text-xs font-medium">{f.name}</span>
              {f.syncing ? (
                <RefreshCw className="size-3.5 text-amber-600" />
              ) : (
                <span className="flex size-4 items-center justify-center rounded-full bg-emerald-500 text-white">
                  <Check className="size-2.5" strokeWidth={3} />
                </span>
              )}
            </li>
          ))}
        </ul>
        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[#e1e4ec]">
          <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-[#3171f3] to-[#56bbf7]" />
        </div>
      </div>
    </Stage>
  );
}

function BuilderScene() {
  return (
    <Stage>
      <div className={panel}>
        <div className="flex items-center gap-3">
          <div className="size-16 shrink-0 rounded-2xl bg-[#eef4fe] p-1">
            <RobotAvatar idPrefix="scene-robot" />
          </div>
          <div>
            <p className="text-base font-semibold">Ava</p>
            <p className="text-xs text-[#5a6175]">Support agent · YourStore</p>
          </div>
        </div>
        <p className="mt-4 text-[11px] font-medium text-[#5a6175]">Tone</p>
        <div className="mt-1.5 flex flex-wrap gap-1.5">
          {["Friendly", "Concise", "Uses emoji"].map((t, i) => (
            <span
              key={t}
              className={`rounded-full px-2.5 py-1 text-[11px] font-medium ${i === 0 ? "bg-[#1f5ce0] text-white" : "bg-[#eef0f5] text-[#30364a]"}`}
            >
              {t}
            </span>
          ))}
        </div>
        {[
          ["Answer only from my docs", true],
          ["Hand off refunds to a human", true],
        ].map(([label, on]) => (
          <div key={String(label)} className="mt-3 flex items-center justify-between rounded-xl bg-[#f6f7fa] px-3 py-2.5 text-xs font-medium">
            {label}
            <span className={`flex h-5 w-9 items-center rounded-full p-0.5 ${on ? "bg-[#1f5ce0]" : "bg-[#c6cbd8]"}`}>
              <span className="ml-auto size-4 rounded-full bg-white" />
            </span>
          </div>
        ))}
      </div>
    </Stage>
  );
}

function WidgetScene() {
  return (
    <Stage>
      <div className="relative w-full pr-6 pb-8">
        <div className="rounded-2xl bg-white p-3 shadow-2xl shadow-[#0a1eb0]/40">
          <div className="flex gap-1.5 pb-2">
            <span className="size-2 rounded-full bg-[#ff5f57]" />
            <span className="size-2 rounded-full bg-[#febc2e]" />
            <span className="size-2 rounded-full bg-[#28c840]" />
          </div>
          <p className="text-xs font-semibold text-[#0d1328]">YourStore</p>
          <div className="mt-3 space-y-2">
            <div className="h-3 w-3/4 rounded bg-[#e1e4ec]" />
            <div className="h-3 w-1/2 rounded bg-[#e1e4ec]" />
            <div className="h-20 rounded-lg bg-[#eef0f5]" />
            <div className="h-20 rounded-lg bg-[#eef0f5]" />
          </div>
        </div>
        <div className="absolute right-0 bottom-0 w-52 overflow-hidden rounded-2xl bg-white shadow-2xl shadow-[#0a1eb0]/50 ring-1 ring-black/5">
          <div className="flex items-center gap-2 bg-[#1f5ce0] px-3 py-2 text-white">
            <span className="size-5 rounded-full bg-white/25" />
            <p className="text-xs font-semibold">Ava · YourStore</p>
          </div>
          <div className="space-y-1.5 p-2.5">
            <ChatBubble message={{ from: "agent", text: "Hi! How can I help? 👋" }} className="text-[11px]" />
            <ChatBubble message={{ from: "user", text: "Do you have size 38?" }} className="text-[11px]" />
            <ChatBubble message={{ from: "agent", text: "Yes, 4 pairs left in size 38." }} className="text-[11px]" />
          </div>
        </div>
      </div>
    </Stage>
  );
}

function ChannelsScene() {
  const others = [
    { icon: Globe, cls: "bg-white text-[#1f5ce0]", pos: "top-8 left-5" },
    { icon: TelegramIcon, cls: "bg-white text-sky-600", pos: "top-24 right-4" },
    { icon: DiscordIcon, cls: "bg-white text-indigo-600", pos: "bottom-10 left-6" },
  ];
  return (
    <Stage>
      {others.map(({ icon: Icon, cls, pos }) => (
        <span key={pos} className={`absolute ${pos} flex size-11 items-center justify-center rounded-2xl shadow-xl ${cls}`}>
          <Icon className="size-5" />
        </span>
      ))}
      <div className="w-48 overflow-hidden rounded-[1.6rem] border-[5px] border-[#0d1328] bg-[#efeae2] shadow-2xl shadow-[#0a1eb0]/50">
        <div className="flex items-center gap-2 bg-[#008069] px-3 pt-4 pb-2 text-white">
          <WhatsAppIcon className="size-4" />
          <p className="text-[11px] font-semibold">Dagsis Assistant</p>
        </div>
        <div className="space-y-1.5 p-2">
          <ChatBubble theme="whatsapp" message={{ from: "user", text: "Are you open Sunday?" }} className="text-[11px]" />
          <ChatBubble theme="whatsapp" message={{ from: "agent", text: "Yes, 10:00–16:00 ☀️" }} className="text-[11px]" />
          <ChatBubble theme="whatsapp" message={{ from: "user", text: "Perfect, thanks!" }} className="text-[11px]" />
        </div>
      </div>
    </Stage>
  );
}

function ConversationsScene() {
  const rows = [
    { n: "Priya S.", m: "Can I change my address?", icon: WhatsAppIcon, c: "text-emerald-600", active: true },
    { n: "Tom K.", m: "Which plan has analytics?", icon: Globe, c: "text-[#1f5ce0]" },
    { n: "Lina M.", m: "Store hours on Sunday?", icon: TelegramIcon, c: "text-sky-600" },
    { n: "Omar R.", m: "Thanks, that worked!", icon: DiscordIcon, c: "text-indigo-600" },
  ];
  return (
    <Stage>
      <div className={panel}>
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold">Inbox</p>
          <span className="rounded-full bg-[#eef4fe] px-2 py-0.5 text-[11px] font-medium text-[#1a4bbb]">4 open</span>
        </div>
        <ul className="mt-3 space-y-1.5">
          {rows.map((r) => (
            <li key={r.n} className={`flex items-center gap-2.5 rounded-xl px-2.5 py-2 ${r.active ? "bg-[#eef4fe]" : ""}`}>
              <span className="flex size-7 items-center justify-center rounded-full bg-[#eef0f5] text-[10px] font-semibold">
                {r.n.split(" ").map((p) => p[0]).join("")}
              </span>
              <div className="min-w-0 flex-1">
                <p className="flex items-center gap-1 text-[11px] font-semibold">
                  {r.n} <r.icon className={`size-3 ${r.c}`} />
                </p>
                <p className="truncate text-[11px] text-[#5a6175]">{r.m}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-3 flex items-center gap-2">
          <span className="flex-1 rounded-full bg-[#f6f7fa] px-3 py-2 text-[11px] text-[#6b7285]">Reply as Priya’s agent…</span>
          <span className="rounded-full bg-[#1f5ce0] px-3 py-2 text-[11px] font-semibold text-white">Take over</span>
          <Send className="size-4 text-[#1f5ce0]" />
        </div>
      </div>
    </Stage>
  );
}

function AnalyticsScene() {
  const bars = [40, 55, 48, 66, 60, 74, 70, 86];
  const top = [
    { q: "Where is my order?", n: 842 },
    { q: "Return policy", n: 611 },
    { q: "Shipping to Canada", n: 390 },
  ];
  return (
    <Stage>
      <div className={panel}>
        <div className="flex items-end justify-between">
          <div>
            <p className="text-[11px] font-medium text-[#5a6175]">Resolved by AI</p>
            <p className="text-3xl font-semibold tracking-tight">86%</p>
          </div>
          <BarChart3 className="size-5 text-[#1f5ce0]" />
        </div>
        <div className="mt-3 flex h-20 items-end gap-1.5">
          {bars.map((h, i) => (
            <div key={i} className="flex-1 rounded-t-[3px] bg-gradient-to-t from-[#1f5ce0] to-[#56bbf7]" style={{ height: `${h}%` }} />
          ))}
        </div>
        <p className="mt-4 flex items-center gap-1.5 text-[11px] font-medium text-[#5a6175]">
          <UsersRound className="size-3" /> Top questions this week
        </p>
        <ul className="mt-2 space-y-2">
          {top.map((t) => (
            <li key={t.q} className="text-[11px]">
              <div className="flex justify-between font-medium">
                <span>{t.q}</span>
                <span className="text-[#5a6175]">{t.n}</span>
              </div>
              <div className="mt-1 h-1.5 rounded-full bg-[#eef0f5]">
                <div className="h-full rounded-full bg-[#3171f3]" style={{ width: `${(t.n / top[0].n) * 100}%` }} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Stage>
  );
}

const scenes: Record<FeatureSceneId, () => ReactNode> = {
  knowledge: KnowledgeScene,
  builder: BuilderScene,
  widget: WidgetScene,
  channels: ChannelsScene,
  conversations: ConversationsScene,
  analytics: AnalyticsScene,
};

export function FeatureScene({ id }: { id: FeatureSceneId }) {
  const Scene = scenes[id];
  return <Scene />;
}
