"use client";

import { motion } from "framer-motion";
import {
  Presentation,
  Code2,
  ClipboardCheck,
  Rocket,
  SearchCheck,
  CloudUpload,
} from "lucide-react";

const trainingSteps = [
  {
    step: "01",
    title: "Whiteboard Explanation",
    desc: "Concept clarity through structured whiteboard sessions before implementation.",
    icon: Presentation,
  },
  {
    step: "02",
    title: "Live Coding Sessions",
    desc: "Real-time coding demonstrations with step-by-step practical execution.",
    icon: Code2,
  },
  {
    step: "03",
    title: "Hands-On Practice",
    desc: "Students implement tasks independently to strengthen understanding.",
    icon: ClipboardCheck,
  },
  {
    step: "04",
    title: "Project Development",
    desc: "Mini and major projects aligned with real-world industry workflow.",
    icon: Rocket,
  },
  {
    step: "05",
    title: "Code Review & Guidance",
    desc: "Structured feedback focusing on clean architecture and scalability.",
    icon: SearchCheck,
  },
  {
    step: "06",
    title: "Deployment Training",
    desc: "Learning how to deploy and manage applications in production environments.",
    icon: CloudUpload,
  },
];

export default function Methodology() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  };

  return (
    <section
      id="how-i-work"
      className="relative min-h-screen bg-[#050505] text-[#fafafa] overflow-hidden py-24 md:py-40"
    >
      {/* HERO-SYNCED BACKGROUND ELEMENTS */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-30">
        <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] bg-indigo-900/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-5%] left-[-5%] w-[400px] h-[400px] bg-zinc-800/20 blur-[100px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        {/* TOP LABEL */}
        <motion.div {...fadeInUp} className="flex items-center gap-4 mb-12">
          <span className="h-[1px] w-12 bg-indigo-500" />
          <span className="text-[10px] md:text-xs uppercase tracking-[0.6em] font-black text-zinc-500">
            Training Methodology
          </span>
        </motion.div>

        {/* MAIN HEADING - SYNCED TYPOGRAPHY */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-24">
          <motion.div {...fadeInUp} className="lg:col-span-8">
            <h2 className="text-[12vw] md:text-[8vw] font-black leading-[0.8] tracking-tighter uppercase">
              OUR <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/20">
                APPROACH.
              </span>
            </h2>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="lg:col-span-4 lg:pb-4"
          >
            <p className="text-zinc-500 text-sm md:text-base font-light uppercase tracking-widest leading-relaxed border-l-2 border-indigo-500 pl-6">
              Concept clarity, live coding, and real-world execution.
            </p>
          </motion.div>
        </div>

        {/* METHODOLOGY GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trainingSteps.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group p-10 bg-zinc-900/10 border border-zinc-800/50 rounded-[3rem] backdrop-blur-3xl transition-all duration-500 hover:border-indigo-500/50 hover:bg-zinc-900/20"
            >
              <div className="flex justify-between items-start mb-10">
                <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-indigo-500 transition-all duration-500">
                  <item.icon
                    size={24}
                    className="text-indigo-500 group-hover:text-white transition-colors"
                  />
                </div>
                <span className="text-4xl font-black text-white/5 group-hover:text-indigo-500/20 transition-colors duration-500">
                  {item.step}
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold uppercase tracking-wide text-white mb-4 transition-colors duration-300 group-hover:text-indigo-400">
                {item.title}
              </h3>

              <p className="text-zinc-500 text-sm font-medium leading-relaxed uppercase tracking-wider">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM CALLOUT */}
        <motion.div
          {...fadeInUp}
          className="mt-24 p-10 md:p-16 border border-zinc-800 bg-white/[0.01] rounded-[4rem] text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-indigo-500/5 blur-[100px] -z-10" />
          <h4 className="text-2xl md:text-5xl font-light tracking-tight text-zinc-300 max-w-4xl mx-auto leading-tight">
            Hum sirf code nahi sikhate, hum{" "}
            <span className="text-white font-bold decoration-indigo-500 decoration-4 underline-offset-8">
              Production-Ready mindset
            </span>{" "}
            build karte hain.
          </h4>
        </motion.div>
      </div>
    </section>
  );
}
