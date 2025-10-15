import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import ContactImage from "../../assets/images/contact-image1.png";

export default function ContactSection() {
  return (
    <section className="bg-[#fdf8e9] py-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 mt-15 rounded-xl overflow-hidden px-4  sm:px-6">
        {/* Left Side - Contact Form */}
        <div className="bg-green-950 text-white p-10 flex flex-col rounded-t-3xl rounded-b-none md:rounded-l-3xl md:rounded-r-none justify-start gap-8">
          <p className="uppercase text-sm tracking-widest mb-2 flex items-center gap-2">
            <span className="text-lg">✚</span> Contact Us
          </p>
          <h2 className="text-5xl  mb-8">
            Get in Touch With Nature Foot Care & Ayurvedic Wellness
          </h2>
          <p className="mb-8 text-gray-200">
            At Nature Foot Care and Ayurvedic Wellness, we’re here to guide you
            on your path to natural healing. Contact us for bookings, inquiries,
            or wellness advice
          </p>

          <form className="bg-white text-gray-800 rounded-lg shadow p-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="first name"
                className="border-b outline-none px-2 py-1"
              />
              <input
                type="text"
                placeholder="last name"
                className="border-b outline-none px-2 py-1"
              />
              <input
                type="email"
                placeholder="your email"
                className="border-b outline-none px-2 py-1"
              />
              <input
                type="tel"
                placeholder="phone number"
                className="border-b outline-none px-2 py-1"
              />
            </div>
            <textarea
              placeholder="message"
              className="w-full border-b outline-none px-2 py-1"
              rows="4"
            ></textarea>
            <button className="w-full bg-green-800 hover:bg-green-700 text-white py-2 rounded transition">
              Submit Now
            </button>
          </form>
        </div>

        {/* Right Side - Image */}
        <div className="relative rounded-b-3xl rounded-t-none md:rounded-l-none md:rounded-r-3xl overflow-hidden">
  <img
    src={ContactImage}
    alt="Contact Wivana"
    className="w-full h-full object-cover"
  />

  {/* Contact Info Card */}
  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 md:left-6 md:translate-x-0 md:ml-20 lg:ml-35 bg-white shadow-lg rounded-lg p-4 space-y-2 text-gray-700 w-4/5 md:w-auto">
    <p className="flex items-center gap-2">
      <MapPin size={18} className="text-green-600" />
      No. 50/9, B/G/1, Collingwood Housing Scheme, Collingwood Place, Wellawatta, Colombo-6
 
      

    </p>
    <p className="flex items-center gap-2">
      <Phone size={18} className="text-green-600" />
      +94 74 261 0334
    </p>
    <p className="flex items-center gap-2">
      <Mail size={18} className="text-green-600" />
      ayurvedafootcarenewnature@gmail.com
    </p>
  </div>
</div>
      </div>
    </section>
  );
}
