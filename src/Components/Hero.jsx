import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import hero1 from '../assets/hero1.png';
import hero2 from '../assets/hero2.jpg';
import hero3 from '../assets/hero3.jpg';

const images = [hero1, hero2, hero3];  // Remove hero4
const messages = [
  'Step Into Style',
  'Unleash Performance',
  'Comfort Meets Luxury',
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);  // This will cycle through the images
    }, 4000);
    return () => clearInterval(interval);  // Cleanup interval when component unmounts
  }, []);

  return (
    <div className="bg-gradient-to-r from-[#0f0fd7] via-[#2c67f2] to-[#00d4ff] py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse lg:flex-row items-center justify-between">
        
        {/* Text Section with animated heading */}
        <div className="text-center lg:text-left lg:w-1/2">
          <AnimatePresence mode="wait">
            <motion.h1
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mt-4"
            >
              {messages[current]} <br />
              <span className="text-yellow-300">With Luxe Sneakers</span>
            </motion.h1>
          </AnimatePresence>

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

        {/* Sliding Image Section */}
        <div className="lg:w-1/2 flex justify-center mb-12 lg:mb-0 relative h-[300px] sm:h-[400px] md:h-[500px] w-full overflow-hidden">
          <AnimatePresence mode="wait" initial={false}>
            <motion.img
              key={current}
              src={images[current]}  // This dynamically changes based on the current index
              alt="hero sneaker"
              initial={{ y: 100, opacity: 0 }}  // Adjust initial vertical position
              animate={{ y: 0, opacity: 1 }}    // Image comes into view
              exit={{ y: -100, opacity: 0 }}   // Image exits upwards
              transition={{ duration: 0.8, ease: 'easeInOut' }}
              className={`absolute mx-auto w-[300px] sm:w-[480px] md:w-[600px] h-auto object-contain drop-shadow-xl ${
                current === 1 || current === 2 ? 'transform -translate-y-16' : ''  // Move hero2 and hero3 up 64px
              }`}
            />
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Hero;
