"use client";
import { motion } from "framer-motion";
import { Home } from "lucide-react";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect screen size
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 1024); // hide below 1024px (tablet & mobile)
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    window.addEventListener("mousemove", (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    });

    return () => {
      window.removeEventListener("resize", checkScreen);
    };
  }, []);

  if (isMobile) return null; // ❌ Don't render at all on mobile/tablet

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] hidden lg:block"
      animate={{ x: position.x - 15, y: position.y - 15 }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
    >
      <Home className="w-8 h-8 text-yellow-500 drop-shadow-[0_0_10px_rgba(255,215,0,0.8)]" />
    </motion.div>
  );
}
