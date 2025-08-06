import { Card } from "@/components/ui/card";
import { Code, Database, Cloud, BarChart3, Brain, GitBranch } from "lucide-react";
import { motion } from "framer-motion";

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Programming Languages",
      skills: ["Python", "R", "SQL", "Java", "JavaScript"],
      color: "gradient-purple"
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "AI/ML Frameworks",
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy"],
      color: "gradient-pink"
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Data Visualization",
      skills: ["Tableau", "Power BI", "Matplotlib", "Seaborn", "Plotly"],
      color: "gradient-orange"
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "Cloud Platforms",
      skills: ["AWS", "GCP", "Azure", "Docker", "Kubernetes"],
      color: "gradient-purple"
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Databases",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Elasticsearch"],
      color: "gradient-pink"
    },
    {
      icon: <GitBranch className="h-8 w-8" />,
      title: "Tools & Technologies",
      skills: ["Git", "Jupyter", "MLflow", "Apache Spark", "Kafka"],
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
    <section id="skills" className="py-20 px-4 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 data-grid opacity-5"></div>
      
      <div className="max-w-6xl mx-auto relative">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="holographic-text">Skills & Services</span>
          </h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            Four glassmorphism cards showcasing specialized AI/ML solutions and data science expertise
          </p>
        </motion.div>
        
        {/* Four Main Service Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {[
            {
              title: "Data Science & AI Solutions",
              description: "Predictive modeling, ML, DL, LLMs",
              icon: <Brain className="h-8 w-8" />,
              skills: ["Machine Learning", "Deep Learning", "Predictive Analytics", "LLM Integration"]
            },
            {
              title: "Generative AI & Cloud Integration",
              description: "AWS, GCP, Azure deployments",
              icon: <Cloud className="h-8 w-8" />,
              skills: ["AWS", "GCP", "Azure", "MLOps", "Model Deployment"]
            },
            {
              title: "Data Analytics & Visualization",
              description: "Power BI, Tableau, advanced analytics",
              icon: <BarChart3 className="h-8 w-8" />,
              skills: ["Tableau", "Power BI", "Advanced Analytics", "Statistical Modeling"]
            },
            {
              title: "Tech Content Creation",
              description: "AI/ML-focused educational videos",
              icon: <Code className="h-8 w-8" />,
              skills: ["Technical Writing", "Video Production", "AI Education", "Community Building"]
            }
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card magnetic-hover p-8 h-full metallic-border">
                <div className="flex items-start mb-6">
                  <div className="p-3 rounded-lg bg-gradient-purple/10 mr-4 text-gradient-purple">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold gradient-text mb-2">{service.title}</h3>
                    <p className="text-secondary">{service.description}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  {service.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="px-4 py-2 text-sm rounded-lg glass-card text-center font-medium"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
        
        {/* Technical Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center mb-8 gradient-text">Technical Stack</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass-card p-6 magnetic-hover">
                  <div className="flex items-center mb-4">
                    <div className={`p-2 rounded-lg ${getColorClass(category.color)} mr-3`}>
                      {category.icon}
                    </div>
                    <h4 className="text-lg font-semibold">{category.title}</h4>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 text-xs rounded-full bg-muted/30 border border-gradient-purple/20 hover:border-gradient-purple/40 transition-all duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
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
              { skill: "MLOps & Deployment", level: 82 },
              { skill: "Generative AI & LLMs", level: 87 }
            ].map((item, index) => (
              <div key={index} className="slide-in-up" style={{ animationDelay: `${index * 0.1 + 0.5}s` }}>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">{item.skill}</span>
                  <span className="text-sm font-mono text-secondary">{item.level}%</span>
                </div>
                <div className="h-2 bg-muted/30 rounded-full overflow-hidden">
                  <div 
                    className="h-full skill-bar rounded-full"
                    style={{ 
                      width: `${item.level}%`,
                      animationDelay: `${index * 0.1 + 1}s`
                    }}
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