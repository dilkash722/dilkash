"use client";

import { motion } from "framer-motion";
import { Code2, BarChart3, GraduationCap } from "lucide-react";

export default function About() {
  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden flex items-center">
      {/* TOP YELLOW / ORANGE GLOW */}
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

      {/* BLACK FADE TO BOTTOM */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black z-[1]" />

      {/* SUBTLE NOISE */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.04)_1px,transparent_0)] bg-[size:24px_24px] opacity-[0.08]" />

      {/* CONTENT */}
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
          About
        </p>

        {/* HEADING */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight leading-[1.15] mb-6">
          Know More <br />
          <span className="text-orange-400">About Me</span>
        </h1>

        {/* DESCRIPTION */}
        <p className="max-w-3xl text-gray-300 text-sm sm:text-base leading-relaxed mb-12">
          I am a passionate{" "}
          <span className="text-white font-medium">
            Full Stack Software Engineer
          </span>{" "}
          focused on building modern, scalable, and high-performance web
          applications. I specialize in turning ideas into reliable,
          user-friendly digital products using production-ready technologies and
          best development practices.
        </p>

        {/* INFO CARDS — SAME AS PROJECTS */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mb-12">
          {[
            {
              title: "Full Stack Development",
              sub1: "Professional Course",
              sub2: "Pentagon Space, Bangalore",
              icon: Code2,
            },
            {
              title: "Data Analytics",
              sub1: "Certification Program",
              sub2: "GeeksforGeeks",
              icon: BarChart3,
            },
            {
              title: "Education",
              sub1: "MCA (Pursuing)",
              sub2: "Manipal University Jaipur",
              icon: GraduationCap,
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{
                y: -8,
                boxShadow: "0 0 40px rgba(255,140,0,0.25)",
              }}
              className="
                p-6 rounded-2xl
                border border-white/40 ring-1 ring-white/10
                bg-transparent
                transition-all
                hover:border-orange-400/50
              "
            >
              {/* TITLE WITH ICON (ONLY ADDITION) */}
              <div className="flex items-center gap-2 mb-1">
                <item.icon className="w-4 h-4 text-orange-400" />
                <h3 className="text-base sm:text-lg font-semibold tracking-tight">
                  {item.title}
                </h3>
              </div>

              <p className="text-sm text-gray-300">{item.sub1}</p>
              <p className="text-xs text-gray-400 mt-2">{item.sub2}</p>
            </motion.div>
          ))}
        </div>

        {/* EXTRA EDUCATION */}
        <p className="max-w-3xl text-gray-400 text-sm sm:text-base leading-relaxed">
          I am currently pursuing{" "}
          <span className="text-white font-medium">
            Master of Computer Applications (MCA)
          </span>{" "}
          and have completed my{" "}
          <span className="text-white font-medium">
            Bachelor of Computer Applications (BCA)
          </span>{" "}
          along with{" "}
          <span className="text-white font-medium">
            Intermediate in Science (Mathematics)
          </span>
          . This academic foundation, combined with hands-on training, enables
          me to build reliable and production-ready software solutions.
        </p>
      </div>
    </section>
  );
}
