import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Route, Routes } from "react-router-dom";
import SideBar from "./components/SideBar.jsx";
import { SideBarLinks } from "./utils/data.js";
import Loader from "./components/Loader.jsx";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  //setLoaderTimeout
  useEffect(() => {
    const fakeDataFetch = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    };
    fakeDataFetch();
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
          <Loader />
      ) : (
        <div
          className="container mx-auto min-h-[100vh] relative"
        >
          <SideBar />
          <Routes>
            {SideBarLinks.map((link) => (
              <Route key={link.id} path={link.path} element={<link.element />} />
            ))}
          </Routes>
        </div>
      )}
    </AnimatePresence>
  );
};

export default App;
