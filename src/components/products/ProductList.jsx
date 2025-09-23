import React from "react";
import { motion } from "framer-motion";
import image_1 from "../../assets/images/product-1.png";
import image_2 from "../../assets/images/product-2.png";
import image_3 from "../../assets/images/product-3.png";

export const ProductList = () => {
  const productList = [
    {
      id: 1,
      title: "Point of Sale",
      image: image_1,
      content: [
        "Speed up order processing in your restaurant with customizable sales screen and item modifiers",
        "Easily apply discounts and run effective promotions",
        "Create, save, and edit orders, letting customers pay when it’s convenient",
        "Offer full or partial refunds for customer convenience",
        "Keep track of cash movements, including sales, refunds, pay-ins/outs, and the expected cash amount in a drawer",
      ],
      navigateTo: "#",
    },
    {
      id: 2,
      title: "Inventory Management",
      image: image_2,
      content: ["Track stock levels in real time", "Get automated low-stock alerts", "Monitor sales by various payment types with breakdowns of cash, card, and other payment methods"],
      navigateTo: "#",
    },
    {
      id: 3,
      title: "Customer Loyalty",
      image: image_3,
      content: [
        "Reward your loyal customers with points",
        "Offer targeted discounts based on purchase history",
        "Connect a receipt printer, kitchen printer, and cash drawer for enhanced operations",
        "Send orders to the kitchen display to reduce errors, speed up service, and keep operations organized with a paperless system",
        "Connect the Loyverse Customer Display app to show order details to your customers for greater transparency and convenience"
      ],
      navigateTo: "#",
    },
  ];

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
                src={product.image}
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
              {/* Button */}
              <a
                href={product.navigateTo}
                className="bg-[#FF4C05] text-white px-6 w-50 py-2 rounded-lg font-clashDisplay font-light hover:bg-[#1E293B] transition flex place-content-center"
              >
                Explore Now
              </a>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
};
