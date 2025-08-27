import React, { useState } from "react";
// import { FaUser, FaBars, FaTimes } from "react-icons/fa";
// import { MdDiamond } from "react-icons/md";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 w-full z-20 text-white border-b border-white/10"
      style={{
        background: "rgba(0, 0, 0, 0.3)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      <div className="flex items-center justify-between px-4 md:px-8 py-3">
        {/* Logo */}
        <div className="w-10 h-10 bg-white rounded-lg mr-4" />

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="/"
            className="text-white font-bold hover:opacity-70 transition"
          >
            Home
          </a>
          <a
            href="/pricing"
            className="text-white font-bold hover:opacity-70 transition"
          >
            Pricing
          </a>
          <a
            href="/about"
            className="text-white font-bold hover:opacity-70 transition"
          >
            About us
          </a>
          <a
            href="/product"
            className="text-white font-bold hover:opacity-70 transition"
          >
            Our Product
          </a>
          <a
            href="/contact"
            className="text-white font-bold hover:opacity-70 transition"
          >
            Contact Us
          </a>
        </div>

        {/* Buttons (Desktop) */}
        <div className="hidden md:flex items-center gap-2 md:gap-4">
          <button className="bg-transparent border border-white text-white rounded-md px-4 md:px-6 py-2 font-medium flex items-center gap-2 hover:bg-white hover:text-black transition text-sm md:text-base">
            <FaUser size={16} /> Log in
          </button>
          <button className="bg-orange-500 text-white rounded-md px-4 md:px-6 py-2 font-medium flex items-center gap-2 shadow hover:bg-orange-600 transition text-sm md:text-base">
            <MdDiamond size={20} />
            Start 14 Days Free Trial
          </button>
        </div>

        {/* Hamburger Icon (Mobile) */}
        <button
          className="md:hidden text-orange-500 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div
          className="md:hidden w-full absolute top-full left-0 flex flex-col items-center gap-4 py-4"
          style={{
            background: "black",
            backdropFilter: "blur(100px)",
            WebkitBackdropFilter: "blur(100px)",
            borderBottom: "1px solid rgba(255,255,255,0.1)",
            opacity: 1,
          }}
        >
          <a
            href="/"
            className="text-white font-bold hover:opacity-70 transition"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="/pricing"
            className="text-white font-bold hover:opacity-70 transition"
            onClick={() => setMenuOpen(false)}
          >
            Pricing
          </a>
          <a
            href="/about"
            className="text-white font-bold hover:opacity-70 transition"
            onClick={() => setMenuOpen(false)}
          >
            About us
          </a>
          <a
            href="/product"
            className="text-white font-bold hover:opacity-70 transition"
            onClick={() => setMenuOpen(false)}
          >
            Our Product
          </a>
          <a
            href="/contact"
            className="text-white font-bold hover:opacity-70 transition"
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </a>
          <button className="bg-transparent border border-white text-white rounded-md px-6 py-2 font-medium flex items-center gap-2 hover:bg-white hover:text-black transition text-base">
            <FaUser size={16} /> Log in
          </button>
          <button className="bg-orange-500 text-white rounded-md px-6 py-2 font-medium flex items-center gap-2 shadow hover:bg-orange-600 transition text-base">
            <MdDiamond size={20} />
            Start 14 Days Free Trial
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;