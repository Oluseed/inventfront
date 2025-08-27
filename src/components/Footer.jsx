import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'

const Footer = () => {
  return (
    <footer className='bg-black sm:h-screen text-white grid'>
      <div className='p-4 sm:px-10 flex flex-col sm:flex-row sm:gap-x-10 sm:justify-between'>
        <div className='grid gap-y-5 font-inter'>
          <div className='bg-white p-4'></div>
          <h1>4517 Washington, DC</h1>
          <div className='grid gap-y-3 sm:flex sm:gap-x-2'>
            <div className='bg-[#E0E0E0] w-10 flex items-center justify-center rounded h-10'><FaInstagram size={22} className='text-black'/></div>
            <div className='bg-[#E0E0E0] w-10 flex items-center justify-center rounded h-10'><FaFacebook size={22} className='text-black'/></div>
            <div className='bg-[#E0E0E0] w-10 flex items-center justify-center rounded h-10'><FaX size={22} className='text-black'/></div>
            <div className='bg-[#E0E0E0] w-10 flex items-center justify-center rounded h-10'><FaLinkedin size={22} className='text-black'/></div>
          </div>
        </div>
        {/* Company */}
        <div className='flex flex-col mt-10 gap-y-3 font-inter'>
          <h1 className='font-semibold'>COMPANY</h1>
          <div className='font-light text-[14px] mt-5 grid gap-y-5'>
            <h1>About</h1>
            <h1>Blog</h1>
            <h1>Pricing</h1>
            <h1>Contact Us</h1>
          </div>
        </div>
        {/* Legal */}
        <div className='flex flex-col mt-10 gap-y-3 font-inter'>
          <h1 className='font-semibold'>LEGAL</h1>
          <div className='font-light text-[14px] mt-5 grid gap-y-5'>
            <h1>Legal</h1>
            <h1>Terms and Condition</h1>
            <h1>Privacy Policy</h1>
          </div>
        </div>
        {/* Resources */}
        <div className='flex flex-col mt-10 gap-y-3 font-inter'>
          <h1 className='font-semibold'>Resources</h1>
          <div className='font-light text-[14px] mt-5 grid gap-y-5'>
            <h1>Others</h1>
            <h1>Secured Payment Gateways</h1>
          </div>
        </div>
      </div>
      <div className='place-self-center font-inter mt-5'>
        <p>&copy;2025. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer