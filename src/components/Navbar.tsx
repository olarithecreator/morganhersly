import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ArrowRight, Menu, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled 
          ? 'bg-background shadow-sm py-3' 
          : 'bg-transparent py-5',
        isDarkMode && !isScrolled && 'bg-black/20 backdrop-blur-sm'
      )}
    >
      <div className="container-wide flex items-center justify-between">
        <a href="#" className="flex items-center space-x-2 group animate-fade-in">
          <div className="relative overflow-hidden transition-transform duration-500 group-hover:rotate-3">
            <img 
              src="/lovable-uploads/cf319b64-1b24-491b-a363-e7648dad4645.png" 
              alt="Morgan Hersly Logo" 
              className="h-8 w-auto transition-all duration-500 group-hover:scale-110" 
            />
            <div className={cn(
              "absolute inset-0 translate-x-full group-hover:translate-x-0 transition-transform duration-700",
              isDarkMode ? "bg-gradient-to-r from-transparent to-white/30" : "bg-gradient-to-r from-transparent to-white/20"
            )}></div>
          </div>
          <span className="text-lg font-semibold tracking-tight text-foreground transition-all duration-300 group-hover:tracking-wide">
            Morgan Hersly
          </span>
        </a>

        <div className="flex items-center space-x-4">
          {/* Theme Toggle */}
          <button 
            onClick={toggleDarkMode}
            className="p-2 rounded-full transition-colors duration-300 text-foreground hover:bg-accent"
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center">
            <div className="flex space-x-10 mr-10">
              {['Our Process', 'Services', 'Case Studies', 'Stories/Insights', 'Contact'].map((item, index) => (
                <a 
                  key={item} 
                  href={item === 'Stories/Insights' ? '/stories-insights.html' : `#${item.toLowerCase().replace(' ', '')}`} 
                  className="text-sm font-medium transition-all duration-300 relative overflow-hidden group text-foreground"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="block transition-transform duration-300 group-hover:-translate-y-full">{item}</span>
                  <span className="absolute top-0 left-0 w-full transition-transform duration-300 translate-y-full group-hover:translate-y-0">{item}</span>
                  <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
            <Button 
              className="bg-primary text-primary-foreground hover:bg-primary/80 rounded-none group px-6 hover:shadow-md transition-all duration-300 animate-fade-in"
              style={{ animationDelay: '400ms' }}
              size="sm"
            >
              <span className="relative z-10">Book Call</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-all duration-300 group-hover:translate-x-1" />
              <span className={cn(
                "absolute inset-0 w-full h-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300",
                isDarkMode ? "bg-gradient-to-r from-white/20 to-white/10" : "bg-gradient-to-r from-black to-gray-800"
              )}></span>
            </Button>
          </nav>

          {/* Mobile Navigation Toggle */}
          <button
            className="block md:hidden text-foreground transition-transform duration-300 hover:rotate-12"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-background shadow-lg md:hidden animate-fade-in">
            <nav className="flex flex-col py-4">
              {['Our Process', 'Services', 'Case Studies', 'Stories/Insights', 'Contact'].map((item, index) => (
                <a 
                  key={item}
                  href={item === 'Stories/Insights' ? '/stories-insights.html' : `#${item.toLowerCase().replace(' ', '')}`} 
                  className={cn(
                    "px-6 py-3 text-sm font-medium hover:bg-accent border-l-2 border-transparent hover:border-primary transition-all duration-300",
                    "text-foreground"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ 
                    transform: 'translateY(10px)',
                    animation: 'fadeInUp 0.5s forwards',
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  {item}
                </a>
              ))}
              <div 
                className="px-6 py-3"
                style={{ 
                  transform: 'translateY(10px)',
                  animation: 'fadeInUp 0.5s forwards',
                  animationDelay: '400ms'
                }}
              >
                <Button 
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/80 rounded-none flex items-center justify-center group overflow-hidden"
                  size="sm"
                >
                  <span className="relative z-10">Book Call</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  <span className="absolute inset-0 w-full h-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
