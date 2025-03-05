import { useEffect, useState } from "react";
import { PageTransition } from "@/components/PageTransition";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/ProjectCard";
import { SkillBadge } from "@/components/SkillBadge";
import { useGitHubUser, useGitHubRepos, useLanguageStats, Repository, GITHUB_USERNAME } from "@/api/github";
import { ArrowRight, Github, ArrowDown, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { useTypingEffect } from "@/hooks/use-typing-effect";

export default function Home() {
  const [featuredProjects, setFeaturedProjects] = useState<Repository[]>([]);
  const { userData, loading: userLoading } = useGitHubUser(GITHUB_USERNAME);
  const { repositories, loading: reposLoading } = useGitHubRepos(GITHUB_USERNAME);
  const languages = useLanguageStats(repositories);
  
  const userName = userData?.name || 'Tousif Dewan';
  const { displayText, cursor } = useTypingEffect(userName, {
    typingSpeed: 90,
    delayBeforeStart: 600,
    cursorBlinkSpeed: 500
  });
  
  useEffect(() => {
    if (repositories.length > 0) {
      setFeaturedProjects(repositories.slice(0, 3));
    }
  }, [repositories]);
  
  const isLoading = userLoading || reposLoading;
  
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="min-h-[90vh] flex flex-col justify-center relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10"></div>
        </div>
        
        <div className="container max-w-7xl mx-auto px-6 md:px-8 py-16 flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <p className="text-primary font-mono tracking-wider mb-4">Hello, my name is</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-4">
              <span className="text-gradient inline-flex items-center">
                {displayText}{cursor}
              </span>
            </h1>
            <h2 className="text-3xl md:text-4xl font-display text-muted-foreground mb-6">
              {userData?.bio?.split(' ').slice(0, 3).join(' ') || 'Software Developer'}
            </h2>
            <p className="text-lg text-foreground/80 mb-8 max-w-xl">
              {userData?.bio || 'I build exceptional digital experiences with clean code and modern technologies. Passionate about creating intuitive and performant applications.'}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link to="/projects">
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href={`https://github.com/${GITHUB_USERNAME}`} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" /> GitHub Profile
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://linkedin.com/in/tousif-dewan" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                </a>
              </Button>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-primary/5 rounded-full animate-pulse-slow"></div>
              <div className="absolute inset-6 bg-gradient-to-bl from-primary/30 to-blue-500/20 rounded-full rotate-45 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
              <div className="absolute inset-12 glass rounded-full z-10 animate-float overflow-hidden flex items-center justify-center">
                <img 
                  src={userData?.avatar_url || "https://via.placeholder.com/300?text=Profile"} 
                  alt={userData?.name || "Developer"}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
          <button
            onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-foreground/60 hover:text-foreground transition-colors"
            aria-label="Scroll down"
          >
            <ArrowDown className="h-6 w-6" />
          </button>
        </div>
      </section>
      
      {/* Skills Section */}
      <section id="skills" className="py-20 bg-muted/30">
        <div className="container max-w-7xl mx-auto px-6 md:px-8">
          <SectionHeading 
            heading="Skills & Technologies"
            subheading="What I work with"
          >
            <p className="mt-4 text-muted-foreground max-w-3xl mx-auto">
              {userData?.bio || "I've worked with a variety of technologies in the web development world. From backend to frontend, I enjoy bringing ideas to life with code."}
            </p>
          </SectionHeading>
          
          <div className="mt-12">
            <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
              {isLoading ? (
                Array.from({ length: 8 }).map((_, index) => (
                  <div 
                    key={index}
                    className="h-8 bg-muted rounded-full w-24 animate-pulse"
                  />
                ))
              ) : (
                languages.map((language) => (
                  <SkillBadge 
                    key={language.name}
                    name={language.name}
                    color={language.color}
                    className="text-sm"
                  />
                ))
              )}
              <SkillBadge name="React" color="#61DAFB" />
              <SkillBadge name="Tailwind CSS" color="#38B2AC" />
              <SkillBadge name="Node.js" color="#68A063" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Projects Section */}
      <section className="py-20">
        <div className="container max-w-7xl mx-auto px-6 md:px-8">
          <SectionHeading 
            heading="Featured Projects"
            subheading="My recent work"
          >
            <p className="mt-4 text-muted-foreground max-w-3xl mx-auto">
              Here are a few of my recent projects. Want to see more? Check out my projects page.
            </p>
          </SectionHeading>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {isLoading ? (
              Array.from({ length: 3 }).map((_, index) => (
                <div 
                  key={index}
                  className="h-96 bg-muted rounded-lg animate-pulse"
                />
              ))
            ) : (
              featuredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  username={GITHUB_USERNAME}
                  featured={true}
                />
              ))
            )}
          </div>
          
          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link to="/projects">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
