"use client";
import React from 'react';
import { FaFacebook, FaCalendarCheck, FaBusinessTime } from 'react-icons/fa';

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-16 px-4">
      <div className="max-w-5xl mx-auto space-y-12">

        <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">Our Services</h2>

        {/* Service 1 - Facebook Ads Lead Generation */}
        <div className="bg-white rounded-lg shadow-lg p-8 transform transition hover:-translate-y-2 hover:shadow-2xl">
          <div className="flex items-center mb-4">
            <FaFacebook size={36} className="text-blue-600" />
            <h3 className="text-2xl font-semibold text-blue-900 ml-4">Facebook Ads Lead Generation</h3>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Our specialized Facebook advertising campaigns are designed to attract high-quality leads for your business.
            We tailor each ad to your target audience, ensuring you get the right prospects who are genuinely interested in your services. Let us drive consistent and scalable growth to your business.
          </p>
        </div>

        {/* Service 2 - Appointment Setting & Lead Qualification */}
        <div className="bg-blue-50 rounded-lg shadow-lg p-8 transform transition hover:-translate-y-2 hover:shadow-2xl">
          <div className="flex items-center mb-4">
            <FaCalendarCheck size={36} className="text-green-600" />
            <h3 className="text-2xl font-semibold text-green-900 ml-4">Appointment Setting & Lead Qualification</h3>
          </div>
          <p className="text-gray-700 leading-relaxed">
            We don’t just generate leads; we help you convert them. Our appointment setting service ensures each lead is pre-qualified before being passed on to your team. We handle the scheduling, so you can focus on closing deals with clients who are ready to take the next step.
          </p>
        </div>

        {/* Service 3 - Business Registration on Yelp, Trustpilot & Online Directories */}
        <div className="bg-yellow-50 rounded-lg shadow-lg p-8 transform transition hover:-translate-y-2 hover:shadow-2xl">
          <div className="flex items-center mb-4">
            <FaBusinessTime size={36} className="text-yellow-600" />
            <h3 className="text-2xl font-semibold text-yellow-900 ml-4">
              Business Registration on Yelp, Trustpilot & Online Directories
            </h3>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Maximize your online presence and credibility by getting your business listed on trusted platforms like Yelp, Trustpilot, and other relevant directories. We assist with the entire process, making sure your business is easily discoverable and builds trust with potential customers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
