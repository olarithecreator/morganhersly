
import React from 'react';
import { MessageSquare } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black text-white py-12">
      <div className="container-wide">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/lovable-uploads/cf319b64-1b24-491b-a363-e7648dad4645.png" 
                alt="Morgan Hersly Logo" 
                className="h-8 w-auto" 
              />
              <span className="text-lg font-semibold tracking-tight">
                Morgan Hersly
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Building strategies and systems for sustainable business growth.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#casestudies" className="text-gray-400 hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Connect</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="https://www.linkedin.com/company/morgan-hersly/?viewAsMember=true" className="text-gray-400 hover:text-white transition-colors">Linkedin</a></li>
              <li><a href="https://www.twitter.com/morganhersly/" className="text-gray-400 hover:text-white transition-colors">Twitter</a></li>
              <li><a href="https://www.instagram.com/morgan_hersly/" className="text-gray-400 hover:text-white transition-colors">Instagram</a></li>
              <li><a href="https://whatsapp.com/channel/0029VbABkmB1t90ejNfu7C3N" className="text-gray-400 hover:text-white transition-colors">WhatsApp Channel</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Morgan Hersly. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <p className="text-gray-400 text-sm">
              Designed by Morgan hersly.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
