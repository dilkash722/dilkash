"use client";

import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { Hand } from "lucide-react";
import avatarImg from "@/assets/avtar.jpg";
import {
  Code2,
  Database,
  Server,
  Braces,
  Cpu,
  Wind,
  Mail,
  FolderOpen,
  FileCode2,
  Github,
  Cloud,
} from "lucide-react";

const skills = [
  { name: "Next.js", icon: Code2 },
  { name: "HTML & CSS", icon: FileCode2 },
  { name: "Tailwind CSS", icon: Wind },
  { name: "React.js", icon: Braces },
  { name: "JavaScript", icon: Cpu },
  { name: "TypeScript", icon: Braces },

  // backend
  { name: "Node.js", icon: Server },
  { name: "Express.js", icon: Server },

  // database
  { name: "MongoDB", icon: Database },
  { name: "MySQL", icon: Database },
  { name: "PostgreSQL", icon: Database },

  // tools / deployment
  { name: "GitHub", icon: Github },
  { name: "Vercel", icon: Cloud },
];

export default function Home() {
  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* PURE BLACK TOP OVERLAY */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black via-black to-transparent z-[1]" />

      {/* BOTTOM YELLOW / ORANGE GLOW */}
      <motion.div
        className="absolute -bottom-48 left-1/4 w-[520px] h-[520px] rounded-full
                   bg-gradient-to-tr from-yellow-400/25 via-orange-500/20 to-transparent
                   blur-[180px] z-0"
        animate={{ x: [0, 80, 0], y: [0, -60, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute -bottom-64 right-1/4 w-[480px] h-[480px] rounded-full
                   bg-gradient-to-tr from-orange-500/20 to-transparent
                   blur-[160px] z-0"
        animate={{ x: [0, -100, 0], y: [0, -80, 0] }}
        transition={{ duration: 32, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* SUBTLE NOISE */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.04)_1px,transparent_0)] bg-[size:24px_24px] opacity-[0.08]" />

      {/* CONTENT */}
      <div
        className="
          relative z-10
          max-w-7xl mx-auto px-6
          pt-3 md:pt-4
          pb-14 md:pb-16
          grid grid-cols-1 md:grid-cols-2
          gap-12 md:gap-14
          items-center
        "
      >
        {/* LEFT */}
        <div>
          {/* LABEL */}
          <p className="text-[11px] uppercase tracking-[0.25em] text-orange-400 mb-4 flex items-center gap-2">
            <Hand size={14} className="text-orange-400" />
            <Typewriter
              words={["Hello ,", "I’m Md Dilkash"]}
              loop={false}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={40}
              delaySpeed={900}
            />
          </p>

          {/* HEADING */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight leading-[1.15] mb-5">
            Full Stack <br />
            <span className="text-orange-400">Software Engineer</span>
          </h1>

          {/* ROLE */}
          <p className="text-base sm:text-lg md:text-xl font-medium text-gray-300 mb-6">
            <Typewriter
              words={[
                "Frontend Engineer",
                "Backend Engineer",
                "Full Stack Software Engineer",
              ]}
              loop
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1200}
            />
          </p>

          {/* DESCRIPTION */}
          <p className="max-w-xl text-gray-400 text-sm sm:text-base leading-relaxed mb-9">
            I build modern, scalable and high-performance web applications with
            clean UI and production-ready backend systems.
          </p>

          {/* SKILLS */}
          <div className="flex flex-wrap gap-3 sm:gap-4 mb-10">
            {skills.map((skill) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  whileHover={{ y: -5, scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 240 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl
                             bg-white/5 border border-white/10
                             text-gray-300 hover:text-white
                             hover:border-orange-400/50"
                >
                  <Icon size={16} className="text-orange-400" />
                  <span className="text-xs sm:text-sm font-medium tracking-tight">
                    {skill.name}
                  </span>
                </motion.div>
              );
            })}
          </div>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.a
              whileHover={{
                y: -4,
                boxShadow: "0 18px 40px rgba(249,115,22,0.35)",
              }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="inline-flex items-center justify-center gap-2
                         px-8 py-3 rounded-lg bg-orange-500 text-black
                         text-sm font-medium tracking-tight"
            >
              <Mail size={18} />
              Contact Me
            </motion.a>

            <motion.a
              whileHover={{
                y: -4,
                boxShadow: "0 18px 40px rgba(255,255,255,0.15)",
              }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="inline-flex items-center justify-center gap-2
                        px-8 py-3 rounded-lg
                        border border-white/40 ring-1 ring-white/20
                       text-white text-sm font-medium tracking-tight
                       hover:bg-white/5 hover:border-orange-400/60"
            >
              <FolderOpen size={18} />
              View Projects
            </motion.a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right">
          <div className="relative mb-4">
            <div className="absolute inset-0 rounded-full bg-orange-500/20 blur-3xl" />
            <img
              src={avatarImg}
              alt="Md Dilkash"
              className="relative z-10 w-52 h-52 sm:w-56 sm:h-56 md:w-72 md:h-72
                         rounded-full object-cover border border-white/20"
            />
          </div>

          <h3 className="text-base sm:text-lg font-semibold tracking-tight">
            Md Dilkash
          </h3>
          <p className="text-xs sm:text-sm text-gray-400">
            Full Stack Software Engineer
          </p>
        </div>
      </div>
    </section>
  );
}
