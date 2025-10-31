import React from 'react';
import { FiPlusCircle } from "react-icons/fi";
import Testi from '../../assets/Images/testimonials/testi.svg';
import Testi1 from "../../assets/images/testimonials/1b.png";
import Testi2 from '../../assets/Images/testimonials/2g.png';
import Testi4 from '../../assets/Images/testimonials/3g.png';
import Testi3 from '../../assets/Images/testimonials/4b.png';


const Testimonials = () => {
  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Anura Wijesinghe",
      image: Testi1,
      content: "The Ayurvedic massage I received was transformative. The serene environment and expert care left me feeling refreshed and balanced. Highly recommend this place! I’m already looking forward to my next visit to experience that same sense of peace and rejuvenation.",
      location : "Customer, Kandy"
    },
    {
      id: 2,
      name: "Nadeesha Perera",
      image: Testi2,
      content: "The personalized treatments here are exceptional. The staff’s knowledge of Sri Lankan herbal remedies truly enhanced my wellness journey. I left feeling deeply revitalized and connected to a sense of natural harmony.",
      location : "Customer, Colombo"
    },
    {
      id: 3,
      name: "Ruwan Mendis",
      image: Testi3,
      content: "A peaceful retreat with amazing foot care therapies. The natural setting and attentive staff made my experience unforgettable. I would gladly return to unwind and indulge in their soothing treatments again.",
      location : "Customer, Galle"
    },
    {
      id: 4,
      name: "Priyani Perera",
      image: Testi4,
      content: "This Avyrvedic spa offers a perfect blend of relaxation and rejuvenation. The calming ambiance and skilled therapists made every moment feel truly restorative. It’s an ideal escape for anyone seeking balance and inner peace.",
      location : "Customer, Gampaha"
    }
  ];


  return (
    <div className="min-h-screen bg-amber-50">
        <div className='text-center text-[#6B9A75] pt-6 md:pt-16' data-aos="fade-up" data-aos-delay="200">
    <p className='flex justify-center items-center'><FiPlusCircle className='w-5 h-5'/>&nbsp; TESTIMONIALS</p>
</div>

        <div className="container mx-auto px-4">
  <div className="flex justify-center items-center mb-6 md:mb-12" data-aos="fade-up" data-aos-delay="400">
    <h1 className="text-[32px] md:text-[56px] text-[#112025] text-center">What Our Customer Say</h1>
  </div>  
</div>
        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ml-6 mr-6 md:ml-32 md:mr-32">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-xl shadow-md p-6 transition-transform duration-300 hover:shadow-lg hover:-translate-y-1" data-aos="fade-up" data-aos-delay="400">
              {/* Customer Avatar */}
              <div className="flex items-center mb-4">
                {/* <div className="w-16 h-16 rounded-full bg-amber-200 flex items-center justify-center mr-4">
                  <span className="text-xl font-bold text-amber-800">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                    <img src={testimonial.image} alt="" className='w-8 h-8'/>
                  </span>
                </div> */}
                <div>
                  {/* Testimonial Content */}
                  <p className="text-[#696969] font-medium md:font-normal font-sans mb-12">{testimonial.content}</p>
                  
                  <div className="flex items-center">
                    {/* <img src={testimonial.image} alt="" className='w-12 h-12 rounded-full'/> */}
                    <div>
                      <h3 className="font-normal text-[#5C9269] text-[18px] ml-2 font-sans">{testimonial.name}</h3>
                      <p className='font-sans text-[13px] text-black/50 ml-2'>{testimonial.location}</p>
                    </div>
                    <img src={Testi} alt="" className='w-18 h-18 ml-auto'/>
                  </div>
                </div>
              </div>

              {/* Decorative Quote Mark */}
              {/* <img src={Testi} alt="" className='w-18 h-18 ml-auto'/> */}
            </div>
          ))}
        </div>
    </div>
  )
}

export default Testimonials