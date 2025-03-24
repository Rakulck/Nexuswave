import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
export default function Platform() {
  return (
    <div className="min-h-screen pt-24">
      <Navbar />
      <h1 className="text-4xl font-bold text-center mb-8">Our Platform</h1>
      <div className="container mx-auto px-4">
        <p className="text-lg text-gray-700">
          Discover our comprehensive platform that helps businesses thrive in the digital age.
        </p>
        </div>
      <Footer />
    </div>
  );
} 