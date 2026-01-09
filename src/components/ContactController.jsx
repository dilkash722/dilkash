"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import ContactModal from "@/components/ContactModal";
import ContactSuccess from "@/components/ContactSuccess";

export default function ContactController() {
  const [contactOpen, setContactOpen] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);
  const [userName, setUserName] = useState("");

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
      {/* CONTACT MODAL */}
      <AnimatePresence mode="wait">
        {contactOpen && (
          <ContactModal
            open
            onClose={() => setContactOpen(false)}
            onSuccess={(name) => {
              setUserName(name);
              setContactOpen(false); // close first
              setSuccessOpen(true); // ⚡ instant success (no delay)
            }}
          />
        )}
      </AnimatePresence>

      {/* SUCCESS MODAL */}
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
