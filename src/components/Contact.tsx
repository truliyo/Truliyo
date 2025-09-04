import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useForm } from "@formspree/react";

const Contact = () => {
  const { toast } = useToast();
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation();
  // 🔑 Replace with your actual Formspree form ID
  const [state, handleSubmit] = useForm("xandloqr");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  if (state.succeeded) {
    return (
      <div className="text-center p-6 bg-green-50 rounded-xl">
        <h2 className="text-xl font-semibold text-green-700">
          ✅ Thanks for contacting us!
        </h2>
        <p className="mt-2 text-gray-700">
          Our team will get in touch with you within 24 hours.
        </p>
      </div>
    );
  }

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      content: "contact@truliyo.com",
      link: "contact@truliyo.com",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      content: "+91 1234567890",
      link: "tel:+15551234567",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Address",
      content: "620 , 6th Floor, JMD megapolish, Sector 49, Gurugram, Haryana 122018",
      link: "#address",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Business Hours",
      content: "Mon-Sat: 10:30 AM - 7:30 PM\nSun: Closed",
      link: null,
    },
  ];

  return (
    <section id="contact" className="py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${
            titleVisible ? "animate-fade-in" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to take your digital marketing to the next level? Let's
            discuss your project and how we can help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mr-4 flex-shrink-0">
                    <div className="text-primary">{info.icon}</div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{info.title}</h4>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-muted-foreground hover:text-primary transition-colors whitespace-pre-line"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-muted-foreground whitespace-pre-line">
                        {info.content}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-card rounded-xl shadow-card">
              <h4 className="font-bold mb-3">Quick Response Guarantee</h4>
              <p className="text-sm text-muted-foreground">
                We typically respond to all inquiries within 2-4 hours during
                business hours. For urgent matters, please call us directly.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div
            ref={formRef}
            className={`lg:col-span-2 transition-all duration-700 ${
              formVisible ? "animate-fade-in-right" : "opacity-0 translate-x-8"
            }`}
          >
            <Card className="border-0 shadow-card hover:shadow-elegant transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as
                  possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="service">Service Interested In *</Label>
                      <Select
                        onValueChange={(value) =>
                          handleChange("service", value)
                        }
                        name="service"
                      >
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="seo">SEO Optimization</SelectItem>
                          <SelectItem value="social">
                            Social Media Marketing
                          </SelectItem>
                          <SelectItem value="development">
                            Development
                          </SelectItem>
                          <SelectItem value="analytics">
                            E-commerce
                          </SelectItem>
                          <SelectItem value="Branding">
                            Branding
                          </SelectItem>
                          <SelectItem value="Web designing">Web designing</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      required
                      rows={5}
                      className="mt-1"
                      placeholder="Tell us about your project and goals..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={state.submitting}
                    className="w-full bg-gradient-primary hover:opacity-90 transition-opacity"
                  >
                    {state.submitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
