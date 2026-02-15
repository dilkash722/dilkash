"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

import avatarImg from "@/assets/avtar.jpg";

/* ================= NAV ITEMS ================= */

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "how-i-work", label: "How I Work" },
  { id: "projects", label: "Projects" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact", modal: true },
];

/* ================= NAVBAR ================= */

export default function Navbar({ activeSection }) {
  const [open, setOpen] = useState(false);

  // 🔥 GLOBAL CONTACT TRIGGER
  const openContact = () => {
    window.dispatchEvent(new Event("open-contact"));
  };

  return (
    <nav className="fixed top-0 z-50 w-full bg-black/95 backdrop-blur-2xl">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">
          {/* ================= LEFT PROFILE ================= */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-3"
          >
            <Avatar className="h-10 w-10 border border-orange-500/80">
              <AvatarImage
                src={avatarImg}
                alt="Md Dilkash Alam"
                className="object-cover"
              />
              <AvatarFallback>MD</AvatarFallback>
            </Avatar>

            <div className="leading-snug">
              <h1 className="text-[15px] font-medium tracking-[0.01em] text-white">
                Md Dilkash Alam
              </h1>
              <p className="mt-[2px] text-[12px] tracking-[0.04em] text-gray-400">
                Founder & Lead Mentor, Nadilix
              </p>
            </div>
          </motion.div>

          {/* ================= DESKTOP MENU ================= */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) =>
              item.modal ? (
                <button
                  key={item.id}
                  onClick={openContact}
                  className="text-sm font-medium tracking-tight text-gray-400 hover:text-white transition-colors"
                >
                  {item.label}
                </button>
              ) : (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`text-sm font-medium tracking-tight transition-colors ${
                    activeSection === item.id
                      ? "text-orange-400"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {item.label}
                </a>
              ),
            )}
          </div>

          {/* ================= MOBILE MENU ================= */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                size="icon"
                className="md:hidden bg-white/10 text-white hover:bg-white/20 ring-1 ring-white/20"
              >
                <motion.div
                  animate={{ rotate: open ? 90 : 0, scale: open ? 0.9 : 1 }}
                  transition={{ duration: 0.2 }}
                >
                  {open ? <X size={20} /> : <Menu size={20} />}
                </motion.div>
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="p-0 bg-[#0a0a0a] border-l border-white/10 [&>button]:hidden"
            >
              <AnimatePresence>
                {open && (
                  <motion.div
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100%" }}
                    transition={{
                      type: "spring",
                      stiffness: 240,
                      damping: 28,
                    }}
                    className="h-full px-8 py-8"
                  >
                    {/* ===== MOBILE HEADER ===== */}
                    <div className="mb-12 flex items-center justify-between">
                      <div className="leading-tight">
                        <p className="text-lg font-semibold tracking-tight text-white">
                          Md Dilkash Alam
                        </p>
                        <p className="mt-[2px] text-sm tracking-[0.16em] text-gray-400">
                          Founder & Lead Mentor, Nadilix
                        </p>
                      </div>

                      <motion.button
                        onClick={() => setOpen(false)}
                        whileHover={{ rotate: 90, scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="rounded-md p-2 text-white hover:bg-white/10"
                      >
                        <X size={20} />
                      </motion.button>
                    </div>

                    {/* ===== MOBILE LINKS ===== */}
                    <div className="flex flex-col gap-7">
                      {navItems.map((item, index) =>
                        item.modal ? (
                          <motion.button
                            key={item.id}
                            onClick={() => {
                              setOpen(false);
                              openContact();
                            }}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.06 }}
                            className="text-lg font-medium tracking-tight text-gray-400 text-left hover:text-white"
                          >
                            {item.label}
                          </motion.button>
                        ) : (
                          <motion.a
                            key={item.id}
                            href={`#${item.id}`}
                            onClick={() => setOpen(false)}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.06 }}
                            className={`text-lg font-medium tracking-tight ${
                              activeSection === item.id
                                ? "text-orange-400"
                                : "text-gray-400 hover:text-white"
                            }`}
                          >
                            {item.label}
                          </motion.a>
                        ),
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
