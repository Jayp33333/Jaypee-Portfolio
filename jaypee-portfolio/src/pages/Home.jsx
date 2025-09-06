import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload } from "react-icons/fa";
import ParticlesBackground from "../components/ParticlesBackground.jsx";

const Home = () => {
  const lines = [
    "IT Student at PUP Lopez Campus",
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
    <section className="relative w-full min-h-screen  text-white overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      
      <ParticlesBackground />
      
      <div className="container mx-auto px-4 md:px-8 py-12 flex flex-col items-center justify-center min-h-screen">
        {/* Social links */}
        <motion.div 
          className="fixed top-6 right-6 z-50 flex flex-col gap-4"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <motion.a 
            href="https://github.com" 
            target="_blank"
            whileHover={{ scale: 1.1 }}
            className="p-2 bg-gray-800/50 backdrop-blur-md rounded-full border border-gray-700/30 hover:bg-purple-600/20 transition-all"
          >
            <FaGithub className="text-xl" />
          </motion.a>
          <motion.a 
            href="https://linkedin.com" 
            target="_blank"
            whileHover={{ scale: 1.1 }}
            className="p-2 bg-gray-800/50 backdrop-blur-md rounded-full border border-gray-700/30 hover:bg-purple-600/20 transition-all"
          >
            <FaLinkedin className="text-xl" />
          </motion.a>
          <motion.a 
            href="mailto:johnpaul@example.com"
            whileHover={{ scale: 1.1 }}
            className="p-2 bg-gray-800/50 backdrop-blur-md rounded-full border border-gray-700/30 hover:bg-purple-600/20 transition-all"
          >
            <FaEnvelope className="text-xl" />
          </motion.a>
        </motion.div>

        {/* Main content */}
        <div className="flex flex-col items-center justify-center w-full max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center text-xl md:text-2xl font-medium text-gray-300 mb-2"
          >
            Hello, I'm
          </motion.h1>

          <div className="flex  flex-row items-center justify-center my-8 md:my-12 z-10">
            <motion.div 
              className="relative"
              initial={{ scale: 0, rotate: -30 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.5, type: "spring", stiffness: 100 }}
            >
              <div className="absolute -inset-4 shadow-2xl shadow-yellow-600/5 rounded-full blur-lg"></div>
              <h2 className="text-[6rem] sm:text-[7rem] md:text-[10rem] font-black bg-gradient-to-r from-yellow-400/10 via-yellow-300/50 to-yellow-500/80 text-transparent bg-clip-text">
                J
              </h2>
            </motion.div>

            <div className="flex flex-col items-start ml-1 mt-0">
              <motion.h2
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-100/50 to-gray-300 text-transparent bg-clip-text"
              >
                OHN PAUL
              </motion.h2>
              <motion.h2
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-100/50 to-gray-300 text-transparent bg-clip-text"
              >
                AMITO
              </motion.h2>
            </div>
          </div>

          {/* Animated tagline */}
          <motion.div 
            className="w-full max-w-2xl h-20 flex justify-center items-center text-center mt-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <AnimatePresence mode="wait">
              <motion.p 
                key={key}
                variants={sentence}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="text-lg md:text-xl lg:text-2xl text-gray-300 font-medium flex flex-wrap justify-center"
              >
                {lines[index].split("").map((char, i) => (
                  <motion.span key={i} variants={letter}>
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </motion.p>
            </AnimatePresence>
          </motion.div>

          {/* CTA buttons */}
          <motion.div 
            className="flex flex-wrap gap-4 justify-center mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.0 }}
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="px-6 py-3 bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-lg font-medium flex items-center gap-2 shadow-lg shadow-yellow-500/20 hover:shadow-yellow-500/40 transition-all"
            >
              <FaEnvelope className="text-sm" /> Get In Touch
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/resume.pdf"
              download
              className="px-6 py-3 bg-gray-800/50 backdrop-blur-md border border-gray-700/30 rounded-lg font-medium flex items-center gap-2 hover:bg-gray-700/50 transition-all"
            >
              <FaFileDownload className="text-sm" /> Download CV
            </motion.a>
          </motion.div>
        </div>

       
      </div>
    </section>
  );
};

export default Home;