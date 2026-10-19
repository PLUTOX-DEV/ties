import { motion } from "framer-motion";
import { FaXTwitter } from "react-icons/fa6";

import FounderImg from "../assets/wensy.jpg";
import CoFounderImg from "../assets/tonia.jpg";

export default function Team() {
  const team = [
    {
      role: "Founder",
      name: "Wensy",
      handle: "@Wensywhinny",
      link: "https://x.com/wensywhinny",
      image: FounderImg,
      gradient: "from-emerald-400 via-green-400 to-lime-300",
    },
    {
      role: "Co-Founder",
      name: "TONIA",
      handle: "@Toniaofweb3",
      link: "https://x.com/toniaofweb3?s=21",
      image: CoFounderImg,
      gradient: "from-cyan-400 via-teal-400 to-emerald-400",
    },
  ];

  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.14),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(163,230,53,0.12),_transparent_25%)]" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.28em] text-emerald-200">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Team
          </div>

          <h2 className="mt-7 text-4xl font-black tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
            Meet the
            <span className="mt-2 block bg-gradient-to-r from-emerald-300 via-green-300 to-lime-300 bg-clip-text text-transparent">
              minds behind TIES DAO
            </span>
          </h2>

          <p className="mt-5 text-base text-slate-300 sm:text-lg">
            Builders focused on trust, reputation, and real collaboration.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.55 }}
              whileHover={{ y: -8, scale: 1.01 }}
              className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-slate-950/60 p-6 shadow-[0_28px_80px_rgba(10,20,15,0.35)] backdrop-blur-xl sm:p-8"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/8 via-transparent to-lime-500/8 opacity-80" />

              <div className="relative z-10">
                <div className="mx-auto mb-7 w-32 h-32 sm:w-36 sm:h-36">
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${member.gradient} blur-xl opacity-80`} />
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                    className="relative h-full w-full rounded-full border border-white/20 bg-slate-900 p-1.5"
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-full w-full rounded-full object-cover"
                    />
                  </motion.div>
                </div>

                <p className="text-center text-[10px] font-bold uppercase tracking-[0.28em] text-emerald-200/80">
                  {member.role}
                </p>

                <h3 className="mt-3 text-center text-3xl font-black text-white sm:text-4xl">
                  {member.name}
                </h3>

                <div className="mt-6 flex justify-center">
                  <motion.a
                    href={member.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.04, x: 2 }}
                    whileTap={{ scale: 0.96 }}
                    className="inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-500/10 px-4 py-2.5 text-sm font-semibold text-emerald-200 transition hover:border-emerald-300/50 hover:bg-emerald-500/15"
                  >
                    <FaXTwitter className="text-lg" />
                    {member.handle}
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
