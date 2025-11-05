import React from 'react';
import profile1 from '../../assets/images/image-1.png';
import profile2 from '../../assets/images/image-2.png';
import icon1 from '../../assets/images/pricing-icon-1.svg';

export default function AboutHeroSection() {
  return (
    <div className="relative bg-[#ffffff] overflow-hidden">
      {/* Main content container */}
      <div className="relative mt-10 lg:mt-30 z-15 flex flex-col lg:flex-row items-center justify-center px-4 py-10 gap-10 lg:gap-1">
        
        {/* Left images */}
        <div className="flex flex-row sm:flex-col items-center space-x-4 sm:space-x-0 sm:space-y-4">
          <img
            src={icon1}
            alt="icon1"
            className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full object-cover"
          />
          <img
            src={profile1}
            alt="profile1"
            className="w-20 h-20 lg:w-25 lg:h-25 rounded-full object-cover"
          />
        </div>

        {/* Main heading + subtext */}
        <div className="text-center lg:max-w-4xl mx-2">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-clashDisplay font-medium text-gray-900 leading-tight">
            Simplifying how you manage
          </h1>
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-clashDisplay font-medium leading-tight">
            <span className="text-gray-900">your </span>
            <span className="text-orange-500">inventory operations</span>
          </h1>

          <p className="text-[#5E5E5E] text-sm md:text-base leading-relaxed font-inter mt-4 px-2">
            Track stock in real time, prevent shortages, and make smarter restocking decisions with ease. 
            Our system gives you full visibility into your business inventory — anytime, anywhere.
          </p>
        </div>

        {/* Right images */}
        <div className="flex flex-row sm:flex-col items-center space-x-4 sm:space-x-0 sm:space-y-4">
          <img
            src={profile2}
            alt="profile2"
            className="w-20 h-20 lg:w-25 lg:h-25 rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
