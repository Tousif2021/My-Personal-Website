
import { PageTransition } from "@/components/PageTransition";
import { SectionHeading } from "@/components/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, Github, Calendar, Star, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";
import { GITHUB_USERNAME, Repository, useGitHubRepos, useGitHubUser } from "@/api/github";
import { format } from "date-fns";

export default function About() {
  const { repositories, loading, error } = useGitHubRepos(GITHUB_USERNAME);
  const { userData, loading: userLoading } = useGitHubUser(GITHUB_USERNAME);
  const [projectTimeline, setProjectTimeline] = useState<Repository[]>([]);
  const [showAllProjects, setShowAllProjects] = useState(false);
  
  useEffect(() => {
    if (repositories.length > 0) {
      // Sort repositories by created_at date
      const sortedRepos = [...repositories].sort((a, b) => 
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      );
      
      // Take all repositories for the timeline, but only display a subset initially
      setProjectTimeline(sortedRepos);
    }
  }, [repositories]);

  const displayedProjects = showAllProjects 
    ? projectTimeline 
    : projectTimeline.slice(0, 6);

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
                <TabsTrigger value="journey">Project Journey</TabsTrigger>
                <TabsTrigger value="philosophy">Philosophy</TabsTrigger>
              </TabsList>
              
              <TabsContent value="bio" className="animate-fade-in">
                <div className="grid md:grid-cols-5 gap-8 items-start">
                  <div className="md:col-span-2">
                    <div className="relative w-full aspect-square max-w-md mx-auto group">
                      {/* Animated rotating borders */}
                      <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-spin-slow"></div>
                      <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/20 animate-reverse-spin-slow"></div>
                      
                      {/* Binary code ring */}
                      <div className="absolute inset-0 rounded-full flex items-center justify-center overflow-hidden">
                        <div className="absolute w-[150%] h-[150%] flex items-center justify-center animate-slow-spin">
                          <div className="text-[4px] sm:text-[6px] text-primary/10 font-mono tracking-tighter leading-none select-none" style={{ transform: 'rotate(0deg)' }}>
                            {Array(360).fill("01").map((binary, i) => (
                              <span key={i} style={{ position: 'absolute', transform: `rotate(${i}deg) translateY(-110px) rotate(-${i}deg)` }}>
                                {Math.random() > 0.5 ? '0' : '1'}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      {/* Pulsing gradients */}
                      <div className="absolute inset-[10%] rounded-full bg-gradient-to-br from-primary/5 to-transparent animate-pulse-slow"></div>
                      <div className="absolute inset-[15%] rounded-full bg-gradient-to-tr from-transparent to-primary/10 animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
                      
                      {/* Code symbol particles */}
                      <div className="absolute inset-0 rounded-full overflow-hidden">
                        <div className="absolute inset-0 code-particles"></div>
                      </div>
                      
                      {/* Profile image container */}
                      <div className="absolute inset-[10%] glass rounded-full z-10 overflow-hidden flex items-center justify-center shadow-lg shadow-primary/10 border border-primary/20 animate-float-very-slow group-hover:border-primary/40 transition-all duration-500">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <img 
                          src={userData?.avatar_url || "https://via.placeholder.com/400"} 
                          alt={userData?.name || "Developer"} 
                          className="w-full h-full object-cover rounded-full transition-all duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                        
                        {/* Scan line effect */}
                        <div className="absolute w-full h-1 bg-primary/10 top-1/2 left-0 -translate-y-1/2 animate-scan-line"></div>
                      </div>
                      
                      {/* Tech corner accents */}
                      <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-primary/40 rounded-tl-xl"></div>
                      <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-primary/40 rounded-tr-xl"></div>
                      <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-primary/40 rounded-bl-xl"></div>
                      <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-primary/40 rounded-br-xl"></div>
                    </div>
                  </div>
                  
                  <div className="md:col-span-3 space-y-4">
                    <h3 className="text-2xl font-display font-semibold mb-4">Hello There!</h3>
                    
                    <p>
                      Hey there! I'm a passionate software developer who loves turning ideas into reality through code. My journey into tech started with pure curiosity—wondering how digital products worked—and quickly turned into a full-blown obsession with building them myself.
                    </p>
                    
                    <p>
                      I thrive in both frontend and backend development, crafting smooth, user-friendly experiences while ensuring everything runs efficiently under the hood. Performance optimization and user experience design are my sweet spots—I love making applications that not only work well but feel great to use.
                    </p>
                    
                    <p>
                      Beyond coding, you'll often find me exploring new technologies, diving into open-source projects, or sharing what I’ve learned with the developer community. When I step away from the screen, I’m probably out on a hike, capturing moments through my camera lens, or enjoying a perfectly brewed cup of coffee.
                    </p>
                    
                    <h4 className="text-xl font-display font-semibold mt-6 mb-3">Core Skills</h4>
                    
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {["JavaScript/TypeScript", "React.js", "Node.js", "HTML/CSS", 
                        "Git/GitHub", "Responsive Design", "RESTful APIs", "Performance Optimization","C","ASSEMBLY","RISC V MCU","Sustainable Development","Ergonomics"].map((skill) => (
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
                <h3 className="text-2xl font-display font-semibold mb-8 text-center">My GitHub Project Journey</h3>
                
                {loading ? (
                  <div className="flex justify-center items-center py-20">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                  </div>
                ) : error ? (
                  <div className="text-center text-destructive py-10">
                    <p>Failed to load GitHub projects. Please try again later.</p>
                  </div>
                ) : projectTimeline.length === 0 ? (
                  <div className="text-center py-10">
                    <p>No projects found for this GitHub username.</p>
                  </div>
                ) : (
                  <>
                    <div className="relative border-l-2 border-primary/30 ml-4 md:ml-6 pl-8 pb-8 space-y-12">
                      {displayedProjects.map((project, index) => (
                        <div key={project.id} className="relative group">
                          <div className="absolute -left-10 w-6 h-6 bg-primary/20 border-2 border-primary rounded-full flex items-center justify-center">
                            <Github className="h-3 w-3 text-primary" />
                          </div>
                          <div className="flex flex-col md:flex-row md:items-baseline md:gap-3">
                            <span className="text-primary font-mono text-sm mb-1 md:mb-0">
                              {format(new Date(project.created_at), "MMM yyyy")}
                            </span>
                            <h4 className="text-xl font-display font-semibold">{project.name}</h4>
                          </div>
                          <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground mt-1">
                            <span className="flex items-center">
                              <Calendar className="h-3.5 w-3.5 mr-1" />
                              Last updated: {format(new Date(project.updated_at), "dd MMM yyyy")}
                            </span>
                            {project.stargazers_count > 0 && (
                              <span className="flex items-center">
                                <Star className="h-3.5 w-3.5 mr-1" /> {project.stargazers_count}
                              </span>
                            )}
                          </div>
                          <p className="mt-2">{project.description || "No description available"}</p>
                          <div className="mt-3">
                            <a 
                              href={project.html_url} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-flex items-center mr-4 text-sm font-medium text-primary hover:underline"
                            >
                              <Github className="h-3.5 w-3.5 mr-1" /> View Code
                            </a>
                            {project.homepage && (
                              <a 
                                href={project.homepage} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                              >
                                <ExternalLink className="h-3.5 w-3.5 mr-1" /> Live Demo
                              </a>
                            )}
                          </div>
                        </div>
                      ))}
                      
                      <div className="absolute -left-[10px] bottom-0 w-6 h-6 bg-primary border-2 border-primary rounded-full flex items-center justify-center">
                        <Github className="h-3 w-3 text-primary-foreground" />
                      </div>
                    </div>
                    
                    {projectTimeline.length > 6 && (
                      <div className="text-center mt-8">
                        <button
                          onClick={() => setShowAllProjects(!showAllProjects)}
                          className="px-4 py-2 rounded-md bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                        >
                          {showAllProjects ? "Show Less Projects" : `Show All Projects (${projectTimeline.length})`}
                        </button>
                      </div>
                    )}
                  </>
                )}
              </TabsContent>
              
              <TabsContent value="philosophy" className="animate-fade-in">
                <h3 className="text-2xl font-display font-semibold mb-8 text-center">My Development Philosophy</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="bg-gradient-to-br from-background to-muted/30 backdrop-blur border border-primary/10">
                    <CardContent className="pt-6">
                      <h4 className="text-xl font-display font-semibold mb-4">User-Centered Design</h4>
                      <p className="text-muted-foreground">
                        I believe that technology should serve humans, not the other way around. 
                        Every line of code I write aims to create intuitive, accessible, and 
                        delightful user experiences.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-gradient-to-br from-background to-muted/30 backdrop-blur border border-primary/10">
                    <CardContent className="pt-6">
                      <h4 className="text-xl font-display font-semibold mb-4">Performance & Efficiency</h4>
                      <p className="text-muted-foreground">
                        Speed matters. I'm obsessed with optimizing code for maximum performance
                        while maintaining readability and maintainability. Every millisecond counts.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-gradient-to-br from-background to-muted/30 backdrop-blur border border-primary/10">
                    <CardContent className="pt-6">
                      <h4 className="text-xl font-display font-semibold mb-4">Clean Architecture</h4>
                      <p className="text-muted-foreground">
                        I follow SOLID principles and maintain clean, modular codebases that are easy to 
                        extend and maintain. Simplicity and clarity are my guiding principles.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-gradient-to-br from-background to-muted/30 backdrop-blur border border-primary/10">
                    <CardContent className="pt-6">
                      <h4 className="text-xl font-display font-semibold mb-4">Continuous Learning</h4>
                      <p className="text-muted-foreground">
                        Technology evolves rapidly. I'm committed to continuous learning and 
                        staying current with emerging technologies, best practices, and industry trends.
                      </p>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="mt-8">
                  <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20">
                    <CardContent className="pt-6">
                      <h4 className="text-xl font-display font-semibold mb-4">My Code Principles</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <p><span className="font-medium">Minimize Global State:</span> I keep global variables to a minimum to prevent unintended side effects and improve maintainability.</p>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <p><span className="font-medium">Meaningful Names:</span> I use descriptive variable and function names to make code self-documenting and easier to understand.</p>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <p><span className="font-medium">Write Tests First:</span> I practice test-driven development whenever possible to ensure code reliability and prevent regressions.</p>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <p><span className="font-medium">Single Responsibility:</span> I design components and functions that do one thing and do it well, making code easier to test and maintain.</p>
                        </li>
                      </ul>
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
