"use client";

import { motion } from "framer-motion";
import { Github, Instagram, Linkedin, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  };

  return (
    <footer className="relative bg-[#050505] text-[#fafafa] pt-20 pb-10 overflow-hidden border-t border-zinc-900">
      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-900/30 blur-[150px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-start">
          <motion.div {...fadeInUp} className="lg:col-span-8">
            <h2 className="text-[10vw] md:text-[6vw] font-black leading-[0.9] tracking-tighter uppercase">
              LET'S BUILD <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-700">
                SOMETHING REAL
              </span>
            </h2>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="lg:col-span-4 space-y-8"
          >
            {/* Location */}
            <div>
              <p className="text-zinc-500 text-[10px] font-semibold uppercase tracking-[0.3em] mb-3">
                Location
              </p>
              <div className="flex items-center gap-3 text-zinc-300">
                <MapPin size={16} className="text-indigo-500" />
                <span className="text-sm">Katihar, Bihar, India</span>
              </div>
            </div>

            {/* Contact */}
            <div>
              <p className="text-zinc-500 text-[10px] font-semibold uppercase tracking-[0.3em] mb-3">
                Contact
              </p>
              <div className="flex items-center gap-3 text-zinc-300">
                <Mail size={16} className="text-indigo-500" />
                <span className="text-sm">danieldilkash@gmail.com</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Middle */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 py-12 border-y border-zinc-900">
          {/* Navigation */}
          <div>
            <p className="text-zinc-600 text-[10px] uppercase tracking-[0.3em] mb-4">
              Navigation
            </p>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li>
                <a href="#home" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white">
                  Work
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="text-zinc-600 text-[10px] uppercase tracking-[0.3em] mb-4">
              Social
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 bg-zinc-900 rounded-full hover:bg-indigo-600 transition"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="#"
                className="p-2 bg-zinc-900 rounded-full hover:bg-indigo-600 transition"
              >
                <Instagram size={16} />
              </a>
              <a
                href="#"
                className="p-2 bg-zinc-900 rounded-full hover:bg-indigo-600 transition"
              >
                <Github size={16} />
              </a>
              <a
                href="mailto:yourname@example.com"
                className="p-2 bg-zinc-900 rounded-full hover:bg-indigo-600 transition"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Branding */}
        <div className="pt-16">
          <motion.h2
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-[18vw] font-black leading-none tracking-tighter text-zinc-900 select-none"
          >
            NADILIX
          </motion.h2>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-8">
          <p className="text-xs text-zinc-600 text-center">
            © 2025 MD DILKASH ALAM
          </p>
          <div className="flex gap-6 text-xs text-zinc-500">
            <span className="hover:text-white cursor-pointer">Privacy</span>
            <span className="hover:text-white cursor-pointer">Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
