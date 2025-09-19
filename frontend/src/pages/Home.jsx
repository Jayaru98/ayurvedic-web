import React from 'react'
import Hero from "../components/home/Hero";
import Showcase from '../components/home/Showcase';
import Testimonials from '../components/home/Testimonials';
import AboutUs from '../components/home/AboutUs';
import Process from '../components/home/Process';
import Footer from '../components/Footer';


const Home = () => {
  
  return (
    <>
        <Hero />
        <AboutUs />
        <Process />
        <Testimonials />
        <Showcase />
        <Footer/>
        
    </>
  )
}

export default Home