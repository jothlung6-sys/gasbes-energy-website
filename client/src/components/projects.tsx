import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import sandysCreationImg from "@assets/IMG-20250805-WA0022_1754435171407.jpg";
import stateLodgeImg from "@assets/State lodge Installation_1757239158107.jpeg";

const projects = [
  {
    title: "Sandy's Creation Restaurant",
    description: "488kWp commercial solar installation providing clean energy for restaurant operations, reducing electricity costs by 80%.",
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
    title: "Mpika Community Biogas",
    description: "Large-scale biogas installation serving 500+ families with clean cooking fuel from agricultural waste.",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    type: "Biogas",
    capacity: "500 Families",
    badgeColor: "bg-earth-orange"
  },
  {
    title: "Lusaka Primary School",
    description: "Educational facility solar installation powering classrooms, computer labs, and administrative offices.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    type: "Educational",
    capacity: "30kW Installed",
    badgeColor: "bg-coffee-brown"
  },
  {
    title: "Ndola Health Clinic",
    description: "Critical healthcare facility powered by reliable solar energy ensuring 24/7 medical equipment operation.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    type: "Healthcare",
    capacity: "75kW Installed",
    badgeColor: "bg-warm-orange"
  },
  {
    title: "Kabwe Rural Electrification",
    description: "Mini-grid solar system bringing electricity to remote village for the first time, powering homes and businesses.",
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    type: "Rural",
    capacity: "150kW Grid",
    badgeColor: "bg-forest-green"
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
