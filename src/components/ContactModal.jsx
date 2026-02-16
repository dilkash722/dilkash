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
  Loader2,
  ArrowUpRight,
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

  if (!open) return null;

  const handleChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: null }));
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
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
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
      <motion.div
        className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050505]/95 backdrop-blur-xl p-2 sm:p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Dynamic Background Glows */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-500/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-5%] right-[-5%] w-[40%] h-[40%] bg-zinc-800/20 blur-[100px] rounded-full" />
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 50, opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-5xl bg-[#0a0a0a] border border-zinc-800/50 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col max-h-[92vh] md:max-h-none"
        >
          {/* Close Button - Responsive Position */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 md:top-8 md:right-8 z-50 p-3 bg-zinc-900/80 backdrop-blur-md rounded-full text-zinc-500 hover:text-white hover:bg-zinc-800 transition-all active:scale-90"
          >
            <X size={18} md:size={20} strokeWidth={3} />
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-5 overflow-y-auto no-scrollbar">
            {/* Left Side: Branding (Mobile Header) */}
            <div className="lg:col-span-2 p-8 md:p-12 bg-zinc-900/30 border-b lg:border-b-0 lg:border-r border-zinc-800/50 flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-indigo-500 mb-4 md:mb-6 block">
                  Nadilix • Elite
                </span>
                <h2 className="text-3xl md:text-4xl font-black text-white leading-tight uppercase tracking-tighter">
                  Start Your <br className="hidden md:block" />{" "}
                  <span className="text-zinc-700">Evolution</span>
                </h2>
              </div>
              <p className="text-zinc-500 text-xs md:text-sm leading-relaxed font-light mt-4 lg:mt-0">
                Hum complex ideas ko execution-ready systems mein convert karte
                hain. Let's talk.
              </p>
            </div>

            {/* Right Side: Form Section */}
            <div className="lg:col-span-3 p-6 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                  <CustomInput
                    icon={User}
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(v) => handleChange("name", v)}
                    error={errors.name}
                  />
                  <CustomInput
                    icon={Mail}
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(v) => handleChange("email", v)}
                    error={errors.email}
                  />
                  <CustomInput
                    icon={Phone}
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(v) => handleChange("phone", v)}
                    error={errors.phone}
                  />

                  <div className="space-y-1">
                    <ShadcnSelect
                      value={formData.projectType}
                      onValueChange={(v) => handleChange("projectType", v)}
                    >
                      <SelectTrigger className="w-full bg-zinc-900/50 border-zinc-800 rounded-xl md:rounded-2xl h-[50px] md:h-[56px] text-zinc-300 focus:ring-indigo-500/20">
                        <div className="flex items-center gap-3">
                          <Briefcase size={16} className="text-indigo-500" />
                          <SelectValue placeholder="Project Type" />
                        </div>
                      </SelectTrigger>
                      <SelectContent className="bg-[#0a0a0a] border-zinc-800 text-white z-[110]">
                        <SelectItem value="Website">Website</SelectItem>
                        <SelectItem value="Web Application">
                          Application
                        </SelectItem>
                        <SelectItem value="Branding">Branding</SelectItem>
                      </SelectContent>
                    </ShadcnSelect>
                  </div>
                </div>

                <div className="relative">
                  <MessageSquare
                    size={16}
                    className="absolute left-4 top-4 text-indigo-500"
                  />
                  <textarea
                    rows={3}
                    md={4}
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    placeholder="Briefly describe your project..."
                    className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl md:rounded-2xl p-4 pl-12 text-white text-sm outline-none focus:border-indigo-500/50 transition-all resize-none placeholder:text-zinc-600 min-h-[100px]"
                  />
                  {errors.message && (
                    <p className="text-[9px] text-red-500 mt-1 uppercase tracking-widest pl-2">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="group relative w-full py-5 md:py-6 bg-white text-black font-black uppercase text-[10px] md:text-xs tracking-[0.3em] rounded-xl md:rounded-2xl overflow-hidden transition-all active:scale-[0.98] disabled:opacity-50"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    {loading ? "Processing..." : "Send Inquiry"}
                    {!loading && (
                      <ArrowUpRight
                        size={16}
                        strokeWidth={3}
                        className="group-hover:rotate-45 transition-transform"
                      />
                    )}
                  </span>
                  <div className="absolute inset-0 bg-indigo-500 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.16, 1, 0.3, 1]" />
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// Custom Input for better responsiveness
function CustomInput({ icon: Icon, placeholder, value, onChange, error }) {
  return (
    <div className="space-y-1">
      <div className="relative group">
        <Icon
          size={16}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-500 transition-colors"
        />
        <input
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl md:rounded-2xl h-[50px] md:h-[56px] pl-12 pr-4 text-white text-sm outline-none focus:border-indigo-500/50 transition-all placeholder:text-zinc-600"
        />
      </div>
      {error && (
        <p className="text-[9px] text-red-500 uppercase tracking-widest pl-2 font-bold">
          {error}
        </p>
      )}
    </div>
  );
}
