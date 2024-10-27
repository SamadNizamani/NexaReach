import React from 'react';
import { FaCloud, FaCogs, FaShieldAlt } from 'react-icons/fa'; // Example icons from react-icons

const TechnologySection = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto text-center">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-blue-900 mb-6">Our Technology</h2>
        <p className="text-lg text-gray-600 mb-12">
          We use cutting-edge technology to streamline processes, provide insights, and enhance marketing efficiency for our clients.
        </p>

        {/* Technology Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="p-6 rounded-lg shadow-lg bg-gray-100 hover:bg-blue-50 transition">
            <div className="flex justify-center items-center mb-4">
              <FaCloud className="text-5xl text-blue-600" />
            </div>
            <h3 className="text-2xl font-semibold text-blue-900 mb-3">Cloud-Based Analytics</h3>
            <p className="text-gray-600">
              Our cloud-based platforms allow real-time data analysis and insights, helping you make data-driven decisions quickly and efficiently.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="p-6 rounded-lg shadow-lg bg-gray-100 hover:bg-blue-50 transition">
            <div className="flex justify-center items-center mb-4">
              <FaCogs className="text-5xl text-blue-600" />
            </div>
            <h3 className="text-2xl font-semibold text-blue-900 mb-3">Automated Systems</h3>
            <p className="text-gray-600">
              Our proprietary automated systems handle routine tasks, allowing your team to focus on higher-level strategy and execution.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="p-6 rounded-lg shadow-lg bg-gray-100 hover:bg-blue-50 transition">
            <div className="flex justify-center items-center mb-4">
              <FaShieldAlt className="text-5xl text-blue-600" />
            </div>
            <h3 className="text-2xl font-semibold text-blue-900 mb-3">Top-Tier Security</h3>
            <p className="text-gray-600">
              With advanced encryption and security protocols, we ensure your data remains safe and secure throughout every process.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
