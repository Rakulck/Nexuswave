'use client';

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function About() {
  const [activeTab, setActiveTab] = useState('mission');

  return (
    <div className="min-h-screen bg-gradient-to-b from-black from-50% via-neutral-800 via-75% to-white">
      <Navbar />
      {/* Hero Section with Video Background */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover opacity-80"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src="/assets/about.mp4" type="video/mp4" />
        </video>
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
        
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-silver px-4">
          <h1 className="text-6xl font-bold text-center mb-4">
            About NexusWave
          </h1>
          <p className="text-2xl text-center max-w-3xl text-gray-300">
            Empowering businesses through innovative solutions and digital transformation.
          </p>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="container mx-auto px-4 py-16 w-full">
        <div className="max-w-6xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex justify-center space-x-4 mb-8">
            <button
              onClick={() => setActiveTab('mission')}
              className={`px-6 py-3 text-xl font-semibold relative transition-all duration-300 ${
                activeTab === 'mission'
                  ? 'text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Mission
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-white transform origin-left transition-transform duration-300 ${
                activeTab === 'mission' ? 'scale-x-100' : 'scale-x-0'
              }`} />
            </button>
            <button
              onClick={() => setActiveTab('customers')}
              className={`px-6 py-3 text-xl font-semibold relative transition-all duration-300 ${
                activeTab === 'customers'
                  ? 'text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Our Customers
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-white transform origin-left transition-transform duration-300 ${
                activeTab === 'customers' ? 'scale-x-100' : 'scale-x-0'
              }`} />
            </button>
          </div>

          {/* Tab Content */}
          <div className="relative h-[500px] w-full">
            <div
              className={`absolute w-full transition-all duration-500 ease-in-out ${
                activeTab === 'mission' 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-full'
              }`}
            >
              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="w-full md:w-3/5">
                  <img 
                    src="/assets/mission.jpg" 
                    alt="Our Mission" 
                    className="w-full h-[400px] object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div className="w-full md:w-2/5">
                  <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                    Nexus Wave founded in 2023 with a vision to streamline the business processes of enterprises. Our mission is to help companies modernize and digitize workflows that empower employees both in the office and at the edge of the enterprise.
                  </p>
                </div>
              </div>
            </div>

            <div
              className={`absolute w-full transition-all duration-500 ease-in-out ${
                activeTab === 'customers' 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 translate-x-full'
              }`}
            >
              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="w-full md:w-3/5">
                  <img 
                    src="/assets/customer.jpg" 
                    alt="Our Customers" 
                    className="w-full h-[400px] object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div className="w-full md:w-2/5">
                  <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                    Our customers operate in multiple industries throughout the Americas. We streamline operations for publicly-traded consumer products manufacturers, broadline foodservice distributors, research facilities, government departments, organic farms, as well as insurance, construction, and human resources companies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
} 