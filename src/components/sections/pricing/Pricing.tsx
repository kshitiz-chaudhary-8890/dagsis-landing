"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { plans } from "@/utils/constants/billing.constants";

const planMeta: Record<string, { tagline: string; color: string }> = {
  Free: {
    tagline: "Get started at no cost",
    color: "text-slate-500 dark:text-slate-400",
  },
  Pro: {
    tagline: "For growing teams & businesses",
    color: "text-blue-600 dark:text-blue-400",
  },
  Business: {
    tagline: "Scale without limits",
    color: "text-violet-600 dark:text-violet-400",
  },
  Custom: {
    tagline: "Built around your needs",
    color: "text-slate-500 dark:text-slate-400",
  },
};

const POPULAR = "Pro";

export function Pricing() {
  const [cycle, setCycle] = useState<"monthly" | "annual">("monthly");
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const monthlyRef = useRef<HTMLButtonElement>(null);
  const annualRef = useRef<HTMLButtonElement>(null);

  // Keep the sliding pill aligned to whichever tab is active, and re-measure
  // on resize/font-load so it never drifts out of sync with the button it's under.
  const measureIndicator = useCallback(() => {
    const btn = cycle === "monthly" ? monthlyRef.current : annualRef.current;
    if (btn)
      setIndicatorStyle({ left: btn.offsetLeft, width: btn.offsetWidth });
  }, [cycle]);

  useEffect(() => {
    measureIndicator();
    window.addEventListener("resize", measureIndicator);
    return () => window.removeEventListener("resize", measureIndicator);
  }, [measureIndicator]);

  return (
    <section
      id="pricing"
      className="relative py-8 sm:py-10 overflow-hidden bg-white [font-family:var(--font-inter),ui-sans-serif,system-ui,sans-serif]"
    >
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Section header ── */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] items-end gap-x-14 gap-y-4">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.08 }}
            >
              <span className="inline-flex items-center gap-[14px] text-[13px] font-semibold uppercase tracking-[0.22em] text-[#16213a] [font-family:var(--font-dm-sans),Arial,sans-serif]">
                <span aria-hidden="true" className="inline-block h-[2px] w-[44px] rounded-full bg-[#1f5cf0]" />
                Pricing
              </span>
              <h2 className="section-title mt-[18px] text-[#16213a]">
                Simple, transparent pricing
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.14 }}
              className="section-description m-0 max-w-[400px] border-l-2 border-[#d9dcff] pl-8 md:justify-self-end"
            >
              Start free. Scale as you grow. No hidden fees, no surprises.
            </motion.p>
          </div>

          {/* ── Billing toggle ── */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="flex justify-center pt-12"
          >
            <div
              role="group"
              aria-label="Billing cycle"
              className="relative flex items-center gap-0 p-1 rounded-full bg-[#eef2f9] ring-1 ring-[#e2e8f4]"
            >
              {/* Sliding pill */}
              <span
                aria-hidden
                className="absolute top-1 bottom-1 rounded-full bg-white shadow-[0_2px_10px_rgba(16,42,113,0.14)] transition-all duration-250 ease-[cubic-bezier(0.4,0,0.2,1)]"
                style={{
                  left: indicatorStyle.left,
                  width: indicatorStyle.width,
                }}
              />
              <button
                ref={monthlyRef}
                type="button"
                onClick={() => setCycle("monthly")}
                aria-pressed={cycle === "monthly"}
                className={`relative z-10 px-6 py-2 text-sm font-semibold rounded-full transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 ${
                  cycle === "monthly"
                    ? "text-[#0a1240]"
                    : "text-[#5a6379] hover:text-[#0a1240]"
                }`}
              >
                Monthly
              </button>
              <button
                ref={annualRef}
                type="button"
                onClick={() => setCycle("annual")}
                aria-pressed={cycle === "annual"}
                className={`relative z-10 px-6 py-2 text-sm font-semibold rounded-full transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 ${
                  cycle === "annual"
                    ? "text-[#0a1240]"
                    : "text-[#5a6379] hover:text-[#0a1240]"
                }`}
              >
                Annual
              </button>
            </div>
          </motion.div>
        </div>

        {/* ── Pricing cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {plans.map((plan, index) => {
            const isPopular = plan.title === POPULAR;
            const meta = planMeta[plan.title] ?? planMeta.Free;
            const price = plan.price[cycle];
            const subtitle = plan.subtitle[cycle];

            return (
              <motion.div
                key={plan.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.48, delay: index * 0.07 }}
                className="relative group"
              >
                {/* Popular badge — floats above */}
                {isPopular && (
                  <div className="absolute -top-px inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
                )}

                {/* Card */}
                <div
                  className={`relative h-full flex flex-col rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-1
                    ${
                      isPopular
                        ? "bg-white border-blue-500/50 shadow-[0_18px_44px_-20px_rgba(31,92,240,0.4)]"
                        : "bg-white border-slate-200 shadow-[0_10px_30px_-18px_rgba(16,42,113,0.3)] hover:border-slate-300 hover:shadow-[0_16px_40px_-18px_rgba(16,42,113,0.38)]"
                    }`}
                >
                  {/* Popular label */}
                  {isPopular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 bg-blue-600 text-white text-[9px] font-extrabold px-3 py-1 rounded-full uppercase tracking-[0.1em] shadow">
                      <Sparkles className="w-2.5 h-2.5" /> Most Popular
                    </span>
                  )}

                  {/* Plan name + tagline */}
                  <div className="mb-6">
                    <p
                      className={`text-xs font-bold uppercase tracking-widest mb-1 [font-family:var(--font-jakarta),sans-serif] ${meta.color}`}
                    >
                      {plan.title}
                    </p>
                    <p className="text-[13px] text-slate-500 dark:text-slate-400 leading-snug">
                      {meta.tagline}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="mb-7 pb-7 border-b border-slate-100 dark:border-slate-800 min-h-[60px]">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={`${plan.title}-${cycle}`}
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.18 }}
                        className="flex items-baseline gap-1"
                      >
                        <span className="text-3xl font-black tracking-tight text-slate-900 dark:text-white [font-family:var(--font-jakarta),sans-serif]">
                          {price}
                        </span>
                        {subtitle && (
                          <span className="text-sm text-slate-400 dark:text-slate-500 font-medium">
                            {subtitle}
                          </span>
                        )}
                      </motion.div>
                    </AnimatePresence>
                    {cycle === "annual" && plan.price.monthly !== "$0" && price !== "Let's Talk" && (
                      <p className="text-[11px] text-slate-400 dark:text-slate-500 mt-1">
                        Billed annually
                      </p>
                    )}
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 flex-1 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={`${plan.title}-feature-${featureIndex}`}
                        className="flex items-start gap-2.5"
                      >
                        <span
                          className={`mt-0.5 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center
                            ${
                              isPopular
                                ? "bg-blue-500/10 dark:bg-blue-500/15"
                                : "bg-slate-100 dark:bg-slate-800"
                            }`}
                        >
                          <Check
                            className={`w-2.5 h-2.5 ${
                              isPopular
                                ? "text-blue-500"
                                : "text-slate-500 dark:text-slate-400"
                            }`}
                            strokeWidth={3}
                          />
                        </span>
                        <span className="text-[13px] text-slate-600 dark:text-slate-400 leading-snug">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  {plan.title === "Custom" ? (
                    <Link
                      href="/contact-sales"
                      className="mt-auto w-full inline-flex items-center justify-center gap-2 h-11 px-5 rounded-full bg-surface-raised text-ink-900 ring-1 ring-ink-200 hover:bg-ink-50 hover:ring-ink-300 text-sm font-semibold transition-all duration-200 group/cta focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
                    >
                      Contact Sales
                      <ArrowRight className="w-4 h-4 opacity-60 group-hover/cta:translate-x-0.5 transition-transform" />
                    </Link>
                  ) : (
                    <Link
                      href={`/signup?plan=${encodeURIComponent(plan.title.toLowerCase())}&cycle=${cycle}`}
                      className={`mt-auto w-full inline-flex items-center justify-center gap-2 h-11 px-5 rounded-full text-sm font-semibold transition-all duration-200 group/cta focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500
                        ${
                          isPopular
                            ? "bg-brand-600 hover:bg-brand-700 text-white shadow-[0_4px_14px_rgba(59,130,246,0.35)] hover:shadow-[0_4px_18px_rgba(59,130,246,0.5)]"
                            : "bg-surface-raised text-ink-900 ring-1 ring-ink-200 hover:bg-ink-50 hover:ring-ink-300"
                        }`}
                    >
                      {plan.title === "Free"
                        ? "Start for free"
                        : `Get ${plan.title}`}
                      <ArrowRight className="w-3.5 h-3.5 opacity-70 group-hover/cta:translate-x-0.5 transition-transform" />
                    </Link>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}