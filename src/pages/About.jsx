"use client";

import { motion } from "framer-motion";
import { Code2, BarChart3, ShieldCheck } from "lucide-react";

export default function About() {
  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden flex items-center">
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
          About
        </p>

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
          Know More
          <br />
          <span className="block text-orange-400">About Me</span>
        </h1>

        <p className="max-w-3xl text-gray-400 text-sm sm:text-base leading-relaxed mb-12">
          I design and build{" "}
          <span className="text-white font-medium">
            end-to-end web & software systems
          </span>{" "}
          with a focus on clean architecture, practical workflows, and reliable,
          production-ready solutions that solve real business problems.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mb-12">
          {[
            {
              title: "System-First Development",
              sub1: "End-to-end ownership",
              sub2: "From planning to deployment",
              icon: Code2,
            },
            {
              title: "Business-Focused Solutions",
              sub1: "Practical workflows",
              sub2: "Built for daily operations",
              icon: BarChart3,
            },
            {
              title: "Clean & Reliable Delivery",
              sub1: "Stable architecture",
              sub2: "Production-ready systems",
              icon: ShieldCheck,
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{
                y: -8,
                boxShadow: "0 0 40px rgba(255,140,0,0.25)",
              }}
              className="
                w-full
                p-5 rounded-2xl
                bg-transparent
                border border-white/40
                ring-1 ring-white/10
                transition-all
                hover:border-orange-400/50
              "
            >
              <div className="flex items-center gap-2 mb-2">
                <item.icon className="w-4 h-4 text-orange-400" />
                <h3 className="text-base font-semibold tracking-tight">
                  {item.title}
                </h3>
              </div>

              <p className="text-sm text-gray-300">{item.sub1}</p>
              <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                {item.sub2}
              </p>
            </motion.div>
          ))}
        </div>

        <p className="max-w-3xl text-gray-400 text-sm sm:text-base leading-relaxed">
          I am currently pursuing{" "}
          <span className="text-white font-medium">
            Master of Computer Applications (MCA)
          </span>{" "}
          and have completed my{" "}
          <span className="text-white font-medium">
            Bachelor of Computer Applications (BCA)
          </span>{" "}
          along with{" "}
          <span className="text-white font-medium">
            Intermediate in Science (Mathematics)
          </span>
          . This academic foundation, combined with hands-on experience, enables
          me to deliver reliable and production-grade software solutions.
        </p>
      </div>
    </section>
  );
}
