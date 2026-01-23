import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import phone from "../../assets/images/phone olastute.png";
import ipad from "../../assets/images/ipad olastute.png";
import laptop from "../../assets/images/laptop olastute.png";

const HeroSection2 = () => {
  const { t } = useTranslation();

  return (
    <section className="relative flex justify-center items-center mt-16 mb-10 overflow-hidden">
      <div className="relative w-full max-w-6xl h-[400px] md:h-[520px]">
        {/* Laptop - main */}
        <motion.img
          src={laptop}
          alt={t("hero2.laptopAlt")}
          className="absolute left-1/2 top-1/2 w-[85%] -translate-x-1/2 -translate-y-1/2 rounded-2xl shadow-2xl z-20"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />

        {/* iPad - back */}
        <motion.img
          src={ipad}
          alt={t("hero2.ipadAlt")}
          className="absolute left-1/2 top-1/2 w-[65%] -translate-x-[55%] -translate-y-[55%] rounded-2xl shadow-xl z-10"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.1, ease: "easeOut", delay: 0.2 }}
        />

        {/* Phone - front */}
        <motion.img
          src={phone}
          alt={t("hero2.phoneAlt")}
          className="absolute right-6 bottom-0 w-[20%] md:w-[18%] rounded-2xl shadow-2xl z-30"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut", delay: 0.4 }}
        />
      </div>
    </section>
  );
};

export default HeroSection2;
