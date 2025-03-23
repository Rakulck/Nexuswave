import React from 'react';

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive range of digital solutions to help your business thrive in the modern world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service Cards */}
          <div className="group hover:bg-primary transition-all duration-300 bg-gray-50 p-8 rounded-xl">
            <div className="text-primary group-hover:text-white text-4xl mb-4">
              <i className="fas fa-code"></i>
            </div>
            <h3 className="text-xl font-semibold mb-4 group-hover:text-white">Web Development</h3>
            <p className="text-gray-600 group-hover:text-gray-100">
              Custom web applications and responsive websites built with the latest technologies.
            </p>
          </div>

          <div className="group hover:bg-primary transition-all duration-300 bg-gray-50 p-8 rounded-xl">
            <div className="text-primary group-hover:text-white text-4xl mb-4">
              <i className="fas fa-mobile-alt"></i>
            </div>
            <h3 className="text-xl font-semibold mb-4 group-hover:text-white">Mobile Development</h3>
            <p className="text-gray-600 group-hover:text-gray-100">
              Native and cross-platform mobile applications for iOS and Android.
            </p>
          </div>

          <div className="group hover:bg-primary transition-all duration-300 bg-gray-50 p-8 rounded-xl">
            <div className="text-primary group-hover:text-white text-4xl mb-4">
              <i className="fas fa-cloud"></i>
            </div>
            <h3 className="text-xl font-semibold mb-4 group-hover:text-white">Cloud Solutions</h3>
            <p className="text-gray-600 group-hover:text-gray-100">
              Scalable cloud infrastructure and deployment solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services; 