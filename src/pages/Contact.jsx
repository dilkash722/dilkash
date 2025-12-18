"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle } from "lucide-react";

const contacts = [
  {
    title: "Phone",
    sub: "Direct Call",
    icon: Phone,
    value: "+91 XXXXXXXXXX",
  },
  {
    title: "Email",
    sub: "Get in touch",
    icon: Mail,
    value: "yourname@example.com",
  },
  {
    title: "WhatsApp",
    sub: "Quick chat",
    icon: MessageCircle,
    value: "+91 XXXXXXXXXX",
  },
];

export default function Contact() {
  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden flex items-center">
      {/* BASE */}
      <div className="absolute inset-0 bg-black z-0" />

      {/* TOP YELLOW / ORANGE GLOW */}
      <motion.div
        className="absolute -top-48 left-1/4 w-[520px] h-[520px] rounded-full
        bg-gradient-to-br from-yellow-400/30 via-orange-500/25 to-transparent
        blur-[180px] z-0"
        animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute -top-64 right-1/4 w-[480px] h-[480px] rounded-full
        bg-gradient-to-bl from-orange-500/25 to-transparent
        blur-[160px] z-0"
        animate={{ x: [0, -80, 0], y: [0, 60, 0] }}
        transition={{ duration: 32, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* BLACK FADE TO BOTTOM */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black z-[1]" />

      {/* NOISE */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.04)_1px,transparent_0)] bg-[size:24px_24px] opacity-[0.08]" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 md:pt-20 pb-20 md:pb-24">
        {/* LABEL */}
        <p className="text-[11px] uppercase tracking-[0.25em] text-orange-400 mb-4">
          Contact
        </p>

        {/* HEADING */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight leading-[1.15] mb-6">
          Get In <br />
          <span className="text-orange-400">Touch</span>
        </h1>

        {/* DESCRIPTION */}
        <p className="max-w-3xl text-gray-300 text-sm sm:text-base leading-relaxed mb-12">
          Reach out through any of the platforms below. I’m always open to
          discussions, collaborations and new opportunities.
        </p>

        {/* CONTACT CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
          {contacts.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
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
                {/* TITLE + ICON */}
                <div className="flex items-center gap-2 mb-1">
                  <Icon className="w-4 h-4 text-orange-400" />
                  <h3 className="text-base sm:text-lg font-semibold tracking-tight">
                    {contact.title}
                  </h3>
                </div>

                <p className="text-[11px] uppercase tracking-[0.2em] text-gray-500 mb-4">
                  {contact.sub}
                </p>

                <p className="text-sm text-gray-300 break-all">
                  {contact.value}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
