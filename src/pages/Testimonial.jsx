"use client";

import { motion } from "framer-motion";
import { User, Quote } from "lucide-react";

const testimonials = [
  {
    title: "School Website",
    sub: "Amity Indian Public School",
    client: "Md Salik Reza",
    feedback:
      "The website looks professional with clean UI and smooth performance across all devices.",
  },
  {
    title: "Guest House System",
    sub: "Booking & Operations",
    client: "Sonu Ahtasam",
    feedback:
      "Booking and guest management became very easy and efficient for daily operations.",
  },
  {
    title: "Cricket Score App",
    sub: "Match & Scoreboard",
    client: "Nikhra Yuva Club",
    feedback:
      "Live scoring works smoothly and the interface is easy to use for scorers.",
  },
  {
    title: "Food Delivery App",
    sub: "End-to-end ordering & management",
    client: "Md Aarif",
    feedback:
      "Online ordering increased sales and order handling became very smooth.",
  },
  {
    title: "Advocate Portfolio",
    sub: "Professional Website",
    client: "Advocate Abdul Subahn",
    feedback:
      "The portfolio gives a premium, trustworthy and professional impression.",
  },
  {
    title: "Inventory System",
    sub: "Stock Management",
    client: "Md Manouwwar",
    feedback:
      "Stock tracking and inventory reports became accurate and time-saving.",
  },
];

export default function Testimonials() {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  };

  return (
    <section
      id="testimonials"
      className="relative min-h-screen bg-[#050505] text-[#fafafa] py-24 md:py-40 overflow-hidden"
    >
      {/* HERO-SYNCED BACKGROUND GLOWS */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute top-1/2 right-[-10%] w-[500px] h-[500px] bg-indigo-900/20 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-zinc-800/30 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        {/* TOP LABEL - SYNC WITH HERO/ABOUT */}
        <motion.div {...fadeInUp} className="flex items-center gap-4 mb-12">
          <span className="h-[2px] w-12 bg-indigo-500" />
          <span className="text-[10px] md:text-xs uppercase tracking-[0.6em] font-black text-zinc-500">
            Client Feedback
          </span>
        </motion.div>

        {/* MAIN HEADING - ULTRA BOLD HERO STYLE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-24">
          <motion.div {...fadeInUp} className="lg:col-span-8">
            <h2 className="text-[12vw] md:text-[8.5vw] font-black leading-[0.85] tracking-tighter uppercase">
              CLIENT <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-zinc-700">
                REVIEWS.
              </span>
            </h2>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="lg:col-span-4 lg:pb-4 text-right"
          >
            <p className="text-zinc-500 text-sm md:text-base font-light uppercase tracking-widest leading-relaxed border-r-4 border-indigo-600 pr-6">
              Delivering reliable and production-ready web solutions.
            </p>
          </motion.div>
        </div>

        {/* TESTIMONIALS GRID - BENTO GLASS STYLE */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative p-10 bg-[#0c0c0c]/50 border border-zinc-800/80 rounded-[2.5rem] backdrop-blur-3xl transition-all duration-500 hover:border-indigo-500 shadow-2xl"
            >
              {/* QUOTE ICON */}
              <div className="mb-8 flex justify-between items-center">
                <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-xl group-hover:bg-indigo-600 transition-all duration-500">
                  <Quote
                    size={20}
                    className="text-indigo-500 group-hover:text-white"
                    fill="currentColor"
                  />
                </div>
                <span className="text-[9px] font-black uppercase tracking-widest text-zinc-600 group-hover:text-indigo-400 transition-colors">
                  Verified Result
                </span>
              </div>

              {/* FEEDBACK - SHARP TEXT */}
              <p className="text-zinc-100 text-lg md:text-xl font-medium leading-relaxed tracking-tight mb-8">
                "{item.feedback}"
              </p>

              {/* CLIENT INFO */}
              <div className="flex items-center gap-4 pt-8 border-t border-zinc-900">
                <div className="h-10 w-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-indigo-500/50 transition-colors">
                  <User
                    size={18}
                    className="text-zinc-500 group-hover:text-indigo-500"
                  />
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="text-sm font-black uppercase tracking-tighter text-white">
                    {item.client}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                    {item.title}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM IMPACT STATEMENT */}
        <motion.div
          {...fadeInUp}
          className="mt-32 p-12 border border-zinc-800 bg-[#0a0a0a] rounded-[3.5rem] text-center"
        >
          <h4 className="text-2xl md:text-4xl font-black tracking-tight text-white uppercase leading-none">
            Transforming ideas into{" "}
            <span className="text-indigo-500 underline decoration-4 underline-offset-[10px]">
              Digital Reality.
            </span>
          </h4>
        </motion.div>
      </div>
    </section>
  );
}
