import React from 'react';
import { useState } from 'react';
import Image from 'react/jsx-runtime';

export default function FaqSection({ 
  subtitle = "FAQs",
  title = "Frequently Asked Questions",
  faqImage,
  faqs = []
}) {
  // Simple accordion implementation
  const [openIndex, setOpenIndex] = useState(null);
  
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:items-start">
        
        {/* Left Image */}
        <div className="w-full overflow-hidden rounded-2xl shadow-lg">
          <img
            src={faqImage}
            alt="FAQ Illustration"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Right Content */}
        <div className="md:pt-0">
          {/* Subtitle */}
          <p className="text-sm uppercase tracking-wide mb-2 text-green-700">
            {subtitle}
          </p>
          {/* Title */}
          <h2 className="text-6xl font-semi-bold mb-13">
            {title}
          </h2>

          {/* Custom Accordion */}
          <div className="w-full">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200">
                <button
                  className="flex justify-between items-center w-full py-4 text-left text-lg font-medium"
                  onClick={() => toggleAccordion(index)}
                >
                  {faq.question}
                  <span className="transform transition-transform duration-200">
                    {openIndex === index ? '−' : '+'}
                  </span>
                </button>
                {openIndex === index && (
                  <div className="pb-4 text-gray-600 text-sm leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}