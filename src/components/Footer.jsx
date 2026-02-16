"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";

export default function Footer() {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  };

  return (
    <footer className="relative bg-[#050505] text-[#fafafa] pt-24 pb-12 overflow-hidden border-t border-zinc-900">
      {/* BACKGROUND SYNCED GLOW */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-900/30 blur-[150px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        {/* TOP SECTION: CALL TO ACTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24 items-start">
          <motion.div {...fadeInUp} className="lg:col-span-8">
            <h2 className="text-[10vw] md:text-[6vw] font-black leading-[0.9] tracking-tighter uppercase mb-10">
              LET'S ARCHITECT <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-700">
                YOUR VISION
              </span>
            </h2>
            <button className="group flex items-center gap-4 px-10 py-5 bg-white text-black font-black uppercase text-xs tracking-[0.4em] rounded-full hover:bg-indigo-600 hover:text-white transition-all duration-500 active:scale-95">
              Get in Touch{" "}
              <ArrowUpRight
                size={20}
                strokeWidth={3}
                className="group-hover:rotate-45 transition-transform"
              />
            </button>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="lg:col-span-4 space-y-10"
          >
            <div>
              <p className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.4em] mb-4">
                Location
              </p>
              <div className="flex items-center gap-3 text-zinc-300 group cursor-pointer">
                <MapPin size={18} className="text-indigo-500" />
                <span className="text-sm font-bold uppercase tracking-widest group-hover:text-white transition-colors">
                  Katihar, Bihar, India
                </span>
              </div>
            </div>

            <div>
              <p className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.4em] mb-4">
                Contact
              </p>
              <div className="flex items-center gap-3 text-zinc-300 group cursor-pointer">
                <Mail size={18} className="text-indigo-500" />
                <span className="text-sm font-bold uppercase tracking-widest group-hover:text-white transition-colors">
                  danieldilkash@gmail.com
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* MIDDLE SECTION: QUICK LINKS & SOCIALS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 py-16 border-y border-zinc-900">
          <div className="space-y-6">
            <p className="text-zinc-600 text-[10px] font-black uppercase tracking-[0.5em]">
              Navigation
            </p>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">
              <li>
                <a
                  href="#home"
                  className="hover:text-indigo-500 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-indigo-500 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-indigo-500 transition-colors"
                >
                  Work
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <p className="text-zinc-600 text-[10px] font-black uppercase tracking-[0.5em]">
              Social
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="p-3 bg-zinc-900 rounded-full hover:bg-indigo-600 transition-all text-white group"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="p-3 bg-zinc-900 rounded-full hover:bg-indigo-600 transition-all text-white group"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="p-3 bg-zinc-900 rounded-full hover:bg-indigo-600 transition-all text-white group"
              >
                <Github size={18} />
              </a>
              <a
                href="mailto:yourname@example.com"
                className="p-3 bg-zinc-900 rounded-full hover:bg-indigo-600 transition-all text-white group"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM GIANT BRANDING */}
        <div className="pt-20">
          <motion.h2
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[22vw] font-black leading-none tracking-tighter text-zinc-900 select-none"
          >
            NADILIX
          </motion.h2>
        </div>

        {/* COPYRIGHT INFO */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mt-10">
          <p className="text-[9px] font-bold uppercase tracking-[0.5em] text-zinc-600 text-center">
            © 2025 MD DILKASH ALAM • ALL RIGHTS RESERVED
          </p>
          <div className="flex gap-8 text-[9px] font-black uppercase tracking-[0.3em] text-zinc-500">
            <span className="hover:text-indigo-500 cursor-pointer transition-colors">
              Privacy
            </span>
            <span className="hover:text-indigo-500 cursor-pointer transition-colors">
              Terms
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
