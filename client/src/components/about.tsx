import { Target, Eye } from "lucide-react";
import openInvertersImg from "@assets/open inverters_1757238927144.jpeg";
import technicianWorkingImg from "@assets/Technician working_1757238927200.jpeg";
import technicianWorking1Img from "@assets/Technician working1_1757238927202.jpeg";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-dark-gray mb-6">About Gasbes Energy</h2>
            <p className="text-lg text-gray-600 mb-6">
              Gasbes Energy is at the forefront of Zambia's renewable energy revolution, dedicated to making clean, 
              affordable energy accessible to every household and business across Africa.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              As a brand under <strong>Biozam Corporate Limited</strong>, we combine years of engineering expertise 
              with a deep understanding of local energy challenges to deliver innovative solutions that transform communities.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-warm-orange text-white rounded-full flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-dark-gray mb-2">Our Mission</h4>
                  <p className="text-gray-600">
                    To eliminate energy poverty across Africa by providing reliable, affordable, and sustainable renewable energy solutions.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-forest-green text-white rounded-full flex items-center justify-center flex-shrink-0">
                  <Eye className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-dark-gray mb-2">Our Vision</h4>
                  <p className="text-gray-600">
                    A future where every African community has access to clean, reliable energy that powers education, healthcare, and economic growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4 rounded-2xl overflow-hidden shadow-lg">
              {/* Main large image - Open Inverters */}
              <div className="col-span-2">
                <img 
                  src={openInvertersImg} 
                  alt="Solar inverters and electrical equipment" 
                  className="w-full h-64 object-cover"
                />
              </div>
              
              {/* Two smaller images - Technicians working */}
              <div>
                <img 
                  src={technicianWorkingImg} 
                  alt="Technician working on solar installation" 
                  className="w-full h-48 object-cover"
                />
              </div>
              <div>
                <img 
                  src={technicianWorking1Img} 
                  alt="Technical team member at work" 
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-warm-orange mb-2">500+</div>
                <div className="text-sm text-gray-600">Systems Installed</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-forest-green mb-2">50MW</div>
                <div className="text-sm text-gray-600">Total Capacity</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-earth-orange mb-2">5+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
