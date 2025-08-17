import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Download } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useActiveSection } from "@/hooks/useScrollReveal";
import styles from './Navigation.module.css';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { activeSection } = useActiveSection();
  const progressBarRef = useRef<HTMLDivElement>(null);

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

  // Update progress bar width on scroll
  useEffect(() => {
    const updateProgress = () => {
      if (!progressBarRef.current) return;
      
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop || document.body.scrollTop;
      const scrollHeight = doc.scrollHeight - doc.clientHeight;
      const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      
      progressBarRef.current.style.width = `${progress}%`;
    };

    // Throttle the scroll handler
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateProgress();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    updateProgress();
    
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-background/60 backdrop-blur-xl border-b border-border/30 shadow-lg shadow-primary/5' 
        : 'bg-transparent'
    }`}>
      {/* Scroll progress bar */}
      <div className={styles.progressContainer}>
        <div ref={progressBarRef} className={styles.progressBar} />
      </div>
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
                className="text-secondary hover:text-foreground nav-link"
              >
                {item.label}
                <div className="nav-underline"></div>
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
                  className="block w-full text-left text-secondary hover:text-foreground py-2 nav-link"
                >
                  {item.label}
                  <div className="nav-underline"></div>
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