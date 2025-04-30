import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { Lightbulb, Wrench, BarChart, Play, ChevronRight, ChevronLeft } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { useIsMobile } from '@/hooks/use-mobile';

interface ProcessStepProps {
  number: string;
  title: string;
  icon: React.ElementType;
  description: string;
  bgColor: string;
}

const ProcessStep = ({
  number,
  title,
  icon: Icon,
  description,
  bgColor
}: ProcessStepProps) => {
  return (
    <Card className={cn(
      "border border-border/30 bg-background/70 backdrop-blur-sm w-full h-full",
      "transition-all duration-500 group animate-on-scroll opacity-0",
      "overflow-hidden"
    )}>
      <CardContent className="p-0 flex flex-col h-full relative overflow-hidden">
        {/* Background color gradient */}
        <div className={cn(
          "absolute inset-0 w-full h-full opacity-10 transition-all duration-300 group-hover:opacity-15",
          bgColor
        )}></div>
        
        {/* Accent circle */}
        <div className={cn(
          "absolute -right-[20%] -top-[20%] w-[60%] h-[60%] rounded-full opacity-20 transition-all duration-300 group-hover:scale-110",
          bgColor
        )}></div>
        
        <div className="flex flex-col justify-between h-full p-6 md:p-10 relative z-10">
          <div>
            <div className="flex justify-between items-start mb-8 md:mb-12">
              <span className="text-5xl md:text-7xl font-bold text-primary/80 opacity-30">{number}</span>
              <div className={cn(
                "p-5 rounded-full flex items-center justify-center",
                "bg-background/90 border border-border shadow-lg",
                "group-hover:border-primary/40 transition-all duration-300",
                bgColor.replace('bg-', 'group-hover:bg-').replace(']', '/10]')
              )}>
                <Icon size={36} className="transition-transform duration-300" />
              </div>
            </div>
            
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-6 text-foreground relative z-10">{title}</h3>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed relative z-10">{description}</p>
          </div>
          
          <div className="relative z-10">
            <div className="w-full h-1 bg-muted overflow-hidden">
              <div className={cn(
                "h-full w-0 group-hover:w-full transition-all duration-700",
                bgColor.replace('bg-[', 'bg-[')
              )}></div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const SwipeIndicator = ({ direction = "right" }: { direction?: "left" | "right" }) => {
  return (
    <div className="absolute bottom-8 z-50 flex items-center gap-2 animate-pulse">
      {direction === "left" ? (
        <>
          <ChevronLeft className="w-5 h-5 animate-bounce-gentle" />
          <span className="text-sm font-medium">Swipe left</span>
        </>
      ) : (
        <>
          <span className="text-sm font-medium">Swipe right</span>
          <ChevronRight className="w-5 h-5 animate-bounce-gentle" />
        </>
      )}
    </div>
  );
};

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const isMobile = useIsMobile();
  
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

  const processSteps = [
    {
      number: "01",
      title: "Idea Generation",
      icon: Lightbulb,
      description: "We collaborate with your team to identify opportunities and generate innovative solutions to complex problems.",
      bgColor: "bg-[#F97316]" // Bright orange
    },
    {
      number: "02",
      title: "System & Framework Building",
      icon: Wrench,
      description: "We design scalable systems and frameworks that form the foundation of sustainable business transformation.",
      bgColor: "bg-[#1EAEDB]" // Bright blue
    },
    {
      number: "03",
      title: "Testing & Data Gathering",
      icon: BarChart,
      description: "We use data-driven approaches to validate hypotheses and gather insights that inform strategy refinement.",
      bgColor: "bg-[#8B5CF6]" // Vivid purple
    },
    {
      number: "04",
      title: "Executing",
      icon: Play,
      description: "We implement strategies with precision, ensuring successful adoption and measurable business outcomes.",
      bgColor: "bg-[#D946EF]" // Magenta pink
    }
  ];
  
  // Fix the type issue with onSelect handler
  const handleCarouselChange = React.useCallback((api: any) => {
    if (api) {
      setCurrentSlide(api.selectedScrollSnap());
    }
  }, []);
  
  return (
    <section id="about" className="py-20 md:py-28 lg:py-36 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-primary/5 to-transparent rounded-full blur-3xl"></div>
      
      <div ref={sectionRef} className="relative">
        <div className="container-wide mb-12 md:mb-16">
          <div className="max-w-2xl animate-on-scroll opacity-0">
            <h2 className="text-sm md:text-base uppercase tracking-wider text-primary mb-3">Our Approach</h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-8 text-foreground leading-tight">
              Our <span className="relative inline-block">
                Process
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-primary"></span>
              </span>
            </h3>
            
            <p className="text-xl text-muted-foreground">
              We follow a structured methodology designed to maximize results while minimizing risk.
              Our process ensures consistent quality and proven outcomes across all engagements.
            </p>
          </div>
        </div>

        <div className="h-[60vh] md:h-[70vh] lg:h-[75vh] relative">
          <Carousel
            className="w-full h-full"
            onSelect={handleCarouselChange}
          >
            <CarouselContent className="h-full">
              {processSteps.map((step, index) => (
                <CarouselItem key={index} className="h-full">
                  <div className="h-full p-4 md:p-6">
                    <ProcessStep {...step} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <div className="container-wide relative">
              <div className="absolute z-30 bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2">
                {processSteps.map((_, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="sm"
                    className={cn(
                      "w-3 h-3 p-0 rounded-full transition-all",
                      currentSlide === index 
                        ? "bg-primary scale-125" 
                        : "bg-primary/30 hover:bg-primary/50"
                    )}
                    onClick={() => {
                      const carousel = document.querySelector('[data-radix-carousel-root]');
                      if (carousel) {
                        const api = (carousel as any).__embla;
                        if (api) api.scrollTo(index);
                      }
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Swipe Indicators */}
            <div className="absolute z-20 bottom-6 left-6">
              {currentSlide > 0 && (
                <SwipeIndicator direction="left" />
              )}
            </div>
            <div className="absolute z-20 bottom-6 right-6">
              {currentSlide < processSteps.length - 1 && (
                <SwipeIndicator direction="right" />
              )}
            </div>
            
            {/* Custom styled carousel controls */}
            <CarouselPrevious className="left-4 lg:left-8 bg-background/70 backdrop-blur-sm border-primary/20 hover:bg-primary/10 transition-all" />
            <CarouselNext className="right-4 lg:right-8 bg-background/70 backdrop-blur-sm border-primary/20 hover:bg-primary/10 transition-all" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
