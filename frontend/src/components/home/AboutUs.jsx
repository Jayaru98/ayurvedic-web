import React from "react";
import { useEffect } from "react";
import Image1 from "../../assets/images/aboutus/abt_3.png";
import Image3 from "../../assets/images/aboutus/abt_7.png";
import Image2 from "../../assets/images/aboutus/abt_6.png";
import { FiPlusCircle } from "react-icons/fi";
import { FiCheck } from "react-icons/fi";
import AOS from "aos";

const AboutUs = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className=" bg-amber-50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4 md:p-0 md:mr-32 pb-12 md:pb-0">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-end mt-6 md:mt-24 order-2 md:order-1 md:ml-28">
          <div className="flex flex-col gap-5">
            <img
              src={Image1}
              alt="Ayurvedic ingredients"
              className="w-full max-w-[332px] md:ml-0 md:mr-0 md:w-[calc(20vw)] md:h-[calc(18vw)] min-w-[290px] min-h-[252px] rounded-2xl object-cover"
              data-aos="fade-up"
              data-aos-delay="200"
            />
            <img
              src={Image2}
              alt="Spa setting"
              className="w-full max-w-[332px] md:ml-0 md:mr-0 md:w-[calc(20vw)] md:h-[calc(18vw)] min-w-[290px] min-h-[252px] rounded-2xl object-cover"
              data-aos="fade-up"
              data-aos-delay="200"
            />
          </div>

          <img
            src={Image3}
            alt="Woman receiving treatment"
            className="w-full max-w-[332px] h-64 ax-w-[332px] md:w-[calc(22vw)] md:h-[calc(38vw)] min-w-[252px] md:min-h-[530px] rounded-2xl mt-4 ml-12 mr-12 md:mr-2 md:mt-0 md:ml-4 object-cover"
            data-aos="fade-up"
            data-aos-delay="300"
          />
        </div>
        <div className="order-1 md:order-2 flex flex-col justify-center">
          <div
            className="pl-1 md:pl-4  text-[#6B9A75] pt-8 md:pt-8"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <p className="flex items-center justify-center">
              <FiPlusCircle className="mt1 w-5 h-5" />
              &nbsp; ABOUT US
            </p>
          </div>
          <div className="container mx-auto px-1 md:px-4 mt-4">
            <div
              className="flex justify-between items-center mb-6 md:mb-8"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <h1 className="hidden md:block text-[56px] text-[#112025] font-medium">
                Sanctuary for Ayurvedic <br /> Healing and Wellness
              </h1>
              <h1 className="md:hidden text-[32px] text-[#112025] flex justify-center text-center font-medium">
                Sanctuary for Ayurvedic Healing and Wellness
              </h1>
            </div>
            <div
              className="font-sans text-[16px] text-[#696969]"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <p className="mb-3">
                Nature Foot Care Ayurveda is a wellness center specializing in Ayurvedic foot care therapies, offering natural healing through traditional Ayurvedic practices.
              </p>
              <p className="hidden md:block">
                At Nature Foot Care Ayurveda, we embrace the ancient wisdom of
                Ayurveda to promote holistic wellness and natural healing. Our
                sanctuary is dedicated to helping you find balance,
                rejuvenation, and serenity through authentic therapies rooted in
                tradition.
              </p>
            </div>
            <div className="mt-6" data-aos="fade-up" data-aos-delay="400">
              <h2 className=" text-[18px] mb-5 md:text-[24px] flex">
                <FiCheck className="md:hidden border mb-4 p-1  mt-1 w-5 h-5 rounded-full  text-[#5C9269] mr-4" />
                Ayurvedic Expertise
              </h2>
              <span className="md:flex font-sans text-[#696969] text-[16px] mt-3">
                <FiCheck className="hidden md:block border  md:w-17 md:h-6 p-1 rounded-full  text-[#5C9269] mr-4" />{" "}
                With years of experience and deep knowledge of Ayurveda, our
                practitioners bring you personalized treatments designed to
                restore harmony between mind, body, and spirit. From soothing
                foot therapies to specialized wellness rituals, every treatment
                is carried out with care, authenticity, and dedication.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
