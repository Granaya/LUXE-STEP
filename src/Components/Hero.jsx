import React from 'react';
import hero from '../assets/nike-hero.png';

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-[#0f0fd7] via-[#2c67f2] to-[#00d4ff] py-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse lg:flex-row items-center justify-between">
        {/* Text Section */}
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mt-4">
            Step Into Style <br />
            <span className="text-yellow-300">With Luxe Sneakers</span>
          </h1>
          <p className="text-white text-lg sm:text-xl mt-6 max-w-xl mx-auto lg:mx-0">
            Discover a new level of comfort and style with our collection of sneakers, 
            designed for those who demand both performance and premium aesthetics.
          </p>
          <div className="mt-8">
            <button className="px-10 py-4 bg-white text-blue-900 font-semibold rounded-full hover:bg-yellow-300 hover:text-black transition duration-300">
              View Collection
            </button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="lg:w-1/2 flex justify-center mb-12 lg:mb-0">
          <img
            src={hero}
            alt="hero-img"
            className="w-[300px] sm:w-[480px] md:w-[600px] h-auto object-contain drop-shadow-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
