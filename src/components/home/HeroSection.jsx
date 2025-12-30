import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import buttonIcon from "../../assets/images/button-icon-1.svg";
import { NavLink } from "react-router-dom";

const HeroSection = () => {
  const [showDemoForm, setShowDemoForm] = useState(false);
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [additionalDetails, setAdditionalDetails] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  // Submit Handler
  const handleDemoSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const response = await fetch(
        "https://demo-requests-api.olastute.com/api/demo-requests",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            email,
            name: fullName,
            details: additionalDetails, // Optional
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit request.");
      }

      setSuccess(true);
      setEmail("");
      setFullName("");
      setAdditionalDetails("");
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
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
          <h1 className="font-clashDisplay font-medium text-4xl lg:text-6xl leading-tight">
            Streamline your <br />
            business with smart <br />
            <span className="border-[#FFFF00] border-2 rounded-4xl py-1 px-2">
              inventory
            </span>{" "}
            and analytics
          </h1>
        </motion.div>

        <motion.div variants={itemVariants}>
          <p className="text-white text-[15px] font-inter md:text-[17px]">
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
            className="flex bg-[#FF4C05] hover:bg-[#c25124] px-3 py-2 gap-x-1 rounded font-montserrat text-[14px] text-white transition group"
          >
            <img
              src={buttonIcon}
              alt="button-icon"
              className="w-5 h-5 transform group-hover:translate-x-1 transition"
            />
            View Demo
          </motion.button>

          {/* Secondary Button */}
          <NavLink to={"/contact"}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border py-2 px-3 rounded text-[15px] font-montserrat hover:border-black transition"
            >
              Contact Us
            </motion.button>
          </NavLink>
        </motion.div>
      </motion.div>

      {/* DEMO REQUEST MODAL */}
      <AnimatePresence>
        {showDemoForm && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6 relative max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setShowDemoForm(false)}
                className="absolute top-3 right-3 text-gray-600 hover:text-black text-2xl font-bold"
              >
                ×
              </button>

              {/* Title */}
              <h2 className="text-2xl font-semibold text-gray-800 text-center font-clashDisplay mb-2">
                Request for customize
              </h2>

              <p className="font-inter text-gray-500 text-sm text-center mb-4">
                Enter your details below. We’ll send you a demo link once ready.
              </p>

              {/* Error Message */}
              {error && (
                <p className="text-red-600 text-center text-sm mb-2">
                  {error}
                </p>
              )}

              {/* Success Message */}
              {success && (
                <p className="text-green-600 text-center text-sm mb-2">
                  Demo request submitted successfully!
                </p>
              )}

              {/* Demo Form */}
              <form
                onSubmit={handleDemoSubmit}
                className="flex flex-col gap-4 mt-4"
              >
                {/* Full Name */}
                <div className="grid gap-y-1">
                  <label className="font-clashDisplay font-medium">
                    Full Name
                  </label>
                  <input
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    type="text"
                    placeholder="John Doe"
                    className="border border-gray-300 font-inter text-sm rounded-lg p-2 focus:ring-2 focus:ring-[#FF4C05] outline-none"
                  />
                </div>

                {/* Email */}
                <div className="grid gap-y-1">
                  <label className="font-clashDisplay font-medium">
                    Email Address
                  </label>
                  <input
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="john@example.com"
                    className="border border-gray-300 font-inter text-sm rounded-lg p-2 focus:ring-2 focus:ring-[#FF4C05] outline-none"
                  />
                </div>

                {/* Optional Details */}
                <div className="grid gap-y-1">
                  <label className="font-clashDisplay font-medium">
                    Additional Details{" "}
                    <span className="text-gray-400">(optional)</span>
                  </label>
                  <textarea
                    value={additionalDetails}
                    onChange={(e) => setAdditionalDetails(e.target.value)}
                    placeholder="Tell us about your business..."
                    className="border border-gray-300 font-inter text-sm rounded-lg p-2 h-24 resize-none focus:ring-2 focus:ring-[#FF4C05] outline-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-[#FF4C05] text-white py-2 rounded-lg hover:bg-[#c25124] disabled:opacity-50 disabled:cursor-not-allowed transition"
                >
                  {loading ? "Submitting..." : "Submit Request"}
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
