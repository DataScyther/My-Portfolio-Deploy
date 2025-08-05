import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, ExternalLink, Cloud, Brain, Code, BarChart3 } from "lucide-react";

const CertificationsSection = () => {
  const certifications = [
    {
      title: "AWS APAC Solutions Architecture Job Simulation",
      issuer: "Amazon Web Services",
      date: "2024",
      category: "Cloud Computing",
      icon: <Cloud className="h-6 w-6" />,
      color: "gradient-orange",
      description: "Hands-on experience with AWS architecture design and cloud solutions implementation",
      skills: ["AWS Architecture", "Cloud Design", "Solutions Engineering"]
    },
    {
      title: "Microsoft Azure AI Essentials",
      issuer: "Microsoft",
      date: "2024",
      category: "Artificial Intelligence",
      icon: <Brain className="h-6 w-6" />,
      color: "gradient-purple",
      description: "Comprehensive understanding of Azure AI services and machine learning capabilities",
      skills: ["Azure AI", "Machine Learning", "Cognitive Services"]
    },
    {
      title: "British Airways Data Science Job Simulation",
      issuer: "British Airways",
      date: "2024",
      category: "Data Science",
      icon: <BarChart3 className="h-6 w-6" />,
      color: "gradient-pink",
      description: "Real-world data science project simulation in the aviation industry",
      skills: ["Data Analysis", "Predictive Modeling", "Business Intelligence"]
    },
    {
      title: "Lloyds Banking Group Data Science Simulation",
      issuer: "Lloyds Banking Group",
      date: "2024",
      category: "Financial Analytics",
      icon: <BarChart3 className="h-6 w-6" />,
      color: "gradient-orange",
      description: "Financial data science and risk analytics in banking sector",
      skills: ["Financial Modeling", "Risk Analysis", "Banking Analytics"]
    },
    {
      title: "Google Cloud Generative AI Studio",
      issuer: "Google Cloud",
      date: "2024",
      category: "Generative AI",
      icon: <Brain className="h-6 w-6" />,
      color: "gradient-purple",
      description: "Advanced training in generative AI technologies and implementation",
      skills: ["Generative AI", "LLMs", "Google Cloud AI"]
    },
    {
      title: "IBM Python for Data Science",
      issuer: "IBM",
      date: "2023",
      category: "Programming",
      icon: <Code className="h-6 w-6" />,
      color: "gradient-pink",
      description: "Comprehensive Python programming for data science applications",
      skills: ["Python", "Data Science", "Programming"]
    },
    {
      title: "HackerRank Python Programming Certificate",
      issuer: "HackerRank",
      date: "2023",
      category: "Programming",
      icon: <Code className="h-6 w-6" />,
      color: "gradient-orange",
      description: "Advanced Python programming skills certification",
      skills: ["Python", "Algorithms", "Problem Solving"]
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

  const categories = [...new Set(certifications.map(cert => cert.category))];

  return (
    <section id="certifications" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Certifications</span> & Achievements
          </h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            Continuous learning and professional development in cutting-edge technologies
          </p>
        </div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <Badge 
              key={index}
              className="px-4 py-2 bg-muted/30 hover:bg-accent/10 border border-border hover:border-accent/30 transition-all duration-300 cursor-pointer"
            >
              {category}
            </Badge>
          ))}
        </div>
        
        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card 
              key={index} 
              className="card-glow p-6 slide-in-up group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Certificate Header */}
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-lg ${getColorClass(cert.color)} group-hover:scale-110 transition-transform duration-300`}>
                  {cert.icon}
                </div>
                <ExternalLink className="h-4 w-4 text-secondary group-hover:text-accent transition-colors duration-300" />
              </div>
              
              {/* Certificate Info */}
              <div className="mb-4">
                <Badge className={`mb-2 ${getColorClass(cert.color)}`}>
                  {cert.category}
                </Badge>
                <h3 className="text-lg font-semibold mb-2 leading-tight">
                  {cert.title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-secondary mb-3">
                  <Award className="h-4 w-4" />
                  <span>{cert.issuer}</span>
                  <span>•</span>
                  <span>{cert.date}</span>
                </div>
              </div>
              
              {/* Description */}
              <p className="text-secondary text-sm mb-4 leading-relaxed">
                {cert.description}
              </p>
              
              {/* Skills */}
              <div>
                <h4 className="font-semibold mb-2 text-xs uppercase tracking-wide">Skills Gained</h4>
                <div className="flex flex-wrap gap-1">
                  {cert.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 text-xs rounded-md bg-muted/20 border border-border"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "7+", label: "Certifications", color: "gradient-purple" },
            { number: "5", label: "Major Platforms", color: "gradient-pink" },
            { number: "3+", label: "Years Learning", color: "gradient-orange" },
            { number: "4", label: "Key Domains", color: "gradient-purple" }
          ].map((stat, index) => (
            <div key={index} className="text-center slide-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="text-4xl font-bold gradient-text mb-2">{stat.number}</div>
              <div className="text-secondary">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;