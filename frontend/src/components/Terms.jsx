import React from 'react';
import Pushpin from '../assets/images/pushPin.png'
import EmailIcon from '../assets/images/emailIcon.png'
import PhoneIcon from '../assets/images/phoneIcon.png'

const Terms = () => {
  return (
    <div className='ml-6'>
        <h3 className='mt-16 text-[30px] font-semibold'>Terms and Conditions</h3>
        <p className='mt-2'>Last updated: <span className='italic'>1st November 2025</span></p>
        <article className='mt-3 font-sans-serif'>
            <p>Welcome to <span className='font-semibold'>Nature Foot Care and Ayurvedic Wellness</span> (“we,” “our,” or “us”). These Terms and Conditions (“Terms”) govern your use of our website and services.</p>
            <p> By accessing or using our website, you agree to be bound by these Terms. If you do not agree, please do not use our website or services.</p>
        </article>
        <section className=''>
            <h4 className='font-semibold mt-4 mb-1'>1. Services</h4>
            <p>Nature Foot Care and Ayurvedic Wellness provides wellness treatments, ayurvedic therapies, and related services.</p>
            <p>All services are intended for relaxation and wellness purposes only and are not a substitute for professional medical treatment.</p>
        </section>
        <section>
            <h4 className='font-semibold mt-4 mb-1'>2. Appointments and Bookings</h4>
            <ul className='ml-12 mt-3 list-disc space-y-2'>
                <li>Appointments can be made through our website, by phone, or in person.</li>
                <li>We recommend booking in advance to ensure availability.</li>
                <li>You agree to provide accurate and complete information when scheduling a service.</li>
            </ul>
            <p className='mt-2 font-semibold ml-2'>Cancellation Policy</p>
            <p className='ml-4'>If you need to cancel or reschedule, please inform us at least 24 hours in advance.</p>
            <p className='ml-4'>Failure to do so may result in a cancellation fee.</p>
        </section>
        <section>
            <h4 className='font-semibold mt-4 mb-1'>3. Payments</h4>
            <ul className='ml-12 mt-3 list-disc space-y-2'>
                <li>All prices are listed in [LKR or your currency].</li>
                <li>Payment can be made via cash, card, or approved online methods.</li>
                <li>We reserve the right to modify our prices at any time without prior notice.</li>
            </ul>
        </section>
        <section>
            <h4 className='font-semibold mt-4 mb-1'>4. Health and Safety</h4>
            <ul className='ml-12 mt-3 list-disc space-y-2'>
                <li>Please inform our staff about any allergies, injuries, or health conditions before treatment.</li>
                <li>We reserve the right to decline service if a treatment may pose a health risk to the client or therapist.</li>
                <li>Our services are strictly non-medical and do not claim to diagnose, treat, or cure any medical condition.</li>
            </ul>
        </section>
        <section>
            <h4 className='font-semibold mt-4 mb-1'>5. Personal Conduct</h4>
            <p>We maintain a professional and respectful environment.</p>
            <p>Inappropriate behavior, misconduct, or harassment toward staff will result in immediate termination of the session and may lead to a permanent ban from our services.</p>
        </section>
        <section>
            <h4 className='font-semibold mt-4 mb-1'>6. Intellectual Property</h4>
            <p>All content on this website, including text, logos, images, and graphics, is the property of Nature Foot Care and Ayurvedic Wellness and is protected by copyright laws.</p>
            <p> You may not copy, reproduce, or distribute any material without written permission.</p>
        </section>
        <section>
            <h4 className='font-semibold mt-4 mb-1'>7. Limitation of Liability</h4>
            <p>We strive to provide safe and effective services; however, we are not liable for:</p>
            <ul className='ml-12 mt-3 list-disc space-y-2'>
                <li>Any injuries, allergic reactions, or medical issues resulting from treatments</li>
                <li>Any damages or losses arising from your use of the website or services</li>
            </ul>
            <p>You agree to use our services at your own risk.</p>
        </section>
        <section>
            <h4 className='font-semibold mt-4 mb-1'>8. Privacy</h4>
            <p>Your privacy is important to us. Please read our [Privacy Policy] to understand how we handle your personal data.</p>
        </section>
        <section>
            <h4 className='font-semibold mt-4 mb-1'>9. External Links</h4>
            <p>Our website may include links to third-party websites.</p>
            <p>We are not responsible for the content or accuracy of these external sites.</p>
        </section>
        <section>
            <h4 className='font-semibold mt-4 mb-1'>10. Changes to Terms</h4>
            <p>We may update these Terms from time to time without prior notice.</p>
            <p>The updated version will be posted on this page with a revised “Last Updated” date.</p>
            <p>By continuing to use our services after any changes, you agree to the new Terms.</p>
        </section>
        <section>
            <h4 className='font-semibold mt-4 mb-1'>11. Governing Law</h4>
            <p>These Terms are governed by the laws of Sri Lanka (or your country of operation).</p>
            <p>Any disputes shall be resolved under the jurisdiction of the local courts.</p>
        </section>
        <section>
            <h4 className='font-semibold mt-4 mb-1'>12. Contact Us</h4>
                <p>If you have any questions or concerns about this Privacy Policy, please contact us at:</p>
                <p className='mt-5 ml-4 flex gap-2'><img src={Pushpin} alt=""  className='w-4 h-4'/>No.57,W A Silva mawatha, Colombo 06, Sri Lanka</p>
                <p className='mt-5 ml-4 flex gap-2'><img src={EmailIcon} alt=""  className='w-4 h-4'/> ayurvedafootcarenewnature@gmail.com</p>
                <p className='mt-5 ml-4 flex gap-2 mb-24'><img src={PhoneIcon} alt=""  className='w-4 h-4'/> +94 74 261 0334</p>
        </section>
    </div>
  )
}

export default Terms