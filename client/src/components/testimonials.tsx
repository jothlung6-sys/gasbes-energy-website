import { Star, User } from "lucide-react";

const testimonials = [
  {
    name: "John Mwanza",
    title: "Restaurant Owner",
    content: "Gasbes Energy transformed our restaurant operations. We've cut our electricity costs by 80% and now have reliable power even during outages. Their professional installation and ongoing support is exceptional."
  },
  {
    name: "Grace Phiri",
    title: "Homeowner", 
    content: "Our family finally has reliable electricity 24/7. The children can study at night and we can keep our food fresh. Gasbes Energy made solar affordable and installation was quick and professional."
  },
  {
    name: "Dr. Samuel Banda",
    title: "Clinic Director",
    content: "Gasbes Energy's solar solution ensures our medical equipment runs continuously. Their backup systems have saved countless lives by maintaining vaccine storage and emergency lighting during power outages."
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-br from-warm-orange to-earth-orange text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white drop-shadow-2xl">What Our Customers Say</h2>
          <p className="text-xl text-white font-medium max-w-3xl mx-auto drop-shadow-xl" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
            Real experiences from satisfied customers who have transformed their energy access with Gasbes Energy.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/20 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-warm-orange rounded-full flex items-center justify-center mr-4">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-white drop-shadow-lg">{testimonial.name}</h4>
                  <p className="text-white/90 text-sm font-medium drop-shadow-md">{testimonial.title}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-300 fill-current drop-shadow-md" />
                ))}
              </div>
              <p className="text-white font-medium drop-shadow-lg" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.7)' }}>{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
