import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'; // Social media icons from react-icons

const Footer = () => {
  return (
    <footer className="bg-black py-10">
      <div className="container mx-auto text-center text-white">
        {/* Footer Logo */}
        <h2 className="text-2xl font-bold mb-4">DIVINE FRAGRANCE</h2>
        <p className="text-gray-300 mb-6">
          Bringing the finest fragrances to your doorstep.
        </p>

        {/* Footer Links */}
        <div className="flex justify-center space-x-6 mb-8">
          <a href="#" className="text-gray-300 hover:text-yellow-400">Home</a>
          <a href="#" className="text-gray-300 hover:text-yellow-400">About</a>
          <a href="#" className="text-gray-300 hover:text-yellow-400">Services</a>
          <a href="#" className="text-gray-300 hover:text-yellow-400">Contact</a>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-6">
          <a href="#" className="text-gray-300 hover:text-yellow-400">
            <FaFacebookF className="text-2xl" />
          </a>
          <a href="#" className="text-gray-300 hover:text-yellow-400">
            <FaTwitter className="text-2xl" />
          </a>
          <a href="#" className="text-gray-300 hover:text-yellow-400">
            <FaLinkedinIn className="text-2xl" />
          </a>
          <a href="#" className="text-gray-300 hover:text-yellow-400">
            <FaInstagram className="text-2xl" />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} DIVINE FRAGRANCE. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
