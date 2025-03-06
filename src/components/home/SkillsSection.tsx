
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { SkillBadge } from "@/components/SkillBadge";

interface SkillsSectionProps {
  allSkills: Array<{name: string, color: string, isGithub: boolean}>;
  isLoading: boolean;
}

export function SkillsSection({ allSkills, isLoading }: SkillsSectionProps) {
  return (
    <section id="skills" className="py-12 bg-muted/30">
      <div className="container max-w-7xl mx-auto px-6 md:px-8">
        <SectionHeading 
          heading="Skills & Technologies"
          subheading="What I work with"
        />
        
        <div className="mt-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, staggerChildren: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto"
          >
            {isLoading ? (
              Array.from({ length: 8 }).map((_, index) => (
                <div 
                  key={index}
                  className="h-8 bg-muted rounded-full w-24 animate-pulse"
                />
              ))
            ) : (
              allSkills.map((skill, index) => (
                <motion.div
                  key={`${skill.name}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.05 }}
                >
                  <SkillBadge 
                    name={skill.name}
                    color={skill.color}
                    isNew={!skill.isGithub}
                    className="text-sm hover:shadow-md transition-all duration-300"
                  />
                </motion.div>
              ))
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
