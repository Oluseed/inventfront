import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export const ContactForm = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="grid place-content-center py-12 px-4 md:px-10">
      <motion.div className="grid gap-12 md:gap-16 w-full max-w-5xl" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={containerVariants}>
        
        {/* Heading */}
        <motion.div className="text-center" variants={itemVariants}>
          <h1 className="font-clashDisplay font-medium text-3xl md:text-5xl">
            {t("contactForm.heading")}
          </h1>
          <p className="text-[#5E5E5E] font-inter text-[14px] md:text-[16px] mt-4 px-2 md:px-20">
            {t("contactForm.description")}
          </p>
        </motion.div>

        {/* Form */}
        <motion.form className="grid gap-10 bg-[#FFF6F3] rounded-lg shadow-sm px-4 md:px-10 py-10" variants={containerVariants}>
          
          {/* Inputs */}
          <motion.div className="grid gap-5 md:grid-cols-3" variants={containerVariants}>
            {["fullName", "email", "phoneNumber"].map((field, idx) => (
              <motion.div key={idx} className="grid gap-2" variants={itemVariants}>
                <label className="font-clashDisplay font-medium text-[16px]">{t(`contactForm.${field}`)}</label>
                <input
                  type={field === "email" ? "email" : field === "phoneNumber" ? "tel" : "text"}
                  required
                  placeholder={t(`contactForm.${field}`)}
                  className="border bg-white p-2 font-clashDisplay text-[14px] rounded focus:outline-none focus:ring-2 focus:ring-[#FF4C05]"
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Message */}
          <motion.div className="grid gap-2" variants={itemVariants}>
            <label className="font-clashDisplay font-medium text-[16px]">{t("contactForm.message")}</label>
            <textarea
              placeholder={t("contactForm.messagePlaceholder")}
              required
              className="border bg-white p-3 font-clashDisplay text-[14px] rounded focus:outline-none focus:ring-2 focus:ring-[#FF4C05]"
            ></textarea>
          </motion.div>

          {/* Submit */}
          <motion.div className="grid md:grid-cols-2 gap-5 md:gap-16 items-center" variants={itemVariants}>
            <div className="flex gap-2 items-center">
              <input type="checkbox" required />
              <label className="font-clashDisplay text-[#999999] text-sm">{t("contactForm.terms")}</label>
            </div>

            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-[#FF4C05] cursor-pointer text-white p-3 rounded font-clashDisplay text-[16px] transition-all duration-300">
              {t("contactForm.submit")}
            </motion.button>
          </motion.div>

          {/* Footer */}
          <motion.div className="text-center text-sm text-[#5E5E5E] mt-6" variants={itemVariants}>
            <p>{t("contactForm.contactDetails", { email: "info@olastute.com", phone: "+234 806 685 9951" })}</p>
          </motion.div>
        </motion.form>
      </motion.div>
    </section>
  );
};
