import React, {useState, useEffect} from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '../assets/Images/Nature Foot Care Logo.png';

const mobileMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isMenuOpen]);



  return (
    <>
        {/* Mobile Menu Button - centered on mobile, hidden on desktop  */}
        {/* <div className="md:hidden text-white z-20"> */}
         <div className="md:hidden">
            <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className={`z-20 hover:text-teal-200 focus:outline-none transition-color duration-200 ${isMenuOpen ? 'fixed top-8 right-6 text-white' : 'absolute top-8 right-6 text-white'}`}
           >
                {isMenuOpen ? (<X className='h-8 w-8 font-bold text-white'/>): (<Menu className='w-6 h-6'/>)}
            </button>
        </div>
        {isMenuOpen && (
            // <div className='md:hidden fixed inset-0 bg-green-900/90 z-10 animate-drop-in flex flex-col justify-center items-center'>
            <div className='md:hidden fixed top-24 h-full pt-24 pb-6 left-0 right-0 bg-green-900 z-50 animate-drop-in flex flex-col justify-start items-center'>
                {/* <a href="/" className="absolute top-4 left-4">
                    <img src={Logo} alt="Nature Foot care logo" className='w-18 h-18' />
                </a> */}
                {/* <div className='text-center text-[20px] space-y-2 sm:px-3'> */}
                {/* <div className='px-2 pt-2 pb-3 text-center text-[20px] space-y-2 sm:px-3'> */}
                <div className='text-center text-[20px] space-y-2 sm:px-3'>
                    <a className='text-white font-semibold hover:text-teal-400 block px-3 py-2 rounded-md transition-color duration-200' href="/">Home</a>
                    <a className='text-white font-semibold hover:text-teal-400 block px-3 py-2 rounded-md transition-color duration-200' href="/about">About Us</a>
                    <a className='text-white font-semibold hover:text-teal-400 block px-3 py-2 rounded-md transition-color duration-200' href="/treatments">Treatment</a>
                    <a className='text-white font-semibold hover:text-teal-400 block px-3 py-2 rounded-md transition-color duration-200' href="/contact">Contact Us</a>
                </div>
            </div>
        )}
    </>
  )
}

export default mobileMenu