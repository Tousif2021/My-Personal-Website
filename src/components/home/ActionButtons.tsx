
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink, Github, Linkedin, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import { GITHUB_USERNAME } from "@/api/github";

export function ActionButtons() {
  return (
    <div className="flex flex-wrap gap-4 mb-6">
      <Button asChild size="lg" className="group relative overflow-hidden bg-gradient-to-r from-primary to-blue-400 hover:from-primary/90 hover:to-blue-400/90 transition-all duration-500 shadow-md hover:shadow-lg hover:shadow-primary/20">
        <Link to="/projects" className="group flex items-center">
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary to-blue-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
          <Rocket className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:rotate-12" /> 
          <span>View Projects</span>
          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </Button>
      
      <Button variant="outline" size="lg" asChild className="group relative overflow-hidden border-primary/20 hover:border-primary/40 backdrop-blur-sm bg-background/30 hover:bg-background/50 transition-all duration-300 shadow-sm hover:shadow-md">
        <a href={`https://github.com/${GITHUB_USERNAME}`} target="_blank" rel="noopener noreferrer" className="flex items-center">
          <span className="absolute inset-0 w-full h-full bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          <Github className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:scale-110" /> 
          <span>GitHub Profile</span>
          <ExternalLink className="ml-2 h-3.5 w-3.5 opacity-70 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-[-2px]" />
        </a>
      </Button>
      
      <Button variant="outline" size="lg" asChild className="group relative overflow-hidden border-primary/20 hover:border-primary/40 backdrop-blur-sm bg-background/30 hover:bg-background/50 transition-all duration-300 shadow-sm hover:shadow-md">
        <a href="https://www.linkedin.com/in/tousifdewan" target="_blank" rel="noopener noreferrer" className="flex items-center">
          <span className="absolute inset-0 w-full h-full bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          <Linkedin className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:scale-110" /> 
          <span>LinkedIn</span>
          <ExternalLink className="ml-2 h-3.5 w-3.5 opacity-70 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-[-2px]" />
        </a>
      </Button>
    </div>
  );
}
