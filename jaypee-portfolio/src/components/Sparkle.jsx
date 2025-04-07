import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const cornerPositions = [
  { top: 0, left: 0, origin: "top left" },
  { top: 0, right: 0, origin: "top right" },
  { bottom: 0, left: 0, origin: "bottom left" },
  { bottom: 0, right: 0, origin: "bottom right" },
];

const Sparkle = () => {
  const [activeStrikes, setActiveStrikes] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * cornerPositions.length);
      const strike = {
        ...cornerPositions[randomIndex],
        id: Date.now(),
        x: Math.random() * 50 - 25, // Adds slight horizontal movement
        y: 100, // Falling from the center to the corner
      };
      setActiveStrikes((prevStrikes) => [...prevStrikes, strike]);

      // Remove lightning after animation
      setTimeout(() => {
        setActiveStrikes((prevStrikes) => prevStrikes.filter((s) => s.id !== strike.id));
      }, 1000); // remove after 0.8s
    }, 2000); // every 0.3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Electric glow at center */}
      <motion.div
        className="absolute top-[30%] left-[30%] w-[500px] h-[500px] bg-blue-500/20 blur-3xl rounded-full"
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

      {/* Optional sparkles for extra vibe */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-[2px] h-[2px] bg-white rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          initial={{ opacity: 0.2, scale: 0.5 }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
            scale: [0.5, 1.5, 0.5],
            x: [Math.random() * 100 - 50, Math.random() * 100 - 50], // Random horizontal movement
            y: [Math.random() * 100 - 50, Math.random() * 100 - 50], // Random vertical movement
          }}
          transition={{
            duration: 6, // Slower movement duration
            repeat: Infinity,
            ease: "easeInOut", // Smooth, easing movement
            delay: i * 0.3, // Slight delay for staggering animation
          }}
        />
      ))}
    </div>
  );
};

export default Sparkle;
