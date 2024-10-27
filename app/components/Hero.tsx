"use client"; // Add this to make the component a client component

import React from 'react';


const HeroSection = () => {
  return (
    <section className="bg-blue-900 text-white py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Left side: Text content */}
        <div className="md:w-1/2 space-y-6">
          <h3 className="text-teal-300 uppercase text-sm tracking-wider">
            Digital Marketing That Drives Revenue®
          </h3>
          <h1 className="text-5xl font-bold">
            Unlock Revenue Growth through Digital Marketing
          </h1>
          <p className="text-lg">
            Not every digital marketing agency can seamlessly connect marketing activities 
            to your bottom line. Our award-winning expertise, data-backed decision-making, 
            and innovative technology have generated over $10 billion in revenue for clients 
            like you.
          </p>
          <button className="bg-teal-500 text-white px-6 py-3 rounded-full mt-4">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
