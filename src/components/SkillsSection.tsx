import { Card } from "@/components/ui/card";
import { Code, Database, Cloud, BarChart3, Brain, GitBranch } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useEffect } from "react";
import anime from "animejs";
import styles from "./SkillsSection.module.css";

const SkillsSection = () => {
  const ref = useScrollReveal();
  
  useEffect(() => {
    const section = document.getElementById('skills');
    if (!section) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const cards = section.querySelectorAll('.skill-card');
          anime({
            targets: cards,
            opacity: [0, 1],
            translateY: [16, 0],
            delay: anime.stagger(80),
            duration: 600,
            easing: 'easeOutQuad',
          });
          observer.unobserve(entry.target as Element);
        }
      });
    }, { threshold: 0.3 });
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
    <section id="skills" ref={ref} className="py-20 px-4 relative scroll-reveal">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            A comprehensive toolkit for building intelligent solutions and data-driven applications
          </p>
        </div>
        
        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="card-glow p-6 group hover-lift skill-card opacity-0"
            >
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-lg ${getColorClass(category.color)} mr-4 group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 text-sm rounded-full bg-muted/50 border border-border hover:border-accent/30 transition-colors duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
        
        {/* Proficiency Bars */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center mb-12">
            Core <span className="gradient-text">Proficiencies</span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { skill: "Python & Data Science", level: 95 },
              { skill: "Machine Learning & AI", level: 90 },
              { skill: "Cloud Computing (AWS/GCP)", level: 85 },
              { skill: "Data Visualization", level: 88 },
              { skill: "MLOps & Deployment", level: 80 },
              { skill: "Generative AI & LLMs", level: 87 }
            ].map((item, index) => (
              <div key={index} className={`${styles.slideIn} delay-${index}00`}>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">{item.skill}</span>
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