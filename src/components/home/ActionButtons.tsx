
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink, Github, Linkedin, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import { GITHUB_USERNAME } from "@/api/github";

export function ActionButtons() {
  return (
    <div className="flex flex-wrap gap-4 mb-8">
      <Button asChild size="lg" className="group relative overflow-hidden gradient-primary hover:scale-105 transition-all duration-500 shadow-lg glow-primary hover:shadow-2xl text-white font-semibold px-8 py-3 rounded-xl">
        <Link to="/projects" className="group flex items-center">
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          <Rocket className="mr-3 h-5 w-5 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" /> 
          <span className="text-lg">Explore Projects</span>
          <ArrowRight className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
        </Link>
      </Button>
      
      <Button variant="outline" size="lg" asChild className="group relative overflow-hidden glass-card border-2 border-primary/30 hover:border-primary/60 transition-all duration-500 shadow-lg hover:shadow-xl font-semibold px-6 py-3 rounded-xl hover:scale-105">
        <a href={`https://github.com/${GITHUB_USERNAME}`} target="_blank" rel="noopener noreferrer" className="flex items-center">
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          <Github className="mr-3 h-5 w-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" /> 
          <span className="text-lg">GitHub</span>
          <ExternalLink className="ml-3 h-4 w-4 opacity-70 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-[-3px]" />
        </a>
      </Button>
      
      <Button variant="outline" size="lg" asChild className="group relative overflow-hidden glass-card border-2 border-accent/30 hover:border-accent/60 transition-all duration-500 shadow-lg hover:shadow-xl font-semibold px-6 py-3 rounded-xl hover:scale-105">
        <a href="https://www.linkedin.com/in/tousifdewan" target="_blank" rel="noopener noreferrer" className="flex items-center">
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-accent/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          <Linkedin className="mr-3 h-5 w-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" /> 
          <span className="text-lg">LinkedIn</span>
          <ExternalLink className="ml-3 h-4 w-4 opacity-70 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-[-3px]" />
        </a>
      </Button>
    </div>
  );
}
