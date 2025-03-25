'use client';

import React, { useRef } from 'react';

const FeaturesCarousel = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollContainer = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const scrollAmount = 400 + 48; // card width + gap
      containerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="w-full">
      <div 
        ref={containerRef}
        className="overflow-x-auto scrollbar-none"
      >
        <div 
          className="flex gap-12 items-center snap-x snap-mandatory" 
          style={{ 
            width: 'max-content',
            paddingLeft: '18vw'
          }}
        >
          {/* Left Side Content */}
          <div className="w-[400px] flex-none text-center snap-center">
            <h2 className="text-4xl font-semibold text-white mb-6">
              Integrated Risk Management Solutions
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed">
              Nexuswave put risk under one roof to help you make better decisions faster.
            </p>
          </div>

          {/* Feature 1 */}
          <div className="flex-none w-[400px] snap-center">
            <div className="relative h-[700px] rounded-3xl overflow-hidden border border-neutral-800">
              <img 
                src="/assets/point-1.jpg" 
                alt="Risk View" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-medium text-white mt-6 mb-2">The thinnest borders on any risk platform</h3>
            <p className="text-gray-400">Seamlessly integrate risk management across your organization</p>
          </div>

          {/* Feature 2 */}
          <div className="flex-none w-[400px] snap-center">
            <div className="relative h-[700px] rounded-3xl overflow-hidden border border-neutral-800">
              <img 
                src="/assets/point-2.jpg" 
                alt="Cloud Platform" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-medium text-white mt-6 mb-2">Cloud-native architecture</h3>
            <p className="text-gray-400">Connect systems and data for smarter decisions</p>
          </div>

          {/* Feature 3 */}
          <div className="flex-none w-[400px] snap-center">
            <div className="relative h-[700px] rounded-3xl overflow-hidden border border-neutral-800">
              <img 
                src="/assets/point-3.jpg" 
                alt="Risk Reduction" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-medium text-white mt-6 mb-2">Premium Grade risk optimization</h3>
            <p className="text-gray-400">Maximize opportunities with actionable insights</p>
          </div>

          {/* Feature 4 */}
          <div className="flex-none w-[400px] snap-center">
            <div className="relative h-[700px] rounded-3xl overflow-hidden border border-neutral-800">
              <img 
                src="/assets/point-4.jpg" 
                alt="Real-Time Visibility" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-medium text-white mt-6 mb-2">Real-time visibility</h3>
            <p className="text-gray-400">Monitor and address risks as they emerge</p>
          </div>

          {/* Feature 5 */}
          <div className="flex-none w-[400px] snap-center">
            <div className="relative h-[700px] rounded-3xl overflow-hidden border border-neutral-800">
              <img 
                src="/assets/point-6.jpg" 
                alt="Strategic Growth" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-medium text-white mt-6 mb-2">Strategic growth tools</h3>
            <p className="text-gray-400">Drive business growth with confidence</p>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center gap-4 mt-8">
        <button
          onClick={() => scrollContainer('left')}
          className="w-12 h-12 rounded-full border border-neutral-800 flex items-center justify-center text-white hover:bg-neutral-800 transition-colors"
          aria-label="Scroll left"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        <button
          onClick={() => scrollContainer('right')}
          className="w-12 h-12 rounded-full border border-neutral-800 flex items-center justify-center text-white hover:bg-neutral-800 transition-colors"
          aria-label="Scroll right"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default FeaturesCarousel; 