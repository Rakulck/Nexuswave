import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">About NexusWave</h3>
            <p className="text-gray-400">
              Leading the digital transformation with innovative solutions and cutting-edge technology.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#portfolio" className="text-gray-400 hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Web Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Mobile Apps</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cloud Solutions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Digital Marketing</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <i className="fas fa-map-marker-alt mr-2"></i>
                123 Tech Street, CA 94025
              </li>
              <li className="flex items-center text-gray-400">
                <i className="fas fa-phone mr-2"></i>
                +1 (555) 123-4567
              </li>
              <li className="flex items-center text-gray-400">
                <i className="fas fa-envelope mr-2"></i>
                contact@nexuswave.com
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} NexusWave. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 