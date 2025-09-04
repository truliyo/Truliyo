import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/use-scroll-animation";

const Address = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: officesRef, visibleItems } = useStaggeredAnimation(3, 150);
  
  const offices = [
    {
      city: "New York",
      address: "123 Business Ave, Suite 100\nNew York, NY 10001",
      phone: "+1 (555) 123-4567",
      email: "ny@TruliyoDigital.com",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM"
    },
    {
      city: "Los Angeles",
      address: "456 Innovation Blvd, Floor 5\nLos Angeles, CA 90028",
      phone: "+1 (555) 987-6543",
      email: "la@TruliyoDigital.com",
      hours: "Mon-Fri: 8:00 AM - 5:00 PM"
    },
    {
      city: "Chicago",
      address: "789 Marketing Way, Suite 200\nChicago, IL 60601",
      phone: "+1 (555) 456-7890",
      email: "chicago@TruliyoDigital.com",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM"
    }
  ];

  // Note: For Google Maps integration, you'll need to add your Google Maps API key
  // Replace 'YOUR_GOOGLE_MAPS_API_KEY' with your actual API key
  const googleMapsEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.0016930083334!2d77.03683257617283!3d28.41920577578184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4d0d689de3c580d9%3A0x44fc6d4bc720214!2sTruliyo%20Digital!5e0!3m2!1sen!2sin!4v1756888962616!5m2!1sen!2sin";

  return (
    <section id="address" className="py-20 bg-muted/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className={`text-center mb-16 transition-all duration-700 ${titleVisible ? 'animate-fade-in' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Locations</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find us in major cities across the country. Visit any of our offices or schedule a virtual meeting.
          </p>
        </div>

        {/* Office Locations */}
        <div ref={officesRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {offices.map((office, index) => (
            <Card 
              key={index} 
              className={`border-0 shadow-card hover:shadow-elegant hover:-translate-y-2 transition-all duration-500 group ${
                visibleItems.has(index) ? 'animate-scale-in' : 'opacity-0 translate-y-8'
              }`}
            >
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-primary" />
                  {office.city} Office
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-4 w-4 mr-2 text-muted-foreground mt-1 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground whitespace-pre-line">
                    {office.address}
                  </p>
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                  <a 
                    href={`tel:${office.phone.replace(/[^\d+]/g, '')}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {office.phone}
                  </a>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                  <a 
                    href={`mailto:${office.email}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {office.email}
                  </a>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">
                    {office.hours}
                  </p>
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full mt-4 border-primary text-primary hover:bg-primary hover:text-white"
                >
                  <Navigation className="h-4 w-4 mr-2" />
                  Get Directions
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Google Maps */}
        <div className="mb-8">
          <Card className="border-0 shadow-card overflow-hidden">
            <CardHeader>
              <CardTitle className="text-2xl">Find Us on the Map</CardTitle>
              <CardDescription>
                Our main headquarters in India. Click on the map to get directions.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="relative">
                <iframe
                  src={googleMapsEmbedUrl}
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="TruliyoDigital Office Location"
                  className="w-full"
                />
                {/* Note about API key */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="border-0 shadow-card">
            <CardHeader>
              <CardTitle className="text-xl">Visit Our Office</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                We'd love to meet you in person! Our offices are designed to inspire creativity 
                and collaboration. Schedule a visit to discuss your project over coffee.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Free consultation available at all locations</li>
                <li>• Parking available on-site</li>
                <li>• Wheelchair accessible facilities</li>
                <li>• Conference rooms equipped with latest technology</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-card">
            <CardHeader>
              <CardTitle className="text-xl">Remote Meetings</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Can't make it to our office? No problem! We offer virtual consultations 
                and meetings via video call to accommodate your schedule.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Zoom, Google Meet, or Microsoft Teams</li>
                <li>• Screen sharing and presentation capabilities</li>
                <li>• Recording available upon request</li>
                <li>• Flexible scheduling across time zones</li>
              </ul>
              <Button 
                className="w-full mt-4 bg-gradient-primary hover:opacity-90 transition-opacity"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Schedule Virtual Meeting
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Note about Google Maps API */}
        {/* <div className="mt-8 p-4 bg-primary/5 rounded-lg border border-primary/10">
          <p className="text-sm text-muted-foreground text-center">
            <strong>Note:</strong> To fully integrate Google Maps with your location, you'll need to add your Google Maps API key. 
            Visit the <a href="https://developers.google.com/maps/documentation/embed/get-api-key" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              Google Maps Platform
            </a> to get your API key and replace the placeholder URL.
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default Address;