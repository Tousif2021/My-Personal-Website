
import { Github, Calendar, Star, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { Repository, useGitHubRepos, GITHUB_USERNAME } from "@/api/github";

export function ProjectJourneyTab() {
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

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-destructive py-10">
        <p>Failed to load GitHub projects. Please try again later.</p>
      </div>
    );
  }

  if (projectTimeline.length === 0) {
    return (
      <div className="text-center py-10">
        <p>No projects found for this GitHub username.</p>
      </div>
    );
  }

  return (
    <>
      <h3 className="text-2xl font-display font-semibold mb-8 text-center">My GitHub Project Journey</h3>
      
      <div className="relative border-l-2 border-primary/30 ml-4 md:ml-6 pl-8 pb-8 space-y-12">
        {displayedProjects.map((project) => (
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
  );
}
