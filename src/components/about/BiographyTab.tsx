
import { CheckCircle, Code, Monitor, Cpu, Database, Globe } from "lucide-react";
import { ProfilePicture } from "./ProfilePicture";
import { GITHUB_USERNAME } from "@/api/github";
import { motion } from "framer-motion";

export function BiographyTab() {
  const skills = [
    "JavaScript/TypeScript", "React.js", "Node.js", "HTML/CSS", 
    "Git/GitHub", "Responsive Design", "RESTful APIs", "Performance Optimization",
    "C", "ASSEMBLY", "RISC V MCU", "Sustainable Development", "Ergonomics"
  ];
  
  return (
    <div className="grid md:grid-cols-5 gap-8 items-start">
      <div className="md:col-span-2">
        <div className="relative group">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative z-10"
          >
            <ProfilePicture username={GITHUB_USERNAME} />
          </motion.div>
          
          {/* Binary code floating in background */}
          <div className="absolute -inset-4 -z-10 overflow-hidden rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-700">
            <div className="absolute inset-0 text-[6px] text-primary font-mono rotate-6 overflow-hidden">
              {Array(60).fill(0).map((_, i) => (
                <div key={i} className="whitespace-nowrap">
                  {Array(20).fill(0).map((_, j) => (
                    Math.random() > 0.5 ? '1' : '0'
                  )).join('')}
                </div>
              ))}
            </div>
          </div>
          
          {/* Tech icons floating around */}
          <div className="absolute top-0 right-0 -mr-6 mt-8 text-primary/30 opacity-0 group-hover:opacity-100 transition-all duration-500">
            <Code className="h-6 w-6 animate-float" style={{ animationDelay: '0.1s' }} />
          </div>
          <div className="absolute bottom-0 left-0 -ml-6 mb-8 text-primary/30 opacity-0 group-hover:opacity-100 transition-all duration-500">
            <Monitor className="h-6 w-6 animate-float" style={{ animationDelay: '0.5s' }} />
          </div>
          <div className="absolute top-1/3 left-0 -ml-8 text-primary/30 opacity-0 group-hover:opacity-100 transition-all duration-500">
            <Cpu className="h-5 w-5 animate-float" style={{ animationDelay: '0.9s' }} />
          </div>
          <div className="absolute top-2/3 right-0 -mr-8 text-primary/30 opacity-0 group-hover:opacity-100 transition-all duration-500">
            <Database className="h-5 w-5 animate-float" style={{ animationDelay: '1.3s' }} />
          </div>
          <div className="absolute bottom-1/4 right-0 -mr-6 text-primary/30 opacity-0 group-hover:opacity-100 transition-all duration-500">
            <Globe className="h-4 w-4 animate-float" style={{ animationDelay: '1.7s' }} />
          </div>
        </div>
      </div>
      
      <div className="md:col-span-3 space-y-4">
        <motion.h3 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-2xl font-display font-semibold mb-4 relative inline-block"
        >
          <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
            Hello There!
          </span>
          <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/50 to-transparent"></span>
        </motion.h3>
        
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          Tousif again! I'm a passionate software developer who loves turning ideas into reality through code. My journey into tech started with pure curiosity—wondering how digital products worked—and quickly turned into a full-blown obsession with building them myself.
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          I thrive in both frontend and backend development, crafting smooth, user-friendly experiences while ensuring everything runs efficiently under the hood. Performance optimization and user experience design are my sweet spots—I love making applications that not only work well but feel great to use.
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          Beyond coding, you'll often find me exploring new technologies, diving into open-source projects, or sharing what I've learned with the developer community. When I step away from the screen, I'm probably out on a hike, capturing moments through my camera lens, or enjoying a perfectly brewed cup of coffee.
        </motion.p>
        
        <motion.h4 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="text-xl font-display font-semibold mt-6 mb-3 relative inline-block"
        >
          <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
            Core Skills
          </span>
          <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/50 to-transparent"></span>
        </motion.h4>
        
        <motion.ul 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-2"
        >
          {skills.map((skill, index) => (
            <motion.li 
              key={skill} 
              className="flex items-center group"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
            >
              <CheckCircle className="mr-2 h-4 w-4 text-primary transition-transform duration-300 group-hover:scale-110" />
              <span className="transition-colors duration-300 group-hover:text-primary">{skill}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
}
