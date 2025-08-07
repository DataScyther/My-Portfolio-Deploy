import { Button } from "@/components/ui/button";
import { Github, Linkedin, Youtube, Mail, Download, ArrowRight, Eye } from "lucide-react";
import { useTypingAnimation } from "@/hooks/useTypingAnimation";
import { motion } from "framer-motion";
import ParticleBackground from "./ParticleBackground";

const HeroSection = () => {
  const roles = ["AI/ML Specialist", "Data Scientist", "Tech Creator"];
  const { currentText } = useTypingAnimation(roles, 150, 100, 2000);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background" style={{ zIndex: 2 }} />
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" style={{ zIndex: 3 }} />
      
      {/* Content */}
      <motion.div 
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Profile Image */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl shadow-primary/20 hover:border-primary/60 transition-all duration-300">
            <img 
              src="/lovable-uploads/fc694a1f-d7e9-49ac-abd8-75a1e40a77e8.png" 
              alt="Nishant Kumar"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Name */}
        <motion.div 
          className="mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#ff4b1f] to-[#d633ff] bg-clip-text text-transparent">
              Nishant Kumar
            </span>
          </h1>
        </motion.div>

        {/* Animated Tagline */}
        <motion.div 
          className="mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-xl sm:text-2xl md:text-4xl font-light text-muted-foreground">
            <span className="text-foreground">Future</span>{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-medium">
              {currentText}
              <span className="animate-pulse text-primary">|</span>
            </span>
          </h2>
        </motion.div>

        {/* Description */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Passionate about transforming data into insights and building intelligent solutions 
            with <span className="text-primary font-medium">Generative AI</span>, 
            <span className="text-primary font-medium"> Cloud Computing</span>, and 
            <span className="text-primary font-medium"> Machine Learning</span>.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="lg" 
              className="relative px-8 py-6 text-lg font-medium bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white border-0 rounded-full shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 transition-all duration-300 group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Eye className="mr-2 h-5 w-5" />
              View Projects
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="lg" 
              variant="outline"
              className="px-8 py-6 text-lg font-medium border-2 border-primary/30 hover:border-primary text-foreground hover:bg-primary/5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Download Resume
            </Button>
          </motion.div>
        </motion.div>

        {/* Social Links */}
        <motion.div 
          className="flex justify-center gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          {[
            { href: "https://linkedin.com/in/nishantkumarakadatascyther", icon: Linkedin, label: "LinkedIn" },
            { href: "https://github.com/DataScyther", icon: Github, label: "GitHub" },
            { href: "#", icon: Youtube, label: "YouTube" },
            { href: "mailto:ishantkumaryts@gmail.com", icon: Mail, label: "Email" }
          ].map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target={social.href.startsWith('http') ? "_blank" : undefined}
              rel={social.href.startsWith('http') ? "noopener noreferrer" : undefined}
              className="w-12 h-12 rounded-full bg-muted/50 backdrop-blur-sm flex items-center justify-center hover:bg-primary/10 hover:border-primary/30 border border-transparent transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                transition: { delay: 1.4 + index * 0.1 }
              }}
            >
              <social.icon className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors duration-300" />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
        >
          <div className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer">
            <span className="text-sm font-medium">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center">
              <motion.div 
                className="w-1 h-3 bg-current rounded-full mt-2"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;