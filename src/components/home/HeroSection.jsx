import React from "react";
import heroBg from "../../assets/images/landing-page-1.png";

const HeroSection = () => {
  return (
    <section
      className="relative w-full h-[550px] flex items-center justify-center"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "top",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl pl-0 pr-0 -ml-80 text-left items-start flex flex-col">
        <h1 className="text-white text-5xl font-bold leading-tight mb-6">
          Streamline your <br />
          business with smart <br />
          <span className="relative">
            <span className="text-white-300 relative">
              inventory
              <svg
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                width="160"
                height="100"
                viewBox="0 0 320 114"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ zIndex: 1 }}
              >
                <path
                  d="M266 8C206 -2 73 -7 16 50C-54 121 158 123 239 112C287 105 320 89 320 66C320 46 265 16 165 21"
                  stroke="#FFFF00"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </span>{" "}
          and analytics
        </h1>
        <p className="text-white text-lg mb-8">
          Empower your business with advanced inventory management and
          analytics.
        </p>
        <div className="flex gap-4">
          <button className="bg-orange-500 text-white rounded-md px-6 py-3 font-medium shadow hover:bg-orange-600 transition">
            Start 14 Days Free Trial
          </button>
          <button className="bg-transparent border border-white text-white rounded-md px-6 py-3 font-medium hover:bg-white hover:text-black transition">
            Contact Us
          </button>
        </div>
      </div>
      <svg
        className="absolute"
        width="330"
        height="115"
        viewBox="0 0 330 115"
        fill="none"
        style={{ left: 82, top: 574 }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse
          cx="165"
          cy="57.5"
          rx="160"
          ry="50"
          stroke="#FFFF00"
          strokeWidth="2.2"
        />
      </svg>
    </section>
  );
};

export default HeroSection;
