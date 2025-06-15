import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-blue-700">
          <Link to="/">Aniket</Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/resume" className="hover:text-blue-600">Resume</Link>
          <Link to="/projects" className="hover:text-blue-600">Projects</Link>
          <Link to="/blogs" className="hover:text-blue-600">Blogs</Link>
          <Link to="/contact" className="hover:text-blue-600">Contact</Link>
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none focus:text-blue-700"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-white shadow">
          <Link to="/" onClick={toggleMenu} className="block text-gray-700 hover:text-blue-600">Home</Link>
          <Link to="/resume" onClick={toggleMenu} className="block text-gray-700 hover:text-blue-600">Resume</Link>
          <Link to="/projects" onClick={toggleMenu} className="block text-gray-700 hover:text-blue-600">Projects</Link>
          <Link to="/blogs" onClick={toggleMenu} className="block text-gray-700 hover:text-blue-600">Blogs</Link>
          <Link to="/contact" onClick={toggleMenu} className="block text-gray-700 hover:text-blue-600">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
