
import React from 'react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ number, title, description }) => {
  return (
    <div className="group relative bg-card p-8 border-t-2 border-transparent hover:border-primary transition-all duration-300">
      <span className="text-muted-foreground text-sm font-medium mb-4 block">{number}</span>
      <h3 className="text-xl font-medium mb-4 text-card-foreground">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 md:py-28 lg:py-36 bg-accent">
      <div className="container-wide">
        <div className="mb-16 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-foreground">Our Expertise</h2>
          <p className="text-xl text-muted-foreground">
            We offer a comprehensive suite of services designed to transform your business operations
            and position your company for sustainable growth.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          <ServiceCard 
            number="01"
            title="Business Strategy Development"
            description="We create comprehensive strategies tailored to your specific industry, challenges, and growth objectives."
          />
          
          <ServiceCard 
            number="02"
            title="Systems Design and Optimization"
            description="We build efficient, scalable systems that streamline operations and create sustainable business growth."
          />
          
          <ServiceCard 
            number="03"
            title="Training and Workshops for Teams"
            description="We equip your team with the knowledge and skills needed to execute strategies effectively."
          />
          
          <ServiceCard 
            number="04"
            title="Digital Transformation"
            description="We guide businesses through technological change to improve performance and reach."
          />
          
          <ServiceCard 
            number="05"
            title="Market Research & Analysis"
            description="We provide data-driven insights to inform strategic decisions and identify growth opportunities."
          />
          
          <ServiceCard 
            number="06"
            title="Executive Coaching"
            description="We help leaders develop the skills and mindset needed to drive organizational success."
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
