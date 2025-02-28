import React, { useRef, useEffect } from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const experiences = [
  {
    title: 'Senior Digital Marketing Strategist',
    company: 'Global Marketing Solutions',
    location: 'New York, NY',
    period: '2021 - Present',
    description: 'Led digital marketing strategies for Fortune 500 clients, resulting in 40% average increase in conversion rates and 65% improvement in ROI across campaigns.',
    achievements: [
      'Developed and executed comprehensive digital marketing strategies for 12+ enterprise clients',
      'Managed a team of 8 specialists across SEO, PPC, and content marketing',
      'Implemented data-driven optimization processes that increased client retention by 35%'
    ]
  },
  {
    title: 'Digital Marketing Manager',
    company: 'Tech Innovations Inc.',
    location: 'San Francisco, CA',
    period: '2018 - 2021',
    description: 'Oversaw all digital marketing initiatives for a fast-growing SaaS company, driving 250% growth in qualified leads and supporting 3x revenue growth over 3 years.',
    achievements: [
      'Redesigned the marketing funnel, increasing conversion rates by 75%',
      'Launched and optimized campaigns across Google, Facebook, LinkedIn and Twitter',
      'Established content marketing strategy that generated 500K+ organic monthly visits'
    ]
  },
  {
    title: 'SEO & Content Specialist',
    company: 'Digital First Agency',
    location: 'Chicago, IL',
    period: '2016 - 2018',
    description: 'Developed and implemented SEO and content strategies for B2B and B2C clients across various industries, achieving first-page rankings for 80% of target keywords.',
    achievements: [
      'Created and executed content calendars for 15+ clients',
      'Increased organic traffic by an average of 120% across client portfolio',
      'Developed link building strategies that improved domain authority by 25+ points'
    ]
  }
];

const Experience = () => {
  const timelineRef = useRef<(HTMLDivElement | null)[]>([]);

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

    timelineRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => {
      timelineRef.current.forEach((item) => {
        if (item) observer.unobserve(item);
      });
    };
  }, []);

  return (
    <section id="experience" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Professional Experience</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            A proven track record of success in digital marketing across various industries and roles.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                ref={(el) => (timelineRef.current[index] = el)}
                className={`relative flex flex-col md:flex-row gap-8 opacity-0 translate-y-8 transition-all duration-700`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:order-2 md:pl-12'}`}>
                  <div className={`bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl shadow-lg border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 h-full`}>
                    <div className="flex items-center gap-2 mb-2 text-purple-400 text-sm font-medium">
                      <Calendar size={16} className={`${index % 2 === 0 ? 'md:order-2 md:ml-2' : 'mr-2'}`} />
                      <span>{exp.period}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-1 text-white">{exp.title}</h3>
                    <div className="flex items-center gap-2 mb-4 text-gray-300">
                      <Briefcase size={16} className={`${index % 2 === 0 ? 'md:order-2 md:ml-2' : 'mr-2'}`} />
                      <span>{exp.company}</span>
                    </div>
                    <div className="flex items-center gap-2 mb-4 text-gray-400 text-sm">
                      <MapPin size={16} className={`${index % 2 === 0 ? 'md:order-2 md:ml-2' : 'mr-2'}`} />
                      <span>{exp.location}</span>
                    </div>
                    <p className="text-gray-300 mb-4">{exp.description}</p>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-gray-400 text-sm flex items-start">
                          <span className="inline-block h-1.5 w-1.5 rounded-full bg-purple-400 mt-1.5 mr-2 flex-shrink-0"></span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg z-10 flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                </div>

                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:order-2 md:pl-12' : 'md:pr-12'}`}>
                  {/* Empty div for layout on alternating sides */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;