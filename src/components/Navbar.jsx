"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
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
  { id: "testimonials", label: "Reviews" },
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
      className={`fixed top-0 z-50 w-full transition-all duration-700 ease-in-out ${
        scrolled
          ? "h-20 bg-[#050505]/90 backdrop-blur-2xl ..."
          : "h-28 md:h-36 bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl h-full px-6 md:px-12 flex items-center justify-between">
        {/* ================= BRANDING: MATCHING HERO TYPO (ULTRA BOLD) ================= */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-5 group cursor-pointer"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-indigo-600 rounded-full blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
            <Avatar className="h-12 w-12 md:h-14 md:w-14 border-2 border-zinc-800 group-hover:border-indigo-500 transition-all duration-500">
              <AvatarImage src={avatarImg} className="object-cover" />
              <AvatarFallback className="bg-zinc-900 text-white font-black text-xs">
                MD
              </AvatarFallback>
            </Avatar>
          </div>
          <div className="flex flex-col leading-[0.85]">
            <span className="text-xl md:text-2xl font-black uppercase tracking-tighter text-white">
              MD DILKASH
            </span>
            <span className="text-[10px] tracking-[0.5em] text-indigo-500 font-light  uppercase mt-1">
              NADILIX FOUNDER
            </span>
          </div>
        </motion.div>

        {/* ================= DESKTOP NAV: HERO SYNCED TYPOGRAPHY ================= */}
        <div className="hidden md:flex items-center gap-2 bg-white/[0.02] border border-white/5 p-2 rounded-full backdrop-blur-3xl">
          {navItems.map(
            (item) =>
              !item.modal && (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`px-8 py-3 text-[11px] font-black uppercase tracking-[0.3em] transition-all relative rounded-full ${
                    activeSection === item.id
                      ? "text-white"
                      : "text-zinc-500 hover:text-white"
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="navActive"
                      className="absolute inset-0 bg-indigo-600 rounded-full -z-10 shadow-[0_0_20px_rgba(79,70,229,0.3)]"
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

        {/* ================= ACTION & MOBILE TRIGGER ================= */}
        <div className="flex items-center gap-5">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={openContact}
            className="hidden md:flex items-center gap-4 px-10 py-4 bg-white text-black rounded-full font-black uppercase text-[11px] tracking-[0.3em] hover:bg-indigo-600 hover:text-white transition-all duration-500 shadow-2xl group"
          >
            LET'S TALK
            <ArrowUpRight
              size={18}
              className="group-hover:rotate-45 transition-transform"
              strokeWidth={3}
            />
          </motion.button>

          {/* MOBILE DRAWER: RE-MATCHED TO HERO STYLE */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <button className="p-4 bg-zinc-900/80 border border-zinc-800 rounded-full text-white shadow-xl active:scale-90 transition-transform">
                <Menu size={26} strokeWidth={3} />
              </button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="bg-[#050505] border-l border-zinc-900 p-0 w-full flex flex-col focus:outline-none"
            >
              {/* Drawer Header */}
              <div className="p-10 flex justify-between items-center border-b border-zinc-900/50">
                <div className="flex flex-col">
                  <span className="text-xl font-black text-white tracking-tighter uppercase">
                    MD DILKASH
                  </span>
                  <span className="text-[9px] tracking-[0.4em] text-indigo-500 font-black uppercase">
                    Menu System
                  </span>
                </div>

                <SheetClose className="group relative p-4 bg-white rounded-full text-black hover:bg-indigo-500 hover:text-white transition-all duration-500 active:scale-95">
                  <X size={24} strokeWidth={3} />
                </SheetClose>
              </div>

              {/* Drawer Links: GIANT HERO STYLE */}
              <div className="flex-1 flex flex-col justify-center px-8 md:px-16 gap-6 md:gap-10">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.id || i}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: i * 0.1,
                      duration: 0.8,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <a
                      href={`#${item.id}`}
                      onClick={() => {
                        if (item.modal) openContact();
                        setIsOpen(false);
                      }}
                      className={`text-[12vw] md:text-[6vw] font-black uppercase tracking-tighter transition-all flex items-center justify-between group leading-[0.85] ${
                        activeSection === item.id
                          ? "text-indigo-500"
                          : "text-zinc-800 hover:text-white"
                      }`}
                    >
                      <span>{item.label}</span>
                      {/* Fixed Arrow: Mobile pe bhi dikhega aur animate hoga */}
                      <ArrowRight
                        className={`
              transition-all duration-700 ease-[0.16, 1, 0.3, 1]
              /* Mobile Styles */
              w-8 h-8 
              /* Desktop Styles */
              md:w-16 md:h-16
              /* Active vs Hover Animation */
              ${
                activeSection === item.id
                  ? "opacity-100 translate-x-0 text-indigo-500"
                  : "opacity-0 -translate-x-10 group-hover:opacity-100 group-hover:translate-x-0 text-white"
              }
            `}
                      />
                    </a>
                  </motion.div>
                ))}
              </div>

              {/* Drawer Footer */}
              <div className="p-10 md:p-16 bg-[#080808] border-t border-zinc-900/50">
                <p className="text-[10px] tracking-[0.6em] text-zinc-700 uppercase font-black mb-8">
                  Nadilix Ecosystem • 2026
                </p>
                <div className="flex gap-8 text-[11px] font-black uppercase tracking-[0.2em] text-zinc-500">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    className="hover:text-indigo-500 transition-colors underline decoration-indigo-500/20 underline-offset-4"
                  >
                    Linkedin
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    className="hover:text-indigo-500 transition-colors underline decoration-indigo-500/20 underline-offset-4"
                  >
                    Instagram
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
