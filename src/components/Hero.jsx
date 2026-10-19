import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, ShieldCheck, Users, Rocket, Trophy } from "lucide-react";
import Logo from "../assets/tdao.jpg";

export default function Hero() {
  const [comingSoon, setComingSoon] = useState(false);

  const highlights = [
    { icon: ShieldCheck, label: "Trusted governance" },
    { icon: Users, label: "Member-first network" },
    { icon: Rocket, label: "Launch-ready tools" },
  ];

  const stats = [
    { value: "1K+", label: "Builders" },
    { value: "200+", label: "Projects" },
    { value: "24/7", label: "Community" },
  ];

  return (
    <div className="relative -mt-20 flex min-h-[calc(100vh-2rem)] items-center justify-center overflow-hidden pb-12 pt-24 sm:pt-28">
      <div className="absolute inset-0 -z-10 overflow-hidden bg-[#04130f]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(52,211,153,0.24),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(132,204,22,0.18),_transparent_25%)]" />
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
        <div className="absolute inset-0 flex items-center justify-center opacity-15">
          <img src={Logo} alt="TIES DAO Logo" className="max-w-[640px] object-contain select-none" />
        </div>
        <div className="absolute left-1/2 top-20 h-[440px] w-[440px] -translate-x-1/2 rounded-full bg-emerald-500/20 blur-[160px]" />
        <div className="absolute bottom-10 right-10 h-[260px] w-[260px] rounded-full bg-lime-400/15 blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8"
      >
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15 }}
              className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-100"
            >
              <Sparkles size={14} className="text-emerald-300" />
              Human-first Web3 collaboration
            </motion.div>

            <h1 className="mt-7 text-4xl font-black leading-[0.95] tracking-[-0.05em] text-white sm:text-5xl lg:text-[5rem]">
              Where Web3
              <span className="mt-2 block bg-gradient-to-r from-emerald-300 via-green-300 to-lime-300 bg-clip-text text-transparent">
                collaboration becomes
              </span>
              <span className="mt-2 block text-white">human momentum.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg lg:mx-0">
              TIES DAO connects builders, founders, and contributors through trust, reputation, and meaningful collaboration — built to move ideas from concept to real-world impact.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:items-start"
            >
              <motion.a
                href="https://x.com/ties_dao"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, boxShadow: "0px 0px 50px rgba(52,211,153,0.35)" }}
                whileTap={{ scale: 0.98 }}
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-emerald-400 via-green-400 to-lime-400 px-7 py-3.5 text-sm font-bold text-slate-950 shadow-[0_18px_40px_rgba(74,222,128,0.32)]"
              >
                <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-700 group-hover:translate-x-full" />
                <span className="relative flex items-center gap-2">
                  Join TIES DAO
                  <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </motion.a>

              <button
                onClick={() => setComingSoon(true)}
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-7 py-3.5 text-sm font-semibold text-slate-200 backdrop-blur-xl transition hover:bg-white/10"
              >
                Explore the app
              </button>
            </motion.div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              {highlights.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200 backdrop-blur-sm">
                  <Icon size={15} className="text-emerald-300" />
                  {label}
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="rounded-[28px] border border-emerald-400/20 bg-slate-950/70 p-4 shadow-[0_30px_80px_rgba(16,185,129,0.18)] backdrop-blur-xl sm:p-5">
              <div className="rounded-[24px] border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-emerald-950/70 p-5">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-400/30">
                      <Trophy size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-emerald-200/80">Network status</p>
                      <p className="text-lg font-bold text-white">TIES DAO</p>
                    </div>
                  </div>
                  <div className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-200">
                    live
                  </div>
                </div>

                <div className="mt-5 space-y-4">
                  {stats.map((stat, index) => (
                    <div key={stat.label} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                      <div>
                        <p className="text-2xl font-black text-white">{stat.value}</p>
                        <p className="text-sm text-slate-300">{stat.label}</p>
                      </div>
                      <div className="h-10 w-10 rounded-full bg-gradient-to-br from-emerald-400/20 to-lime-400/20 ring-1 ring-emerald-400/30" />
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-2xl border border-emerald-400/20 bg-emerald-500/10 p-4 text-sm text-emerald-50">
                  <p className="font-semibold">Momentum is building.</p>
                  <p className="mt-1 text-emerald-100/80">Builders, founders, and contributors are creating meaningful opportunities together.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <AnimatePresence>
        {comingSoon && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-xl"
            onClick={() => setComingSoon(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md rounded-[28px] border border-white/10 bg-slate-900/90 p-8 text-center shadow-2xl"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/15 ring-1 ring-emerald-400/30">
                <div className="h-6 w-6 rounded-full bg-emerald-400 animate-pulse" />
              </div>

              <h3 className="mt-6 text-3xl font-bold text-white">Coming soon</h3>

              <p className="mt-4 text-base leading-relaxed text-slate-300">
                The TIES DAO app experience is still in active development. We’ll open it up when it’s ready for the community.
              </p>

              <button
                onClick={() => setComingSoon(false)}
                className="mt-8 rounded-full bg-gradient-to-r from-emerald-400 to-lime-400 px-8 py-3 text-sm font-bold text-slate-950 transition hover:brightness-110"
              >
                Got it
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
