'use client';

import React, { useState } from 'react';

const Contact = () => {
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

  const style = `
    @keyframes underline {
      0% {
        transform: scaleX(0);
        transform-origin: left;
      }
      50% {
        transform: scaleX(1);
        transform-origin: left;
      }
      50.1% {
        transform: scaleX(1);
        transform-origin: right;
      }
      100% {
        transform: scaleX(0);
        transform-origin: right;
      }
    }

    .animate-underline::after {
      animation: underline 3s ease-in-out infinite;
    }
  `;

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <style>{style}</style>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-4 relative inline-block after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-black after:bottom-[-8px] after:left-0 animate-underline">Get in touch</h2>
          <div className="w-20 sm:w-24 h-1 bg-primary mx-auto mb-6 sm:mb-8"></div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Get in touch with us to discuss your project or learn more about our services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          <form 
            onSubmit={handleSubmit} 
            className="space-y-4 sm:space-y-6 bg-white rounded-xl shadow-xl p-6 sm:p-8 border-2 border-gray-200"
            noValidate
          >
            {submitStatus.type && (
              <div className={`p-4 rounded-lg ${
                submitStatus.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
              }`}>
                {submitStatus.message}
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className="w-full px-3 sm:px-4 py-3 sm:py-4 text-base sm:text-xl border-2 border-gray-300 rounded-lg focus:outline-none focus:border-black focus:ring-2 focus:ring-black/20 transition-all duration-300 text-black placeholder-gray-500 font-semibold bg-white"
                required
                suppressHydrationWarning
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className="w-full px-3 sm:px-4 py-3 sm:py-4 text-base sm:text-xl border-2 border-gray-300 rounded-lg focus:outline-none focus:border-black focus:ring-2 focus:ring-black/20 transition-all duration-300 text-black placeholder-gray-500 font-semibold bg-white"
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
              className="w-full px-3 sm:px-4 py-3 sm:py-4 text-base sm:text-xl border-2 border-gray-300 rounded-lg focus:outline-none focus:border-black focus:ring-2 focus:ring-black/20 transition-all duration-300 text-black placeholder-gray-500 font-semibold bg-white"
              required
              suppressHydrationWarning
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={6}
              className="w-full px-3 sm:px-4 py-3 sm:py-4 text-base sm:text-xl border-2 border-gray-300 rounded-lg focus:outline-none focus:border-black focus:ring-2 focus:ring-black/20 transition-all duration-300 text-black placeholder-gray-500 font-semibold bg-white resize-none"
              required
              suppressHydrationWarning
            ></textarea>
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full bg-black text-white py-3 sm:py-4 rounded-lg font-bold text-lg sm:text-xl transition-all duration-300 transform hover:scale-[1.02] shadow-xl hover:shadow-2xl active:scale-[0.98] border-2 border-black ${
                isLoading ? 'opacity-75 cursor-not-allowed' : ''
              }`}
              suppressHydrationWarning
            >
              {isLoading ? 'Sending...' : 'Send Message'}
            </button>
          </form>

          <div className="space-y-6 sm:space-y-8">
            <div className="bg-white rounded-xl shadow-xl p-6 sm:p-8 border-2 border-gray-200">
              <h3 className="text-2xl sm:text-3xl font-bold text-black mb-6 sm:mb-8">Contact Information</h3>
              <div className="space-y-4 sm:space-y-6">
                <p className="flex items-start">
                  <i className="fas fa-map-marker-alt text-black text-xl sm:text-2xl mt-1 mr-3 sm:mr-4"></i>
                  <span className="text-base sm:text-lg text-gray-800">13800 Coppermine Rd, Herndon, VA 20171</span>
                </p>
                <p className="flex items-start">
                  <i className="fas fa-phone text-black text-xl sm:text-2xl mt-1 mr-3 sm:mr-4"></i>
                  <span className="text-base sm:text-lg text-gray-800">+1 (571) 283-8926</span>
                </p>
                <p className="flex items-start">
                  <i className="fas fa-envelope text-black text-xl sm:text-2xl mt-1 mr-3 sm:mr-4"></i>
                  <span className="text-base sm:text-lg text-gray-800">info@nexuswave.com</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;