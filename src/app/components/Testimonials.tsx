const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechCorp",
      image: "/images/testimonials/sarah.jpg",
      quote: "NexusWave transformed our digital presence completely. Their expertise in web development and AI solutions helped us achieve remarkable growth."
    },
    {
      name: "Michael Chen",
      role: "CTO, InnovateLabs",
      image: "/images/testimonials/michael.jpg",
      quote: "The team's technical expertise and professional approach made our cloud migration seamless. They exceeded our expectations in every way."
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director, GlobalBrands",
      image: "/images/testimonials/emily.jpg",
      quote: "Their digital marketing solutions delivered exceptional ROI. The analytics dashboard they built gives us invaluable insights."
    },
    {
      name: "David Smith",
      role: "Founder, SmartRetail",
      image: "/images/testimonials/david.jpg",
      quote: "The e-commerce platform NexusWave built for us has dramatically improved our online sales and customer experience."
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Client Testimonials</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear what our clients have to say about their experience working with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{testimonial.name}</h3>
                  <p className="text-primary">{testimonial.role}</p>
                </div>
              </div>
              <div className="relative">
                <div className="text-5xl text-primary/20 absolute -top-6 left-0">"</div>
                <p className="text-gray-600 italic relative z-10 pl-4">
                  {testimonial.quote}
                </p>
                <div className="text-5xl text-primary/20 absolute -bottom-8 right-0">"</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors"
            suppressHydrationWarning
          >
            View More Testimonials
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 