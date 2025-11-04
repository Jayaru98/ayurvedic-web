import React from 'react'
import Pushpin from '../assets/images/pushPin.png'
import EmailIcon from '../assets/images/emailIcon.png'
import PhoneIcon from '../assets/images/phoneIcon.png'
import Footer from './Footer'
import Header from './Header'
import HeaderNew from './HeaderNew'
import FooterNew from './FooterNew'



const PrivacyPolicy = () => {
  return (
    <div >
        <HeaderNew />
        <div className='bg-white px-6 py-16 flex-grow'>
            <h3 className='text-[30px] font-semibold'>Privacy Policy</h3>
            <p className='mt-2'>Last updated: <span className='italic'>1st November 2025</span></p>
            <article className='mt-3 font-sans-serif'>
                <p>Welcome to <span className='font-semibold'>Nature Foot Care and Ayurvedic Wellness</span>(“we,” “our,” or “us”). Your privacy is important to us. This Privacy Policy explains how we collect, <br /> use, disclose, and protect your personal information when you visit our website or use our services.</p>
                <p className='mt-2'></p>
            </article>
            <section className='mt-4'>
                <h4 className='font-semibold mb-1'>1. Information We Collect</h4>
                <p className='mb-2'>We may collect the following types of information:</p>
                <p className='font-semibold ml-4'>a. Personal Information</p>
                <p className='ml-4'>When you make an appointment, contact us, or subscribe to our updates, we may collect:</p>
                <ul className='ml-12 mt-3 list-disc space-y-2'>
                    <li>Full name</li>
                    <li>Email address</li>
                    <li>Phone number</li>
                    <li>Appointment or service details</li>
                    <li>Payment information (processed securely through third-party providers)</li>
                </ul>
                <p className='font-semibold mt-4 ml-4'>b. Non-Personal Information</p>
                <p className='ml-4'>We may also collect:</p>
                <ul className='ml-12 mb-4 mt-3 list-disc space-y-2'>
                    <li>Browser type and version</li>
                    <li>Device information</li>
                    <li>IP address</li>
                    <li>Pages visited and time spent on our site</li>
                </ul>
                <p>This information helps us improve your user experience and maintain website security.</p>
            </section>
            <section className=''>
                <h4 className='font-semibold mt-4 mb-1'>2. How We Use Your Information</h4>
                <p>We use your information to:</p>
                <ul className='ml-12 mb-4 mt-3 list-disc space-y-2'>
                    <li>Provide and manage appointments or services</li>
                    <li>Respond to your messages or inquiries</li>
                    <li>Send booking confirmations and reminders</li>
                    <li>Improve website performance and user experience</li>
                    <li>Share promotional offers (only if you consent)</li>
                </ul>
            </section>
            <section>
                <h4 className='font-semibold mt-4 mb-1'>3. How We Protect Your Information</h4>
                <p>We follow strict security practices to prevent unauthorized access, disclosure, or alteration of your information.</p>
                <p>All online transactions are protected with SSL (Secure Socket Layer) encryption.</p>
            </section>
            <section>
                <h4 className='font-semibold mt-4 mb-1'>4. Sharing of Information</h4>
                <p>We <span className='font-semibold'>do not sell or rent</span> your personal data.</p>
                <p>However, we may share limited information with:</p>
                <ul className='ml-12 mb-4 mt-3 list-disc space-y-2'>
                    <li><span className='font-semibold'>Service providers</span> (such as payment gateways or booking systems)</li>
                    <li><span className='font-semibold'>Legal authorities</span> if required by law</li>
                </ul>
                <p>All partners are obligated to protect your privacy according to data protection laws.</p>
            </section>
            <section>
                <h4 className='font-semibold mt-4 mb-1'>5. Cookies</h4>
                <p>Our website may use cookies to enhance your browsing experience.</p>
                <p> You can choose to disable cookies through your browser settings, but some parts of the website may not function properly.</p>
            </section>
            <section>
                <h4 className='font-semibold mt-4 mb-1'>6. Your Rights</h4>
                <p>You have the right to:</p>
                <ul className='ml-12 mb-4 mt-3 list-disc space-y-2'>
                    <li>Access the personal data we hold about you</li>
                    <li>Request corrections or updates</li>
                    <li>Withdraw consent for marketing communications</li>
                    <li>Request deletion of your data (where legally applicable)</li>
                </ul>
            </section>
            <section>
                <h4 className='font-semibold mt-4 mb-1'>7. Links to Other Websites</h4>
                <p>Our website may contain links to other sites.</p>
                <p>We are not responsible for the privacy practices or content of external websites. We encourage <br /> you to review their privacy policies before providing personal information.</p>
            </section>
            <section>
                <h4 className='font-semibold mt-4 mb-1'>8. Updates to This Policy</h4>
                <p>We may update this Privacy Policy periodically.</p>
                <p>Any changes will be posted on this page with a new “Last updated” date.</p>
            </section>
            <section>
                <h4 className='font-semibold mt-4 mb-1'>9. Contact Us</h4>
                <p>If you have any questions or concerns about this Privacy Policy, please contact us at:</p>
                <p className='mt-5 ml-4 flex gap-2'><img src={Pushpin} alt=""  className='w-4 h-4'/>No.57,W A Silva mawatha, Colombo 06, Sri Lanka</p>
                <p className='mt-5 ml-4 flex gap-2'><img src={EmailIcon} alt=""  className='w-4 h-4'/> ayurvedafootcarenewnature@gmail.com</p>
                <p className='mt-5 ml-4 flex gap-2 mb-24'><img src={PhoneIcon} alt=""  className='w-4 h-4'/> +94 74 261 0334</p>
            </section>
        </div>
        <FooterNew />
    </div>
  )
}

export default PrivacyPolicy