"use client";

import { motion } from "framer-motion";
import {
  School,
  Home as HomeIcon,
  Activity,
  Utensils,
  Scale,
  Boxes,
  Code2,
  Server,
  Database,
  Layout,
  ArrowUpRight,
} from "lucide-react";

const projects = [
  {
    title: "School Website",
    desc: "A modern institutional platform built to improve digital presence and student-teacher accessibility.",
    icon: School,
    tools: [
      { name: "React", icon: Code2 },
      { name: "Tailwind", icon: Layout },
    ],
  },
  {
    title: "Guest House System",
    desc: "A structured booking engine designed to streamline daily operations and real-time reservations.",
    icon: HomeIcon,
    tools: [
      { name: "Next.js", icon: Server },
      { name: "PostgreSQL", icon: Database },
    ],
  },
  {
    title: "Cricket Score App",
    desc: "Real-time scoring engine for managing matches, team stats, and live dashboard updates.",
    icon: Activity,
    tools: [
      { name: "React", icon: Code2 },
      { name: "UI Design", icon: Layout },
    ],
  },
  {
    title: "Food Delivery App",
    desc: "End-to-end management system with dedicated admin workflows and live order tracking.",
    icon: Utensils,
    tools: [
      { name: "Next.js", icon: Server },
      { name: "MongoDB", icon: Database },
    ],
  },
  {
    title: "Advocate Portfolio",
    desc: "A professional legal platform focused on high-end credibility and client trust architecture.",
    icon: Scale,
    tools: [
      { name: "React", icon: Code2 },
      { name: "Framer", icon: Layout },
    ],
  },
  {
    title: "Inventory System",
    desc: "Scalable stock management solution built for complex and structured business operations.",
    icon: Boxes,
    tools: [
      { name: "Next.js", icon: Server },
      { name: "Prisma", icon: Database },
    ],
  },
];

export default function Projects() {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  };

  return (
    <section
      id="projects"
      className="relative min-h-screen bg-[#050505] text-[#fafafa] py-24 md:py-40 overflow-hidden"
    >
      {/* HERO-SYNCED BG GLOWS (Indigo + Zinc) */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-indigo-900/20 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-5%] right-[-5%] w-[500px] h-[500px] bg-zinc-800/20 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        {/* TOP LABEL - SYNC WITH HERO/ABOUT */}
        <motion.div {...fadeInUp} className="flex items-center gap-4 mb-12">
          <span className="h-[2px] w-12 bg-indigo-500" />
          <span className="text-[10px] md:text-xs uppercase tracking-[0.6em] font-black text-zinc-500">
            Selected Works
          </span>
        </motion.div>

        {/* MAIN HEADING - ULTRA BOLD HERO STYLE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-24">
          <motion.div {...fadeInUp} className="lg:col-span-8">
            <h2 className="text-[12vw] md:text-[8.5vw] font-black leading-[0.85] tracking-tighter uppercase">
              FEATURED <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-zinc-700">
                PROJECTS
              </span>
            </h2>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="lg:col-span-4 lg:pb-4 text-right"
          >
            <p className="text-zinc-500 text-sm md:text-base font-light uppercase tracking-widest leading-relaxed border-r-4 border-indigo-600 pr-6">
              Engineering digital excellence through structured systems.
            </p>
          </motion.div>
        </div>

        {/* PROJECTS GRID - SHARP BENTO STYLE */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group relative p-10 bg-[#0c0c0c]/50 border border-zinc-800/80 rounded-[2.5rem] backdrop-blur-3xl transition-all duration-500 hover:border-indigo-500 hover:bg-zinc-900/40 shadow-2xl"
              >
                {/* Floating Arrow Icon on Hover */}
                <div className="absolute top-10 right-10 opacity-20 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500 text-indigo-500">
                  <ArrowUpRight size={28} strokeWidth={1.5} />
                </div>

                {/* PROJECT ICON */}
                <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-2xl w-fit mb-10 group-hover:bg-indigo-600 transition-all duration-500">
                  <Icon
                    size={26}
                    className="text-indigo-500 group-hover:text-white transition-colors"
                  />
                </div>

                {/* PROJECT INFO - SHARP TEXT */}
                <h3 className="text-2xl font-black uppercase tracking-tighter text-white mb-4 group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-zinc-400 text-sm font-semibold leading-relaxed uppercase tracking-wider mb-10 h-16 overflow-hidden">
                  {project.desc}
                </p>

                {/* TECH STACK BADGES */}
                <div className="flex flex-wrap gap-2 pt-8 border-t border-zinc-800/50">
                  {project.tools.map((tool, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/5 text-[9px] font-black uppercase tracking-widest text-zinc-500 group-hover:text-zinc-300 transition-colors"
                    >
                      <tool.icon size={12} className="text-indigo-500" />
                      {tool.name}
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* BOTTOM ACTION BOX */}
        <motion.div
          {...fadeInUp}
          className="mt-24 p-10 md:p-16 border border-zinc-800 bg-white/[0.01] rounded-[4rem] text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-indigo-500/5 blur-[100px] -z-10" />

          <h4 className="text-2xl md:text-5xl font-light tracking-tight text-zinc-300 max-w-4xl mx-auto leading-tight">
            Ready to build your next venture with a
            <span className="text-white font-semibold">
              {" "}
              production-ready mindset
            </span>
            ?
          </h4>
        </motion.div>
      </div>
    </section>
  );
}
