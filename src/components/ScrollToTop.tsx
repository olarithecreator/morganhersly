
import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-8 right-8 p-3 bg-primary text-primary-foreground border border-border z-50 transition-all duration-500",
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none',
        "hover:bg-background hover:text-foreground group shadow-lg overflow-hidden animate-bounce-gentle"
      )}
      aria-label="Scroll to top"
    >
      <ArrowUp className="h-5 w-5 transition-all duration-500 group-hover:-translate-y-1 relative z-10" />
      <span className="absolute inset-0 bg-background transform origin-bottom scale-y-0 transition-transform duration-300 group-hover:scale-y-100"></span>
    </button>
  );
};

export default ScrollToTop;
