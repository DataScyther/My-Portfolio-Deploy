import { Card } from "@/components/ui/card";
import { GraduationCap, User, Target, TrendingUp } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const AboutSection = () => {
  const ref = useScrollReveal();
  
  const timeline = [
    {
      year: "2022",
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
      year: "2024",
      title: "AI/ML Specialization",
      description: "Deep dive into Generative AI, LLMs, and MLOps",
      icon: <Target className="h-5 w-5" />
    }
  ];

  return (
    <section id="about" ref={ref} className="py-20 px-4 relative scroll-reveal">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            Passionate about transforming data into innovation and creating content that educates the tech community
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <div className="slide-in-left">
            <Card className="card-glow p-8">
              <div className="flex items-center mb-6">
                <User className="h-6 w-6 text-gradient-purple mr-3" />
                <h3 className="text-2xl font-semibold">My Journey</h3>
              </div>
              
              <div className="space-y-4 text-secondary leading-relaxed">
                <p>
                  I'm a passionate data science enthusiast currently pursuing my B.Tech in Computer Science 
                  with a specialization in Data Science. My journey into the world of technology began with 
                  curiosity and has evolved into a deep commitment to leveraging AI and machine learning 
                  for real-world solutions.
                </p>
                
                <p>
                  For the past 3+ years, I've been sharing my knowledge through my YouTube channel 
                  <span className="gradient-text font-semibold"> Mighty-TechShorts</span>, where I create 
                  educational content about emerging technologies, helping thousands of learners understand 
                  complex concepts in simple terms.
                </p>
                
                <p>
                  My expertise spans across multiple domains including Python programming, machine learning, 
                  cloud computing (AWS, GCP), and the latest in generative AI and large language models. 
                  I'm passionate about MLOps and building scalable AI solutions that can make a real impact.
                </p>
              </div>
            </Card>
          </div>
          
          {/* Timeline */}
          <div className="slide-in-right">
            <h3 className="text-2xl font-semibold mb-8 text-center lg:text-left">
              Career & Education <span className="gradient-text">Timeline</span>
            </h3>
            
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-gradient-purple to-gradient-pink flex items-center justify-center">
                    {item.icon}
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-mono px-3 py-1 rounded-full bg-muted/50 text-gradient-purple">
                        {item.year}
                      </span>
                      <h4 className="font-semibold text-lg">{item.title}</h4>
                    </div>
                    <p className="text-secondary">{item.description}</p>
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