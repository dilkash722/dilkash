"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  X,
  User,
  Mail,
  Phone,
  Briefcase,
  MessageSquare,
  Send,
  Loader2,
} from "lucide-react";

import { validateContactForm } from "@/utils/validateForm";
import {
  Select as ShadcnSelect,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

export default function ContactModal({ open, onClose, onSuccess }) {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const handleChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validation = validateContactForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { ...formData, time: new Date().toLocaleString() },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      onClose();
      onSuccess?.(formData.name);
    } catch (err) {
      console.error("EmailJS Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[50] flex items-center justify-center bg-black overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* ===== PROJECTS STYLE BG ===== */}
          <motion.div
            className="absolute -bottom-48 left-1/4 w-[520px] h-[520px] rounded-full
            bg-gradient-to-tr from-yellow-400/30 via-orange-500/25 to-transparent
            blur-[180px]"
            animate={{ x: [0, 80, 0], y: [0, -60, 0] }}
            transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.div
            className="absolute -bottom-64 right-1/4 w-[480px] h-[480px] rounded-full
            bg-gradient-to-tr from-orange-500/25 to-transparent
            blur-[160px]"
            animate={{ x: [0, -100, 0], y: [0, -80, 0] }}
            transition={{ duration: 32, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* FADE + NOISE */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.04)_1px,transparent_0)] bg-[size:24px_24px] opacity-[0.08]" />

          {/* ===== MODAL ===== */}
          <motion.div
            initial={{ y: 40, scale: 0.96, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 40, scale: 0.96, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="relative z-10 w-full max-w-4xl mx-4 rounded-2xl
            bg-black/70 backdrop-blur border border-white/20 ring-1 ring-white/10
            p-6 sm:p-10"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <X />
            </button>

            <p className="text-[11px] uppercase tracking-[0.25em] text-orange-400 mb-3">
              Contact
            </p>

            <h2 className="text-2xl sm:text-3xl font-extrabold mb-6 text-gray-200">
              Let’s <span className="text-orange-400">Work Together</span>
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  icon={User}
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(v) => handleChange("name", v)}
                  error={errors.name}
                  required
                />

                <Input
                  icon={Mail}
                  placeholder="Email address"
                  value={formData.email}
                  onChange={(v) => handleChange("email", v)}
                  error={errors.email}
                  required
                />

                <Input
                  icon={Phone}
                  placeholder="Phone (optional)"
                  value={formData.phone}
                  onChange={(v) => handleChange("phone", v)}
                  error={errors.phone}
                />

                <ProjectTypeSelect
                  value={formData.projectType}
                  onChange={(v) => handleChange("projectType", v)}
                />
              </div>

              <Textarea
                value={formData.message}
                onChange={(v) => handleChange("message", v)}
                error={errors.message}
                required
              />

              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full
                bg-orange-500 hover:bg-orange-600 text-black text-sm font-medium
                disabled:opacity-60"
              >
                {loading ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Send className="w-4 h-4" />
                )}
                {loading ? "Sending..." : "Send Request"}
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ================= SMALL COMPONENTS ================= */

function Input({ icon: Icon, placeholder, value, onChange, error, required }) {
  return (
    <div>
      <div className="flex items-center gap-2 border border-white/20 rounded-lg px-3 py-2">
        <Icon className="w-4 h-4 text-orange-400" />
        <input
          value={value}
          required={required}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          className="w-full bg-transparent outline-none text-sm text-white"
        />
      </div>
      {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
    </div>
  );
}

function ProjectTypeSelect({ value, onChange }) {
  return (
    <ShadcnSelect value={value} onValueChange={onChange}>
      <SelectTrigger className="w-full flex items-center gap-2 border border-white/20 rounded-lg px-3 h-[42px] bg-transparent text-sm text-white">
        <Briefcase className="w-4 h-4 text-orange-400 shrink-0" />
        <SelectValue placeholder="Choose your project type" />
      </SelectTrigger>

      <SelectContent
        position="popper"
        sideOffset={6}
        className="z-[9999] bg-black border border-white/20 text-white text-sm"
      >
        <SelectItem value="Website">Website</SelectItem>
        <SelectItem value="Web Application">Web Application</SelectItem>
        <SelectItem value="Mobile App">Mobile App</SelectItem>
        <SelectItem value="SaaS / System">SaaS / System</SelectItem>
        <SelectItem value="Consultation">Consultation</SelectItem>
      </SelectContent>
    </ShadcnSelect>
  );
}

function Textarea({ value, onChange, error, required }) {
  return (
    <div>
      <div className="flex gap-2 border border-white/20 rounded-lg px-3 py-2">
        <MessageSquare className="w-4 h-4 text-orange-400 mt-1" />
        <textarea
          rows={4}
          required={required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Briefly describe your project..."
          className="w-full bg-transparent outline-none text-sm text-white resize-none"
        />
      </div>
      {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
    </div>
  );
}
