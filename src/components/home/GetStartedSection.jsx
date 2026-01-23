import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import image from "../../assets/images/get-started-section-image.png";

const GetStartedSection = () => {
  const { t } = useTranslation();

  return (
    <section className="mb-10 mt-10 grid">
      <motion.div
        id="get-started"
        className="bg-center bg-cover h-100 flex flex-col gap-y-5 place-content-center mx-4 sm:my-10 sm:mx-40 rounded-2xl"
        style={{ backgroundImage: `url(${image})` }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.h1 className="text-white font-clashDisplay font-medium text-2xl text-center md:text-5xl">
          {t("getStarted.title")}
        </motion.h1>

        <motion.button className="bg-[#FF4C05] font-inter text-white font-bold text-[14px] mx-10 py-2 rounded place-self-center">
          {t("getStarted.cta")}
        </motion.button>
      </motion.div>
    </section>
  );
};

export default GetStartedSection;
