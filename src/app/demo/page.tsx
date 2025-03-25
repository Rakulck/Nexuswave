'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Maps from '../components/Maps';

export default function Demo() {
  return (
    <div className="min-h-screen pt-24 bg-white">
      <Navbar />
      <div className="relative">
        <h1 className="text-5xl mt-8 font-bold text-center mb-4 bg-gradient-to-r from-black to-gray-800 bg-clip-text text-transparent">
          Get a Demo
        </h1>
        <div className="relative w-24 h-1 mx-auto mb-8">
          <div className="absolute inset-0 bg-black transform origin-center scale-x-0 animate-underline"></div>
        </div>
        <p className="text-xl text-gray-700 mb-12 text-center max-w-2xl mx-auto leading-relaxed">
          Experience the power of our solutions firsthand. Request a personalized demo to see how we can transform your business operations and drive growth.
        </p>
      </div>
      <div className="container mx-auto px-4">
        <p className="text-lg text-gray-700 mb-12">
          Request a demo to see how our solutions can transform your business.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <form className="space-y-6 bg-white rounded-xl shadow-xl p-8 border-2 border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="First Name"
                className="w-full px-4 py-4 text-xl border-2 border-gray-300 rounded-lg focus:outline-none focus:border-black focus:ring-2 focus:ring-black/20 transition-all duration-300 text-black placeholder-gray-500 font-semibold bg-white"
                required
                suppressHydrationWarning
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full px-4 py-4 text-xl border-2 border-gray-300 rounded-lg focus:outline-none focus:border-black focus:ring-2 focus:ring-black/20 transition-all duration-300 text-black placeholder-gray-500 font-semibold bg-white"
                required
                suppressHydrationWarning
              />
            </div>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-4 text-xl border-2 border-gray-300 rounded-lg focus:outline-none focus:border-black focus:ring-2 focus:ring-black/20 transition-all duration-300 text-black placeholder-gray-500 font-semibold bg-white"
              required
              suppressHydrationWarning
            />
            <textarea
              placeholder="Your Message"
              rows={6}
              className="w-full px-4 py-4 text-xl border-2 border-gray-300 rounded-lg focus:outline-none focus:border-black focus:ring-2 focus:ring-black/20 transition-all duration-300 text-black placeholder-gray-500 font-semibold bg-white resize-none"
              required
              suppressHydrationWarning
            ></textarea>
            <button
              type="submit"
              className="w-full bg-black text-white py-4 rounded-lg font-bold text-xl transition-all duration-300 transform hover:scale-[1.02] shadow-xl hover:shadow-2xl active:scale-[0.98] border-2 border-black"
              suppressHydrationWarning
            >
              Send Message
            </button>
          </form>

          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-xl p-8 border-2 border-gray-200">
              <h3 className="text-3xl font-bold text-black mb-8">Contact Information</h3>
              <div className="space-y-6">
                <p className="flex items-start">
                  <i className="fas fa-map-marker-alt text-black text-2xl mt-1 mr-4"></i>
                  <span className="text-lg text-gray-800">13800 Coppermine Rd, Herndon, VA 20171</span>
                </p>
                <p className="flex items-start">
                  <i className="fas fa-phone text-black text-2xl mt-1 mr-4"></i>
                  <span className="text-lg text-gray-800">+1 (571) 283-8926</span>
                </p>
                <p className="flex items-start">
                  <i className="fas fa-envelope text-black text-2xl mt-1 mr-4"></i>
                  <span className="text-lg text-gray-800">info@nexuswave.com</span>
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-xl p-8 border-2 border-gray-200">
              <h3 className="text-3xl font-bold text-black mb-8">Our Location</h3>
              <Maps />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
} 