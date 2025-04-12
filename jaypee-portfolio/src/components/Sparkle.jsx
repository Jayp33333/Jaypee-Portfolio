import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Sparkle = () => {
  const numberOfDots = 20;

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Center Glow */}
      <motion.div
        className="absolute top-[30%] left-[30%] w-[500px] h-[500px] bg-gray-500/20 blur-3xl rounded-full"
        style={{ transform: "translate(50%, 50%)" }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Circulating dots */}
      {[...Array(numberOfDots)].map((_, i) => {
        const radius = 150 + Math.random() * 100; // random orbit radius
        const duration = 6 + Math.random() * 4; // random speed
        const angleOffset = Math.random() * 360; // unique start angle for each

        return (
          <motion.div
            key={i}
            className="absolute w-[4px] h-[4px] bg-white rounded-full"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
            animate={{
              x: Array.from({ length: 360 }, (_, a) =>
                radius * Math.cos((a + angleOffset) * (Math.PI / 180))
              ),
              y: Array.from({ length: 360 }, (_, a) =>
                radius * Math.sin((a + angleOffset) * (Math.PI / 180))
              ),
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        );
      })}
    </div>
  );
};

export default Sparkle;
