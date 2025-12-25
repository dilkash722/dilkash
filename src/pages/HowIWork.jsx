"use client";

import { motion } from "framer-motion";
import {
  ClipboardCheck,
  Palette,
  Monitor,
  Cpu,
  Bug,
  Database,
  CloudUpload,
  Headset,
  FileText,
  GitBranch,
  ShieldCheck,
  Cloud,
  MonitorCheck,
  CheckCircle,
  KeyRound,
  Boxes,
  Braces,
} from "lucide-react";

const steps = [
  {
    step: "STEP 01",
    title: "Requirement Analysis",
    desc: "Business goals, functional requirements, and technical scope definition.",
    icon: ClipboardCheck,
    tools: [
      { name: "Documentation", icon: FileText },
      { name: "System Flow", icon: GitBranch },
    ],
  },
  {
    step: "STEP 02",
    title: "System & UI Design",
    desc: "Scalable architecture and clean, user-focused interface design.",
    icon: Palette,
    tools: [
      { name: "UI Design", icon: Palette },
      { name: "UX Planning", icon: MonitorCheck },
    ],
  },
  {
    step: "STEP 03",
    title: "Frontend Development",
    desc: "Responsive, performant and SEO-optimized user interfaces.",
    icon: Monitor,
    tools: [
      { name: "React.js", icon: Monitor },
      { name: "Next.js", icon: CloudUpload },
      { name: "TypeScript", icon: Braces },
    ],
  },
  {
    step: "STEP 04",
    title: "Backend Development",
    desc: "Secure APIs, authentication and core business logic.",
    icon: Cpu,
    tools: [
      { name: "Node.js", icon: Cpu },
      { name: "REST APIs", icon: GitBranch },
      { name: "Auth", icon: KeyRound },
      { name: "Security", icon: ShieldCheck },
    ],
  },
  {
    step: "STEP 05",
    title: "Database Engineering",
    desc: "Reliable and scalable data models with integrity and performance.",
    icon: Database,
    tools: [
      { name: "MySQL", icon: Database },
      { name: "PostgreSQL", icon: Database },
      { name: "MongoDB", icon: Boxes },
    ],
  },
  {
    step: "STEP 06",
    title: "Testing & QA",
    desc: "Quality assurance, security validation and stability testing.",
    icon: ShieldCheck,
    tools: [
      { name: "Bug Fix", icon: Bug },
      { name: "Security Review", icon: ShieldCheck },
    ],
  },
  {
    step: "STEP 07",
    title: "Deployment & Release",
    desc: "Production deployment with versioning and environment control.",
    icon: CloudUpload,
    tools: [
      { name: "Cloud Hosting", icon: Cloud },
      { name: "CI / CD", icon: GitBranch },
    ],
  },
  {
    step: "STEP 08",
    title: "Maintenance & Support",
    desc: "Monitoring, updates and long-term system stability.",
    icon: Headset,
    tools: [
      { name: "Monitoring", icon: MonitorCheck },
      { name: "Updates", icon: ShieldCheck },
    ],
  },
];

export default function Methodology() {
  return (
    <section className="relative min-h-screen bg-black text-white flex items-center">
      <div className="max-w-7xl mx-auto px-6 pt-16 md:pt-20 pb-20 md:pb-24">
        <div className="ml-auto max-w-6xl">
          <p className="text-[11px] uppercase tracking-[0.25em] text-orange-400 mb-4">
            Methodology
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight leading-[1.15] mb-6">
            Project <br />
            <span className="text-orange-400">Methodology</span>
          </h1>

          <p className="max-w-3xl text-gray-300 text-sm sm:text-base leading-relaxed mb-12">
            A structured, professional development workflow followed to deliver
            secure, scalable and production-ready software systems.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
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
                    w-full                 /* 📱 mobile full width */
                    lg:max-w-[340px]       /* 💻 desktop same */
                    p-5 rounded-2xl
                    bg-transparent         /* ✅ transparent card */
                    border border-white/40
                    ring-1 ring-white/10
                    transition-all
                    hover:border-orange-400/50
                  "
                >
                  <p className="text-[11px] uppercase tracking-widest text-orange-400 mb-2">
                    {step.step}
                  </p>

                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="w-4 h-4 text-orange-400" />
                    <h3 className="text-base font-semibold">{step.title}</h3>
                  </div>

                  <p className="text-sm text-gray-300 mb-4">{step.desc}</p>

                  <div className="flex flex-wrap gap-2">
                    {step.tools.map((tool, i) => {
                      const ToolIcon = tool.icon;
                      return (
                        <div
                          key={i}
                          className="
                            flex items-center gap-2
                            rounded-full
                            border border-white/15
                            px-3 py-1
                            text-xs text-gray-300
                          "
                        >
                          <ToolIcon className="w-4 h-4 text-orange-400" />
                          {tool.name}
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
