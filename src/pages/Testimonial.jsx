"use client";

import { motion } from "framer-motion";
import { User, Quote } from "lucide-react";

const testimonials = [
  {
    title: "School Website",
    client: "Md Salik Reza",
    feedback:
      "The website looks professional with clean UI and smooth performance across all devices.",
  },
  {
    title: "Guest House System",
    client: "Sonu Ahtasam",
    feedback: "Booking and guest management became very easy and efficient.",
  },
  {
    title: "Cricket Score App",
    client: "Nikhra Yuva Club",
    feedback: "Live scoring works smoothly and is easy to use.",
  },
  {
    title: "Food Delivery App",
    client: "Md Aarif",
    feedback: "Ordering and management became simple and efficient.",
  },
  {
    title: "Advocate Portfolio",
    client: "Advocate Abdul Subahn",
    feedback:
      "The website gives a strong professional and trustworthy impression.",
  },
  {
    title: "Inventory System",
    client: "Md Manouwwar",
    feedback: "Stock tracking became accurate and time-saving.",
  },
];

export default function Testimonials() {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  return (
    <section
      id="testimonials"
      className="relative min-h-screen bg-[#050505] text-[#fafafa] py-24 md:py-40 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute top-1/2 right-[-10%] w-[500px] h-[500px] bg-indigo-900/20 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-zinc-800/30 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        {/* Label */}
        <motion.div {...fadeInUp} className="flex items-center gap-4 mb-12">
          <span className="h-[2px] w-12 bg-indigo-500" />
          <span className="text-[10px] md:text-xs uppercase tracking-[0.6em] font-black text-zinc-500">
            Client Feedback
          </span>
        </motion.div>

        {/* Heading (MATCHED) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-16">
          <motion.div {...fadeInUp} className="lg:col-span-8">
            <h2 className="text-[12vw] md:text-[8vw] font-black leading-[0.8] tracking-tighter uppercase">
              CLIENT <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/20">
                REVIEWS
              </span>
            </h2>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="lg:col-span-4"
          >
            <p className="text-zinc-500 text-sm md:text-base font-light uppercase tracking-widest leading-relaxed border-l-2 border-indigo-500 pl-6">
              Real feedback from real projects.
            </p>
          </motion.div>
        </div>

        {/* Clean Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              className="p-6 border border-zinc-800 rounded-xl bg-transparent hover:border-indigo-500/40 transition"
            >
              {/* Quote */}
              <Quote size={16} className="text-indigo-500 mb-4" />

              {/* Text */}
              <p className="text-zinc-300 text-sm md:text-base leading-relaxed mb-6">
                {item.feedback}
              </p>

              {/* User */}
              <div className="flex items-center gap-3">
                <User size={16} className="text-zinc-500" />
                <div>
                  <p className="text-white text-sm font-medium">
                    {item.client}
                  </p>
                  <p className="text-zinc-500 text-xs">{item.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
