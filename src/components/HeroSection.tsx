import { Button } from "@/components/ui/button";
import { Github, Linkedin, Youtube, Mail, Download, ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import DataSpheres from "./3D/DataSpheres";
import CursorTrail from "./3D/CursorTrail";
import ParticleBackground from "./3D/ParticleBackground";

const HeroSection = () => {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Add GSAP animations here if needed
    return () => {};
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden perspective-container"
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 data-grid opacity-30"></div>
      <ParticleBackground />
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background"></div>
      
      {/* 3D Holographic Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-purple/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-pink/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-gradient-orange/20 rounded-full blur-2xl animate-pulse delay-500 transform -translate-x-1/2 -translate-y-1/2"></div>
      
      {/* 3D Data Spheres */}
      <DataSpheres />
      
      {/* Cursor Trail Effect */}
      <CursorTrail />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Left Side - Text Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Greeting Header */}
            <div className="text-left">
              <motion.h1 
                className="text-2xl md:text-3xl font-light mb-2 text-secondary"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Hello! I'm{" "}
                <span className="holographic-text font-bold text-4xl md:text-5xl block mt-2">
                  Nishant Kumar
                </span>
              </motion.h1>
              
              <motion.h2 
                className="text-xl md:text-2xl gradient-text font-semibold mt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Future Data Scientist & AI/ML Innovator
              </motion.h2>
            </div>

            {/* Intro Paragraph */}
            <motion.p 
              className="text-lg md:text-xl text-secondary leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              I specialize in transforming complex datasets into actionable insights and building AI-driven solutions. 
              Skilled in Python, SQL, Tableau, Power BI, AWS, and GCP, I focus on{" "}
              <span className="gradient-text font-semibold">Generative AI, LLMs, and MLOps</span> — 
              turning data into superpowers.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Button size="lg" className="gradient-button text-lg px-8 py-6 rounded-full magnetic-hover">
                Let's Talk
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6 rounded-full glass-card border-gradient-purple/30 hover:border-gradient-purple/60"
              >
                <Download className="mr-2 h-5 w-5" />
                View Portfolio
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Side - 3D Avatar with Holographic Effects */}
          <motion.div 
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative magnetic-hover">
              <div className="w-48 h-48 lg:w-64 lg:h-64 mx-auto rounded-full metallic-border glass-card p-2 floating">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-muted/80 to-muted/40 flex items-center justify-center text-6xl lg:text-8xl font-bold holographic-text backdrop-blur-sm">
                  NK
                </div>
              </div>
              
              {/* Holographic Rings */}
              <div className="absolute inset-0 rounded-full border-2 border-gradient-purple/30 animate-spin" style={{ animationDuration: '10s' }}></div>
              <div className="absolute inset-4 rounded-full border border-gradient-pink/20 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
              
              {/* Floating Data Points */}
              <div className="absolute -top-4 -right-4 w-4 h-4 bg-gradient-purple rounded-full animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-3 h-3 bg-gradient-pink rounded-full animate-pulse delay-500"></div>
              <div className="absolute top-1/2 -right-8 w-2 h-2 bg-gradient-orange rounded-full animate-pulse delay-1000"></div>
            </div>
          </motion.div>
        </div>
        
        {/* Social Links - Centered below content */}
        <motion.div 
          className="flex justify-center gap-6 mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
        >
        
          <a 
            href="https://linkedin.com/in/nishantkumarakadatascyther" 
            className="w-14 h-14 rounded-full glass-card magnetic-hover flex items-center justify-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="h-6 w-6 text-gradient-purple" />
          </a>
          <a 
            href="https://github.com/DataScyther" 
            className="w-14 h-14 rounded-full glass-card magnetic-hover flex items-center justify-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-6 w-6 text-gradient-purple" />
          </a>
          <a 
            href="#" 
            className="w-14 h-14 rounded-full glass-card magnetic-hover flex items-center justify-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Youtube className="h-6 w-6 text-gradient-purple" />
          </a>
          <a 
            href="mailto:ishantkumaryts@gmail.com" 
            className="w-14 h-14 rounded-full glass-card magnetic-hover flex items-center justify-center"
          >
            <Mail className="h-6 w-6 text-gradient-purple" />
          </a>
        </motion.div>
        
        {/* Enhanced Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <div className="w-6 h-10 glass-card rounded-full flex justify-center magnetic-hover cursor-pointer group border border-gradient-purple/30">
            <div className="w-1 h-3 bg-gradient-purple rounded-full mt-2 animate-bounce group-hover:animate-pulse group-hover:bg-gradient-pink group-hover:shadow-lg group-hover:shadow-gradient-purple/50"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;