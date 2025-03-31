import React from 'react';

interface MissionTabProps {
  isActive: boolean;
}

export default function MissionTab({ isActive }: MissionTabProps) {
  return (
    <div
      className={`absolute w-full transition-all duration-500 ease-in-out ${
        isActive 
          ? 'opacity-100 translate-x-0' 
          : 'opacity-0 -translate-x-full'
      }`}
    >
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-3/5">
          <img 
            src="/assets/mission.jpg" 
            alt="Our Mission" 
            className="w-full h-[400px] object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full md:w-2/5">
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
            Nexus Wave founded in 2023 with a vision to streamline the business processes of enterprises. Our mission is to help companies modernize and digitize workflows that empower employees both in the office and at the edge of the enterprise.
          </p>
        </div>
      </div>
    </div>
  );
} 