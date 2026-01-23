import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import image_1 from "../../assets/images/product-1.png";
import image_2 from "../../assets/images/product-2.png";
import image_3 from "../../assets/images/product-3.png";

export const ProductList = () => {
  const { t } = useTranslation();

  const productList = t("products.list", { returnObjects: true });

  return (
    <div className="grid place-content-center gap-16">
      {productList.map((product, index) => {
        const isReversed = index % 2 !== 0;

        return (
          <motion.div
            key={product.id}
            className={`flex flex-col md:flex-row items-center gap-5 ${
              isReversed ? "md:flex-row-reverse" : ""
            }`}
            initial={{ opacity: 0, x: isReversed ? 100 : -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Image */}
            <motion.div
              className="w-full md:w-1/2 flex justify-center"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src={
                  product.id === 1
                    ? image_1
                    : product.id === 2
                    ? image_2
                    : image_3
                }
                alt={product.title}
                className="w-70 h-70 lg:w-100 lg:h-100 rounded-2xl shadow-lg"
              />
            </motion.div>

            {/* Text Content */}
            <motion.div
              className="px-2 md:px-5 w-full md:w-1/2 flex flex-col justify-center"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h1 className="font-clashDisplay text-3xl md:text-4xl mb-4 font-medium">
                {product.title}
              </h1>
              <ul className="font-inter text-sm lg:text-[16px] text-[#5E5E5E] list-disc list-inside leading-relaxed mb-6">
                {product.content.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              <a
                href={product.navigateTo}
                className="bg-[#FF4C05] text-white px-6 w-50 py-2 rounded-lg font-clashDisplay font-light hover:bg-[#1E293B] transition flex place-content-center"
              >
                {t("products.button")}
              </a>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
};
