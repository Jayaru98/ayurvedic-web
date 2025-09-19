import React from 'react';
import { FiPlusCircle } from "react-icons/fi";


const NatureFootCare = () => {
  // Packages data
  const packages = [
    {
      id: 1,
      name: "Signature Foot Massage (Oil Massage)",
      duration: "1 hour",
      price: "3000 Rs"
    },
    {
      id: 2,
      name: "Luxury Foot Massage",
      duration: "1 hour",
      price: "3000 Rs"
    },
    {
      id: 3,
      name: "Ayurvedic Face Massage",
      duration: "1 hour",
      price: "2000 Rs"
    },
    {
      id: 4,
      name: "Nasya karma",
      duration: "Oil Massage by Steam, 30 min",
      price: "1500 Rs"
    },
    {
      id: 5,
      name: "Shirodhara",
      duration: "30 min / 45 min / 1 hour",
      details: "Head pain massage",
      price: "4000 Rs"
    },
    {
      id: 6,
      name: "Vasti",
      duration: "Oil heat → (with special oil)",
      price: "Contact for pricing"
    },
    {
      id: 7,
      name: "Fish Therapy",
      duration: "",
      price: "1500 Rs"
    },
    {
      id: 8,
      name: "Steam Bath",
      duration: "",
      price: "1500 Rs"
    },
    {
      id: 9,
      name: "Pedicure",
      duration: "",
      price: "3000 Rs"
    },
    {
      id: 10,
      name: "Manicure",
      duration: "",
      price: "3000 Rs"
    }
  ];

  return (
    <div className="bg-amber-50 ">
      <div className='pl-4 md:pl-40 text-[#6B9A75]  md:pt-24' data-aos="fade-up" data-aos-delay="200" >
        <p className='flex'><FiPlusCircle className=' w-5 h-5'/>&nbsp; PACKAGES</p>
      </div>

      <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-6 md:mb-12" data-aos="fade-up" data-aos-delay="400">
            <h1 className="text-[32px] md:text-[56px] md:pl-36 text-[#112025]">New Nature Foot Care Ayurveda</h1>
          </div>  
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 ml-6 mr-6 md:ml-40 md:mr-32'>
            {/* About Section */}
            <div className="max-w-4xl mx-auto mb-16 ">
            <div className="border-b border-[#696969] pl-4 py-4 rounded-xl shadow-md p-8 bg-white" data-aos="fade-up" data-aos-delay="400">
                {/* <h2 className="text-2xl font-bold text-amber-900 mb-6 pb-2 border-b border-amber-200">About</h2> */}
                <div className="space-y-6 text-[#696969]" data-aos="fade-up" data-aos-delay="400" >
                <h2 className='mb-6 text-[20px] md:text-[24px] text-[#696969]'><strong>Nature Foot Care Ayurveda</strong></h2>
                <p className='font-sans text-[17px] md:text-[18px]' data-aos="fade-up" data-aos-delay="400">
                    Nature Foot Care Ayurveda is a wellness center specializing in Ayurvedic foot care therapies, offering natural healing through traditional Ayurvedic practices. With a deep focus on foot health and overall body balance, we use herbal oils, seeds, stems, and natural ingredients to restore harmony between mind and body.
                </p>
                <p className='font-sans text-[17px] md:text-[18px]' data-aos="fade-up" data-aos-delay="500">
                    While our specialty is Ayurvedic foot care, we also provide a wide range of holistic wellness services, including full body massages, facial treatments, steam baths, Shirodhara, and beauty care such as pedicures and manicures. Every treatment is rooted in the principles of Ayurveda, ensuring natural, safe, and effective results.
                </p>
                <p className='font-sans text-[17px] md:text-[18px]' data-aos="fade-up" data-aos-delay="600">
                    Our mission is to promote relaxation, pain relief, and rejuvenation by combining ancient Ayurvedic techniques with modern wellness needs—helping our clients achieve total health and well-being.
                </p>
                </div>
            </div>
            </div>
        
            {/* Packages Section */}
            <div className="max-w-4xl mx-auto bg-white mb-10" data-aos="fade-up" data-aos-delay="400">
            <div className="border-l-4 border-[#696969] pl-4 py-2 rounded-xl shadow-md p-8" >
                <h2 className="text-2xl font-bold text-[#112015] mb-6 pb-2 border-b border-[#6B9A75]" data-aos="fade-up" data-aos-delay="400">Packages</h2>
                <p className="text-[#6B9A75] mb-6 italic" data-aos="fade-up" data-aos-delay="400">All starting prices mentioned here</p>
                
                <div className="space-y-6">
                {packages.map((packageItem) => (
                    <div key={packageItem.id} className="border-l-4 border-[#6B9A75] border-dotted pl-4" data-aos="fade-up" data-aos-delay="400">
                    <div className="flex flex-col md:flex-row md:items-center justify-between" data-aos="fade-up" data-aos-delay="500">
                        <div>
                        <h3 className="font-bold text-[#112015] text-lg">{packageItem.name}</h3>
                        {packageItem.duration && (
                            <p className="text-[#696969]">{packageItem.duration}</p>
                        )}
                        {packageItem.details && (
                            <p className="text-[#696969]">{packageItem.details}</p>
                        )}
                        </div>
                        <div className="mt-2 md:mt-0">
                        <span className="bg-amber-100 text-[#6B9A75] font-bold py-1 px-3 rounded-full">
                            {packageItem.price}
                        </span>
                        </div>
                    </div>
                    </div>
                ))}
                </div>
                
                {/* Note */}
                {/* <div className="mt-8 p-4 bg-amber-50 rounded-lg border border-amber-200">
                <p className="text-amber-800">
                    <span className="font-bold">Note:</span> Prices are subject to change based on specific requirements and customization. Please contact us for detailed information and to book your appointment.
                </p>
                </div> */}
            </div>
            </div>
        </div>
        
        {/* Call to Action */}
        {/* <div className="max-w-4xl mx-auto mt-12 text-center">
          <button className="bg-amber-700 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 shadow-lg">
            Book Your Treatment
          </button>
        </div> */}
      {/* </div>     */}
    </div>
  );
};

export default NatureFootCare;