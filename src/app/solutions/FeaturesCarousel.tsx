'use client';

import React, { useRef } from 'react';

interface Feature {
  image: string;
  title: string;
  description: string;
}

interface FeaturesCarouselProps {
  title: string;
  subtitle: string;
  features: Feature[];
}

const FeaturesCarousel: React.FC<FeaturesCarouselProps> = ({ title, subtitle, features }) => {
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
              {title}
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed">
              {subtitle}
            </p>
          </div>

          {/* Features */}
          {features.map((feature, index) => (
            <div key={index} className="flex-none w-[400px] snap-center">
              <div className="relative h-[600px] rounded-3xl overflow-hidden border border-neutral-800">
                <img 
                  src={feature.image} 
                  alt={feature.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-medium text-white mt-6 mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-lg">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center gap-4 mt-8">
        <button
          type="button"
          onClick={() => scrollContainer('left')}
          className="w-12 h-12 rounded-full border border-neutral-800 flex items-center justify-center text-white hover:bg-neutral-800 transition-colors"
          aria-label="Scroll left"
          suppressHydrationWarning
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => scrollContainer('right')}
          className="w-12 h-12 rounded-full border border-neutral-800 flex items-center justify-center text-white hover:bg-neutral-800 transition-colors"
          aria-label="Scroll right"
          suppressHydrationWarning
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