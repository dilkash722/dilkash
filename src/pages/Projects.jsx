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
    desc: "A modern and responsive school website built to improve online presence, communication, and accessibility.",
    icon: School,
    tools: [
      { name: "React", icon: Code2 },
      { name: "Tailwind CSS", icon: Layout },
    ],
  },
  {
    title: "Guest House System",
    desc: "A complete booking and operations management system designed to streamline daily guest house activities.",
    icon: Home,
    tools: [
      { name: "Next.js", icon: Server },
      { name: "Database", icon: Database },
    ],
  },
  {
    title: "Cricket Score App",
    desc: "A real-time cricket scoring application for managing matches, teams, and live score updates.",
    icon: Activity,
    tools: [
      { name: "React", icon: Code2 },
      { name: "UI Design", icon: Layout },
    ],
  },
  {
    title: "Food Delivery App",
    desc: "An end-to-end food ordering and management system with admin workflows and order tracking.",
    icon: Utensils,
    tools: [
      { name: "Next.js", icon: Server },
      { name: "Database", icon: Database },
    ],
  },
  {
    title: "Advocate Portfolio",
    desc: "A professional portfolio website focused on credibility, clarity, and client trust.",
    icon: Scale,
    tools: [
      { name: "React", icon: Code2 },
      { name: "UI Design", icon: Layout },
    ],
  },
  {
    title: "Inventory System",
    desc: "A structured inventory and stock management system built for accuracy and scalability.",
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

      {/* FADE + NOISE */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-transparent via-black/40 to-black z-[1]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.04)_1px,transparent_0)] bg-[size:24px_24px] opacity-[0.08]" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 md:pt-20 pb-20 md:pb-24">
        <div className="ml-auto max-w-6xl">
          {/* LABEL */}
          <p className="text-[11px] uppercase tracking-[0.25em] text-orange-400 mb-4 ml-[6px]">
            Projects
          </p>

          {/* HEADING */}
          <h1
            className="
           text-[2.1rem]
           sm:text-[2.6rem]
           md:text-[3.4rem]
           lg:text-[4.2rem]
           xl:text-[5.4rem]
           font-extrabold
           tracking-[-0.045em]
           leading-[1.1]
           md:leading-[1.02]
           mb-6
           "
          >
            Selected
            <br />
            <span className="block text-orange-400">Projects</span>
          </h1>

          {/* DESCRIPTION */}
          <p className="max-w-3xl text-gray-300 text-sm sm:text-base leading-relaxed mb-12">
            A selection of real-world projects developed with a focus on clean
            architecture, usability, and production-ready engineering.
          </p>

          {/* PROJECT CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                    boxShadow: "0 0 40px rgba(255,140,0,0.25)",
                  }}
                  className="
                  w-full
                  lg:max-w-[340px]
                  p-5 rounded-2xl
                  bg-transparent
                  border border-white/40
                  ring-1 ring-white/10
                  transition-all
                  hover:border-orange-400/50"
                >
                  {/* TITLE */}
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="w-4 h-4 text-orange-400" />
                    <h3 className="text-base font-semibold">{project.title}</h3>
                  </div>

                  {/* DESC */}
                  <p className="text-sm text-gray-300 mb-4">{project.desc}</p>

                  {/* TOOLS */}
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, i) => {
                      const ToolIcon = tool.icon;
                      return (
                        <div
                          key={i}
                          className="
                            flex items-center gap-2
                            rounded-full
                            border border-white/15
                            px-3 py-1
                            text-xs text-gray-300
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
      </div>
    </section>
  );
}
