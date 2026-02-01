import React from 'react'
import HeroSection from '../components/home/HeroSection'
import TrustAndSupport from '../components/home/TrustAndSupport'
import HeroSection2 from '../components/home/HeroSection2'
import ManageStore from '../components/home/ManageStore'
import GetStartedSection from '../components/home/GetStartedSection'
import Inventories from '../components/home/Inventories'
import Reviews from '../components/home/Reviews'
const Home = () => {
  return (
    <div>
      <HeroSection/>
      <TrustAndSupport/>
      <HeroSection2/>
      {/* <ManageStore/> */}
      <Inventories/>
      <Reviews/>
      <GetStartedSection/>
    </div>
  )
}

export default Home