'use client';

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MissionTab from '../components/MissionTab';
import CustomersTab from '../components/CustomersTab';

export default function About() {
  const [activeTab, setActiveTab] = useState('mission');

  return (
    <div className="min-h-screen bg-gradient-to-b from-black from-50% via-neutral-800 via-75% to-white">
      <Navbar />
      {/* Hero Section with Video Background */}
      <div className="relative h-[40vh] md:h-[60vh] w-full overflow-hidden">
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
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
            About NexusWave
          </h1>
          <p className="text-lg md:text-2xl text-center max-w-3xl text-gray-300">
            Empowering businesses through innovative solutions and digital transformation.
          </p>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="container mx-auto px-4 py-8 md:py-16 w-full">
        <div className="max-w-7xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 mb-8 md:mb-12">
            <button
              onClick={() => setActiveTab('mission')}
              className={`px-4 md:px-6 py-2 md:py-3 text-lg md:text-xl font-semibold relative transition-all duration-300 ${
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
              className={`px-4 md:px-6 py-2 md:py-3 text-lg md:text-xl font-semibold relative transition-all duration-300 ${
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
          <div className="relative min-h-[600px] md:min-h-[800px] w-full">
            <div className={`absolute w-full transition-all duration-500 ease-in-out ${
              activeTab === 'mission' ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'
            }`}>
              <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                {/* Left Column - Images - Hidden on mobile */}
                <div className="hidden md:block w-full md:w-1/2 space-y-4 md:space-y-6">
                  <img 
                    src="/assets/customers.jpg" 
                    alt="Customer Success" 
                    className="w-full h-[200px] md:h-[250px] object-cover rounded-lg shadow-lg"
                  />
                  <img 
                    src="/assets/simple.jpg" 
                    alt="Keep it Simple" 
                    className="w-full h-[200px] md:h-[250px] object-cover rounded-lg shadow-lg"
                  />
                  <img 
                    src="/assets/trophy.jpg" 
                    alt="Make it Win-Win" 
                    className="w-full h-[200px] md:h-[250px] object-cover rounded-lg shadow-lg"
                  />
                </div>
                {/* Right Column - Content */}
                <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center md:text-left space-y-6 md:space-y-8">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">Our Mission</h2>
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-4 md:mb-6">
                      Nexus Wave founded in 2023 with a vision to streamline the business processes of enterprises. Our mission is to help companies modernize and digitize workflows that empower employees both in the office and at the edge of the enterprise.
                    </p>
                  </div>

                  <div className="space-y-4 md:space-y-6">
                    <div>
                      <h3 className="text-xl md:text-2xl font-semibold text-white mb-2 md:mb-3">Customer Success is our Success</h3>
                      <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                        Effortlessly convert paper forms, compile electronic forms, and consolidate disparate data sources with Nexuswave. Transform information into searchable, actionable data using configurable rules, timers, tasks, and collaborative features.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl md:text-2xl font-semibold text-white mb-2 md:mb-3">Keep it Simple</h3>
                      <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                        Create digital user portals that streamline communications, prioritize tasks, integrate enterprise systems, and track task milestones. Nexuswave consolidates multiple tools into one, breaking down barriers to productivity and enhancing collaboration.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl md:text-2xl font-semibold text-white mb-2 md:mb-3">Make it Win-Win</h3>
                      <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                        Empower your team to easily approve, reject, or assign tasks and quickly access task status, details, and attachments. Leverage the power of automation with Nexuswave to trigger actions based on rules and workflows.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={`absolute w-full transition-all duration-500 ease-in-out ${
              activeTab === 'customers' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
            }`}>
              <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                {/* Left Column - Images - Hidden on mobile */}
                <div className="hidden md:block w-full md:w-1/2 space-y-4 md:space-y-6">
                  <img 
                    src="/assets/insurance.jpg" 
                    alt="Customer Image 1" 
                    className="w-full h-[200px] md:h-[250px] object-fill rounded-lg shadow-lg"
                  />
                  <img 
                    src="/assets/farm.jpg" 
                    alt="Customer Image 2" 
                    className="w-full h-[200px] md:h-[250px] object-cover rounded-lg shadow-lg"
                  />
                  <img 
                    src="/assets/manuf.jpg" 
                    alt="Customer Image 3" 
                    className="w-full h-[200px] md:h-[250px] object-fill rounded-lg shadow-lg"
                  />
                </div>
                {/* Right Column - Content */}
                <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center md:text-left">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">Our Customers</h2>
                  <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-4 md:mb-6">
                    Our customers operate in multiple industries throughout the Americas. We streamline operations for publicly-traded consumer products manufacturers, broadline foodservice distributors, research facilities, government departments, organic farms, as well as insurance, construction, and human resources companies.
                  </p>
                  <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                    We take pride in delivering exceptional service and innovative solutions that help our clients achieve their business objectives and stay ahead of the competition.
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