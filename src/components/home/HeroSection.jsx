import React from "react";
<<<<<<< HEAD
import heroBg from "../../assets/images/landing-page-1.png";

const HeroSection = () => {
  return (
    <section
      className="relative w-full h-[550px] flex items-center justify-center"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "top",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl pl-0 pr-0 -ml-80 text-left items-start flex flex-col">
        <h1 className="text-white text-5xl font-bold leading-tight mb-6">
          Streamline your <br />
          business with smart <br />
          <span className="relative">
            <span className="text-white-300 relative">
              inventory
              <svg
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                width="160"
                height="100"
                viewBox="0 0 320 114"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ zIndex: 1 }}
              >
                <path
                  d="M266 8C206 -2 73 -7 16 50C-54 121 158 123 239 112C287 105 320 89 320 66C320 46 265 16 165 21"
                  stroke="#FFFF00"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </span>{" "}
          and analytics
        </h1>
        <p className="text-white text-lg mb-8">
          Empower your business with advanced inventory management and
          analytics.
        </p>
        <div className="flex gap-4">
          <button className="bg-orange-500 text-white rounded-md px-6 py-3 font-medium shadow hover:bg-orange-600 transition">
            Start 14 Days Free Trial
          </button>
          <button className="bg-transparent border border-white text-white rounded-md px-6 py-3 font-medium hover:bg-white hover:text-black transition">
            Contact Us
          </button>
        </div>
      </div>
      <svg
        className="absolute"
        width="330"
        height="115"
        viewBox="0 0 330 115"
        fill="none"
        style={{ left: 82, top: 574 }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse
          cx="165"
          cy="57.5"
          rx="160"
          ry="50"
          stroke="#FFFF00"
          strokeWidth="2.2"
        />
      </svg>
=======
import { motion } from "framer-motion";
import buttonIcon from "../../assets/images/button-icon-1.svg";

const HeroSection = () => {
  // Animation variants for staggered reveal
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // delay each child
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="hero-section"
      className="bg-cover bg-center h-110 md:h-150 flex"
    >
      <motion.div
        className="text-white p-4 sm:mb-10 md:ml-10 md:mb-30 flex flex-col justify-end gap-y-5 w-full mb-4"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={itemVariants}>
          <h1 className="font-clashDisplay font-medium text-4xl lg:text-6xl">
            Streamline your <br />
            business with smart <br />
            <span className="border-[#FFFF00] border-2 rounded-4xl py-1 px-2">
              inventory
            </span>{" "}
            and analytics
          </h1>
        </motion.div>

        <motion.div variants={itemVariants}>
          <p className="text-white text-[15px] font-inter font-[400] md:text-[17px]">
            Empower your business with advanced inventory management and
            analytics.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="flex gap-x-2">
          {/* CTA button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex bg-[#FF4C05] cursor-pointer hover:bg-[#c25124] px-2 place-content-center pt-2 gap-x-1 rounded font-montserrat text-[14px] text-white transition-all duration-300 group"
          >
            <img
              src={buttonIcon}
              alt="button-icon"
              className="w-5 h-5 transform group-hover:translate-x-1 transition-all duration-300"
            />
            Start 14 days Free Trial
          </motion.button>

          {/* Secondary button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border py-2 px-3 cursor-pointer rounded text-[15px] font-[500] font-montserrat transition-all duration-300 hover:border-black"
          >
            Contact Us
          </motion.button>
        </motion.div>
      </motion.div>
>>>>>>> 4726cfc538544f2521642e0b2b9bc8214666e6d2
    </section>
  );
};

export default HeroSection;
