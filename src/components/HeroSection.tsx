import { Button } from "@/components/ui/button";
import { Github, Linkedin, Youtube, Mail, Download, ArrowRight } from "lucide-react";
import { useTypingAnimation } from "@/hooks/useTypingAnimation";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useEffect, useState } from "react";
import DotGrid from "./DotGrid";
const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const ref = useScrollReveal();
  const roles = ["Future Data Scientist", "AI/ML Specialist", "Cloud Enthusiast"];
  const {
    currentText
  } = useTypingAnimation(roles, 150, 100, 2000);
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <section ref={ref} className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden scroll-reveal" style={{
    transform: `translateY(${scrollY * 0.5}px)` // Parallax effect
  }}>
      {/* Interactive Grid Background */}
      <div className="absolute inset-0 w-full h-full">
        <DotGrid
          dotSize={8}
          gap={20}
          baseColor="hsl(var(--muted-foreground) / 0.3)"
          activeColor="hsl(var(--primary))"
          proximity={100}
          shockRadius={200}
          shockStrength={3}
          resistance={600}
          returnDuration={1.2}
        />
      </div>
      
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/40 to-background/80"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-purple/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-pink/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Avatar */}
        <div className="mb-8 floating">
          
        </div>
        
        {/* Main Heading */}
        <div className="mb-6 slide-in-up">
          <h1 className="text-2xl md:text-3xl font-light mb-2 text-secondary">
            Hello, I'm 
            <span className="gradient-text font-bold"> Nishant Kumar</span>
          </h1>
        </div>
        
        {/* Animated Tagline */}
        <div className="mb-8 slide-in-up" style={{
        animationDelay: '0.2s'
      }}>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
            <span className="gradient-text">
              {currentText}
              <span className="animate-pulse">|</span>
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-secondary max-w-4xl mx-auto leading-relaxed">
            Generative AI & Cloud (AWS | GCP) | Python • AI/ML • LLMs • MLOps
          </p>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 slide-in-up" style={{
        animationDelay: '0.4s'
      }}>
          <Button size="lg" className="gradient-button text-lg px-8 py-6 rounded-full">
            View Projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-full border-gradient-purple/30 hover:border-gradient-purple/60 hover:bg-gradient-purple/10">
            <Download className="mr-2 h-5 w-5" />
            Download Resume
          </Button>
        </div>
        
        {/* Social Links */}
        <div className="flex justify-center gap-6 slide-in-up" style={{
        animationDelay: '0.6s'
      }}>
          <a href="https://linkedin.com/in/nishantkumarakadatascyther" className="w-12 h-12 rounded-full bg-muted/50 flex items-center justify-center hover:bg-gradient-purple/20 transition-all duration-300 hover:scale-110" target="_blank" rel="noopener noreferrer">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="https://github.com/DataScyther" className="w-12 h-12 rounded-full bg-muted/50 flex items-center justify-center hover:bg-gradient-purple/20 transition-all duration-300 hover:scale-110" target="_blank" rel="noopener noreferrer">
            <Github className="h-5 w-5" />
          </a>
          <a href="#" className="w-12 h-12 rounded-full bg-muted/50 flex items-center justify-center hover:bg-gradient-purple/20 transition-all duration-300 hover:scale-110" target="_blank" rel="noopener noreferrer">
            <Youtube className="h-5 w-5" />
          </a>
          <a href="mailto:ishantkumaryts@gmail.com" className="w-12 h-12 rounded-full bg-muted/50 flex items-center justify-center hover:bg-gradient-purple/20 transition-all duration-300 hover:scale-110">
            <Mail className="h-5 w-5" />
          </a>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 slide-in-up" style={{
        animationDelay: '0.8s'
      }}>
          <div className="w-6 h-10 border-2 border-gradient-purple/50 rounded-full flex justify-center hover:border-gradient-purple hover:scale-110 hover:shadow-lg hover:shadow-gradient-purple/30 transition-all duration-300 cursor-pointer group">
            <div className="w-1 h-3 bg-gradient-purple rounded-full mt-2 animate-bounce group-hover:animate-pulse group-hover:bg-gradient-pink"></div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;