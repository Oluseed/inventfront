import React, { useState } from "react";
import { FaUser, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import buttonIcon from '../assets/images/button-icon-1.svg'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-[#FFFF00] font-semibold transition" 
                : "text-white font-normal hover:opacity-70 transition" 
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/pricing"
            className={({ isActive }) =>
              isActive
                ? "text-[#FFFF00] font-semibold transition" 
                : "text-white font-normal hover:opacity-70 transition" 
            }
          >
            Pricing
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-[#FFFF00] font-semibold transition" 
                : "text-white font-normal hover:opacity-70 transition" 
            }
          >
            About us
          </NavLink>

          <NavLink
            to="/product"
            className={({ isActive }) =>
              isActive
                ? "text-[#FFFF00] font-semibold transition" 
                : "text-white font-normal hover:opacity-70 transition" 
            }
          >
            Our Product
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-[#FFFF00] font-semibold transition" 
                : "text-white font-normal hover:opacity-70 transition" 
            }
          >
            Contact Us
          </NavLink>
        </div>

        {/* Buttons (Desktop) */}
        <div className="hidden md:flex items-center text-[12px]  gap-2 md:gap-4">
          <button className="bg-transparent border gap-3 cursor-pointer border-white text-white rounded-md px-6 py-2 font-medium flex items-center  hover:bg-white hover:text-black transition">
            Log in
          </button>
          <button className="flex bg-[#FF4C05] cursor-pointer hover:bg-[#c25124] px-2 py-2 place-content-center pt-2 gap-x-1 rounded text-[14px] text-white transition-all duration-300 group">
            <img src={buttonIcon} alt="button-icon" className="w-5 h-5  transform group-hover:translate-x-1 transition-all duration-300" />
            Start 14 days Free Trial
          </button>
        </div>

        {/* Hamburger Icon (Mobile) */}
        <button
          className="md:hidden text-orange-500 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes size={28} className="text-black"/> : <FaBars size={28}  />}
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div
          className="md:hidden w-full h-screen overflow-auto absolute top-full left-0 grid tems-center gap-4 py-4"
          style={{
            background: "black",
            backdropFilter: "blur(100px)",
            WebkitBackdropFilter: "blur(100px)",
            borderBottom: "1px solid rgba(255,255,255,0.1)",
            opacity: 1,
          }}
        >
          <NavLink
            to="/"
            style={{marginTop: '30px'}}
            className={({ isActive }) =>
              isActive
                ? "text-[#FFFF00] font-semibold transition" 
                : "text-white font-normal hover:opacity-70 transition" 
            }
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/pricing"
             className={({ isActive }) =>
              isActive
                ? "text-[#FFFF00] font-semibold transition" 
                : "text-white font-normal hover:opacity-70 transition" 
            }
            onClick={() => setMenuOpen(false)}
          >
            Pricing
          </NavLink>
          <NavLink
            to="/about"
             className={({ isActive }) =>
              isActive
                ? "text-[#FFFF00] font-semibold transition" 
                : "text-white font-normal hover:opacity-70 transition" 
            }
            onClick={() => setMenuOpen(false)}
          >
            About us
          </NavLink>
          <NavLink
            to="/product"
             className={({ isActive }) =>
              isActive
                ? "text-[#FFFF00] font-semibold transition" 
                : "text-white font-normal hover:opacity-70 transition" 
            }
            onClick={() => setMenuOpen(false)}
          >
            Our Product
          </NavLink>
          <NavLink
            to="/contact"
             className={({ isActive }) =>
              isActive
                ? "text-[#FFFF00] font-semibold transition" 
                : "text-white font-normal hover:opacity-70 transition" 
            }
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </NavLink>
          <button className="bg-transparent border gap-3 border-white text-white rounded-md px-6 py-2 font-medium flex items-center  hover:bg-white hover:text-black transition text-base">
            <FaUser size={16} /> Log in
          </button>
          <button className="flex  bg-[#FF4C05] cursor-pointer hover:bg-[#c25124] px-2 py-2 place-content-center pt-2 gap-x-1 rounded font-montserrat text-[14px] text-white transition-all duration-300 group">
            <img src={buttonIcon} alt="button-icon" className="w-5 h-5  transform group-hover:translate-x-1 transition-all duration-300" />
            Start 14 days Free Trial
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;