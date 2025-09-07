// src/pages/Home.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload, FaInstagram, FaFacebook } from "react-icons/fa";
import ParticlesBackground from "../components/ParticlesBackground";
import TypingTagline from "../components/TypingTagline";

const Home = () => {
  return (
    <motion.section 
      className="relative w-full h-[100dvh] text-white overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1}}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      exit={{ opacity: 0 }}
      >
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

      <ParticlesBackground />

      <div className="container mx-auto px-4 md:px-8 py-12 flex flex-col items-center justify-center min-h-screen">
        {/* Social links */}
        <motion.div
          className="fixed top-6 right-6 z-50 flex flex-col gap-4"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <motion.a
            href="https://github.com/Jayp33333"
            target="_blank"
            whileHover={{ scale: 1.1 }}
            className="p-2 bg-white/5 backdrop-blur-md rounded-full border border-white/10 hover:bg-white/10 transition-all"
          >
            <FaGithub className="text-xl" />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/jay_p33333/"
            target="_blank"
            whileHover={{ scale: 1.1 }}
            className="p-2 bg-white/5 backdrop-blur-md rounded-full border border-white/10 hover:bg-white/10 transition-all"
          >
            <FaInstagram className="text-xl" />
          </motion.a>
          <motion.a
            href="https://www.facebook.com/johnpaul.jamito.585"
            target="_blank"
            whileHover={{ scale: 1.1 }}
            className="p-2 bg-white/5 backdrop-blur-md rounded-full border border-white/10 hover:bg-white/10 transition-all"
          >
            <FaFacebook className="text-xl" />
          </motion.a>
          <motion.a
            href="mailto:johnpauljamito5@gmail.com"
            whileHover={{ scale: 1.1 }}
            className="p-2 bg-white/5 backdrop-blur-md rounded-full border border-white/10 hover:bg-white/10 transition-all"
          >
            <FaEnvelope className="text-xl" />
          </motion.a>
        </motion.div>

        {/* Main content */}
        <div className="flex flex-col items-center justify-center w-full max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center text-xl md:text-2xl font-light text-gray-300 tracking-wider"
          >
            Hello, I'm
          </motion.h1>

          <div className="flex flex-row items-center justify-center my-8 md:my-1 z-10">
            <motion.div
              className="relative flex items-center justify-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8, type: 'spring', stiffness: 100 }}
            >
              {/* Decorative frame */}
              <div className="absolute inset-0 rounded-lg">
                {/* top-left corner */}
                <span className="absolute top-0 left-0 w-5 h-[1px] bg-white"></span>
                <span className="absolute top-0 left-0 w-[1px] h-5 bg-white"></span>
                {/* top-right corner */}
                <span className="absolute top-0 right-0 w-5 h-[1px] bg-white"></span>
                <span className="absolute top-0 right-0 w-[1px] h-5 bg-white"></span>
                {/* bottom-left corner */}
                <span className="absolute bottom-0 left-0 w-5 h-[1px] bg-white"></span>
                <span className="absolute bottom-0 left-0 w-[1px] h-5 bg-white"></span>
                {/* bottom-right corner */}
                <span className="absolute bottom-0 right-0 w-5 h-[1px] bg-white"></span>
                <span className="absolute bottom-0 right-0 w-[1px] h-5 bg-white"></span>
              </div>

              {/* Main Letter */}
              <h2 className="relative z-10 text-[6rem] sm:text-[7rem] md:text-[10rem] font-black text-white/90">
                J
              </h2>
            </motion.div>


            <div className="flex flex-col items-start ml-1 mt-0">
              <motion.h2
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-black [text-shadow:_-1px_-1px_0_#FFFFFF,_1px_-1px_0_#fff,_-1px_1px_0_#fff,_1px_1px_0_#fff]"
              >
                OHN PAUL
              </motion.h2>
              <motion.h2
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-black [text-shadow:_-1px_-1px_0_#FFFFFF,_1px_-1px_0_#fff,_-1px_1px_0_#fff,_1px_1px_0_#fff]"
              >
                AMITO
              </motion.h2>
            </div>
          </div>

          {/* Typing tagline */}
          <TypingTagline
            lines={[
              "IT Student",
              "UI/UX Designer ",
              "Aspiring Web Developer",
              "Tech Enthusiast",
              "Problem Solver",
              "Creative Thinker",
            ]}
          />

          {/* CTA buttons */}
          <motion.div
            className="flex flex-wrap gap-4 justify-center mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:johnpauljamito5@gmail.com"
              className="px-6 py-3 bg-white text-black rounded-lg font-medium flex items-center gap-2 shadow-lg hover:bg-gray-100 transition-all border border-white z-10"
            >
              <FaEnvelope className="text-sm" /> Get In Touch
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/resume.pdf"
              download
              className="px-6 py-3 bg-transparent backdrop-blur-md border border-white/30 rounded-lg font-medium flex items-center gap-2 hover:bg-white/10 transition-all z-10"
            >
              <FaFileDownload className="text-sm" /> Download CV
            </motion.a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
