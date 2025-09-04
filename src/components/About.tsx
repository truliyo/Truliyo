import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Award, Target, Zap } from "lucide-react";
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/use-scroll-animation";

const About = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: statsRef, visibleItems: statsVisible } = useStaggeredAnimation(4, 100);
  const { ref: valuesRef, visibleItems: valuesVisible } = useStaggeredAnimation(4, 150);
  
  const stats = [
    { number: "500+", label: "Happy Clients" },
    { number: "1000+", label: "Projects Completed" },
    { number: "50+", label: "Team Members" },
    { number: "5+", label: "Years Experience" }
  ];

  const values = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Client-Focused",
      description: "We put our clients at the center of everything we do, ensuring their success is our priority."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Excellence",
      description: "We strive for excellence in every project, delivering high-quality results that exceed expectations."
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Results-Driven",
      description: "Our strategies are designed to deliver measurable results and drive real business growth."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Innovation",
      description: "We stay ahead of trends and use cutting-edge technologies to give our clients a competitive edge."
    }
  ];

  return (
    <section id="about" className="py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className={`text-center mb-16 transition-all duration-700 ${titleVisible ? 'animate-fade-in' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Us</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our mission is to provide customized and results-driven solutions that help our clients stay ahead of the competition and succeed in the digital age.
          </p>
        </div>

        {/* Stats Section */}
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`text-center transition-all duration-500 ${
                statsVisible.has(index) ? 'animate-scale-in' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2 hover:animate-bounce-gentle transition-all duration-300 cursor-default">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold mb-6">Our Story</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Truliyo Digital provides digital marketing services and technology solutions . We ace as a digital Advertising company for Google, Facebook, LinkedIn and many more platforms. Our core competence in addition to all forms of Digital Marketing includes social media strategy & management, SEO, SEM, email marketing and more.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Truliyo Digital is a leading digital marketing agency that specializes in providing top-notch SEO, PPC, and social media management services to businesses of all sizes. With a team of experienced and skilled professionals, we have helped numerous clients achieve their online marketing goals and grow their businesses.
            </p>
            <Button 
              size="lg"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-primary hover:opacity-90 transition-opacity"
            >
              Work With Us
            </Button>
          </div>
          <div className="bg-gradient-card rounded-2xl p-8 shadow-card">
            <h4 className="text-2xl font-bold mb-6 text-center">Why Choose Us?</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-muted-foreground">Proven track record of delivering results</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-muted-foreground">Customized strategies for each client</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-muted-foreground">Transparent reporting and communication</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-muted-foreground">Dedicated account management</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Values Section */}
        <div ref={valuesRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card 
              key={index} 
              className={`text-center border-0 shadow-card hover:shadow-elegant hover:-translate-y-2 transition-all duration-500 group ${
                valuesVisible.has(index) ? 'animate-scale-in' : 'opacity-0 translate-y-8'
              }`}
            >
              <CardHeader>
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-lg mb-4 mx-auto group-hover:scale-110 group-hover:animate-glow transition-all duration-300">
                  <div className="text-white">
                    {value.icon}
                  </div>
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="group-hover:text-foreground transition-colors duration-300">
                  {value.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;