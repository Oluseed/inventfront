import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import user_01 from "../../assets/images/user.png";

const reviewsData = [
  { id: 1, image: user_01, nameKey: "reviews.1.name", roleKey: "reviews.1.role", reviewKey: "reviews.1.text" },
  { id: 2, image: user_01, nameKey: "reviews.2.name", roleKey: "reviews.2.role", reviewKey: "reviews.2.text" },
  { id: 3, image: user_01, nameKey: "reviews.3.name", roleKey: "reviews.3.role", reviewKey: "reviews.3.text" },
  { id: 4, image: user_01, nameKey: "reviews.4.name", roleKey: "reviews.4.role", reviewKey: "reviews.4.text" },
  { id: 5, image: user_01, nameKey: "reviews.5.name", roleKey: "reviews.5.role", reviewKey: "reviews.5.text" },
];

const Reviews = () => {
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);
  const scrollRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviewsData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container || window.innerWidth < 1024) return;
    let frame;
    const speed = 0.5;
    const autoScroll = () => {
      container.scrollLeft += speed;
      if (container.scrollLeft >= container.scrollWidth / 2) container.scrollLeft = 0;
      frame = requestAnimationFrame(autoScroll);
    };
    frame = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(frame);
  }, []);

  const slideVariants = {
    initial: { opacity: 0, x: 100, scale: 0.9 },
    animate: { opacity: 1, x: 0, scale: 1 },
    exit: { opacity: 0, x: -100, scale: 0.9 },
  };

  return (
    <section className="w-full py-20 bg-[#FDFDFD]">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="font-clashDisplay font-medium text-3xl md:text-4xl lg:text-5xl text-center">
          {t("reviews.title")}
        </h1>

        {/* Mobile Carousel */}
        <div className="lg:hidden mt-10 flex justify-center overflow-hidden px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              variants={slideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="w-full max-w-lg bg-white p-6 rounded-[30px] shadow-md"
              style={{
                borderImage: "linear-gradient(90deg, #FF8453, #FFE1D6) 1",
                borderWidth: "4px",
                borderStyle: "solid",
                borderRadius: "30px",
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <img src={reviewsData[index].image} alt={t(reviewsData[index].nameKey)} className="w-12 h-12 rounded-xl object-cover" />
                <div>
                  <h1 className="text-[#667085] font-medium">{t(reviewsData[index].nameKey)}</h1>
                  <p className="text-black text-[14px]">{t(reviewsData[index].roleKey)}</p>
                </div>
              </div>
              <p className="text-[#272727] font-inter text-[14px] leading-relaxed">{t(reviewsData[index].reviewKey)}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Mobile Dots */}
        <div className="lg:hidden flex justify-center mt-4 gap-2">
          {reviewsData.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition-all ${i === index ? "bg-[#FF8453] scale-125" : "bg-gray-300"}`}
            />
          ))}
        </div>

        {/* Desktop Scroll */}
        <div ref={scrollRef} className="hidden lg:flex mt-12 gap-6 overflow-x-hidden">
          {[...reviewsData, ...reviewsData].map((user, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[28%] bg-white rounded-[30px] shadow-md p-6 hover:scale-[1.02] transition-transform duration-300"
              style={{
                borderImage: "linear-gradient(90deg, #FF8453, #FFE1D6) 1",
                borderWidth: "4px",
                borderStyle: "solid",
                borderRadius: "30px",
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <img src={user.image} alt={t(user.nameKey)} className="w-12 h-12 rounded-xl object-cover" />
                <div>
                  <h1 className="text-[#667085] font-medium text-[15px]">{t(user.nameKey)}</h1>
                  <p className="text-black text-[13px]">{t(user.roleKey)}</p>
                </div>
              </div>
              <p className="text-[#272727] font-inter text-[14px] leading-relaxed">{t(user.reviewKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
