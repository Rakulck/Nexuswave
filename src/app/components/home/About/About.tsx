'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { TrophyIcon, UserGroupIcon, PhoneIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';
import FeatureCard from './FeatureCard';

const About = () => {
  return (
      <div id="about" className="bg-gradient-to-b from-black to-neutral-800">
        <div className="container mx-auto flex flex-col md:flex-row items-center max-w-[1600px] px-8 md:px-16 py-12">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="md:w-1/2 pr-8 md:pr-16 py-12"
          >
            <h2 className="text-7xl font-['Inter'] font-bold text-silver mb-8">Who We Are</h2>
            <p className="text-2xl text-silver mt-6 leading-relaxed">
             Nexus Wave streamlines enterprise business processes by modernizing and digitizing workflows, 
             empowering employees in the office and at the edge.
            </p>
            
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
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
            className="md:w-1/2 flex justify-end"
          >
            <img src="/assets/about.jpg" alt="About NexusWave" className="rounded-lg w-full md:w-[700px] h-[400px] md:h-[500px]" />
          </motion.div>
        </div>
      </div>
  );
};

export default About; 