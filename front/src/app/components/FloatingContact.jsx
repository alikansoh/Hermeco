"use client";

import { useState } from "react";
import { FiPhone, FiMessageCircle, FiX, FiMail } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const buttonGradients = {
  call: "bg-gradient-to-br from-yellow-400 via-amber-400 to-yellow-600",
  whatsapp: "bg-gradient-to-br from-green-400 via-emerald-400 to-green-600",
  email: "bg-gradient-to-br from-blue-400 via-indigo-400 to-blue-600",
  toggle: "bg-gradient-to-br from-yellow-500 via-amber-500 to-yellow-700",
};

const glassStyle = {
  background: "rgba(255,255,255,0.85)",
  boxShadow: "0 8px 32px 0 rgba(31,38,135,0.18)",
  borderRadius: "1.5rem",
  backdropFilter: "blur(8px)",
  border: "1.5px solid rgba(255,255,255,0.22)",
};

const phoneNumber = "07300 825333";
const phoneHref = "tel:+447300825333";
const whatsappHref = "https://wa.me/447300825333";
const email = "info@hermeco.co.uk";
const mailHref = `mailto:${email}`;

export default function FloatingContact() {
  const [showContact, setShowContact] = useState(false);

  return (
    <div
      className={`
        fixed  flex flex-col items-end gap-2
        bottom-2 right-2
        z-50
        sm:bottom-4 sm:right-4
        pointer-events-auto
      `}
      style={{
        paddingBottom: "env(safe-area-inset-bottom)",
      }}
    >
      <AnimatePresence>
        {showContact && (
          <motion.div
            key="contact-options"
            initial={{ opacity: 0, scale: 0.8, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 40 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            className="flex flex-col items-end gap-2 mb-2 p-3"
            style={glassStyle}
          >
            {/* Call Button */}
            <motion.a
              href={phoneHref}
              aria-label="Call"
              whileHover={{ scale: 1.04, boxShadow: "0 0 16px 4px #fbbf2444" }}
              whileTap={{ scale: 0.97 }}
              className={`group flex items-center gap-2 ${buttonGradients.call} text-white px-3 py-2 rounded-lg shadow-lg font-bold text-xs sm:text-sm transition-all relative overflow-hidden w-[130px] sm:w-[170px] justify-center`}
              style={{
                boxShadow: "0 8px 16px 0 rgba(251,191,36,0.18)",
                border: "1px solid #fde68a",
              }}
            >
              <motion.span
                className="rounded-full p-1 bg-white/30 mr-1"
                initial={false}
                animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.13, 1, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <FiPhone className="text-amber-500" size={17} />
              </motion.span>
              <span>Call</span>
            </motion.a>
            {/* WhatsApp Button */}
            <motion.a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              whileHover={{ scale: 1.04, boxShadow: "0 0 16px 4px #34d39966" }}
              whileTap={{ scale: 0.97 }}
              className={`group flex items-center gap-2 ${buttonGradients.whatsapp} text-white px-3 py-2 rounded-lg shadow-lg font-bold text-xs sm:text-sm transition-all relative overflow-hidden w-[130px] sm:w-[170px] justify-center`}
              style={{
                boxShadow: "0 8px 16px 0 rgba(34,197,94,0.14)",
                border: "1px solid #bbf7d0",
              }}
            >
              <motion.span
                className="rounded-full p-1 bg-white/30 mr-1"
                initial={false}
                animate={{ scale: [1, 1.13, 1], opacity: [1, 0.85, 1] }}
                transition={{ repeat: Infinity, duration: 2.5 }}
              >
                <FiMessageCircle className="text-green-600" size={17} />
              </motion.span>
              <span>WhatsApp</span>
            </motion.a>
            {/* Email Button */}
            <motion.a
              href={mailHref}
              aria-label="Email"
              whileHover={{ scale: 1.04, boxShadow: "0 0 16px 4px #60a5fa66" }}
              whileTap={{ scale: 0.97 }}
              className={`group flex items-center gap-2 ${buttonGradients.email} text-white px-3 py-2 rounded-lg shadow-lg font-bold text-xs sm:text-sm transition-all relative overflow-hidden w-[130px] sm:w-[170px] justify-center`}
              style={{
                boxShadow: "0 8px 16px 0 rgba(59,130,246,0.14)",
                border: "1px solid #93c5fd",
              }}
            >
              <motion.span
                className="rounded-full p-1 bg-white/30 mr-1"
                initial={false}
                animate={{ scale: [1, 1.1, 1], opacity: [1, 0.85, 1] }}
                transition={{ repeat: Infinity, duration: 2.2 }}
              >
                <FiMail className="text-blue-600" size={17} />
              </motion.span>
              <span>Email</span>
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.1, boxShadow: "0 0 16px 5px #fbbf2444" }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setShowContact(!showContact)}
        className={`p-3 sm:p-4 rounded-full shadow-lg transition-all ${buttonGradients.toggle} text-white hover:from-yellow-700 hover:to-amber-800 border border-yellow-300 sm:border-2 focus:outline-none focus:ring-2 focus:ring-amber-200`}
        style={{
          boxShadow:
            "0 6px 18px 0 rgba(245,158,11,0.22), 0 2px 6px 0 rgba(245,158,11,0.12)",
        }}
        aria-label={showContact ? "Close contact options" : "Open contact options"}
      >
        <motion.div
          initial={false}
          animate={{ rotate: showContact ? 90 : 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 16 }}
        >
          {showContact ? (
            <FiX size={20} className="drop-shadow" />
          ) : (
            <FiPhone size={20} className="drop-shadow" />
          )}
        </motion.div>
      </motion.button>

      {/* Tooltip - only on desktop/tablet screens */}
      <AnimatePresence>
        {!showContact && (
          <motion.div
            key="tooltip"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.35 }}
            className="hidden sm:block mr-1 mb-1 px-3 py-2 rounded-lg bg-white shadow-lg text-yellow-700 font-semibold text-xs border border-yellow-200 max-w-[160px] text-ellipsis overflow-hidden"
            style={{
              zIndex: 999999,
              boxShadow: "0 6px 18px 0 rgba(251,191,36,0.08), 0 2px 6px 0 rgba(251,191,36,0.08)",
              border: "1px solid #fde68a",
            }}
          >
            <motion.span
              initial={{ background: "#fff" }}
              animate={{ background: ["#fff", "#fef3c7", "#fff"] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="px-1 rounded text-amber-700 font-bold"
            >
              Speak to an expert – Call, WhatsApp, or Email!
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}