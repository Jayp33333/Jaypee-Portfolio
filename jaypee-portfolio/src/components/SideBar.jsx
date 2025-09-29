import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { SideBarLinks } from "../utils/data";
import { motion, AnimatePresence } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(window.innerWidth >= 1024);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const location = useLocation(); 

  const toggleMenu = () => setIsOpen(!isOpen);
  const handleLinkClick = () => {
    if (isMobile) setIsOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      setIsOpen(!mobile);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isMobile && (
        <div className="fixed top-6 left-7 z-50 px-[6px]">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-300"
            >
              {isOpen ? (
                <>
                  <line x1="16" y1="6" x2="9" y2="12" />
                  <line x1="2" y1="6" x2="9" y2="12" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="12" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="12" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      )}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={`
              fixed z-40 
              top-0 left-0 
              h-auto 
              w-auto max-w-[260px] sm:w-auto
              p-6 sm:p-4 
              flex flex-col 
              sm:fixed sm:top-[30%] sm:left-4 sm:-translate-y-1/2
              backdrop-blur-xl bg-black/30
              border border-white/10
              shadow-lg shadow-black/20
              sm:rounded-2xl
            `}
          >
            <motion.ul
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="flex flex-col justify-start text-white mt-16 sm:mt-0 text-sm sm:text-[16px] space-y-6 sm:space-y-4"
            >
              {SideBarLinks.map((item) => {
                const isActive = location.pathname === item.path;

                return (
                  <motion.li key={item.id} variants={itemVariants}>
                    <Link
                      to={item.path}
                      onClick={handleLinkClick}
                      className={`group relative flex flex-col items-center gap-2 rounded-full transform transition-all duration-300 p-3
                        ${
                          isActive
                            ? "bg-white/20 border-white/30 text-white scale-110"
                            : "bg-white/5 border-white/5 text-gray-300 hover:bg-white/10 hover:border-white/20 hover:scale-110"
                        }
                        border backdrop-blur-sm active:scale-95
                      `}
                    >
                      <item.icon
                        className={`text-xl sm:text-2xl transition-all duration-300 ${
                          isActive
                            ? "text-white"
                            : "text-gray-300 group-hover:text-white"
                        }`}
                      />
                      <span
                        className="
                          absolute left-full ml-2 px-2 py-1 
                          bg-black/70 text-white text-xs rounded 
                          opacity-0 group-hover:opacity-100 
                          whitespace-nowrap pointer-events-none 
                          transition-opacity duration-300 z-50
                          backdrop-blur-sm
                        "
                      >
                        {item.label}
                      </span>
                    </Link>
                  </motion.li>
                );
              })}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SideBar;
