import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import AfricanFlagsScroll from '../../components/AfricanFlagsScroll';

export default function SustainabilityNewsAfrica() {
  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      <div className="min-h-screen bg-black text-white w-full" style={{ fontFamily: 'Outfit, sans-serif' }}>
        {/* Navigation Header */}
        <Navbar />

        {/* Hero Section */}
        <main className="relative min-h-screen flex items-center justify-center w-full">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/images/home-bg-banner.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center center'
            }}
          />
          
          {/* Red Grid Background Pattern Overlay */}
          <div 
            className="absolute inset-0"
            style={{
              background: `
                linear-gradient(to bottom, 
                  rgba(139, 0, 0, 0.4) 0%, 
                  rgba(69, 0, 0, 0.6) 50%, 
                  rgba(0, 0, 0, 0.9) 100%
                ),
                repeating-linear-gradient(
                  0deg,
                  transparent 0px,
                  transparent 19px,
                  rgba(220, 38, 38, 0.15) 20px,
                  rgba(220, 38, 38, 0.15) 21px
                ),
                repeating-linear-gradient(
                  90deg,
                  transparent 0px,
                  transparent 19px,
                  rgba(220, 38, 38, 0.15) 20px,
                  rgba(220, 38, 38, 0.15) 21px
                )
              `
            }}
          />

          {/* Hero Content */}
          <div className="relative z-10 max-w-5xl mx-auto px-16 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
              Welcome To Sustainability News Africa
            </h1>
            
            <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
              Your go-to source for real-time updates, expert insights, and headline stories that matter — curated to keep you 
              informed, inspired, and ahead of the curve. From breaking news to in-depth features, explore the moments 
              shaping industries, communities, and conversations around the world.
            </p>
          </div>
        </main>


        <AfricanFlagsScroll />

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}