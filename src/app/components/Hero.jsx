'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import NetworkAnimation from './NetworkAnimation';
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
    <div className="relative h-screen flex items-center bg-black px-4 sm:px-20 overflow-hidden">
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
        <div className="flex flex-col items-center w-full">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }} 
            className="text-7xl sm:text-[10rem] font-bold tracking-normal bg-clip-text text-transparent bg-gradient-to-r from-[#5A5959] to-[#B9B7B7] text-center" 
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            <div>Nexus</div>
            <div>Wave</div>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-3xl sm:text-4xl mt-6 tracking-normal bg-clip-text text-transparent bg-gradient-to-r from-[#5A5959] via-[#B9B7B7] to-[#5A5959] opacity-85 text-center"
            style={{ fontFamily: 'Open Sans, sans-serif' }} 
          >
            Innovating the Future
          </motion.p>
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="mt-10 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xl font-bold rounded-full hover:from-blue-600 hover:to-cyan-600 transition-all"
          >
            Get Started
          </motion.button>
        </div>
      </AnimatePresence>
      
    </div>
  );
};

export default Hero;