import React, { useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Code, Database, Cloud, BarChart3, Brain, GitBranch } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useIsMobile } from "@/hooks/use-mobile";
import styles from "./SkillsSection.module.css";

const SkillsSection = () => {
  const isMobile = useIsMobile();
  const ref = useScrollReveal({
    threshold: isMobile ? 0.05 : 0.1,
    duration: isMobile ? 500 : 650,
    rootMargin: isMobile ? '0px 0px 0px 0px' : '0px 0px -20px 0px'
  });

  useEffect(() => {
    const section = document.getElementById('skills');
    if (!section) return;

    const isMobile = window.innerWidth < 768;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const cards = section.querySelectorAll('.skill-card');
          cards.forEach((card, index) => {
            // Faster animation timing for mobile
            const delay = isMobile ? index * 60 : index * 100;
            setTimeout(() => {
              (card as HTMLElement).style.opacity = '1';
              (card as HTMLElement).style.transform = 'translateY(0)';
            }, delay);
          });
          observer.unobserve(entry.target as Element);
        }
      });
    }, {
      threshold: isMobile ? 0.05 : 0.2, // Much lower threshold for mobile
      rootMargin: isMobile ? '0px 0px 0px 0px' : '0px 0px -20px 0px'
    });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Programming Languages",
      skills: ["Python", "SQL", "HTML", "CSS", "JavaScript"],
      color: "gradient-purple"
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "AI/ML Frameworks",
      skills: ["Scikit-learn", "Pandas", "NumPy"],
      color: "gradient-pink"
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Data Visualization",
      skills: ["Power BI", "Matplotlib", "Seaborn", "Plotly"],
      color: "gradient-orange"
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "Cloud Platforms",
      skills: ["AWS", "GCP", "Azure", "Docker"],
      color: "gradient-purple"
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Databases",
      skills: ["SQL", "MySQL", "MongoDB"],
      color: "gradient-pink"
    },
    {
      icon: <GitBranch className="h-8 w-8" />,
      title: "Tools & Technologies",
      skills: ["Git" , "GitHub", "Jupyter", "VS Code"],
      color: "gradient-orange"
    }
  ];

  const getColorClass = (color: string) => {
    switch (color) {
      case "gradient-purple":
        return "text-gradient-purple border-gradient-purple/20 bg-gradient-purple/5";
      case "gradient-pink":
        return "text-gradient-pink border-gradient-pink/20 bg-gradient-pink/5";
      case "gradient-orange":
        return "text-gradient-orange border-gradient-orange/20 bg-gradient-orange/5";
      default:
        return "text-gradient-purple border-gradient-purple/20 bg-gradient-purple/5";
    }
  };

  return (
    <section id="skills" ref={ref} className="py-16 sm:py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header - Enhanced Mobile Typography */}
        <div className="text-center mb-12 sm:mb-16 slide-in-up" style={{ animationDelay: '0ms' }}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg sm:text-xl text-secondary max-w-3xl mx-auto leading-relaxed px-2">
            A comprehensive toolkit for building intelligent solutions and data-driven applications
          </p>
        </div>
        
        {/* Skills Grid - Enhanced for Mobile */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="card-glow p-5 sm:p-6 group hover-lift skill-card opacity-0 transform translate-y-4 transition-all duration-700 ease-out will-change-transform hover:scale-[1.02] active:scale-[0.98]"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-lg ${getColorClass(category.color)} mr-3 sm:mr-4 group-hover:scale-110 transition-transform duration-300 will-change-transform flex-shrink-0`}>
                  <div className="h-6 w-6 sm:h-8 sm:w-8">
                    {React.cloneElement(category.icon, { className: "h-full w-full" })}
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold leading-tight">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1.5 text-sm rounded-full bg-muted/50 border border-border hover:border-accent/30 transition-all duration-300 cursor-default will-change-transform hover:scale-105 active:scale-95 touch-manipulation"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
        
        {/* Proficiency Bars - Enhanced Mobile Layout */}
        <div className="mt-12 sm:mt-16">
          <h3 className="text-xl sm:text-2xl font-semibold text-center mb-8 sm:mb-12">
            Core <span className="gradient-text">Proficiencies</span>
          </h3>
          
          <div className="grid gap-6 sm:gap-8 max-w-4xl mx-auto sm:grid-cols-2">
            {[
              { skill: "Python & Data Science", level: 95 },
              { skill: "Machine Learning & AI", level: 90 },
              { skill: "Data Visualization", level: 88 },
              { skill: "Generative AI & LLMs", level: 87 }
            ].map((item, index) => (
              <div key={index} className={`${styles.slideIn} ${styles[`delay-${index === 0 ? '0' : index * 100}`]} will-change-transform`}>
                <div className="flex justify-between items-center mb-3">
                  <span className="font-medium text-sm sm:text-base">{item.skill}</span>
                  <span className="text-sm font-mono text-secondary">{item.level}%</span>
                </div>
                <div className={styles.progressContainer}>
                  <div 
                    className={`${styles.progressBar} ${styles[`level-${item.level}`]}`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default SkillsSection;