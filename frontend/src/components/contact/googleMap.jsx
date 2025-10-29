import React from "react";

const MapSection = () => {
  return (
    <section className="px-6 md:px-20 py-10 bg-amber-50">
      <h2 className="text-2xl md:text-3xl font-semibold text-center text-[#5C9269] mb-6">
        Find Us Here
      </h2>
      <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3961.1225119340274!2d79.85981397581776!3d6.875922018965898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwNTInMzMuMyJOIDc5wrA1MSc0NC42IkU!5e0!3m2!1sen!2slk!4v1761718738026!5m2!1sen!2slk"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Wivana Spa Location"
        ></iframe>
      </div>
    </section>
  );
};

export default MapSection;
