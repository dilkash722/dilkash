"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Zap, ArrowRight } from "lucide-react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
} from "@/components/ui/sheet";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import avatarImg from "@/assets/avtar.jpg";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Work" },
  { id: "testimonials", label: "Vibe" },
  { id: "contact", label: "Connect", modal: true },
];

export default function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openContact = () => window.dispatchEvent(new Event("open-contact"));

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-700 ${
        scrolled
          ? "py-4 bg-[#050505]/90 backdrop-blur-2xl border-b border-white/5 shadow-2xl"
          : "py-8 bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12 flex items-center justify-between">
        {/* ================= BRANDING: ULTRA BOLD (HERO SYNC) ================= */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-4 group cursor-pointer"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-indigo-500 rounded-full blur-md opacity-20 group-hover:opacity-60 transition-opacity" />
            <Avatar className="h-11 w-11 border-2 border-zinc-800 group-hover:border-indigo-500 transition-all duration-500 shadow-xl">
              <AvatarImage src={avatarImg} className="object-cover" />
              <AvatarFallback className="bg-zinc-900 text-white font-black text-[10px]">
                MD
              </AvatarFallback>
            </Avatar>
          </div>
          <div className="flex flex-col leading-[0.9]">
            <span className="text-xl font-black uppercase tracking-tighter text-white">
              MD DILKASH
            </span>
            <span className="text-[9px] tracking-[0.4em] text-indigo-500 font-black uppercase mt-1">
              NADILIX FOUNDER
            </span>
          </div>
        </motion.div>

        {/* ================= DESKTOP NAV: CAPSULE STYLE ================= */}
        <div className="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/10 p-1.5 rounded-full backdrop-blur-3xl shadow-inner">
          {navItems.map(
            (item) =>
              !item.modal && (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`px-6 py-2 text-[11px] font-black uppercase tracking-[0.25em] transition-all relative rounded-full ${
                    activeSection === item.id
                      ? "text-white"
                      : "text-zinc-500 hover:text-white"
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="navActive"
                      className="absolute inset-0 bg-indigo-600 rounded-full -z-10 shadow-lg shadow-indigo-500/20"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                </a>
              ),
          )}
        </div>

        {/* ================= ACTION & MOBILE TOGGLE ================= */}
        <div className="flex items-center gap-4">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={openContact}
            className="hidden md:flex items-center gap-3 px-8 py-3.5 bg-white text-black rounded-full font-black uppercase text-[10px] tracking-[0.2em] hover:bg-indigo-600 hover:text-white transition-all duration-500 shadow-xl group"
          >
            LET'S TALK
            <ArrowUpRight
              size={16}
              className="group-hover:rotate-45 transition-transform"
              strokeWidth={3}
            />
          </motion.button>

          {/* MOBILE DRAWER: PROFESSIONAL RE-DESIGN */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <button className="p-3 bg-zinc-900/80 backdrop-blur-md border border-zinc-800 rounded-full text-white active:scale-90 transition-transform shadow-xl">
                <Menu size={24} strokeWidth={3} />
              </button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="bg-[#050505] border-l border-zinc-800 p-0 w-full flex flex-col overflow-hidden"
            >
              {/* Drawer Header with Close Icon */}
              <div className="p-8 flex justify-between items-center border-b border-white/5">
                <div className="flex items-center gap-3">
                  <Zap size={18} className="text-indigo-500 fill-indigo-500" />
                  <span className="text-[10px] font-black tracking-[0.4em] text-zinc-500 uppercase font-black">
                    Nadilix Menu
                  </span>
                </div>
                <SheetClose className="p-3 bg-zinc-900 border border-zinc-800 rounded-full text-white hover:bg-indigo-600 transition-colors">
                  <X size={24} strokeWidth={3} />
                </SheetClose>
              </div>

              {/* Drawer Navigation Links */}
              <div className="flex-1 flex flex-col justify-center px-10 gap-10">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                  >
                    <a
                      href={`#${item.id}`}
                      onClick={() => {
                        if (item.modal) openContact();
                        setIsOpen(false);
                      }}
                      className={`text-5xl font-black uppercase tracking-tighter transition-all flex items-center justify-between group ${
                        activeSection === item.id
                          ? "text-indigo-500"
                          : "text-white"
                      }`}
                    >
                      {item.label}
                      <ArrowRight
                        className={`opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all ${activeSection === item.id ? "opacity-100 translate-x-0" : ""}`}
                        size={32}
                      />
                    </a>
                  </motion.div>
                ))}
              </div>

              {/* Drawer Footer */}
              <div className="p-10 bg-zinc-950/50 border-t border-white/5">
                <p className="text-[10px] tracking-[0.5em] text-zinc-700 uppercase font-black mb-4 italic">
                  Social Channels
                </p>
                <div className="flex gap-8 text-xs font-black uppercase tracking-widest text-zinc-400">
                  <span className="hover:text-indigo-500 transition-colors">
                    In
                  </span>
                  <span className="hover:text-indigo-500 transition-colors">
                    Tw
                  </span>
                  <span className="hover:text-indigo-500 transition-colors">
                    Be
                  </span>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
