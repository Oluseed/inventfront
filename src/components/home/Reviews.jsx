import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import user_01 from "../../assets/images/user.png";

const data = [
  {
    id: 1,
    image: user_01,
    name: "Alix Beckstrand",
    role: "Operations Associate at Healf",
    review:
      "Amazing App. Gives a great visual on current and future inventory. We decreased stockout from 4% to 1% in 2 months with Prediko. That’s hundreds of thousands of extra revenue per year unlocked! Team are super supportive to any requests too! Would highly recommend!",
  },
  {
    id: 2,
    image: user_01,
    name: "John Smith",
    role: "Head of Operations at XYZ",
    review:
      "Prediko changed the way we manage inventory. The predictive analytics saved us a lot of wasted stock and boosted our efficiency. Absolutely recommend!",
  },
  {
    id: 3,
    image: user_01,
    name: "Sarah Johnson",
    role: "Supply Chain Manager at ABC Corp",
    review:
      "The insights we got from Prediko are unmatched. Stockouts are rare now and we’ve saved huge amounts by optimizing stock levels.",
  },
  {
    id: 4,
    image: user_01,
    name: "Michael Lee",
    role: "Operations Director at DEF",
    review:
      "Simple, intuitive, and powerful. The alerts saved us so many times from overselling. A must-have for any business.",
  },
  {
    id: 5,
    image: user_01,
    name: "Anna Kim",
    role: "Inventory Lead at GHI Ltd",
    review:
      "Game-changer for inventory. Forecasting accuracy is spot-on and the support team is great!",
  },
];

const Reviews = () => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);
  const scrollRef = useRef(null);

  // Auto-advance for mobile carousel
  useEffect(() => {
    const next = () => {
      setIndex((prev) => (prev + 1) % data.length);
    };
    timeoutRef.current = setInterval(next, 4000); // every 4s
    return () => {
      if (timeoutRef.current) clearInterval(timeoutRef.current);
    };
  }, []);

  // Smooth scroll for desktop
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationFrame;
    const scrollSpeed = 0.5;

    const smoothScroll = () => {
      if (container) {
        container.scrollLeft += scrollSpeed;
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }
      animationFrame = requestAnimationFrame(smoothScroll);
    };

    if (window.innerWidth >= 1024) {
      animationFrame = requestAnimationFrame(smoothScroll);
    }

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <section className="w-full py-16 bg-[#FDFDFD]">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="font-clashDisplay font-medium text-3xl md:text-4xl lg:text-5xl text-center">
          Hear what they say about us
        </h1>

        {/* --- Mobile View (Carousel) --- */}
        <div className="lg:hidden relative mt-10 flex justify-center items-center px-4 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -100, scale: 0.9 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="max-w-lg w-full mb-10  rounded-3xl bg-white shadow-md p-6"
              style={{
                borderImage: "linear-gradient(90deg, #FF8453, #FFE1D6) 1",
              }}
            >
              <div className="flex items-center  gap-3 mb-4">
                <img
                  src={data[index].image}
                  alt={data[index].name}
                  className="w-12 h-12 rounded-lg object-cover"
                />
                <div className="grid font-inter">
                  <h1 className="text-[#667085] font-medium">{data[index].name}</h1>
                  <p className="text-[#000000] text-[14px]">{data[index].role}</p>
                </div>
              </div>
              <p className="text-[#272727] font-inter text-[14px] leading-relaxed">
                {data[index].review}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots for mobile navigation */}
        <div className="lg:hidden flex justify-center mt-4 gap-2">
          {data.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                i === index ? "bg-[#FF8453] scale-125" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        {/* --- Desktop View (Auto-Scrolling Row) --- */}
        <div
          ref={scrollRef}
          className="hidden lg:flex mt-10 gap-6 overflow-x-hidden relative"
        >
          {[...data, ...data].map((user, i) => (
            <div
              key={i}
              className="flex-shrink-0 font-inter w-[28%] mb-5 bg-white border-4 rounded-2xl shadow-md p-6 transition-transform duration-500 hover:scale-[1.02]"
              style={{
                border: "solid transparent",
                borderImage: "linear-gradient(90deg, #FF8453, #FFE1D6) 1",
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={user.image}
                  alt={user.name}
                  className="w-12 h-12 rounded-lg object-cover"
                />
                <div>
                  <h1 className="text-[#667085] font-medium text-[15px]">
                    {user.name}
                  </h1>
                  <p className="text-[#000000] font-medium text-[13px]">{user.role}</p>
                </div>
              </div>
              <p className="text-[#272727] font-inter text-[14px] leading-relaxed">
                {user.review}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
