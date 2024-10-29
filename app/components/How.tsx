import React from 'react';

const RevenueSection = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-blue-900 mb-6">How We Drive Revenue</h2>
        <p className="text-lg text-gray-600 mb-12">
  Our data-driven strategies and expert marketing services help businesses achieve new levels of success. Here&apos;s how we can help drive revenue for you:
</p>


        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-16 h-16 bg-blue-600 text-white flex items-center justify-center rounded-full mb-4">
              {/* Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v5h6v-5m1-6V4a1 1 0 00-1-1H9a1 1 0 00-1 1v7m10-2V5H6v6m13 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-blue-900 mb-3">Expert Marketing Services</h3>
            <p className="text-gray-600">
              We offer top-notch marketing services that help increase your sales, revenue, and overall success.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-16 h-16 bg-teal-500 text-white flex items-center justify-center rounded-full mb-4">
              {/* Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-3.86 0-7 2.239-7 5v3c0 .552.448 1 1 1h12a1 1 0 001-1v-3c0-2.761-3.14-5-7-5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-3.86 0-7 2.239-7 5v3c0 .552.448 1 1 1h12a1 1 0 001-1v-3c0-2.761-3.14-5-7-5z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-blue-900 mb-3">Data-Driven Decisions</h3>
            <p className="text-gray-600">
              Using cutting-edge analytics, we help businesses make smart, data-backed decisions that boost their bottom line.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-16 h-16 bg-purple-500 text-white flex items-center justify-center rounded-full mb-4">
              {/* Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7H8V3a1 1 0 00-1-1H5a1 1 0 00-1 1v18a1 1 0 001 1h14a1 1 0 001-1V3a1 1 0 00-1-1h-2a1 1 0 00-1 1v4z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-blue-900 mb-3">Innovative Technology</h3>
            <p className="text-gray-600">
              Our proprietary technology helps you streamline your marketing efforts and achieve greater efficiency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevenueSection;
