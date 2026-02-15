import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Play, Calendar } from "lucide-react"; // npm i lucide-react

const Home = () => {
  return (
    <div className="bg-[#050505] text-[#fafafa] min-h-screen font-sans selection:bg-white selection:text-black overflow-x-hidden">
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-zinc-900/40 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-5%] right-[-5%] w-[40%] h-[40%] bg-zinc-800/20 blur-[100px] rounded-full" />
      </div>

      <main className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-24 md:pt-40 pb-20">
        {/* Label Section */}
        <div className="overflow-hidden mb-6">
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3"
          >
            <span className="h-[1px] w-8 bg-indigo-500" />
            <span className="text-[10px] md:text-xs uppercase tracking-[0.5em] font-semibold text-zinc-500">
              Founder & Lead Trainer • Nadilix
            </span>
          </motion.div>
        </div>

        {/* Hero Title */}
        <section className="relative">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="text-[15vw] md:text-[10vw] font-black leading-[0.8] tracking-tighter uppercase mb-8"
          >
            MD DILKASH
          </motion.h1>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-16 items-start">
            {/* Left Side: Pitch */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="lg:col-span-7"
            >
              <p className="text-xl md:text-4xl font-light leading-snug text-zinc-400">
                I build{" "}
                <span className="text-white font-medium italic underline decoration-indigo-500/50 underline-offset-8">
                  systems
                </span>{" "}
                and <span className="text-white font-medium">careers</span>. At
                Nadilix, hum complex industry skills ko decode karke unhe
                execution-ready modules mein convert karte hain.
              </p>
            </motion.div>

            {/* Right Side: Quick Stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              className="lg:col-span-5 grid grid-cols-2 gap-4 w-full"
            >
              <div className="p-8 border border-zinc-800/50 bg-zinc-900/10 rounded-[2rem] backdrop-blur-sm hover:border-zinc-700 transition-colors group">
                <p className="text-3xl md:text-5xl font-black mb-1 group-hover:text-indigo-400 transition-colors">
                  10K+
                </p>
                <p className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">
                  Learners
                </p>
              </div>
              <div className="p-8 border border-zinc-800/50 bg-zinc-900/10 rounded-[2rem] backdrop-blur-sm hover:border-zinc-700 transition-colors group">
                <p className="text-3xl md:text-5xl font-black mb-1 group-hover:text-indigo-400 transition-colors">
                  08+
                </p>
                <p className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">
                  Expertises
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Updated CTA Section with Icons & Modern Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-col sm:flex-row gap-6 mt-20"
        >
          {/* Primary Button: Solid with Icon Animation */}
          <button className="group relative flex items-center justify-center gap-3 px-10 py-6 bg-white text-black font-black uppercase text-xs tracking-[0.2em] overflow-hidden rounded-full transition-all active:scale-95">
            <span className="relative z-10">Enquiry Form</span>
            <motion.div
              className="relative z-10"
              whileHover={{ rotate: 45, x: 2, y: -2 }}
            >
              <ArrowUpRight size={18} strokeWidth={3} />
            </motion.div>
            <div className="absolute inset-0 bg-indigo-500 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.16, 1, 0.3, 1]" />
          </button>

          {/* Secondary Button: Outline with Fill Hover */}
          <button className="group relative flex items-center justify-center gap-3 px-10 py-6 border-2 border-zinc-800 rounded-full text-xs uppercase tracking-[0.2em] font-black hover:border-white transition-all overflow-hidden active:scale-95">
            <span className="relative z-10 group-hover:text-black transition-colors duration-300">
              Book Workshop
            </span>
            <Calendar
              className="relative z-10 group-hover:text-black transition-colors duration-300"
              size={18}
            />
            <div className="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-[0.16, 1, 0.3, 1]" />
          </button>
        </motion.div>

        {/* Skill Ticker */}
        <div className="mt-40 border-t border-zinc-900/50 pt-12">
          <div className="flex flex-wrap gap-x-16 gap-y-8 opacity-20 hover:opacity-50 transition-opacity duration-1000">
            {["UI/UX", "Full Stack", "Leadership", "Branding", "Strategy"].map(
              (skill) => (
                <div key={skill} className="flex items-center gap-4">
                  <div className="h-1.5 w-1.5 bg-indigo-500 rounded-full" />
                  <span className="text-sm md:text-lg font-black uppercase tracking-[0.3em]">
                    {skill}
                  </span>
                </div>
              ),
            )}
          </div>
        </div>
      </main>

      {/* Side Label */}
      <div className="fixed right-10 bottom-24 hidden xl:block z-20">
        <p className="rotate-90 origin-right text-[10px] tracking-[1.2em] text-zinc-700 uppercase font-black">
          Nadilix • Elite Training • 2024
        </p>
      </div>
    </div>
  );
};

export default Home;
