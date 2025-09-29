import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const TypingTagline = ({ lines }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentLine = lines[lineIndex];
    let typingSpeed = isDeleting ? 40 : 100;

    const handleTyping = () => {
      if (!isDeleting && charIndex < currentLine.length) {
        setDisplayedText((prev) => prev + currentLine[charIndex]);
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setDisplayedText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      } else {
        if (!isDeleting && charIndex === currentLine.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        } else if (isDeleting && charIndex === 0) {
          setIsDeleting(false);
          setLineIndex((prev) => (prev + 1) % lines.length);
        }
      }
    };

    const timeout = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, lineIndex, lines]);

  return (
    <motion.div
      className="w-full max-w-2xl h-20 flex justify-center items-center text-center mt-4 mb-8"
      initial={{ opacity: 0, }}
      animate={{ opacity: 1, }}
      transition={{ duration: 0.5, delay: 0 }}
    >
      <p className="text-lg md:text-xl lg:text-2xl text-gray-300 font-light tracking-wide">
        {displayedText}
        <span className="animate-blink">|</span>
      </p>
    </motion.div>
  );
};

export default TypingTagline;
