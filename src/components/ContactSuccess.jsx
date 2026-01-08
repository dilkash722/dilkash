"use client";

import { motion } from "framer-motion";
import { CheckCircle, X } from "lucide-react";

export default function ContactSuccess({ name, onClose }) {
  const displayName = name?.trim() || "there";

  return (
    <motion.div
      className="fixed inset-0 z-[999] flex items-center justify-center
      bg-black/70 backdrop-blur-sm px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      {/* ORANGE GLOW */}
      <motion.div
        className="absolute -bottom-48 left-1/2 -translate-x-1/2
        w-[420px] h-[420px] sm:w-[520px] sm:h-[520px]
        rounded-full bg-gradient-to-tr
        from-orange-500/35 via-yellow-400/25 to-transparent
        blur-[160px]"
        animate={{ y: [0, -60, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* CARD */}
      <motion.div
        initial={{ y: 32, scale: 0.96, opacity: 0 }}
        animate={{ y: 0, scale: 1, opacity: 1 }}
        exit={{ y: 32, scale: 0.96, opacity: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
        className="relative z-10 w-full max-w-lg
        rounded-2xl bg-black/80 backdrop-blur
        border border-white/20 ring-1 ring-white/10
        px-6 sm:px-10 py-10 sm:py-12 text-center"
      >
        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X size={18} />
        </button>

        {/* LABEL (SAME AS CONTACT MODAL) */}
        <p className="text-[11px] uppercase tracking-[0.28em] text-orange-400 mb-4">
          Success
        </p>

        {/* ICON */}
        <div
          className="mx-auto mb-6 flex h-14 w-14 items-center justify-center
          rounded-full border border-orange-400/30 bg-orange-400/10"
        >
          <CheckCircle size={26} className="text-orange-400" />
        </div>

        {/* HEADING */}
        <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-200 mb-3">
          Thank you, <span className="text-orange-400">{displayName}</span>
        </h3>

        {/* MESSAGE */}
        <p className="text-sm sm:text-[15px] text-gray-400 leading-relaxed">
          Your message has been sent successfully.
          <br />
          I’ll get back to you shortly.
        </p>
      </motion.div>
    </motion.div>
  );
}
