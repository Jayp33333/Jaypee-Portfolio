import React from 'react';
import { ABOUT_ME } from '../utils/data.js';
import { motion } from 'framer-motion';
import myPic from '../assets/images/my-pic.png'; // Import your image here

const About = () => {
  return (
    <section className="w-full h-[100dvh] flex flex-col justify-center items-center px-10 sm:px-24 md:px-24 lg:px-32 py-12">
     
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-yellow-500 text-center pb-10"
      >
        ABOUT ME
      </motion.h1>

      <motion.img
        src={myPic}
        alt="John Paul Jamito Picture"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        whileHover={{ scale: 1.10 }}
        className="w-60 h-60 rounded-full m-5 bg-[#171717] bg-opacity-50 backdrop-blur-10 shadow-xl object-cover"
      />


      <div className="mt-6 max-w-4xl w-full">
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-sm sm:text-base lg:text-xl text-white whitespace-pre-line font-roboto leading-relaxed text-justify"
        >
          {ABOUT_ME.content}
        </motion.p>
      </div>
    </section>
  );
};

export default About;
