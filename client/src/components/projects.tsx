import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import sandysCreationImg from "@assets/IMG-20250805-WA0022_1754435171407.jpg";
import stateLodgeImg from "@assets/State lodge Installation_1757239158107.jpeg";
import katubaPoultryImg from "@assets/Katuba Poultry farm  Installation_1757239671936.jpeg";
import lundaziBiogasImg from "@assets/20180815_111027_1757242429055.jpg";
import zamraImg from "@assets/IMG_6357_1757242647851.jpg";
import ruralIrrigationImg from "@assets/mwandi-trip_1757242978548.jpg";

const projects = [
  {
    title: "Sandy's Creation Resort",
    description: "488kWp commercial solar installation providing clean energy for resort operations, reducing electricity costs by 80%.",
    image: sandysCreationImg,
    type: "Commercial",
    capacity: "488kWp Installed",
    badgeColor: "bg-warm-orange"
  },
  {
    title: "State Lodge residential",
    description: "A residential installation in State Lodge Lusaka. The system provides the house with 24/7 power.",
    image: stateLodgeImg,
    type: "Residential",
    capacity: "15kW Installed",
    badgeColor: "bg-forest-green"
  },
  {
    title: "Lundazi Family biogas",
    description: "Family-scale biogas installation providing clean cooking fuel and gas for household needs, utilizing agricultural and organic waste.",
    image: lundaziBiogasImg,
    type: "Biogas",
    capacity: "12m³ Digester",
    badgeColor: "bg-earth-orange"
  },
  {
    title: "ZAMRA (Zambia Medical Regulation Authority)",
    description: "Corporate solar installation providing clean energy for government regulatory offices, meeting rooms, and administrative operations.",
    image: zamraImg,
    type: "Corporate",
    capacity: "18kWp Installed",
    badgeColor: "bg-coffee-brown"
  },
  {
    title: "Rural zambia solar irrigation",
    description: "Solar-powered irrigation system providing reliable water access for rural farming communities, supporting agricultural productivity and food security.",
    image: ruralIrrigationImg,
    type: "Agricultural",
    capacity: "5kW Water Pump",
    badgeColor: "bg-forest-green"
  },
  {
    title: "Katuba Poultry Farm",
    description: "Solar installation powering poultry farm operations, providing reliable energy for lighting, ventilation, and automated feeding systems.",
    image: katubaPoultryImg,
    type: "Agricultural",
    capacity: "240kWp Installed",
    badgeColor: "bg-earth-orange"
  }
];

export default function Projects() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark-gray mb-4">Our Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From residential rooftops to large commercial installations, see how we're transforming energy access across Zambia.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-dark-gray mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex justify-between items-center text-sm">
                  <Badge className={`${project.badgeColor} text-white`}>
                    {project.type}
                  </Badge>
                  <span className="text-forest-green font-semibold">{project.capacity}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            onClick={scrollToContact}
            className="bg-forest-green text-white hover:bg-coffee-brown text-lg px-8 py-4 h-auto"
          >
            Start Your Project
          </Button>
        </div>
      </div>
    </section>
  );
}
