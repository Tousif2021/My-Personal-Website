
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
                    <div className="relative w-full aspect-square max-w-md mx-auto">
                      <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-primary/5 rounded-full animate-pulse-slow"></div>
                      <div className="absolute inset-6 bg-gradient-to-bl from-primary/30 to-blue-500/20 rounded-full rotate-45 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
                      <div className="absolute inset-0 glass rounded-full z-10 overflow-hidden flex items-center justify-center shadow-lg">
                        <img 
                          src={userData?.avatar_url || "https://via.placeholder.com/400"} 
                          alt={userData?.name || "Developer"} 
                          className="w-full h-full object-cover rounded-full hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                      </div>
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
                        "Git/GitHub", "Responsive Design", "RESTful APIs", "Performance Optimization","C","ASSEMBLY","RISC V MCU","Sustainable Development and Ergonomics"].map((skill) => (
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
                  <Card>
                    <CardContent className="pt-6">
                      <h4 className="text-xl font-display font-semibold mb-4">User-Centered Design</h4>
                      <section>
    
    <p>
        I believe that great software is more than just functional—it should be intuitive, efficient, and built with purpose. 
        My approach to development is guided by a few core principles:
    </p>

    <h3>1️⃣ User-Centric Design</h3>
    <p>
        Every line of code should contribute to a seamless and enjoyable user experience. If the end user struggles to use an 
        application, then no amount of technical brilliance can save it.
    </p>

    <h3>2️⃣ Performance & Efficiency</h3>
    <p>
        Speed and scalability matter. I aim to write clean, optimized code that ensures applications run smoothly, 
        whether it's a small project or a large-scale system.
    </p>

    <h3>3️⃣ Reusability & SOLID Principles</h3>
    <p>
        I strongly believe in writing modular, reusable functions that follow SOLID principles. A well-structured function 
        should be easy to maintain, extend, and integrate into different parts of a project without unnecessary duplication.
    </p>

    <h3>4️⃣ Recursion & Problem-Solving</h3>
    <p>
        Sometimes, the best solutions lie in breaking problems down into smaller, self-solving pieces. 
        I enjoy using recursion where it makes sense, ensuring that complex problems are approached with elegance and simplicity.
    </p>

    <h3>5️⃣ Avoiding Common Mistakes</h3>
    <p>
        Over time, I’ve learned that writing great software is as much about avoiding mistakes as it is about implementing best practices. 
        I follow disciplined coding habits such as:
    </p>
    <ul>
        <li>Minimizing global variables to prevent unintended side effects and improve maintainability.</li>
        <li>Using meaningful variable and function names for readability.</li>
        <li>Writing modular functions instead of bloated, hard-to-debug code blocks.</li>
        <li>Testing thoroughly to catch bugs early and ensure reliability.</li>
    </ul>

    <h3>6️⃣ Continuous Learning & Growth</h3>
    <p>
        Technology evolves rapidly, and so should we as developers. I constantly explore new tools, frameworks, and best 
        practices to refine my skills and create even better solutions.
    </p>

    <p>
        For me, coding isn’t just about solving problems—it’s about crafting experiences, making lives easier, 
        and pushing the boundaries of what’s possible.
    </p>
</section>

                    </CardContent>
                  
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
