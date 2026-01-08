"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import ContactModal from "@/components/ContactModal";
import ContactSuccess from "@/components/ContactSuccess";

export default function ContactController() {
  const [contactOpen, setContactOpen] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);
  const [userName, setUserName] = useState("");

  // 🔥 GLOBAL EVENT LISTENER (Navbar → Contact)
  useEffect(() => {
    const openContact = () => {
      setSuccessOpen(false);
      setContactOpen(true);
    };

    window.addEventListener("open-contact", openContact);
    return () => window.removeEventListener("open-contact", openContact);
  }, []);

  return (
    <>
      {/* ================= CONTACT MODAL ================= */}
      <ContactModal
        open={contactOpen}
        onClose={() => setContactOpen(false)}
        onSuccess={(name) => {
          setUserName(name);
          setContactOpen(false);
          setSuccessOpen(true);
        }}
      />

      {/* ================= SUCCESS MODAL ================= */}
      <AnimatePresence>
        {successOpen && (
          <ContactSuccess
            name={userName}
            onClose={() => setSuccessOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
