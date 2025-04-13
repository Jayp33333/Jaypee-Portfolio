import React, { useState } from "react";
import { FaInfoCircle, FaLink } from "react-icons/fa";
import { GoArrowLeft, GoArrowRight  } from "react-icons/go";
import { projectData } from "../utils/data";
import { motion } from "framer-motion"; // Import Framer Motion

const Projects = () => {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [currentProjectDescription, setCurrentProjectDescription] =
    useState("");

  const total = projectData.length;
  const leftIndex = (current - 1 + total) % total;
  const centerIndex = current;
  const rightIndex = (current + 1) % total;

  const handleSlide = (dir) => {
    if (animating) return;
    setDirection(dir);
    setAnimating(true);

    setTimeout(() => {
      if (dir === "next") {
        setCurrent((current + 1) % total);
      } else {
        setCurrent((current - 1 + total) % total);
      }
      setAnimating(false);
    }, 550);
  };

  const openModal = () => {
    const project = projectData[centerIndex];
    setCurrentProjectDescription(project.description);
    setShowModal(true);
  };

  const handleShowDescription = (description) => {
    setCurrentProjectDescription(description);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setCurrentProjectDescription("");
  };

  const currentProject = projectData[centerIndex];

  return (
    <section className="containerLayout flex flex-col items-center justify-center py-16 px-4">
      {/* Slider */}
      <motion.div
        className="slider-container flex justify-center items-center gap-4 w-full max-w-xl px-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {[leftIndex, centerIndex, rightIndex].map((index, i) => {
          const project = projectData[index];
          const position = i === 0 ? "left" : i === 1 ? "center" : "right";

          return (
            <div
              key={project.id}
              className={`card ${position} ${
                animating ? `slide-${direction}` : ""
              } ${position === "center" ? "cursor-pointer" : ""}`}
              onClick={position === "center" ? openModal : undefined}
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded shadow-lg"
              />
              <div className="text-center mt-4 p-2">
                <h3 className="text-lg font-bold">{project.title}</h3>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {project.description}
                </p>
              </div>
            </div>
          );
        })}
      </motion.div>

      {/* Slider Controls */}
      <div className="flex justify-center gap-10 mt-10">
        <motion.button
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          onClick={() => handleSlide("prev")}
          className="arrowBtn px-4 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-700"
        >
          <GoArrowLeft />
        </motion.button>
        <motion.button
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          onClick={() => handleSlide("next")}
          className="arrowBtn px-4 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-700"
        >
          <GoArrowRight />
        </motion.button>
      </div>

      {/* Current Project Actions */}
      <div className="flex flex-col items-center mt-12 w-full max-w-4xl px-6">
        <motion.h2
          key={currentProject.title}
          className="text-2xl font-bold text-white mb-6 w-full text-center py-2 rounded"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          {currentProject.title}
        </motion.h2>

        <motion.div className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          >
          <button
            className="bg-gray-900 text-white px-6 py-3 rounded hover:bg-gray-800 flex items-center gap-2 transition"
            onClick={() => handleShowDescription(currentProject.description)}
          >
            <FaInfoCircle className="text-xl" />
            Show Description
          </button>

          <button
            className="bg-gray-900 text-white px-6 py-3 rounded hover:bg-gray-800 flex items-center gap-2 transition"
            onClick={() => window.open(currentProject.link, "_blank")}
          >
            <FaLink className="text-xl" />
            Show Project
          </button>
        </motion.div>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          role="dialog"
          aria-modal="true"
          onClick={closeModal}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-6 rounded-lg w-96 max-w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl font-bold mb-4">Project Description</h3>
            <p className="text-gray-700 mb-6">{currentProjectDescription}</p>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded w-full hover:bg-red-600"
              onClick={closeModal}
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Projects;
