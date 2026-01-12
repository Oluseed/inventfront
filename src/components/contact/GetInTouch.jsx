import React from "react";
import { motion } from "framer-motion";

import Arrow from "../../assets/images/contact-arrow.png";
import EmailIcon from "../../assets/images/contact-icon-1.png";
import PhoneIcon from "../../assets/images/contact-icon-2.png";
import LocationIcon from "../../assets/images/contact-icon-3.png";

export const GetInTouch = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
    hover: { scale: 1.05, boxShadow: "0px 8px 20px rgba(0,0,0,0.15)" },
  };

  const cards = [
    {
      id: 1,
      icon: EmailIcon,
      title: "info@olastute.com",
    },
    {
      id: 2,
      icon: PhoneIcon,
      title: ["+234 806 685 9951"],
    },
    {
      id: 3,
      icon: LocationIcon,
      title:
        "Olaoluwa Estate, Okinni, Osun State, Nigeria",
    },
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-12 mt-20">
      <div className="bg-[#000000CC] pb-12 pt-10 mx-auto max-w-7xl rounded-2xl">
        {/* Heading */}
        <h1 className="font-clashDisplay font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white text-center">
          Get in touch with us
        </h1>

        <p className="font-inter font-normal text-sm md:text-base text-[#FFFFFF] text-center max-w-2xl mx-auto px-4 sm:px-8 mt-4">
          Have a question about our inventory solutions or need help managing
          your business more efficiently? Our support team is always ready to
          assist. Reach out and we’ll get back to you as soon as possible.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12 px-4 sm:px-8 md:px-12">
          {cards.map((card, i) => (
            <motion.div
              key={card.id}
              className="bg-white relative rounded-xl shadow-sm p-6 flex flex-col items-center text-center"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              whileHover="hover"
              variants={cardVariants}
            >
              {/* Arrow top-right */}
              <div className="absolute right-4 top-4 w-6 h-6">
                <img src={Arrow} alt="arrow" />
              </div>

              {/* Icon */}
              <div className="bg-[#FEF9F3] rounded-full p-3 mb-4">
                <img src={card.icon} alt="icon" className="w-6 h-6" />
              </div>

              {/* Content */}
              {Array.isArray(card.title) ? (
                card.title.map((line, idx) => (
                  <h1
                    key={idx}
                    className="font-clashDisplay font-medium text-gray-600"
                  >
                    {line}
                  </h1>
                ))
              ) : (
                <h1 className="font-clashDisplay font-medium text-gray-600 px-2">
                  {card.title}
                </h1>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
