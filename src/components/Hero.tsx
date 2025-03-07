import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Image1  from '../components/images/imrn11.png';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className={`md:w-1/2 transition-all duration-1000 transform ${isVisible} ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="block leading-[75px]">Digital Marketer</span>
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">Project Manger</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-xl">
            Results-driven project manager with a proven track record of delivering high-profile projects on time, within budget, and to exacting standards
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-semibold py-3 px-8 rounded-full transition-all flex items-center justify-center group"
              >
                Get in Touch
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </a>
              <a 
                href="#services" 
                className="bg-transparent border-2 border-purple-500 text-white hover:bg-purple-500/10 font-semibold py-3 px-8 rounded-full transition-all flex items-center justify-center"
              >
                Explore Services
              </a>
            </div>
          </div>
          <div className={`md:w-1/2 mt-12 md:mt-0 transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur-lg opacity-75 animate-pulse"></div>
              <img 
              src={Image1}
                alt="Digital Marketing Professional" 
                className="rounded-lg object-cover w-full h-auto relative z-10"
              />

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;