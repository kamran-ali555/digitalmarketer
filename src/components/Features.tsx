import React, { useRef, useEffect } from 'react';
import { CheckCircle, Zap, Clock, Award } from 'lucide-react';
import Image2  from '../components/images/imran4.jpeg';


const Features = () => {
  const featureRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-x-0');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (featureRef.current) observer.observe(featureRef.current);
    if (imageRef.current) observer.observe(imageRef.current);

    return () => {
      if (featureRef.current) observer.unobserve(featureRef.current);
      if (imageRef.current) observer.unobserve(imageRef.current);
    };
  }, []);

  const features = [
    {
      icon: <Zap className="h-6 w-6 text-purple-400" />,
      title: 'Data-Driven Approach',
      description: 'All strategies are backed by comprehensive data analysis and market research.'
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-purple-400" />,
      title: 'Customized Strategies',
      description: 'Tailored marketing plans designed specifically for your business goals and target audience.'
    },
    {
      icon: <Clock className="h-6 w-6 text-purple-400" />,
      title: 'Timely Delivery',
      description: 'Consistent and punctual execution of campaigns and deliverables.'
    },
    {
      icon: <Award className="h-6 w-6 text-purple-400" />,
      title: 'Proven Results',
      description: 'Track record of successful campaigns with measurable ROI and business growth.'
    }
  ];

  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Why Choose Me</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Delivering exceptional digital marketing services with a focus on results, innovation, and client satisfaction.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div 
            ref={imageRef}
            className="lg:w-1/2 opacity-0 transform -translate-x-12 transition-all duration-1000"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur-lg opacity-75"></div>
              <img 
              src={Image2}
                // src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Digital Marketing Strategy" 
                className="rounded-lg object-cover w-full h-auto relative z-10"
              />
            </div>
          </div>

          <div 
            ref={featureRef}
            className="lg:w-1/2 opacity-0 transform translate-x-12 transition-all duration-1000"
          >
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-start p-4 rounded-lg bg-gradient-to-r from-slate-800/50 to-slate-900/50 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="mr-4 mt-1">{feature.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;