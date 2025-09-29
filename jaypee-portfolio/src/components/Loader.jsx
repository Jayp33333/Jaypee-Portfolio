import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Loader = ({ onFinish }) => {
  const [showText, setShowText] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  const logoSlideVariants = {
    initial: { y: 0, scale: 1 },
    slideUp: {
      y: -30,
      scale: 0.9,
      transition: {
        duration: 1.2,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.33, 1, 0.68, 1],
        delay: 0.3, 
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 1 },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        when: "afterChildren",
      },
    },
  };

  useEffect(() => {
    const textTimer = setTimeout(() => {
      setShowText(true);
    }, 1800);

    const finishTimer = setTimeout(() => {
      setIsComplete(true);
      if (onFinish) {
        onFinish();
      }
    }, 3500);

    return () => {
      clearTimeout(textTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center bg-black z-50 px-4"
      variants={containerVariants}
      initial="hidden"
      animate={isComplete ? "exit" : "hidden"}
    >
      {/* Logo */}
      <motion.div
        variants={logoSlideVariants}
        initial="initial"
        animate={showText ? "slideUp" : "initial"}
      >
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 3000 3000"
          className="w-[clamp(6rem,12vw,12rem)] h-[clamp(6rem,12vw,12rem)]"
          fill="none"
          stroke="white"
          strokeWidth="80"
        >
          <motion.path
            d="M1535 2397 c-117 -39 -208 -119 -259 -227 l-31 -65 -6 -275 c-4 -151
            -7 -371 -8 -487 -1 -199 -2 -214 -21 -233 -26 -26 -74 -26 -100 0 -18 18 -20
            33 -20 149 0 125 -1 131 -26 160 -25 30 -27 31 -117 31 -115 0 -134 -6 -152
            -41 -18 -33 -21 -236 -5 -319 57 -299 419 -412 633 -198 60 60 92 119 107 197
            6 31 10 238 10 493 0 468 1 482 49 508 37 19 106 12 134 -14 33 -31 39 -64 35
            -221 l-3 -130 -60 -7 c-91 -11 -105 -32 -105 -159 0 -93 2 -102 25 -124 22
            -23 32 -25 108 -25 123 0 178 20 247 88 86 87 92 112 88 384 l-3 224 -32 65
            c-42 86 -115 159 -199 200 -59 29 -79 34 -158 36 -56 2 -106 -2 -131 -10z
            m273 -61 c75 -38 133 -95 173 -168 l34 -63 3 -230 3 -230 -28 -55 c-53 -101
            -133 -140 -288 -140 l-75 0 0 114 0 113 70 -5 c103 -7 100 -12 100 192 0 199
            -8 225 -80 263 -53 28 -89 29 -139 4 -79 -41 -75 -16 -81 -566 -5 -488 -5
            -490 -28 -542 -31 -67 -121 -153 -187 -179 -73 -28 -193 -26 -262 5 -63 28
            -145 112 -176 178 -19 42 -22 70 -25 216 l-4 167 116 0 116 0 0 -148 c0 -161
            5 -179 60 -207 39 -20 69 -19 107 5 59 36 58 23 63 555 l5 490 28 56 c43 89
            148 175 242 200 17 5 68 7 115 5 69 -3 96 -8 138 -30z"
            transform="scale(1,-1) translate(0,-3000)"
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            onAnimationComplete={() => setShowText(true)}
          />
        </motion.svg>
      </motion.div>

      {showText && (
        <motion.h1
          className="text-white font-bold tracking-wide mt-6 text-[clamp(1.5rem,4vw,2.5rem)] text-center"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          Portfolio ni Jaypee
        </motion.h1>
      )}
    </motion.div>
  );
};

export default Loader;
