import { Button } from "@/components/ui/button";
import { Github, Linkedin, Youtube, Mail, Download, ArrowRight } from "lucide-react";
import { useTypingAnimation } from "@/hooks/useTypingAnimation";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useEffect, useState } from "react";
import anime from "animejs";
import { useEffect as useEffectReact } from "react";
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

  const handleScrollClick = () => {
    const nextSection = document.getElementById('about');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollBy({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    }
  };

  // Hero entrance timeline
  useEffect(() => {
    const anchor = document.getElementById('hero-anim-anchor');
    if (!anchor) return;
    anime
      .timeline({ easing: 'easeOutQuad', duration: 500 })
      .add({ targets: '#hero-title', opacity: [0, 1], translateY: [20, 0] })
      .add({ targets: '#hero-tagline', opacity: [0, 1], translateY: [20, 0] }, '-=250')
      .add({ targets: '#hero-ctas', opacity: [0, 1], translateY: [20, 0] }, '-=250')
      .add({ targets: '#hero-socials', opacity: [0, 1], translateY: [20, 0] }, '-=250');
  }, []);

  // Restore magnetic hover effect for CTAs per user request
  useEffect(() => {
    const id = window.setTimeout(() => {
      useMagneticHover('.gradient-button', { maxTranslatePx: 5 });
    }, 0);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <section 
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
        
        {/* Bottom Section - Social Links and Scroll Indicator */}
        <div className="flex flex-col items-center justify-center space-y-8">
          {/* Social Links */}
          <div className="flex justify-center gap-6 slide-in-up" id="hero-socials" style={{
            animationDelay: '0.6s'
          }}>
            <a href="https://www.linkedin.com/in/datascyther/" className="w-12 h-12 rounded-full bg-muted/50 flex items-center justify-center hover:bg-gradient-purple/20 transition-all duration-300 hover:scale-110" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="https://github.com/DataScyther" className="w-12 h-12 rounded-full bg-muted/50 flex items-center justify-center hover:bg-gradient-purple/20 transition-all duration-300 hover:scale-110" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://www.youtube.com/@Mighty-TechShorts" className="w-12 h-12 rounded-full bg-muted/50 flex items-center justify-center hover:bg-gradient-purple/20 transition-all duration-300 hover:scale-110" target="_blank" rel="noopener noreferrer">
              <Youtube className="h-5 w-5" />
            </a>
            <a href="mailto:ishantkumaryts@gmail.com" className="w-12 h-12 rounded-full bg-muted/50 flex items-center justify-center hover:bg-gradient-purple/20 transition-all duration-300 hover:scale-110">
              <Mail className="h-5 w-5" />
            </a>
          </div>
          
          {/* Scroll Indicator */}
          <div 
            className="slide-in-up cursor-pointer" 
            onClick={handleScrollClick}
            style={{ animationDelay: '0.8s' }}
          >
            <div className="w-6 h-10 border-2 border-gradient-purple/50 rounded-full flex justify-center hover:border-gradient-purple hover:scale-110 hover:shadow-lg hover:shadow-gradient-purple/30 transition-all duration-300 group">
              <div className="w-1 h-3 bg-gradient-purple rounded-full mt-2 animate-bounce group-hover:animate-pulse group-hover:bg-gradient-pink"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;