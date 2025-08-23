import { Card } from "@/components/ui/card";
import { GraduationCap, User, Target, TrendingUp } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useIsMobile } from "@/hooks/use-mobile";

const AboutSection = () => {
  const isMobile = useIsMobile();
  const ref = useScrollReveal({ 
    threshold: isMobile ? 0.1 : 0.15, 
    duration: isMobile ? 500 : 600 
  });
  
  const timeline = [
    {
      year: "2020",
      title: "YouTube Content Creator",
      description: "Started Mighty-TechShorts channel focusing on technology education",
      icon: <TrendingUp className="h-5 w-5" />
    },
    {
      year: "2023",
      title: "B.Tech Computer Science",
      description: "Specialized in Data Science with focus on AI/ML technologies",
      icon: <GraduationCap className="h-5 w-5" />
    },
    {
      year: "2023",
      title: "Data Science & AI/ML Specialization",
      description: "Deep dive into Generative AI, LLMs, and MLOps",
      icon: <Target className="h-5 w-5" />
    }
  ];

  return (
    <section id="about" ref={ref} className="py-16 sm:py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header - Enhanced Mobile Typography */}
        <div className="text-center mb-12 sm:mb-16 slide-in-up" style={{ animationDelay: '0ms' }}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg sm:text-xl text-secondary max-w-3xl mx-auto leading-relaxed px-2">
            Passionate about transforming data into innovation and creating content that educates the tech community
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* About Content - Enhanced Mobile Layout */}
          <div className="slide-in-left" style={{ animationDelay: '200ms' }}>
            <Card className="card-glow p-6 sm:p-8 will-change-transform">
              <div className="flex items-center mb-6">
                <User className="h-6 w-6 text-gradient-purple mr-3 flex-shrink-0" />
                <h3 className="text-xl sm:text-2xl font-semibold">My Journey</h3>
              </div>
              
              <div className="space-y-4 text-secondary leading-relaxed">
                <p className="text-sm sm:text-base">
                  I'm a passionate data science enthusiast currently pursuing my B.Tech in Computer Science 
                  with a specialization in Data Science. My journey into the world of technology began with 
                  curiosity and has evolved into a deep commitment to leveraging AI and machine learning 
                  for real-world solutions.
                </p>
                
                <p className="text-sm sm:text-base">
                  For the past 3+ years, I've been sharing my knowledge through my YouTube channel 
                <span className="gradient-text font-semibold"> Mighty-TechShorts</span>, where I create
                  educational content about emerging technologies, helping thousands of learners understand 
                  complex concepts in simple terms.
                </p>
                
                <p className="text-sm sm:text-base">
                  My expertise lies in data science, machine learning, and AI/ML technologies. I have a keen 
                  interest in generative AI, large language models (LLMs), and MLOps, and I'm always eager to 
                  explore new advancements in these fields.
                </p>
              </div>
            </Card>
          </div>
          
          {/* Timeline - Enhanced Mobile Experience */}
          <div className="slide-in-right" style={{ animationDelay: '400ms' }}>
            <h3 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 text-center lg:text-left">
              Career & Education <span className="gradient-text">Timeline</span>
            </h3>
            
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <div key={index} className="flex items-start gap-4 will-change-transform hover:scale-[1.02] transition-transform duration-300">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-gradient-purple to-gradient-pink flex items-center justify-center shadow-lg">
                    {item.icon}
                  </div>
                  
                  <div className="flex-grow min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
                      <span className="text-xs sm:text-sm font-mono px-3 py-1 rounded-full bg-muted/50 text-gradient-purple w-fit">
                        {item.year}
                      </span>
                      <h4 className="font-semibold text-base sm:text-lg leading-tight">{item.title}</h4>
                    </div>
                    <p className="text-secondary text-sm sm:text-base leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;