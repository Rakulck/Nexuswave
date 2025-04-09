import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">About Techspire</h3>
            <p>
              Leading the digital transformation with innovative solutions and cutting-edge technology.
            </p>
          </div>
          <div className="text-center">
            {/* <h3 className="text-xl font-semibold mb-4">Quick Links</h3> */}
            <ul className="space-y-2">
              <li><a href="#about" className="hover:underline">About</a></li>
              <li><a href="#services" className="hover:underline">Services</a></li>
              <li><a href="#solution" className="hover:underline">Solution</a></li>
              <li><a href="#get-demo" className="hover:underline">Get Demo</a></li>
            </ul>
          </div>
          {/* <div>
            <h3 className="text-xl font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Web Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Mobile Apps</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cloud Solutions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Digital Marketing</a></li>
            </ul>
          </div> */}
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center justify-center">
                <i className="fas fa-map-marker-alt mr-2"></i>
               13800 Coppermine Rd, Herndon, VA 20171
              </li>
              <li className="flex items-center justify-center">
                <i className="fas fa-phone mr-2"></i>
                +1 (555) 123-4567
              </li>
              <li className="flex items-center justify-center">
                <i className="fas fa-envelope mr-2"></i>
                contact@techspire.com
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Techspire. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 