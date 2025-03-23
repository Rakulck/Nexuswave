const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-red p-6 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-5xl font-medium text-silver hover:text-primary transition-all duration-300 transform hover:scale-105 tracking-wider font-poppins">
          <i className="fas fa-wave-square mr-3 text-6xl"></i>
          NexusWave
        </a>
        <ul className="hidden md:flex space-x-10 mx-auto">
          <li className="text-center relative group">
            <a href="#about" className="text-silver text-2xl font-normal hover:text-primary transition-colors tracking-wide font-poppins relative after:content-[''] after:absolute after:w-full after:h-[3px] after:bg-[#C0C0C0] after:left-0 after:-bottom-1 after:scale-x-0 after:origin-right after:transition-transform after:duration-300 group-hover:after:scale-x-100 group-hover:after:origin-left">About</a>
          </li>
          <li className="text-center relative group">
            <a href="#services" className="text-silver text-2xl font-normal hover:text-primary transition-colors tracking-wide font-poppins relative after:content-[''] after:absolute after:w-full after:h-[3px] after:bg-[#C0C0C0] after:left-0 after:-bottom-1 after:scale-x-0 after:origin-right after:transition-transform after:duration-300 group-hover:after:scale-x-100 group-hover:after:origin-left">Services</a>
          </li>
          <li className="text-center relative group">
            <a href="#portfolio" className="text-silver text-2xl font-normal hover:text-primary transition-colors tracking-wide font-poppins relative after:content-[''] after:absolute after:w-full after:h-[3px] after:bg-[#C0C0C0] after:left-0 after:-bottom-1 after:scale-x-0 after:origin-right after:transition-transform after:duration-300 group-hover:after:scale-x-100 group-hover:after:origin-left">Portfolio</a>
          </li>
          <li className="text-center relative group">
            <a href="#testimonials" className="text-silver text-2xl font-normal hover:text-primary transition-colors tracking-wide font-poppins relative after:content-[''] after:absolute after:w-full after:h-[3px] after:bg-[#C0C0C0] after:left-0 after:-bottom-1 after:scale-x-0 after:origin-right after:transition-transform after:duration-300 group-hover:after:scale-x-100 group-hover:after:origin-left">Testimonials</a>
          </li>
          <li className="text-center relative group">
            <a href="#contact" className="text-silver text-2xl font-normal hover:text-primary transition-colors tracking-wide font-poppins relative after:content-[''] after:absolute after:w-full after:h-[3px] after:bg-[#C0C0C0] after:left-0 after:-bottom-1 after:scale-x-0 after:origin-right after:transition-transform after:duration-300 group-hover:after:scale-x-100 group-hover:after:origin-left">Contact</a>
          </li>
        </ul>
        <button className="md:hidden text-silver hover:text-primary transition-all duration-300 transform hover:scale-110 text-center">
          <i className="fas fa-bars text-4xl"></i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar; 