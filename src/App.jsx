import { useEffect, useState } from "react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import Home from "@/pages/Home";
import About from "@/pages/About";
import Projects from "@/pages/Projects";
import Testimonials from "@/pages/Testimonial";
import HowIWork from "@/pages/HowIWork";

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
      { threshold: 0.6 }
    );

    sections.forEach((sec) => observer.observe(sec));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="scroll-smooth">
      <Navbar activeSection={activeSection} />

      <section id="home" className="min-h-screen border-b pt-20">
        <Home />
      </section>

      <section id="about" className="min-h-screen border-b">
        <About />
      </section>

      <section id="how-i-work" className="min-h-screen border-b">
        <HowIWork />
      </section>

      <section id="projects" className="min-h-screen border-b">
        <Projects />
      </section>

      <section id="testimonials" className="min-h-screen border-b">
        <Testimonials />
      </section>

      {/* ❌ Contact section REMOVED */}

      <Footer />
    </div>
  );
}
