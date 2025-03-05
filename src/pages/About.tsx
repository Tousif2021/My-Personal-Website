import { PageTransition } from "@/components/PageTransition";
import { SectionHeading } from "@/components/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, Github, Calendar, Star, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";
import { GITHUB_USERNAME, Repository, useGitHubRepos } from "@/api/github";
import { format } from "date-fns";

export default function About() {
  const { repositories, loading, error } = useGitHubRepos(GITHUB_USERNAME);
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
