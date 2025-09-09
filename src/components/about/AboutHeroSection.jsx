import React from 'react';
import profile1 from '../../assets/images/image-1.png';
import profile2 from '../../assets/images/image-2.png';
import icon1 from '../../assets/images/pricing-icon-1.svg'


const people = [
  { id: 1, img: "https://randomuser.me/api/portraits/men/32.jpg" },
  { id: 2, img: "https://randomuser.me/api/portraits/women/44.jpg" },
  { id: 3, img: "https://randomuser.me/api/portraits/men/41.jpg" },
  { id: 4, img: "https://randomuser.me/api/portraits/women/65.jpg" },
  { id: 5, img: "https://randomuser.me/api/portraits/women/55.jpg" },
  { id: 6, img: "https://randomuser.me/api/portraits/men/50.jpg" },
  { id: 7, img: "https://randomuser.me/api/portraits/men/12.jpg" },
  { id: 8, img: "https://randomuser.me/api/portraits/women/26.jpg" },
  { id: 9, img: "https://randomuser.me/api/portraits/men/15.jpg" },
];

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
  <div className="relative w-[90%] max-w-5xl h-[400px]">
        {people.map((person) => (
          <div
            key={person.id}
            className={`absolute rounded-full overflow-hidden shadow-md border-4 border-white w-20 h-20 md:w-24 md:h-24 ${person.className}`}
          >
            <img
              src={person.img}
              alt="profile"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>



    </div>
  );
}