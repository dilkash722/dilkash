"use client";

import { motion } from "framer-motion";
import { Code2, BarChart3, ShieldCheck, ArrowUpRight } from "lucide-react";

export default function About() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  };

  return (
    <section
      id="about"
      className="relative min-h-screen bg-[#050505] text-[#fafafa] overflow-hidden flex flex-col justify-center py-24 md:py-40"
    >
      {/* HERO-SYNCED BACKGROUND ELEMENTS */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute top-1/2 left-[-10%] w-[500px] h-[500px] bg-indigo-600/10 blur-[120px] rounded-full" />
        <div className="absolute top-[20%] right-[-5%] w-[400px] h-[400px] bg-zinc-800/20 blur-[100px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        {/* TOP LABEL - SYNC WITH HERO */}
        <motion.div {...fadeInUp} className="flex items-center gap-4 mb-12">
          <span className="h-[1px] w-12 bg-indigo-500" />
          <span className="text-[10px] md:text-xs uppercase tracking-[0.6em] font-black text-zinc-500">
            About the Founder
          </span>
        </motion.div>

        {/* MAIN HEADING - ULTRA BOLD HERO STYLE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-24">
          <motion.div {...fadeInUp} className="lg:col-span-8">
            <h2 className="text-[12vw] md:text-[8vw] font-black leading-[0.8] tracking-tighter uppercase">
              FOUNDER <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/20">
                NADILIX
              </span>
            </h2>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="lg:col-span-4 lg:pb-4"
          >
            <p className="text-zinc-500 text-sm md:text-base font-light uppercase tracking-widest leading-relaxed  border-l-2 border-indigo-500 pl-6">
              "Training is not about information. It's about transformation."
            </p>
          </motion.div>
        </div>

        {/* CORE DETAILS - BENTO GRID STYLE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-20">
          {/* Main Story Card */}
          <motion.div
            {...fadeInUp}
            className="lg:col-span-7 p-10 md:p-14 bg-zinc-900/10 border border-zinc-800/50 rounded-[3rem] backdrop-blur-3xl"
          >
            <p className="text-2xl md:text-4xl font-light leading-tight text-zinc-300">
              Main hoon{" "}
              <span className="text-white font-bold  underline decoration-indigo-500/50 underline-offset-8 transition-all hover:decoration-indigo-500">
                Md Dilkash
              </span>
              . Nadilix mein mera mission structured learning systems build
              karna hai, jo developers ko practical aur project-based training
              ke zariye industry-ready banaye.
            </p>
          </motion.div>

          {/* Academic & Exp Card */}
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.1 }}
            className="lg:col-span-5 p-10 bg-indigo-600 rounded-[3rem] flex flex-col justify-between group cursor-pointer overflow-hidden relative"
          >
            <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:scale-125 transition-transform duration-700">
              <ArrowUpRight size={120} strokeWidth={1} />
            </div>
            <p className="text-[10px] uppercase tracking-[0.4em] font-black text-white/70">
              Academic Foundation
            </p>
            <div className="relative z-10">
              <h4 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none ">
                BCA + MCA <br /> GRADUATE
              </h4>
              <p className="mt-4 text-white/80 font-bold uppercase tracking-widest text-[10px]">
                Technical Depth & Mentorship
              </p>
            </div>
          </motion.div>
        </div>

        {/* EXPERTISE CARDS - SYNCED WITH ORIGINAL DETAILS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Technical Leadership",
              sub: "Guided execution through real workflows.",
              icon: Code2,
            },
            {
              title: "Structured Learning",
              sub: "Practical systems focused on modern practices.",
              icon: BarChart3,
            },
            {
              title: "Product Thinking",
              sub: "Building scalable and production-ready solutions.",
              icon: ShieldCheck,
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-8 border border-zinc-800 bg-white/[0.02] rounded-[2.5rem] group hover:border-indigo-500/50 transition-all duration-500"
            >
              <item.icon className="w-8 h-8 text-indigo-500 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg sm:text-xl font-bold uppercase tracking-wide text-white mb-3">
                {item.title}
              </h3>

              <p className="text-zinc-500 text-sm font-medium leading-relaxed uppercase tracking-wider">
                {item.sub}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
