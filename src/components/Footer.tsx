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
      href: "#",
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
    <footer className="bg-muted/20 border-t border-border/50 mt-20">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <div className="text-2xl font-bold gradient-text mb-4">Nishant Kumar</div>
            <p className="text-secondary mb-4 leading-relaxed">
              Future Data Scientist passionate about AI/ML, cloud computing, and creating 
              educational content to help others learn and grow in technology.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center hover:bg-gradient-purple/20 transition-all duration-300 hover:scale-110"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-secondary hover:text-foreground transition-colors duration-300"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-3 text-secondary">
              <div>
                <div className="font-medium">Email</div>
                <a 
                  href="mailto:ishantkumaryts@gmail.com"
                  className="hover:text-foreground transition-colors duration-300"
                >
                  ishantkumaryts@gmail.com
                </a>
              </div>
              <div>
                <div className="font-medium">YouTube Channel</div>
                <a 
                  href="#"
                  className="hover:text-foreground transition-colors duration-300"
                >
                  Mighty-TechShorts
                </a>
              </div>
              <div>
                <div className="font-medium">Focus Areas</div>
                <div className="text-sm">
                  Data Science • AI/ML • Cloud Computing • Content Creation
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-border/50 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-secondary text-sm mb-4 md:mb-0">
            © {currentYear} Nishant Kumar. All rights reserved.
          </div>
          
          <div className="flex items-center text-secondary text-sm">
            <span>Made with</span>
            <Heart className="h-4 w-4 mx-1 text-gradient-pink" />
            <span>using React & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;