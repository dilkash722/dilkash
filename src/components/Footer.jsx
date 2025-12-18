"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* BASE */}
      <div className="absolute inset-0 bg-black z-0" />

      {/* ULTRA SUBTLE GLOW — JUST DEPTH */}
      <motion.div
        className="absolute -bottom-64 left-1/2 -translate-x-1/2
        w-[360px] h-[360px] rounded-full
        bg-gradient-to-tr from-yellow-400/15 via-orange-500/10 to-transparent
        blur-[220px] z-0"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 34, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* SOFT FADE */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-transparent via-black/60 to-black z-[1]" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-5">
        <div className="flex flex-col items-center text-center gap-[6px]">
          {/* NAME */}
          <p className="text-sm font-medium tracking-tight text-white">
            Md Dilkash Alam
          </p>

          {/* ROLE */}
          <p className="text-[10.5px] uppercase tracking-[0.32em] text-gray-500">
            Full Stack Software Engineer
          </p>

          {/* COPYRIGHT */}
          <p className="text-[10.5px] tracking-wide text-gray-600">
            © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
