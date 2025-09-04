import React, { useState } from "react";
import { FaInfoCircle, FaLink } from "react-icons/fa";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { projectData } from "../utils/data";
import { motion, AnimatePresence } from "framer-motion";

const Projects = () => {
  const [current, setCurrent] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [currentProjectDescription, setCurrentProjectDescription] =
    useState("");

  const total = projectData.length;
  const leftIndex = (current - 1 + total) % total;
  const centerIndex = current;
  const rightIndex = (current + 1) % total;

  const handleSlide = (dir) => {
    if (dir === "next") {
      setCurrent((current + 1) % total);
    } else {
      setCurrent((current - 1 + total) % total);
    }
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

  return (
    <section className="relative w-full flex flex-col items-center justify-center py-20 px-6  overflow-hidden">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center text-white mb-12"
      >
        My <span className="text-yellow-400">Projects</span>
      </motion.h2>

      {/* Slider */}
      <div className="flex justify-center items-center gap-4 sm:gap-6 w-full max-w-6xl">
        {/* Left Card (hidden on mobile) */}
        <div className="hidden md:block w-1/3 opacity-60 scale-90">
          <motion.div
            whileHover={{ scale: 0.95 }}
            className="p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg"
          >
            <img
              src={projectData[leftIndex].image}
              alt={projectData[leftIndex].title}
              className="rounded-lg w-full h-44 object-cover"
            />
          </motion.div>
        </div>

        {/* Center Card (always visible) */}
        <motion.div
          key={currentProject.id}
          className="w-full sm:w-2/3 md:w-1/3 flex flex-col items-center p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={currentProject.image}
            alt={currentProject.title}
            className="rounded-lg w-full h-48 sm:h-56 object-cover shadow-md"
          />
          <div className="text-center mt-4">
            <h3 className="text-lg sm:text-xl font-bold text-white">
              {currentProject.title}
            </h3>
            <p className="text-sm sm:text-base text-gray-400 line-clamp-2">
              {currentProject.description}
            </p>
          </div>
          <div className="flex gap-3 mt-4">
            <button
              className="px-4 py-2 rounded-lg bg-yellow-500 text-black font-semibold flex items-center gap-2 hover:bg-yellow-400 transition"
              onClick={() => openModal(currentProject.description)}
            >
              <FaInfoCircle /> Details
            </button>
            <button
              className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white flex items-center gap-2 hover:bg-yellow-500 hover:text-black transition"
              onClick={() => window.open(currentProject.link, "_blank")}
            >
              <FaLink /> Visit
            </button>
          </div>
        </motion.div>

        {/* Right Card (hidden on mobile) */}
        <div className="hidden md:block w-1/3 opacity-60 scale-90">
          <motion.div
            whileHover={{ scale: 0.95 }}
            className="p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg"
          >
            <img
              src={projectData[rightIndex].image}
              alt={projectData[rightIndex].title}
              className="rounded-lg w-full h-44 object-cover"
            />
          </motion.div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex justify-center gap-8 mt-10">
        <button
          onClick={() => handleSlide("prev")}
          className="p-3 rounded-full bg-white/10 border border-white/20 text-white hover:bg-yellow-500 hover:text-black transition"
        >
          <GoArrowLeft size={22} />
        </button>
        <button
          onClick={() => handleSlide("next")}
          className="p-3 rounded-full bg-white/10 border border-white/20 text-white hover:bg-yellow-500 hover:text-black transition"
        >
          <GoArrowRight size={22} />
        </button>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-4"
            onClick={closeModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 sm:p-8 w-full max-w-2xl shadow-2xl text-white"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-red-500 hover:bg-red-600 transition"
              >
                ✕
              </button>

              {/* Project Image */}
              <div className="w-full h-56 sm:h-72 rounded-xl overflow-hidden mb-6">
                <img
                  src={currentProject.image}
                  alt={currentProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Project Title */}
              <h3 className="text-2xl sm:text-3xl font-bold mb-3">
                {currentProject.title}
              </h3>

              {/* Tech Stack Tags (optional if you have tags in data) */}
              {currentProject.tags && (
                <div className="flex flex-wrap gap-2 mb-4">
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
                <a
                  href={currentProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-lg bg-yellow-500 text-black font-semibold hover:bg-yellow-400 transition"
                >
                  View Live
                </a>
                {currentProject.github && (
                  <a
                    href={currentProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-lg bg-white/10 border border-white/20 hover:bg-yellow-500 hover:text-black transition"
                  >
                    Source Code
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Projects;
