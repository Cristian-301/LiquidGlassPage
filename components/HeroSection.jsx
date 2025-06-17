'use client';

import { useState, useEffect } from "react";
import { GlassCard } from "@developer-hub/liquid-glass";
import BgImage from "@/public/assets/herosection/22.png";
import { motion } from "framer-motion";

export default function HeroSection() {
  const [showCard, setShowCard] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShowCard(true), 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className="relative z-20 h-screen overflow-hidden bg-black flex items-center justify-center"
      style={{
        backgroundImage: `url(${BgImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Title */}
      <div className="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-[12rem] font-bold text-center pointer-events-none z-0">
        Liquid Glass
      </div>

      {/* Motion Wrapper */}
      <motion.div
        drag
        dragMomentum={false}
        dragElastic={0.2}
        whileTap={{ cursor: "grabbing" }}
        initial={{ x: 1000, y: '-50%'}}
        animate={showCard ? { x: '-50%', y: '-50%' } : {}}
        transition={{ duration: 3, ease: 'easeInOut' }}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          cursor: "grab",
          zIndex: 10,
        }}
      >
        <GlassCard blurAmount={0} cornerRadius={100} shadowMode={false}>
          <div className="h-[20rem] w-[20rem]" />
        </GlassCard>
      </motion.div>
    </div>
  );
}
