'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { TrophyIcon, UserGroupIcon, PhoneIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';
import FeatureCard from './FeatureCard';

const About = () => {
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
      <div id="about" className="bg-gradient-to-b from-black to-neutral-800">
        <style>{style}</style>
        <div className="container mx-auto flex flex-col md:flex-row items-center max-w-[1600px] px-4 sm:px-6 md:px-8 lg:px-16 py-6 sm:py-8 md:py-12">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="md:w-1/2 md:pr-4 lg:pr-8 xl:pr-16 py-4 sm:py-6 md:py-8 lg:py-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-['Inter'] font-bold text-silver mb-4 sm:mb-6 md:mb-8 relative inline-block after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-gray-400 after:bottom-[-8px] after:left-0 animate-underline">
              Who We Are</h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-silver mt-3 sm:mt-4 md:mt-6 leading-relaxed">
             Nexus Wave streamlines enterprise business processes by modernizing and digitizing workflows, 
             empowering employees in the office and at the edge.
            </p>
            
            <div className="mt-6 sm:mt-8 md:mt-12 lg:mt-16 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-x-12 lg:gap-y-8">
              <FeatureCard icon={TrophyIcon} title="Award Winning" />
              <FeatureCard icon={UserGroupIcon} title="Expert Team" delay={0.2} />
              <FeatureCard icon={PhoneIcon} title="24/7 Support" delay={0.4} />
              <FeatureCard icon={CurrencyDollarIcon} title="Competitive Pricing" delay={0.6} />
              <FeatureCard 
                icon={PhoneIcon} 
                title="Contact Us" 
                delay={0.8} 
                isContact={true} 
                phoneNumber="+1 571-283-8926"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="md:w-1/2 flex justify-end mt-6 sm:mt-8 md:mt-0"
          >
            <img 
              src="/assets/about.jpg" 
              alt="About NexusWave" 
              className="rounded-lg w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[500px] object-cover"
            />
          </motion.div>
        </div>
      </div>
  );
};

export default About; 