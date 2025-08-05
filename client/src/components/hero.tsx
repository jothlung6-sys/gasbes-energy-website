import { Button } from "@/components/ui/button";
import { Calculator, Play } from "lucide-react";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-28 bg-gradient-to-br from-forest-green to-coffee-brown text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white drop-shadow-2xl">
              Powering Africa, <br />
              <span className="text-yellow-300 drop-shadow-2xl">One Roof at a Time</span>
            </h1>
            <p className="text-xl mb-8 text-gray-100 drop-shadow-xl">
              Leading the renewable energy revolution in Zambia with cutting-edge solar and biogas solutions. 
              Join thousands of satisfied customers in the fight against energy poverty.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection('contact')} 
                className="bg-forest-green text-white hover:bg-coffee-brown text-lg px-8 py-4 h-auto shadow-lg"
              >
                <Calculator className="mr-2 h-5 w-5" />
                Get Free Quote
              </Button>
              <Button 
                onClick={() => scrollToSection('about')} 
                className="bg-warm-orange text-white hover:bg-forest-green hover:text-white text-lg px-8 py-4 h-auto shadow-lg border-none"
              >
                <Play className="mr-2 h-5 w-5" />
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Solar panels on African home" 
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            <div className="absolute -bottom-6 -left-6 bg-white text-forest-green p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-warm-orange">500+</div>
              <div className="text-sm font-semibold">Happy Customers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
