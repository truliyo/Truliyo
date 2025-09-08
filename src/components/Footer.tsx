import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import logo from "@/assets/LOGO.png";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Our Services", href: "#services" },
    { name: "About Us", href: "#about" },
    { name: "Portfolio", href: "#media" },
    { name: "Blog", href: "#blog" },
    { name: "Careers", href: "#career" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "SEO Optimization",
    "Social Media Marketing",
    "Content Creation",
    "Analytics & Reporting",
    "Email Marketing",
    "Mobile Marketing",
  ];

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: "#", name: "Facebook" },
    { icon: <Twitter className="h-5 w-5" />, href: "#", name: "Twitter" },
    { icon: <Instagram className="h-5 w-5" />, href: "#", name: "Instagram" },
    { icon: <Linkedin className="h-5 w-5" />, href: "#", name: "LinkedIn" },
    { icon: <Youtube className="h-5 w-5" />, href: "#", name: "YouTube" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              <img
                width={90}
                height={90}
                src={logo}
                alt="logo"
                className="w-40 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain"
              />
            </h3>
            <p className="text-background/80 mb-6">
              We are a leading digital marketing agency helping businesses grow
              through innovative strategies and data-driven solutions.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-background/80">
                <Mail className="h-4 w-4 mr-3" />
                <a
                  href="mailto:hello@TruliyoDigital.com"
                  className="hover:text-primary transition-colors"
                >
                  contact@truliyo.com
                </a>
              </div>
              <div className="flex items-center text-background/80">
                <Phone className="h-4 w-4 mr-3" />
                <a
                  href="tel:+15551234567"
                  className="hover:text-primary transition-colors"
                >
                  +1 (555) 123-4567
                </a>
              </div>
              <div className="flex items-start text-background/80">
                <MapPin className="h-4 w-4 mr-3 mt-1" />
                <span>
                  123 Business Ave, Suite 100
                  <br />
                  New York, NY 10001
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-background/80 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-background/80 hover:text-primary transition-colors cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
            <p className="text-background/80 mb-4">
              Subscribe to our newsletter for the latest digital marketing tips
              and updates.
            </p>
            <div className="space-y-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-background/10 border-background/20 text-background placeholder:text-background/60"
              />
              <Button className="w-full bg-gradient-primary hover:opacity-90 transition-opacity">
                Subscribe
              </Button>
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <p className="text-sm text-background/80 mb-3">Follow Us</p>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center text-background/80 hover:bg-primary hover:text-white transition-all duration-300"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-background/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-background/60 text-sm mb-4 md:mb-0">
              © 2023 TruliyoDigital. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-background/60 hover:text-primary transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-background/60 hover:text-primary transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-background/60 hover:text-primary transition-colors"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
