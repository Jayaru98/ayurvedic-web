import React from 'react'
import Logo from '../assets/Images/wivana-logo-dark.png'
import { FaPhone } from "react-icons/fa6";
import { FaRegEnvelope } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { NavLink } from 'react-router-dom';

import MobileMenu from './mobileMenu';

const Header = () => {
  const getLinkClass = ({ isActive }) => {
    return isActive
      ? 'text-white font-medium'
      : 'text-white/80 hover:text-white font-medium';
  };
  return (
    <>
        <div className='flex justify-between items-center p-6 md:ml-28 mr-28'>
            {/* Logo */}
            <img src={Logo} alt="Wivana logo" className='md:hidden w-40 h-10' />
            <MobileMenu />
            
            <div className="hidden md:flex items-center space-x-4" >
                {/* Social Media Icons */}
                <a href="#" className="text-white border border-white rounded-full p-2 hover:text-black hover:bg-white">
                    <FaFacebookF className=''/>
                </a>
                <a href="#" className="text-white hover:text-black border border-white rounded-full p-2 hover:bg-white">
                    <FiInstagram className=''/>
                </a>
            </div>
            {/* Contact Info */}
            <div className="hidden md:flex items-center text-sm text-white">
                <span><FaRegEnvelope className='w-5 h-5 mr-2 mt-2 font-bold' /></span>
                <p className='mr-3 mt-2 font-normal font-sans'>contact@wivana.com</p>
                <span><FaPhone className='w-5 h-5 mr-2 mt-2' /></span>
                <span className='font-normal mt-2 font-sans'>+1 (555) 123-4567</span>
            </div>
        </div>

        <hr className='hidden md:block border-white/60 border-[0.1px] w-[calc(100% - 64px)] ml-28 mr-28 -mt-4 -mb-4' data-aos="fade-up"/>

      {/* Navigation Bar */}
      <nav className="flex justify-between items-center p-6 ml-28 mr-28" data-aos="fade-up">
        <div className="flex items-center space-x-2">
          {/* Logo  */}
          <img src={Logo} alt="Wivana logo" className=' hidden md:block w-40 h-10' />
        </div>

        <div className="hidden md:flex space-x-8 font-sans">
          <NavLink to="/" className={getLinkClass} end>Home</NavLink>
          <NavLink to="/about" className={getLinkClass}>About</NavLink>
          <NavLink to="/treatments" className={getLinkClass}>Treatments</NavLink>
          <NavLink to="/contact" className={getLinkClass}>Contact</NavLink>
        </div>
        <div>
          <button className='hidden md:block bg-[#5C9269] hover:bg-white hover:text-black py-3 px-6 rounded-full font-serif text-white cursor-pointer'>Make Appointment</button>
        </div>
      </nav>
    </>
  )
}

export default Header