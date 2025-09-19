import React from 'react'
import Image1 from '../../assets/Images/process.jpg'
import { FiPlusCircle } from "react-icons/fi";

const Process = () => {
  return (
    <div className='min-h-screen bg-amber-50'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 p-4 md:p-0 md:mr-32 pb-12 md:pb-0'>
            <div className='flex flex-col md:flex-row items-center justify-center md:justify-end mt-12 md:mt-12 order-2 md:order-1' data-aos="fade-up" data-aos-delay="200">
                <img src={Image1} alt="Woman receiving treatment" className='md:w-[calc(100%-100px)] md:h-[calc(100%-100px)] rounded-3xl md:ml-32 mr-4 md:mt-0 ml-4 object-cover'/>
            </div>
            <div className='order-1 md:order-2 flex flex-col justify-center'>
                <div className='pl-1 md:pl-4  text-[#6B9A75] md:pt-16' data-aos="fade-up" data-aos-delay="500">
                    <p className='flex'><FiPlusCircle className='mt1 w-5 h-5'/>&nbsp; OUR PROCESS</p>
                </div>
                <div className="container mx-auto px-1 md:px-4 mt-4">
                    <div className="flex justify-between items-center mb-6 md:mb-8" data-aos="fade-up" data-aos-delay="400">
                        <h1 className="hidden md:block text-[56px] text-[#112025] font-medium">Holistic Steps to Wellness and Healing</h1>
                        <h1 className="md:hidden text-[32px] text-[#112025] font-medium">Holistic Steps to Wellness and Healing</h1>
                    </div>
                    <div className='flex font-sans text-[16px] text-[#696969]' data-aos="fade-up" data-aos-delay="400">
                        <p className='hidden md:block'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        <p className='md:hidden'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </div>
                    <div className='mt-8 relative pl-16' data-aos="fade-up" data-aos-delay="400">
                        {/* Vertical dotted line */}
                        <div className="absolute top-12 left-6 h-[calc(100%-3rem)] border-l-4 border-dotted border-[#112025]"></div>
                        {/* Number */}
                        <div className="absolute top-0 left-0 w-12  flex items-center justify-center text-[#112025] font-bold text-[18px] md:text-[24px]">
                            01
                        </div>
                        <h2 className='text-[18px] mb-2 md:text-[24px]'>Initial Consultant</h2>
                        <span className='block font-sans text-[#696969] text-[16px]'> Your journey begins with a personalized consultation where we assess your health</span>
                    </div>
                    <div className='mt-8 relative pl-16' data-aos="fade-up" data-aos-delay="400">
                        {/* Vertical dotted line */}
                        <div className="absolute top-12 left-6 h-[calc(100%-3rem)] border-l-4 border-dotted border-[#112025]"></div>
                        {/* Number */}
                        <div className="absolute top-0 left-0 w-12  flex items-center justify-center text-[#112025] font-bold text-[18px] md:text-[24px]">
                            02
                        </div>
                        <h2 className='text-[18px] mb-2 md:text-[24px]'>Customized Plan</h2>
                        <span className='block font-sans text-[#696969] text-[16px]'> Based on your dosha (body constitution) and consultation, we create a tailored plan</span>
                    </div>
                    <div className='mt-8 relative pl-16' data-aos="fade-up" data-aos-delay="400">
                        {/* Vertical dotted line */}
                        <div className="absolute top-12 left-6 h-[calc(100%-3rem)] border-l-4 border-dotted border-[#112025]"></div>
                        {/* Number */}
                        <div className="absolute top-0 left-0 w-12  flex items-center justify-center text-[#112025] font-bold text-[18px] md:text-[24px]">
                            03
                        </div>
                        <h2 className='text-[18px] mb-2 md:text-[24px]'>Therapeutic Sessions</h2>
                        <span className='block font-sans text-[#696969] text-[16px]'> Experience our diverse range of treatments, including massages, detox therapies, and wellness</span>
                    </div>
                    <div className='mt-8 relative pl-16' data-aos="fade-up" data-aos-delay="400">
                        {/* Vertical dotted line */}
                        <div className="absolute top-12 left-6 h-[calc(100%-3rem)] border-l-4 border-dotted border-[#112025]"></div>
                        {/* Number */}
                        <div className="absolute top-0 left-0 w-12  flex items-center justify-center text-[#112025] font-bold text-[18px] md:text-[24px]">
                            04
                        </div>
                        <h2 className='text-[18px] mb-2 md:text-[24px]'>Ongoing Support</h2>
                        <span className='block font-sans text-[#696969] text-[16px]'> We provide continuous guidance and support throughout your wellness</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Process