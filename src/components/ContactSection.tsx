import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Github, Youtube, Send, CheckCircle } from "lucide-react";
import { useFormValidation } from "@/hooks/useFormValidation";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { toast } from "sonner";
import StatCard from "@/components/StatCard";

const ContactSection = () => {
  const ref = useScrollReveal({ threshold: 0.1, duration: 700 });
  const { formData, errors, isSubmitting, handleChange, handleBlur, handleSubmit } = useFormValidation();
  
  const onSubmit = async () => {
    const success = await handleSubmit();
    if (success) {
      toast.success("Message sent successfully! I'll get back to you soon.", {
        icon: <CheckCircle className="h-5 w-5" />,
      });
    } else {
      toast.error("Failed to send message. Please try again.");
    }
  };
  
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
      value: "datascyther",
      link: "https://www.linkedin.com/in/datascyther/",
      color: "gradient-pink"
    },
    {
      icon: <Youtube className="h-6 w-6" />,
      label: "YouTube",
      value: "Mighty-TechShorts",
      link: "https://www.youtube.com/@Mighty-TechShorts",
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
    <section id="contact" ref={ref} className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 slide-in-up" style={{ animationDelay: '0ms' }}>
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
          <div className="slide-in-left" style={{ animationDelay: '200ms' }}>
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
            
            {/* Animated Quick Stats */}
            <Card className="card-glow p-6">
              <h4 className="font-semibold mb-4">Quick Stats</h4>
              <div className="grid grid-cols-2 gap-4">
                <StatCard
                  number={3}
                  suffix="+"
                  label="Years Content Creation"
                  color="gradient-purple"
                  delay={0}
                  className="scale-90"
                />
                <StatCard
                  number={5}
                  suffix="+"
                  label="Internship Programs"
                  color="gradient-pink"
                  delay={1}
                  className="scale-90"
                />
                <StatCard
                  number={10}
                  suffix="+"
                  label="Technical Skills"
                  color="gradient-orange"
                  delay={2}
                  className="scale-90"
                />
                <StatCard
                  number={15}
                  suffix="+"
                  label="Certifications"
                  color="gradient-blue"
                  delay={3}
                  className="scale-90"
                />
              </div>
            </Card>
          </div>
          
          {/* Contact Form */}
          <div className="slide-in-right" style={{ animationDelay: '400ms' }}>
            <Card className="card-glow p-8">
              <h3 className="text-2xl font-semibold mb-6">
                Send Me a <span className="gradient-text">Message</span>
              </h3>
              
              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); onSubmit(); }}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <Input 
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      onBlur={() => handleBlur('name')}
                      placeholder="Your Name" 
                      className={`bg-muted/20 border-border focus:border-accent/50 transition-colors duration-300 ${
                        errors.name ? 'border-destructive' : ''
                      }`}
                    />
                    {errors.name && (
                      <p className="text-destructive text-sm mt-1">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input 
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      onBlur={() => handleBlur('email')}
                      placeholder="your.email@example.com" 
                      className={`bg-muted/20 border-border focus:border-accent/50 transition-colors duration-300 ${
                        errors.email ? 'border-destructive' : ''
                      }`}
                    />
                    {errors.email && (
                      <p className="text-destructive text-sm mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <Input 
                    value={formData.subject}
                    onChange={(e) => handleChange('subject', e.target.value)}
                    onBlur={() => handleBlur('subject')}
                    placeholder="What would you like to discuss?" 
                    className={`bg-muted/20 border-border focus:border-accent/50 transition-colors duration-300 ${
                      errors.subject ? 'border-destructive' : ''
                    }`}
                  />
                  {errors.subject && (
                    <p className="text-destructive text-sm mt-1">{errors.subject}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea 
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    onBlur={() => handleBlur('message')}
                    placeholder="Tell me about your project, collaboration ideas, or just say hello!"
                    rows={5}
                    className={`bg-muted/20 border-border focus:border-accent/50 transition-colors duration-300 resize-none ${
                      errors.message ? 'border-destructive' : ''
                    }`}
                  />
                  {errors.message && (
                    <p className="text-destructive text-sm mt-1">{errors.message}</p>
                  )}
                </div>
                
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full gradient-button text-lg py-6"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </>
                  )}
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
        <div className="text-center mt-16 slide-in-up" style={{ animationDelay: '600ms' }}>
          <Card className="card-glow p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">
              Ready to Build Something <span className="gradient-text">Amazing</span>?
            </h3>
            <p className="text-secondary mb-6 max-w-2xl mx-auto">
              Whether you have a data science project in mind, need help with AI/ML implementation, 
              or want to collaborate on innovative solutions, I'm here to help bring your ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="gradient-button px-8">
                <a href="mailto:ishantkumaryts@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Start a Conversation
                </a>
              </Button>
              <Button asChild variant="outline" className="border-accent/20 hover:border-accent/40 px-8">
                <a href="https://github.com/DataScyther" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  View My Work
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;