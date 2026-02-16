"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, X, ArrowRight } from "lucide-react";
import { createPortal } from "react-dom";

export default function ContactSuccess({ name, onClose }) {
  const displayName = name?.trim() || "there";
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Auto close after 5 seconds if you want
    const timer = setTimeout(onClose, 6000);
    return () => clearTimeout(timer);
  }, [onClose]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[10000] flex items-center justify-center
        bg-[#050505]/95 backdrop-blur-2xl px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Hero Background Glows */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-500/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-5%] right-[-5%] w-[40%] h-[40%] bg-zinc-800/20 blur-[100px] rounded-full" />
        </div>

        <motion.div
          initial={{ y: 50, scale: 0.9, opacity: 0 }}
          animate={{ y: 0, scale: 1, opacity: 1 }}
          exit={{ y: 50, scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-md
          rounded-[2.5rem] bg-[#0a0a0a] border border-zinc-800/50 
          shadow-[0_0_100px_rgba(0,0,0,0.5)]
          p-8 md:p-12 text-center overflow-hidden"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 bg-zinc-900 rounded-full text-zinc-500 hover:text-white transition-all active:scale-90"
          >
            <X size={18} strokeWidth={3} />
          </button>

          {/* Label Section */}
          <div className="flex flex-col items-center mb-8">
            <span className="text-[10px] uppercase tracking-[0.5em] font-black text-indigo-500 mb-6">
              Confirmed • Nadilix
            </span>

            <div className="relative">
              {/* Outer Glow for Icon */}
              <div className="absolute inset-0 bg-indigo-500/20 blur-2xl rounded-full" />
              <div
                className="relative flex h-20 w-20 items-center justify-center
                    rounded-full border-2 border-indigo-500/30 bg-zinc-900/50 backdrop-blur-sm shadow-xl"
              >
                <CheckCircle
                  size={32}
                  strokeWidth={2.5}
                  className="text-indigo-400"
                />
              </div>
            </div>
          </div>

          {/* Success Content */}
          <div className="space-y-4">
            <h3 className="text-3xl md:text-4xl font-black text-white leading-tight uppercase tracking-tighter">
              THANK YOU, <br />
              <span className="text-zinc-700">{displayName}</span>
            </h3>

            <p className="text-zinc-500 text-sm md:text-base font-light leading-relaxed max-w-[240px] mx-auto uppercase tracking-tight">
              Inquiry received. Hum{" "}
              <span className="text-white italic">shortly</span> aapse connect
              karenge.
            </p>
          </div>

          {/* Action Button - Hero Style */}
          <button
            onClick={onClose}
            className="mt-10 group relative w-full py-5 bg-white text-black font-black uppercase text-[10px] tracking-[0.3em] rounded-2xl overflow-hidden transition-all active:scale-[0.98]"
          >
            <span className="relative z-10 flex items-center justify-center gap-3">
              Back to site{" "}
              <ArrowRight
                size={14}
                strokeWidth={3}
                className="group-hover:translate-x-1 transition-transform"
              />
            </span>
            <div className="absolute inset-0 bg-indigo-500 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.16, 1, 0.3, 1]" />
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body,
  );
}
