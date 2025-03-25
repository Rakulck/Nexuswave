"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => {
    if (path === '/demo') {
      return pathname === path ? 'text-primary after:scale-x-100 bg-black px-4 py-2 rounded-md' : '';
    }
    return pathname === path ? 'text-primary after:scale-x-100' : '';
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black p-6 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-5xl md:text-5xl font-medium text-silver hover:text-primary transition-all duration-300 transform hover:scale-105 tracking-wider font-poppins">
          <i className="fas fa-wave-square mr-3 text-4xl md:text-6xl"></i>
          <span className="text-3xl md:text-5xl">NexusWave</span>
        </Link>
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 mx-auto">
          <li className="text-center relative group">
            <Link href="/platform" className={`text-silver text-2xl font-normal hover:text-primary transition-colors tracking-wide font-poppins relative after:content-[''] after:absolute after:w-full after:h-[3px] after:bg-[#C0C0C0] after:left-0 after:-bottom-1 after:scale-x-0 after:origin-right after:transition-transform after:duration-300 group-hover:after:scale-x-100 group-hover:after:origin-left ${isActive('/platform')}`}>
              Platform</Link>
          </li>   
          <li className="text-center relative group">
            <Link href="/solutions" className={`text-silver text-2xl font-normal hover:text-primary transition-colors tracking-wide font-poppins relative after:content-[''] after:absolute after:w-full after:h-[3px] after:bg-[#C0C0C0] after:left-0 after:-bottom-1 after:scale-x-0 after:origin-right after:transition-transform after:duration-300 group-hover:after:scale-x-100 group-hover:after:origin-left ${isActive('/solutions')}`}>
              Solutions</Link>
          </li>
          <li className="text-center relative group">
            <Link href="/about" className={`text-silver text-2xl font-normal hover:text-primary transition-colors tracking-wide font-poppins relative after:content-[''] after:absolute after:w-full after:h-[3px] after:bg-[#C0C0C0] after:left-0 after:-bottom-1 after:scale-x-0 after:origin-right after:transition-transform after:duration-300 group-hover:after:scale-x-100 group-hover:after:origin-left ${isActive('/about')}`}>
              About</Link>
          </li>
          <li className="text-center relative group">
            <Link href="/demo" className={`text-silver text-2xl font-normal hover:text-primary transition-colors tracking-wide font-poppins relative after:content-[''] after:absolute after:w-full after:h-[3px] after:bg-[#C0C0C0] after:left-0 after:-bottom-1 after:scale-x-0 after:origin-right after:transition-transform after:duration-300 group-hover:after:scale-x-100 group-hover:after:origin-left ${isActive('/demo')}`}>
              Get a Demo</Link>
          </li>
        </ul>
        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden text-silver hover:text-primary transition-all duration-300 transform hover:scale-110 text-center"
          aria-label="Toggle Menu"
        >
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-4xl`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed top-[88px] left-0 w-full h-screen bg-red transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`}>
        <ul className="flex flex-col space-y-6 p-6">
          <li>
            <Link href="/platform" className={`text-silver text-2xl font-normal hover:text-primary transition-colors tracking-wide font-poppins block py-2 ${isActive('/platform')}`} onClick={toggleMenu}>Platform</Link>
          </li>
          <li>
            <Link href="/solutions" className={`text-silver text-2xl font-normal hover:text-primary transition-colors tracking-wide font-poppins block py-2 ${isActive('/solutions')}`} onClick={toggleMenu}>Solutions</Link>
          </li>
          <li>
            <Link href="/about" className={`text-silver text-2xl font-normal hover:text-primary transition-colors tracking-wide font-poppins block py-2 ${isActive('/about')}`} onClick={toggleMenu}>About Us</Link>
          </li>
          <li>
            <Link href="/demo" className={`text-silver text-2xl font-normal hover:text-primary transition-colors tracking-wide font-poppins block py-2 ${isActive('/demo')}`} onClick={toggleMenu}>Get a Demo</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 