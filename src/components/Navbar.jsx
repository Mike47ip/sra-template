import React from 'react';

const Navbar = () => {
  return (
    <header className="bg-black w-full">
      <div className="w-full">
        {/* Top Bar with Logo and Login/Signup */}
        <div className="flex items-center justify-between py-4 px-16">
          <div className="flex items-center space-x-3">
            {/* Logo Image */}
            <img 
              src="/images/logo.jpg" 
              alt="Sustainability News Africa Logo" 
              className=" w-32 h-auto object-contain"
            />
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="text-gray-300 hover:text-white transition-colors font-medium text-sm">
              Login
            </button>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg font-medium transition-colors text-sm">
              Sign Up
            </button>
          </div>
        </div>
        
        {/* Main Navigation */}
        <nav className="border-t border-gray-800 py-4">
          <div className="px-16">
            <div className="flex justify-center items-center space-x-8">
              <a href="#" className="text-white hover:text-orange-500 transition-colors font-medium text-sm">Home</a>
              <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors font-medium text-sm">Top Stories</a>
              <div className="relative group">
                <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors font-medium flex items-center text-sm">
                  African Voices
                  <svg className="w-3 h-3 ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
              <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors font-medium text-sm">Events</a>
              <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors font-medium text-sm">International News</a>
              <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors font-medium text-sm">Service Providers</a>
              <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors font-medium text-sm">Product Market</a>
              <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors font-medium text-sm">SNA Studio</a>
              <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors font-medium text-sm">Africa 2063 Tracker</a>
              <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors font-medium text-sm">Advertise With Us</a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;