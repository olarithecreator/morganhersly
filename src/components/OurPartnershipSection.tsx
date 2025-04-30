
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

const OurPartnershipSection: React.FC = () => {
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
              }, index * 150);
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
    <section id="partnership" className="py-20 md:py-28 lg:py-32 bg-background relative">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-[#1EAEDB]/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-[#8B5CF6]/10 to-transparent rounded-full blur-3xl"></div>
      
      <div ref={sectionRef} className="container-wide relative">
        <div className="max-w-2xl mb-16 animate-on-scroll opacity-0">
          <h2 className="text-sm md:text-base uppercase tracking-wider text-[#1EAEDB] mb-3">Trusted by Leaders</h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-8 text-foreground leading-tight">
            Our <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#1EAEDB]">
              Partnerships
            </span>
          </h3>
          
          <p className="text-xl text-muted-foreground">
            We collaborate with innovative companies across industries to deliver
            exceptional value and transformative results.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurPartnershipSection;
