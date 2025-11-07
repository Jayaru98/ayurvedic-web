import React, { useState, useEffect } from 'react'
import { FaWhatsapp } from 'react-icons/fa6'

// Function to check if the element is in the footer
const isElementInFooter = (element, footerHeight) => {
    if (!element) return false;
    const rect = element.getBoundingClientRect();
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    return rect.bottom > viewportHeight - footerHeight;
};

const FloatingWhatsapp = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [bottomPosition, setBottomPosition] = useState('56px');

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        const handleScroll = () => {
            const footer = document.querySelector('footer'); // Assuming your footer has a 'footer' tag or a specific class
            if (footer) {
                const footerHeight = footer.offsetHeight;
                const newBottom = isElementInFooter(document.getElementById('floating-whatsapp-button'), footerHeight) ? '130px' : '56px';
                setBottomPosition(newBottom);
            }
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <a
            href="https://wa.me/94742610334?text=Hello%2C%20I%20would%20like%20to%20make%20an%20appointment."
            target='_blank'
            rel='noopener noreferrer'
            id='floating-whatsapp-button' // Add an ID for easier reference
            style={{
                position: 'fixed', // Keep it fixed
                bottom: isMobile ? bottomPosition : '56px', // Apply dynamic bottom for mobile, fixed for desktop
                right: '24px',
                zIndex: 1000,
                backgroundColor: '#25D366',
                borderRadius: '50%',
                padding: '16px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
            aria-label='Chat on Whatsapp'
        >
            <FaWhatsapp color='white' size={32} />
        </a>
    );
};

export default FloatingWhatsapp;