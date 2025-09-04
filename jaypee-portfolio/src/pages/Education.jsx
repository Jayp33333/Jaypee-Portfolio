import React from "react";
import { EDUCATION_TIMELINE } from "../utils/data";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Education = () => {
  const { ref: introRef, inView: isIntroVisible } = useInView({ threshold: 0.6 });
  const { ref: lastCardRef, inView: isLastCardVisible } = useInView({ threshold: 0.6 });

  return (
    <section className=" text-white overflow-y-scroll snap-y snap-mandatory scroll-smooth scrollbar-yellow relative">
      {/* Header */}
      <div
        ref={introRef}
        className="snap-center h-screen flex flex-col justify-center items-center px-4 sm:px-8 md:px-16 relative"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-yellow-500 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-center mb-4"
        >
          EDUCATION
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-gray-300 text-center max-w-xl"
        >
          Scroll down to explore the timeline of my educational journey.
        </motion.p>

        {/* Scroll Button */}
        {isIntroVisible && !isLastCardVisible && (
          <button
            onClick={() => {
              const nextSection = document.getElementById("timeline-start");
              if (nextSection) nextSection.scrollIntoView({ behavior: "smooth" });
            }}
            className="absolute bottom-20 flex flex-col items-center animate-bounce"
          >
            <span className="text-gray-400 text-sm mb-1">Scroll</span>
            <svg
              className="w-6 h-6 text-yellow-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        )}
      </div>

      {/* Timeline */}
      <div className="relative">
       

        {EDUCATION_TIMELINE.map((timeline, index) => {
          const isLeft = index % 2 === 0;
          return (
            <div
              key={timeline.id}
              id={index === 0 ? "timeline-start" : undefined}
              ref={index === EDUCATION_TIMELINE.length - 1 ? lastCardRef : null}
              className="snap-center h-screen flex justify-center items-center px-4 sm:px-8 md:px-16 relative"
            >
        

              {/* Content */}
              <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-5xl gap-10">
                {/* Card */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className={`relative w-full md:w-1/2 bg-white/5 backdrop-blur-lg border border-yellow-500/30 rounded-2xl p-6 shadow-xl ${
                    isLeft ? "order-1 md:order-1 text-right" : "order-1 md:order-2 text-left"
                  }`}
                >
                  <h3 className="text-2xl font-bold text-yellow-400 mb-2">
                    {timeline.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-1">
                    {timeline.institution} • {timeline.duration}
                  </p>
                  <p className="text-gray-200 leading-relaxed">{timeline.description}</p>
                </motion.div>

                {/* Image Side */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className={`relative w-full md:w-1/2 flex justify-center ${
                    isLeft ? "order-2 md:order-2" : "order-2 md:order-1"
                  }`}
                >
                  <img
                    src={timeline.image}
                    alt="Education Illustration"
                    className="w-64 sm:w-80 md:w-96 object-contain drop-shadow-lg rounded-lg border border-yellow-500/20 bg-white/5"
                  />
                </motion.div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Education;
