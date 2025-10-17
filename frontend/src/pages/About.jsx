import React from "react";
import HeroSection from "../components/HeroSection";
import AboutUs from "../components/home/AboutUs";
import CoreValues from "../components/about/CoreValue";

import NatureFootCare from "../components/about/NatureFootCare";

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
      <NatureFootCare />
      <Footer />
    </div>
  );
};

export default About;
