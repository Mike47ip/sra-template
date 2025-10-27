import React, { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-black w-full">
      <div className="w-full">
        {/* Top Bar with Logo and Login/Signup */}
        <div className="flex items-center justify-between py-4 px-4 sm:px-8 lg:px-16">
          <div className="flex items-center space-x-3">
            {/* Logo Image */}
            <img 
              src="/images/logo.jpg" 
              alt="Sustainability News Africa Logo" 
              className="w-20 sm:w-24 md:w-32 h-auto object-contain"
            />
          </div>
          
          {/* Desktop Login/Signup Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="text-gray-300 hover:text-white transition-colors font-medium text-sm">
              Login
            </button>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg font-medium transition-colors text-sm">
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMobileMenu}
            className="lg:hidden text-white p-2 focus:outline-none focus:ring-2 focus:ring-orange-500 rounded"
            aria-label="Toggle mobile menu"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:block border-t border-gray-800 py-4">
          <div className="px-4 sm:px-8 lg:px-16">
            <div className="flex justify-center items-center space-x-6 xl:space-x-8">
              <a href="#" className="text-white hover:text-orange-500 transition-colors font-medium text-sm whitespace-nowrap">Home</a>
              <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors font-medium text-sm whitespace-nowrap">Top Stories</a>
              <div className="relative group">
                <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors font-medium flex items-center text-sm whitespace-nowrap">
                  African Voices
                  <svg className="w-3 h-3 ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
              <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors font-medium text-sm whitespace-nowrap">Events</a>
              <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors font-medium text-sm whitespace-nowrap">International News</a>
              <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors font-medium text-sm whitespace-nowrap">Service Providers</a>
              <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors font-medium text-sm whitespace-nowrap">Product Market</a>
              <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors font-medium text-sm whitespace-nowrap">SNA Studio</a>
              <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors font-medium text-sm whitespace-nowrap">Africa 2063 Tracker</a>
              <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors font-medium text-sm whitespace-nowrap">Advertise With Us</a>
            </div>
          </div>
        </nav>

        {/* Mobile Navigation Menu */}
        <div className={`lg:hidden border-t border-gray-800 transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <nav className="px-4 py-4 space-y-4 bg-black">
            {/* Mobile Login/Signup Buttons */}
            <div className="flex flex-col space-y-3 pb-4 border-b border-gray-800">
              <button className="text-gray-300 hover:text-white transition-colors font-medium text-sm text-left py-2">
                Login
              </button>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-3 rounded-lg font-medium transition-colors text-sm w-full">
                Sign Up
              </button>
            </div>

            {/* Mobile Navigation Links */}
            <div className="space-y-2">
              <a href="#" className="block text-white hover:text-orange-500 transition-colors font-medium text-sm py-3 border-b border-gray-800">Home</a>
              <a href="#" className="block text-gray-300 hover:text-orange-500 transition-colors font-medium text-sm py-3 border-b border-gray-800">Top Stories</a>
              <a href="#" className="block text-gray-300 hover:text-orange-500 transition-colors font-medium text-sm py-3 border-b border-gray-800">African Voices</a>
              <a href="#" className="block text-gray-300 hover:text-orange-500 transition-colors font-medium text-sm py-3 border-b border-gray-800">Events</a>
              <a href="#" className="block text-gray-300 hover:text-orange-500 transition-colors font-medium text-sm py-3 border-b border-gray-800">International News</a>
              <a href="#" className="block text-gray-300 hover:text-orange-500 transition-colors font-medium text-sm py-3 border-b border-gray-800">Service Providers</a>
              <a href="#" className="block text-gray-300 hover:text-orange-500 transition-colors font-medium text-sm py-3 border-b border-gray-800">Product Market</a>
              <a href="#" className="block text-gray-300 hover:text-orange-500 transition-colors font-medium text-sm py-3 border-b border-gray-800">SNA Studio</a>
              <a href="#" className="block text-gray-300 hover:text-orange-500 transition-colors font-medium text-sm py-3 border-b border-gray-800">Africa 2063 Tracker</a>
              <a href="#" className="block text-gray-300 hover:text-orange-500 transition-colors font-medium text-sm py-3">Advertise With Us</a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;