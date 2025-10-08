import React from "react";

const IntroSection = () => {
  return (
    <section className="bg-amber-50 py-20 px-6 md:px-16 lg:px-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <p className="text-green-800 font-medium flex items-center gap-2 uppercase tracking-wide mb-4">
             Our Services
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-green-950 leading-tight mb-6">
            Experience the Healing Power of Authentic Ayurveda
          </h2>
        </div>

        {/* Right Content */}
        <div>
          <p className="text-lg text-gray-700 leading-relaxed">
            At Nature Foot Care & Ayurvedic Wellness, we bring you a curated range of therapies rooted in ancient Ayurvedic traditions. Each treatment is designed to relax the body, calm the mind, and awaken the spirit.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
