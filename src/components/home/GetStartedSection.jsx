import React from "react";
import { motion } from "framer-motion";
import image from "../../assets/images/get-started-section-image.png";

const GetStartedSection = () => {
  return (
    <section className="mb-10 mt-10 grid">
      <motion.div
        id="get-started"
        className="bg-center bg-cover h-100 flex flex-col gap-y-5 place-content-center mx-4 sm:my-10 sm:mx-40 rounded-2xl"
        style={{
          backgroundImage: `url(${image})`,
        }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Heading animation */}
        <motion.h1
          className="text-white font-clashDisplay font-medium text-2xl text-center md:text-5xl"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Olastute Software fits just right for your business
        </motion.h1>

        {/* Button animation */}
        <motion.button
          className="bg-[#FF4C05] cursor-pointer font-inter text-white font-bold text-[14px] mx-10 py-2 rounded w-50 place-self-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started Now
        </motion.button>
      </motion.div>
    </section>
  );
};

export default GetStartedSection;
