import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

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
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-forest-green rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-warm-orange" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L13.09 5.26L16 4L15.74 7.26L19 8L16.74 10.74L19 12L15.74 13.26L16 16L13.09 14.74L12 18L10.91 14.74L8 16L8.26 13.26L5 12L8.26 10.74L8 8L10.91 5.26L12 2Z"/>
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold text-forest-green">Gasbes Energy</h1>
              <p className="text-xs text-gray-600">Renewable Energy Solutions</p>
            </div>
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
