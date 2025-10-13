import React from 'react'
import { FaWhatsapp } from 'react-icons/fa6'

const FloatingWhatsapp = () => (
    <a 
        href="https://wa.me/94742610334?text=Hello%2C%20I%20would%20like%20to%20make%20an%20appointment."
        target='_blank'
        rel='noopener noreferrer'
        style={{
            position: 'fixed',
            bottom: '160px',
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

export default FloatingWhatsapp;