
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { Repository } from "@/api/github";

interface ProjectsSectionProps {
  featuredProjects: Repository[];
  isLoading: boolean;
  username: string;
}

export function ProjectsSection({ featuredProjects, isLoading, username }: ProjectsSectionProps) {
  return (
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
            featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ProjectCard
                  project={project}
                  username={username}
                  featured={true}
                />
              </motion.div>
            ))
          )}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Button asChild size="lg" className="group">
            <Link to="/projects">
              View All Projects 
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
