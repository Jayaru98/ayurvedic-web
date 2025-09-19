import React from 'react'
import { FiPlusCircle } from "react-icons/fi";
import Image1 from '../../assets/Images/showcase/showcase-1.jpg'
import Image2 from '../../assets/Images/showcase/showcase-2.jpg'
import Image4 from '../../assets/Images/showcase/process_3.webp'
import Image3 from '../../assets/Images/showcase/showcase-4.jpg'
import Image5 from '../../assets/Images/showcase/process_5.jpg'

const Showcase = () => {
  return (
    <div className='min-h-screen bg-amber-50'>
        <div className='text-[#6B9A75] pt-12 md:pt-24 text-center' data-aos="fade-up" data-aos-delay="200">
            <p className='flex items-center justify-center'><FiPlusCircle className='w-5 h-5'/>&nbsp; WELLNESS SHOWCASE</p>
        </div>

        <div className="container mx-auto pb-16">
          <div className="text-center mb-6 md:mb-16" data-aos="fade-up" data-aos-delay="400">
            <h1 className="text-[32px] md:text-[56px] text-[#112025]">
              Our Spa Experience
            </h1>
            <span className='hidden md:block text-[16px] font-sans text-[#696969]'>Immerse yourself in the tranquility of Nature Foot Care & Ayurvedic Wellness, <br/> where each moment reflects a journey of healing and renewal.</span>
            <span className='block md:hidden text-[16px] font-medium font-sans text-[#696969]'>Immerse yourself in the tranquility of Nature Foot Care & Ayurvedic Wellness,where each moment reflects a journey of healing and renewal.</span>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:ml-36 md:mr-36'>
            <div className='mx-auto'>
                <img src={Image1} alt="" className='w-[320px] h-[304px] md:w-[320px] md:h-[304px] lg:w-[403.33px] lg:h-[373.33px] rounded-2xl mb-8 transition-transform duration-300 hover:shadow-lg hover:-translate-y-1' data-aos="fade-up" data-aos-delay="400"/>
                <img src={Image2} alt="" className='w-[320px] h-[202.66px] md:w-[320px] md:h-[202.66px] lg:w-[403px] lg-h-[285.55px] rounded-2xl transition-transform duration-300 hover:shadow-lg hover:-translate-y-1' data-aos="fade-up" data-aos-delay="400"/>
            </div>
            <div className='mx-auto'>
                <img src={Image3} alt="" className='w-[320px] h-[202.66px] md:w-[320px] md:h-[320.66px] lg:w-[403px] lg-h-[320.55px] rounded-2xl mb-8 transition-transform duration-300 hover:shadow-lg hover:-translate-y-1' data-aos="fade-up" data-aos-delay="400"/>
                <img src={Image4} alt="" className='w-[320px] h-[304px] md:w-[320px] md:h-[304px] lg:w-[403px] lg:h-[373.33px] rounded-2xl transition-transform duration-300 hover:shadow-lg hover:-translate-y-1' data-aos="fade-up" data-aos-delay="400"/>
            </div>
             <div className='mx-auto'>
                <img src={Image5} alt="" className='w-[320px] h-[414px] md:w-[320px] md:h-[402.61px] lg:w-[403px] lg:h-[605.42px] rounded-2xl transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 object-bottom' data-aos="fade-up" data-aos-delay="500"/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Showcase