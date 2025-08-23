import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";
import { useTypingAnimation } from "@/hooks/useTypingAnimation";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useMagneticHover } from "@/hooks/useInteractiveEffects";
import { useIsMobile } from "@/hooks/use-mobile";
import { useEffect, useRef, useState } from "react";
import { useFrameLoop } from "@/utils/animation";
import { downloadResume } from "@/utils/resume";

const HeroSection = () => {
  const ref = useScrollReveal();
  const isMobile = useIsMobile();
  const [isLandscape, setIsLandscape] = useState(false);
  
  // Mobile-optimized role animations
  const roles = ["Future Data Scientist", "AI/ML Expert", "Cloud Enthusiast"];
  const { currentText } = useTypingAnimation(
    roles, 
    isMobile ? 120 : 150, // Faster on mobile
    isMobile ? 80 : 100,  // Shorter pauses on mobile
    isMobile ? 700 : 900  // Quicker transitions on mobile
  );

  // Detect orientation changes for mobile layout adjustments
  useEffect(() => {
    const checkOrientation = () => {
      setIsLandscape(window.innerHeight < window.innerWidth && window.innerHeight < 600);
    };
    
    checkOrientation();
    window.addEventListener('orientationchange', checkOrientation);
    window.addEventListener('resize', checkOrientation);
    
    return () => {
      window.removeEventListener('orientationchange', checkOrientation);
      window.removeEventListener('resize', checkOrientation);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const heroRef = useRef<HTMLDivElement>(null);
  const parallaxRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  // Mobile-optimized parallax effect (reduced complexity on mobile)
  useFrameLoop(() => {
    if (isMobile) return; // Disable parallax on mobile for better performance
    
    const scrollY = window.scrollY;
    parallaxRefs.current.forEach((el) => {
      if (el) {
        const speed = parseFloat(el.dataset.parallaxSpeed || '0.1');
        const y = scrollY * speed;
        el.style.transform = `translate3d(0, ${y}px, 0)`;
      }
    });
  }, [isMobile]);
  
  // Add smooth fade-in effect on mount
  useEffect(() => {
    if (heroRef.current) {
      heroRef.current.classList.add('smooth-fade-in');
    }
  }, []);

  // Perfectly balanced magnetic hover effect with medium-speed responsiveness
  useMagneticHover('.gradient-button', { 
    maxTranslatePx: isMobile ? 6 : 15,        // Perfect translation range
    intensity: isMobile ? 1.2 : 2.0,         // Enhanced magnetic pull strength
    damping: isMobile ? 0.15 : 0.08,         // Medium-speed balanced damping
    attractionRadius: isMobile ? 1.5 : 2.2,  // Enhanced magnetic field radius
    magneticStrength: isMobile ? 1.8 : 2.5   // Core magnetic force multiplier
  });

  return (
    <section 
      id="hero"
      ref={ref} 
      className={`
        relative flex items-center justify-center px-4 scroll-reveal overflow-hidden
        ${isLandscape ? 'min-h-[100svh] py-8' : 'min-h-[100svh] sm:min-h-screen'}
        ${isMobile ? 'pt-safe-area-inset-top pb-safe-area-inset-bottom' : ''}
      `}
    >
      {/* Mobile-Optimized Background Effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-background via-muted/10 to-background -z-10" />
      
      {/* Conditional gradient orbs - simplified on mobile */}
      {!isMobile && (
        <>
          <div 
            ref={el => parallaxRefs.current[0] = el}
            data-parallax-speed="0.05"
            className="fixed top-1/4 left-1/4 w-64 h-64 bg-gradient-purple/20 rounded-full blur-3xl animate-pulse -z-10" 
          />
          <div 
            ref={el => parallaxRefs.current[1] = el}
            data-parallax-speed="0.1"
            className="fixed bottom-1/4 right-1/4 w-96 h-96 bg-gradient-pink/20 rounded-full blur-3xl animate-pulse delay-1000 -z-10" 
          />
        </>
      )}
      
      {/* Mobile-friendly gradient orbs */}
      {isMobile && (
        <>
          <div className="fixed top-1/3 left-1/4 w-32 h-32 bg-gradient-purple/10 rounded-full blur-2xl -z-10" />
          <div className="fixed bottom-1/3 right-1/4 w-48 h-48 bg-gradient-pink/10 rounded-full blur-2xl -z-10" />
        </>
      )}
      
      <div ref={heroRef} className="relative z-10 max-w-6xl mx-auto text-center px-4 w-full">
        {/* Hero entrance animation */}
        <div id="hero-anim-anchor" className="opacity-0" />
        
        {/* Avatar - Mobile optimized sizing */}
        <div className={`${isLandscape ? 'mb-4' : 'mb-6 sm:mb-8'} smooth-transform`}>
          {/* Add your avatar here */}
        </div>
        
        {/* Mobile-Optimized Main Heading with Fluid Typography */}
        <div className={`${isLandscape ? 'mb-3' : 'mb-4 sm:mb-6'}`} id="hero-title">
          <h1 className="
            text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl
            font-light leading-tight
            text-secondary
            ${isLandscape ? 'mb-1' : 'mb-2'}
          ">
            Hello, I'm{" "}
            <span className="gradient-text font-bold inline-block text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              Nishant Kumar
            </span>
          </h1>
        </div>
        
        {/* Mobile-Optimized Animated Tagline with Fluid Heights */}
        <div className={`
          flex flex-col items-center justify-center
          ${isLandscape 
            ? 'h-[120px] mb-4' 
            : 'h-[180px] xs:h-[200px] sm:h-[200px] md:h-[150px] mb-6 sm:mb-8'
          }
        `} id="hero-tagline">
          <h2 className="
            text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
            font-bold leading-tight
            ${isLandscape ? 'mb-2' : 'mb-3 sm:mb-4'}
          ">
            <span className="gradient-text inline-block min-h-[1.2em] break-words px-2">
              {currentText}
              <span className="animate-pulse">|</span>
            </span>
          </h2>
          <p className="
            text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl
            text-muted-foreground max-w-4xl mx-auto leading-relaxed px-4
            ${isLandscape ? 'text-xs' : ''}
          ">
            Generative AI & Cloud (AWS | GCP) | Python • AI/ML • LLMs • MLOps
          </p>
        </div>
        
        {/* Mobile-Optimized CTA Buttons with Touch-Friendly Design */}
        <div className={`
          flex flex-col gap-3 sm:gap-4 justify-center items-center
          ${isLandscape ? 'mb-8' : 'mb-12 sm:mb-16'}
          ${isMobile ? '' : 'sm:flex-row'}
        `} id="hero-ctas">
          <Button 
            size={isMobile ? "default" : "lg"}
            className="
              gradient-button transition-all duration-300
              text-base sm:text-lg font-semibold
              px-6 py-3 sm:px-8 sm:py-6
              rounded-full w-full max-w-xs sm:w-auto
              min-h-[48px] touch-manipulation
              hover:scale-105 active:scale-95
              shadow-lg hover:shadow-xl
            "
            onClick={() => scrollToSection('projects')}
          >
            View Projects
            <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
          <Button 
            size={isMobile ? "default" : "lg"}
            variant="outline" 
            className="
              text-base sm:text-lg font-semibold
              px-6 py-3 sm:px-8 sm:py-6
              rounded-full w-full max-w-xs sm:w-auto
              min-h-[48px] touch-manipulation
              border-gradient-purple/30 hover:border-gradient-purple/60 
              hover:bg-gradient-purple/10 transition-all duration-300
              hover:scale-105 active:scale-95
              shadow-md hover:shadow-lg
              backdrop-blur-sm
            "
            onClick={downloadResume}
          >
            <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            Download Resume
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;