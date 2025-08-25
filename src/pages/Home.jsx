import React from 'react'
import HeroSection from '../components/home/HeroSection'
import TrustAndSupport from '../components/home/TrustAndSupport'
import HeroSection2 from '../components/home/HeroSection2'
import ManageStore from '../components/home/ManageStore'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <TrustAndSupport/>
      <HeroSection2/>
      <ManageStore/>
    </div>
  )
}

export default Home