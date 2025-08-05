import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, BarChart3, Brain, Monitor, Music } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Business Sales Dashboard",
      description: "Comprehensive e-commerce analytics dashboard built with Power BI featuring advanced DAX calculations, interactive visualizations, and real-time business insights for data-driven decision making.",
      technologies: ["Power BI", "DAX", "SQL", "Excel", "Business Analytics"],
      icon: <BarChart3 className="h-8 w-8" />,
      color: "gradient-purple",
      category: "Data Visualization",
      features: [
        "Interactive KPI dashboards",
        "Advanced DAX calculations",
        "Real-time data connections",
        "Executive reporting"
      ]
    },
    {
      title: "College Event Feedback Analysis",
      description: "Machine learning-powered sentiment analysis system for college event feedback using Python, NLP techniques, and advanced visualization to extract meaningful insights from student responses.",
      technologies: ["Python", "Pandas", "Seaborn", "Matplotlib", "NLP", "Scikit-learn"],
      icon: <Brain className="h-8 w-8" />,
      color: "gradient-pink",
      category: "Machine Learning",
      features: [
        "Sentiment analysis algorithms",
        "Statistical data analysis",
        "Interactive visualizations",
        "Automated reporting"
      ]
    },
    {
      title: "Social Media Campaign Tracker",
      description: "Advanced analytics platform for tracking social media campaign performance with Power BI dashboards, featuring cross-platform data integration and ROI optimization insights.",
      technologies: ["Power BI", "DAX", "Python", "API Integration", "Social Analytics"],
      icon: <Monitor className="h-8 w-8" />,
      color: "gradient-orange",
      category: "Analytics Platform",
      features: [
        "Multi-platform integration",
        "Campaign ROI tracking",
        "Automated data pipelines",
        "Performance benchmarking"
      ]
    },
    {
      title: "Matrix-Themed UPI Payment System",
      description: "Futuristic UPI payment interface inspired by The Matrix with immersive 3D effects, particle systems, and cyberpunk aesthetics using modern web technologies.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Three.js", "WebGL", "Animation"],
      icon: <Monitor className="h-8 w-8" />,
      color: "gradient-purple",
      category: "Web Development",
      features: [
        "3D matrix effects",
        "Particle animations",
        "Cyberpunk UI design",
        "Interactive payment flow"
      ]
    },
    {
      title: "4D Musical Spheres",
      description: "Interactive 4D audio-visual experience featuring dynamic musical spheres with ripple effects, real-time audio analysis, and immersive 3D graphics using Web Audio API.",
      technologies: ["JavaScript", "Web Audio API", "Three.js", "HTML5 Canvas", "WebGL"],
      icon: <Music className="h-8 w-8" />,
      color: "gradient-pink",
      category: "Creative Technology",
      features: [
        "Real-time audio analysis",
        "4D visual effects",
        "Interactive sound spheres",
        "Dynamic ripple animations"
      ]
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
    <section id="projects" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            A showcase of innovative solutions spanning data science, machine learning, and creative technology
          </p>
        </div>
        
        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="card-glow p-6 slide-in-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <div className={`p-3 rounded-lg ${getColorClass(project.color)} mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    {project.icon}
                  </div>
                  <div>
                    <Badge className={`mb-2 ${getColorClass(project.color)}`}>
                      {project.category}
                    </Badge>
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                  </div>
                </div>
              </div>
              
              {/* Project Description */}
              <p className="text-secondary mb-4 leading-relaxed">
                {project.description}
              </p>
              
              {/* Key Features */}
              <div className="mb-4">
                <h4 className="font-semibold mb-2 text-sm uppercase tracking-wide">Key Features</h4>
                <div className="grid grid-cols-2 gap-2">
                  {project.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-secondary">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Technologies */}
              <div className="mb-6">
                <h4 className="font-semibold mb-2 text-sm uppercase tracking-wide">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 text-xs rounded-md bg-muted/30 border border-border hover:border-accent/30 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex gap-3">
                <Button size="sm" className="gradient-button flex-1">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Project
                </Button>
                <Button size="sm" variant="outline" className="border-accent/20 hover:border-accent/40">
                  <Github className="h-4 w-4 mr-2" />
                  Code
                </Button>
              </div>
            </Card>
          ))}
        </div>
        
        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-accent/20 hover:border-accent/40 px-8">
            View All Projects on GitHub
            <Github className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;