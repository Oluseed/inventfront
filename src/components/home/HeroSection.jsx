import React from "react";
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
    </section>
  );
};

export default HeroSection;
