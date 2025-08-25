import buttonIcon from '../../assets/images/button-icon-1.svg'

const HeroSection = () => {
  return (
    <section id="hero-section" className="bg-cover bg-center h-110 md:h-screen flex">
      <div className="text-white p-4 sm:mb-20 md:ml-10 flex flex-col gap-y-5 justify-end w-full mb-4">
        <div>
          <h1 className="font-clashDisplay font-medium text-4xl lg:text-6xl">
            Streamline your <br />
            business with smart <br />
            <span className='border-[#FFFF00] border-2 rounded-4xl py-1 px-2 '> inventory</span> and analytics
          </h1>
        </div>

        <div>
          <p className="text-white text-[15px] font-inter font-[400] md:text-[17px]">
            Empower your business with advanced inventory
            management and analytics.
          </p>
        </div>
          
        <div className="flex gap-x-2">
          <button className="flex bg-[#FF4C05] cursor-pointer hover:bg-[#c25124] px-2 place-content-center pt-2 gap-x-1 rounded font-montserrat text-[14px] text-white transition-all duration-300 group">
            <img src={buttonIcon} alt="button-icon" className="w-5 h-5  transform group-hover:translate-x-1 transition-all duration-300" />
            Start 14 days Free Trial
          </button>
          <button className="border py-2 px-3 cursor-pointer rounded text-[15px] font-[500] font-montserrat transition-all duration-300 hover:border-black ">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  )
} 

export default HeroSection