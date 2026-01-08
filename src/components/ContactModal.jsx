"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "emailjs-com";
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

import ContactSuccess from "./ContactSuccess";
import { validateContactForm } from "@/utils/validateForm";

import {
  Select as ShadcnSelect,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

export default function ContactModal({ open, onClose }) {
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "Web Application",
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

    setErrors({});
    setLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { ...formData, time: new Date().toLocaleString() },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setShowSuccess(true);

      setTimeout(() => {
        setShowSuccess(false);
        onClose();
        setFormData({
          name: "",
          email: "",
          phone: "",
          projectType: "Web Application",
          message: "",
        });
      }, 9000);
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
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.96 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="relative w-full max-w-3xl mx-4 p-6 sm:p-8 rounded-2xl bg-black border border-white/20 ring-1 ring-white/10"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <X />
            </button>

            {showSuccess ? (
              <ContactSuccess />
            ) : (
              <>
                <p className="text-[11px] uppercase tracking-[0.25em] text-orange-400 mb-3">
                  Contact
                </p>

                <h2 className="text-2xl sm:text-3xl font-extrabold mb-4 text-gray-200">
                  Let’s <span className="text-orange-400">Work Together</span>
                </h2>

                <p className="text-gray-400 text-sm mb-6 max-w-xl">
                  Share your project details and requirements.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-sm font-medium disabled:opacity-60"
                  >
                    {loading ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <Send className="w-4 h-4" />
                    )}
                    {loading ? "Sending..." : "Send Request"}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ---------- SMALL COMPONENTS ---------- */

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
    <div className="flex items-center gap-2 border border-white/20 rounded-lg px-3 py-1.5">
      <Briefcase className="w-4 h-4 text-orange-400" />

      <ShadcnSelect value={value} onValueChange={onChange}>
        <SelectTrigger className="bg-transparent border-0 h-9 px-0 text-sm text-white focus:ring-0">
          <SelectValue />
        </SelectTrigger>

        <SelectContent className="bg-black border border-white/20 text-white">
          <SelectItem value="Website">Website</SelectItem>
          <SelectItem value="Web Application">Web Application</SelectItem>
          <SelectItem value="Mobile App">Mobile App</SelectItem>
          <SelectItem value="SaaS / System">SaaS / System</SelectItem>
          <SelectItem value="Consultation">Consultation</SelectItem>
        </SelectContent>
      </ShadcnSelect>
    </div>
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
