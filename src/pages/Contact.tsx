
import { useState } from "react";
import { PageTransition } from "@/components/PageTransition";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail, FileText, ArrowRight, CheckCircle } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulating form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      
      // Reset form after delay
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: "",
          email: "",
          message: ""
        });
      }, 3000);
    }, 1500);
  };

  return (
    <PageTransition>
      <section className="pt-24 pb-12">
        <div className="container max-w-7xl mx-auto px-6 md:px-8">
          <SectionHeading 
            heading="Contact Me"
            subheading="Get In Touch"
          >
            <p className="mt-4 text-muted-foreground max-w-3xl mx-auto">
              Have a question or want to work together? Fill out the form below or reach out through social media.
            </p>
          </SectionHeading>

          <div className="mt-16 grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="space-y-8">
              <h3 className="text-2xl font-display font-semibold">Let's Connect</h3>
              <p className="text-muted-foreground">
                I'm currently open to new opportunities and collaborations.
                Whether you have a question or just want to say hi, I'll try my
                best to get back to you!
              </p>
              
              <div className="space-y-4">
                <Card>
                  <CardContent className="flex items-center p-4">
                    <Mail className="h-5 w-5 mr-4 text-primary" />
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <a 
                        href="mailto:your.email@example.com" 
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        your.email@example.com
                      </a>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="flex items-center p-4">
                    <Github className="h-5 w-5 mr-4 text-primary" />
                    <div>
                      <h4 className="font-medium">GitHub</h4>
                      <a 
                        href="https://github.com/yourusername" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        github.com/yourusername
                      </a>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="flex items-center p-4">
                    <Linkedin className="h-5 w-5 mr-4 text-primary" />
                    <div>
                      <h4 className="font-medium">LinkedIn</h4>
                      <a 
                        href="https://linkedin.com/in/yourusername" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        linkedin.com/in/yourusername
                      </a>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="flex items-center p-4">
                    <FileText className="h-5 w-5 mr-4 text-primary" />
                    <div>
                      <h4 className="font-medium">Resume</h4>
                      <a 
                        href="/resume.pdf" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        Download Resume
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-display font-semibold mb-6">Send a Message</h3>
                  
                  {submitted ? (
                    <div className="text-center py-12">
                      <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                        <CheckCircle className="h-8 w-8 text-primary" />
                      </div>
                      <h4 className="text-xl font-medium mb-2">Message Sent!</h4>
                      <p className="text-muted-foreground">
                        Thanks for reaching out. I'll get back to you soon.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-1">
                          Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your Name"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-1">
                          Email
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-1">
                          Message
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Your message here..."
                          rows={5}
                          required
                        />
                      </div>
                      
                      <Button
                        type="submit"
                        className="w-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Sending..." : "Send Message"} 
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
