import React, { useRef, useEffect } from 'react';
import { TrendingUp, BarChart, Target, Globe, Users, Megaphone } from 'lucide-react';

const services = [
  {
    icon: <TrendingUp className="h-10 w-10 text-purple-400" />,
    title: 'SEO Optimization',
    description: 'Boost your online visibility with data-driven SEO strategies that drive organic traffic and improve search rankings.'
  },
  {
    icon: <BarChart className="h-10 w-10 text-purple-400" />,
    title: 'Analytics & Reporting',
    description: 'Gain actionable insights with comprehensive analytics and custom reporting tailored to your business goals.'
  },
  {
    icon: <Target className="h-10 w-10 text-purple-400" />,
    title: 'PPC Campaigns',
    description: 'Maximize ROI with targeted pay-per-click campaigns across Google, Facebook, LinkedIn, and other platforms.'
  },
  {
    icon: <Globe className="h-10 w-10 text-purple-400" />,
    title: 'Content Marketing',
    description: 'Engage your audience with compelling content strategies that build authority and drive conversions.'
  },
  {
    icon: <Users className="h-10 w-10 text-purple-400" />,
    title: 'Social Media Management',
    description: 'Build brand presence and community with strategic social media campaigns and engagement tactics.'
  },
  {
    icon: <Megaphone className="h-10 w-10 text-purple-400" />,
    title: 'Email Marketing',
    description: 'Nurture leads and boost customer retention with personalized email marketing campaigns.'
  }
];

const Services = () => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section id="services" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Comprehensive digital marketing solutions tailored to elevate your brand and drive measurable results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl shadow-lg border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 opacity-0 translate-y-8 transform hover:-translate-y-2 hover:shadow-purple-500/10"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-slate-800/50 p-3 rounded-lg inline-block mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;