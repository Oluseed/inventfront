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
    <section className="grid place-content-center">
      <motion.div
        className="grid mt-4 gap-8 md:gap-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {/* Heading */}
        <motion.div className="text-center" variants={itemVariants}>
          <h1 className="mt-4 font-clashDisplay font-medium text-3xl md:text-5xl text-center">
            We are tailored to{" "}
            <span className="block md:inline border-2 p-2 w-50 place-self-center rounded-4xl border-[#FF4C05]">
              your needs
            </span>
          </h1>
          <p className="text-[#5E5E5E] font-inter text-[14px] md:text-[16px] mt-4 px-2 md:px-20">
            Pellentesque ut euismod dolor molestie magna id quis quisque.
            Semper eget consectetur sed dolor diam leo eu risus. Dignissim eget
            arcu faucibus cras quis donec
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          action=""
          className="grid gap-8 md:gap-16 px-2.5 md:px-10 lg:px-15 bg-[#FFF6F3] mx-3 rounded md:mx-10 lg:mx-15"
          variants={containerVariants}
        >
          <div className="grid gap-8 md:gap-16 py-10">
            {/* Inputs */}
            <motion.div
              className="grid gap-5 md:grid-cols-3"
              variants={containerVariants}
            >
              <motion.div className="grid gap-2" variants={itemVariants}>
                <label
                  htmlFor="FullName"
                  className="font-clashDisplay font-medium text-[16px]"
                >
                  FullName
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="border bg-[#FFFFFF] p-2 font-clashDisplay text-[14px] rounded"
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
                  type="email"
                  placeholder="Enter your email address"
                  className="border bg-[#FFFFFF] p-2 font-clashDisplay text-[14px] rounded"
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
                  type="text"
                  placeholder="Enter your phone number"
                  className="border bg-[#FFFFFF] p-2 font-clashDisplay text-[14px] rounded"
                />
              </motion.div>
            </motion.div>

            {/* Message */}
            <motion.div className="grid gap-2" variants={itemVariants}>
              <label
                className="font-clashDisplay font-medium text-[16px]"
                htmlFor="message"
              >
                Message
              </label>
              <motion.textarea
                name="message"
                id=""
                cols="30"
                rows="10"
                placeholder="Type your message here"
                className="border bg-[#FFFFFF] p-2 font-clashDisplay text-[14px] rounded"
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
                <input type="checkbox" name="" id="" />
                <p className="font-clashDisplay text-[#999999] text-sm">
                  I agree with{" "}
                  <span className="underline">Terms of Use and Privacy Policy</span>
                </p>
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
          </div>
        </motion.form>
      </motion.div>
    </section>
  );
};
