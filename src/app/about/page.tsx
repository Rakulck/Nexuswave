import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div className="min-h-screen">
      <Navbar />
      {/* Hero Section with Video Background */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute top-0 left-0 w-full h-full object-cover"
          style={{ zIndex: -1 }}
        >
          <source src="/assets/about.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white text-center">About Us</h1>
        </div>
      </div>

      {/* Mission Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Nexus Wave founded in 2023 with a vision to streamline the business processes of enterprises. Our mission is to help companies modernize and digitize workflows that empower employees both in the office and at the edge of the enterprise.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Customers</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our customers operate in multiple industries throughout the Americas. We streamline operations for publicly-traded consumer products manufacturers, broadline foodservice distributors, research facilities, government departments, organic farms, as well as insurance, construction, and human resources companies.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
} 