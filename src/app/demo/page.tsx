'use client';

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Maps from '../components/Maps';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import ChatbotIcon from '../components/Chatbot/ChatbotIcon';

export default function Demo() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Message sent successfully! We will get back to you soon.',
        });
        setFormData({ firstName: '', lastName: '', email: '', message: '' });
      } else {
        throw new Error(data.error || 'Failed to send message');
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen pt-24 bg-white">
      <Navbar />
      <div className="relative">
        <div className="flex justify-center items-center w-full py-8 mt-8">
          <h1 className="text-5xl font-bold text-black relative">
            Get a Demo
            <span className="absolute bottom-0 left-0 w-full h-1 bg-black origin-left animate-underline"></span>
          </h1>
        </div>
        <p className="text-xl text-gray-700 mb-12 text-center max-w-2xl mx-auto leading-relaxed">
           Request a personalized demo to see how our solutions can transform your business.
        </p>
      </div>
      
      {/* Contact Info Cards */}
      <div className="container mx-auto px-4 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl text-center transition-all duration-300 hover:shadow-2xl border border-gray-200 hover:-translate-y-1 relative overflow-hidden cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative space-y-4">
              <div className="w-16 h-16 mx-auto bg-black/5 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <FaPhoneAlt className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-medium text-gray-600">Call to ask any question</h3>
              <p className="text-2xl font-bold bg-gradient-to-r from-black to-gray-800 bg-clip-text text-transparent group-hover:scale-105 transition-transform">
                +1 571-283-8926
              </p>
            </div>
          </div>
          
          <div className="group bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl text-center transition-all duration-300 hover:shadow-2xl border border-gray-200 hover:-translate-y-1 relative overflow-hidden cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative space-y-4">
              <div className="w-16 h-16 mx-auto bg-black/5 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <FaEnvelope className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-medium text-gray-600">Email to get free quote</h3>
              <p className="text-2xl font-bold bg-gradient-to-r from-black to-gray-800 bg-clip-text text-transparent group-hover:scale-105 transition-transform">
                admin@nexuswaveus.com
              </p>
            </div>
          </div>
          
          <div className="group bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl text-center transition-all duration-300 hover:shadow-2xl border border-gray-200 hover:-translate-y-1 relative overflow-hidden cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative space-y-4">
              <div className="w-16 h-16 mx-auto bg-black/5 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <FaMapMarkerAlt className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-medium text-gray-600">Visit our office</h3>
              <p className="text-2xl font-bold bg-gradient-to-r from-black to-gray-800 bg-clip-text text-transparent group-hover:scale-105 transition-transform">
                Coppermine Road, Herndon
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-16 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <form onSubmit={handleSubmit} className="space-y-6 bg-white rounded-xl shadow-xl p-8 border-2 border-gray-200">
            {submitStatus.type && (
              <div className={`p-4 rounded-lg ${
                submitStatus.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
              }`}>
                {submitStatus.message}
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className="w-full px-4 py-4 text-xl border-2 border-gray-300 rounded-lg focus:outline-none focus:border-black focus:ring-2 focus:ring-black/20 transition-all duration-300 text-black placeholder-gray-500 font-semibold bg-white"
                required
                suppressHydrationWarning
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className="w-full px-4 py-4 text-xl border-2 border-gray-300 rounded-lg focus:outline-none focus:border-black focus:ring-2 focus:ring-black/20 transition-all duration-300 text-black placeholder-gray-500 font-semibold bg-white"
                required
                suppressHydrationWarning
              />
            </div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full px-4 py-4 text-xl border-2 border-gray-300 rounded-lg focus:outline-none focus:border-black focus:ring-2 focus:ring-black/20 transition-all duration-300 text-black placeholder-gray-500 font-semibold bg-white"
              required
              suppressHydrationWarning
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={6}
              className="w-full px-4 py-4 text-xl border-2 border-gray-300 rounded-lg focus:outline-none focus:border-black focus:ring-2 focus:ring-black/20 transition-all duration-300 text-black placeholder-gray-500 font-semibold bg-white resize-none"
              required
              suppressHydrationWarning
            ></textarea>
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full bg-black text-white py-4 rounded-lg font-bold text-xl transition-all duration-300 transform hover:scale-[1.02] shadow-xl hover:shadow-2xl active:scale-[0.98] border-2 border-black ${
                isLoading ? 'opacity-75 cursor-not-allowed' : ''
              }`}
              suppressHydrationWarning
            >
              {isLoading ? 'Sending...' : 'Send Message'}
            </button>
          </form>

          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-xl p-8 border-2 border-gray-200 h-[600px]">
              <Maps />
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <ChatbotIcon />
    </div>
  );
} 