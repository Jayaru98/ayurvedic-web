import React, {useState} from 'react';
import { Menu, X } from 'lucide-react';

const mobileMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
        {/* Mobile Menu Button - left aligned on mobile, hidden on desktop  */}
        <div className="md:hidden text-white z-20">
            <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className={`hover:text-teal-200 focus:outline-none transition-color duration-200 ${isMenuOpen ? 'fixed top-8 right-6' : 'absolute right-6 top-6'}`}
            >
                {isMenuOpen ? (<X className='h-8 w-8 font-bold text-white'/>): (<Menu className='w-6 h-6'/>)}
            </button>
        </div>
        {isMenuOpen && (
            <div className='md:hidden fixed inset-0 bg-gray-200 z-10 animate-drop-in'>
                <div className='px-2 pt-16 pb-3 text-left space-y-1 sm:px-3'>
                    <a className='text-black font-semibold hover:text-teal-400 block px-3 py-2 rounded-md transition-color duration-200' href="/">Home</a>
                    <a className='text-black font-semibold hover:text-teal-400 block px-3 py-2 rounded-md transition-color duration-200' href="/about">About</a>
                    <a className='text-black font-semibold hover:text-teal-400 block px-3 py-2 rounded-md transition-color duration-200' href="/treatments">Treatment</a>
                    <a className='text-black font-semibold hover:text-teal-400 block px-3 py-2 rounded-md transition-color duration-200' href="/contact">Contact</a>
                </div>
            </div>
        )}
    </>
  )
}

export default mobileMenu