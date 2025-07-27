import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Linkedin, Mail } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import type { InsertNewsletterSubscription } from "@shared/schema";
import gasbesLogo from "@assets/gasbes Energy logo-web_1753607811487.png";

export default function Footer() {
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const newsletterMutation = useMutation({
    mutationFn: async (data: InsertNewsletterSubscription) => {
      const response = await apiRequest("POST", "/api/newsletter", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Subscribed!",
        description: "Thank you for subscribing to our newsletter.",
      });
      setEmail("");
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to subscribe. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      newsletterMutation.mutate({ email });
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-dark-gray text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex justify-start mb-4 -ml-12">
              <img 
                src={gasbesLogo} 
                alt="Gasbes Energy Logo" 
                className="w-96 h-auto object-contain max-h-48 filter brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading Zambia's renewable energy revolution with innovative solar and biogas solutions. 
              Powering Africa, one roof at a time.
            </p>
            <p className="text-sm text-gray-400 mb-4">
              <strong>Gasbes Energy is a brand by Biozam Corporate Limited</strong>
            </p>
            
            {/* Newsletter Signup */}
            <div className="mb-6">
              <h4 className="font-bold mb-3">Subscribe to Our Newsletter</h4>
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-gray-700 text-white border-gray-600 focus:ring-warm-orange"
                  required
                />
                <Button 
                  type="submit" 
                  className="bg-warm-orange text-white hover:bg-earth-orange"
                  disabled={newsletterMutation.isPending}
                >
                  {newsletterMutation.isPending ? "Subscribing..." : "Subscribe"}
                </Button>
              </form>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-warm-orange transition-colors text-left">Home</button></li>
              <li><button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-warm-orange transition-colors text-left">About Us</button></li>
              <li><button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-warm-orange transition-colors text-left">Services</button></li>
              <li><button onClick={() => scrollToSection('projects')} className="text-gray-300 hover:text-warm-orange transition-colors text-left">Projects</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-warm-orange transition-colors text-left">Contact</button></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li><button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-warm-orange transition-colors text-left">Solar Installation</button></li>
              <li><button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-warm-orange transition-colors text-left">Biogas Systems</button></li>
              <li><button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-warm-orange transition-colors text-left">Maintenance</button></li>
              <li><button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-warm-orange transition-colors text-left">Energy Consulting</button></li>
              <li><button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-warm-orange transition-colors text-left">Energy Audits</button></li>
              <li><button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-warm-orange transition-colors text-left">Training</button></li>
            </ul>
          </div>
        </div>
        
        {/* Social Links & Copyright */}
        <div className="border-t border-gray-600 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="https://facebook.com/gasbesenergy" className="w-10 h-10 bg-gray-700 text-white rounded-full flex items-center justify-center hover:bg-warm-orange transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/company/gasbesenergy" className="w-10 h-10 bg-gray-700 text-white rounded-full flex items-center justify-center hover:bg-warm-orange transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://wa.me/260XXXXXXXXX" className="w-10 h-10 bg-gray-700 text-white rounded-full flex items-center justify-center hover:bg-warm-orange transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.515z"/>
              </svg>
            </a>
            <a href="mailto:info@gasbesenergy.com" className="w-10 h-10 bg-gray-700 text-white rounded-full flex items-center justify-center hover:bg-warm-orange transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-300 text-sm">
              © 2024 Gasbes Energy. All rights reserved.
            </p>
            <p className="text-gray-400 text-xs mt-1">
              Powered by renewable energy solutions
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
