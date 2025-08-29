import React from 'react'
import { motion } from 'framer-motion'
import image from '../../assets/images/landing-page-2.png'

const HeroSection2 = () => {
  return (
    <section className="flex justify-center items-center mt-10">
      <motion.img
        src={image}
        alt="image"
        className="w-full h-full max-w-5xl rounded-2xl shadow-lg"
        initial={{ opacity: 0, y: 50 }}   // start invisible & slightly below
        animate={{ opacity: 1, y: 0 }}    // fade in & move to normal position
        transition={{ duration: 1, ease: 'easeOut' }}
      />
    </section>
  )
}

export default HeroSection2
