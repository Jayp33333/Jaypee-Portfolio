import React from "react";
import { ABOUT_ME } from "../utils/data.js";
import { motion } from "framer-motion";
import myPic from "../assets/images/jaypee.jpg";
import { FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";

const About = () => {
  return (
    <section className="w-full min-h-[100dvh] flex justify-center items-center px-6 sm:px-12 md:px-24 lg:px-32 py-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-5xl w-full bg-white/5 backdrop-blur-lg border border-white/10 shadow-2xl rounded-3xl p-10 flex flex-col md:flex-row items-center gap-10"
      >
        {/* Left - Profile */}
        <div className="flex flex-col items-center md:items-start">
          <motion.img
            src={myPic}
            alt="John Paul Jamito"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="w-48 h-48 rounded-full object-cover border-4 border-yellow-500 shadow-lg"
          />
          <h2 className="mt-6 text-2xl font-bold text-yellow-500">John Paul Jamito</h2>
          <p className="text-gray-300">IT Student • Aspiring Web Developer</p>

          {/* Socials */}
          <div className="flex gap-5 mt-6">
            <motion.a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="p-3 rounded-full bg-white/10 hover:bg-yellow-500 transition-colors shadow-md"
            >
              <FaGithub className="w-6 h-6 text-white hover:text-black" />
            </motion.a>
            <motion.a
              href="https://instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="p-3 rounded-full bg-white/10 hover:bg-yellow-500 transition-colors shadow-md"
            >
              <FaInstagram className="w-6 h-6 text-white hover:text-black" />
            </motion.a>
            <motion.a
              href="https://facebook.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="p-3 rounded-full bg-white/10 hover:bg-yellow-500 transition-colors shadow-md"
            >
              <FaFacebook className="w-6 h-6 text-white hover:text-black" />
            </motion.a>
          </div>
        </div>

        {/* Right - About Content */}
        <div className="flex-1">
          <h1 className="text-3xl sm:text-4xl font-bold text-yellow-500 mb-6">
            ABOUT ME
          </h1>
          <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed text-justify">
            {ABOUT_ME.content}
          </p>

          {/* Resume Button */}
          <motion.a
            href="/resume.pdf" // replace with your CV path
            download
            whileHover={{ scale: 1.05 }}
            className="inline-block mt-8 px-6 py-3 rounded-xl bg-yellow-500 text-black font-semibold shadow-md hover:bg-yellow-400 transition-colors"
          >
            Download Resume
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
