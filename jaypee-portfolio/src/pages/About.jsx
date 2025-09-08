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
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaFigma,
  FaGit,
  FaJava,
} from "react-icons/fa";
import {
  SiCanva,
  SiAdobephotoshop,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiMysql,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import ParticlesBackground from "../components/ParticlesBackground.jsx";
import { EDUCATION_TIMELINE } from "../utils/data";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 }); // Reduced amount for mobile
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

  // Skills data
  const skillsData = {
    webDevelopment: {
      title: "Website Development",
      technologies: [
        {
          name: "Java",
          icon: <FaJava className="text-[#007396]" />,
        },
        {
          name: "HTML",
          icon: <FaHtml5 className="text-orange-500" />,
        },
        {
          name: "CSS",
          icon: <FaCss3Alt className="text-blue-500" />,
        },
        {
          name: "JavaScript",
          icon: <FaJs className="text-yellow-400" />,
        },
        {
          name: "React",
          icon: <FaReact className="text-blue-400" />,
        },
        {
          name: "Node.js",
          icon: <SiNodedotjs className="text-green-500" />,
        },
        {
          name: "Express",
          icon: <SiExpress className="text-gray-400" />,
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="text-cyan-400" />,
        },
        {
          name: "MongoDB",
          icon: <SiMongodb className="text-green-600" />,
        },
        {
          name: "MySQL",
          icon: <SiMysql className="text-blue-600" />,
        },
        {
          name: "Postman",
          icon: <SiPostman className="text-orange-400" />,
        },
        {
          name: "Git",
          icon: <FaGit className="text-orange-500" />,
        },
        {
          name: "GitHub",
          icon: <FaGithub className="text-gray-400" />,
        },
        {
          name: "VS Code",
          icon: <VscVscode className="text-blue-600" />,
        },
      ],
    },
    uiUxDesign: {
      title: "UI/UX Design",
      technologies: [
        {
          name: "Figma",
          icon: <FaFigma className="text-purple-500" />,
        },
        {
          name: "Canva",
          icon: <SiCanva className="text-blue-400" />,
        },
        {
          name: "Photoshop",
          icon: <SiAdobephotoshop className="text-blue-700" />,
        },
      ],
    },
  };

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
    if (!text) return text;
    const regex = new RegExp(`(${keywords.join("|")})`, "gi");
    const parts = text.split(regex);

    return parts.map((part, index) =>
      keywords.some((k) => k.toLowerCase() === part.toLowerCase()) ? (
        <span
          key={index}
          className="text-black bg-white rounded-full px-2 font-semibold"
        >
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
      <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center md:justify-end items-center h-14 sm:h-16">
            {/* Navigation */}
            <div className="flex flex-wrap justify-center md:justify-end items-center space-x-1 sm:space-x-2">
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
                    <span className="text-gray-500 mx-1 text-xs sm:text-sm">
                      {">"}
                    </span>
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
        className="relative w-full min-h-screen flex justify-center items-start 
                   px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32 
                   py-4 sm:py-8 md:py-12 bg-black text-white pt-16 sm:pt-20 z-10"
      >
        <ParticlesBackground className="absolute inset-0 z-0 pointer-events-none" />

        <div className="relative z-10 w-full max-w-6xl">
          {/* Decorative About Me Logo */}
          <div className="flex items-center justify-center lg:justify-start my-4 sm:my-6">
            <div className="flex items-center w-full max-w-xs">
              <span className="flex-grow border-t border-gray-500"></span>
              <span className="px-3 sm:px-4 text-white font-bold text-lg sm:text-xl md:text-2xl whitespace-nowrap">
                ABOUT ME
              </span>
              <span className="flex-grow border-t border-gray-500"></span>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            {/* Left - Profile Section */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate={mainControls}
              className="w-full lg:w-1/3 bg-black/40 backdrop-blur-lg border border-white/20 
                         shadow-2xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 flex flex-col items-center 
                         sticky top-24 h-fit"
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
                className="w-32 h-32 xs:w-36 xs:h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 
                           rounded-full object-cover border-4 border-white shadow-lg"
              />

              <motion.h2
                variants={fadeIn}
                initial="hidden"
                animate={mainControls}
                className="mt-4 sm:mt-6 text-lg xs:text-xl sm:text-2xl font-bold text-white text-center"
              >
                John Paul Jamito
              </motion.h2>

              <motion.p
                variants={fadeIn}
                initial="hidden"
                animate={mainControls}
                className="text-gray-300 text-sm sm:text-base text-center mt-1"
              >
                IT Student • Web Developer
              </motion.p>

              {/* Socials */}
              <motion.div
                variants={staggerChildren}
                initial="hidden"
                animate={socialControls}
                className="flex gap-3 sm:gap-4 md:gap-5 mt-4 sm:mt-6"
              >
                <motion.a
                  variants={socialItem}
                  href="https://github.com/Jayp33333"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2.5 sm:p-3 rounded-full bg-white text-gray-900 hover:bg-gray-200 
                             transition-colors duration-300 shadow-md"
                >
                  <FaGithub className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                </motion.a>

                <motion.a
                  variants={socialItem}
                  href="https://www.instagram.com/jay_p33333/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2.5 sm:p-3 rounded-full bg-white text-gray-900 hover:bg-gray-200 
                             transition-colors duration-300 shadow-md"
                >
                  <FaInstagram className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                </motion.a>

                <motion.a
                  variants={socialItem}
                  href="https://www.facebook.com/johnpaul.jamito.585"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2.5 sm:p-3 rounded-full bg-white text-gray-900 hover:bg-gray-200 
                             transition-colors duration-300 shadow-md"
                >
                  <FaFacebook className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
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
                className="inline-flex items-center gap-2 mt-4 sm:mt-6 px-4 sm:px-5 py-2 sm:py-2.5 
                           rounded-xl bg-white text-gray-900 font-semibold shadow-md hover:bg-gray-100 
                           transition-colors duration-300 w-full justify-center text-sm sm:text-base"
              >
                <FaDownload className="w-3 h-3 sm:w-4 sm:h-4" />
                Download Resume
              </motion.a>
            </motion.div>

            {/* Right - Content Section */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate={contentControls}
              className="w-full lg:w-2/3 bg-black backdrop-blur-lg border border-white/20 
                         shadow-2xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8"
            >
              <div id="introduction" className="scroll-mt-24">
                <motion.h1
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4 md:mb-6 flex items-center gap-3"
                >
                  <span className="flex-grow border-t border-gray-500"></span>
                  Introduction
                  <span className="flex-grow border-t border-gray-500"></span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.6 }}
                  className="text-gray-200 font-sans text-sm sm:text-base lg:text-lg leading-relaxed 
                             text-justify font-inter mb-6 sm:mb-8"
                >
                  {ABOUT_ME?.content
                    ? highlightMultiple(ABOUT_ME.content, [
                        "MERN stack",
                        "turn my passion into something meaningful",
                      ])
                    : "Welcome to my portfolio! I'm passionate about web development and creating meaningful digital experiences."}
                </motion.p>

                {/* Personal Details */}
                <motion.div
                  variants={fadeIn}
                  initial="hidden"
                  animate={mainControls}
                  className="w-full mt-4 sm:mt-6 space-y-3 sm:space-y-4 text-sm sm:text-base font-sans"
                >
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3 font-heading">
                    Personal Details
                  </h3>
                  <div className="flex items-center text-gray-200">
                    <FaBirthdayCake className="mr-2 sm:mr-3 text-white flex-shrink-0" />
                    <span className="break-words">
                      {personalDetails.age} years • {personalDetails.birthdate}
                    </span>
                  </div>

                  <div className="flex items-center text-gray-200">
                    <FaPhone className="mr-2 sm:mr-3 text-white flex-shrink-0" />
                    <span className="break-all">{personalDetails.phone}</span>
                  </div>

                  <div className="flex items-center text-gray-200">
                    <FaEnvelope className="mr-2 sm:mr-3 text-white flex-shrink-0" />
                    <span className="break-all">{personalDetails.email}</span>
                  </div>

                  <div className="flex items-center text-gray-200">
                    <FaMapMarkerAlt className="mr-2 sm:mr-3 text-white flex-shrink-0" />
                    <span className="break-words">
                      {personalDetails.address}
                    </span>
                  </div>
                </motion.div>

                {/* Interests */}
                <motion.div
                  variants={fadeIn}
                  initial="hidden"
                  animate={mainControls}
                  className="w-full mt-4 sm:mt-6"
                >
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">
                    Interests
                  </h3>
                  <div className="grid grid-cols-2 gap-2 sm:gap-3">
                    {interests.map((interest, index) => (
                      <div
                        key={index}
                        className="flex items-center text-gray-200"
                      >
                        <div className="flex items-center bg-black/60 border border-white/30 p-2 sm:p-2.5 rounded-lg w-full">
                          <span className="mr-2 text-white flex-shrink-0">
                            {interest.icon}
                          </span>
                          <span className="text-xs sm:text-sm">
                            {interest.name}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Skills Section */}
              <div id="skills" className="scroll-mt-24 mt-8 sm:mt-10">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4 md:mb-6 flex items-center gap-3"
                >
                  <span className="flex-grow border-t border-gray-500"></span>
                  Skills and Tools
                  <span className="flex-grow border-t border-gray-500"></span>
                </motion.h2>

                {/* Website Development Skills */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="mb-6 sm:mb-8 font-sans"
                >
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4 flex items-center">
                    <FaCode className="mr-2 text-blue-400 font-heading flex-shrink-0" />
                    <span className="break-words">
                      {skillsData.webDevelopment.title}
                    </span>
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3  gap-3 sm:gap-4">
                    {skillsData.webDevelopment.technologies.map(
                      (tech, index) => (
                        <div
                          key={index}
                          className="bg-gray-800/50 p-3 sm:p-4 rounded-lg flex flex-col items-center justify-center min-w-0 text-center"
                        >
                          <div className="text-xl sm:text-2xl flex-shrink-0">
                            {tech.icon}
                          </div>
                          <h4 className="text-white font-medium text-sm sm:text-base truncate">
                            {tech.name}
                          </h4>
                        </div>
                      )
                    )}
                  </div>
                </motion.div>

                {/* UI/UX Design Skills */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4 flex items-center">
                    <FaFigma className="mr-2 text-purple-500 flex-shrink-0" />
                    <span className="break-words">
                      {skillsData.uiUxDesign.title}
                    </span>
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                    {skillsData.uiUxDesign.technologies.map((tech, index) => (
                      <div
                        key={index}
                        className="bg-gray-800/50 p-3 sm:p-4 rounded-lg flex flex-col justify-center items-center min-w-0"
                      >
                        <div className="text-xl sm:text-2xl flex-shrink-0">
                          {tech.icon}
                        </div>
                        <h4 className="text-white font-medium text-sm sm:text-base truncate">
                          {tech.name}
                        </h4>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Education Section */}
              <div id="education" className="scroll-mt-24 mt-12">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="font-heading text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-3"
                  style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)" }}
                >
                  <span className="flex-grow border-t border-gray-500"></span>
                  Education
                  <span className="flex-grow border-t border-gray-500"></span>
                </motion.h2>

                <div className="relative border-l border-gray-500 pl-6">
                  {EDUCATION_TIMELINE?.map((edu, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.3 }}
                      className="mb-10 relative"
                    >
                      {/* Circle Marker */}
                      <span className="absolute -left-9 top-0 w-6 h-6 rounded-full bg-white border-2 border-gray-400 shadow-sm"></span>

                      {/* Card */}
                      <div className="bg-black border border-white/30 rounded-xl p-5 shadow-md hover:shadow-lg transition duration-300">
                        <div className="flex flex-row gap-4">
                          {/* School Logo */}
                          {edu.image && (
                            <div className="flex-shrink-0 flex items-center justify-center">
                              <img
                                src={edu.image}
                                alt={`${edu.institution} logo`}
                                className="w-20 h-20 object-contain border border-gray-400 rounded-md p-1 filter grayscale"
                              />
                            </div>
                          )}

                          {/* Info */}
                          <div className="flex flex-col justify-center">
                            <h3
                              className="font-bold text-white"
                              style={{
                                fontSize: "clamp(1.125rem, 2.5vw, 1.5rem)",
                              }}
                            >
                              {edu.institution}
                            </h3>
                            <p
                              className="text-gray-300"
                              style={{ fontSize: "clamp(0.875rem, 2vw, 1rem)" }}
                            >
                              {edu.title}
                            </p>
                            <p
                              className="text-gray-500 italic"
                              style={{
                                fontSize: "clamp(0.75rem, 1.5vw, 0.875rem)",
                              }}
                            >
                              {edu.duration}
                            </p>
                          </div>
                        </div>

                        {edu.description && (
                          <p
                            className="mt-3 text-gray-300 leading-relaxed"
                            style={{ fontSize: "clamp(0.875rem, 1.8vw, 1rem)" }}
                          >
                            {edu.description}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  ))}
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
