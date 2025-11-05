import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import buttonIcon from "../../assets/images/button-icon-1.svg";
import { NavLink } from "react-router-dom";

const HeroSection = () => {
  const [showDemoForm, setShowDemoForm] = React.useState(false);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
      id="hero-section"
      className="bg-cover bg-center h-110 md:h-150 flex relative"
    >
      {/* Hero Content */}
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
          {/* CTA Button */}
          <motion.button
            onClick={() => setShowDemoForm(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex bg-[#FF4C05] cursor-pointer hover:bg-[#c25124] px-2 place-content-center pt-2 gap-x-1 rounded font-montserrat text-[14px] text-white transition-all duration-300 group"
          >
            <img
              src={buttonIcon}
              alt="button-icon"
              className="w-5 h-5 transform group-hover:translate-x-1 transition-all duration-300"
            />
            Request a Demo
          </motion.button>

          {/* Secondary Button */}
          <NavLink to={"/contact"}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border py-2 px-3 cursor-pointer rounded text-[15px] font-[500] font-montserrat transition-all duration-300 hover:border-black"
            >
              Contact Us
            </motion.button>
          </NavLink>
        </motion.div>
      </motion.div>

      {/* ✅ Demo Form Modal */}
      <AnimatePresence>
        {showDemoForm && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-2xl shadow-lg w-[90%] max-w-md p-6 relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setShowDemoForm(false)}
                className="absolute top-3 right-3 text-gray-600 hover:text-black text-2xl font-bold cursor-pointer"
              >
                ×
              </button>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center font-clashDisplay">
                Request a Demo
              </h2>

              <p className="font-inter text-gray-500 font-light mb-2 text-sm text-center">Fill out the form below and we will send you the demo link when it is ready.</p>

              <form className="flex flex-col gap-4 mt-5">
                <div className="grid gap-y-1">
                  <label htmlFor="fullname" className="font-clashDisplay font-medium">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="border border-gray-300 font-inter font-light text-sm text-gray-900 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#FF4C05]"
                  />
                </div>
                
                <div className="grid gap-y-1">
                  <label htmlFor="email" className="font-clashDisplay font-medium">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="border border-gray-300 font-inter font-light text-sm text-gray-900 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#FF4C05]"
                  />
                </div>
                
                <div className="grid gap-y-1">
                  <label htmlFor="business" className="font-clashDisplay font-medium">Additional Details <span className="text-gray-400">(optional)</span></label>
                  <textarea
                    placeholder="Tell us about your business..."
                    className="border border-gray-300 rounded-lg p-2 h-24 resize-none focus:outline-none focus:ring-2 font-inter focus:ring-[#FF4C05] text-gray-700"
                  ></textarea>
                </div>
                

                <button
                  type="submit"
                  className="bg-[#FF4C05] text-white py-2 rounded-lg hover:bg-[#c25124] transition duration-300"
                >
                  Submit Request
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default HeroSection;
