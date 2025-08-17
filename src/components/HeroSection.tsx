import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";
import { useTypingAnimation } from "@/hooks/useTypingAnimation";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useMagneticHover } from "@/hooks/useInteractiveEffects";

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

  useMagneticHover('.gradient-button', { maxTranslatePx: 5 });

  return (
    <section 
      id="hero"
      ref={ref} 
      className="relative min-h-screen flex items-center justify-center px-4 scroll-reveal"
    >
      {/* Background Effects - Fixed position to prevent layout shifts */}
      <div className="fixed inset-0 bg-gradient-to-br from-background via-muted/20 to-background -z-10" />
      <div className="fixed top-1/4 left-1/4 w-64 h-64 bg-gradient-purple/20 rounded-full blur-3xl animate-pulse -z-10" />
      <div className="fixed bottom-1/4 right-1/4 w-96 h-96 bg-gradient-pink/20 rounded-full blur-3xl animate-pulse delay-1000 -z-10" />
      
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Hero entrance animation */}
        <div id="hero-anim-anchor" />
        {/* Avatar */}
        <div className="mb-8 floating">
          
        </div>
        
        {/* Main Heading */}
        <div className="mb-6 slide-in-up" id="hero-title">
          <h1 className="text-2xl md:text-3xl font-light mb-2 text-secondary">
            Hello, I'm 
            <span className="gradient-text font-bold"> Nishant Kumar</span>
          </h1>
        </div>
        
        {/* Animated Tagline */}
        {/* Typing Animation Container with Fixed Height */}
        <div className="mb-8 slide-in-up h-[200px] md:h-[150px] flex flex-col items-center justify-center" id="hero-tagline">
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