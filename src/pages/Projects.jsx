"use client";

import { motion } from "framer-motion";
import {
  School,
  Home as HomeIcon,
  Activity,
  Utensils,
  Scale,
  Boxes,
} from "lucide-react";

const projects = [
  { title: "School Website", icon: School },
  { title: "Guest House System", icon: HomeIcon },
  { title: "Cricket Score App", icon: Activity },
  { title: "Food Delivery App", icon: Utensils },
  { title: "Advocate Portfolio", icon: Scale },
  { title: "Inventory System", icon: Boxes },
];

export default function Projects() {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  return (
    <section
      id="projects"
      className="relative min-h-screen bg-[#050505] text-[#fafafa] py-24 md:py-40 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-indigo-900/20 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-5%] right-[-5%] w-[500px] h-[500px] bg-zinc-800/20 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        {/* Label */}
        <motion.div {...fadeInUp} className="flex items-center gap-4 mb-12">
          <span className="h-[2px] w-12 bg-indigo-500" />
          <span className="text-[10px] md:text-xs uppercase tracking-[0.6em] font-black text-zinc-500">
            Selected Works
          </span>
        </motion.div>

        {/* Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-16">
          <motion.div {...fadeInUp} className="lg:col-span-8">
            <h2 className="text-[12vw] md:text-[8vw] font-black leading-[0.8] tracking-tighter uppercase">
              FEATURED <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/20">
                PROJECTS
              </span>
            </h2>
          </motion.div>

          <motion.div {...fadeInUp} className="lg:col-span-4">
            <p className="text-zinc-500 text-sm md:text-base font-light uppercase tracking-widest leading-relaxed border-l-2 border-indigo-500 pl-6">
              Clean and practical real-world builds.
            </p>
          </motion.div>
        </div>

        {/* Outline Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 p-4 md:p-5 border border-zinc-800 rounded-xl bg-transparent hover:border-indigo-500 transition"
              >
                <Icon size={18} className="text-indigo-500" />
                <span className="text-sm md:text-base text-zinc-300 font-medium">
                  {project.title}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
