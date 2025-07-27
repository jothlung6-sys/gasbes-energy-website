import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import gasbesLogo from "@assets/gasbes Energy logo-web_1753607811487.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-white shadow-lg fixed w-full top-0 z-50">
      <nav className="container mx-auto px-4 py-1">
        <div className="flex justify-between items-center min-h-[100px] py-1">
          <div className="flex items-center">
            <img 
              src={gasbesLogo} 
              alt="Gasbes Energy Logo" 
              className="h-32 w-auto object-contain"
            />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-dark-gray hover:text-forest-green transition-colors">Home</button>
            <button onClick={() => scrollToSection('about')} className="text-dark-gray hover:text-forest-green transition-colors">About</button>
            <button onClick={() => scrollToSection('services')} className="text-dark-gray hover:text-forest-green transition-colors">Services</button>
            <button onClick={() => scrollToSection('projects')} className="text-dark-gray hover:text-forest-green transition-colors">Projects</button>
            <button onClick={() => scrollToSection('contact')} className="text-dark-gray hover:text-forest-green transition-colors">Contact</button>
          </div>
          
          {/* CTA Button */}
          <div className="hidden md:block">
            <Button onClick={() => scrollToSection('contact')} className="bg-warm-orange text-white hover:bg-earth-orange">
              Request Quote
            </Button>
          </div>
          
          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-dark-gray"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('home')} className="text-dark-gray hover:text-forest-green text-left">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-dark-gray hover:text-forest-green text-left">About</button>
              <button onClick={() => scrollToSection('services')} className="text-dark-gray hover:text-forest-green text-left">Services</button>
              <button onClick={() => scrollToSection('projects')} className="text-dark-gray hover:text-forest-green text-left">Projects</button>
              <button onClick={() => scrollToSection('contact')} className="text-dark-gray hover:text-forest-green text-left">Contact</button>
              <Button onClick={() => scrollToSection('contact')} className="bg-warm-orange text-white hover:bg-earth-orange w-full">
                Request Quote
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
