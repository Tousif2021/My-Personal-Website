
import { GraduationCap, Building, BookOpen, LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface Education {
  institution: string;
  degree: string;
  focus: string;
  icon: LucideIcon;
  color: string;
}

export function EducationTab() {
  // Sample education data - replace with your actual education information
  const educationJourney: Education[] = [
    {
      institution: "Bachelor of Science",
      degree: "KTH The Royal Institute of Technology, Stockholm, Sweden",
      focus: "Computer Science",
      icon: GraduationCap,
      color: "text-blue-500"
    },
    {
      institution: "Higher Secondary Education (A-Level / International Baccalaureate)",
      degree: "Åva Gymnasium, Stockholm, Sweden",
      focus: "Science",
      icon: BookOpen,
      color: "text-green-500"
    },
    {
      institution: "Secondary School Certificate",
      degree: "Mohammadpur Government High School",
      focus: "Science and Mathematics",
      icon: BookOpen,
      color: "text-purple-500"
    },
    {
      institution: "Elementary education / Primary School Certificate",
      degree: "Comilla Zilla School, Comilla, Bangladesh",
      focus: "Basic education in literacy, numeracy, and foundational sciences.",
      icon: Building,
      color: "text-amber-500"
    }
  ];
  
  return (
    <div className="space-y-6">
      <motion.h3 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-2xl font-display font-semibold mb-6 relative inline-block"
      >
        <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
          Education Journey
        </span>
        <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/50 to-transparent"></span>
      </motion.h3>
      
      <div className="relative">
        {/* Vertical timeline line */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-blue-400/30 to-transparent"></div>
        
        {/* Education items */}
        {educationJourney.map((edu, index) => (
          <motion.div
            key={edu.institution}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 * index }}
            className="relative pl-14 pb-8 group"
          >
            {/* Timeline dot */}
            <div className="absolute left-0 top-1.5 w-8 h-8 rounded-full bg-background border border-primary/20 flex items-center justify-center">
              <edu.icon className={`w-4 h-4 ${edu.color} group-hover:scale-110 transition-transform duration-300`} />
            </div>
            
            {/* Content */}
            <div className="glass p-5 rounded-lg border border-primary/10 backdrop-blur-sm group-hover:border-primary/30 transition-all duration-300">
              <h4 className="text-lg font-semibold font-display">{edu.institution}</h4>
              <p className="text-primary mt-1">{edu.degree}</p>
              <p className="text-muted-foreground text-sm mt-2">{edu.focus}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
