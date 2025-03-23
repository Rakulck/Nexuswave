import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with us to discuss your project or learn more about our services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <form className="space-y-6 bg-white rounded-xl shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="First Name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20"
                required
                suppressHydrationWarning
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20"
                required
                suppressHydrationWarning
              />
            </div>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20"
              required
              suppressHydrationWarning
            />
            <textarea
              placeholder="Your Message"
              rows={6}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none"
              required
              suppressHydrationWarning
            ></textarea>
            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              suppressHydrationWarning
            >
              Send Message
            </button>
          </form>

          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <p className="flex items-start">
                  <i className="fas fa-map-marker-alt text-primary text-xl mt-1 mr-4"></i>
                  <span>123 Tech Street, Silicon Valley, CA 94025</span>
                </p>
                <p className="flex items-start">
                  <i className="fas fa-phone text-primary text-xl mt-1 mr-4"></i>
                  <span>+1 (555) 123-4567</span>
                </p>
                <p className="flex items-start">
                  <i className="fas fa-envelope text-primary text-xl mt-1 mr-4"></i>
                  <span>contact@nexuswave.com</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;