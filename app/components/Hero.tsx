"use client"; // Add this to make the component a client component

import React from 'react';
import Image from 'next/image'; // Next.js image optimization
import { FaPlay } from 'react-icons/fa'; // Play icon for the circle
import { motion } from "framer-motion"; // Import motion for animations

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

        {/* Right side: Rounded image with animation
        <div className="relative md:w-1/2 mt-10 md:mt-0 flex justify-center">
          {/* Circular play button */}
          {/* <div className="w-40 h-40 bg-blue-600 rounded-full flex items-center justify-center">
            <FaPlay className="text-3xl text-white" />
          </div>

          {/* Circular image */}
          {/* <motion.div
            className="absolute w-72 h-72 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 rounded-full flex items-center justify-center p-10"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white">
              <Image src="/person1.jpg" alt="Person 1" width={128} height={128} />
            </div>
          </motion.div> */}
        {/* </div> */}  
      </div>
    </section>
  );
};

export default HeroSection;
