
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { SkillBadge } from "./SkillBadge";
import { languageColors, Repository } from "@/api/github";
import { ArrowUpRight, Star, GitFork } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

interface ProjectCardProps {
  project: Repository;
  username: string;
  featured?: boolean;
}

export function ProjectCard({ project, username, featured = false }: ProjectCardProps) {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  
  useEffect(() => {
    const fetchImage = async () => {
      try {
        // Attempt to fetch placeholder image from README
        const response = await fetch(`https://raw.githubusercontent.com/${username}/${project.name}/main/preview.png`);
        if (response.ok) {
          setImageUrl(`https://raw.githubusercontent.com/${username}/${project.name}/main/preview.png`);
          return;
        }
        
        // Fallback to a screenshot service
        setImageUrl(`https://opengraph.githubassets.com/1/${username}/${project.name}`);
      } catch (error) {
        console.error("Error fetching project image:", error);
      }
    };
    
    fetchImage();
  }, [project.name, username]);
  
  const languageColor = project.language ? (languageColors[project.language] || languageColors.default) : languageColors.default;
  
  return (
    <Card className={cn(
      "overflow-hidden h-full transition-all duration-300 hover:shadow-lg group",
      featured ? "border-primary/20" : ""
    )}>
      {imageUrl && (
        <div className="relative w-full h-48 overflow-hidden">
          <img 
            src={imageUrl} 
            alt={project.name} 
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
          {featured && (
            <div className="absolute top-3 left-3">
              <span className="bg-primary text-primary-foreground text-xs font-medium px-2.5 py-1 rounded-full">
                Featured
              </span>
            </div>
          )}
        </div>
      )}
      
      <CardHeader className="p-4 pb-2">
        <CardTitle className="text-xl font-display">{project.name}</CardTitle>
        <CardDescription className="line-clamp-2 h-10">
          {project.description || "No description available"}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="p-4 pt-2">
        {project.language && (
          <div className="mb-3">
            <SkillBadge name={project.language} color={languageColor} />
          </div>
        )}
      </CardContent>
      
      <CardFooter className="flex justify-between items-center p-4 pt-0">
        <div className="flex items-center space-x-3">
          <div className="flex items-center">
            <Star className="h-4 w-4 mr-1 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">{project.stargazers_count}</span>
          </div>
          <div className="flex items-center">
            <GitFork className="h-4 w-4 mr-1 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">{project.forks_count}</span>
          </div>
        </div>
        
        <a
          href={project.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm font-medium text-primary hover:underline"
        >
          View Project <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
        </a>
      </CardFooter>
    </Card>
  );
}
