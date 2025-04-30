
import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface CaseStudyCardProps {
  title: string;
  industry: string;
  description: string;
  result: string;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ 
  title, 
  industry, 
  description, 
  result
}) => {
  return (
    <div className="border-t border-border py-12 group">
      <div className="grid md:grid-cols-5 gap-8">
        <div className="md:col-span-1">
          <span className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-2 block">
            {industry}
          </span>
        </div>
        
        <div className="md:col-span-2">
          <h3 className="text-2xl font-semibold mb-4 text-foreground group-hover:text-muted-foreground transition-colors">{title}</h3>
        </div>
        
        <div className="md:col-span-2">
          <p className="text-muted-foreground mb-4">{description}</p>
          <p className="font-medium mb-6 text-foreground">Result: <span className="text-muted-foreground">{result}</span></p>
          <Button variant="outline" className="border-primary text-foreground hover:bg-primary hover:text-primary-foreground rounded-none group">
            Read Case Study
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </div>
  );
};

const CaseStudiesSection: React.FC = () => {
  return (
    <section id="casestudies" className="py-20 md:py-28 lg:py-36 bg-background">
      <div className="container-wide">
        <div className="mb-16 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-foreground">Proven Results</h2>
          <p className="text-xl text-muted-foreground">
            See how we've helped businesses across industries achieve exceptional growth and operational excellence.
          </p>
        </div>
        
        <div>
          <CaseStudyCard 
            title="50% Revenue Growth in 6 Months"
            industry="E-commerce"
            description="We helped a struggling e-commerce company revamp their business strategy, optimize their systems, and train their team on new processes."
            result="50% increase in revenue and 30% decrease in operational costs."
          />
          
          <CaseStudyCard 
            title="Streamlined Operations, Doubled Efficiency"
            industry="Manufacturing"
            description="We redesigned core operational systems for a manufacturing firm that was struggling with inefficient processes and high overhead costs."
            result="Efficiency increased by 100% while reducing operational costs by 35%."
          />
          
          <CaseStudyCard 
            title="Successful Market Expansion"
            industry="SaaS"
            description="We developed a comprehensive market entry strategy for a SaaS company looking to expand into new international markets."
            result="Successful launch in 3 new markets with 125% YOY growth in new regions."
          />
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
