import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Capabilities from '../components/Platform/Capabilities';
import Tools from '../components/Platform/Tools';
import ChatbotIcon from '../components/Chatbot/ChatbotIcon';


export default function Platform() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black from-50% via-neutral-800 via-75% to-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/assets/platform.mp4" type="video/mp4" />
        </video>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />
        
        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-silver px-4">
          <h1 className="text-6xl font-bold text-center mb-4">
            TechSpire Platform
          </h1>
          <p className="text-2xl text-center max-w-3xl">
Discover a new way to digitize, deploy and automate processes to shape the future of your business.
          </p>
        </div>
      </div>

      {/* Platform Sections */}
      <Capabilities />
      <Tools />
      
      <Footer />
      <ChatbotIcon />
    </div>
  );
} 