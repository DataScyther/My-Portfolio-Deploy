import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Github, Youtube, MapPin, Phone, Send } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Email",
      value: "ishantkumaryts@gmail.com",
      link: "mailto:ishantkumaryts@gmail.com",
      color: "gradient-purple"
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      label: "LinkedIn",
      value: "nishantkumarakadatascyther",
      link: "https://linkedin.com/in/nishantkumarakadatascyther",
      color: "gradient-pink"
    },
    {
      icon: <Youtube className="h-6 w-6" />,
      label: "YouTube",
      value: "Mighty-TechShorts",
      link: "#",
      color: "gradient-orange"
    },
    {
      icon: <Github className="h-6 w-6" />,
      label: "GitHub",
      value: "DataScyther",
      link: "https://github.com/DataScyther",
      color: "gradient-purple"
    }
  ];

  const getColorClass = (color: string) => {
    switch (color) {
      case "gradient-purple":
        return "text-gradient-purple border-gradient-purple/20 bg-gradient-purple/5 hover:bg-gradient-purple/10";
      case "gradient-pink":
        return "text-gradient-pink border-gradient-pink/20 bg-gradient-pink/5 hover:bg-gradient-pink/10";
      case "gradient-orange":
        return "text-gradient-orange border-gradient-orange/20 bg-gradient-orange/5 hover:bg-gradient-orange/10";
      default:
        return "text-gradient-purple border-gradient-purple/20 bg-gradient-purple/5 hover:bg-gradient-purple/10";
    }
  };

  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            Ready to collaborate on exciting data science projects or discuss the latest in AI/ML? 
            I'd love to hear from you!
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="slide-in-left">
            <h3 className="text-2xl font-semibold mb-8">
              Get In <span className="gradient-text">Touch</span>
            </h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.link}
                  target={contact.link.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className={`flex items-center p-4 rounded-lg border transition-all duration-300 hover:scale-105 ${getColorClass(contact.color)}`}
                >
                  <div className="mr-4">
                    {contact.icon}
                  </div>
                  <div>
                    <div className="font-semibold">{contact.label}</div>
                    <div className="text-secondary text-sm">{contact.value}</div>
                  </div>
                </a>
              ))}
            </div>
            
            {/* Quick Stats */}
            <Card className="card-glow p-6">
              <h4 className="font-semibold mb-4">Quick Stats</h4>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold gradient-text">3+</div>
                  <div className="text-sm text-secondary">Years Content Creation</div>
                </div>
                <div>
                  <div className="text-2xl font-bold gradient-text">5+</div>
                  <div className="text-sm text-secondary">Internship Programs</div>
                </div>
                <div>
                  <div className="text-2xl font-bold gradient-text">10+</div>
                  <div className="text-sm text-secondary">Technical Skills</div>
                </div>
                <div>
                  <div className="text-2xl font-bold gradient-text">7+</div>
                  <div className="text-sm text-secondary">Certifications</div>
                </div>
              </div>
            </Card>
          </div>
          
          {/* Contact Form */}
          <div className="slide-in-right">
            <Card className="card-glow p-8">
              <h3 className="text-2xl font-semibold mb-6">
                Send Me a <span className="gradient-text">Message</span>
              </h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <Input 
                      placeholder="Your Name" 
                      className="bg-muted/20 border-border focus:border-accent/50 transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input 
                      type="email" 
                      placeholder="your.email@example.com" 
                      className="bg-muted/20 border-border focus:border-accent/50 transition-colors duration-300"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <Input 
                    placeholder="What would you like to discuss?" 
                    className="bg-muted/20 border-border focus:border-accent/50 transition-colors duration-300"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea 
                    placeholder="Tell me about your project, collaboration ideas, or just say hello!"
                    rows={5}
                    className="bg-muted/20 border-border focus:border-accent/50 transition-colors duration-300 resize-none"
                  />
                </div>
                
                <Button className="w-full gradient-button text-lg py-6">
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
              
              <div className="mt-6 text-center text-sm text-secondary">
                <p>
                  Prefer direct contact? Email me at{" "}
                  <a 
                    href="mailto:ishantkumaryts@gmail.com" 
                    className="gradient-text hover:underline"
                  >
                    ishantkumaryts@gmail.com
                  </a>
                </p>
              </div>
            </Card>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16 slide-in-up">
          <Card className="card-glow p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">
              Ready to Build Something <span className="gradient-text">Amazing</span>?
            </h3>
            <p className="text-secondary mb-6 max-w-2xl mx-auto">
              Whether you have a data science project in mind, need help with AI/ML implementation, 
              or want to collaborate on innovative solutions, I'm here to help bring your ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="gradient-button px-8">
                <Mail className="mr-2 h-5 w-5" />
                Start a Conversation
              </Button>
              <Button variant="outline" className="border-accent/20 hover:border-accent/40 px-8">
                <Github className="mr-2 h-5 w-5" />
                View My Work
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;