"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { flushSync } from "react-dom";

import ContactModal from "@/components/ContactModal";
import ContactSuccess from "@/components/ContactSuccess";

export default function ContactController() {
  const [contactOpen, setContactOpen] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);
  const [userName, setUserName] = useState("");

  const successTimerRef = useRef(null);

  useEffect(() => {
    const openContact = () => {
      setSuccessOpen(false);
      setContactOpen(true);
    };

    window.addEventListener("open-contact", openContact);
    return () => window.removeEventListener("open-contact", openContact);
  }, []);

  const handleSuccess = (name) => {
    setUserName(name);

    // FORCE success modal to render first (critical for mobile)
    flushSync(() => {
      setSuccessOpen(true);
    });

    // now safely close contact modal
    setContactOpen(false);
  };

  // auto close AFTER success is mounted
  useEffect(() => {
    if (!successOpen) return;

    successTimerRef.current = setTimeout(() => {
      setSuccessOpen(false);
    }, 8000);

    return () => {
      clearTimeout(successTimerRef.current);
      successTimerRef.current = null;
    };
  }, [successOpen]);

  const handleCloseSuccess = () => {
    clearTimeout(successTimerRef.current);
    successTimerRef.current = null;
    setSuccessOpen(false);
  };

  return (
    <>
      <AnimatePresence>
        {contactOpen && (
          <ContactModal
            open
            onClose={() => setContactOpen(false)}
            onSuccess={handleSuccess}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {successOpen && (
          <ContactSuccess name={userName} onClose={handleCloseSuccess} />
        )}
      </AnimatePresence>
    </>
  );
}
