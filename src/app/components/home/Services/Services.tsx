'use client';

import React from 'react';
import FeaturesCarousel from '@/app/solutions/FeaturesCarousel';

const Services = () => {
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

    .features-container {
      padding-left: 0 !important;
      width: 100%;
      margin: 0;
      overflow-x: hidden;
    }
  `;

  const services = [
    {
      image: "/assets/initiate.jpg",
      title: "Claim Initiation",
      description: "Streamlined process for initiating and submitting claims efficiently"
    },
    {
      image: "/assets/loading.jpg",
      title: "Claim Processing",
      description: "Advanced processing systems for quick and accurate claim handling"
    },
    {
      image: "/assets/team.jpg",
      title: "Claim Review",
      description: "Thorough review process ensuring accuracy and compliance"
    },
    {
      image: "/assets/any.jpg",
      title: "Claim Authorization",
      description: "Secure and efficient authorization process"
    },
    {
      image: "/assets/adminstration.jpg",
      title: "Administration",
      description: "Comprehensive administrative tools and support"
    }
  ];

  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-neutral-800 to-black w-full">
      <style>{style}</style>
      <div className="w-full max-w-none">
        <div className="text-center mb-8 sm:mb-12 px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-7xl font-bold text-silver mb-4 sm:mb-6 md:mb-8 relative inline-block after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-gray-400 after:bottom-[-8px] after:left-0 animate-underline">
            Claim Management</h2>
          <p className="text-lg sm:text-xl md:text-2xl font-medium text-silver max-w-4xl mx-auto">
            Comprehensive claim management solutions designed to streamline your business processes.
          </p>
        </div>

        <div className="features-container flex justify-center">
          <FeaturesCarousel
            title="Our Services"
            subtitle="Discover our comprehensive suite of claim management services designed to optimize your business operations."
            features={services}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;