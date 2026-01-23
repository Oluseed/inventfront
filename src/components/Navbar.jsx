import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

import buttonIcon from "../assets/images/button-icon-1.svg";
import logo from "../assets/images/olastute logo.png";
import { previewUrl } from "../lib/utils";

const Navbar = () => {
  const { t, i18n } = useTranslation();
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

  const navItems = [
    { path: "/", key: "nav.home" },
    { path: "/about", key: "nav.about" },
    { path: "/pricing", key: "nav.pricing" },
    { path: "/product", key: "nav.product" },
    { path: "/shop", key: "nav.shop" },
    { path: "/contact", key: "nav.contact" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 w-full z-20 text-white border-b border-white/10 h-[70px] font-inter"
      style={{
        background: "rgba(0, 0, 0, 0.3)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      <div className="flex items-center justify-between px-4 md:px-2 lg:px-8 py-3 h-full">
        {/* Logo */}
        <img
          src={logo}
          alt="logo"
          className="object-contain w-20 mt-2 sm:w-14 sm:h-14 md:w-16 md:h-16"
        />

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10 text-sm">
          {navItems.map(({ path, key }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                isActive
                  ? "text-[#FFFF00] font-semibold transition"
                  : "text-white hover:opacity-70 transition"
              }
            >
              {t(key)}
            </NavLink>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          {/* Language Selector */}
          <select
            value={i18n.language}
            onChange={(e) => i18n.changeLanguage(e.target.value)}
            className="bg-transparent border border-white/30 rounded px-2 py-1 text-sm cursor-pointer"
          >
            <option value="en" className="text-black">EN</option>
            <option value="fr" className="text-black">FR</option>
          </select>

          <button
            onClick={() => window.open(previewUrl(), "_blank")}
            className="flex bg-[#FF4C05] hover:bg-[#c25124] px-3 py-2 gap-x-2 rounded text-sm transition group"
          >
            <img
              src={buttonIcon}
              alt="icon"
              className="w-5 h-5 transform group-hover:translate-x-1 transition"
            />
            {t("nav.viewDemo")}
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden z-30"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <motion.span
            className="block w-6 h-[2px] bg-white mb-1"
            animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6 : 0 }}
          />
          <motion.span
            className="block w-6 h-[2px] bg-white mb-1"
            animate={{ opacity: menuOpen ? 0 : 1 }}
          />
          <motion.span
            className="block w-6 h-[2px] bg-white"
            animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6 : 0 }}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden absolute top-full left-0 w-full h-screen flex flex-col items-center gap-6 py-6 bg-black"
          >
            {navItems.map(({ path, key }) => (
              <NavLink
                key={path}
                to={path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#FFFF00] font-semibold text-lg"
                    : "text-white text-lg hover:opacity-70"
                }
              >
                {t(key)}
              </NavLink>
            ))}

            {/* Mobile Language Selector */}
            <select
              value={i18n.language}
              onChange={(e) => i18n.changeLanguage(e.target.value)}
              className="mt-4 bg-black border border-white/30 rounded px-3 py-2"
            >
              <option value="en">English</option>
              <option value="fr">Français</option>
            </select>

            <button
              onClick={() => window.open(previewUrl(), "_blank")}
              className="flex bg-[#FF4C05] hover:bg-[#c25124] px-4 py-2 gap-x-2 rounded text-sm transition group"
            >
              <img
                src={buttonIcon}
                alt="icon"
                className="w-5 h-5 transform group-hover:translate-x-1 transition"
              />
              {t("nav.viewDemo")}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
