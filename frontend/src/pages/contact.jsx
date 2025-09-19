import React, { useEffect } from 'react'
import HeroSection from '../components/HeroSection'
import HeroImage from "../assets/images/contact_hero.jpg"
import FaqSection from '../components/FaqSection'
import FaqImage from "../assets/images/faqnew.png"
import Footer from '../components/Footer'
import ContactSection from '../components/contact/contactSection'
import GoogleMapComponent from '../components/contact/googleMap'
import AOS from 'aos'
import 'aos/dist/aos.css'

const contact = () => {
  const locationCoordinates = { lat: 40.7128, lng: -74.0060 };
  
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div>
      <div data-aos="fade-down">
        <HeroSection 
          title="Contact Us"
          breadcrumb={["Home", "Contact"]}
          backgroundImage={HeroImage}
        />
      </div>
      
      <div data-aos="fade-up" data-aos-delay="100">
        <ContactSection />
      </div>
      
<section className="bg-[#fdf8e9] py-10">
  <div 
    className="rounded-xl md:rounded-lg max-w-6xl mx-auto overflow-hidden shadow-lg px-4 sm:px-6 md:px-8"
    data-aos="zoom-in"
    data-aos-delay="200"
  >
    <GoogleMapComponent 
      apiKey="AIzaSyD2FrWoVGwxQROJEJZANPah2lvqqUlc_Ts"
      center={locationCoordinates}
      markerPosition={locationCoordinates}
      zoom={15}
      height="500px"
    />
  </div>
</section>
      
      <div data-aos="fade-up" data-aos-delay="300">
        <FaqSection
          faqImage={FaqImage}
          faqs={[
            {
              question: "What is Wivana's approach to wellness?",
              answer:
                "Wivana embraces the ancient principles of Ayurveda, offering personalized treatments that balance the mind, body, and spirit through natural remedies and holistic practices.",
            },
            {
              question: "What services does Wivana offer?",
              answer:
                "Wivana offers a range of services including Abhyanga massage, Shirodhara therapy, Panchakarma detox programs, Ayurvedic facials, and wellness consultations, all designed to promote overall health.",
            },
            {
              question: "Is a consultation required before my first treatment?",
              answer:
                "Yes, we recommend a consultation prior to your first visit. This allows our practitioners to assess your unique dosha and wellness goals, ensuring a personalized treatment plan.",
            },
            {
              question: "How can I book a treatment at Wivana",
              answer:
                "You can book your treatment by visiting our website and clicking the  button, or by calling our reception team directly for assistance.",
            },
            {
              question: "How can I book a treatment at Wivana",
              answer:
                "You can book your treatment by visiting our website and clicking the  button, or by calling our reception team directly for assistance.",
            },
            {
              question: "How can I book a treatment at Wivana",
              answer:
                "You can book your treatment by visiting our website and clicking the  button, or by calling our reception team directly for assistance.",
            }
          ]}
        />
      </div>
      
      <div data-aos="fade" data-aos-delay="400">
        <Footer/>
      </div>
    </div>
  )
}

export default contact