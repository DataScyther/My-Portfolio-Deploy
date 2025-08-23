import React, { useState, useEffect, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Download } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useActiveSection } from "@/hooks/useScrollReveal";
import { downloadResume } from "@/utils/resume";
import { useIsMobile } from "@/hooks/use-mobile";
import ProgressBar from "@/components/ProgressBar";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState<HTMLElement | null>(null);
  const [underlineStyle, setUnderlineStyle] = useState({ width: 0, left: 0 });
  const [isMobileMenuAnimating, setIsMobileMenuAnimating] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const { activeSection } = useActiveSection();
  const resizeObserverRef = useRef<ResizeObserver | null>(null);
  const isMobile = useIsMobile();

  // Update active link and underline position
  const updateActiveLink = useCallback(() => {
    if (!navRef.current) return;
    
    const activeNavLink = navRef.current.querySelector(`[data-nav-link="#${activeSection}"]`) as HTMLElement;
    if (!activeNavLink) return;
    
    // Update active link
    if (activeLink) activeLink.classList.remove('nav-active');
    activeNavLink.classList.add('nav-active');
    setActiveLink(activeNavLink);
    
    // Update underline position with smooth transition
    if (activeNavLink) {
      const { width, left } = activeNavLink.getBoundingClientRect();
      const navRect = navRef.current.getBoundingClientRect();
      
      // Add transition class for pro motion smoothness
      const underline = navRef.current.querySelector('.nav-underline') as HTMLElement;
      if (underline) {
        underline.style.transition = 'transform 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94), width 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94)';
      }
      
      setUnderlineStyle({
        width,
        left: left - navRect.left
      });
    }
  }, [activeSection, activeLink]);
  
  // Handle mouse enter/leave for hover effects
  const handleMouseEnter = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget as HTMLElement;
    const underline = document.querySelector('.nav-underline') as HTMLElement;
    if (!underline) return;
    
    const { width, left } = target.getBoundingClientRect();
    const navRect = navRef.current?.getBoundingClientRect();
    if (!navRect) return;
    
    // Disable transition for hover effect
    underline.style.transition = 'none';
    
    setUnderlineStyle({
      width,
      left: left - navRect.left
    });
  }, []);
  
  const handleMouseLeave = useCallback(() => {
    if (!activeLink || !navRef.current) return;
    
    const { width, left } = activeLink.getBoundingClientRect();
    const navRect = navRef.current.getBoundingClientRect();
    
    // Re-enable pro motion transition for smooth return
    const underline = navRef.current.querySelector('.nav-underline') as HTMLElement;
    if (underline) {
      underline.style.transition = 'transform 200ms cubic-bezier(0.25, 0.46, 0.45, 0.94), width 200ms cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    }
    
    setUnderlineStyle({
      width,
      left: left - navRect.left
    });
  }, [activeLink]);
  
  // Handle resize and scroll events
  useEffect(() => {
    updateActiveLink();
    
    const handleResize = () => {
      updateActiveLink();
    };
    
    // Use ResizeObserver for better performance
    resizeObserverRef.current = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === navRef.current) {
          updateActiveLink();
        }
      }
    });
    
    if (navRef.current) {
      resizeObserverRef.current.observe(navRef.current);
    }
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      if (resizeObserverRef.current) {
        resizeObserverRef.current.disconnect();
      }
    };
  }, [updateActiveLink]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: globalThis.MouseEvent) => {
      const target = event.target as Element;
      if (isOpen && navRef.current && !navRef.current.contains(target)) {
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

  // Mobile menu optimization for smooth animations
  const toggleMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    
    if (isMobileMenuAnimating) return; // Prevent rapid toggling
    
    setIsMobileMenuAnimating(true);
    setIsOpen(!isOpen);
    
    // Add haptic feedback for mobile devices
    if (navigator.vibrate && isMobile) {
      navigator.vibrate(50);
    }
    
    setTimeout(() => setIsMobileMenuAnimating(false), 300);
  };

  return (
    <>
      {/* Scroll Progress Bar - Clean and Buttery Smooth */}
      <ProgressBar 
        height="sm"
        position="top"
        glowEffect={true}
        showVelocityIndicator={false}
        showDirectionIndicator={false}
        className="transition-opacity duration-200"
      />
      
      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-6xl px-4">
      <nav 
        ref={navRef}
        className={`relative rounded-full transition-all duration-200 ${
          scrolled 
            ? 'bg-background/30 dark:bg-background/30 backdrop-blur-lg border border-border/20 shadow-xl' 
            : 'bg-background/20 dark:bg-background/20 backdrop-blur-md border border-border/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16 sm:h-16">
            {/* Logo */}
            <a 
              href="#" 
              className="text-2xl sm:text-3xl font-bold gradient-text hover:scale-105 transition-transform duration-800 touch-manipulation ml-2"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              NK
            </a>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              <div className="relative flex items-center space-x-1">
                <div className="relative flex">
                  {navItems.map((item) => (
                    <button
                      key={item.label}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      onClick={() => scrollToSection(item.href)}
                      data-nav-link={item.href}
                      className="nav-item relative text-secondary hover:text-foreground px-4 py-2 transition-all duration-200 rounded-full hover:bg-muted/10 will-change-transform"
                    >
                      {item.label}
                    </button>
                  ))}
                  <div className="nav-underline-container absolute bottom-0 left-0 w-full">
                    <div 
                      className="nav-underline" 
                      style={{
                        transform: `translateX(${underlineStyle.left}px)`,
                        width: `${underlineStyle.width}px`
                      }}
                    />
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2 ml-2">
                <ThemeToggle />
                <Button 
                  size="sm" 
                  className="gradient-button px-6 py-2 rounded-full"
                  onClick={downloadResume}
                >
                  <Download className="h-4 w-4 mr-2" />
                  Resume
                </Button>
              </div>
            </div>
            
            {/* Mobile Menu Button - Enhanced for Touch */}
            <button
              onClick={toggleMenu}
              disabled={isMobileMenuAnimating}
              className="lg:hidden w-12 h-12 rounded-full bg-muted/30 hover:bg-muted/50 active:bg-muted/70 flex items-center justify-center transition-all duration-300 touch-manipulation backdrop-blur-sm will-change-transform focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:ring-offset-2 active:scale-95 disabled:opacity-50"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              <div className={`transition-all duration-300 will-change-transform ${isOpen ? 'rotate-180' : ''}`}>
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </div>
            </button>
          </div>
          
          {/* Mobile Navigation - Enhanced with Better Performance */}
          <div className={`lg:hidden mobile-menu-container transition-all duration-300 ease-out will-change-transform ${
            isOpen 
              ? 'opacity-100 translate-y-2 pointer-events-auto' 
              : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}>
            <div className="absolute top-full left-0 right-0 bg-background/95 dark:bg-background/95 backdrop-blur-xl rounded-2xl border border-border/20 shadow-2xl overflow-hidden mt-2 will-change-transform">
              <div className="px-4 py-6 space-y-2">
                {navItems.map((item, index) => (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(item.href)}
                    data-nav-link={item.href}
                    className="block w-full text-left text-secondary hover:text-foreground py-4 px-6 hover:bg-muted/20 active:bg-muted/30 transition-all duration-200 nav-link touch-manipulation will-change-transform rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:ring-offset-2 active:scale-[0.98]"
                    style={{ 
                      animationDelay: `${index * 50}ms`,
                      transform: isOpen ? 'translateX(0)' : 'translateX(-20px)',
                      opacity: isOpen ? 1 : 0,
                      transition: `all 200ms ease-out ${index * 30}ms`
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
                  <Button 
                    size="lg" 
                    className="gradient-button w-full py-4 text-lg font-semibold rounded-full will-change-transform hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:ring-offset-2"
                    onClick={downloadResume}
                  >
                    <Download className="h-5 w-5 mr-3 transition-transform duration-200 group-hover:-translate-y-0.5" />
                    Download Resume
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
    </>
  );
};

export default Navigation;