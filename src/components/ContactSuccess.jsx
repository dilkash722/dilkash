"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function ContactSuccess() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="flex flex-col items-center justify-center py-16 text-center"
    >
      <CheckCircle className="mb-4 text-green-500" size={44} />
      <h3 className="text-lg font-semibold text-white mb-1">
        Message Sent Successfully
      </h3>
      <p className="text-sm text-gray-400">I’ll contact you shortly.</p>
    </motion.div>
  );
}
