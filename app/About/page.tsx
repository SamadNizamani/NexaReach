"use client";
import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 to-blue-600 py-16 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-2xl p-10 space-y-12">

        {/* Header Section */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-extrabold text-blue-900">About NexaReach</h2>
          <p className="text-gray-600 text-lg">
            Empowering businesses to reach new heights through data-driven marketing solutions.
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          <p className="text-gray-700 leading-relaxed text-center">
            At <span className="font-semibold">NexaReach</span>, we believe in connecting businesses with their ideal clients through strategic, data-driven digital marketing solutions. Our mission is to help companies scale by providing comprehensive lead generation and appointment setting services, ensuring that every potential customer is handled with care and professionalism.
          </p>

          {/* Expertise Section */}
          <div className="bg-gray-100 rounded-md p-6 space-y-4">
            <h3 className="text-2xl font-semibold text-blue-900">Our Expertise</h3>
            <p className="text-gray-700 leading-relaxed">
              With a team of experts specializing in <span className="font-semibold text-blue-700">Facebook advertising</span>, we focus on bringing you high-quality leads tailored to your business needs. We don’t stop there—we also offer appointment setting services to qualify and schedule each lead, making the process seamless from discovery to conversion.
            </p>
          </div>

          {/* Visibility Section */}
          <div className="bg-gray-100 rounded-md p-6 space-y-4">
            <h3 className="text-2xl font-semibold text-blue-900">Building Trust & Visibility</h3>
            <p className="text-gray-700 leading-relaxed">
              In today’s digital world, trust and visibility are key. That’s why we assist in getting your business listed on reputable platforms like <span className="font-semibold text-blue-700">Yelp</span>, <span className="font-semibold text-blue-700">Trustpilot</span>, and other directories to enhance your online credibility. 
            </p>
          </div>

          {/* Growth Partner Section */}
          <div className="text-center bg-blue-100 rounded-md p-8 space-y-2">
            <h3 className="text-2xl font-semibold text-blue-900">Your Growth Partner</h3>
            <p className="text-gray-700 leading-relaxed">
              At <span className="font-semibold">NexaReach</span>, we aim to be your growth partner, helping you expand your reach and build lasting customer relationships.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
