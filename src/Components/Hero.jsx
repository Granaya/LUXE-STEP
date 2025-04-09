import React from 'react'
import hero from '../assets/nike-hero.png'

const Hero = () => {
  return (
    <div>
        {/* Hero Section */}
      <div className="grid w-full place-items-center bg-gradient-to-r from-[#0f0fd7] via-[#2c67f2] to-[#00d4ff]">
        <div className="text-center">
          <h1 className="text-5xl font-bold mt-20 text-white">Elevate Your Game With Our Exclusive Collection</h1>
          <p className="text-lg mt-3">
          Discover a new level of comfort and style with our collection of shoes, designed for those who demand both quality and performance. <br /> Each pair is meticulously crafted to provide all-day comfort, whether you're running errands, hitting the gym, or stepping out for a casual day out.
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <button className="px-10 py-4 bg-white text-blue-900 font-semibold rounded-full hover:bg-sky-500">
              View Collection
            </button>
          </div>
          <img
            src={hero}
            alt="hero-img"
            className="w-[790px] h-[400px] mt-10"
          />
        </div>
      </div>
    </div>
  )
}

export default Hero