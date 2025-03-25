import React from 'react';
import Image from 'next/image';

const tools = [
  {
    title: "Process Designer",
    description: "Visually design and customize your business processes with our intuitive drag-and-drop interface",
    features: ["Drag-and-drop interface", "Process templates", "Real-time collaboration"]
  },
  {
    title: "Integration Hub",
    description: "Connect and synchronize your existing systems and applications seamlessly",
    features: ["Pre-built connectors", "Custom API integration", "Data mapping tools"]
  },
  {
    title: "Analytics Dashboard",
    description: "Monitor and analyze your processes with comprehensive analytics and reporting",
    features: ["Real-time monitoring", "Custom reports", "Performance metrics"]
  }
];

const Tools = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Platform Tools</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Powerful tools designed to streamline your business operations and boost productivity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-2xl font-bold mb-4">{tool.title}</h3>
              <p className="text-gray-600 mb-6">{tool.description}</p>
              <ul className="space-y-2">
                {tool.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools; 