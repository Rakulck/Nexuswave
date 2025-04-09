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

  .animate-underline {
    display: inline-block;
    position: relative;
  }

  .animate-underline::after {
    content: '';
    position: absolute;
    width: 68%;
    height: 2px;
    bottom: -2px;
    left: 0;
    background-color: rgb(156 163 175);
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
          <div className="space-y-8 order-2 md:order-1">
            {/* Card 1 */}
            <motion.div
              className="relative flex bg-white rounded-xl overflow-hidden shadow-lg h-44"
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
              <div className="relative ml-auto w-2/3 p-4 sm:p-6 md:p-8 flex flex-col justify-center">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold sm:mb-3 text-gray-900 leading-tight pt-4">Data in Motion</h3>
                <p className="text-sm sm:text-base md:text-xl pb-4 text-gray-700 leading-relaxed">
                  TechSpire transforms data into actionable insights with automation. Streamline forms and sources using rules and collaboration tools.
                </p>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              className="relative flex bg-white rounded-xl overflow-hidden shadow-lg h-44"
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
              <div className="relative ml-auto w-2/3 p-4 sm:p-6 md:p-8 flex flex-col justify-center">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold  sm:mb-3 text-gray-900 leading-tight pt-4">The Power of Portals</h3>
                <p className="text-sm sm:text-base md:text-xl text-gray-700 leading-relaxed mb-4">
                 Our digital portals boost productivity by integrating systems. Streamline communication and track tasks with a unified platform.
                </p>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              className="relative flex bg-white rounded-xl overflow-hidden shadow-lg h-44"
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
              <div className="relative ml-auto w-2/3 p-4 sm:p-6 md:p-8 flex flex-col justify-center">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold sm:mb-3 text-gray-900 leading-tight pt-2">Empower & Engage</h3>
                <p className="text-sm sm:text-base md:text-xl text-gray-700 leading-relaxed">
                  TechSpire empowers teams with efficient task management and automation. Approve, track, and automate workflows seamlessly.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Main Content */}
          <motion.div
            className="flex flex-col justify-center order-1 md:order-2"
            variants={itemVariants}
          >
            <h2 className="text-center md:text-left text-2xl sm:text-3xl md:text-4xl font-bold sm:mb-6 md:mb-8 leading-tight relative inline-block animate-underline after:content-[''] after:absolute after:bottom-[-2px] after:bg-gray-400">
              Business Transformation</h2>
            <p className="text-base sm:text-lg md:text-2xl text-gray-600 leading-relaxed">
              TechSpire drives your business forward by building innovative processes
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