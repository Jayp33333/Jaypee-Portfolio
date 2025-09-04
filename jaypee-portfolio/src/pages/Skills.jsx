import React from "react";
import { SKILLS } from "../utils/data.js";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section className="relative w-full min-h-[100dvh] flex flex-col justify-center items-center px-6 py-20 overflow-hidden">
      {/* Background Accent Glow */}
      <div className="absolute inset-0">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-yellow-400/10 rounded-full blur-3xl" />
      </div>

      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center text-white tracking-wide mb-14"
      >
        My <span className="text-yellow-400">Tech Stack</span>
        <div className="mt-4 h-1 w-24 bg-yellow-400 mx-auto rounded-full" />
      </motion.h2>

      {/* Skills Grid */}
      <div className="relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 max-w-7xl">
        {SKILLS.map((skill, index) => (
          <motion.div
            key={index}
            className="group flex flex-col items-center justify-center p-6 rounded-2xl backdrop-blur-md bg-white/5 border border-white/10 shadow-md hover:shadow-yellow-500/30 transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.08,
              type: "spring",
              stiffness: 100,
            }}
            whileHover={{ scale: 1.08, rotate: 2 }}
          >
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300">
              <skill.icon className="text-3xl text-white" />
            </div>
            <p className="text-white font-medium tracking-wide text-sm sm:text-base text-center group-hover:text-yellow-400 transition-colors duration-300">
              {skill.skill}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
