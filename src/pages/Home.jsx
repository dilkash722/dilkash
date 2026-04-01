import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, MessageCircle } from "lucide-react";

const Home = () => {
  return (
    <div className="bg-[#050505] text-[#fafafa] min-h-screen font-sans selection:bg-white selection:text-black overflow-x-hidden">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-zinc-900/40 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-5%] right-[-5%] w-[40%] h-[40%] bg-zinc-800/20 blur-[100px] rounded-full" />
      </div>

      <main className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-24 md:pt-36 pb-20">
        {/* Label */}
        <div className="overflow-hidden mb-6">
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3"
          >
            <span className="h-[1px] w-8 bg-indigo-500" />
            <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-semibold text-zinc-500">
              Founder & Lead Trainer • Nadilix
            </span>
          </motion.div>
        </div>

        {/* Hero */}
        <section>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="text-[13vw] sm:text-[10vw] md:text-[8vw] font-extrabold leading-[0.9] tracking-tight uppercase mb-6"
          >
            MD DILKASH
          </motion.h1>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-12 md:mt-16 items-start">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="lg:col-span-7"
            >
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-light leading-[1.7] text-zinc-300 max-w-2xl">
                I build{" "}
                <span className="text-white font-medium decoration-indigo-500/40 underline-offset-4">
                  systems
                </span>{" "}
                and <span className="text-white font-medium">careers</span>. At
                Nadilix, we simplify complex industry skills and turn them into
                practical, execution-ready learning modules.
              </p>
            </motion.div>

            {/* Right stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              className="lg:col-span-5 grid grid-cols-2 gap-4 w-full"
            >
              <div className="p-6 md:p-8 border border-zinc-800/50 bg-zinc-900/10 rounded-2xl backdrop-blur-sm hover:border-zinc-700 transition-colors group">
                <p className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-1 group-hover:text-indigo-400 transition-colors">
                  04+
                </p>
                <p className="text-[11px] tracking-wider text-zinc-500 font-semibold uppercase">
                  Industry Courses
                </p>
              </div>

              <div className="p-6 md:p-8 border border-zinc-800/50 bg-zinc-900/10 rounded-2xl backdrop-blur-sm hover:border-zinc-700 transition-colors group">
                <p className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-1 group-hover:text-indigo-400 transition-colors">
                  100%
                </p>
                <p className="text-[11px] tracking-wider text-zinc-500 font-semibold uppercase">
                  Practical Training
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-16 md:mt-20"
        >
          {/* Primary */}
          <button className="group relative flex items-center justify-center gap-3 px-8 md:px-10 py-4 md:py-5 bg-white text-black font-semibold uppercase text-[11px] tracking-widest overflow-hidden rounded-full transition-all active:scale-95">
            <span className="relative z-10">Let's Talk</span>
            <motion.div
              className="relative z-10"
              whileHover={{ rotate: 45, x: 2, y: -2 }}
            >
              <ArrowUpRight size={18} strokeWidth={3} />
            </motion.div>
            <div className="absolute inset-0 bg-indigo-500 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
          </button>

          {/* Secondary */}
          <a
            href="https://wa.me/917763937638"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center gap-3 px-8 md:px-10 py-4 md:py-5 border-2 border-zinc-800 rounded-full text-[11px] uppercase tracking-widest font-semibold transition-all overflow-hidden active:scale-95 hover:border-white active:border-white"
          >
            <div className="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />

            <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
              WhatsApp Me
            </span>

            <MessageCircle
              className="relative z-10 transition-colors duration-300 group-hover:text-black"
              size={18}
            />
          </a>
        </motion.div>

        {/* Skills */}
        <div className="mt-32 md:mt-40 border-t border-zinc-900/50 pt-10 md:pt-12">
          <div className="flex flex-wrap gap-x-10 md:gap-x-16 gap-y-6 md:gap-y-8 opacity-20 hover:opacity-50 transition-opacity duration-1000">
            {[
              "Frontend Development",
              "Full Stack Development",
              "Data Analytics with Python",
            ].map((skill) => (
              <div key={skill} className="flex items-center gap-3">
                <div className="h-1.5 w-1.5 bg-indigo-500 rounded-full" />
                <span className="text-xs sm:text-sm md:text-base font-light uppercase tracking-[0.2em]">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Side label */}
      <div className="fixed right-8 bottom-20 hidden xl:block z-20">
        <p className="rotate-90 origin-right text-[10px] tracking-[0.6em] text-zinc-700 uppercase font-semibold">
          Nadilix • Software Training • 2026
        </p>
      </div>
    </div>
  );
};

export default Home;
