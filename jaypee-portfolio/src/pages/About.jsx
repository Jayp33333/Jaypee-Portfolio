import React, { useRef, useEffect, useState } from "react";
import { ABOUT_ME } from "../utils/data.js";
import { motion, useInView, useAnimation } from "framer-motion";
import myPic from "../assets/images/jaypee.jpg";
import {
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaDownload,
  FaBirthdayCake,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGamepad,
  FaMusic,
  FaCode,
  FaTv,
  FaBasketballBall,
  FaBiking,
  FaBars,
} from "react-icons/fa";
import ParticlesBackground from "../components/ParticlesBackground.jsx";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const mainControls = useAnimation();
  const socialControls = useAnimation();
  const contentControls = useAnimation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      socialControls.start("visible");
      contentControls.start("visible");
    }
  }, [isInView, mainControls, socialControls, contentControls]);

  // Personal details data
  const personalDetails = {
    age: "20",
    birthdate: "January 15, 2005",
    phone: "09706553264",
    email: "johnpauljamito5@gmail.com",
    address: "Calauag, Quezon, Philippines",
  };

  const interests = [
    { name: "Gaming", icon: <FaGamepad /> },
    { name: "Music", icon: <FaMusic /> },
    { name: "Coding", icon: <FaCode /> },
    { name: "Watching", icon: <FaTv /> },
    { name: "Basketball", icon: <FaBasketballBall /> },
    { name: "Biking", icon: <FaBiking /> },
  ];

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerChildren = {
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const socialItem = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, type: "spring", stiffness: 200 },
    },
  };

  const imageAnimation = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const navItems = [
    { name: "Introduction", href: "#introduction" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
  ];

  const highlightMultiple = (text, keywords) => {
    const regex = new RegExp(`(${keywords.join("|")})`, "gi");
    const parts = text.split(regex);

    return parts.map((part, index) =>
      keywords.some((k) => k.toLowerCase() === part.toLowerCase()) ? (
        <span key={index} className="text-black bg-white rounded-full px-2 font-semibold">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <>
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full bg-black/60 backdrop-blur-md z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center md:justify-end items-center h-16">
            {/* Navigation (Always Visible) */}
            <div className="flex flex-wrap justify-center md:justify-end items-center space-x-1">
              {navItems.map((item, index) => (
                <React.Fragment key={item.name}>
                  <motion.a
                    href={item.href}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="text-gray-300 hover:text-white px-2 sm:px-3 py-1 sm:py-2 rounded-md 
                              text-xs sm:text-sm md:text-base font-medium transition-colors duration-300"
                  >
                    {item.name}
                  </motion.a>
                  {index < navItems.length - 1 && (
                    <span className="text-gray-500 mx-1">{">"}</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* About Section */}
      <section
        ref={ref}
        className="w-full min-h-[100dvh] flex justify-center items-start px-4 xs:px-6 sm:px-12 md:px-24 lg:px-32 py-12 sm:py-16 bg-black text-white pt-20"
      >
        <ParticlesBackground />
        <div className="w-full max-w-5xl">
          {/* Decorative About Me Logo */}
          <div className="flex items-center justify-center lg:justify-start my-6">
            <div className="flex items-center w-full max-w-xs">
              <span className="flex-grow border-t border-gray-500"></span>
              <span className="px-4 text-white font-bold text-lg sm:text-xl md:text-2xl">
                ABOUT ME
              </span>
              <span className="flex-grow border-t border-gray-500"></span>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left - Fixed Profile Section */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate={mainControls}
              className="w-full lg:w-1/3  backdrop-blur-lg border border-white/20 shadow-2xl rounded-3xl p-6 flex flex-col items-center sticky top-24 h-fit"
            >
              <motion.img
                variants={imageAnimation}
                initial="hidden"
                animate={mainControls}
                src={myPic}
                alt="John Paul Jamito"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(255, 255, 255, 0.3)",
                }}
                transition={{ duration: 0.3 }}
                className="w-40 h-40 xs:w-44 xs:h-44 sm:w-48 sm:h-48 rounded-full object-cover border-4 border-white shadow-lg"
              />

              <motion.h2
                variants={fadeIn}
                initial="hidden"
                animate={mainControls}
                className="mt-6 text-xl xs:text-2xl font-bold text-white text-center"
              >
                John Paul Jamito
              </motion.h2>

              <motion.p
                variants={fadeIn}
                initial="hidden"
                animate={mainControls}
                className="text-gray-300 text-sm xs:text-base text-center"
              >
                IT Student • Web Developer
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
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-full bg-white text-gray-900 hover:bg-gray-200 transition-colors duration-300 shadow-md"
                >
                  <FaGithub className="w-5 h-5 xs:w-6 xs:h-6" />
                </motion.a>

                <motion.a
                  variants={socialItem}
                  href="https://www.instagram.com/jay_p33333/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-full bg-white text-gray-900 hover:bg-gray-200 transition-colors duration-300 shadow-md"
                >
                  <FaInstagram className="w-5 h-5 xs:w-6 xs:h-6" />
                </motion.a>

                <motion.a
                  variants={socialItem}
                  href="https://www.facebook.com/johnpaul.jamito.585"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-full bg-white text-gray-900 hover:bg-gray-200 transition-colors duration-300 shadow-md"
                >
                  <FaFacebook className="w-5 h-5 xs:w-6 xs:h-6" />
                </motion.a>
              </motion.div>

              {/* Resume Button */}
              <motion.a
                href="/resume.pdf"
                download
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 5px 15px rgba(255, 255, 255, 0.3)",
                }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-xl bg-white text-gray-900 font-semibold shadow-md hover:bg-gray-100 transition-colors duration-300 w-full justify-center"
              >
                <FaDownload className="w-4 h-4" />
                Download Resume
              </motion.a>
            </motion.div>

            {/* Right - Scrollable Content Section */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate={contentControls}
              className="w-full lg:w-2/3 bg-black  backdrop-blur-lg border border-white/20 shadow-2xl rounded-3xl p-6 sm:p-8"
            >
              <div id="introduction" className="scroll-mt-24">
                <motion.h1
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="font-heading text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6"
                >
                  Introduction
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.6 }}
                  className="text-gray-200 font-sans text-sm sm:text-base lg:text-lg leading-relaxed text-justify font-inter mb-8"
                >
                  {highlightMultiple(ABOUT_ME.content, [
                    "MERN stack",
                    "turn my passion into something meaningful",
                  ])}
                </motion.p>

                {/* Personal Details */}
                <motion.div
                  variants={fadeIn}
                  initial="hidden"
                  animate={mainControls}
                  className="w-full mt-6 space-y-4 text-sm sm:text-base font-sans"
                >
                   <h3 className="text-lg font-semibold text-white mb-3 font-heading">
                    Personal Details
                  </h3>
                  <div className="flex items-center text-gray-200">
                    <FaBirthdayCake className="mr-3 text-white" />
                    <span>
                      {personalDetails.age} years • {personalDetails.birthdate}
                    </span>
                  </div>

                  <div className="flex items-center text-gray-200">
                    <FaPhone className="mr-3 text-white" />
                    <span>{personalDetails.phone}</span>
                  </div>

                  <div className="flex items-center text-gray-200">
                    <FaEnvelope className="mr-3 text-white" />
                    <span>{personalDetails.email}</span>
                  </div>

                  <div className="flex items-center text-gray-200">
                    <FaMapMarkerAlt className="mr-3 text-white" />
                    <span>{personalDetails.address}</span>
                  </div>
                </motion.div>

                {/* Interests */}
                <motion.div
                  variants={fadeIn}
                  initial="hidden"
                  animate={mainControls}
                  className="w-full mt-6"
                >
                  <h3 className="text-lg font-semibold text-white mb-3">
                    Interests
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {interests.map((interest, index) => (
                      <div
                        key={index}
                        className="flex items-center text-gray-200"
                      >
                        <div className="flex items-center bg-black border border-white p-2 rounded-sm">
                           <span className="mr-2 text-white">{interest.icon}</span>
                           <span className="text-sm">{interest.name}</span>
                        </div>
                       
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Skills Section */}
              <div id="skills" className="scroll-mt-24 mt-10">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="font-heading text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6"
                >
                  Skills
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {ABOUT_ME.skills?.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 * index }}
                      className="bg-gray-800/50 p-4 rounded-lg"
                    >
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {skill.name}
                      </h3>
                      <div className="w-full bg-gray-700 rounded-full h-2.5">
                        <div
                          className="bg-blue-500 h-2.5 rounded-full"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-300 mt-1">
                        {skill.level}%
                      </span>
                    </motion.div>
                  )) || (
                    <div className="text-gray-300">
                      Skills data will be displayed here. Add a "skills" array
                      to your ABOUT_ME data.
                    </div>
                  )}
                </div>
              </div>

              {/* Education Section */}
              <div id="education" className="scroll-mt-24 mt-10">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="font-heading text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6"
                >
                  Education
                </motion.h2>

                <div className="space-y-6">
                  {ABOUT_ME.education?.map((edu, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 * index }}
                      className="bg-gray-800/50 p-5 rounded-lg border-l-4 border-blue-500"
                    >
                      <h3 className="text-lg font-semibold text-white">
                        {edu.degree}
                      </h3>
                      <p className="text-blue-300">{edu.institution}</p>
                      <p className="text-gray-400">{edu.period}</p>
                      {edu.description && (
                        <p className="text-gray-300 mt-2">{edu.description}</p>
                      )}
                    </motion.div>
                  )) || (
                    <div className="text-gray-300">
                      Education data will be displayed here. Add an "education"
                      array to your ABOUT_ME data.
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
