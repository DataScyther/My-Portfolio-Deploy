import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Download } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useActiveSection } from "@/hooks/useScrollReveal";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { activeSection } = useActiveSection();

  // Update navigation active states when activeSection changes
  useEffect(() => {
    const navLinks = document.querySelectorAll<HTMLElement>('[data-nav-link]');
    navLinks.forEach((link) => {
      const dataHref = link.getAttribute('data-nav-link');
      if (!dataHref) return;
      
      // Remove active from all links first
      link.classList.remove('nav-active');
      
      // Add active to the current section link
      if (dataHref === `#${activeSection}`) {
        link.classList.add('nav-active');
      }
    });
  }, [activeSection]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isOpen && !target.closest('.mobile-menu-container')) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      // Prevent body scroll when mobile menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navItems = [
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
    setIsOpen(false);
  };

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-6xl px-4">
      <nav className={`rounded-full transition-all duration-300 ${
        scrolled 
          ? 'bg-background/30 dark:bg-background/30 backdrop-blur-lg border border-border/20 shadow-xl' 
          : 'bg-background/20 dark:bg-background/20 backdrop-blur-md border border-border/10'
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16 sm:h-16">
            {/* Logo */}
            <a 
              href="#" 
              className="text-2xl sm:text-3xl font-bold gradient-text hover:scale-105 transition-transform duration-300 touch-manipulation ml-2"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              NK
            </a>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  data-nav-link={item.href}
                  className="text-secondary hover:text-foreground nav-link px-4 py-2 transition-all duration-300 rounded-full hover:bg-muted/20"
                >
                  {item.label}
                  <div className="nav-underline"></div>
                </button>
              ))}
              
              <div className="flex items-center space-x-2 ml-2">
                <ThemeToggle />
                <Button size="sm" className="gradient-button px-6 py-2 rounded-full">
                  <Download className="h-4 w-4 mr-2" />
                  Resume
                </Button>
              </div>
            </div>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-12 h-12 rounded-full bg-muted/30 hover:bg-muted/50 active:bg-muted/70 flex items-center justify-center transition-all duration-300 touch-manipulation backdrop-blur-sm"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              <div className={`transition-all duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </div>
            </button>
          </div>
          
          {/* Mobile Navigation */}
          <div className={`lg:hidden mobile-menu-container transition-all duration-500 ease-in-out ${
            isOpen 
              ? 'opacity-100 translate-y-2' 
              : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}>
            <div className="absolute top-full left-0 right-0 bg-background/90 dark:bg-background/90 backdrop-blur-xl rounded-2xl border border-border/20 shadow-2xl overflow-hidden mt-2">
              <div className="px-4 py-6 space-y-2">
                {navItems.map((item, index) => (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(item.href)}
                    data-nav-link={item.href}
                    className="block w-full text-left text-secondary hover:text-foreground py-4 px-6 hover:bg-muted/20 transition-all duration-300 nav-link touch-manipulation"
                    style={{ 
                      animationDelay: `${index * 50}ms`,
                      transform: isOpen ? 'translateX(0)' : 'translateX(-20px)',
                      opacity: isOpen ? 1 : 0,
                      transition: `all 300ms ease-out ${index * 50}ms`
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-medium">{item.label}</span>
                      <div className="nav-underline mobile-underline"></div>
                    </div>
                  </button>
                ))}
                
                <div className="flex flex-col gap-4 mt-4 pt-4 border-t border-border/20 mx-6 pb-2">
                  <div className="flex items-center justify-center">
                    <ThemeToggle />
                  </div>
                  <Button size="lg" className="gradient-button w-full py-4 text-lg font-semibold rounded-full">
                    <Download className="h-5 w-5 mr-3" />
                    Download Resume
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;