import React, { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import ContactImage from "../../assets/images/contact-image1.png";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
  const[form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (e) =>
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const templateParams = {
      user_name: `${form.firstName} ${form.lastName}`,
      user_email: form.email,
      user_phone: form.phone,
      message: form.message,
    };

    try{
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      alert('Email sent successfully!');
      setForm({ firstName: "", lastName: "", email: "", phone: "", message: "" })
    }catch(error){
      console.error('Email send error:', error);
      alert('Error sending email. Please try again.')
    }
  };

return (
    <section className="bg-[#fdf8e9] py-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 mt-15 rounded-xl overflow-hidden px-4  sm:px-2">
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

          <form 
            onSubmit={handleSubmit}
            className="bg-white text-gray-800 rounded-lg shadow p-6 space-y-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                type="text"
                placeholder="first name"
                className="border-b outline-none px-2 py-1"
                required
              />
              <input
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                type="text"
                placeholder="last name"
                className="border-b outline-none px-2 py-1"
              />
              <input
                name='email'
                value={form.email}
                onChange={handleChange}
                type="email"
                placeholder="your email"
                className="border-b outline-none px-2 py-1"
                required
              />
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                type="tel"
                placeholder="phone number"
                className="border-b outline-none px-2 py-1"
              />
            </div>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="message"
              className="w-full border-b outline-none px-2 py-1"
              rows="4"
              required
            ></textarea>
            <button 
              type="submit"
              className="w-full bg-green-800 hover:bg-green-700 text-white py-2 rounded transition"
            >
              Submit Now
            </button>
          </form>
        </div>

        {/* Right Side - Image */}
        <div className="relative rounded-b-3xl rounded-t-none md:rounded-l-none md:rounded-r-3xl overflow-hidden">
          <img
            src={ContactImage}
            alt="Contact Wivana"
            className="w-full md:h-full object-cover"
          />

          {/* Contact Info Card */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-lg p-4 space-y-2 text-gray-700  md:w-auto">
            <p className="flex items-center gap-2">
              <MapPin size={40} className="text-green-600 mb-auto" />
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
