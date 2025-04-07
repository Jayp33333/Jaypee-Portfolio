import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Sparkle from "../components/Sparkle.jsx";

const Home = () => {
  const lines = [
    "IT Student at Polytechnic University of the Philippines",
    "Your Friendly Neighborhood Tech Enthusiast",
    "Always learning, always creating!"
  ];

  const [index, setIndex] = useState(0);
  const [key, setKey] = useState(0);

  useEffect(() => {
    const totalDelay = lines[index].length * 50 + 5000; // time for typing + pause
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
    <section className="relative containerLayout flex flex-col items-center justify-center sm:ml-[1rem] md:ml-[3rem] min-h-screen">
      <Sparkle />
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-xl sm:text-2xl md:text-4xl font-bold bg-gradient-to-r from-gray-500 to-gray-700 text-transparent bg-clip-text pr-10"
      >
        Hi, I'am
      </motion.h1>

      <div className="flex flex-row justify-center items-start my-12 z-10">
        {/* <Sparkle /> */}
        <motion.div className="text-6xl font-extrabold flex items-start">
          <motion.h2
            initial={{ scale: 0, rotate: -30 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.8, type: "spring", stiffness: 100 }}
            className="text-[10rem] sm:text-[12rem] md:text-[16rem] bg-gradient-to-r from-gray-400 to-gray-500 text-transparent bg-clip-text font-black"
          >
            J
          </motion.h2>
        </motion.div>

        <div className="flex flex-col justify-center items-start">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold bg-gradient-to-r from-gray-500 to-gray-700 text-transparent bg-clip-text mt-8"
          >
            OHN PAUL
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 2 }}
            className="text-6xl sm:text-7xl md:text-9xl lg:text-8xl font-extrabold bg-gradient-to-r from-gray-500 to-gray-700 text-transparent bg-clip-text"
          >
            AMITO
          </motion.h2>
        </div>
      </div>

      <motion.div className="flex justify-center items-center w-full h-[80px] text-center px-10 "
         initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2.5 }}
        >
        <AnimatePresence mode="wait">
          <motion.p 
            key={key}
            variants={sentence}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{delay: 4, duration: 0.5}}
            className="text-center text-sm sm:text-md md:text-2xl lg:text-4xl bg-gradient-to-r from-gray-500 to-gray-900  text-transparent bg-clip-text mt-2 flex flex-wrap font-semibold"
          >
            {lines[index].split("").map((char, i) => (
              <motion.span key={i} variants={letter}>
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.p>
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Home;
