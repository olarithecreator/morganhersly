import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 md:py-28 lg:py-36 bg-black text-white">
      <div className="container-wide">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold mb-6">Work With Us</h2>
            <p className="text-xl text-gray-300">
              Ready to transform your business? Get your free strategy call today and let's discuss 
              how Morgan Hersly can help you achieve your goals.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-xl font-medium mb-8">Send us a message</h3>
              <form action="https://formspree.io/f/xjkwyvla" method="POST" className="space-y-8">
                <input type="text" name="_gotcha" className="hidden" aria-hidden="true" />
                <div>
                  <input 
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="w-full bg-transparent border-b border-t-0 border-l-0 border-r-0 border-gray-700 rounded-none text-white placeholder:text-gray-500 focus:outline-none focus:border-white px-0 py-2"
                  />
                </div>
                <div>
                  <input 
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    className="w-full bg-transparent border-b border-t-0 border-l-0 border-r-0 border-gray-700 rounded-none text-white placeholder:text-gray-500 focus:outline-none focus:border-white px-0 py-2"
                  />
                </div>
                <div>
                  <textarea 
                    name="message"
                    placeholder="Your Message"
                    required
                    className="w-full bg-transparent border-b border-t-0 border-l-0 border-r-0 border-gray-700 rounded-none text-white placeholder:text-gray-500 min-h-[150px] focus:outline-none focus:border-white resize-none px-0 py-2"
                  />
                </div>
                <Button 
                  type="submit"
                  className="bg-white text-black hover:bg-gray-200 rounded-none group px-8"
                >
                  Send Message
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>
            </div>
            
            <div className="border-l border-gray-800 pl-12 h-full">
              <h3 className="text-xl font-medium mb-8">Get Your Free Strategy Call</h3>
              <p className="text-gray-300 mb-8">
                Schedule a no-obligation 30-minute strategy call to discuss your business challenges 
                and how we might be able to help.
              </p>
              <Button 
                className="bg-white text-black hover:bg-gray-200 rounded-none group px-8"
                size="lg"
                onClick={() => window.open('https://calendly.com/morganhersly-xsq7/30min', '_blank')}
              >
                Get Free Strategy Call
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
