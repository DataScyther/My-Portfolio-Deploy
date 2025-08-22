import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, ExternalLink, Brain, Code, Code2, BrainCircuit, Bot, BarChart3, Building2, GraduationCap, PieChart, Plane, CloudCog, AreaChart, LineChart, Sparkles } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useEffect } from "react";
import StatCard from "@/components/StatCard";

const CertificationsSection = () => {
  const ref = useScrollReveal({ threshold: 0.1, duration: 700 });
  const certifications = [
    {
      title: "Generative AI",
      issuer: "BCG",
      date: "2025",
      category: "Generative AI",
      icon: <BrainCircuit className="h-6 w-6" />,
      color: "gradient-green",
      description: "Generative AI is a type of artificial intelligence that uses machine learning to create new content, such as images, text, and audio.",
      skills: ["Generative AI", "Machine Learning", "Artificial Intelligence"]
    },
    
    {
      title: "Generative AI in Action",
      issuer: "AWS Training and Certification",
      date: "2025",
      category: "Generative AI",
      icon: <Bot className="h-6 w-6" />,
      color: "gradient-orange",
      description: "Hands-on experience with AWS architecture design and cloud solutions implementation",
      skills: ["AWS Architecture", "Cloud Design", "Solutions Engineering"]
    },
  
    {
      title: "Data Science & Analytics",
      issuer: "Future Interns",
      date: "2025",
      category: "Data Science & Analytics",
      icon: <BarChart3 className="h-6 w-6" />,
      color: "gradient-green",
      description: "Data science and analytics are the study of data to extract meaningful insights and knowledge.",
      skills: ["Data Science", "Analytics", "SQL", "Power BI", "Tableau", "Excel"]
    },

     {
      title: "Lloyds Banking Group Data Science Simulation",
      issuer: "Lloyds Banking Group",
      date: "2025",
      category: "Financial Analytics",
      icon: <Building2 className="h-6 w-6" />,
      color: "gradient-green",
      description: "Financial data science and risk analytics in banking sector",
      skills: ["Financial Modeling", "Risk Analysis", "Banking Analytics"]
    },

    {
      title: "Microsoft Azure AI Fundamentals",
      issuer: "Microsoft",
      date: "2025",
      category: "Artificial Intelligence",
      icon: <GraduationCap className="h-6 w-6" />,
      color: "gradient-blue",
      description: "Hands-on experience with AWS architecture design and cloud solutions implementation",
      skills: ["AWS Architecture", "Cloud Design", "Solutions Engineering"]
    },

    {
      title: "Microsoft Azure AI Essentials",
      issuer: "Microsoft",
      date: "2025",
      category: "Artificial Intelligence",
      icon: <Brain className="h-6 w-6" />,
      color: "gradient-blue",
      description: "Comprehensive understanding of Azure AI services and machine learning capabilities",
      skills: ["Azure AI", "Machine Learning", "Cognitive Services"]
    },


    {
      title: "Data Analytics",
      issuer: "Tata Group",
      date: "2025",
      category: "Data Analytics",
      icon: <PieChart className="h-6 w-6" />,
      color: "gradient-sky",
      description: "Data analytics is the process of examining data to gain insights and make decisions.",
      skills: ["Data Analytics", "SQL", "Power BI", "Tableau", "Excel", "Python", "Data Visualization"]
    },


    {
      title: "British Airways Data Science Job Simulation",
      issuer: "British Airways",
      date: "2025",
      category: "Data Science",
      icon: <Plane className="h-6 w-6" />,
      color: "gradient-red",
      description: "Real-world data science project simulation in the aviation industry",
      skills: ["Data Analysis", "Predictive Modeling", "Business Intelligence"]
    },

      {
      title: "AWS Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2025",
      category: "Cloud",
      icon: <CloudCog className="h-6 w-6" />,
      color: "gradient-orange",
      description: "Designing and deploying scalable cloud solutions",
      skills: ["Cloud Architecture", "AWS", "DevOps"]
    },

    {
      title: "Data Analytics and Visualization",
      issuer: "Accenture",
      date: "2025",
      category: "Data Analytics",
      icon: <AreaChart className="h-6 w-6" />,
      color: "gradient-purple",
      description: "Data analytics and visualization using Power BI and Tableau",
      skills: ["Data Analytics", "Power BI", "Tableau", "Excel", "Python", "Data Visualization"]
    },
    {
      title: "Data Analytics",
      issuer: "Deloitte",
      date: "2025",
      category: "Data Analytics",
      icon: <LineChart className="h-6 w-6" />,
      color: "gradient-green",
      description: "Data analytics is the process of examining data to gain insights and make decisions.",
      skills: ["Data Analytics", "SQL", "Power BI", "Tableau", "Excel", "Python", "Data Visualization"]
    },
    {
      title: "Google Cloud Generative AI Studio",
      issuer: "Google Cloud",
      date: "2025",
      category: "Generative AI",
      icon: <Sparkles className="h-6 w-6" />,
      color: "gradient-purple",
      description: "Advanced training in generative AI technologies and implementation",
      skills: ["Generative AI", "LLMs", "Google Cloud AI"]
    },
    {
      title: "IBM Python for Data Science",
      issuer: "IBM",
      date: "2024",
      category: "Programming",
      icon: <Code2 className="h-6 w-6" />,
      color: "gradient-blue",
      description: "Comprehensive Python programming for data science applications",
      skills: ["Python", "Data Science", "Programming"]
    },
    {
      title: "HackerRank Python Programming Certificate",
      issuer: "HackerRank",
      date: "2024",
      category: "Programming",
      icon: <Code className="h-6 w-6" />,
      color: "gradient-green",
      description: "Advanced Python programming skills certification",
      skills: ["Python", "Algorithms", "Problem Solving"]
    }
  ];

  const getColorClass = (color: string) => {
    switch (color) {
      case "gradient-red":
        return "dark:text-red-400 text-red-600 border-red-200 dark:border-red-900/20 bg-red-50 dark:bg-red-900/10";
      case "gradient-green":
        return "dark:text-green-400 text-green-600 border-green-200 dark:border-green-900/20 bg-green-50 dark:bg-green-900/10";
      case "gradient-blue":
        return "dark:text-blue-400 text-blue-600 border-blue-200 dark:border-blue-900/20 bg-blue-50 dark:bg-blue-900/10";
      case "gradient-sky":
        return "dark:text-sky-400 text-sky-600 border-sky-200 dark:border-sky-900/20 bg-sky-50 dark:bg-sky-900/10";
      case "gradient-purple":
        return "dark:text-purple-400 text-purple-600 border-purple-200 dark:border-purple-900/20 bg-purple-50 dark:bg-purple-900/10";
      case "gradient-pink":
        return "dark:text-pink-400 text-pink-600 border-pink-200 dark:border-pink-900/20 bg-pink-50 dark:bg-pink-900/10";
      case "gradient-orange":
        return "dark:text-orange-400 text-orange-600 border-orange-200 dark:border-orange-900/20 bg-orange-50 dark:bg-orange-900/10";
      default:
        return "dark:text-purple-400 text-purple-600 border-purple-200 dark:border-purple-900/20 bg-purple-50 dark:bg-purple-900/10";
    }
  };

  const categories = [...new Set(certifications.map(cert => cert.category))];

  // Animate certifications on reveal
  useEffect(() => {
    const section = document.getElementById('certifications');
    const grid = document.getElementById('certs-grid');
    if (!section || !grid) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const cards = grid.querySelectorAll('.cert-card');
          cards.forEach((card, index) => {
            setTimeout(() => {
              (card as HTMLElement).style.opacity = '1';
              (card as HTMLElement).style.transform = 'translateY(0)';
            }, index * 80); // Refined staggered timing
          });
          observer.unobserve(entry.target as Element);
        }
      });
    }, { threshold: 0.25 });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="certifications" ref={ref} className="py-20 px-4 relative bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 slide-in-up" style={{ animationDelay: '0ms' }}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Certifications</span> & Achievements
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Continuous learning and professional development in cutting-edge technologies
          </p>
        </div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <Badge 
              key={index}
              variant="outline"
              className="px-4 py-2 bg-background dark:bg-card/80 hover:bg-accent/10 border-border hover:border-accent/30 transition-all duration-300 cursor-pointer"
            >
              {category}
            </Badge>
          ))}
        </div>
        
        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" id="certs-grid">
          {certifications.map((cert, index) => (
            <Card 
              key={index} 
              className="card-glow p-6 group cursor-pointer bg-card dark:bg-card/80 border-border cert-card opacity-0 transform translate-y-6 transition-all duration-700 ease-out"
              style={{ animationDelay: `${(index + 2) * 80}ms` }}
            >
              {/* Certificate Header */}
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-lg ${getColorClass(cert.color)} group-hover:scale-110 transition-transform duration-300`}>
                  {cert.icon}
                </div>
                <a
                  href="https://www.linkedin.com/in/datascyther/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View all certifications on LinkedIn"
                  className="flex items-center justify-center h-10 w-10 md:h-11 md:w-11"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink className="h-4 w-4 text-secondary group-hover:text-accent transition-colors duration-300" />
                </a>
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
                      className="px-2 py-1 text-xs rounded-md bg-muted dark:bg-muted/20 border border-border text-muted-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
        {/* Animated Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {[
            { number: 15, suffix: "+", label: "Certifications", color: "gradient-purple" },
            { number: 5, suffix: "", label: "Major Platforms", color: "gradient-pink" },
            { number: 3, suffix: "+", label: "Years Learning", color: "gradient-orange" },
            { number: 4, suffix: "", label: "Key Domains", color: "gradient-blue" }
          ].map((stat, index) => (
            <StatCard
              key={index}
              number={stat.number}
              suffix={stat.suffix}
              label={stat.label}
              color={stat.color}
              delay={index}
              className="hover:transform hover:scale-105 transition-all duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;