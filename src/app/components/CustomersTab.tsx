import React from 'react';

interface CustomersTabProps {
  isActive: boolean;
}

export default function CustomersTab({ isActive }: CustomersTabProps) {
  return (
    <div
      className={`absolute w-full transition-all duration-500 ease-in-out ${
        isActive 
          ? 'opacity-100 translate-x-0' 
          : 'opacity-0 translate-x-full'
      }`}
    >
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-3/5">
          <img 
            src="/assets/customer.jpg" 
            alt="Our Customers" 
            loading="lazy"
            className="w-full h-[400px] object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full md:w-2/5">
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
            Our customers operate in multiple industries throughout the Americas. We streamline operations for publicly-traded consumer products manufacturers, broadline foodservice distributors, research facilities, government departments, organic farms, as well as insurance, construction, and human resources companies.
          </p>
        </div>
      </div>
    </div>
  );
} 