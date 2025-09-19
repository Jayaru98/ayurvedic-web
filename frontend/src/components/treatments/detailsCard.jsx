import React from "react"

export default function DetailsCard({ 
  title, 
  description, 
  price, 
  image, 
  buttonText = "Learn More" 
}) {
  return (
    <div className="relative w-full md:w-6/8 h-auto md:h-[480px] mx-auto mt-5 mb-5 rounded-3xl overflow-hidden shadow-lg">
      {/* Background image (only visible on md and up) */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover hidden md:block"
      />

      {/* Overlay Card */}
      <div className="relative md:absolute md:bottom-8 md:left-8 bg-white/95 backdrop-blur-md rounded-xl shadow-xl w-full md:w-[390px]">
        <div className="p-6">
          <h2 className="text-xl   mb-2">{title}</h2>
          <p className="text-gray-600 font-serif text-sm mb-4">{description}</p>
          
          <div className="w-full h-px bg-gray-200 my-4"></div>
          
          <div className="flex items-center justify-between">
            <p className="font-medium text-lg">{price}</p>
            <button className="bg-green-600 hover:bg-green-700 text-white font-serif rounded-full px-5 py-2 transition">
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
