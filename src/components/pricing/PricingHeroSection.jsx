import React from 'react'
import buttonIcon from "../../assets/images/button-icon-1.svg";
import icon_1 from '../../assets/images/pricing-icon-1.svg'
import icon_2 from '../../assets/images/pricing-icon-2.svg'
import icon_3 from '../../assets/images/pricing-icon-3.svg'
import icon_4 from '../../assets/images/pricing-icon-4.svg'
import icon_5 from '../../assets/images/pricing-icon-5.svg'

const PricingHeroSection = () => {
  return (
    <section 
      id='pricing-hero' 
      className='bg-cover bg-center h-110 md:h-160 flex'
    >
      <div className='mt-25 flex flex-col gap-y-2'>
        {/* Content */}
        <div className='text-center lg:ml-5'>
          <div className="md:mt-10 flex flex-wrap items-center justify-center px-4">
            <img
              src={icon_1}
              alt="icon-1"
              className="w-10 mr-2 sm:mr-10 h-10 sm:w-15 sm:h-15 md:w-20 md:h-20"
            />
            <h1 className="font-clashDisplay text-[#070707] text-2xl sm:text-3xl  md:text-5xl font-medium text-center">
              Transparent Collection
            </h1>

            <h1 className="ml-1 font-clashDisplay text-[#070707] text-2xl sm:text-3xl md:text-5xl font-medium text-center">
              And
            </h1>
            <img
              src={icon_2}
              alt="icon-2"
              className="w-6 sm:mr-10 h-6 sm:w-8 sm:h-8 md:w-15 md:h-15"
            />
          </div>
          <div className="flex flex-wrap items-center justify-center px-4 sm:ml-10 md:ml-20">
            <h1 className="font-clashDisplay text-[#070707] text-2xl sm:text-3xl  md:text-5xl font-medium text-center">Disbursement Pricing</h1>
            <img
              src={icon_3}
              alt="icon-2"
              className="w-6 sm:ml-10  h-6 sm:w-10 sm:h-10  md:w-20 md:h-20"
            />
          </div>
          
          {/* Paragraph */}
          <div className="flex items-start sm:mx-2 md:mx-10">
            {/* Icon stays fixed at the far left */}
            <div className="flex-shrink-0 hidden sm:block">
              <img
                src={icon_4}
                alt="icon-4"
                className="w-6 h-6 sm:w-10 sm:h-10 md:w-20 md:h-20"
              />
            </div>

            {/* Text stretches full width beside it */}
            <p className="ml-3 sm:ml-4 text-[#5E5E5E] text-sm sm:text-xl leading-relaxed">
              Felis orci tempor sed in sit aliquam. 
              Sit donec egestas ridiculus porttitor amet. 
              Convallis in pulvinar convallis proin imperdiet mauris.
              Aliquet sit libero convallis quis proin egestas viverra.
            </p>
          </div>

          {/* Contact us  */}
          <div className="grid place-items-center gap-4">
            {/* Image on top */}
            <img
              src={icon_5}
              alt="icon-5"
              className="w-12 h-12 sm:w-15 sm:h-15 md:w-25 md:h-25"
            />

            {/* Button below */}
            <button
              className="flex items-center gap-x-2 bg-gradient-to-r from-[#FF4C05] to-[#FF7A3D] hover:from-[#e0440b] hover:to-[#d65f28]
               px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl shadow-md hover:shadow-lg
               font-montserrat text-sm sm:text-base font-medium text-white
               transition-all duration-300 transform hover:scale-105 group"
            >
              <img
                src={buttonIcon}
                alt="button-icon"
                className="w-5 h-5 transform group-hover:translate-x-1 transition-all duration-300"
              />
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PricingHeroSection