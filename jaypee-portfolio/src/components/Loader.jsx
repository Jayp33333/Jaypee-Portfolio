import React from "react";
import { motion } from "framer-motion";

const textAnimation = (text, delay) => {
  return text.split(" ").map((word, index) => (
    <motion.span
      key={index}
      initial={{ opacity: 0, width: 0 }}
      animate={{ opacity: 1, width: "auto" }}
      transition={{ delay: delay + index * 0.2, duration: 0.2, ease: "linear" }}
      className="inline-block overflow-hidden"
    >
      {word}&nbsp;
    </motion.span>
  ));
};

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[100dvh] bg-[#1A1A1A] bg-image font-bold">
      <motion.div className="overflow-hidden text-white text-4xl sm:text-5xl md:text-7xl lg:text-8xl">{textAnimation("JOHN PAUL", 1)}</motion.div>
      <motion.div className="overflow-hidden text-white text-4xl sm:text-5xl md:text-7xl lg:text-8xl">{textAnimation("JAMITO", 2)}</motion.div>
      <motion.div className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl overflow-hidden text-yellow-500">{textAnimation("PORTFOLIO", 3)}</motion.div>
    </div>
  );
};

export default Loader;
