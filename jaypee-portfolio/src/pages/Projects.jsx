import React, { useState } from "react";
import { FaInfoCircle, FaLink, FaGithub } from "react-icons/fa";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { projectData } from "../utils/data";
import { motion, AnimatePresence } from "framer-motion";
import ParticlesBackground from "../components/ParticlesBackground";

const Projects = () => {
  const [current, setCurrent] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [currentProjectDescription, setCurrentProjectDescription] =
    useState("");
  const [direction, setDirection] = useState(0);

  const total = projectData.length;
  const leftIndex = (current - 1 + total) % total;
  const centerIndex = current;
  const rightIndex = (current + 1) % total;

  const handleSlide = (dir) => {
    if (dir === "next") {
      setDirection(1);
      setCurrent((current + 1) % total);
    } else {
      setDirection(-1);
      setCurrent((current - 1 + total) % total);
    }
  };

  const handleProjectClick = (index) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  const openModal = (description) => {
    setCurrentProjectDescription(description);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setCurrentProjectDescription("");
  };

  const currentProject = projectData[centerIndex];

  // Animation variants for the carousel
  const centerVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? -15 : 15,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        mass: 1,
      },
    },
    exit: (direction) => ({
      x: direction < 0 ? 500 : -500,
      opacity: 0,
      scale: 0.8,
      rotateY: direction < 0 ? 15 : -15,
      transition: {
        duration: 0.3,
      },
    }),
  };

  const sideVariants = {
    left: {
      x: -180,
      y: 20,
      opacity: 0.7,
      scale: 0.85,
      rotateY: 15,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    right: {
      x: 180,
      y: 20,
      opacity: 0.7,
      scale: 0.85,
      rotateY: -15,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };

  return (
    <section className="relative containerLayout w-full flex flex-col items-center justify-center py-20 px-6 overflow-hidden">
      <ParticlesBackground />
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center text-white mb-16"
      >
        My <span className="text-yellow-400">Projects</span>
      </motion.h2>

      {/* Carousel Container */}
      <div className="relative w-full max-w-6xl h-96 flex items-center justify-center">
        {/* Left Card */}
        <motion.div
          className="absolute hidden md:flex w-1/4 lg:w-1/3 z-10 cursor-pointer perspective-1000"
          variants={sideVariants}
          initial="left"
          animate="left"
          onClick={() => handleProjectClick(leftIndex)}
        >
          <div className="w-full p-4 rounded-2xl bg-gradient-to-br from-gray-900/70 to-gray-800/40 backdrop-blur-md border border-white/10 shadow-2xl transform-style-preserve-3d">
            <div className="w-full h-40 rounded-lg overflow-hidden shadow-lg">
              <img
                src={projectData[leftIndex].image}
                alt={projectData[leftIndex].title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-4 text-center">
              <h4 className="text-white text-sm font-medium">
                {projectData[leftIndex].title}
              </h4>
            </div>
          </div>
        </motion.div>

        {/* Center Card */}
        <div className="absolute w-full sm:w-3/4 md:w-2/5 z-20 perspective-1000">
          <AnimatePresence custom={direction} mode="wait" initial={false}>
            <motion.div
              key={currentProject.id}
              custom={direction}
              variants={centerVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full p-6 rounded-2xl bg-gradient-to-br from-black/80 to-gray-900 backdrop-blur-md border border-white/10 shadow-2xl transform-style-preserve-3d"
            >
              <div className="w-full h-52 rounded-xl overflow-hidden shadow-lg mb-5">
                <img
                  src={currentProject.image}
                  alt={currentProject.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-2">
                  {currentProject.title}
                </h3>
                <p className="text-gray-300 text-sm line-clamp-2 mb-5">
                  {currentProject.description}
                </p>
              </div>
              <div className="flex justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 rounded-lg bg-yellow-500 text-black font-semibold flex items-center gap-2 hover:bg-yellow-400 transition shadow-md"
                  onClick={() => openModal(currentProject.description)}
                >
                  <FaInfoCircle /> Details
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white flex items-center gap-2 hover:bg-yellow-500 hover:text-black transition shadow-md"
                  onClick={() => window.open(currentProject.link, "_blank")}
                >
                  <FaLink /> Visit
                </motion.button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Card */}
        <motion.div
          className="absolute hidden md:flex w-1/4 lg:w-1/3 z-10 cursor-pointer perspective-1000"
          variants={sideVariants}
          initial="right"
          animate="right"
          onClick={() => handleProjectClick(rightIndex)}
        >
          <div className="w-full p-4 rounded-2xl bg-gradient-to-br from-gray-900/70 to-gray-800/40 backdrop-blur-md border border-white/10 shadow-2xl transform-style-preserve-3d">
            <div className="w-full h-40 rounded-lg overflow-hidden shadow-lg">
              <img
                src={projectData[rightIndex].image}
                alt={projectData[rightIndex].title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-4 text-center">
              <h4 className="text-white text-sm font-medium">
                {projectData[rightIndex].title}
              </h4>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Indicators */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="flex justify-center gap-2 mt-8 mb-6"
      >
        {projectData.map((_, index) => (
          <button
            key={index}
            onClick={() => handleProjectClick(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === current ? "bg-yellow-500 scale-125" : "bg-white/30"
            }`}
          />
        ))}
      </motion.div>

      {/* Controls */}
      <div className="flex justify-center gap-8">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => handleSlide("prev")}
          className="p-4 rounded-full bg-white/10 border border-white/20 text-white hover:bg-yellow-500 hover:text-black transition shadow-lg"
        >
          <GoArrowLeft size={24} />
        </motion.button>
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => handleSlide("next")}
          className="p-4 rounded-full bg-white/10 border border-white/20 text-white hover:bg-yellow-500 hover:text-black transition shadow-lg"
        >
          <GoArrowRight size={24} />
        </motion.button>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 px-4 py-6"
            onClick={closeModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative bg-gradient-to-br from-gray-900 to-gray-800 backdrop-blur-lg border border-white/20 rounded-2xl p-6 sm:p-8 w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
            >
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={closeModal}
                className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-red-500 hover:bg-red-600 transition shadow-md"
              >
                ✕
              </motion.button>

              {/* Project Image */}
              <div className="w-full h-64 sm:h-80 rounded-xl overflow-hidden mb-6 shadow-lg">
                <img
                  src={currentProject.image}
                  alt={currentProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Project Title */}
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                {currentProject.title}
              </h3>

              {/* Tech Stack Tags */}
              {currentProject.tags && (
                <div className="flex flex-wrap gap-2 mb-5">
                  {currentProject.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full text-sm bg-yellow-500/20 text-yellow-400 border border-yellow-400/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Project Description */}
              <p className="text-gray-200 leading-relaxed mb-6">
                {currentProjectDescription}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={currentProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-lg bg-yellow-500 text-black font-semibold flex items-center gap-2 hover:bg-yellow-400 transition shadow-md"
                >
                  <FaLink /> View Live
                </motion.a>
                {currentProject.github && (
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={currentProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-lg bg-white/10 border border-white/20 text-white flex items-center gap-2 hover:bg-yellow-500 hover:text-black transition shadow-md"
                  >
                    <FaGithub /> Source Code
                  </motion.a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Add custom CSS for 3D perspective */}
      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
      `}</style>
    </section>
  );
};

export default Projects;
