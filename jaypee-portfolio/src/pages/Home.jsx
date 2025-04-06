import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Home = () => {
  const lines = [
    "IT Student at Polytechnic University of the Philippines",
    "Your Friendly Neighborhood Tech Enthusiast",
    "Always learning, always creating!"
  ];

  const [index, setIndex] = useState(0);
  const [key, setKey] = useState(0);

  useEffect(() => {
    const totalDelay = lines[index].length * 50 + 2000; // time for typing + pause
    const timeout = setTimeout(() => {
      setIndex((prev) => (prev + 1) % lines.length);
      setKey((k) => k + 1); // Reset animation
    }, totalDelay);
    return () => clearTimeout(timeout);
  }, [index]);

  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.5 },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section className="containerLayout flex flex-col items-center justify-center md:ml-[5rem] min-h-screen">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-center text-xl sm:text-2xl md:text-4xl font-bold bg-gradient-to-r from-gray-500 to-gray-700 text-transparent bg-clip-text pr-10"
      >
        Hi, I'am
      </motion.h1>

      <div className="flex flex-row justify-center items-start my-12">
        <motion.div className="text-6xl font-extrabold flex items-start">
          <motion.h2
            initial={{ scale: 0, rotate: -30 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.8, type: "spring", stiffness: 100 }}
            className="text-[9rem] sm:text-[12rem] md:text-[16rem] bg-gradient-to-r from-gray-400 to-gray-500 text-transparent bg-clip-text font-black"
          >
            J
          </motion.h2>
        </motion.div>

        <div className="flex flex-col justify-center items-start">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 2 }}
            className="text-4xl md:text-6xl lg:text-8xl font-extrabold bg-gradient-to-r from-gray-500 to-gray-700 text-transparent bg-clip-text mt-8"
          >
            OHN PAUL
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 3 }}
            className="text-4xl md:text-6xl lg:text-8xl font-extrabold bg-gradient-to-r from-gray-500 to-gray-700 text-transparent bg-clip-text"
          >
            AMITO
          </motion.h2>
        </div>
      </div>

      <div className="flex justify-center items-center w-full h-[80px] text-center px-10 ">
        <AnimatePresence mode="wait">
          <motion.p
            key={key}
            variants={sentence}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="text-center text-sm sm:text-xl md:text-2xl lg:text-4xl bg-gradient-to-r from-yellow-800 to-yellow-900  text-transparent bg-clip-text mt-2 flex flex-wrap font-semibold"
          >
            {lines[index].split("").map((char, i) => (
              <motion.span key={i} variants={letter}>
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.p>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Home;
