"use client";

import { useEffect, useState } from "react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import Home from "@/pages/Home";
import About from "@/pages/About";
import Projects from "@/pages/Projects";
import Testimonials from "@/pages/Testimonial";
import HowIWork from "@/pages/HowIWork";

import ContactController from "@/components/ContactController";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 },
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative bg-[#050505] text-[#fafafa] min-h-screen overflow-x-hidden scroll-smooth">
      {/* Global Background Layer */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-zinc-900/40 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-5%] right-[-5%] w-[40%] h-[40%] bg-zinc-800/20 blur-[100px] rounded-full" />
      </div>

      <Navbar activeSection={activeSection} />

      <section id="home" className="min-h-screen pt-28">
        <Home />
      </section>

      <section id="about" className="min-h-screen border-t border-zinc-900/50">
        <About />
      </section>

      <section
        id="how-i-work"
        className="min-h-screen border-t border-zinc-900/50"
      >
        <HowIWork />
      </section>

      <section
        id="projects"
        className="min-h-screen border-t border-zinc-900/50"
      >
        <Projects />
      </section>

      <section
        id="testimonials"
        className="min-h-screen border-t border-zinc-900/50"
      >
        <Testimonials />
      </section>

      <Footer />
      <ContactController />
    </div>
  );
}
