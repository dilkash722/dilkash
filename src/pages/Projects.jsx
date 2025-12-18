"use client";

import { motion } from "framer-motion";
import { Code2, Server, Database, Layout, Globe } from "lucide-react";

const projects = [
  {
    title: "School Website",
    sub: "Amity Indian Public School",
    skills: [
      { name: "React", icon: Code2 },
      { name: "Tailwind", icon: Layout },
    ],
  },
  {
    title: "Guest House System",
    sub: "Booking & Operations",
    skills: [
      { name: "Web App", icon: Globe },
      { name: "Database", icon: Database },
    ],
  },
  {
    title: "Cricket Score App",
    sub: "Match & Scoreboard",
    skills: [
      { name: "React", icon: Code2 },
      { name: "Tailwind", icon: Layout },
    ],
  },
  {
    title: "Food Delivery App",
    sub: "Online Ordering",
    skills: [
      { name: "Next.js", icon: Server },
      { name: "Database", icon: Database },
    ],
  },
  {
    title: "Advocate Portfolio",
    sub: "Professional Website",
    skills: [
      { name: "React", icon: Code2 },
      { name: "UI Design", icon: Layout },
    ],
  },
  {
    title: "Inventory System",
    sub: "Stock Management",
    skills: [
      { name: "Next.js", icon: Server },
      { name: "Database", icon: Database },
    ],
  },
];

export default function Projects() {
  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden flex items-center">
      {/* BASE */}
      <div className="absolute inset-0 bg-black z-0" />

      {/* GLOW */}
      <motion.div
        className="absolute -bottom-48 left-1/4 w-[520px] h-[520px] rounded-full
        bg-gradient-to-tr from-yellow-400/30 via-orange-500/25 to-transparent
        blur-[180px] z-0"
        animate={{ x: [0, 80, 0], y: [0, -60, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute -bottom-64 right-1/4 w-[480px] h-[480px] rounded-full
        bg-gradient-to-tr from-orange-500/25 to-transparent
        blur-[160px] z-0"
        animate={{ x: [0, -100, 0], y: [0, -80, 0] }}
        transition={{ duration: 32, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* FADE + NOISE */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-transparent via-black/40 to-black z-[1]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.04)_1px,transparent_0)] bg-[size:24px_24px] opacity-[0.08]" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 md:pt-20 pb-20 md:pb-24">
        {/* LABEL */}
        <p className="text-[11px] uppercase tracking-[0.25em] text-orange-400 mb-4">
          Projects
        </p>

        {/* HEADING */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight leading-[1.15] mb-6">
          Selected <br />
          <span className="text-orange-400">Projects</span>
        </h1>

        {/* DESCRIPTION */}
        <p className="max-w-3xl text-gray-300 text-sm sm:text-base leading-relaxed mb-12">
          A collection of real-world projects focused on clean UI, scalable
          architecture and production-ready development.
        </p>

        {/* PROJECT CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              whileHover={{
                y: -8,
                boxShadow: "0 0 40px rgba(255,140,0,0.25)",
              }}
              className="
                p-6 rounded-2xl
               border border-white/40 ring-1 ring-white/10
                bg-transparent
                transition-all
              "
            >
              {/* TITLE */}
              <h3 className="text-base sm:text-lg font-semibold tracking-tight mb-1">
                {project.title}
              </h3>

              {/* SUB */}
              <p className="text-[11px] uppercase tracking-[0.2em] text-gray-500 mb-4">
                {project.sub}
              </p>

              {/* SKILLS */}
              <div className="flex flex-wrap gap-3">
                {project.skills.map((skill, i) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.08 }}
                      className="
                        flex items-center gap-2
                        rounded-full
                        border border-white/15
                        px-3 py-1
                        text-xs text-gray-300
                        hover:border-orange-400/50
                        transition
                      "
                    >
                      <Icon className="w-4 h-4 text-orange-400" />
                      {skill.name}
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
