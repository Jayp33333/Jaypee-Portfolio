import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const TimelineCard = ({ title, institution, date, description }) => {
  const { ref, inView } = useInView({
    threshold: 0.6,
    triggerOnce: false, // Keep triggering while it's in the viewport
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }} // Start from faded and below
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // Fade in and move up when in view
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-[#130b27] bg-opacity-50 rounded-xl shadow-xl p-6 max-w-2xl w-full"
    >
      <h3 className="text-yellow-500 text-2xl font-bold mb-2">{title}</h3>
      <p className="text-gray-300 text-sm uppercase mb-1">{institution}</p>
      <p className="text-gray-400 text-sm mb-4">{date}</p>
      <p className="text-white text-sm">{description}</p>
    </motion.div>
  );
};

export default TimelineCard;
