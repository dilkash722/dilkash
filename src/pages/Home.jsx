"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MessageCircle,
  CheckCircle,
  ArrowRight,
  Code2,
  Rocket,
  Shield,
} from "lucide-react";
import ContactModal from "../components/ContactModal";
import avatarImg from "@/assets/avtar.jpg";

export default function Home() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-screen bg-black text-white overflow-hidden font-sans">
        {/* ORIGINAL BACKGROUND OVERLAY */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black via-black to-transparent z-[1]" />

        {/* LEFT GLOW */}
        <motion.div
          className="absolute -bottom-48 left-1/4 w-[520px] h-[520px] rounded-full
          bg-gradient-to-tr from-yellow-400/25 via-orange-500/20 to-transparent
          blur-[180px]"
          animate={{ x: [0, 80, 0], y: [0, -60, 0] }}
          transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* RIGHT GLOW */}
        <motion.div
          className="absolute -bottom-64 right-1/4 w-[480px] h-[480px] rounded-full
          bg-gradient-to-tr from-orange-500/20 to-transparent
          blur-[160px]"
          animate={{ x: [0, -100, 0], y: [0, -80, 0] }}
          transition={{ duration: 32, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 sm:pt-20 md:pt-24 pb-16 sm:pb-20">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* LEFT CONTENT */}
            <div className="lg:col-span-7 text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/30 bg-orange-500/5 text-orange-400 text-[10px] sm:text-xs font-semibold tracking-wide mb-6 sm:mb-8"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                </span>
                MD DILKASH · FOUNDER & LEAD MENTOR
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1] md:leading-[0.9] mb-5 sm:mb-6"
              >
                Nadilix
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-base sm:text-lg md:text-2xl text-gray-400 font-medium leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
              >
                Nadilix is a{" "}
                <span className="text-white">
                  Software Training and Development Centre
                </span>{" "}
                focused on practical learning, real projects, and
                production-ready systems.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="grid sm:grid-cols-2 gap-3 sm:gap-4 mb-10 max-w-lg mx-auto lg:mx-0 text-sm sm:text-base"
              >
                {[
                  {
                    icon: <Code2 size={18} />,
                    text: "Live Project Based Learning",
                  },
                  {
                    icon: <Rocket size={18} />,
                    text: "Modern Full Stack Dev",
                  },
                  {
                    icon: <Shield size={18} />,
                    text: "Industry Standard Workflow",
                  },
                  {
                    icon: <CheckCircle size={18} />,
                    text: "Deployment Ready Skills",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 text-gray-300"
                  >
                    <span className="text-orange-500">{item.icon}</span>
                    {item.text}
                  </div>
                ))}
              </motion.div>

              {/* BUTTONS */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <button
                  onClick={() => setContactOpen(true)}
                  className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-orange-500 hover:bg-orange-600 text-black font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Mail size={18} />
                  Enquire Now
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>

                <a
                  href="https://wa.me/917763937638"
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-semibold transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle size={18} className="text-green-400" />
                  WhatsApp Support
                </a>
              </motion.div>
            </div>

            {/* RIGHT IMAGE SECTION */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end mt-12 lg:mt-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative flex flex-col items-center justify-center"
              >
                <motion.div
                  className="absolute w-[380px] h-[380px] md:w-[500px] md:h-[500px] rounded-full bg-orange-500/20 blur-[120px]"
                  animate={{ x: [0, 40, -40, 0], y: [0, -30, 30, 0] }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                <motion.div
                  className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full border border-orange-500/20"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border border-white/10 shadow-2xl bg-neutral-900">
                  <img
                    src={avatarImg}
                    alt="Md Dilkash - Founder Nadilix"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>

                <div className="mt-6 text-center">
                  <p className="text-orange-500 font-semibold text-lg sm:text-xl tracking-tight">
                    Md Dilkash
                  </p>
                  <p className="text-white/60 text-[10px] sm:text-xs uppercase tracking-wider">
                    Founder · Nadilix Software Training
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* STATS STRIP */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-10 pt-6 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left"
          >
            {[
              { label: "Learning Model", val: "Project Based" },
              { label: "Core Focus", val: "Full Stack Development" },
              { label: "Workflow", val: "Industry Standard" },
              { label: "Mentorship", val: "Personal Guidance" },
            ].map((stat, i) => (
              <div key={i} className="space-y-1">
                <p className="text-orange-500 font-semibold text-lg md:text-xl">
                  {stat.val}
                </p>
                <p className="text-gray-500 text-xs uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}
