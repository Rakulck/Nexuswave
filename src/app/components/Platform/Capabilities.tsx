'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

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

const Capabilities = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-16">
      <style>{style}</style>
      <div className="container mx-auto px-4">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Left Column - Cards */}
          <div className="space-y-8">
            {/* Card 1 */}
            <motion.div 
              className="relative flex bg-white rounded-xl overflow-hidden shadow-lg h-56"
              variants={itemVariants}
            >
              <div className="absolute inset-0">
                <Image
                  src="/assets/data.jpg"
                  alt="Business Innovation"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-white"></div>
              </div>
              <div className="relative ml-auto w-2/3 p-8 flex flex-col justify-center">
                <h3 className="text-3xl font-bold mb-3 text-gray-900 leading-tight">Put Data in Motion</h3>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Nexuswave transforms data into actionable insights with automation. Streamline forms and sources using rules and collaboration tools.
                </p>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              className="relative flex bg-white rounded-xl overflow-hidden shadow-lg h-56"
              variants={itemVariants}
            >
              <div className="absolute inset-0">
                <Image
                  src="/assets/portals.jpg"
                  alt="Digital Transformation"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-white"></div>
              </div>
              <div className="relative ml-auto w-2/3 p-8 flex flex-col justify-center">
                <h3 className="text-3xl font-bold mb-3 text-gray-900 leading-tight">The Power of Portals</h3>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Nexuswave's digital portals boost productivity by integrating systems. Streamline communication and track tasks with a unified platform.
                </p>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              className="relative flex bg-white rounded-xl overflow-hidden shadow-lg h-56"
              variants={itemVariants}
            >
              <div className="absolute inset-0">
                <Image
                  src="/assets/about.jpg"
                  alt="Business Excellence"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-white"></div>
              </div>
              <div className="relative ml-auto w-2/3 p-8 flex flex-col justify-center">
                <h3 className="text-3xl font-bold mb-3 text-gray-900 leading-tight">Empower & Engage</h3>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Nexuswave empowers teams with efficient task management and automation. Approve, track, and automate workflows seamlessly.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Main Content */}
          <motion.div 
            className="flex flex-col justify-center"
            variants={itemVariants}
          >
            <h2 className="text-4xl font-bold mb-8 leading-tight relative inline-block after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-gray-400 after:bottom-0 after:left-0 animate-underline">Business Transformation with Us</h2>
            <p className="text-2xl text-gray-600 leading-relaxed">
              Nexuswave drives your business forward by building innovative processes 
              that align with your vision for exceptional service. We empower you to 
              exceed customer expectations with cutting-edge solutions tailored for 
              operational excellence.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Capabilities; 