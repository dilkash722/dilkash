"use client";

import { motion } from "framer-motion";
import { Code2, BarChart3, ShieldCheck } from "lucide-react";

export default function About() {
  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden flex items-center">
      {/* BACKGROUND GLOWS */}
      <motion.div
        className="absolute -top-48 left-1/4 w-[520px] h-[520px] rounded-full
        bg-gradient-to-br from-yellow-400/30 via-orange-500/25 to-transparent
        blur-[180px] z-0"
        animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute -top-64 right-1/4 w-[480px] h-[480px] rounded-full
        bg-gradient-to-bl from-orange-500/25 to-transparent
        blur-[160px] z-0"
        animate={{ x: [0, -80, 0], y: [0, 60, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black z-[1]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.04)_1px,transparent_0)] bg-[size:24px_24px] opacity-[0.08]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 md:pt-20 pb-20 md:pb-24">
        <p className="text-[11px] uppercase tracking-[0.25em] text-orange-400 mb-4 ml-[6px]">
          About Me
        </p>

        {/* SHORT HEADING */}
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
          Founder <span className="text-orange-400">Nadilix</span>
        </h1>

        {/* MAIN PARAGRAPH */}
        <p className="max-w-3xl text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed mb-12">
          I am Md Dilkash, founder and lead mentor at Nadilix. My focus is on
          building structured learning systems, guiding developers through
          practical project-based training, and delivering reliable digital
          solutions aligned with modern industry standards.
        </p>

        {/* CORE AREAS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mb-16">
          {[
            {
              title: "Technical Leadership",
              sub1: "Guided execution",
              sub2: "Leading structured projects and mentoring learners through real workflows.",
              icon: Code2,
            },
            {
              title: "Structured Learning",
              sub1: "Practical systems",
              sub2: "Designing hands-on training paths focused on modern development practices.",
              icon: BarChart3,
            },
            {
              title: "Product-Oriented Thinking",
              sub1: "Industry mindset",
              sub2: "Building scalable, maintainable, and production-ready digital solutions.",
              icon: ShieldCheck,
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{
                y: -10,
                boxShadow: "0 0 60px rgba(255,140,0,0.25)",
              }}
              className="
        w-full
        p-8
        rounded-2xl
        bg-transparent
        border border-white/30
        ring-1 ring-white/10
        transition-all
        hover:border-orange-400/60
      "
            >
              <div className="flex items-center gap-3 mb-4">
                <item.icon className="w-6 h-6 text-orange-400" />
                <h3 className="text-lg md:text-xl font-semibold tracking-tight">
                  {item.title}
                </h3>
              </div>

              <p className="text-base text-gray-300 font-medium">{item.sub1}</p>

              <p className="text-sm md:text-base text-gray-400 mt-3 leading-relaxed">
                {item.sub2}
              </p>
            </motion.div>
          ))}
        </div>

        {/* FINAL PARAGRAPH */}
        <p className="max-w-3xl text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed">
          With academic foundations in BCA and MCA and professional training in
          full stack and data technologies, I combine technical depth with
          mentorship. My goal is to build capable developers and create
          meaningful digital impact through structured systems.
        </p>
      </div>
    </section>
  );
}
