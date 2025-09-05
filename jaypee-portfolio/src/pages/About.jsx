import React, { useRef, useEffect } from "react";
import { ABOUT_ME } from "../utils/data.js";
import { motion, useInView, useAnimation } from "framer-motion";
import myPic from "../assets/images/jaypee.jpg";
import { FaGithub, FaFacebook, FaInstagram, FaDownload } from "react-icons/fa";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const mainControls = useAnimation();
  const socialControls = useAnimation();
  const contentControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      // Stagger the social icons animation
      socialControls.start("visible");
      // Content appears after the profile
      contentControls.start("visible");
    }
  }, [isInView, mainControls, socialControls, contentControls]);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerChildren = {
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const socialItem = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.4, type: "spring", stiffness: 200 }
    }
  };

  const imageAnimation = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  return (
    <section 
      ref={ref}
      className="w-full min-h-[100dvh] flex justify-center items-center px-4 xs:px-6 sm:px-12 md:px-24 lg:px-32 py-12 sm:py-16"
    >
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate={mainControls}
        className="max-w-5xl w-full bg-white/5 backdrop-blur-lg border border-white/10 shadow-2xl rounded-3xl p-6 sm:p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 md:gap-10"
      >
        {/* Left - Profile */}
        <div className="flex flex-col items-center md:items-start">
          <motion.img
            variants={imageAnimation}
            initial="hidden"
            animate={mainControls}
            src={myPic}
            alt="John Paul Jamito"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 20px rgba(234, 179, 8, 0.5)"
            }}
            transition={{ duration: 0.3 }}
            className="w-40 h-40 xs:w-44 xs:h-44 sm:w-48 sm:h-48 rounded-full object-cover border-4 border-yellow-500 shadow-lg"
          />
          
          <motion.h2 
            variants={fadeIn}
            initial="hidden"
            animate={mainControls}
            className="mt-6 text-xl xs:text-2xl font-bold text-yellow-500 text-center md:text-left"
          >
            John Paul Jamito
          </motion.h2>
          
          <motion.p 
            variants={fadeIn}
            initial="hidden"
            animate={mainControls}
            className="text-gray-300 text-sm xs:text-base text-center md:text-left"
          >
            IT Student • Aspiring Web Developer
          </motion.p>

          {/* Socials */}
          <motion.div 
            variants={staggerChildren}
            initial="hidden"
            animate={socialControls}
            className="flex gap-4 xs:gap-5 mt-6"
          >
            <motion.a
              variants={socialItem}
              href="https://github.com/Jayp33333"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ 
                scale: 1.2,
                rotate: 5,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full bg-white/10 hover:bg-yellow-500 transition-colors duration-300 shadow-md"
            >
              <FaGithub className="w-5 h-5 xs:w-6 xs:h-6 text-white hover:text-black" />
            </motion.a>
            
            <motion.a
              variants={socialItem}
              href="https://www.instagram.com/jay_p33333/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ 
                scale: 1.2,
                rotate: 5,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full bg-white/10 hover:bg-yellow-500 transition-colors duration-300 shadow-md"
            >
              <FaInstagram className="w-5 h-5 xs:w-6 xs:h-6 text-white hover:text-black" />
            </motion.a>
            
            <motion.a
              variants={socialItem}
              href="https://www.facebook.com/johnpaul.jamito.585"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ 
                scale: 1.2,
                rotate: 5,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full bg-white/10 hover:bg-yellow-500 transition-colors duration-300 shadow-md"
            >
              <FaFacebook className="w-5 h-5 xs:w-6 xs:h-6 text-white hover:text-black" />
            </motion.a>
          </motion.div>
        </div>

        {/* Right - About Content */}
        <motion.div 
          variants={fadeIn}
          initial="hidden"
          animate={contentControls}
          className="flex-1"
        >
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-500 mb-4 sm:mb-6"
          >
            ABOUT ME
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed text-justify"
          >
            {ABOUT_ME.content}
          </motion.p>

          {/* Resume Button */}
          <motion.a
            href="/resume.pdf"
            download
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 5px 15px rgba(234, 179, 8, 0.4)"
            }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 mt-6 sm:mt-8 px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl bg-yellow-500 text-black font-semibold shadow-md hover:bg-yellow-400 transition-colors duration-300"
          >
            <FaDownload className="w-4 h-4" />
            Download Resume
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;