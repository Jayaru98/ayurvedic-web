import React, { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import DetailsCard from "../components/treatments/detailsCard";
import Service1 from "../assets/images/footMassage.jpg";
import Service2 from "../assets/images/footMassage2.png";
import Service3 from "../assets/images/facemassage.jpg";
import Service4 from "../assets/images/nasnakarma.png";
import Service5 from "../assets/images/shirod.png";
import Service6 from "../assets/images/vasti1.png";
import Service7 from "../assets/images/fish.png";
import Service8 from "../assets/images/steamn.png";
import Service9 from "../assets/images/ped.png";
import Service10 from "../assets/images/mancu.png";
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
import FaqImage from "../assets/images/faqsectionj.jpg";
import Footer from "../components/Footer";
import IntroSection from "../components/treatments/introSection";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiSearch, FiX } from "react-icons/fi";


const treatments = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTreatments, setFilteredTreatments] = useState([]);

  // All treatments data
  const allTreatments = [
    {
      id: 1,
      title: "Signature Foot Massage (Oil Massage)",
      description: "A deeply relaxing oil massage focused on the feet to improve circulation, release tension, and restore natural energy flow. Perfect for stress relief and grounding.",
      price: "Rs. 3000",
      duration: "1 hour",
      image: Service1,
    },
    {
      id: 2,
      title: "Luxury Foot Massage",
      description: "An indulgent foot massage experience combining gentle pressure techniques with aromatic oils. Ideal for total relaxation and a touch of luxury.",
      price: "Rs. 3000",
      duration: "1 hour",
      image: Service2,
    },
    {
      id: 3,
      title: "Ayurvedic Face Massage",
      description: "A rejuvenating Ayurvedic facial massage using herbal oils that nourish the skin, improve circulation, and bring out a natural glow. Helps relieve facial tension and promotes youthful radiance.",
      price: "Rs. 2000",
      duration: "1 hour",
      image: Service3,
    },
    {
      id: 4,
      title: "Nasya Karma (Oil & Steam Therapy)",
      description: "An Ayurvedic detox treatment where herbal oil and steam are applied through the nasal passages. Known to cleanse the sinuses, relieve headaches, improve breathing, and promote mental clarity.",
      price: "Rs. 1500",
      duration: "30 minutes",
      image: Service4,
    },
    {
      id: 5,
      title: "Shirodhara",
      description: "A signature Ayurvedic therapy where a continuous stream of warm herbal oil is poured gently over the forehead. Effective for stress, anxiety, insomnia, and chronic headaches. Provides deep mental relaxation and tranquility.",
      price: "Rs. 4000",
      duration: "30 min / 45 min / 1 hour",
      image: Service5,
    },
    {
      id: 6,
      title: "Vasti",
      description: "Relieves stiffness and pain with warm herbal oils, deeply nourishing joints and muscles.",
      price: "Rs. 1500",
      duration: "45 minutes",
      image: Service6,
    },
    {
      id: 7,
      title: "Fish Therapy",
      description: "Gentle Garra rufa fish exfoliate dead skin, leaving feet soft, smooth, and refreshed.",
      price: "Rs. 1500",
      duration: "45 minutes",
      image: Service7,
    },
    {
      id: 8,
      title: "Stream Bath",
      description: "Herbal steam detoxifies, opens pores, and relaxes muscles for a light, rejuvenated feeling.",
      price: "Rs. 1500",
      duration: "45 minutes",
      image: Service8,
    },
    {
      id: 9,
      title: "Pedicure",
      description: "Cleanses, exfoliates, and nourishes feet, leaving them soft, fresh, and beautiful.",
      price: "Rs. 3000",
      duration: "45 minutes",
      image: Service9,
    },
    {
      id: 10,
      title: "Manicure",
      description: "Shapes, polishes, and revitalizes hands, giving nails a healthy, elegant look.",
      price: "Rs. 3000",
      duration: "45 minutes",
      image: Service10,
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
    
    // Initialize with all treatments
    setFilteredTreatments(allTreatments);
  }, []);

  // Search function
  useEffect(() => {
    if (searchTerm === "") {
      setFilteredTreatments(allTreatments);
    } else {
      const filtered = allTreatments.filter(treatment =>
        treatment.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        treatment.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        treatment.price.toLowerCase().includes(searchTerm.toLowerCase()) ||
        treatment.duration.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredTreatments(filtered);
    }
  }, [searchTerm]);

  const clearSearch = () => {
    setSearchTerm("");
  };

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

      {/* Search Bar Section */}
      <div className="max-w-7xl mx-auto px-4 py-6" data-aos="fade-up" data-aos-delay="50">
        <div className="flex flex-col items-center mb-8">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Search treatments, therapy, massage..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-12 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent shadow-sm"
            />
            <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            {searchTerm && (
              <button
                onClick={clearSearch}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <FiX className="w-5 h-5" />
              </button>
            )}
          </div>
          
          {/* Search Results Counter */}
          <div className="mt-3 text-sm text-gray-600">
            {searchTerm ? (
              <span>
                Showing {filteredTreatments.length} of {allTreatments.length} treatments
                {searchTerm && <span className="font-medium"> for "{searchTerm}"</span>}
              </span>
            ) : (
              <span>Showing all {allTreatments.length} treatments</span>
            )}
          </div>
        </div>
      </div>

      {/* Treatment Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 py-2">
        {filteredTreatments.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTreatments.map((treatment, index) => (
              <div key={treatment.id} data-aos="fade-up" data-aos-delay={100 + (index * 50)}>
                <DetailsCard
                  title={treatment.title}
                  description={treatment.description}
                  price={treatment.price}
                  duration={treatment.duration}
                  image={treatment.image}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12" data-aos="fade-up">
            <div className="max-w-md mx-auto">
              <FiSearch className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-gray-600 mb-2">No treatments found</h3>
              <p className="text-gray-500 mb-4">
                We couldn't find any treatments matching "{searchTerm}". Try searching with different keywords.
              </p>
              <button
                onClick={clearSearch}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full transition"
              >
                Show All Treatments
              </button>
            </div>
          </div>
        )}
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
                  "Experience true Ayurvedic healing rooted in ancient wisdom and timeless traditions, carefully adapted to modern wellness needs.",
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
                  "Our therapies are delivered by skilled Ayurvedic practitioners who combine knowledge, care, and experience to guide your healing journey.",
              },
              {
                icon: (
                  <img
                    src={Icon3}
                    alt="Holistic Approach"
                    className="w-12 h-12"
                  />
                ),
                title: "Natural Ingredients",
                description:
                  "We use only pure, herbal oils and natural remedies, ensuring safe, sustainable, and effective treatments for your well-being.",
              },
              {
                icon: (
                  <img
                    src={Icon4}
                    alt="Personalized Care"
                    className="w-12 h-12"
                  />
                ),
                title: "Serene Environment",
                description:
                  "Step into a tranquil sanctuary designed to calm your mind, relax your body, and nurture your spirit in complete harmony.",
              },
              {
                icon: (
                  <img
                    src={Icon5}
                    alt="Personalized Care"
                    className="w-12 h-12"
                  />
                ),
                title: "Personalized Care",
                description:
                  "Every treatment is customized to your unique needs, helping you achieve balance, rejuvenation, and long-lasting results.",
              },
              {
                icon: (
                  <img src={Icon6} alt="Proven Results" className="w-12 h-12" />
                ),
                title: "Proven Results",
                description:
                  "Trusted by our clients, we deliver consistent wellness outcomes — from stress relief and improved circulation to deep relaxation and inner peace.",
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
              question: "What is Nature Foot Care Ayurveda’s approach to wellness?",
              answer:
                "We embrace the timeless principles of Ayurveda, offering personalized treatments that restore balance to the mind, body, and spirit. Using natural remedies and holistic practices, our therapies promote relaxation, healing, and long-term well-being.",
            },
            {
              question: "Are the treatments safe and natural?",
              answer:
                "Yes, all our therapies are rooted in Ayurveda and use only herbal oils, natural remedies, and safe practices, making them gentle yet highly effective.",
            },
            {
              question: "What should I wear during the treatment?",
              answer:
                "We provide comfortable attire and towels as needed. For most therapies, loose clothing is recommended to help you relax.",
            },
            {
              question: "Can the treatments help with stress and body pain?",
              answer:
                "Absolutely. Our Ayurvedic massages and therapies are designed to relieve muscle tension, improve circulation, calm the mind, and ease stress-related discomfort.",
            },
            {
              question: "How are treatments personalized?",
              answer:
                "Before each session, our practitioners understand your unique needs and health goals. Based on Ayurvedic principles, the treatment is customized with suitable oils, techniques, and duration.",
            },
            {
              question: "Is Ayurveda only for people with health issues?",
              answer:
                "Not at all! Ayurveda is for everyone. While it helps manage specific concerns, it is also a wonderful way to maintain balance, improve energy, and enjoy overall wellness.",
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
