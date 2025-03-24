import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-7xl font-bold text-gray-800 mb-4">Get in touch</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with us to discuss your project or learn more about our services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <form className="space-y-6 bg-white rounded-xl shadow-xl p-8 border-2 border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="First Name"
                className="w-full px-4 py-4 text-xl border-2 border-gray-300 rounded-lg focus:outline-none focus:border-black focus:ring-2 focus:ring-black/20 transition-all duration-300 text-black placeholder-gray-500 font-semibold bg-white"
                required
                suppressHydrationWarning
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full px-4 py-4 text-xl border-2 border-gray-300 rounded-lg focus:outline-none focus:border-black focus:ring-2 focus:ring-black/20 transition-all duration-300 text-black placeholder-gray-500 font-semibold bg-white"
                required
                suppressHydrationWarning
              />
            </div>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-4 text-xl border-2 border-gray-300 rounded-lg focus:outline-none focus:border-black focus:ring-2 focus:ring-black/20 transition-all duration-300 text-black placeholder-gray-500 font-semibold bg-white"
              required
              suppressHydrationWarning
            />
            <textarea
              placeholder="Your Message"
              rows={6}
              className="w-full px-4 py-4 text-xl border-2 border-gray-300 rounded-lg focus:outline-none focus:border-black focus:ring-2 focus:ring-black/20 transition-all duration-300 text-black placeholder-gray-500 font-semibold bg-white resize-none"
              required
              suppressHydrationWarning
            ></textarea>
            <button
              type="submit"
              className="w-full bg-black text-white py-4 rounded-lg font-bold text-xl transition-all duration-300 transform hover:scale-[1.02] shadow-xl hover:shadow-2xl active:scale-[0.98] border-2 border-black"
              suppressHydrationWarning
            >
              Send Message
            </button>
          </form>

          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-xl p-8 border-2 border-gray-200">
              <h3 className="text-3xl font-bold text-black mb-8">Contact Information</h3>
              <div className="space-y-6">
                <p className="flex items-start">
                  <i className="fas fa-map-marker-alt text-black text-2xl mt-1 mr-4"></i>
                  <span className="text-lg text-gray-800">13800 Coppermine Rd, Herndon, VA 20171</span>
                </p>
                <p className="flex items-start">
                  <i className="fas fa-phone text-black text-2xl mt-1 mr-4"></i>
                    <span className="text-lg text-gray-800">+1 (571) 283-8926</span>
                </p>
                <p className="flex items-start">
                  <i className="fas fa-envelope text-black text-2xl mt-1 mr-4"></i>
                  <span className="text-lg text-gray-800">info@nexuswave.com</span>
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