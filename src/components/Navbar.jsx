"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, ArrowUpRight, ArrowRight } from "lucide-react";
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
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "h-20 bg-[#050505]/90 backdrop-blur-2xl"
          : "h-20 md:h-24 bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl h-full px-4 sm:px-6 md:px-10 lg:px-12 flex items-center justify-between">
        {/* BRAND */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 md:gap-5"
        >
          <Avatar className="h-10 w-10 md:h-12 md:w-12 border border-zinc-800">
            <AvatarImage src={avatarImg} />
            <AvatarFallback>MD</AvatarFallback>
          </Avatar>

          <div className="flex flex-col leading-tight w-fit">
            <span className="text-sm md:text-xl font-black uppercase text-white">
              MD DILKASH
            </span>

            <span className="text-[9px] tracking-[0.2em] md:tracking-[0.3em] text-zinc-400 uppercase break-words">
              FOUNDER AT NADILIX
            </span>
          </div>
        </motion.div>

        {/* DESKTOP NAV (FIXED BREAKPOINT) */}
        <div className="hidden lg:flex items-center gap-2 bg-white/[0.02] border border-white/5 p-2 rounded-full backdrop-blur-3xl">
          {navItems
            .filter((item) => !item.modal)
            .map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`px-4 sm:px-5 md:px-6 py-2.5 md:py-3 text-[10px] md:text-xs font-black uppercase tracking-[0.12em] md:tracking-[0.2em] rounded-full transition-all duration-300 whitespace-nowrap ${
                  activeSection === item.id
                    ? "text-white bg-indigo-600"
                    : "text-zinc-500 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            ))}
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-3">
          {/* DESKTOP BUTTON */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={openContact}
            className="hidden md:flex items-center gap-2 px-4 md:px-5 py-2.5 md:py-3 bg-white text-black rounded-full text-[10px] md:text-xs font-black uppercase tracking-[0.15em] md:tracking-[0.2em] hover:bg-indigo-600 hover:text-white transition-all duration-300"
          >
            LET'S TALK
            <ArrowUpRight size={14} />
          </motion.button>

          {/* MOBILE DRAWER */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <button className="p-3 bg-zinc-900/80 border border-zinc-800 rounded-full text-white active:scale-90 transition">
                <Menu size={22} />
              </button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="bg-[#050505] border-l border-zinc-900 p-0 w-full flex flex-col"
            >
              {/* HEADER */}
              <div className="p-6 flex justify-between items-center border-b border-zinc-900">
                <div>
                  <p className="text-lg font-black text-white uppercase">
                    MD DILKASH
                  </p>
                  <p className="text-[9px] tracking-[0.3em] text-zinc-400 ">
                    Founder at Nadilix
                  </p>
                </div>

                <SheetClose className="p-3 bg-white rounded-full text-black active:scale-95">
                  <X size={20} />
                </SheetClose>
              </div>

              {/* LINKS */}
              <div className="flex-1 flex flex-col justify-center px-6 gap-6">
                {navItems.map((item, i) => (
                  <motion.a
                    key={i}
                    href={`#${item.id}`}
                    onClick={() => {
                      if (item.modal) openContact();
                      setIsOpen(false);
                    }}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className={`flex items-center justify-between text-3xl sm:text-4xl font-black uppercase tracking-tight transition-colors duration-300 group ${
                      activeSection === item.id
                        ? "text-indigo-500"
                        : "text-zinc-700 hover:text-white active:text-white"
                    }`}
                  >
                    <span>{item.label}</span>

                    {/* HOVER + MOBILE ACTIVE FIX */}
                    <ArrowRight
                      className={`transition-all duration-500 ${
                        activeSection === item.id
                          ? "opacity-100 translate-x-0 text-indigo-500"
                          : "opacity-0 -translate-x-6 group-hover:opacity-100 group-hover:translate-x-0 group-active:opacity-100 group-active:translate-x-0 text-white"
                      }`}
                      size={28}
                    />
                  </motion.a>
                ))}
              </div>

              {/* FOOTER */}
              <div className="p-6 border-t border-zinc-900 text-xs text-zinc-600">
                Nadilix • 2026
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
