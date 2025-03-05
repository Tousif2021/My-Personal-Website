
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { SkillBadge } from "./SkillBadge";
import { languageColors, Repository } from "@/api/github";
import { ArrowUpRight, Star, GitFork } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

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
      "overflow-hidden h-full transition-all duration-500 hover:shadow-xl group border-opacity-30",
      featured ? "border-primary/20" : ""
    )}>
      {imageUrl && (
        <div className="relative w-full h-48 overflow-hidden">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-full h-full relative"
          >
            <img 
              src={imageUrl} 
              alt={project.name} 
              className="w-full h-full object-cover"
            />
            
            {/* Enhanced decorative elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {/* Diagonal line decoration */}
              <motion.div 
                initial={{ opacity: 0, pathLength: 0 }}
                animate={{ opacity: 0.6, pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="absolute top-0 right-0 w-24 h-24"
              >
                <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <motion.path 
                    d="M0 100L100 0" 
                    stroke="white" 
                    strokeWidth="1.5" 
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="opacity-40"
                  />
                  <motion.path 
                    d="M20 100L100 20" 
                    stroke="white" 
                    strokeWidth="1" 
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, delay: 0.2, ease: "easeInOut" }}
                    className="opacity-30"
                  />
                </svg>
              </motion.div>
              
              {/* Corner geometric element */}
              <div className="absolute top-0 left-0">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <motion.rect 
                    x="0" 
                    y="0" 
                    width="30" 
                    height="30" 
                    fill="none" 
                    stroke="rgba(255,255,255,0.3)" 
                    strokeWidth="1.5"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                  />
                </svg>
              </div>
              
              {/* Bottom right decorative dot pattern */}
              <div className="absolute bottom-3 right-3">
                <motion.div 
                  className="grid grid-cols-3 gap-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.3 }}
                >
                  {[...Array(9)].map((_, i) => (
                    <motion.div 
                      key={i}
                      className="w-1 h-1 bg-white rounded-full opacity-60"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.4, delay: i * 0.05 }}
                    />
                  ))}
                </motion.div>
              </div>
              
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
          </motion.div>
          
          {featured && (
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="absolute top-3 left-3"
            >
              <span className="bg-primary text-primary-foreground text-xs font-medium px-2.5 py-1 rounded-full shadow-md">
                Featured
              </span>
            </motion.div>
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
          <motion.div 
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="mb-3"
          >
            <SkillBadge name={project.language} color={languageColor} />
          </motion.div>
        )}
      </CardContent>
      
      <CardFooter className="flex justify-between items-center p-4 pt-0">
        <div className="flex items-center space-x-3">
          <motion.div 
            whileHover={{ y: -2 }} 
            className="flex items-center"
          >
            <Star className="h-4 w-4 mr-1 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">{project.stargazers_count}</span>
          </motion.div>
          <motion.div 
            whileHover={{ y: -2 }} 
            className="flex items-center"
          >
            <GitFork className="h-4 w-4 mr-1 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">{project.forks_count}</span>
          </motion.div>
        </div>
        
        <motion.a
          whileHover={{ x: 3 }}
          transition={{ type: "spring", stiffness: 400 }}
          href={project.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm font-medium text-primary hover:underline"
        >
          View Project <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
        </motion.a>
      </CardFooter>
    </Card>
  );
}
