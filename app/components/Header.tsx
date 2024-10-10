"use client";

import Link from 'next/link';
import { useState } from 'react';

const Navbar: React.FC = () => {
  const [navOpen, setNavOpen] = useState(false);

  // Toggle function for opening and closing the menu
  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  // Close the menu on link click
  const closeNav = () => {
    setNavOpen(false);
  };

  return (
    <div className='max-w-[1200px] 2xl:max-w-[1440px] md:mx-auto'>

    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center md:h-20 h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold text-gray-800">
              <img
                src="https://drive.google.com/thumbnail?id=1TBRq7DN1B_j73rYX7ep-sBD8bV827Ig7"
                alt="Logo"
                className="md:h-32 h-24 rounded-full"
              />
            </a>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex space-x-4 ">
            <Link href="/" className="text-black hover:text-yellow-500 font-semibold text-lg">
              Home
            </Link>
            <Link href="#sermons" className="text-black hover:text-yellow-500 font-semibold text-lg">
              Sermons
            </Link>
            <Link href="#about" className="text-black hover:text-yellow-500 font-semibold text-lg">
              About
            </Link>
            <Link href="#contact" className="text-black hover:text-yellow-500 font-semibold text-lg">
              Contact
            </Link>
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden">
            <button
              onClick={toggleNav}
              className="text-gray-700 focus:outline-none"
            >
              {navOpen ? (
                // XIcon SVG for close
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // MenuIcon SVG for hamburger
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Links with right-to-left sliding animation */}
      <div
        className={`${
          navOpen ? 'translate-x-0' : 'translate-x-full'
        } fixed inset-y-0 right-0 w-full bg-white transition-transform duration-300 ease-in-out md:hidden z-10`}
      >
        <div className="flex justify-start p-4">
          {/* Close Button inside the mobile menu */}
          <button
            onClick={toggleNav}
            className="text-gray-700 focus:outline-none"
          >
            {/* Close Icon (XIcon) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="px-2 pt-2 pb-3 space-y-1 text-lg font-semibold">
          <Link
            href="/"
            onClick={closeNav} // Close the menu on link click
            className="block text-black hover:text-yellow-500 font-semibold text-lg px-3 py-2   rounded-md"
          >
            Home
          </Link>
          <Link href="#sermons" className="text-black px-3 py-2  block text-start hover:text-yellow-500 font-semibold text-lg">
              Sermons
            </Link>
          <Link
            href="#about"
            onClick={closeNav} // Close the menu on link click
            className="block text-black hover:text-yellow-500 font-semibold text-lg px-3 py-2  rounded-md"
          >
            About
          </Link>
          <Link
            href="#contact"
            onClick={closeNav} // Close the menu on link click
            className="block text-black hover:text-yellow-500 font-semibold text-lg px-3 py-2   rounded-md"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
    </div>

  );
};

export default Navbar;
