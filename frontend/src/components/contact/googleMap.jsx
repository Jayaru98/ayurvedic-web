import React from "react";
import { FiPlusCircle } from "react-icons/fi";

const MapSection = () => {
  return (
    <section className="px-6 md:px-20 py-0 bg-amber-50">
       <div className='pl-4 flex items-center justify-center text-[#6B9A75] pt-4   md:pt-10' data-aos="fade-up" data-aos-delay="100">
              <p className='flex mb-5'><FiPlusCircle className=' w-5 h-5'/>&nbsp; FIND US HERE</p>
            </div>
      <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3961.1225119340274!2d79.85981397581776!3d6.875922018965898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwNTInMzMuMyJOIDc5wrA1MSc0NC42IkU!5e0!3m2!1sen!2slk!4v1761718738026!5m2!1sen!2slk"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Wivana Spa Location"
        ></iframe>
      </div>
    </section>
  );
};

export default MapSection;
