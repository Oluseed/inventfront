import React from 'react'
import PricingHeroSection from '../components/pricing/PricingHeroSection'
import Currencies from '../components/pricing/Currencies'
import HeroSection2 from '../components/home/HeroSection2'
import Faq from '../components/pricing/Faq'

const Pricing = () => {
  return (
    <div>
      <PricingHeroSection/>
      <Currencies/>
      <HeroSection2/>
      <Faq/>
    </div>
  )
}

export default Pricing