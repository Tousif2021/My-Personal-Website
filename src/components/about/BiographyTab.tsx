
import { CheckCircle } from "lucide-react";
import { ProfilePicture } from "./ProfilePicture";
import { GITHUB_USERNAME } from "@/api/github";

export function BiographyTab() {
  const skills = [
    "JavaScript/TypeScript", "React.js", "Node.js", "HTML/CSS", 
    "Git/GitHub", "Responsive Design", "RESTful APIs", "Performance Optimization",
    "C", "ASSEMBLY", "RISC V MCU", "Sustainable Development", "Ergonomics"
  ];
  
  return (
    <div className="grid md:grid-cols-5 gap-8 items-start">
      <div className="md:col-span-2">
        <ProfilePicture username={GITHUB_USERNAME} />
      </div>
      
      <div className="md:col-span-3 space-y-4">
        <h3 className="text-2xl font-display font-semibold mb-4">Hello There!</h3>
        
        <p>
          Hey there! I'm a passionate software developer who loves turning ideas into reality through code. My journey into tech started with pure curiosity—wondering how digital products worked—and quickly turned into a full-blown obsession with building them myself.
        </p>
        
        <p>
          I thrive in both frontend and backend development, crafting smooth, user-friendly experiences while ensuring everything runs efficiently under the hood. Performance optimization and user experience design are my sweet spots—I love making applications that not only work well but feel great to use.
        </p>
        
        <p>
          Beyond coding, you'll often find me exploring new technologies, diving into open-source projects, or sharing what I've learned with the developer community. When I step away from the screen, I'm probably out on a hike, capturing moments through my camera lens, or enjoying a perfectly brewed cup of coffee.
        </p>
        
        <h4 className="text-xl font-display font-semibold mt-6 mb-3">Core Skills</h4>
        
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {skills.map((skill) => (
            <li key={skill} className="flex items-center">
              <CheckCircle className="mr-2 h-4 w-4 text-primary" />
              <span>{skill}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
