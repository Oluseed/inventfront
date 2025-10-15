import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import buttonIcon from "../assets/images/button-icon-1.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeInOut" },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <nav
      className="fixed top-0 left-0 w-full z-20 text-white border-b border-white/10"
      style={{
        background: "rgba(0, 0, 0, 0.3)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      <div className="flex items-center justify-between px-4 md:px-2 lg:px-8 py-3">
        {/* Logo */}
        <div className="w-10 h-10 bg-white rounded-lg" />

        {/* Navigation Links (Desktop) */}
        <div className="hidden font-inter md:text-[12px] lg:text-[14px] md:flex items-center gap-10">
          {["/", "/pricing", "/about", "/product", "/contact", "/shop"].map((path, i) => {
            const names = ["Home", "Pricing", "About us", "Our Product", "Contact Us", "Shop"];
            return (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#FFFF00] font-semibold transition"
                    : "text-white font-normal hover:opacity-70 transition"
                }
              >
                {names[i]}
              </NavLink>
            );
          })}
        </div>

        {/* Buttons (Desktop) */}
        <div className="hidden md:flex items-center text-[12px] gap-2 md:gap-4">
          <button className="bg-transparent border gap-3 cursor-pointer border-white text-white rounded-md px-6 py-2 font-medium flex items-center hover:bg-white hover:text-black transition">
            Log in
          </button>
          <button className="flex bg-[#FF4C05] cursor-pointer hover:bg-[#c25124] px-2 py-2 place-content-center pt-2 gap-x-1 rounded text-[14px] text-white transition-all duration-300 group">
            <img
              src={buttonIcon}
              alt="button-icon"
              className="w-5 h-5 transform group-hover:translate-x-1 transition-all duration-300"
            />
            Start 14 days Free Trial
          </button>
        </div>

        {/* Hamburger Icon (Mobile) */}
        <button
          className="md:hidden text-orange-500 focus:outline-none relative z-30"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {/* Animate hamburger lines */}
          <motion.span
            className="block w-6 h-[2px] bg-white mb-1"
            animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6 : 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="block w-6 h-[2px] bg-white mb-1"
            animate={{ opacity: menuOpen ? 0 : 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="block w-6 h-[2px] bg-white"
            animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </button>
      </div>

      {/* Mobile Nav with animation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden w-full h-screen overflow-auto absolute top-full left-0 flex flex-col items-center gap-6 py-6"
            style={{
              background: "black",
              backdropFilter: "blur(100px)",
              WebkitBackdropFilter: "blur(100px)",
              borderBottom: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            {["/", "/pricing", "/about", "/product", "/contact", "/shop"].map(
              (path, i) => {
                const names = [
                  "Home",
                  "Pricing",
                  "About us",
                  "Our Product",
                  "Contact Us",
                  "Shop"
                ];
                return (
                  <NavLink
                    key={path}
                    to={path}
                    className={({ isActive }) =>
                      isActive
                        ? "text-[#FFFF00] font-semibold text-lg transition"
                        : "text-white font-normal hover:opacity-70 text-lg transition"
                    }
                    onClick={() => setMenuOpen(false)}
                  >
                    {names[i]}
                  </NavLink>
                );
              }
            )}
            <button className="bg-transparent border gap-3 border-white text-white rounded-md px-6 py-2 font-medium flex items-center hover:bg-white hover:text-black transition text-base">
              <FaUser size={16} /> Log in
            </button>
            <button className="flex bg-[#FF4C05] cursor-pointer hover:bg-[#c25124] px-4 py-2 gap-x-2 rounded font-montserrat text-[14px] text-white transition-all duration-300 group">
              <img
                src={buttonIcon}
                alt="button-icon"
                className="w-5 h-5 transform group-hover:translate-x-1 transition-all duration-300"
              />
              Start 14 days Free Trial
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
