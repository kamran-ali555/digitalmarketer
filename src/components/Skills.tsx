import React, { useRef, useEffect } from 'react';

const skillCategories = [
  {
    category: 'Digital Marketing',
    skills: [
      { name: 'SEO & SEM', level: 95 },
      { name: 'Content Marketing', level: 90 },
      { name: 'Social Media Marketing', level: 92 },
      { name: 'Email Marketing', level: 88 },
      { name: 'PPC Advertising', level: 94 }
    ]
  },
  {
    category: 'Analytics & Data',
    skills: [
      { name: 'Google Analytics', level: 96 },
      { name: 'Data Visualization', level: 85 },
      { name: 'A/B Testing', level: 90 },
      { name: 'Marketing Attribution', level: 87 },
      { name: 'Performance Tracking', level: 92 }
    ]
  },
  {
    category: 'Tools & Platforms',
    skills: [
      { name: 'Google Ads', level: 95 },
      { name: 'Facebook Ads Manager', level: 93 },
      { name: 'HubSpot', level: 89 },
      { name: 'Mailchimp', level: 91 },
      { name: 'SEMrush & Ahrefs', level: 94 }
    ]
  }
];

const Skills = () => {
  const skillsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            
            // Animate progress bars
            const progressBars = entry.target.querySelectorAll('.progress-bar');
            progressBars.forEach((bar, index) => {
              setTimeout(() => {
                (bar as HTMLElement).style.width = `${(bar as HTMLElement).dataset.level}%`;
              }, index * 100);
            });
            
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    skillsRef.current.forEach((skill) => {
      if (skill) observer.observe(skill);
    });

    return () => {
      skillsRef.current.forEach((skill) => {
        if (skill) observer.unobserve(skill);
      });
    };
  }, []);

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Skills & Expertise</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Comprehensive skill set covering all aspects of digital marketing, analytics, and strategy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              ref={(el) => (skillsRef.current[categoryIndex] = el)}
              className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl shadow-lg border border-purple-500/20 hover:border-purple-500/50 transition-all duration-500 opacity-0 translate-y-8"
              style={{ transitionDelay: `${categoryIndex * 150}ms` }}
            >
              <h3 className="text-xl font-semibold mb-6 text-center bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                {category.category}
              </h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-white">{skill.name}</span>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                      <div 
                        className="progress-bar h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: '0%' }}
                        data-level={skill.level}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;