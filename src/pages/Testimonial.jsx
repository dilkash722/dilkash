"use client";

import { motion } from "framer-motion";
import { User } from "lucide-react";

const testimonials = [
  {
    title: "School Website",
    sub: "Amity Indian Public School",
    client: "Rahul Sharma",
    feedback:
      "The website looks professional with clean UI and smooth performance across all devices.",
  },
  {
    title: "Guest House System",
    sub: "Booking & Operations",
    client: "Hotel Manager",
    feedback:
      "Booking and guest management became very easy and efficient for daily operations.",
  },
  {
    title: "Cricket Score App",
    sub: "Match & Scoreboard",
    client: "Cricket Club Admin",
    feedback:
      "Live scoring works smoothly and the interface is easy to use for scorers.",
  },
  {
    title: "Food Delivery App",
    sub: "Online Ordering",
    client: "Restaurant Owner",
    feedback:
      "Online ordering increased sales and order handling became very smooth.",
  },
  {
    title: "Advocate Portfolio",
    sub: "Professional Website",
    client: "Advocate A. Khan",
    feedback:
      "The portfolio gives a premium, trustworthy and professional impression.",
  },
  {
    title: "Inventory System",
    sub: "Stock Management",
    client: "Store Manager",
    feedback:
      "Stock tracking and inventory reports became accurate and time-saving.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden flex items-center">
      {/* TOP ORANGE GLOW */}
      <motion.div
        className="absolute -top-48 left-1/4 w-[520px] h-[520px] rounded-full
        bg-gradient-to-br from-yellow-400/30 via-orange-500/25 to-transparent
        blur-[180px] z-0"
        animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute -top-64 right-1/4 w-[480px] h-[480px] rounded-full
        bg-gradient-to-bl from-orange-500/25 to-transparent
        blur-[160px] z-0"
        animate={{ x: [0, -80, 0], y: [0, 60, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* BLACK FADE */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black z-[1]" />

      {/* NOISE */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.04)_1px,transparent_0)] bg-[size:24px_24px] opacity-[0.08]" />

      {/* CONTENT — EXACT SAME STRUCTURE AS ABOUT */}
      <div
        className="
          relative z-10
          max-w-7xl mx-auto px-6
          pt-16 md:pt-20
          pb-20 md:pb-24
        "
      >
        {/* LABEL */}
        <p className="text-[11px] uppercase tracking-[0.25em] text-orange-400 mb-4">
          Testimonials
        </p>

        {/* HEADING */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight leading-[1.15] mb-6">
          Client <br />
          <span className="text-orange-400">Feedback</span>
        </h1>

        {/* DESCRIPTION — ONLY THIS IS NARROW */}
        <p className="max-w-3xl text-gray-300 text-sm sm:text-base leading-relaxed mb-12">
          Honest feedback from real clients after delivering modern,
          production-ready web applications.
        </p>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -8,
                boxShadow: "0 0 40px rgba(255,140,0,0.25)",
              }}
              className="
                p-6 rounded-2xl
                border border-white/40 ring-1 ring-white/10
                bg-transparent
                transition-all
              "
            >
              <h3 className="text-base sm:text-lg font-semibold tracking-tight mb-1">
                {item.title}
              </h3>

              <p className="text-[11px] uppercase tracking-[0.2em] text-gray-500 mb-4">
                {item.sub}
              </p>

              <div className="flex items-center gap-2 mb-4">
                <User className="w-4 h-4 text-orange-400" />
                <span className="text-sm font-medium text-gray-300">
                  {item.client}
                </span>
              </div>

              <p className="text-sm text-gray-300 leading-relaxed">
                “{item.feedback}”
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
