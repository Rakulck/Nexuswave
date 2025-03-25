import React from 'react';
import Image from 'next/image';

const tools = [
  {
    image: "/assets/initiate.jpg",
    title: "Digital Solutions",
    description: "Transform your business with cutting-edge digital tools and automation. Streamline operations and boost efficiency with our comprehensive digital solutions."
  },
  {
    image: "/assets/data.jpg",
    title: "Customize without code",
    description: "Build and modify your workflows without writing a single line of code. Our intuitive interface makes customization accessible to everyone."
  },
  {
    image: "/assets/portals.jpg",
    title: "White-glove",
    description: "Experience premium support with our dedicated white-glove service. Get personalized assistance and expert guidance every step of the way."
  }
];

const Tools = () => {
  const style = `
    @keyframes underline {
      0% {
        transform: scaleX(0);
        transform-origin: left;
      }
      50% {
        transform: scaleX(1);
        transform-origin: left;
      }
      50.1% {
        transform: scaleX(1);
        transform-origin: right;
      }
      100% {
        transform: scaleX(0);
        transform-origin: right;
      }
    }

    .animate-underline::after {
      animation: underline 3s ease-in-out infinite;
    }
  `;

  return (
    <section className="py-16 pb-20">
      <style>{style}</style>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 relative inline-block after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-gray-600 after:bottom-[-8px] after:left-0 animate-underline">What We Offer</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {tools.map((tool, index) => (
            <div 
              key={index}
              className="flex flex-col items-center"
            >
              <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] rounded-xl overflow-hidden mb-8">
                <Image
                  src={tool.image}
                  alt={`Tool ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-300 tracking-wide hover:text-white transition-colors duration-300 text-center mb-6">{tool.title}</h3>
              <p className="text-xl md:text-2xl text-blue-200 text-center max-w-md leading-relaxed">{tool.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools; 