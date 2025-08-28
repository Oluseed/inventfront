import React from 'react'
import image from '../../assets/images/get-started-section-image.png'

const GetStartedSection = () => {
  return (
    <section className='mb-10 mt-10 grid'>
      <div
        id='get-started'
        className='bg-center bg-cover h-100 flex flex-col gap-y-5 place-content-center mx-4 sm:my-10 sm:mx-40 rounded-2xl'
      >
        <h1 className='text-white font-clashDisplay font-medium text-2xl text-center md:text-5xl'>Olastute Software fits just right for your business</h1>
        <button className='bg-[#FF4C05] cursor-pointer hover:bg-[#c25124]  font-inter text-white font-bold text-[14px] mx-10 py-2 rounded w-50 place-self-center'>Get Started Now</button>
      </div>
    </section>
  )
}

export default GetStartedSection