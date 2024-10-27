import React from 'react';
import { FaTrophy, FaUsers, FaChartBar } from 'react-icons/fa'; // Example icons from react-icons

const ResultsSection = () => {
  return (
    <section className="bg-blue-900 py-16">
      <div className="container mx-auto text-center text-white">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold mb-6">Our Results</h2>
        <p className="text-lg text-gray-300 mb-12">
          We pride ourselves on delivering impactful results for our clients. Here are some of the key metrics that showcase our success:
        </p>

        {/* Results Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Result 1 */}
          <div className="bg-blue-800 p-8 rounded-lg shadow-lg hover:bg-blue-700 transition">
            <div className="flex justify-center items-center mb-4">
              <FaTrophy className="text-5xl text-yellow-400" />
            </div>
            <h3 className="text-3xl font-semibold mb-3">500+ Awards</h3>
            <p className="text-gray-400">
              Recognized for excellence across a range of industries.
            </p>
          </div>

          {/* Result 2 */}
          <div className="bg-blue-800 p-8 rounded-lg shadow-lg hover:bg-blue-700 transition">
            <div className="flex justify-center items-center mb-4">
              <FaUsers className="text-5xl text-yellow-400" />
            </div>
            <h3 className="text-3xl font-semibold mb-3">10,000+ Clients</h3>
            <p className="text-gray-400">
              Serving thousands of satisfied clients worldwide.
            </p>
          </div>

          {/* Result 3 */}
          <div className="bg-blue-800 p-8 rounded-lg shadow-lg hover:bg-blue-700 transition">
            <div className="flex justify-center items-center mb-4">
              <FaChartBar className="text-5xl text-yellow-400" />
            </div>
            <h3 className="text-3xl font-semibold mb-3">$1 Billion+ Revenue</h3>
            <p className="text-gray-400">
              Helping our clients achieve extraordinary financial growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
