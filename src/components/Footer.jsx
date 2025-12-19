"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative bg-transparent text-white overflow-hidden">
      {/* 🔻 SAME BOTTOM GLOW AS CONTACT (CONTINUATION) */}
      <motion.div
        className="absolute -top-64 left-1/4 w-[520px] h-[520px] rounded-full
        bg-gradient-to-tr from-yellow-400/30 via-orange-500/25 to-transparent
        blur-[200px] z-0"
        animate={{ x: [0, 60, 0], y: [0, -40, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute -top-80 right-1/4 w-[480px] h-[480px] rounded-full
        bg-gradient-to-tl from-orange-500/25 to-transparent
        blur-[180px] z-0"
        animate={{ x: [0, -80, 0], y: [0, -60, 0] }}
        transition={{ duration: 34, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* SAME SUBTLE NOISE — OPTIONAL BUT HELPS MERGE */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.04)_1px,transparent_0)] bg-[size:24px_24px] opacity-[0.05]" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-6">
        <div className="flex flex-col items-center text-center gap-[6px]">
          <p className="text-sm font-medium tracking-tight text-white">
            Md Dilkash Alam
          </p>

          <p className="text-[10.5px] uppercase tracking-[0.32em] text-gray-500">
            Full Stack Software Engineer
          </p>

          <p className="text-[10.5px] tracking-wide text-gray-600">
            © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
