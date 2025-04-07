import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SideBarLinks } from "../utils/data";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Close sidebar when a link is clicked (on mobile)
  const handleLinkClick = () => {
    if (window.innerWidth < 640) setIsOpen(false); // 'sm' breakpoint
  };

  return (
    <>
      {/* Hamburger Button (small screens only) */}
      <div className="fixed top-6 left-4 z-50 sm:hidden">
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
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`
          fixed z-40 
          top-0 left-0 
          h-screen sm:h-auto 
          w-3/4 max-w-[260px] sm:w-auto
          p-6 sm:p-4 
          bg-[#171717] rounded-xl
          transform transition-transform duration-300 ease-in-out 
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          sm:translate-x-0 
          flex flex-col sm:fixed sm:top-1/2 sm:left-4 sm:-translate-y-1/2
        `}
      >
        <ul className="flex flex-col justify-start text-white mt-16 sm:mt-0 text-sm sm:text-[16px] space-y-6 sm:space-y-4">
          {SideBarLinks.map((item) => (
            <li key={item.id}>
              <Link
                to={item.path}
                onClick={handleLinkClick}
                className="group relative flex flex-col items-center gap-2 menu-item rounded-full bg-[#262626] hover:shadow-xl transform transition-transform duration-300 hover:scale-125 active:scale-95 p-2"
              >
                <item.icon className="text-xl sm:text-2xl shadow-md hover:shadow-lg transition-shadow duration-300 text-gray-400 hover:text-white" />
                <span
                  className="
                    absolute left-full ml-2 px-2 py-1 
                    bg-[#262626] text-white text-xs rounded 
                    opacity-0 group-hover:opacity-100 
                    whitespace-nowrap pointer-events-none 
                    transition-opacity duration-300 z-50
                  "
                >
                  {item.label}
                </span>
              </Link>

            </li>
          ))}
        </ul>
      </div>

      {/* Overlay backdrop when open on mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 sm:hidden"
          onClick={toggleMenu}
        />
      )}
    </>
  );
};

export default SideBar;
