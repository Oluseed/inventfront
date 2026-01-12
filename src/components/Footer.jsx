import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { motion } from "framer-motion";
import logo from "../assets/images/olastute logo.png";
import { NavLink } from "react-router-dom";

const socialIcons = [
  { id: 1, icon: <FaInstagram size={22} className="text-black" /> },
  { id: 2, icon: <FaFacebook size={22} className="text-black" /> },
  { id: 3, icon: <FaX size={22} className="text-black" /> },
  { id: 4, icon: <FaLinkedin size={22} className="text-black" /> },
];

// Variants for staggered animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Footer = () => {
  return (
    <footer className="bg-black sm:h-120 text-white grid">
      <motion.div
        className="p-4 sm:px-10 flex flex-col sm:flex-row sm:gap-x-10 sm:justify-between"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true }}
      >
        {/* Address + Logo + Socials */}
        <motion.div className="grid gap-y-5 font-inter" variants={itemVariants}>
          <div>
            <img 
              src={logo} 
              alt="logo" 
              className="w-20 md:w-30 lg:w-40 h-30 lg:h-50 object-contain"
            />
          </div>
          <h1>Osun State, Nigeria</h1>
          <div className="grid gap-y-3 sm:flex sm:gap-x-2">
            {socialIcons.map((item) => (
              <motion.div
                key={item.id}
                className="bg-[#E0E0E0] w-10 h-10 flex items-center justify-center rounded"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {item.icon}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Company */}
        <motion.div
          className="flex flex-col mt-10 gap-y-3 font-inter"
          variants={itemVariants}
        >
          <h1 className="font-semibold">COMPANY</h1>
          <div className="font-light text-[14px] mt-5 grid gap-y-5">
            <NavLink to={'/about'}><h1>About</h1></NavLink>
            <NavLink to={"/pricing"}><h1>Pricing</h1></NavLink>
            <NavLink to={'/contact'}> <h1>Contact Us</h1></NavLink>
          </div>
        </motion.div>

        {/* Legal */}
        <motion.div
          className="flex flex-col mt-10 gap-y-3 font-inter"
          variants={itemVariants}
        >
          <h1 className="font-semibold">LEGAL</h1>
          <div className="font-light text-[14px] mt-5 grid gap-y-5">
            <h1>Legal</h1>
            <h1>Terms and Condition</h1>
            <h1>Privacy Policy</h1>
          </div>
        </motion.div>

        {/* Resources */}
        <motion.div
          className="flex flex-col mt-10 gap-y-3 font-inter"
          variants={itemVariants}
        >
          <h1 className="font-semibold">RESOURCES</h1>
          <div className="font-light text-[14px] mt-5 grid gap-y-5">
            <h1>Others</h1>
            <h1>Secured Payment Gateways</h1>
          </div>
        </motion.div>
      </motion.div>

      {/* Footer bottom */}
      <motion.div
        className="place-self-center font-inter mt-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p>&copy;2025. All rights reserved.</p>
      </motion.div>
    </footer>
  );
};

export default Footer;
