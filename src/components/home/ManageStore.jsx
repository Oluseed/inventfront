import React from 'react'
import image_1 from '../../assets/images/landing-page-3.png'
import icon_1 from '../../assets/images/icon-1.svg'
import icon_2 from '../../assets/images/icon-2.svg'
import icon_3 from '../../assets/images/icon-3.svg'

const data = [
  {
    id: 1,
    icon: icon_1,
    heading: 'Zero Delay',
    description: 'Aliquet est odio adipiscing adipiscing. Dictum tempus at sagittis tincidunt mi cum proin lectus.'
  }, 
  {
    id: 2,
    icon: icon_2,
    heading: 'No Hidden Fee',
    description: 'Aliquet est odio adipiscing adipiscing. Dictum tempus at sagittis tincidunt mi cum proin lectus.'
  }, 
  {
    id: 3,
    icon: icon_3,
    heading: "Alerts & Notifications",
    description: 'Receive alerts and notifications for various inventory events.'
  }
]

const ManageStore = () => {

  return (
    <section className='bg-[#FFFFFF] grid'>
      <div className='place-self-center mt-10 flex flex-col gap-y-5'>
        <div>
          <h1 className='mt-10 font-clashDisplay font-medium text-3xl text-center sm:text-4xl md:text-5xl'><span className='border-[#FF4C05] border-2 rounded-4xl py-1 px-2 '>Manage Store  </span>without border <br />with olastute</h1>
        </div>
        <div className='flex flex-col md:flex-row'>
          <div>
            <img src={image_1} alt="landing-image" className='px-10 w-100 h-full md:w-150 lg:h-auto place-self-center ' />
          </div>
          <div className='mt-10'>
            <div className='mx-5 flex flex-col gap-y-3'>
                {data.map((item) => (
                  <div key={item.id} className='px-2 py-2 lg:w-100 bg-[#FFFDFD] border-[#AEAEAE] border-2 rounded-xl flex flex-col gap-y-2 place-content-center'>
                    <img src={item.icon} alt="icon" className='w-10 h-10 ' />
                    <h1 className='font-clashDisplay font-medium text-[#000000] text-[18px]'>{item.heading}</h1>
                    <p className='font-inter text-[#5E5E5E] text-[12px]'>{item.description}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ManageStore