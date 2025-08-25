import React from 'react'
import image_1 from '../../assets/images/company-1.svg'
import image_2 from '../../assets/images/company-2.svg'
import image_3 from '../../assets/images/company-3.svg'
import image_4 from '../../assets/images/company-4.svg'
import image_5 from '../../assets/images/company-5.svg'

const listOfCompanies = [
  {
    id: 1, 
    image: image_1,
    alt: 'databricks'
  },
  {
    id: 2, 
    image: image_2,
    alt: "codecademy"
  }, 
  {
    id: 3, 
    image: image_3,
    alt: "grammarly"
  },
  {
    id: 4, 
    image: image_4,
    alt: 'goggle'
  },
  {
    id: 5, 
    image: image_5,
    alt: 'salesfusion'
  }
]

const content = [
  {
    id: 1, 
    heading: "$1bn+",
    description: "In Transaction Volume"
  }, 
  {
    id: 2, 
    heading: "100%",
    description: "Client Satisfaction"
  },
  {
    id: 3, 
    heading: "5000",
    description: "Businesses Registered"
  }
]

const TrustAndSupport = () => {
  return (
    <section className='bg-[#FFFFFF] p-2 pt-10'>
      <div className='grid place-content-center'>
        <div className='flex flex-col gap-y-2'>
          <h1 className='font-clashDisplay text-3xl text-center font-medium text-[#070707] sm:text-4xl md:text-5xl '>Trusted and Supported by</h1>
          <p className='text-center font-inter font-[400] text-[14px] text-[#262626]'>Trusted by 100+ Company & Business</p>
        </div>
        {/* List of Companies */}
        <div className='flex flex-col place-self-center sm:flex-row gap-y-5 gap-x-2 mt-10'>
          {listOfCompanies.map((company) => (
            <div key={company.id} className='bg-[#F1F1F1] border-[#A5A5A5] border px-7 py-14 rounded flex place-content-center'>
              <img src={company.image} alt={company.alt} />
            </div>
          ))}
        </div>

        <div className='mt-10 place-self-center'>
          <h1 className='font-clashDisplay font-medium text-[#070707] text-2xl text-center'>Empowering Businesses Worldwide</h1>
          <div className='flex flex-col sm:flex-row gap-y-5 gap-x-20 place-self-center border responsive-border mt-5 sm:mt-10 p-2'>
            {content.map((item) => (
              <div key={item.id} className='mt-5 mb-5 grid gap-y-2'>
                <h1 className='font-clashDisplay font-medium text-center text-3xl sm:text-4xl'>{item.heading}</h1>
                <p className='font-inter font-[400] text-[#8A8A8A] text-center'>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrustAndSupport