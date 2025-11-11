import React, { useState, useEffect } from 'react'
import { FaWhatsapp } from 'react-icons/fa6'
import { useLocation } from 'react-router-dom';

// Function to check if the element is in the footer
const isElementInFooter = (element, footerHeight) => {
    if (!element) return false;
    const rect = element.getBoundingClientRect();
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    return rect.bottom > viewportHeight - footerHeight; // Check if the element's bottom is above the footer's top
};

const FloatingWhatsapp = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [isVisible, setIsVisible] = useState(!isMobile); // Initially visible on desktop, hidden on mobile
    const [scrollPosition, setScrollPosition] = useState(0);
    const [bottomPosition, setBottomPosition] = useState('56px');
    const location = useLocation();

    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth < 768;
            setIsMobile(mobile);
            if (location.pathname === '/') {
                setIsVisible(!mobile || window.pageYOffset > (document.querySelector('[class*="h-[600px]"]')?.offsetHeight || 0));
            } else {
                setIsVisible(true);
            }
        };

        const handleScroll = () => {
            const footer = document.querySelector('footer'); // Assuming your footer has a 'footer' tag or a specific class
            const heroSection = document.querySelector('[class*="h-[550px]"]'); // More robust selector for hero
            const currentScrollPos = window.pageYOffset;

            if (footer) {
                const footerHeight = footer.offsetHeight;
                const newBottom = isElementInFooter(document.getElementById('floating-whatsapp-button'), footerHeight) ? '140px' : '56px'; // Adjust as needed
                setBottomPosition(newBottom);
            }

            // Logic for mobile visibility based on hero section
            // This scroll logic should only apply on the homepage for mobile
            if (isMobile && location.pathname === '/' && heroSection) {
                const heroHeight = heroSection.offsetHeight;
                if (currentScrollPos > heroHeight) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            } else {
                setIsVisible(true); // Always visible on desktop
            }
            setScrollPosition(currentScrollPos);
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isMobile, location.pathname]);

    return (
        isVisible && (
        <a
            href="https://wa.me/94742610334?text=Hello%2C%20I%20would%20like%20to%20make%20an%20appointment."
            target='_blank'
            rel='noopener noreferrer'
            id='floating-whatsapp-button' // Add an ID for easier reference
            style={{
                position: 'fixed', // Keep it fixed
                bottom: isVisible ? bottomPosition : '-50px', // Use isVisible to control on-screen/off-screen position
                right: '8px',
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
        </a>)
    );
};

export default FloatingWhatsapp;