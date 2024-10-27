// app/Proposal/page.tsx
import React from 'react';

const ProposalPage: React.FC = () => {
  return (
    <div>
      <header className="bg-black p-4 text-white text-center">
        <h1 className="text-4xl font-bold">Get a Free Proposal</h1>
        <p className="mt-2">Fill out the form below to receive a customized proposal.</p>
      </header>
      <div className="bg-gray-100 py-12 px-4">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">Get a Free Proposal</h2>
        <p className="text-center mb-8">Fill out the form below to get a personalized proposal tailored to your business needs.</p>
        <form className="max-w-xl mx-auto bg-white text-black rounded-lg shadow-md p-6">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 rounded-md transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProposalPage;
