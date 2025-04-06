import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Route, Routes } from "react-router-dom";
import SideBar from "./components/SideBar.jsx";
import { SideBarLinks } from "./utils/data.js";
import Loader from "./components/Loader.jsx";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fakeDataFetch = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 4000);
    };
    fakeDataFetch();
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <motion.div
          key="loader"
          initial={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 2 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <Loader />
        </motion.div>
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="container mx-auto min-h-[100vh] relative"
        >
          <SideBar />
          <Routes>
            {SideBarLinks.map((link) => (
              <Route key={link.id} path={link.path} element={<link.element />} />
            ))}
          </Routes>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default App;
