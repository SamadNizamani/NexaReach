import React from 'react';
import { FaChartLine, FaLaptopCode, FaBullhorn } from 'react-icons/fa'; // Example icons from react-icons

const ExpertiseSection = () => {
  return (
    <section className="bg-blue-50 py-16">
      <div className="container mx-auto text-center">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-blue-900 mb-6">Our Expertise</h2>
        <p className="text-lg text-gray-700 mb-12">
          We bring together a diverse set of skills and experience to help you reach your business goals. Here are some of the areas where we excel:
        </p>

        {/* Expertise Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Expertise 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-blue-100 transition">
            <div className="flex justify-center items-center mb-4">
              <FaChartLine className="text-5xl text-blue-600" />
            </div>
            <h3 className="text-2xl font-semibold text-blue-900 mb-3">Data-Driven Marketing</h3>
            <p className="text-gray-600">
              Our strategies are backed by data and analytics, ensuring every campaign maximizes return on investment.
            </p>
          </div>

          {/* Expertise 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-blue-100 transition">
            <div className="flex justify-center items-center mb-4">
              <FaLaptopCode className="text-5xl text-blue-600" />
            </div>
            <h3 className="text-2xl font-semibold text-blue-900 mb-3">Custom Web Development</h3>
            <p className="text-gray-600">
              We create fast, responsive websites tailored to your business needs, ensuring a seamless user experience.
            </p>
          </div>

          {/* Expertise 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-blue-100 transition">
            <div className="flex justify-center items-center mb-4">
              <FaBullhorn className="text-5xl text-blue-600" />
            </div>
            <h3 className="text-2xl font-semibold text-blue-900 mb-3">Digital Advertising</h3>
            <p className="text-gray-600">
              We leverage the latest digital advertising techniques to grow your online presence and reach the right audience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
