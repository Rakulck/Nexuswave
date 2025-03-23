const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      image: "/images/portfolio/ecommerce.jpg",
      description: "A full-featured e-commerce platform with modern UI/UX"
    },
    {
      title: "Mobile Banking App",
      category: "Mobile Development",
      image: "/images/portfolio/banking.jpg",
      description: "Secure and intuitive mobile banking application"
    },
    {
      title: "AI-Powered Analytics",
      category: "Machine Learning",
      image: "/images/portfolio/analytics.jpg",
      description: "Advanced analytics platform using AI algorithms"
    },
    {
      title: "Cloud Migration",
      category: "Cloud Solutions",
      image: "/images/portfolio/cloud.jpg",
      description: "Enterprise-scale cloud migration project"
    },
    {
      title: "IoT Dashboard",
      category: "IoT",
      image: "/images/portfolio/iot.jpg",
      description: "Real-time IoT monitoring dashboard"
    },
    {
      title: "Security Suite",
      category: "Cybersecurity",
      image: "/images/portfolio/security.jpg",
      description: "Comprehensive security management system"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Portfolio</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our latest projects and success stories across various industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg">
              <div className="relative h-64 w-full">
                <div className="absolute inset-0 bg-gray-900 bg-opacity-50 transition-opacity group-hover:opacity-0"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                <span className="text-sm text-primary mb-2 block">{project.category}</span>
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm">{project.description}</p>
              </div>
              <div className="absolute inset-0 bg-blue-600 bg-opacity-90 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                <div className="text-center p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">{project.title}</h3>
                  <p className="text-gray-100 mb-6">{project.description}</p>
                  <button 
                    className="bg-white text-primary px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                    suppressHydrationWarning
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio; 