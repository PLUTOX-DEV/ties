import { useState, memo } from "react";
import { motion } from "framer-motion";
import {
  Globe,
  Send,
  DollarSign,
  Image,
  FileText,
  TrendingUp,
  Smartphone,
  Shield,
  Sparkles,
} from "lucide-react";
import { useAuth } from "../context/AuthContext";
import API_BASE from "../config/api";

const Web3Education = memo(function Web3Education() {
  const { user } = useAuth();
  const [email, setEmail] = useState(user?.email || "");
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!question.trim() || !email.trim()) return;

    try {
      setLoading(true);
      const res = await fetch(`${API_BASE}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          message: `Web3 Question: ${question}`,
        }),
      });
      const data = await res.json();
      setMessage(data.message);
      setQuestion("");
    } catch (err) {
      console.error("Question submit error:", err);
      setMessage("Failed to send question");
    } finally {
      setLoading(false);
    }
  };

  const conceptCards = [
    {
      title: "Cryptocurrencies",
      text: "Digital money that works like cash but online. No banks needed — it lets people send value directly across borders in seconds.",
      icon: DollarSign,
      color: "from-emerald-400/20 to-lime-300/10",
      border: "border-emerald-400/20",
      iconColor: "text-emerald-300",
    },
    {
      title: "NFTs",
      text: "Unique digital certificates of ownership for art, communities, memberships, and digital assets, with authenticity secured on-chain.",
      icon: Image,
      color: "from-green-400/20 to-emerald-500/10",
      border: "border-green-400/20",
      iconColor: "text-green-300",
    },
    {
      title: "Smart Contracts",
      text: "Programmed rules that execute automatically, enabling trustless workflows, payments, and digital agreements with no middleman.",
      icon: FileText,
      color: "from-lime-400/20 to-yellow-300/10",
      border: "border-lime-400/20",
      iconColor: "text-lime-300",
    },
    {
      title: "DeFi",
      text: "Banking without banks: lend, borrow, trade, and earn yield with open financial tools that operate globally and transparently.",
      icon: TrendingUp,
      color: "from-teal-400/20 to-cyan-300/10",
      border: "border-teal-400/20",
      iconColor: "text-teal-300",
    },
    {
      title: "dApps",
      text: "Decentralized apps that run on blockchain networks instead of centralized servers, giving users more control and ownership.",
      icon: Smartphone,
      color: "from-emerald-500/20 to-cyan-400/10",
      border: "border-cyan-400/20",
      iconColor: "text-cyan-300",
    },
  ];

  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.13),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(163,230,53,0.12),_transparent_25%)]" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.28em] text-emerald-200">
            <Sparkles size={14} className="text-emerald-300" />
            Web3 Education
          </div>

          <h2 className="mt-7 text-4xl font-black tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
            What is
            <span className="mt-2 block bg-gradient-to-r from-emerald-300 via-green-300 to-lime-300 bg-clip-text text-transparent">
              Web3?
            </span>
          </h2>

          <p className="mt-5 text-base text-slate-300 sm:text-lg">
            The future of the internet: decentralized, user-owned, and empowering.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div
            whileHover={{ y: -4 }}
            className="rounded-[32px] border border-white/10 bg-slate-950/60 p-5 shadow-[0_24px_80px_rgba(10,20,15,0.35)] backdrop-blur-xl sm:p-8"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-lime-400 text-slate-950 ring-1 ring-emerald-300/20">
              <Globe size={26} />
            </div>

            <div className="mt-6 space-y-5 text-sm leading-relaxed text-slate-300 sm:text-base">
              <p>
                <span className="font-semibold text-white">What is Web3 in simple terms?</span> Think of the internet as a big library. In the old days (Web1), you could only read books. Then came Web2, where you could write reviews and share with friends, but the library owns all the books and can take them away. Web3 is like having your own bookshelf — you own your books, you decide who can read them, and no one can revoke access.
              </p>

              <p>
                <span className="font-semibold text-white">Why should you care?</span> Right now, when you post photos or store files online, big companies control them. They can delete your account, change the rules, or sell your data. Web3 gives you back control using blockchain — a secure, shared ledger that everyone can verify but no one can easily manipulate.
              </p>

              <div className="flex items-start gap-3 rounded-2xl border border-emerald-400/20 bg-emerald-500/10 p-4">
                <Shield className="mt-1 h-5 w-5 shrink-0 text-emerald-300" />
                <div>
                  <p className="font-semibold text-emerald-100">Real-world analogy</p>
                  <p className="mt-1">
                    Traditional banking is like keeping your money in a bank safe. Web3 is more like having your own secure vault with a key only you control, while the system still keeps a transparent record of what happened.
                  </p>
                </div>
              </div>

              <div className="space-y-4 pt-2">
                <p className="font-semibold text-white">Key Web3 concepts explained:</p>
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {conceptCards.map(({ title, text, icon: Icon, color, border, iconColor }) => (
                    <div key={title} className={`rounded-2xl border bg-gradient-to-br ${color} ${border} p-4`}>
                      <div className="flex items-center gap-3">
                        <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950/50 ${iconColor}`}>
                          <Icon size={18} />
                        </div>
                        <p className="font-semibold text-white">{title}</p>
                      </div>
                      <p className="mt-3 text-sm text-slate-300">{text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <p>
                <span className="font-semibold text-white">Getting started:</span> Start small. Explore a wallet, understand a few basic concepts, and learn through hands-on experiments. Web3 is not about rushing — it is about learning how to build an internet that is more open and user-centered.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-[32px] border border-emerald-400/20 bg-slate-950/70 p-5 shadow-[0_28px_70px_rgba(16,185,129,0.12)] backdrop-blur-xl sm:p-7"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-400/30">
                <Send size={18} />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-emerald-200/80">Ask us</p>
                <h3 className="text-2xl font-bold text-white">Any Web3 question?</h3>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              {!user && (
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-200">Your email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full rounded-2xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-white placeholder:text-slate-400 focus:border-emerald-400 focus:outline-none focus:ring-4 focus:ring-emerald-500/20"
                    required
                  />
                </div>
              )}

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">Question</label>
                <textarea
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  placeholder="What’s confusing about Web3? Ask us anything!"
                  className="min-h-[120px] w-full resize-none rounded-2xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-white placeholder:text-slate-400 focus:border-emerald-400 focus:outline-none focus:ring-4 focus:ring-emerald-500/20"
                  rows={5}
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-400 via-green-400 to-lime-400 px-4 py-3 text-sm font-bold text-slate-950 shadow-[0_18px_40px_rgba(74,222,128,0.35)] transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <Send size={16} />
                {loading ? "Sending..." : "Send question"}
              </button>
            </form>

            {message && (
              <p className="mt-4 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-100">
                {message}
              </p>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
});

Web3Education.displayName = "Web3Education";

export default Web3Education;