'use client';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div id="about" className="py-20 bg-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 p-8"
        >
          <h2 className="text-4xl font-bold text-gray-800">About Us</h2>
          <p className="text-gray-600 mt-4">
            NexusWave is at the forefront of technological innovation, delivering cutting-edge solutions.
            Nexus Wave founded in 2023 with a vision to streamline the business processes of enterprises. 
            Our mission is to help companies modernize and digitize workflows that empower employees both
             in the office and at the edge of the enterprise.
            Coding is optional.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 p-8"
        >
          <img src="/about-image.jpg" alt="About NexusWave" className="rounded-lg shadow-lg" />
        </motion.div>
      </div>
    </div>
  );
};

export default About; 