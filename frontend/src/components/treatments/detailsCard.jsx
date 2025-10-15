import React from "react"

export default function DetailsCard({ 
  title, 
  price,
  description, 
  duration, 
  image, 
  
}) {
  return (
    <div className="relative w-full h-auto md:h-[500px] rounded-xl overflow-hidden shadow-lg">
      {/* Background image */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-[350px] object-cover hidden md:block"
      />

      {/* Overlay Card */}
      <div className="relative md:absolute md:bottom-0 bg-white/95 backdrop-blur-md rounded-sm shadow-xl w-full">
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-2">{title}</h2>
          <p className="text-black font-serif text-xs mb-3">{duration}</p>
          <p className="text-gray-600 font-serif text-xs mb-3 line-clamp-4">{description}</p>
          
          <div className="w-full h-px bg-gray-200 my-3"></div>
          
          <div className="flex items-center justify-between">
            <p className="font-medium text-base"><span className="font-thin text-xs">Starting from</span> {price}</p>
            
          </div>
        </div>
      </div>
    </div>
  )
}