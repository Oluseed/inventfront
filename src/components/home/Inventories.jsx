import React from 'react'
import image_1 from '../../assets/images/inventory-image01.png'
import image_2 from '../../assets/images/inventory-image02.png'

const Inventories = () => {
  return (
    <section className='bg-[#FFFFFF] grid'>
      <div className='place-self-center mt-20 flex flex-col gap-y-5'>
        <div>
          <h1 className='font-clashDisplay font-medium text-3xl text-center sm:text-4xl md:text-5xl'>Explore seamless with <span className='border-[#FF4C05] border-2 rounded-4xl py-1 px-2'>olastute smart</span> inventory solutions for your business</h1>
        </div>
        <div className='md:mt-10 flex flex-col md:grid md:grid-cols-2 md:grid-rows-3 md:gap-2 md:mx-10 lg:mx-20  place-self-center mx-5 gap-y-5'>
          <div className='bg-[#FFF3E6] rounded-2xl'>
            <div className='grid mt-10 gap-y-1 md:ml-2'>
              <h1 className='font-clashDisplay text-2xl font-medium text-center md:text-start'>Inventory Management</h1>
              <p className='font-inter text-[#5E5E5E] text-[13px] text-center md:text-start'>Efficiently manage your inventory with real-time updates and comprehensive tracking. </p>
            </div>
            <img src={image_1} alt="image-1" className='w-60 place-self-end'/>
          </div>
          {/* Tracking */}
          <div className='bg-[#E7F1FD] rounded-2xl h-80 relative overflow-hidden'>
            <div className='grid mt-5 gap-y-1 p-4'>
              <h1 className='font-clashDisplay text-2xl font-medium text-center md:text-start'>
                Expirations Tracking
              </h1>
              <p className='font-inter text-[#5E5E5E] text-[13px] text-center md:text-start'>
                Receive alerts and notifications when products are nearing expiration dates to minimize waste.
              </p>
            </div>
            <img 
              src={image_2} 
              alt="image-2" 
              className="absolute bottom-[-10px] right-[-30px] place-self-end w-50 transform -rotate-10"
            />
          </div>
          {/* Low Stock Alerts */}
          <div className='bg-[#FFE9E0] h-80 rounded-2xl md:col-span-2 '>
            <div className='grid mt-5 gap-y-1 p-4'>
              <h1 className='font-clashDisplay text-2xl font-medium text-center md:text-start'>Low Stock Alerts</h1>
              <p className='font-inter text-[#5E5E5E] text-[13px] text-center md:text-start'>Stay on top of stock levels with automatic alerts when products reach low quantities.</p>
            </div>
          </div>
    
          {/* Sales Analytics */}
          <div className='bg-[#D8DCFF] h-80 rounded-2xl'>
            <div className='grid mt-5 gap-y-1 p-4'>
              <h1 className='font-clashDisplay text-2xl font-medium text-center md:text-start'>Sales Analytics</h1>
              <p className='font-inter text-[#5E5E5E] text-[13px] text-center md:text-start'>Gain insights into your sales performance with detailed analytics and reports.</p>
            </div>
          </div>
          {/* Product Tracking */}
          <div className='bg-[#F3FFCF] h-80 rounded-2xl'>
            <div className='grid mt-5 gap-y-1 p-4'>
              <h1 className='font-clashDisplay text-2xl font-medium text-center md:text-start'>Product Tracking</h1>
              <p className='font-inter text-[#5E5E5E] text-[13px] text-center md:text-start'>Track each product's movement within your inventory for improved visibility.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Inventories