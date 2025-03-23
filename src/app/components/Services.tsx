import React from 'react';
import Image from 'next/image';

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-neutral-800 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-silver to-[#C0C0C0] mb-8">Claim Management</h2>
          <div className="w-40 h-2 bg-silver mx-auto mb-12"></div>
          <p className="text-3xl font-medium text-silver max-w-4xl mx-auto">
            Comprehensive claim management solutions designed to streamline your business processes.
          </p>
        </div>

        <div className="flex flex-col gap-12 max-w-7xl mx-auto">
          {/* First Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
             <div className="transition-all duration-300 bg-black p-8 rounded-3xl shadow-lg min-h-[600px] max-w-[400px] mx-auto w-full flex flex-col items-center justify-center text-center relative overflow-hidden">
              <div className="absolute inset-0">
                <Image 
                  src="/assets/team.jpg"
                  alt="Claim Initiation"
                  fill
                  priority
                  className="object-cover opacity-50"
                />
              </div>
              <div className="relative z-10">
                <h3 className="text-3xl font-extrabold text-white mb-6">Claim Initiation</h3>
                <p className="text-xl font-medium text-gray-200">Streamlined process for initiating and submitting claims efficiently</p>
              </div>
            </div>

             <div className="transition-all duration-300 bg-black p-8 rounded-3xl shadow-lg min-h-[600px] max-w-[400px] mx-auto w-full flex flex-col items-center justify-center text-center relative overflow-hidden">
              <div className="absolute inset-0">
                <Image 
                  src="/assets/team.jpg"
                  alt="Claim Processing"
                  fill
                  priority
                  className="object-cover opacity-50"
                />
              </div>
              <div className="relative z-10">
                <h3 className="text-4xl font-extrabold text-silver mb-8">Claim Processing</h3>
                <p className="text-2xl font-medium text-silver">Advanced processing systems for quick and accurate claim handling</p>
              </div>
            </div>

            <div className="transition-all duration-300 bg-black p-8 rounded-3xl shadow-lg min-h-[600px] max-w-[400px] mx-auto w-full flex flex-col items-center justify-center text-center relative overflow-hidden">
              <div className="absolute inset-0">
                <Image 
                  src="/assets/team.jpg"
                  alt="Claim Review"
                  fill
                  priority
                  className="object-cover opacity-50"
                />
              </div>
              <div className="relative z-10">
                <h3 className="text-4xl font-extrabold text-silver mb-8">Claim Review</h3>
                <p className="text-2xl font-medium text-silver">Thorough review process ensuring accuracy and compliance</p>
              </div>
            </div>
          </div>

          {/* Second Row - Centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-items-center max-w-[850px] mx-auto">
            <div className="transition-all duration-300 bg-black p-8 rounded-3xl shadow-lg min-h-[600px] max-w-[400px] w-full flex flex-col items-center justify-center text-center relative overflow-hidden">
              <div className="absolute inset-0">
                <Image 
                  src="/assets/team.jpg"
                  alt="Claim Authorization"
                  fill
                  priority
                  className="object-cover opacity-50"
                />
              </div>
              <div className="relative z-10">
                <h3 className="text-4xl font-extrabold text-silver mb-8">Claim Authorization</h3>
                <p className="text-2xl font-medium text-silver">Secure and efficient authorization process</p>
              </div>
            </div>

            <div className="transition-all duration-300 bg-black p-8 rounded-3xl shadow-lg min-h-[600px] max-w-[400px] w-full flex flex-col items-center justify-center text-center relative overflow-hidden">
              <div className="absolute inset-0">
                <Image 
                  src="/assets/adminstration.jpg"
                  alt="Administration"
                  fill
                  priority
                  className="object-cover opacity-50"
                />
              </div>
              <div className="relative z-10">
                <h3 className="text-4xl font-extrabold text-silver mb-8">Administration</h3>
                <p className="text-2xl font-medium text-silver">Comprehensive administrative tools and support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;