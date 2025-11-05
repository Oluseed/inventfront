import React from "react";
import { motion } from "framer-motion";

export const ContactForm = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="grid place-content-center py-12 px-4 md:px-10">
      <motion.div
        className="grid gap-12 md:gap-16 w-full max-w-5xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {/* Heading */}
        <motion.div className="text-center" variants={itemVariants}>
          <h1 className="font-clashDisplay font-medium text-3xl md:text-5xl">
            We are tailored to{" "}
            <span className="block md:inline border-2 px-3 py-1 rounded-3xl border-[#FF4C05] text-[#FF4C05]">
              your needs
            </span>
          </h1>
          <p className="text-[#5E5E5E] font-inter text-[14px] md:text-[16px] mt-4 px-2 md:px-20">
            Whether you’re looking to collaborate, request a quote, or simply
            ask a few questions — we’re here to help. Our team will get back to
            you within 24 hours. Let’s bring your ideas to life together.
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          action=""
          className="grid gap-10 bg-[#FFF6F3] rounded-lg shadow-sm px-4 md:px-10 py-10"
          variants={containerVariants}
        >
          {/* Inputs */}
          <motion.div
            className="grid gap-5 md:grid-cols-3"
            variants={containerVariants}
          >
            <motion.div className="grid gap-2" variants={itemVariants}>
              <label
                htmlFor="fullname"
                className="font-clashDisplay font-medium text-[16px]"
              >
                Full Name
              </label>
              <input
                id="fullname"
                name="fullname"
                type="text"
                required
                placeholder="Enter your full name"
                className="border bg-white p-2 font-clashDisplay text-[14px] rounded focus:outline-none focus:ring-2 focus:ring-[#FF4C05]"
              />
            </motion.div>

            <motion.div className="grid gap-2" variants={itemVariants}>
              <label
                htmlFor="email"
                className="font-clashDisplay font-medium text-[16px]"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Enter your email address"
                className="border bg-white p-2 font-clashDisplay text-[14px] rounded focus:outline-none focus:ring-2 focus:ring-[#FF4C05]"
              />
            </motion.div>

            <motion.div className="grid gap-2" variants={itemVariants}>
              <label
                htmlFor="phonenumber"
                className="font-clashDisplay font-medium text-[16px]"
              >
                Phone Number
              </label>
              <input
                id="phonenumber"
                name="phonenumber"
                type="tel"
                required
                placeholder="Enter your phone number"
                className="border bg-white p-2 font-clashDisplay text-[14px] rounded focus:outline-none focus:ring-2 focus:ring-[#FF4C05]"
              />
            </motion.div>
          </motion.div>

          {/* Message */}
          <motion.div className="grid gap-2" variants={itemVariants}>
            <label
              htmlFor="message"
              className="font-clashDisplay font-medium text-[16px]"
            >
              Message
            </label>
            <motion.textarea
              id="message"
              name="message"
              required
              cols={30}
              rows={6}
              placeholder="Tell us more about your project or inquiry..."
              className="border bg-white p-3 font-clashDisplay text-[14px] rounded focus:outline-none focus:ring-2 focus:ring-[#FF4C05]"
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{
                scale: 1,
                opacity: 1,
                transition: { duration: 0.5 },
              }}
              viewport={{ once: true }}
            ></motion.textarea>
          </motion.div>

          {/* Submit form */}
          <motion.div
            className="grid md:grid-cols-2 gap-5 md:gap-16 items-center"
            variants={itemVariants}
          >
            <div className="flex gap-2 items-center">
              <input type="checkbox" id="terms" required />
              <label
                htmlFor="terms"
                className="font-clashDisplay text-[#999999] text-sm"
              >
                I agree with{" "}
                <span className="underline text-[#FF4C05] cursor-pointer">
                  Terms of Use and Privacy Policy
                </span>
              </label>
            </div>

            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 8px 20px rgba(255,76,5,0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#FF4C05] cursor-pointer text-white p-3 rounded font-clashDisplay text-[16px] transition-all duration-300"
            >
              Send Your Message
            </motion.button>
          </motion.div>

          {/* Contact details footer (optional) */}
          <motion.div
            className="text-center text-sm text-[#5E5E5E] mt-6"
            variants={itemVariants}
          >
            <p>
              Prefer to talk directly? Reach us at{" "}
              <span className="text-[#FF4C05] font-medium">
                support@yourbrand.com
              </span>{" "}
              or call{" "}
              <span className="text-[#FF4C05] font-medium">
                +234 800 000 0000
              </span>
              .
            </p>
          </motion.div>
        </motion.form>
      </motion.div>
    </section>
  );
};
