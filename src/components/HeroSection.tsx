import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";
import { useTypingAnimation } from "@/hooks/useTypingAnimation";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useMagneticHover } from "@/hooks/useInteractiveEffects";
import { useEffect, useRef } from "react";
import { useFrameLoop } from "@/utils/animation";

const HeroSection = () => {
  const ref = useScrollReveal();
  const roles = ["Future Data Scientist", "AI/ML Expert", "Cloud Enthusiast"];
  const { currentText } = useTypingAnimation(roles, 150, 100, 900);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const heroRef = useRef<HTMLDivElement>(null);
  const parallaxRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  // Add parallax effect to background elements
  useFrameLoop(() => {
    const scrollY = window.scrollY;
    parallaxRefs.current.forEach((el) => {
      if (el) {
        const speed = parseFloat(el.dataset.parallaxSpeed || '0.1');
        const y = scrollY * speed;
        el.style.transform = `translate3d(0, ${y}px, 0)`;
      }
    });
  }, []);
  
  // Add smooth fade-in effect on mount
  useEffect(() => {
    if (heroRef.current) {
      heroRef.current.classList.add('smooth-fade-in');
    }
  }, []);

  useMagneticHover('.gradient-button', { maxTranslatePx: 3 });

  return (
    <section 
      id="hero"
      ref={ref} 
      className="relative min-h-screen flex items-center justify-center px-4 scroll-reveal overflow-hidden"
    >
      {/* Background Effects - Fixed position to prevent layout shifts */}
      <div className="fixed inset-0 bg-gradient-to-br from-background via-muted/20 to-background -z-10" />
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
      
      <div ref={heroRef} className="relative z-10 max-w-6xl mx-auto text-center px-4 w-full">
        {/* Hero entrance animation */}
        <div id="hero-anim-anchor" className="opacity-0" />
        
        {/* Avatar */}
        <div className="mb-8 smooth-transform">
          {/* Add your avatar here */}
        </div>
        
        {/* Main Heading */}
        <div className="mb-6" id="hero-title">
          <h1 className="text-2xl md:text-3xl font-light mb-2 text-secondary">
            Hello, I'm 
            <span className="gradient-text font-bold smooth-hover inline-block"> Nishant Kumar</span>
          </h1>
        </div>
        
        {/* Animated Tagline */}
        <div className="mb-8 h-[200px] md:h-[150px] flex flex-col items-center justify-center" id="hero-tagline">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
            <span className="gradient-text inline-block min-h-[1.2em]">
              {currentText}
              <span className="animate-pulse">|</span>
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Generative AI & Cloud (AWS | GCP) | Python • AI/ML • LLMs • MLOps
          </p>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16" id="hero-ctas">
          <Button 
            size="lg" 
            className="gradient-button text-lg px-8 py-6 rounded-full"
            onClick={() => scrollToSection('projects')}
          >
            View Projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-lg px-8 py-6 rounded-full border-gradient-purple/30 hover:border-gradient-purple/60 hover:bg-gradient-purple/10"
          >
            <Download className="mr-2 h-5 w-5" />
            Download Resume
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;