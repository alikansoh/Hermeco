"use client";
import { motion } from "framer-motion";
import { Home } from "lucide-react";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      animate={{ x: position.x - 15, y: position.y - 15 }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
    >
      <Home className="w-8 h-8 text-yellow-500 drop-shadow-lg" />
    </motion.div>
  );
}
