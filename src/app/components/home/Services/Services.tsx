import React from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
  const services = [
    {
      imageSrc: "/assets/initiate.jpg",
      imageAlt: "Claim Initiation",
      title: "Claim Initiation",
      description: "Streamlined process for initiating and submitting claims efficiently"
    },
    {
      imageSrc: "/assets/loading.jpg",
      imageAlt: "Claim Processing",
      title: "Claim Processing",
      description: "Advanced processing systems for quick and accurate claim handling"
    },
    {
      imageSrc: "/assets/team.jpg",
      imageAlt: "Claim Review",
      title: "Claim Review",
      description: "Thorough review process ensuring accuracy and compliance"
    },
    {
      imageSrc: "/assets/any.jpg",
      imageAlt: "Claim Authorization",
      title: "Claim Authorization",
      description: "Secure and efficient authorization process"
    },
    {
      imageSrc: "/assets/adminstration.jpg",
      imageAlt: "Administration",
      title: "Administration",
      description: "Comprehensive administrative tools and support"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-neutral-800 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-7xl font-bold text-silver mb-12">Claim Management</h2>
          <p className="text-3xl font-medium text-silver max-w-4xl mx-auto">
            Comprehensive claim management solutions designed to streamline your business processes.
          </p>
        </div>

        <div className="flex flex-col gap-12 max-w-7xl mx-auto">
          {/* First Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {services.slice(0, 3).map((service, index) => (
              <ServiceCard
                key={index}
                imageSrc={service.imageSrc}
                imageAlt={service.imageAlt}
                title={service.title}
                description={service.description}
                index={index}
              />
            ))}
          </div>

          {/* Second Row - Centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-items-center max-w-[850px] mx-auto">
            {services.slice(3).map((service, index) => (
              <ServiceCard
                key={index}
                imageSrc={service.imageSrc}
                imageAlt={service.imageAlt}
                title={service.title}
                description={service.description}
                index={index + 3}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;