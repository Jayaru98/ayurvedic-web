import React from "react";
import HeroSection from "../components/HeroSection";
import AboutUs from "../components/home/AboutUs";
import CoreValues from "../components/about/CoreValue";
import ShowcaseAbout from "../components/about/ShowcaseAbout";
import FaqImage from "../assets/images/faqsectionj.jpg"

import NatureFootCare from "../components/about/NatureFootCare";
import FaqSection from "../components/FaqSection";

import BackgroundImage from "../assets/images/about_hero.jpg";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div>
      <div data-aos="fade-down">
        <HeroSection
          title="About Us"
          breadcrumb={["Home", "About Us"]}
          backgroundImage={BackgroundImage}
        />
      </div>
      <AboutUs />

      <CoreValues />
      <NatureFootCare ctaText="View Details" />
      <Footer />
    </div>
  );
};

export default About;
