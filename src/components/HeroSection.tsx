import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import { TypeWriter } from '@/components/ui/typewriter';

const HeroSection: React.FC = () => {
  const textRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const textElement = textRef.current;
    if (textElement) {
      const lines = textElement.querySelectorAll('.animated-line');
      lines.forEach((line, index) => {
        const element = line as HTMLElement;
        element.style.animationDelay = `${index * 400 + 200}ms`;
      });
    }
  }, []);

  const growthWords = [
    'Scaling Growth.',
    'Driving Success.',
    'Maximizing ROI.',
    'Building Value.',
    'Leading Innovation.'
  ];
  
  return (
    <section className="min-h-screen flex items-center bg-background pt-20 overflow-hidden">
      <div className="container-wide grid grid-cols-1 lg:grid-cols-1 gap-12 relative">
        {/* Logo positioned in the top right */}
        <div className="absolute top-8 right-8 lg:right-16 animate-fade-in" style={{ animationDelay: '1600ms' }}>
          <div className="relative">
            <div className="w-16 h-16 lg:w-24 lg:h-24 border border-border absolute -top-2 -left-2 bg-accent transition-all duration-500 hover:bg-accent/70"></div>
            <div className="w-16 h-16 lg:w-24 lg:h-24 border border-primary flex items-center justify-center bg-background z-10 relative transition-all duration-500 hover:translate-x-1 hover:-translate-y-1 hover:shadow-xl">
              <img 
                src="/lovable-uploads/cf319b64-1b24-491b-a363-e7648dad4645.png" 
                alt="Morgan Hersly Logo" 
                className="w-12 h-12 lg:w-16 lg:h-16 object-contain transition-transform duration-500 hover:scale-105" 
              />
            </div>
          </div>
        </div>
        
        {/* Main Text Section - Takes full width */}
        <div className="flex flex-col justify-center space-y-8 pt-10 lg:pt-28 w-full" ref={textRef}>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-semibold tracking-tight">
            <div className="overflow-hidden">
              <span className="animated-line block transform translate-y-full animate-slide-up text-foreground">
                Building Strategy.
              </span>
            </div>
            <div className="overflow-hidden">
              <span className="animated-line block transform translate-y-full animate-slide-up text-foreground">
                Designing Systems.
              </span>
            </div>
            <div className="overflow-hidden relative">
              <span className="animated-line block transform translate-y-full animate-slide-up bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
                <TypeWriter 
                  words={growthWords}
                  typingSpeed={100}
                  deletingSpeed={50}
                  delayBetweenWords={2000}
                />
              </span>
              <span className="absolute -inset-1 bg-gradient-to-r from-primary/5 to-primary/5 blur-xl opacity-50 animate-pulse"></span>
            </div>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl opacity-0 animate-fade-in" style={{ animationDelay: '1200ms', lineHeight: '1.6' }}>
            Morgan Hersly helps businesses unlock success with proven strategies and scalable systems.
          </p>
          
          <div className="pt-4 opacity-0 animate-fade-in" style={{ animationDelay: '1400ms' }}>
            <Button 
              size="lg" 
              className={cn(
                "bg-primary text-primary-foreground rounded-none text-lg px-8 py-6 h-auto group transition-all duration-300 hover:shadow-lg relative overflow-hidden"
              )}
              onClick={() => window.open('https://calendly.com/morganhersly-xsq7/30min', '_blank')}
            >
              <span className="relative z-10">Get Free Strategy Call</span>
              <ArrowRight className="ml-2 transition-all duration-300 group-hover:translate-x-2 relative z-10" />
              <span className="absolute inset-0 w-0 bg-gradient-to-r from-primary/80 to-primary transition-all duration-500 group-hover:w-full"></span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
