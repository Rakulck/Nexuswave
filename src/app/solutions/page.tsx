import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Solutions() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black from-50% via-neutral-800 via-75% to-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-[120%] object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          // poster="/assets/data.jpg"
        >
          <source src="/assets/solutions.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />
        
        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-silver px-4">
          <h1 className="text-6xl font-bold text-center mb-4">
            Our Solutions
          </h1>
          <p className="text-2xl text-center max-w-3xl">
            Discover comprehensive solutions designed to transform your business operations and drive growth.
          </p>
        </div>
      </div>

      {/* Integrated Risk Management Section */}
      <div className="py-16 bg-neutral-900/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <img
                src="/assets/data.jpg"
                alt="Risk Management Dashboard"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-silver">
                Integrated Risk Management Solutions
              </h2>
              <p className="text-xl text-gray-300">
                Nexuswave put risk under one roof to help you make better decisions faster.
              </p>
              <div className="space-y-4">
                <p className="text-gray-400">
                  Risk is risk – insured, noninsured, strategic, or operational. Anything that could harm your organization, its competitive position, or strategic growth needs to be anticipated, assessed, addressed, and acted upon.
                </p>
                <p className="text-gray-400">
                  Nexuswaves integrated risk management solutions make that possible by bringing all forms of risk together under one roof for an unobstructed view so you can see just how at risk you are.
                </p>
                <p className="text-gray-400">
                  Our software connects people, systems, and data for the clearest view of risk across your extended enterprise. Built on a secure, cloud-based platform, Riskonnect puts everything you need to manage risk right where you need it, when you need it. You can make smart decisions that reduce risk and cost – and maximize opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>   
      <Footer />
    </div>
  );
} 