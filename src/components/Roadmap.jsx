import { motion } from "framer-motion";
import { Rocket, TrendingUp, Cpu, Layers } from "lucide-react";

export default function Roadmap() {
  const roadmapSteps = [
    {
      title: "Foundation & Launch",
      icon: Rocket,
      accent: "from-emerald-500 to-green-500",
      items: [
        "Develop and launch TIES web app with core features (User Profile, Jobs, Project Dashboard)",
        "Establish social media presence and community channels",
        "Implement Escrow System and secure payment processing",
        "Launch TIES token and token economy",
      ],
    },
    {
      title: "Growth & Expansion",
      icon: TrendingUp,
      accent: "from-lime-500 to-emerald-500",
      items: [
        "Implement Gamification features (badges, levels, rewards)",
        "Launch Referral Program and incentivize referrals",
        "Establish partnerships with relevant businesses and organizations",
        "Develop and launch Content Marketing strategy",
      ],
    },
    {
      title: "Optimization & Scaling",
      icon: Cpu,
      accent: "from-teal-500 to-emerald-500",
      items: [
        "Optimize and refine TIES web app based on user feedback",
        "Implement analytics and tracking tools to monitor user behavior",
        "Scale infrastructure to support growing user base",
        "Launch mobile app for TIES web app",
      ],
    },
    {
      title: "Token Integration & Expansion",
      icon: Layers,
      accent: "from-green-500 to-lime-400",
      items: [
        "Integrate TIES token with other blockchain platforms and exchanges",
        "Expand TIES web app to include more features and services",
        "Host TIES DAO hackathon and innovation challenge",
        "Review and plan for future development and expansion",
      ],
    },
  ];

  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.12),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(132,204,22,0.1),_transparent_25%)]" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.28em] text-emerald-200">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Roadmap
          </div>

          <h2 className="mt-7 text-4xl font-black tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
            Our journey
            <span className="mt-2 block bg-gradient-to-r from-emerald-300 via-green-300 to-lime-300 bg-clip-text text-transparent">
              ahead
            </span>
          </h2>

          <p className="mt-5 text-base text-slate-300 sm:text-lg">
            Foundation → Growth → Optimization → Token Expansion
          </p>
        </motion.div>

        <div className="relative mt-14">
          <div className="absolute left-5 top-0 bottom-0 hidden w-px bg-gradient-to-b from-emerald-500/0 via-emerald-400/70 to-emerald-500/0 md:block" />

          <div className="space-y-7">
            {roadmapSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: -25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12, duration: 0.65 }}
                  className="relative md:pl-16"
                >
                  <div className="absolute left-1.5 top-8 hidden h-5 w-5 -translate-x-1/2 rounded-full border-4 border-slate-950 bg-gradient-to-r from-emerald-400 to-lime-400 md:block" />

                  <div className="rounded-[28px] border border-white/10 bg-slate-950/60 p-5 shadow-[0_24px_70px_rgba(10,20,15,0.35)] backdrop-blur-xl sm:p-7">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${step.accent} shadow-lg`}>
                          <Icon size={20} className="text-slate-950" />
                        </div>
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-emerald-200/80">
                            Phase {index + 1}
                          </p>
                          <h3 className="mt-1 text-2xl font-bold text-white">{step.title}</h3>
                        </div>
                      </div>
                    </div>

                    <ul className="mt-5 space-y-3">
                      {step.items.map((item, idx) => (
                        <li key={idx} className="flex gap-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                          <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-400" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
