import { CheckCircle, Sun, Leaf, Wrench, Lightbulb, BarChart3, GraduationCap } from "lucide-react";

const services = [
  {
    icon: Sun,
    title: "Solar Installations",
    description: "Professional solar panel installation for homes and businesses. From system design to grid connection, we handle everything.",
    color: "bg-warm-orange",
    features: ["Residential solar systems", "Commercial installations", "Grid-tie solutions"]
  },
  {
    icon: Leaf,
    title: "Biogas Systems",
    description: "Sustainable biogas solutions that convert organic waste into clean cooking fuel and electricity for rural communities.",
    color: "bg-forest-green",
    features: ["Household biogas digesters", "Community systems", "Waste management"]
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    description: "Comprehensive maintenance packages to ensure optimal performance and longevity of your renewable energy systems.",
    color: "bg-earth-orange",
    features: ["Regular inspections", "Performance monitoring", "24/7 technical support"]
  },
  {
    icon: Lightbulb,
    title: "Energy Consulting",
    description: "Expert advice on energy efficiency, system optimization, and renewable energy planning for your specific needs.",
    color: "bg-coffee-brown",
    features: ["Energy assessments", "System design", "ROI analysis"]
  },
  {
    icon: BarChart3,
    title: "Energy Audits",
    description: "Detailed energy audits to identify inefficiencies and recommend cost-effective solutions for reduced energy consumption.",
    color: "bg-warm-orange",
    features: ["Consumption analysis", "Efficiency recommendations", "Cost-benefit reports"]
  },
  {
    icon: GraduationCap,
    title: "Training & Education",
    description: "Capacity building programs for communities, technicians, and organizations to promote renewable energy adoption.",
    color: "bg-forest-green",
    features: ["Technical training", "Community workshops", "Certification programs"]
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark-gray mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive renewable energy solutions tailored to your needs, from residential installations to large-scale commercial projects.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
                <div className={`w-16 h-16 ${service.color} text-white rounded-full flex items-center justify-center mb-6`}>
                  <IconComponent className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-dark-gray mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="text-gray-600 space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-forest-green mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
