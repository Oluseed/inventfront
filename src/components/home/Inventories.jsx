import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import inventoryImg1 from "../../assets/images/inventory-image01.png";
import inventoryImg2 from "../../assets/images/inventory-image02.png";

import icon1 from "../../assets/images/icon-1.svg";
import icon2 from "../../assets/images/icon-2.svg";
import icon3 from "../../assets/images/icon-3.svg";

const cards = [
  // Inventory cards
  {
    id: 1,
    bg: "bg-[#FFF3E6]",
    titleKey: "inventory.cards.management.title",
    descKey: "inventory.cards.management.desc",
    image: inventoryImg1,
    imageClass: "w-20 self-end",
    float: true,
  },
  {
    id: 2,
    bg: "bg-[#E7F1FD]",
    titleKey: "inventory.cards.expirations.title",
    descKey: "inventory.cards.expirations.desc",
    image: inventoryImg2,
    imageClass: "absolute bottom-0 right-0 w-22 -rotate-10",
    rotate: true,
  },
  {
    id: 3,
    bg: "bg-[#FFE9E0]",
    titleKey: "inventory.cards.lowStock.title",
    descKey: "inventory.cards.lowStock.desc",
  },
  {
    id: 5,
    bg: "bg-[#F3FFCF]",
    titleKey: "inventory.cards.productTracking.title",
    descKey: "inventory.cards.productTracking.desc",
  },

  // Manage store cards
  {
    id: 6,
    bg: "bg-[#FFFDFD]",
    icon: icon1,
    titleKey: "manageStore.cards.zeroDelay.heading",
    descKey: "manageStore.cards.zeroDelay.description",
    bordered: true,
  },
  {
    id: 7,
    bg: "bg-[#FFFDFD]",
    icon: icon2,
    titleKey: "manageStore.cards.noHiddenFee.heading",
    descKey: "manageStore.cards.noHiddenFee.description",
    bordered: true,
  },
  {
    id: 8,
    bg: "bg-[#FFFDFD]",
    icon: icon3,
    titleKey: "manageStore.cards.alerts.heading",
    descKey: "manageStore.cards.alerts.description",
    bordered: true,
  },
];

const Inventories = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-white py-20">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h1 className="text-center font-clashDisplay font-medium text-3xl sm:text-4xl md:text-5xl">
          {t("inventory.heading.before")}{" "}
          <span className="border-2 border-[#FF4C05] rounded-4xl px-2 py-1">
            {t("inventory.heading.highlight")}
          </span>{" "}
          {t("inventory.heading.after")}
        </h1>
      </motion.div>

      {/* Grid */}
      <motion.div
        className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-5 md:px-10 lg:px-20"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { staggerChildren: 0.2 } },
        }}
      >
        {cards.map((card) => (
          <motion.div
            key={card.id}
            className={`${card.bg} ${
              card.bordered ? "border-2 border-[#AEAEAE]" : ""
            } relative rounded-2xl p-5 h-[220px] flex flex-col justify-between`}
            variants={{
              hidden: { opacity: 0, y: 40 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="flex flex-col gap-y-2">
              {card.icon && (
                <img src={card.icon} alt="" className="w-10 h-10" />
              )}
              <h2 className="font-clashDisplay text-xl font-medium">
                {t(card.titleKey)}
              </h2>
              <p className="font-inter text-[#5E5E5E] text-[13px]">
                {t(card.descKey)}
              </p>
            </div>

            {card.image && (
              <motion.img
                src={card.image}
                alt={t(card.titleKey)}
                className={card.imageClass}
                animate={
                  card.float
                    ? { y: [0, -10, 0] }
                    : card.rotate
                    ? { rotate: [-10, -5, -10] }
                    : {}
                }
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                }}
              />
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Inventories;
