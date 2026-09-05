import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    serviceInterest: "",
    message: "",
    website: "" // honeypot field
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.serviceInterest) {
      toast({
        title: "Select a service",
        description: "Please choose the service you are interested in.",
        variant: "destructive",
      });
      return;
    }

    // Silently accept bot-filled honeypot submissions.
    if (formData.website) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/info@gasbesenergy.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          _subject: "New Gasbes Energy Website Quote Request",
          _template: "table",
          _honey: formData.website,
          source: "Gasbes Energy website - Request a Quote",
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          service: formData.serviceInterest,
          message: formData.message,
        }),
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      toast({
        title: "Message sent",
        description: "Thank you. Our team will get back to you shortly.",
      });

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        serviceInterest: "",
        message: "",
        website: "",
      });
    } catch {
      toast({
        title: "Unable to send",
        description: "Please try again, email info@gasbesenergy.com, or contact us on WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark-gray mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your renewable energy journey? Contact us for a free consultation and personalized quote.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-dark-gray mb-6">Request a Quote</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="firstName" className="text-gray-700 font-semibold">First Name</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    placeholder="John"
                    required
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-gray-700 font-semibold">Last Name</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    placeholder="Doe"
                    required
                    className="mt-2"
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="email" className="text-gray-700 font-semibold">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="john@example.com"
                  required
                  className="mt-2"
                />
              </div>
              
              <div>
                <Label htmlFor="phone" className="text-gray-700 font-semibold">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  placeholder="+260 XXX XXX XXX"
                  required
                  className="mt-2"
                />
              </div>
              
              <div>
                <Label htmlFor="service" className="text-gray-700 font-semibold">Service Interest</Label>
                <Select value={formData.serviceInterest} onValueChange={(value) => handleInputChange("serviceInterest", value)} required>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="solar">Solar Installation</SelectItem>
                    <SelectItem value="biogas">Biogas System</SelectItem>
                    <SelectItem value="maintenance">Maintenance</SelectItem>
                    <SelectItem value="consulting">Consulting</SelectItem>
                    <SelectItem value="audit">Energy Audit</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="message" className="text-gray-700 font-semibold">Project Details</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  placeholder="Tell us about your energy needs and project requirements..."
                  rows={4}
                  className="mt-2"
                />
              </div>
              
              {/* Honeypot field - hidden from users */}
              <input 
                type="text" 
                name="_honey" 
                value={formData.website}
                onChange={(e) => handleInputChange("website", e.target.value)}
                style={{ display: 'none' }} 
                tabIndex={-1}
                autoComplete="off"
              />
              
              <Button 
                type="submit" 
                className="w-full bg-forest-green text-white hover:bg-coffee-brown text-lg py-4 h-auto"
                disabled={isSubmitting}
              >
                <Send className="mr-2 h-5 w-5" />
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
              <p className="text-xs text-gray-500 text-center">
                We use your details only to respond to your enquiry and do not sell your personal information.
              </p>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-dark-gray mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-warm-orange text-white rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-dark-gray mb-1">Office Address</h4>
                    <p className="text-gray-600">Corner Okra and Likaka Street<br />Salama Park, 5 Likaka Street<br />Lusaka 10101, Zambia</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-forest-green text-white rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-dark-gray mb-1">Phone</h4>
                    <p className="text-gray-600">+260 979 491 660</p>
                    <a href="https://wa.me/260979491660" className="text-forest-green hover:text-warm-orange transition-colors inline-flex items-center">
                      <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.515z"/>
                      </svg>
                      WhatsApp
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-earth-orange text-white rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-dark-gray mb-1">Email</h4>
                    <p className="text-gray-600">info@gasbesenergy.com</p>
                    <p className="text-gray-600">quotes@gasbesenergy.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-coffee-brown text-white rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-dark-gray mb-1">Business Hours</h4>
                    <p className="text-gray-600">Monday - Friday: 8:00 AM - 5:00 PM</p>
                    <p className="text-gray-600">Saturday: 9:00 AM - 2:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Google Maps */}
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61983.75!2d28.2871!3d-15.4067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDI0JzI0LjEiUyAyOMKwMTcnMTMuNiJF!5e0!3m2!1sen!2s!4v1699123456789!5m2!1sen!2s&q=Salama+Park+Lusaka+Zambia"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Gasbes Energy Office Location - Salama Park, Lusaka"
              ></iframe>
              <div className="bg-white p-4 border-t">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-warm-orange text-white rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-dark-gray">Gasbes Energy</p>
                    <p className="text-sm text-gray-600">Corner Okra and Likaka Street, Salama Park</p>
                    <p className="text-sm text-gray-600">Lusaka 10101, Zambia</p>
                  </div>
                </div>
                <div className="mt-3 flex space-x-2">
                  <a 
                    href="https://www.google.com/maps/search/Salama+Park+Lusaka+Zambia" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-forest-green hover:text-warm-orange text-sm font-medium transition-colors"
                  >
                    View on Google Maps
                  </a>
                  <span className="text-gray-400">•</span>
                  <a 
                    href="https://www.google.com/maps/dir//Salama+Park+Lusaka+Zambia" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-forest-green hover:text-warm-orange text-sm font-medium transition-colors"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
