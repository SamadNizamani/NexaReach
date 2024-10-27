// components/Navbar.tsx
"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // React Icons for the menu icons

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage mobile menu visibility

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          Divine Fragrance
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Links (Centered for Desktop) */}
        <ul className={`md:flex md:space-x-6 ${isMenuOpen ? 'flex' : 'hidden'} flex-col md:flex-row items-center md:static absolute bg-black w-full top-16 left-0 md:w-auto transition-all duration-300`}>
          <li>
            <Link href="/" className="block px-4 py-2 hover:text-gray-200 text-center">Home</Link>
          </li>
          <li>
            <Link href="/About" className="block px-4 py-2 hover:text-gray-200 text-center">About Us</Link>
          </li>
          <li>
            <Link href="/Services" className="block px-4 py-2 hover:text-gray-200 text-center">Services</Link>
          </li>
          <li>
            <Link href="/Contact" className="block px-4 py-2 hover:text-gray-200 text-center">Contact</Link>
          </li>
          <li>
            <Link href="/Proposal" className="block px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition duration-300">Get a Proposal</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
