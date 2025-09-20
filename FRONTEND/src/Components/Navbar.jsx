import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import React from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  // Hide the navbar on admin pages
  if (location.pathname === '/admin') {
    return null;
  }

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50 sm:px-4 md:px-6 lg:px-8 ">
      <div className="container mx-auto px-2">
        <div className="flex items-center justify-between py-4">
          {/* Left side - Logo and Brand */}
          <div className="flex items-center">
            <Link to="/#hero">
              <img
                src="/Logo.png"
                alt="Salt n Pepper Logo"
                className="h-12 w-12 mr-3 cursor-pointer"
              />
            </Link>
            <div className="brand-section">
              <Link to="/#hero">
                <h1 className="brand-name text-2xl font-bold text-gray-800 cursor-pointer">
                  Salt n Pepper
                </h1>
              </Link>
              <p className="text-sm text-gray-600">
                Restaurant & Hospitality Consultancy
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="nav-links hidden md:block">
            <ul className="flex items-center space-x-6 ">
              <li>
                <Link
                  to="/OurStory"
                  className="text-gray-700 hover:shadow-xl hover:border hover:border-gray-200 transition-colors cursor-pointer px-3 py-2 rounded-md hover:bg-gray-100"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  to="/WhatWeDo"
                  className="text-gray-700 hover:shadow-xl hover:border hover:border-gray-200 transition-colors cursor-pointer px-3 py-2 rounded-md hover:bg-gray-100"
                >
                  What We Do
                </Link>
              </li>
              <li>
                <Link
                  to="/SuccessStories"
                  className="text-gray-700 hover:shadow-xl hover:border hover:border-gray-200 transition-colors cursor-pointer px-3 py-2 rounded-md hover:bg-gray-100"
                >
                  Success Stories
                </Link>
              </li>
              <li>
                <Link
                  to="/MeetTheTeam"
                  className="text-gray-700 hover:shadow-xl hover:border hover:border-gray-200 transition-colors cursor-pointer px-3 py-2 rounded-md hover:bg-gray-100"
                >
                  Meet the Team
                </Link>
              </li>
              <li>
                <Link
                  to="/ContactUs"
                  className="text-gray-700 hover:shadow-xl hover:border hover:border-gray-200 transition-colors cursor-pointer px-3 py-2 rounded-md hover:bg-gray-100"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none focus:text-gray-900 cursor-pointer"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/OurStory"
                className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors cursor-pointer"
              >
                Our Story
              </Link>
              <Link
                to="/WhatWeDo"
                className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors cursor-pointer"
              >
                What We Do
              </Link>
              <Link
                to="/SuccessStories"
                className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors cursor-pointer"
              >
                Success Stories
              </Link>
              <Link
                to="/MeetTheTeam"
                className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors cursor-pointer"
              >
                Meet the Team
              </Link>
              <Link
                to="/ContactUs"
                className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors cursor-pointer"
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
