import React from 'react';
import profile1 from '../../assets/images/image-1.png';
import profile2 from '../../assets/images/image-2.png';
import icon1 from '../../assets/images/pricing-icon-1.svg'

export default function AboutHeroSection() {
  return (
    <div className="relative bg-[#fffff] overflow-hidden">
      {/* Main content container */}
      <div className="relative mt-20 z-15 flex flex-col lg:flex-row items-center justify-center mb-10 px-4 py-12 gap-10 lg:gap-1">
        {/* Left images */}
        <div className="flex flex-row sm:flex-col items-center space-x-4 sm:space-x-0 sm:space-y-4 ">
          <img src={icon1} alt="icon1" className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full object-cover" />
          <img src={profile1} alt="profile1" className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full object-cover" />
        </div>

        {/* Main heading + subtext */}
        <div className="text-center max-w-3xl lg:max-w-4xl mx-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-clashDisplay font-medium text-gray-900 leading-tight">
            Empowering businesses with
          </h1>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-clashDisplay font-medium leading-tight">
            <span className="text-gray-900">global </span>
            <span className="text-orange-500">payment solutions</span>
          </h1>

          <p className="text-[#5E5E5E] text-sm md:text-base leading-relaxed font-inter mt-4 px-2">
            Felis orci tempor sed in sit aliquam. Sit donec egestas ridiculus porttitor amet.
            Convallis in pulvinar convallis proin imperdiet mauris. Aliquet sit libero convallis quis
            proin egestas viverra.
          </p>
        </div>

        {/* Right images */}
        <div className="flex flex-row sm:flex-col items-center space-x-4 sm:space-x-0 sm:space-y-4">
          <img src={profile2} alt="profile2" className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full object-cover" />
        </div>
      </div>
      {/* Photo Grid */}
<div className="mt-16 space-y-6 max-w-6xl mx-auto">
  {/* Row 1 */}
  <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
    <img src={profile1} alt="" className="w-full rounded-2xl shadow-md" />
    <img src={profile2} alt="" className="w-full rounded-2xl shadow-md" />
    <img src={profile1} alt="" className="hidden md:block w-full rounded-2xl shadow-md" />
  </div>
  {/* Row 2 with offset */}
  <div className="grid grid-cols-2 md:grid-cols-3 gap-6 ml-8">
    <img src={profile2} alt="" className="w-full rounded-2xl shadow-md" />
    <img src={profile1} alt="" className="w-full rounded-2xl shadow-md" />
    <img src={profile2} alt="" className="hidden md:block w-full rounded-2xl shadow-md" />
  </div>
</div>



    </div>
  );
}