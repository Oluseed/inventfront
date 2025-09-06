import React from 'react'
import missionIcon from '../../assets/images/about-us-icon-1.png';
import expenseIcon from '../../assets/images/about-us-icon-2.png';

const Roots = () => {
  return (
    <section className='grid place-content-center'>
      <div className="mt-20 grid">
        {/* Heading */}
        <div className='grid place-content-center gap-y-3' >
          <h1 className='mt-20 font-clashDisplay font-medium text-3xl md:text-5xl text-center'>A global team with <span className="border-2 p-2 rounded-4xl border-[#FF4C05]">local roots</span> </h1>
          <p className='font-inter text-center font-normal text-[#5E5E5E] text-[14px]'>Felis orci tempor sed in sit aliquam. 
            Sit donec egestas ridiculus porttitor amet. Convallis in pulvinar convallis.
          </p>
        </div>
        {/* Missions and Expenses */}
        <div className='grid md:grid-cols-2 gap-10 mt-10 m-5 md:m-20'>
          <div className='bg-[#FFF3E6] p-5 rounded-2xl grid gap-y-4'>
            <img src={missionIcon} alt="mission-icon" className='bg-amber-50' />
            <div>
              <h1 className='font-clashDisplay'>Mission</h1>
              <p>Our mission is to revolutionise global commerce with innovative,
                 secure, and seamless B2B payments, empowering businesses to thrive in an interconnected world.
              </p>
            </div>
          </div>
          <div>
            <img src={expenseIcon} alt="expense-icon" />
            <div>
              <h1>Expiration Tracking</h1>
              <p>
                Our vision is to become the leading global B2B payments provider, transforming the way businesses transact worldwide
              </p>
            </div>
            <p>
              delivering cutting-edge, secure, and seamless payment solutions, 
              we aim to empower businesses of all sizes to unlock their full 
              potential and seize growth opportunities in an interconnected and digitally-driven econom
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Roots