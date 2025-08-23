import React from "react";
import { Github, Linkedin, Youtube, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://www.linkedin.com/in/datascyther/",
      label: "LinkedIn"
    },
    {
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com/DataScyther",
      label: "GitHub"
    },
    {
      icon: <Youtube className="h-5 w-5" />,
      href: "https://www.youtube.com/@Mighty-TechShorts",
      label: "YouTube"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      href: "mailto:ishantkumaryts@gmail.com",
      label: "Email"
    }
  ];

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Certifications", href: "#certifications" },
    { label: "Contact", href: "#contact" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-muted/20 border-t border-border/50 mt-16 sm:mt-20">
      <div className="max-w-6xl mx-auto px-4 py-8 sm:py-12">
        <div className="grid gap-8 sm:gap-6 md:grid-cols-3">
          {/* Brand Section - Enhanced Mobile Layout */}
          <div className="text-center md:text-left">
            <div className="text-xl sm:text-2xl font-bold gradient-text mb-4">Nishant Kumar</div>
            <p className="text-secondary mb-4 leading-relaxed text-sm sm:text-base px-2 md:px-0">
              Future Data Scientist passionate about AI/ML, cloud computing, and creating 
              educational content to help others learn and grow in technology.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-muted/50 flex items-center justify-center hover:bg-gradient-purple/20 transition-all duration-300 hover:scale-110 active:scale-95 will-change-transform touch-manipulation focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:ring-offset-2"
                  aria-label={link.label}
                >
                  <div className="h-4 w-4 sm:h-5 sm:w-5">
                    {React.cloneElement(link.icon, { className: "h-full w-full" })}
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links - Enhanced Mobile Grid */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold mb-4 text-base sm:text-lg">Quick Links</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-1 gap-2">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className="text-secondary hover:text-foreground transition-colors duration-300 text-sm sm:text-base py-2 px-3 rounded touch-manipulation will-change-transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:ring-offset-2"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
          
          {/* Contact Info - Enhanced Mobile Layout */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold mb-4 text-base sm:text-lg">Get In Touch</h3>
            <div className="space-y-3 text-secondary">
              <div>
                <div className="font-medium text-sm sm:text-base">Email</div>
                <a 
                  href="mailto:ishantkumaryts@gmail.com"
                  className="hover:text-foreground transition-colors duration-300 text-sm break-all sm:break-normal touch-manipulation focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:ring-offset-2 rounded"
                >
                  ishantkumaryts@gmail.com
                </a>
              </div>
              <div>
                <div className="font-medium text-sm sm:text-base">YouTube Channel</div>
                <a 
                  href="https://www.youtube.com/@Mighty-TechShorts"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors duration-300 text-sm touch-manipulation focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:ring-offset-2 rounded"
                >
                  Mighty-TechShorts
                </a>
              </div>
              <div>
                <div className="font-medium text-sm sm:text-base">Focus Areas</div>
                <div className="text-xs sm:text-sm leading-relaxed">
                  Data Science • AI/ML • Cloud Computing • Content Creation
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section - Enhanced Mobile Layout */}
        <div className="border-t border-border/50 mt-8 pt-6 sm:pt-8 flex flex-col items-center space-y-4 md:flex-row md:justify-between md:space-y-0">
          <div className="text-secondary text-xs sm:text-sm text-center md:text-left">
            © {currentYear} Nishant Kumar. All rights reserved.
          </div>
          
          <div className="flex items-center text-secondary text-xs sm:text-sm">
            <span>Made with</span>
            <Heart className="h-3 w-3 sm:h-4 sm:w-4 mx-1 text-gradient-pink" />
            <span>using React & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;