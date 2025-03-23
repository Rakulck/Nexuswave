'use client';
import { motion } from 'framer-motion';
import { TrophyIcon, UserGroupIcon, PhoneIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';

const About = () => {
  return (
      <div id="about" className="py-32 min-h-screen bg-gradient-to-b from-black to-neutral-800">
        <div className="container mx-auto flex flex-col md:flex-row items-center max-w-7xl pl-4 pr-8">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="md:w-3/5 pl-2 pr-12 py-12"
          >
            <h2 className="text-7xl font-bold text-silver mb-8">About Us</h2>
            <p className="text-2xl text-silver mt-6 leading-relaxed">
             Nexus Wave streamlines enterprise business processes by modernizing and digitizing workflows, 
             empowering employees in the office and at the edge.
            </p>
            
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-4 p-6 bg-neutral-900/50 rounded-xl hover:bg-neutral-900/70 transition-all"
              >
                <TrophyIcon className="h-10 w-10 text-silver" />
                <span className="text-2xl font-bold text-silver">Award Winning</span>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center gap-4 p-6 bg-neutral-900/50 rounded-xl hover:bg-neutral-900/70 transition-all"
              >
                <UserGroupIcon className="h-10 w-10 text-silver" />
                <span className="text-2xl font-bold text-silver">Expert Team</span>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-center gap-4 p-6 bg-neutral-900/50 rounded-xl hover:bg-neutral-900/70 transition-all"
              >
                <PhoneIcon className="h-10 w-10 text-silver" />
                <span className="text-2xl font-bold text-silver">24/7 Support</span>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex items-center gap-4 p-6 bg-neutral-900/50 rounded-xl hover:bg-neutral-900/70 transition-all"
              >
                <CurrencyDollarIcon className="h-10 w-10 text-silver" />
                <span className="text-2xl font-bold text-silver">Competitive Pricing</span>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="flex items-center justify-between gap-4 p-6 bg-neutral-900/50 rounded-xl hover:bg-neutral-900/70 transition-all border-2 border-gray-500/50 col-span-1 md:col-span-2 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-400/20 to-transparent animate-shimmer"></div>
                <div className="flex items-center gap-4 z-10">
                  <PhoneIcon className="h-10 w-10 text-silver" />
                  <span className="text-2xl font-bold text-silver">Contact Us</span>
                </div>
                <a href="tel:+15712838926" className="text-3xl font-bold text-silver hover:text-white transition-colors z-10">
                  +1 571-283-8926
                </a>
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="md:w-2/5 p-12"
          >
            <img src="/about-image.jpg" alt="About NexusWave" className="rounded-lg shadow-xl w-full" />
          </motion.div>
        </div>
      </div>
  );
};

export default About; 