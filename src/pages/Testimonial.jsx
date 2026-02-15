"use client";

import { motion } from "framer-motion";
import { User, MessageSquareQuote } from "lucide-react";

const testimonials = [
  {
    title: "School Website",
    sub: "Amity Indian Public School",
    client: "Md Salik Reza",
    feedback:
      "The website looks professional with clean UI and smooth performance across all devices.",
  },
  {
    title: "Guest House System",
    sub: "Booking & Operations",
    client: "Sonu Ahtasam",
    feedback:
      "Booking and guest management became very easy and efficient for daily operations.",
  },
  {
    title: "Cricket Score App",
    sub: "Match & Scoreboard",
    client: "Nikhra Yuva Club",
    feedback:
      "Live scoring works smoothly and the interface is easy to use for scorers.",
  },
  {
    title: "Food Delivery App",
    sub: "End-to-end ordering & management",
    client: "Md Aarif",
    feedback:
      "Online ordering increased sales and order handling became very smooth.",
  },
  {
    title: "Advocate Portfolio",
    sub: "Professional Website",
    client: "Advocate Abdul Subahn",
    feedback:
      "The portfolio gives a premium, trustworthy and professional impression.",
  },
  {
    title: "Inventory System",
    sub: "Stock Management",
    client: "Md Manouwwar",
    feedback:
      "Stock tracking and inventory reports became accurate and time-saving.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden flex items-center">
      {/* TOP GLOW (UNCHANGED) */}
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

      {/* FADE + NOISE */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black z-[1]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.04)_1px,transparent_0)] bg-[size:24px_24px] opacity-[0.08]" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 md:pt-20 pb-20 md:pb-24">
        {/* LABEL */}
        <p className="text-[11px] uppercase tracking-[0.25em] text-orange-400 mb-4">
          Testimonials
        </p>

        {/* HEADING */}
        <h1
          className="
    text-3xl
    sm:text-4xl
    md:text-5xl
    lg:text-6xl
    font-bold
    tracking-tight
    leading-tight
    mb-6
  "
        >
          Client <span className="text-orange-400">Reviews</span>
        </h1>

        {/* DESCRIPTION */}
        <p className="max-w-3xl text-gray-300 text-base sm:text-lg leading-relaxed mb-14">
          Genuine feedback from clients after delivering structured, reliable
          and production-ready web solutions.
        </p>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{
                y: -8,
                boxShadow: "0 0 40px rgba(255,140,0,0.15)",
              }}
              className="
                p-7
                rounded-2xl
                border border-white/25
                ring-1 ring-white/10
                transition-all
                hover:border-orange-400/60
              "
            >
              {/* PROJECT TITLE */}
              <div className="flex items-center gap-3 mb-3">
                <MessageSquareQuote className="w-5 h-5 text-orange-400" />
                <h3 className="text-lg font-semibold tracking-tight">
                  {item.title}
                </h3>
              </div>

              {/* SUBTITLE */}
              <p className="text-gray-400 text-sm mb-4">{item.sub}</p>

              {/* FEEDBACK */}
              <p className="text-gray-300 text-base leading-relaxed mb-6">
                “{item.feedback}”
              </p>

              {/* CLIENT */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div className="p-2 rounded-full bg-orange-500/10 border border-orange-500/20">
                  <User className="w-4 h-4 text-orange-400" />
                </div>
                <span className="text-sm font-medium text-gray-300">
                  {item.client}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
