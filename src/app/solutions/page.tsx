import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FeaturesCarousel from '../components/FeaturesCarousel';

export default function Solutions() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[80vh] w-full overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover opacity-80"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src="/assets/solutions.mp4" type="video/mp4" />
        </video>
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
        
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-7xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Our Solutions
          </h1>
          <p className="text-2xl text-center max-w-3xl text-gray-300 font-light">
            Discover comprehensive solutions designed to transform your business operations and drive growth.
          </p>
        </div>
      </div>

      {/* Solutions Showcase */}
      <div className="py-24 bg-black">
        <div className="px-4">
          <FeaturesCarousel />
        </div>
      </div>
      <Footer />
    </div>
  );
}

// Add this to your global CSS file
const styles = `
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}`; 