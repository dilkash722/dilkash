"use client";

import { motion } from "framer-motion";
import {
  School,
  Home,
  Activity,
  Utensils,
  Scale,
  Boxes,
  Code2,
  Server,
  Database,
  Layout,
} from "lucide-react";

const projects = [
  {
    title: "School Website",
    desc: "A modern and responsive school website built to improve communication, accessibility, and institutional presence.",
    icon: School,
    tools: [
      { name: "React", icon: Code2 },
      { name: "Tailwind CSS", icon: Layout },
    ],
  },
  {
    title: "Guest House System",
    desc: "A structured booking and management system designed to streamline daily operations and reservations.",
    icon: Home,
    tools: [
      { name: "Next.js", icon: Server },
      { name: "Database", icon: Database },
    ],
  },
  {
    title: "Cricket Score App",
    desc: "A real-time scoring application for managing matches, teams, and live updates efficiently.",
    icon: Activity,
    tools: [
      { name: "React", icon: Code2 },
      { name: "UI Design", icon: Layout },
    ],
  },
  {
    title: "Food Delivery App",
    desc: "An end-to-end ordering and management system with admin workflows and order tracking features.",
    icon: Utensils,
    tools: [
      { name: "Next.js", icon: Server },
      { name: "Database", icon: Database },
    ],
  },
  {
    title: "Advocate Portfolio",
    desc: "A professional portfolio platform focused on clarity, credibility, and client trust.",
    icon: Scale,
    tools: [
      { name: "React", icon: Code2 },
      { name: "UI Design", icon: Layout },
    ],
  },
  {
    title: "Inventory System",
    desc: "A scalable inventory and stock management solution built for structured business operations.",
    icon: Boxes,
    tools: [
      { name: "Next.js", icon: Server },
      { name: "Database", icon: Database },
    ],
  },
];

export default function Projects() {
  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden flex items-center">
      {/* ORIGINAL BLACK BASE */}
      <div className="absolute inset-0 bg-black z-0" />

      {/* ORANGE GLOW BACKGROUND */}
      <motion.div
        className="absolute -bottom-48 left-1/4 w-[520px] h-[520px] rounded-full
        bg-gradient-to-tr from-orange-500/30 via-yellow-400/25 to-transparent
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

      {/* FADE + TEXTURE */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-transparent via-black/40 to-black z-[1]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.04)_1px,transparent_0)] bg-[size:24px_24px] opacity-[0.08]" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 md:pt-20 pb-20 md:pb-24">
        {/* LABEL */}
        <p className="text-[11px] uppercase tracking-[0.25em] text-orange-400 mb-4">
          Projects
        </p>

        {/* HEADING */}
        <h1
          className="
    text-3xl
    sm:text-4xl
    md:text-5xl
    lg:text-6xl
    font-bold
    tracking-tight
    leading-tight
    mb-6
  "
        >
          My <span className="text-orange-400">Projects</span>
        </h1>

        {/* DESCRIPTION */}
        <p className="max-w-3xl text-gray-300 text-base sm:text-lg leading-relaxed mb-14">
          Real-world projects developed with structured architecture, practical
          workflows, and production-focused engineering.
        </p>

        {/* PROJECT CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{
                  y: -8,
                  boxShadow: "0 0 40px rgba(255,140,0,0.15)",
                }}
                className="
                  p-7
                  rounded-2xl
                  border border-white/25
                  ring-1 ring-white/10
                  transition-all
                  hover:border-orange-400/60
                "
              >
                {/* ICON + TITLE */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-orange-500/10 border border-orange-500/20">
                    <Icon className="w-5 h-5 text-orange-400" />
                  </div>

                  <h3 className="text-lg md:text-xl font-semibold tracking-tight">
                    {project.title}
                  </h3>
                </div>

                {/* DESCRIPTION */}
                <p className="text-gray-300 text-base leading-relaxed mb-6">
                  {project.desc}
                </p>

                {/* TOOLS */}
                <div className="flex flex-wrap gap-3">
                  {project.tools.map((tool, i) => {
                    const ToolIcon = tool.icon;

                    return (
                      <div
                        key={i}
                        className="
                          flex items-center gap-2
                          px-3 py-1.5
                          rounded-md
                          border border-white/15
                          text-sm text-gray-300
                          bg-white/5
                        "
                      >
                        <ToolIcon className="w-4 h-4 text-orange-400" />
                        {tool.name}
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
