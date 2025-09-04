import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, DollarSign, Users } from "lucide-react";
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/use-scroll-animation";

const Career = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: positionsRef, visibleItems } = useStaggeredAnimation(6, 100);
  
  const benefits = [
    "Competitive salary and performance bonuses",
    "Flexible working hours and remote work options",
    "Health insurance and wellness programs",
    "Professional development and training opportunities",
    "Creative and collaborative work environment",
    "Latest tools and technology at your disposal"
  ];

  const openPositions = [
    {
      title: "Senior Digital Marketing Specialist",
      department: "Marketing",
      location: "New York, NY",
      type: "Full-time",
      salary: "$70,000 - $90,000",
      description: "Lead digital marketing campaigns and drive growth strategies for our diverse client portfolio."
    },
    {
      title: "Social Media Manager",
      department: "Social Media",
      location: "Los Angeles, CA",
      type: "Full-time",
      salary: "$55,000 - $70,000",
      description: "Create and execute social media strategies that build brand awareness and engage communities."
    },
    {
      title: "SEO Analyst",
      department: "SEO",
      location: "Remote",
      type: "Full-time",
      salary: "$60,000 - $75,000",
      description: "Optimize websites and content to improve search engine rankings and drive organic traffic."
    },
    {
      title: "Content Creator",
      department: "Content",
      location: "Chicago, IL",
      type: "Full-time",
      salary: "$50,000 - $65,000",
      description: "Develop compelling content across various channels to support marketing objectives."
    },
    {
      title: "PPC Campaign Manager",
      department: "Advertising",
      location: "Austin, TX",
      type: "Full-time",
      salary: "$65,000 - $80,000",
      description: "Manage and optimize paid advertising campaigns across Google Ads, Facebook, and other platforms."
    },
    {
      title: "Marketing Data Analyst",
      department: "Analytics",
      location: "Remote",
      type: "Full-time",
      salary: "$70,000 - $85,000",
      description: "Analyze marketing data to provide insights and recommendations for campaign optimization."
    }
  ];

  return (
    <section id="career" className="py-20 bg-muted/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className={`text-center mb-16 transition-all duration-700 ${titleVisible ? 'animate-fade-in' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Join Our Team</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Be part of a dynamic team that's shaping the future of digital marketing. 
            We're always looking for talented individuals who share our passion for innovation.
          </p>
        </div>

        {/* Company Culture */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold mb-6">Why Work With Us?</h3>
            <p className="text-lg text-muted-foreground mb-6">
              At TruliyoDigital, we believe our people are our greatest asset. We foster a culture 
              of creativity, collaboration, and continuous learning where everyone can thrive 
              and make a meaningful impact.
            </p>
            <div className="grid grid-cols-1 gap-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gradient-card rounded-2xl p-8 text-center shadow-card">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Team Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-muted-foreground">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">4.8/5</div>
                <div className="text-muted-foreground">Employee Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">92%</div>
                <div className="text-muted-foreground">Retention Rate</div>
              </div>
            </div>
          </div>
        </div>

        {/* Open Positions */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-center mb-12">Open Positions</h3>
          <div ref={positionsRef} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {openPositions.map((position, index) => (
              <Card 
                key={index} 
                className={`border-0 shadow-card hover:shadow-elegant hover:-translate-y-2 transition-all duration-500 group cursor-pointer ${
                  visibleItems.has(index) ? 'animate-scale-in' : 'opacity-0 translate-y-8'
                }`}
              >
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">{position.title}</CardTitle>
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-sm font-medium group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      {position.department}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {position.location}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {position.type}
                    </div>
                    <div className="flex items-center">
                      <DollarSign className="h-4 w-4 mr-1" />
                      {position.salary}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    {position.description}
                  </CardDescription>
                  <Button 
                    className="w-full bg-gradient-primary hover:opacity-90 transition-opacity"
                  >
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Don't see a perfect fit? We're always interested in hearing from talented individuals.
          </p>
          <Button 
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-white"
          >
            Send Your Resume
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Career;