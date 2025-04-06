import React from "react";
import { SKILLS } from "../utils/data.js";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section className="flex items-center justify-center h-screen">
      <div className="relative w-[600px] h-[600px] rounded-full border-4 border-gray-700 flex items-center justify-center">
        {/* Title text in the middle, shown after rotation of all cards */}
        <motion.div
          className="flex flex-col justify-center items-center text-white text-3xl font-semibold px-36 left-10 "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 25,
            duration: 1,
            delay: 2, // Delay it by the full rotation time (5 seconds)
          }}
        >
          <p>TECH STACK</p>
          <p>SKILLS & TOOLS</p>
        </motion.div>
        {/* Parent container will rotate once */}
        <motion.div
          className="absolute w-[60vh] h-[60vh] rounded-full flex items-center justify-center gap-10 border-4 border-yellow-400"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }} // Rotate once
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 10,
            duration: 5, // Rotation speed for the entire circle
          }}
        >
          {SKILLS.map((skill, index) => {
            const angle = (360 / SKILLS.length) * index;
            const transformStyle = {
              transform: `rotate(${angle}deg) translateY(-230px) rotate(-${angle}deg)`, // Keeps each card in place
              position: "absolute", // Ensures each card is placed correctly
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            };

            return (
              <motion.div
                key={index}
                className="w-20 h-20 bg-gradient-to-r from-gray-800 to-gray-900 rounded-full flex flex-col items-center justify-center text-white shadow-lg"
                style={transformStyle}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 25,
                  duration: 1,
                  delay: index * 0.15, // Staggered delay for each icon
                }}
              >
                <skill.icon className="icon text-3xl mb-2 text-yellow-500" />
                <p className="text-[10px] absolute top-[3.5rem] font-black">{skill.skill}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
