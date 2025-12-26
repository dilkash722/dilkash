"use client";

import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import {
  Hand,
  Mail,
  FolderOpen,
  Code2,
  Server,
  Database,
  Cloud,
} from "lucide-react";
import avatarImg from "@/assets/avtar.jpg";

export default function Home() {
  return (
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
          <p
            className="
              flex items-center gap-2
              text-[10px]
              uppercase
              tracking-[0.36em]
              text-orange-400
              mb-6
              font-medium
            "
          >
            <Hand size={12} />
            <Typewriter
              words={["Hello,", "I’m Md Dilkash"]}
              loop={false}
              cursor
            />
          </p>

          {/* HERO HEADING */}
          <h1
            className="
              text-[2.1rem]
              sm:text-[2.6rem]
              md:text-[3.4rem]
              lg:text-[4.2rem]
              xl:text-[5.4rem]
              font-extrabold
              tracking-[-0.045em]
              leading-[1.1]
              md:leading-[1.02]
              mb-8
              whitespace-normal
              md:whitespace-nowrap
            "
          >
            Web & Software
            <br />
            <span className="block text-orange-400">Systems Developer</span>
          </h1>

          {/* TAGLINE (BALANCED WITH HEADING) */}
          <p
            className="
              max-w-xl
              text-[0.95rem]
              sm:text-[1.05rem]
              md:text-[1.15rem]
              font-normal
              text-gray-300
              leading-[1.8]
              mb-8
            "
          >
            <Typewriter
              words={[
                "Building systems, not just websites",
                "End-to-end web & software systems",
                "Business-focused digital solutions",
              ]}
              loop
              cursor
              cursorStyle="__"
            />
          </p>

          {/* DESCRIPTION */}
          <p
            className="
              max-w-xl
              text-gray-400
              text-[0.9rem]
              sm:text-[0.95rem]
              leading-[1.9]
              font-normal
              mb-14
            "
          >
            I design and build end-to-end web & software systems that help
            businesses run smoothly, from clean UI to reliable, production-ready
            backends.
          </p>

          {/* SKILL CARDS */}
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
                sub2: "Node.js, Express, APIs, Python, AI",
                icon: Server,
              },
              {
                title: "Database Design",
                sub1: "Structured & reliable data",
                sub2: "MongoDB, MySQL, PostgreSQL",
                icon: Database,
              },
              {
                title: "Deployment & Cloud",
                sub1: "Production-ready delivery",
                sub2: "CI/CD, VPS, Vercel, GitHub, Cloud",
                icon: Cloud,
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="
                  p-5 rounded-2xl
                  bg-transparent
                  border border-white/40
                  ring-1 ring-white/10
                  hover:border-orange-400/60
                  transition-all
                "
              >
                <div className="flex items-center gap-2 mb-3">
                  <item.icon className="w-4 h-4 text-orange-400" />
                  <h3
                    className="
                      text-[0.95rem]
                      font-medium
                      tracking-tight
                    "
                  >
                    {item.title}
                  </h3>
                </div>

                <p className="text-[0.85rem] text-gray-300 leading-[1.6]">
                  {item.sub1}
                </p>
                <p className="text-[0.75rem] text-gray-400 mt-2 leading-[1.65]">
                  {item.sub2}
                </p>
              </motion.div>
            ))}
          </div>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.a
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="
                inline-flex items-center justify-center gap-2
                px-9 py-3.5
                rounded-lg
                bg-orange-500 text-black
                text-[0.85rem]
                font-medium
                tracking-wide
              "
            >
              <Mail size={17} />
              Contact Me
            </motion.a>

            <motion.a
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="
                inline-flex items-center justify-center gap-2
                px-9 py-3.5
                rounded-lg
                border border-white/40
                ring-1 ring-white/20
                text-[0.85rem]
                font-medium
                tracking-wide
                hover:bg-white/5 hover:border-orange-400/60
              "
            >
              <FolderOpen size={17} />
              View Projects
            </motion.a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col items-center md:items-end md:translate-x-[-40px]">
          <div className="relative mb-3">
            <div className="absolute inset-0 rounded-full bg-orange-500/20 blur-3xl" />
            <img
              src={avatarImg}
              alt="Md Dilkash"
              className="relative z-10 w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full object-cover border border-white/20"
            />
          </div>

          <div className="md:-ml-6 text-center md:text-right">
            <h3 className="text-[0.95rem] font-medium tracking-tight">
              Md Dilkash
            </h3>
            <p className="text-[0.75rem] text-gray-400 tracking-wide">
              Web & Software Systems Developer
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
