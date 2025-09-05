import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Search, 
  Share2, 
  PenTool, 
  BarChart3, 
  Mail, 
  Smartphone 
} from "lucide-react";
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/use-scroll-animation";

const Services = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: gridRef, visibleItems } = useStaggeredAnimation(6, 150);
  
  const services = [
    {
      icon: <Search className="h-8 w-8" />,
      title: "SEO Optimization",
      image: "https://bigbucket.online/td-site-icons/seo_12096079.png",
      description: "Boost your website's visibility and ranking on search engines with our advanced SEO strategies."
    },
    {
      icon: <Share2 className="h-8 w-8" />,
      title: "Social Media Marketing",
      image: "https://bigbucket.online/td-site-icons/social-media_11182246.png",
      description: "Engage your audience and build brand awareness across all major social media platforms."
    },
    {
      icon: <PenTool className="h-8 w-8" />,
      title: "Development",
      image: "https://bigbucket.online/td-site-icons/web-development_10382336.png",
      description: "Custom programming for most complex functions you can think."
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Web Design",
      image: "https://bigbucket.online/td-site-icons/web-design_11494231.png",
      description: "Powerful web design that will out-perform your strongest competitors."
    },
    {
      icon: <Mail className="h-8 w-8" />,
      title: "E-Commerce",
      image: "https://bigbucket.online/td-site-icons/e-commerace_17241970.png",
      description: "We build your online store using a flexible, modular platform that allows you to expand your business."
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Branding",
      image: "https://bigbucket.online/td-site-icons/branding_2974864.png",
      description: "A solid brand strategy, logo and guidelines help you to get You recognized."
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className={`text-center mb-16 transition-all duration-700 ${titleVisible ? 'animate-fade-in' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We offer comprehensive digital marketing solutions to help your business grow and succeed in the digital world.
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`group transition-all duration-500 hover:-translate-y-3 border-0 shadow-card hover:shadow-glow ${
                visibleItems.has(index) ? 'animate-scale-in' : 'opacity-0 translate-y-8'
              }`}
            >
              <CardHeader>
                <div className="flex items-center justify-center w-16 h-16 mb-4 mx-auto group-hover:scale-110 transition-all duration-300">
                  <div className="text-white">
                    {/* {service.icon} */}
                    <img src={service.image} alt="" />
                  </div>
                </div>
                <CardTitle className="text-center text-xl group-hover:text-primary transition-colors duration-300">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base group-hover:text-foreground transition-colors duration-300">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;