import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section className="containerLayout flex flex-col items-center justify-center h-screen ml-[5rem ">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-4xl font-bold text-white pr-10"
      >
        Hi, I'am
      </motion.h1>
      <div className="flex flex-col justify-center items-start my-12">
        <motion.h2 className="text-6xl font-extrabold flex items-center relative">
          <motion.span
            initial={{ scale: 0, rotate: -30 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.8, type: "spring", stiffness: 100 }}
            className="text-[16rem] absolute left-[-20vh] top-[-40px] bg-gradient-to-r from-gray-500 to-gray-300 text-transparent bg-clip-text font-black]"
          >
            J
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 2 }}
            className="text-8xl bg-gradient-to-r from-gray-300 to-gray-500 text-transparent bg-clip-text ml-10"
          >
            OHN PAUL
          </motion.span>
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 3 }}
          className="text-8xl font-extrabold bg-gradient-to-r from-gray-500 to-gray-300 text-transparent bg-clip-text ml-10"
        >
          AMITO
        </motion.h2>
      </div>
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 4 }}
        className="text-xl sm:text-2xl md:text-4xl lg:4xl  bg-gradient-to-r from-gray-500 to-gray-400 text-transparent bg-clip-text mt-2 pr-10"
      >
        IT Student at Polytechnic University of the Philippines
      </motion.p>
    </section>
  );
};

export default Home;