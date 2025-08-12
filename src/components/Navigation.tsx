import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Download } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useActiveSection } from "@/hooks/useScrollReveal";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { activeSection } = useActiveSection();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Certifications", href: "#certifications" },
    { label: "Contact", href: "#contact" }
  ];

  const setActiveLink = (targetHref: string) => {
    const navLinks = document.querySelectorAll<HTMLElement>('[data-nav-link]');
    navLinks.forEach((link) => {
      const dataHref = link.getAttribute('data-nav-link');
      if (!dataHref) return;
      if (dataHref === targetHref) {
        link.classList.add('nav-active');
      } else {
        link.classList.remove('nav-active');
      }
    });
  };

  const scrollToSection = (href: string) => {
    setActiveLink(href);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-background/60 backdrop-blur-xl border-b border-border/30 shadow-lg shadow-primary/5' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a 
            href="#" 
            className="text-2xl font-bold gradient-text hover:scale-105 transition-transform duration-300"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            NK
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                data-nav-link={item.href}
                className="text-secondary hover:text-foreground transition-colors duration-300 relative group nav-link"
              >
                {item.label}
                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-gradient-purple to-gradient-pink scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
            ))}
            
            <ThemeToggle />
            
            <Button size="sm" className="gradient-button">
              <Download className="h-4 w-4 mr-2" />
              Resume
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center hover:bg-muted/70 transition-colors duration-300"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/80 backdrop-blur-xl border-b border-border/30 shadow-xl">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  data-nav-link={item.href}
                  className="block w-full text-left text-secondary hover:text-foreground transition-colors duration-300 py-2 nav-link"
                >
                  {item.label}
                </button>
              ))}
              
              <div className="flex items-center gap-4 mt-4">
                <ThemeToggle />
                <Button size="sm" className="gradient-button flex-1">
                  <Download className="h-4 w-4 mr-2" />
                  Download Resume
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;