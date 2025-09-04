import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, ExternalLink } from "lucide-react";

const Media = () => {
  const portfolioItems = [
    {
      title: "E-commerce Growth Campaign",
      category: "Social Media",
      description: "Increased online sales by 300% for a fashion retailer through targeted social media campaigns.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      link: "#"
    },
    {
      title: "Local Business SEO Success",
      category: "SEO",
      description: "Helped a local restaurant rank #1 for key search terms, increasing foot traffic by 150%.",
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=600&h=400&fit=crop",
      link: "#"
    },
    {
      title: "B2B Lead Generation",
      category: "Content Marketing",
      description: "Generated 500+ qualified leads for a software company through strategic content marketing.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      link: "#"
    },
    {
      title: "Brand Awareness Campaign",
      category: "Digital Advertising",
      description: "Boosted brand recognition by 250% for a startup through multi-channel advertising.",
      image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&h=400&fit=crop",
      link: "#"
    },
    {
      title: "Mobile App Marketing",
      category: "App Marketing",
      description: "Achieved 100K+ app downloads in 3 months for a fitness app through targeted campaigns.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
      link: "#"
    },
    {
      title: "Email Marketing Success",
      category: "Email Marketing",
      description: "Improved email open rates by 180% and conversions by 120% for an online service.",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop",
      link: "#"
    }
  ];

  return (
    <section id="media" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Portfolio</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our successful campaigns and see how we've helped businesses achieve their digital marketing goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden border-0 shadow-card hover:shadow-elegant transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button 
                    size="sm" 
                    className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30"
                    variant="outline"
                  >
                    <Play className="h-4 w-4 mr-2" />
                    View Case Study
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                    {item.category}
                  </span>
                  <ExternalLink className="h-4 w-4 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-white"
          >
            View All Case Studies
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Media;