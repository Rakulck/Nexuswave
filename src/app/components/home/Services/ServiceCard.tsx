'use client';

import React from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface ServiceCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ imageSrc, imageAlt, title, description, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{
        duration: 0.8,
        delay: index * 0.2,
        ease: [0.21, 0.47, 0.32, 0.98]
      }}
      className="transition-all duration-300 bg-black p-8 rounded-3xl shadow-lg h-[600px] max-w-[400px] mx-auto w-full flex flex-col items-center justify-center text-center relative overflow-hidden"
    >
      <motion.div 
        className="absolute inset-0 h-[300px]"
        initial={{ scale: 1.2 }}
        animate={isInView ? { scale: 1 } : { scale: 1.2 }}
        transition={{
          duration: 1,
          delay: index * 0.2,
          ease: [0.21, 0.47, 0.32, 0.98]
        }}
      >
        <Image 
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          className="object-cover opacity-50"
        />
      </motion.div>
      <motion.div 
        className="relative z-10 flex flex-col justify-center h-[300px]"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{
          duration: 0.8,
          delay: index * 0.2 + 0.3,
          ease: [0.21, 0.47, 0.32, 0.98]
        }}
      >
        <h3 className="text-5xl font-extrabold text-silver mb-8">{title}</h3>
        <p className="text-3xl font-medium text-silver line-clamp-3">{description}</p>
      </motion.div>
    </motion.div>
  );
};

export default ServiceCard; 