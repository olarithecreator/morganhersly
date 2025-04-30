
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

const TechnologyPartnersSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.animate-on-scroll');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('animate-fade-in');
                el.classList.remove('opacity-0');
              }, index * 200);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);
  
  return (
    <section id="tech-partners" className="py-20 md:py-28 lg:py-32 bg-background">
      <div ref={sectionRef} className="container-wide">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-center text-foreground animate-on-scroll opacity-0">
            Technology Innovation Partners
          </h2>
          <div className="w-20 h-1 bg-primary mb-8 animate-on-scroll opacity-0"></div>
          <p className="text-xl text-muted-foreground max-w-3xl text-center animate-on-scroll opacity-0">
            Leveraging cutting-edge technologies to drive business transformation and operational excellence.
          </p>
        </div>
        
        {/* Technology Image Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16 animate-on-scroll opacity-0">
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-foreground">Advanced Technology Solutions</h3>
            <p className="text-lg text-muted-foreground mb-6">
              We integrate robotics, AI, and digital transformation tools to create seamless business solutions that drive growth and efficiency.
            </p>
            <p className="text-lg text-muted-foreground">
              Our team specializes in implementing custom technology stacks that align with your business objectives and future growth plans.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <img 
              src="/lovable-uploads/ae7a5154-8206-4192-b5c1-740da83e1714.png"
              alt="Advanced Technology Integration" 
              className="rounded-lg shadow-lg w-full max-w-md transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyPartnersSection;
