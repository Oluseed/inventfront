import React from 'react'
import { motion } from 'framer-motion'
import image_1 from '../../assets/images/landing-page-3.png'
import icon_1 from '../../assets/images/icon-1.svg'
import icon_2 from '../../assets/images/icon-2.svg'
import icon_3 from '../../assets/images/icon-3.svg'

const data = [
  {
    id: 1,
    icon: icon_1,
    heading: 'Zero Delay',
    description: 'Experience instant updates on stock levels, orders, and item movements — no waiting or manual refresh needed.'
  }, 
  {
    id: 2,
    icon: icon_2,
    heading: 'No Hidden Fee',
    description: 'Enjoy full transparency with our pricing — no setup costs or hidden charges, just simple and affordable inventory management.'
  }, 
  {
    id: 3,
    icon: icon_3,
    heading: "Alerts & Notifications",
    description: 'Stay informed with real-time alerts for low stock, new orders, or inventory changes, ensuring you never miss a critical update.'
  }
];


const ManageStore = () => {
  return (
    <section className='bg-[#FFFFFF] grid'>
      <div className='place-self-center flex flex-col gap-y-5'>
        
        {/* Animated Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h1 className='mt-10 font-clashDisplay font-medium text-3xl text-center sm:text-4xl md:text-5xl'>
            <span className='border-[#FF4C05] border-2 rounded-4xl py-1 px-2'>Manage Store</span> without border <br />with olastute
          </h1>
        </motion.div>

        <div className='mt-5 flex flex-col md:flex-row items-center'>
          
          {/* Animated Image */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <img 
              src={image_1} 
              alt="landing-image" 
              className='px-10 w-100 h-full md:w-150 lg:h-auto place-self-center' 
            />
          </motion.div>

          {/* Animated Feature Cards */}
          <motion.div 
            className='mt-10'
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              show: { 
                opacity: 1, 
                transition: { staggerChildren: 0.3 } // delay between cards
              }
            }}
          >
            <div className='mx-5 flex flex-col gap-y-3'>
              {data.map((item) => (
                <motion.div 
                  key={item.id} 
                  className='px-2 py-2 lg:w-100 bg-[#FFFDFD] border-[#AEAEAE] border-2 rounded-xl flex flex-col gap-y-2 place-content-center'
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    show: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                  <img src={item.icon} alt="icon" className='w-10 h-10' />
                  <h1 className='font-clashDisplay font-medium text-[#000000] text-[18px]'>{item.heading}</h1>
                  <p className='font-inter text-[#5E5E5E] text-[12px]'>{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default ManageStore
