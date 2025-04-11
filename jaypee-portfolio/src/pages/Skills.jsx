import React, { useEffect, useState } from "react";
import { SKILLS } from "../utils/data.js";
import { motion } from "framer-motion";

const Skills = () => {
  const [translateY, setTranslateY] = useState("0");

  // Dynamically update translateY based on container size
  useEffect(() => {
    const handleResize = () => {
      const size = Math.min(window.innerWidth, window.innerHeight);
      const distance = size * 0.28; // 35% outward from center
      setTranslateY(`-${distance}px`);
    };

    handleResize(); // Set on initial load
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="container mx-auto flex items-center justify-center min-h-screen ">
      <div className="relative w-[90vw] max-w-[600px] aspect-square rounded-full border-4 border-gray-700 flex items-center justify-center sm:ml-20 md:ml-16 lg:ml-0">
        {/* Title in the center */}
        <motion.div
          className="absolute flex flex-col justify-center items-center text-white text-center font-semibold text-[clamp(1rem,3vw,1.8rem)] px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 25,
            duration: 1,
            delay: 2,
          }}
        >
          <p>TECH STACK</p>
          <p>SKILLS & TOOLS</p>
        </motion.div>

        {/* Rotating skill ring */}
        <motion.div
          className="absolute w-full h-full rounded-full flex items-center justify-center"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 10,
            duration: 5,
          }}
        >
          {SKILLS.map((skill, index) => {
            const angle = (360 / SKILLS.length) * index;
            const transformStyle = {
              transform: `rotate(${angle}deg) translateY(${translateY}) rotate(-${angle}deg)`,
              position: "absolute",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            };

            return (
              <motion.div
                key={index}
                className="w-[clamp(2.3rem,2vw,3rem)] h-[clamp(2.3rem,2vw,3rem)] sm:w-[clamp(3rem,4vw,8rem)]  sm:h-[clamp(3rem,4vw,8rem)] bg-gradient-to-r from-gray-800 to-gray-900 rounded-full flex flex-col items-center justify-center text-white shadow-lg"
                style={transformStyle}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 25,
                  duration: 1,
                  delay: index * 0.15,
                }}
              >
                <skill.icon className="text-[clamp(1.2rem,4vw,2rem)] text-yellow-500 mb-1" />
                <p className="text-[clamp(5px,1.2vw,10px)] font-black absolute top-[90%] text-center  z-10">
                  {skill.skill}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
