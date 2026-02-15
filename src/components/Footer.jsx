"use client";

import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Twitter,
  ExternalLink,
  Code2,
  Cpu,
} from "lucide-react";

export default function Footer() {
  const socialLinks = [
    { icon: <Github size={18} />, href: "https://github.com", label: "GitHub" },
    {
      icon: <Linkedin size={18} />,
      href: "https://linkedin.com",
      label: "LinkedIn",
    },
    {
      icon: <Twitter size={18} />,
      href: "https://twitter.com",
      label: "Twitter",
    },
  ];

  return (
    <footer className="relative bg-black text-white pt-24 pb-12 overflow-hidden border-t border-white/5">
      {/* Subtle Glow Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-20">
          {/* LEFT: PERSONAL IDENTITY */}
          <div className="lg:col-span-5 text-center lg:text-left">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-4xl font-black tracking-tight mb-4"
            >
              Md Dilkash Alam<span className="text-orange-500">.</span>
            </motion.h2>

            <p className="text-orange-400 font-semibold uppercase tracking-[0.2em] text-xs mb-6">
              Founder · Nadilix
            </p>

            <p className="text-gray-400 text-lg max-w-md leading-relaxed mb-8 mx-auto lg:mx-0">
              Building structured software systems and guiding learners through
              practical, real-world development with clean architecture and
              production-ready workflows.
            </p>

            <div className="flex justify-center lg:justify-start gap-4">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-orange-500 hover:text-black hover:-translate-y-1 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* MIDDLE: CORE FOCUS */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start">
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">
              Focus Areas
            </h4>

            <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-gray-400">
              {[
                "Full Stack Development",
                "System Design",
                "Project-Based Learning",
                "Live Coding Sessions",
                "Clean Architecture",
                "Industry Workflow",
              ].map((skill) => (
                <div
                  key={skill}
                  className="flex items-center gap-2 text-sm hover:text-white transition-colors"
                >
                  <div className="w-1 h-1 bg-orange-500 rounded-full" />
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: CONTACT */}
          <div className="lg:col-span-3 flex flex-col items-center lg:items-end">
            <div className="w-full p-8 rounded-[2rem] bg-gradient-to-br from-white/[0.03] to-transparent border border-white/10 text-center lg:text-left">
              <p className="text-white font-bold mb-2">Let’s Connect</p>
              <p className="text-gray-500 text-sm mb-6">
                Open to collaborations, training, and structured development
                projects.
              </p>

              <a
                href="mailto:yourmail@example.com"
                className="inline-flex items-center gap-2 text-orange-500 font-bold hover:gap-3 transition-all"
              >
                Get in Touch <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM STRIP */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4 text-xs text-gray-500 uppercase tracking-widest font-medium">
            <span>Personal Portfolio</span>
            <span className="w-1 h-1 bg-gray-700 rounded-full" />
            <span>Md Dilkash Alam</span>
          </div>

          <div className="flex gap-8 text-xs text-gray-500 uppercase tracking-widest">
            <p className="flex items-center gap-2">
              <Code2 size={12} className="text-orange-500" /> Modern Stack
            </p>
            <p className="flex items-center gap-2">
              <Cpu size={12} className="text-orange-500" /> Optimized Systems
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
