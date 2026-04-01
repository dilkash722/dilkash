"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function About() {
  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  };

  return (
    <section
      id="about"
      className="relative min-h-screen bg-[#050505] text-[#fafafa] overflow-hidden flex flex-col justify-center py-20 md:py-28"
    >
      {/* Background */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute top-1/2 left-[-10%] w-[400px] h-[400px] bg-indigo-600/10 blur-[120px] rounded-full" />
        <div className="absolute top-[20%] right-[-5%] w-[300px] h-[300px] bg-zinc-800/20 blur-[100px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        {/* Label */}
        <motion.div {...fadeInUp} className="flex items-center gap-3 mb-8">
          <span className="h-[1px] w-10 bg-indigo-500" />
          <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-semibold text-zinc-500">
            About the Founder
          </span>
        </motion.div>

        {/* Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12 md:mb-16">
          <motion.div {...fadeInUp} className="lg:col-span-8">
            <h2 className="text-[12vw] md:text-[8vw] font-black leading-[0.9] md:leading-[0.95] tracking-tighter uppercase">
              FOUNDER <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/20">
                NADILIX
              </span>
            </h2>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="lg:col-span-4"
          >
            <p className="text-zinc-400 text-sm md:text-base font-light leading-relaxed border-l-2 border-indigo-500 pl-5">
              Training is not just about information. It is about real
              transformation.
            </p>
          </motion.div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Paragraph */}
          <motion.div {...fadeInUp} className="lg:col-span-7">
            <p className="text-zinc-300 text-base md:text-lg font-light leading-relaxed border-l-2 border-indigo-500 pl-6 max-w-xl">
              I am Md Dilkash. I build structured learning systems that help
              developers become industry-ready through practical, project-based
              training.
            </p>
          </motion.div>

          {/* Education */}
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.1 }}
            className="lg:col-span-5 p-6 sm:p-7 md:p-10 bg-indigo-600 rounded-2xl md:rounded-3xl flex flex-col gap-6 relative overflow-hidden"
          >
            {/* Icon */}
            <div className="absolute top-0 right-0 p-4 sm:p-6 opacity-10">
              <ArrowUpRight
                size={60}
                className="sm:size-[80px]"
                strokeWidth={1}
              />
            </div>

            {/* Label */}
            <p className="text-[10px] uppercase tracking-[0.2em] font-medium text-white/70">
              Education
            </p>

            {/* Content */}
            <div className="relative z-10">
              <h4 className="text-xl sm:text-2xl md:text-3xl font-bold leading-snug">
                BCA + MCA GRADUATE
              </h4>

              <p className="mt-2 text-white/80 text-xs sm:text-sm leading-relaxed max-w-xs">
                Strong technical foundation and mentorship
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
