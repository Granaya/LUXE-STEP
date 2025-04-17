import React from "react";

const AboutUs = () => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat h-screen flex items-center justify-center text-white px-6"
      style={{ backgroundImage: "url('/assets/background.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60 z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">ABOUT LUXE STEP</h1>
        <p className="text-lg sm:text-xl leading-relaxed">
          At Luxe Step, we’re passionate about sneakers and committed to
          providing top-quality, stylish, and comfortable footwear for every
          step of your journey. Explore our curated collection and experience
          luxury with every stride.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
