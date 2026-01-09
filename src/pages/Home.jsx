"use client";

import { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import {
  Hand,
  Mail,
  MessageCircle,
  Code2,
  Server,
  Database,
  Cloud,
} from "lucide-react";

import ContactModal from "../components/ContactModal";
import avatarImg from "@/assets/avtar.jpg";

export default function Home() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-screen bg-black text-white overflow-hidden">
        {/* BACKGROUND */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black via-black to-transparent z-[1]" />

        {/* GLOWS */}
        <motion.div
          className="absolute -bottom-48 left-1/4 w-[520px] h-[520px] rounded-full
          bg-gradient-to-tr from-yellow-400/25 via-orange-500/20 to-transparent
          blur-[180px]"
          animate={{ x: [0, 80, 0], y: [0, -60, 0] }}
          transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute -bottom-64 right-1/4 w-[480px] h-[480px] rounded-full
          bg-gradient-to-tr from-orange-500/20 to-transparent
          blur-[160px]"
          animate={{ x: [0, -100, 0], y: [0, -80, 0] }}
          transition={{ duration: 32, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-6 pb-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* LEFT */}
          <div>
            {/* EYEBROW */}
            <p className="flex items-center gap-2 text-[10px] uppercase tracking-[0.36em] text-orange-400 mb-6 font-medium">
              <Hand size={12} />
              <Typewriter
                words={["Hello,", "I’m Md Dilkash"]}
                loop={false}
                cursor
              />
            </p>

            {/* HERO */}
            <h1
              className="
                text-[2.1rem]
                sm:text-[2.6rem]
                md:text-[3.4rem]
                lg:text-[4.2rem]
                xl:text-[5.4rem]
                font-extrabold
                tracking-[-0.045em]
                leading-[1.15]
                md:leading-[1.05]
                mb-8
                whitespace-nowrap
              "
            >
              <span className="block">Full Stack</span>
              <span className="block text-orange-400">Product Engineer</span>
            </h1>

            {/* TAGLINE */}
            <p className="max-w-xl text-[1.05rem] sm:text-[1.1rem] md:text-[1.15rem] text-gray-300 leading-[1.8] mb-8">
              <Typewriter
                words={[
                  "Building systems, not just websites",
                  "End-to-end product & software systems",
                  "Business-driven digital solutions",
                ]}
                loop
                cursor
              />
            </p>

            {/* DESCRIPTION */}
            <p className="max-w-xl text-gray-400 text-[0.9rem] leading-[1.9] mb-14">
              I design and build end-to-end web & software systems that help
              businesses run smoothly, from clean UI to reliable,
              production-ready backends.
            </p>

            {/* SKILLS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mb-14">
              {[
                {
                  title: "Frontend Engineering",
                  sub1: "Modern UI & UX development",
                  sub2: "HTML, CSS, JS, TS, React, Next.js, Tailwind",
                  icon: Code2,
                },
                {
                  title: "Backend Systems",
                  sub1: "Scalable server-side logic",
                  sub2: "Node.js, Express, REST APIs, Python",
                  icon: Server,
                },
                {
                  title: "Database Design",
                  sub1: "Reliable data structures",
                  sub2: "MongoDB, PostgreSQL, MySQL",
                  icon: Database,
                },
                {
                  title: "Deployment & Cloud",
                  sub1: "Production-ready delivery",
                  sub2: "Vercel, VPS, CI/CD, GitHub, Cloud Hosting",
                  icon: Cloud,
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -6 }}
                  className="p-5 rounded-2xl bg-transparent border border-white/40 ring-1 ring-white/10 hover:border-orange-400/60 transition-all"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <item.icon className="w-4 h-4 text-orange-400" />
                    <h3 className="text-[0.95rem] font-medium">{item.title}</h3>
                  </div>
                  <p className="text-[0.85rem] text-gray-300">{item.sub1}</p>
                  <p className="text-[0.75rem] text-gray-400 mt-2">
                    {item.sub2}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* CTA BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* CONTACT */}
              <motion.button
                type="button" // ✅ MOST IMPORTANT
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.preventDefault(); // ✅ extra safety
                  setContactOpen(true); // ✅ modal open
                }}
                className="inline-flex items-center justify-center gap-2 px-9 py-3.5 rounded-lg bg-orange-500 text-black text-[0.85rem] font-medium tracking-wide"
              >
                <Mail size={17} />
                Contact Me
              </motion.button>

              {/* WHATSAPP */}
              <motion.a
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/917763937638?text=Hello%20I%20want%20to%20discuss%20a%20project"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-9 py-3.5 rounded-lg border border-white/40 ring-1 ring-white/20 text-[0.85rem] font-medium tracking-wide hover:bg-white/5 hover:border-green-500/60"
              >
                <MessageCircle size={17} />
                WhatsApp
              </motion.a>
            </div>
          </div>

          {/* RIGHT (Avatar and Name/Title) */}
          <div className="flex flex-col items-center md:items-end md:pr-10">
            <img
              src={avatarImg}
              alt="Md Dilkash"
              className="
               w-56 h-56
               sm:w-60 sm:h-60
               md:w-64 md:h-64
               rounded-full
               object-cover
               border border-white/20
               mb-4
               "
            />

            {/* NAME & TITLE */}
            <div className="text-center md:text-right">
              <h3 className="text-[0.95rem] font-medium tracking-tight text-white">
                Md Dilkash Alam
              </h3>
              <p className="text-[0.75rem] text-gray-400 tracking-wide mt-1">
                Full Stack Product Engineer
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT MODAL */}
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}
