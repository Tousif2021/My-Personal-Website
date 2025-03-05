
import { PageTransition } from "@/components/PageTransition";
import { SectionHeading } from "@/components/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle } from "lucide-react";

export default function About() {
  const timelineEvents = [
    {
      year: "2023",
      title: "Senior Developer",
      company: "Tech Innovations Inc.",
      description: "Leading a team of developers on various projects using React, Node.js, and cloud technologies."
    },
    {
      year: "2021",
      title: "Frontend Developer",
      company: "Creative Solutions Ltd.",
      description: "Built responsive web applications and implemented new features for client projects."
    },
    {
      year: "2020",
      title: "Web Development Bootcamp",
      company: "Code Academy",
      description: "Intensive training in modern web development technologies and practices."
    },
    {
      year: "2018",
      title: "Computer Science Degree",
      company: "Tech University",
      description: "Graduated with honors with focus on software development and algorithms."
    }
  ];

  return (
    <PageTransition>
      <section className="pt-24 pb-12">
        <div className="container max-w-7xl mx-auto px-6 md:px-8">
          <SectionHeading 
            heading="About Me"
            subheading="My Story"
          >
            <p className="mt-4 text-muted-foreground max-w-3xl mx-auto">
              Get to know me, my background, and what drives me as a developer.
            </p>
          </SectionHeading>

          <div className="mt-16 max-w-4xl mx-auto">
            <Tabs defaultValue="bio" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-12">
                <TabsTrigger value="bio">Biography</TabsTrigger>
                <TabsTrigger value="journey">Journey</TabsTrigger>
                <TabsTrigger value="philosophy">Philosophy</TabsTrigger>
              </TabsList>
              
              <TabsContent value="bio" className="animate-fade-in">
                <div className="grid md:grid-cols-5 gap-8 items-start">
                  <div className="md:col-span-2">
                    <img 
                      src="https://via.placeholder.com/400x500" 
                      alt="Your Name" 
                      className="rounded-lg shadow-md w-full"
                    />
                  </div>
                  
                  <div className="md:col-span-3 space-y-4">
                    <h3 className="text-2xl font-display font-semibold mb-4">Hello There!</h3>
                    
                    <p>
                      I'm a passionate software developer with a deep interest in creating efficient, 
                      user-friendly applications. My journey in technology began with a 
                      curiosity about how digital products work and evolved into a professional 
                      career building them.
                    </p>
                    
                    <p>
                      With experience in both frontend and backend development, I enjoy working 
                      across the full stack to deliver complete solutions. I'm particularly 
                      interested in user experience design and performance optimization.
                    </p>
                    
                    <p>
                      When I'm not coding, you can find me exploring new technologies, contributing 
                      to open-source projects, or sharing knowledge with the developer community.
                      I also enjoy hiking, photography, and a good cup of coffee.
                    </p>
                    
                    <h4 className="text-xl font-display font-semibold mt-6 mb-3">Core Skills</h4>
                    
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {["JavaScript/TypeScript", "React.js", "Node.js", "HTML/CSS", 
                        "Git/GitHub", "Responsive Design", "RESTful APIs", "Performance Optimization"].map((skill) => (
                        <li key={skill} className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="journey" className="animate-fade-in">
                <h3 className="text-2xl font-display font-semibold mb-8 text-center">My Professional Journey</h3>
                
                <div className="relative border-l-2 border-primary/30 ml-4 md:ml-6 pl-8 pb-8 space-y-12">
                  {timelineEvents.map((event, index) => (
                    <div key={index} className="relative">
                      <div className="absolute -left-10 w-6 h-6 bg-primary/20 border-2 border-primary rounded-full"></div>
                      <div className="flex items-baseline">
                        <span className="text-primary font-mono text-sm mr-3">{event.year}</span>
                        <h4 className="text-xl font-display font-semibold">{event.title}</h4>
                      </div>
                      <p className="text-muted-foreground mt-1">{event.company}</p>
                      <p className="mt-2">{event.description}</p>
                    </div>
                  ))}
                  
                  <div className="absolute -left-[10px] bottom-0 w-6 h-6 bg-primary border-2 border-primary rounded-full"></div>
                </div>
              </TabsContent>
              
              <TabsContent value="philosophy" className="animate-fade-in">
                <h3 className="text-2xl font-display font-semibold mb-8 text-center">My Development Philosophy</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardContent className="pt-6">
                      <h4 className="text-xl font-display font-semibold mb-4">User-Centered Design</h4>
                      <p>
                        I believe that technology should serve people, not the other way around.
                        That's why I approach every project with a focus on the end user's needs,
                        preferences, and behaviors. A beautiful interface means nothing if it's
                        not intuitive and accessible to the people who will use it.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="pt-6">
                      <h4 className="text-xl font-display font-semibold mb-4">Clean, Maintainable Code</h4>
                      <p>
                        Writing code is not just about making things work; it's about creating
                        solutions that can evolve over time. I strive to write clean, well-documented,
                        and modular code that other developers can understand and build upon.
                        Technical debt is a real cost, and I aim to minimize it.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="pt-6">
                      <h4 className="text-xl font-display font-semibold mb-4">Continuous Learning</h4>
                      <p>
                        Technology evolves rapidly, and staying current is essential. I dedicate
                        time to learning new tools, techniques, and best practices. This commitment
                        to growth allows me to bring fresh ideas and optimal solutions to every
                        project I work on.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="pt-6">
                      <h4 className="text-xl font-display font-semibold mb-4">Collaboration</h4>
                      <p>
                        The best software comes from diverse perspectives and open communication.
                        I value collaborative environments where ideas can be shared freely and
                        decisions are made based on merit rather than hierarchy. Great products
                        are built by teams, not individuals.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
