import React, { useEffect } from "react";
import HeroSection from "../components/HeroSection";
import DetailsCard from "../components/treatments/detailsCard";
import Service1 from "../assets/images/service-1.jpg";
import Service2 from "../assets/images/treatment/treatment_1.jpg";
import Service3 from "../assets/images/treatment/treatment_2.jpg";
import Service4 from "../assets/images/service-4.jpg";
import HeroBackground from "../assets/images/treatmenthero.webp";
import WhyChooseUs from "../components/whyChooseUs";
import Icon1 from "../assets/images/icons-UGGEC4D_4.png";
import Icon2 from "../assets/images/icons-UGGEC4D_9.png";
import Icon3 from "../assets/images/icons-UGGEC4D_5.png";
import Icon4 from "../assets/images/icons-UGGEC4D_6.png";
import Icon5 from "../assets/images/icons-UGGEC4D_7.png";
import Icon6 from "../assets/images/icons-UGGEC4D_8.png";
import TreatmentBottom from "../assets/images/images-PZE6K9S.jpg";
import FaqSection from "../components/FaqSection";
import FaqImage from "../assets/images/faqnew.png";
import Footer from "../components/Footer";
import IntroSection from "../components/treatments/introSection";
import AOS from "aos";
import "aos/dist/aos.css";

const treatments = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="bg-amber-50">
      <div data-aos="fade-down">
        <HeroSection
          title="Our Treatments"
          breadcrumb={["Home", "Treatments"]}
          backgroundImage={HeroBackground}
        />
      </div>

      <div data-aos="fade-up">
        <IntroSection />
      </div>

      <div data-aos="fade-right" data-aos-delay="100">
        <DetailsCard
          title="Abhyanga Massage"
          description="A full-body Ayurvedic oil massage designed to promote relaxation and detoxification."
          price="$100"
          image={Service1}
        />
      </div>

      <div data-aos="fade-left" data-aos-delay="150">
        <DetailsCard
          title="Sample Treatment"
          description="This is a sample treatment description."
          price="$100"
          image={Service2}
        />
      </div>

      <div data-aos="fade-right" data-aos-delay="200">
        <DetailsCard
          title="Sample Treatment"
          description="This is a sample treatment description."
          price="$100"
          image={Service3}
        />
      </div>

      <div data-aos="fade-left" data-aos-delay="250">
        <DetailsCard
          title="Sample Treatment"
          description="This is a sample treatment description."
          price="$100"
          image={Service4}
        />
      </div>

      {/* WhyChooseUs with green background overlay */}
      <div className="relative pb-40" data-aos="fade-up" data-aos-delay="300">
        {/* Green background that covers the bottom half */}
        <div className="absolute bottom-0 left-0 right-0 h-3/4 bg-green-950 z-0"></div>

        {/* WhyChooseUs component positioned on top */}
        <div className="relative z-10">
          <WhyChooseUs
            title="The Ultimate Ayurvedic Wellness Experience"
            backgroundImage={TreatmentBottom}
            features={[
              {
                icon: (
                  <img
                    src={Icon1}
                    alt="Natural Ingredients"
                    className="w-12 h-12"
                  />
                ),
                title: "Authentic Ayurveda",
                description:
                  "Experience genuine Ayurvedic treatments rooted in centuries of tradition.",
              },
              {
                icon: (
                  <img
                    src={Icon2}
                    alt="Natural Healing Methods"
                    className="w-12 h-12"
                  />
                ),
                title: "Expert Practitioners",
                description:
                  "We use only natural, herbal remedies and traditional Ayurvedic techniques.",
              },
              {
                icon: (
                  <img
                    src={Icon3}
                    alt="Holistic Approach"
                    className="w-12 h-12"
                  />
                ),
                title: "Expert Practitioners",
                description:
                  "Our services blend therapeutic treatments with lifestyle guidance.",
              },
              {
                icon: (
                  <img
                    src={Icon4}
                    alt="Personalized Care"
                    className="w-12 h-12"
                  />
                ),
                title: "Natural Ingredients",
                description:
                  "We use only natural, herbal remedies and techniques, promoting safe.",
              },
              {
                icon: (
                  <img
                    src={Icon5}
                    alt="Serene Environment"
                    className="w-12 h-12"
                  />
                ),
                title: "Serene Environment",
                description:
                  "Our tranquil spa setting is designed to enhance relaxation.",
              },
              {
                icon: (
                  <img src={Icon6} alt="Proven Results" className="w-12 h-12" />
                ),
                title: "Proven Results",
                description:
                  "With a 99% customer satisfaction rate, our clients consistently leave feeling revitalized.",
              },
            ]}
          />
        </div>
      </div>

      <div data-aos="zoom-in" data-aos-delay="350">
        <FaqSection
          faqImage={FaqImage}
          faqs={[
            {
              question: "What is Wivana’s approach to wellness?",
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
                "You can book your treatment by visiting our website and clicking the “Book Now” button, or by calling our reception team directly for assistance.",
            },
            {
              question: "How can I book a treatment at Wivana",
              answer:
                "You can book your treatment by visiting our website and clicking the “Book Now” button, or by calling our reception team directly for assistance.",
            },
            {
              question: "How can I book a treatment at Wivana",
              answer:
                "You can book your treatment by visiting our website and clicking the “Book Now” button, or by calling our reception team directly for assistance.",
            },
          ]}
        />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default treatments;
