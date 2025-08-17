import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, MapPin } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const ExperienceSection = () => {
  const ref = useScrollReveal();
  
  const experiences = [
    {
      title: "YouTube Content Creator",
      company: "Mighty-TechShorts",
      location: "Remote",
      duration: "Sep 2022 – Present",
      type: "Content Creation",
      description: "Creating educational technology content for 3+ years, helping thousands learn complex concepts through simplified explanations and tutorials.",
      achievements: [
        "3+ years of consistent content creation",
        "Educational focus on emerging technologies",
        "Building a community of tech learners",
        "Simplifying complex AI/ML concepts"
      ],
      color: "gradient-purple"
    },
    {
      title: "Data Science Intern",
      company: "Boston Consulting Group",
      location: "Remote",
      duration: "Mar 2025 – Apr 2025",
      type: "Simulation",
      description: "Participated in BCG's data science simulation, working on consulting-grade analytics projects and strategic business solutions.",
      achievements: [
        "Strategic data analysis for business consulting",
        "Advanced analytics and modeling techniques",
        "Client-focused solution development",
        "Professional consulting methodology"
      ],
      color: "gradient-orange"
    },
    {
      title: "Data Analytics & Visualization",
      company: "Accenture",
      location: "Remote",
      duration: "Feb 2025 – Mar 2025",
      type: "Simulation",
      description: "Focused on advanced data visualization techniques and business intelligence dashboard development using industry-standard tools.",
      achievements: [
        "Created comprehensive business dashboards",
        "Advanced data visualization techniques",
        "Business intelligence and reporting",
        "Stakeholder presentation and communication"
      ],
      color: "gradient-purple"
    },
    {
      title: "Data Analyst Simulation",
      company: "Deloitte",
      location: "Remote",
      duration: "Feb 2025 – Mar 2025",
      type: "Simulation",
      description: "Participated in Deloitte's virtual data analyst program, gaining exposure to professional consulting practices and analytical methodologies.",
      achievements: [
        "Professional data analysis methodologies",
        "Consulting-grade analytical frameworks",
        "Business problem-solving approaches",
        "Industry best practices and standards"
      ],
      color: "gradient-pink"
    }
  ];

  const getColorClass = (color: string) => {
    switch (color) {
      case "gradient-purple":
        return "text-gradient-purple border-gradient-purple/20 bg-gradient-purple/10";
      case "gradient-pink":
        return "text-gradient-pink border-gradient-pink/20 bg-gradient-pink/10";
      case "gradient-orange":
        return "text-gradient-orange border-gradient-orange/20 bg-gradient-orange/10";
      default:
        return "text-gradient-purple border-gradient-purple/20 bg-gradient-purple/10";
    }
  };

  return (
    <section id="experience" ref={ref} className="py-20 px-4 relative scroll-reveal">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            Building expertise through diverse experiences in data science, analytics, and technology education
          </p>
        </div>
        
        {/* Experience Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="card-glow p-6 slide-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                {/* Company Info */}
                <div className="lg:w-1/3 flex-shrink-0">
                  <div className="flex items-center mb-2">
                    <Building2 className="h-5 w-5 text-accent mr-2" />
                    <h3 className="text-xl font-semibold">{exp.company}</h3>
                  </div>
                  
                  <h4 className="text-lg font-medium gradient-text mb-3">{exp.title}</h4>
                  
                  <div className="space-y-2 text-sm text-secondary">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      {exp.duration}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      {exp.location}
                    </div>
                  </div>
                  
                  <Badge className={`mt-3 ${getColorClass(exp.color)}`}>
                    {exp.type}
                  </Badge>
                </div>
                
                {/* Experience Details */}
                <div className="lg:w-2/3">
                  <p className="text-secondary mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div>
                    <h5 className="font-semibold mb-3">Key Achievements:</h5>
                    <div className="grid gap-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-start">
                          <div className="w-2 h-2 rounded-full bg-accent mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-secondary text-sm">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;