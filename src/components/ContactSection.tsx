import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from "@/hooks/use-toast";
import { ArrowRight } from 'lucide-react';
import emailjs from 'emailjs-com';

const ContactSection: React.FC = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Initialize EmailJS with your user ID
      emailjs.init("YOUR_USER_ID"); // You'll need to register for EmailJS and get a user ID

      const templateParams = {
        to_email: "morganhersly@outlook.com",
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      };

      await emailjs.send(
        "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
        templateParams
      );

      toast({
        title: "Message sent successfully",
        description: "We'll be in touch with you shortly.",
      });

      // Clear the form after successful submission
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Error",
        description: "Failed to send your message. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <Input 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name" 
                    className="bg-transparent border-b border-t-0 border-l-0 border-r-0 border-gray-700 rounded-none text-white placeholder:text-gray-500 focus-visible:ring-0 focus-visible:border-white px-0" 
                    required
                  />
                </div>
                <div>
                  <Input 
                    name="email"
                    type="email" 
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email" 
                    className="bg-transparent border-b border-t-0 border-l-0 border-r-0 border-gray-700 rounded-none text-white placeholder:text-gray-500 focus-visible:ring-0 focus-visible:border-white px-0" 
                    required
                  />
                </div>
                <div>
                  <Textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message" 
                    className="bg-transparent border-b border-t-0 border-l-0 border-r-0 border-gray-700 rounded-none text-white placeholder:text-gray-500 min-h-[150px] focus-visible:ring-0 focus-visible:border-white resize-none px-0" 
                    required
                  />
                </div>
                <Button 
                  type="submit"
                  className="bg-white text-black hover:bg-gray-200 rounded-none group px-8"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />}
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
