'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import NetworkAnimation from '../Animation/NetworkAnimation';  
const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  
  if (!isMounted) {
    return null; // Return null on server-side and first client render
  }

  return (
    <div className="relative h-screen flex items-center bg-black px-2 sm:px-4 md:px-8 lg:px-16 xl:px-20 overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
      >
        <source src="/assets/2.mp4" type="video/mp4" />
      </video>
      
      <NetworkAnimation />
      
      <AnimatePresence>
        <div className="flex flex-col items-center w-full max-w-7xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }} 
            className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl xl:text-[10rem] font-bold tracking-normal bg-clip-text text-transparent bg-gradient-to-r from-[#5A5959] to-[#B9B7B7] text-center leading-tight" 
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            <div>Nexus</div>
            <div>Wave</div>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl mt-2 sm:mt-4 md:mt-6 tracking-normal bg-clip-text text-transparent bg-gradient-to-r from-[#5A5959] via-[#B9B7B7] to-[#5A5959] opacity-85 text-center px-2 sm:px-4 max-w-2xl mx-auto"
            style={{ fontFamily: 'Open Sans, sans-serif' }} 
          >
            Innovating the Future
          </motion.p>
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="mt-4 sm:mt-6 md:mt-8 px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-base sm:text-lg md:text-xl font-bold rounded-full hover:from-blue-600 hover:to-cyan-600 transition-all"
          >
            Get Started
          </motion.button>
        </div>
      </AnimatePresence>
      
    </div>
  );
};

export default Hero;