import React from 'react'
import { motion } from 'framer-motion'
import buttonIcon from "../../assets/images/button-icon-1.svg";
import icon_1 from '../../assets/images/pricing-icon-1.svg'
import icon_2 from '../../assets/images/pricing-icon-2.svg'
import icon_3 from '../../assets/images/pricing-icon-3.svg'
import icon_4 from '../../assets/images/pricing-icon-4.svg'
import icon_5 from '../../assets/images/pricing-icon-5.svg'
import { NavLink } from 'react-router-dom';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
}

const PricingHeroSection = () => {
  return (
    <section 
      id='pricing-hero' 
      className='bg-cover bg-center h-110 md:h-160 flex'
    >
      <motion.div 
        className='mt-25 flex flex-col gap-y-2 w-full'
        initial="hidden"
        animate="show"
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { staggerChildren: 0.2 } }
        }}
      >
        {/* Content */}
        <div className='text-center lg:ml-5'>
          {/* Row 1 */}
          <motion.div 
            className="md:mt-10 flex flex-wrap items-center justify-center px-4"
            variants={fadeInUp}
          >
            <motion.img
              src={icon_1}
              alt="icon-1"
              className="w-10 mr-2 sm:mr-10 h-10 sm:w-15 sm:h-15 md:w-20 md:h-20"
              whileHover={{ rotate: 15, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 200 }}
            />
            <h1 className="font-clashDisplay text-[#070707] text-2xl sm:text-3xl md:text-5xl font-medium text-center">
              Transparent Collection
            </h1>

            <h1 className="ml-1 font-clashDisplay text-[#070707] text-2xl sm:text-3xl md:text-5xl font-medium text-center">
              And
            </h1>
            <motion.img
              src={icon_2}
              alt="icon-2"
              className="w-6 sm:mr-10 h-6 sm:w-8 sm:h-8 md:w-15 md:h-15"
              whileHover={{ rotate: -15, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 200 }}
            />
          </motion.div>

          {/* Row 2 */}
          <motion.div 
            className="flex flex-wrap items-center justify-center px-4 sm:ml-10 md:ml-20"
            variants={fadeInUp}
          >
            <h1 className="font-clashDisplay text-[#070707] text-2xl sm:text-3xl md:text-5xl font-medium text-center">
              Disbursement Pricing
            </h1>
            <motion.img
              src={icon_3}
              alt="icon-3"
              className="w-6 sm:ml-10 h-6 sm:w-10 sm:h-10 md:w-20 md:h-20"
              whileHover={{ rotate: 20, scale: 1.1 }}
            />
          </motion.div>
          
          {/* Paragraph */}
          <motion.div 
            className="flex items-start sm:mx-2 md:mx-10"
            variants={fadeInUp}
          >
            <div className="flex-shrink-0 hidden sm:block">
              <motion.img
                src={icon_4}
                alt="icon-4"
                className="w-6 h-6 sm:w-10 sm:h-10 md:w-20 md:h-20"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 1 }}
              />
            </div>
            <p className="ml-3 sm:ml-4 text-[#5E5E5E] text-sm sm:text-xl leading-relaxed">
              Our pricing is designed to keep things simple, transparent, and fair. 
              You only pay for what you use — no hidden charges or complicated plans. 
              Whether you’re a small business or a large enterprise, our flexible 
              structure ensures you get the tools you need to manage, track, and 
              grow your inventory efficiently.
            </p>
          </motion.div>

          {/* Contact us */}
          <motion.div 
            className="grid place-items-center gap-4"
            variants={fadeInUp}
          >
            <motion.img
              src={icon_5}
              alt="icon-5"
              className="w-12 h-12 sm:w-15 sm:h-15 md:w-25 md:h-25"
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            />

            <NavLink to={'/contact'}>
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="flex lg:mr-5 items-center gap-x-2 bg-gradient-to-r from-[#FF4C05] to-[#FF7A3D] 
                hover:from-[#e0440b] hover:to-[#d65f28]
                px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl shadow-md hover:shadow-lg
                font-montserrat text-sm sm:text-base font-medium text-white
                transition-all duration-300 group"
              >
                <motion.img
                  src={buttonIcon}
                  alt="button-icon"
                  className="w-5 h-5 transform transition-all duration-300"
                  whileHover={{ x: 5 }}
                />
                Contact Us
              </motion.button>
            </NavLink>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default PricingHeroSection
