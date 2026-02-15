"use client";

import { motion } from "framer-motion";
import {
  Presentation,
  Code2,
  ClipboardCheck,
  Rocket,
  SearchCheck,
  CloudUpload,
} from "lucide-react";

const trainingSteps = [
  {
    step: "01",
    title: "Whiteboard Explanation",
    desc: "Concept clarity through structured whiteboard sessions before implementation.",
    icon: Presentation,
  },
  {
    step: "02",
    title: "Live Coding Sessions",
    desc: "Real-time coding demonstrations with step-by-step practical execution.",
    icon: Code2,
  },
  {
    step: "03",
    title: "Hands-On Practice",
    desc: "Students implement tasks independently to strengthen understanding.",
    icon: ClipboardCheck,
  },
  {
    step: "04",
    title: "Project Development",
    desc: "Mini and major projects aligned with real-world industry workflow.",
    icon: Rocket,
  },
  {
    step: "05",
    title: "Code Review & Guidance",
    desc: "Structured feedback focusing on clean architecture and scalability.",
    icon: SearchCheck,
  },
  {
    step: "06",
    title: "Deployment Training",
    desc: "Learning how to deploy and manage applications in production environments.",
    icon: CloudUpload,
  },
];

export default function Methodology() {
  return (
    <section className="relative min-h-screen bg-black text-white flex items-center">
      <div className="max-w-7xl mx-auto px-6 pt-16 md:pt-20 pb-20 md:pb-24">
        <p className="text-[11px] uppercase tracking-[0.25em] text-orange-400 mb-4">
          Training Approach
        </p>

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
          Our <span className="text-orange-400">Approach</span>
        </h1>

        <p className="max-w-3xl text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed mb-14">
          A structured training model focused on concept clarity, live coding,
          hands-on execution, and real project development under guided
          mentorship.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainingSteps.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{
                  y: -8,
                  boxShadow: "0 0 40px rgba(255,140,0,0.25)",
                }}
                className="
                  p-8
                  rounded-2xl
                  border border-white/30
                  ring-1 ring-white/10
                  transition-all
                  hover:border-orange-400/60
                "
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="w-6 h-6 text-orange-400" />
                  <h3 className="text-lg md:text-xl font-semibold tracking-tight">
                    {item.title}
                  </h3>
                </div>

                <p className="text-gray-300 text-base leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
