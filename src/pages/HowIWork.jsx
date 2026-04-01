"use client";

import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

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
      {/* Background */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-30">
        <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] bg-indigo-900/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-5%] left-[-5%] w-[400px] h-[400px] bg-zinc-800/20 blur-[100px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        {/* Label */}
        <motion.div {...fadeInUp} className="flex items-center gap-4 mb-12">
          <span className="h-[1px] w-12 bg-indigo-500" />
          <span className="text-[10px] md:text-xs uppercase tracking-[0.6em] font-black text-zinc-500">
            Training Methodology
          </span>
        </motion.div>

        {/* Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-16">
          <motion.div {...fadeInUp} className="lg:col-span-8">
            <h2 className="text-[12vw] md:text-[8vw] font-black leading-[0.8] tracking-tighter uppercase">
              OUR <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/20">
                APPROACH
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

        {/* Content */}
        <motion.div {...fadeInUp} className="max-w-3xl">
          <p className="text-lg sm:text-xl md:text-2xl font-light leading-[1.7] text-zinc-300">
            We focus on clear concepts, real-time coding, and practical
            implementation. Every step is designed to help students build real
            projects and gain confidence in real-world development.
          </p>

          <p className="mt-4 text-sm sm:text-base md:text-lg text-zinc-400 leading-[1.7] max-w-2xl font-light">
            Our approach is simple. Learn by building, understand by doing, and
            improve through consistent feedback. This ensures students not only
            learn but also become truly industry-ready.
          </p>

          {/* CTA */}
          <div className="mt-8">
            <button className="group flex items-center gap-2 px-6 py-3 bg-white text-black text-sm font-semibold uppercase tracking-[0.15em] rounded-full transition-all duration-300 hover:bg-indigo-600 hover:text-white active:scale-95">
              Start Learning
              <BookOpen
                size={16}
                className="transition-transform group-hover:rotate-45"
              />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
