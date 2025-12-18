"use client";

import { motion } from "framer-motion";

const contacts = [
  {
    title: "Contact",
    sub: "Phone Number",
    value: "+91 XXXXXXXXXX",
    icon: (
      <svg
        className="w-5 h-5 text-orange-400"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 6.75c0 8.284 6.716 15 15 15a1.75 1.75 0 001.75-1.75v-2.098a1.75 1.75 0 00-1.16-1.64l-3.03-1.01a1.75 1.75 0 00-1.91.47l-.97.97a12.036 12.036 0 01-5.27-5.27l.97-.97a1.75 1.75 0 00.47-1.91l-1.01-3.03A1.75 1.75 0 006.848 3H4.75A1.75 1.75 0 003 4.75v2z"
        />
      </svg>
    ),
  },
  {
    title: "Email",
    sub: "Get in touch",
    value: "yourname@example.com",
    icon: (
      <svg
        className="w-5 h-5 text-orange-400"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 7.5v9A2.25 2.25 0 005.25 18.75h13.5A2.25 2.25 0 0021 16.5v-9M3 7.5l9 6 9-6"
        />
      </svg>
    ),
  },
  {
    title: "WhatsApp",
    sub: "Quick chat",
    value: "+91 XXXXXXXXXX",
    icon: (
      <svg
        className="w-5 h-5 text-green-400"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12.04 2C6.57 2 2.17 6.39 2.17 11.86c0 2.08.61 4.11 1.76 5.85L2 22l4.45-1.86a9.83 9.83 0 005.59 1.78c5.47 0 9.87-4.39 9.87-9.86S17.51 2 12.04 2z" />
        <path d="M17.47 14.01c-.24-.12-1.44-.71-1.66-.79-.22-.08-.38-.12-.54.12-.16.24-.62.79-.76.95-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.18-.71-.63-1.19-1.41-1.33-1.65-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.19-.46-.38-.4-.54-.41l-.46-.01c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.57 4.1 3.6z" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden flex items-center">
      {/* TOP GLOW — SAME AS ABOUT */}
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

      {/* SUBTLE NOISE */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.04)_1px,transparent_0)] bg-[size:24px_24px] opacity-[0.08]" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 md:pt-20 pb-20 md:pb-24">
        {/* LABEL */}
        <p className="text-[11px] uppercase tracking-[0.25em] text-orange-400 mb-4">
          Contact
        </p>

        {/* HEADING */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight leading-[1.15] mb-12">
          Get In <br />
          <span className="text-orange-400">Touch</span>
        </h1>

        {/* CONTACT CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
          {contacts.map((item, index) => (
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
              <div className="flex items-center gap-2 mb-1">
                {item.icon}
                <h3 className="text-base sm:text-lg font-semibold tracking-tight">
                  {item.title}
                </h3>
              </div>

              <p className="text-[11px] uppercase tracking-[0.2em] text-gray-500 mb-3">
                {item.sub}
              </p>

              <p className="text-sm text-gray-300 break-all">{item.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
