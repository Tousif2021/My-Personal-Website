
import { motion } from "framer-motion";

interface ProfileAvatarProps {
  userData: any;
}

export function ProfileAvatar({ userData }: ProfileAvatarProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.4 }}
      className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2"
    >
      <div className="relative w-full max-w-[240px] md:max-w-[280px] lg:max-w-md aspect-square mx-auto">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-primary/5 rounded-full animate-pulse-slow"></div>
        <div className="absolute inset-6 bg-gradient-to-bl from-primary/30 to-blue-500/20 rounded-full rotate-45 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        
        <div className="absolute inset-[-10px] rounded-full border-2 border-dashed border-primary/20 animate-rotate-slow"></div>
        
        <div className="absolute inset-12 glass rounded-full z-10 animate-float-very-slow overflow-hidden flex items-center justify-center group transition-all duration-500 hover:shadow-lg hover:shadow-primary/20">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <img 
            src={userData?.avatar_url || "https://via.placeholder.com/300?text=Profile"} 
            alt={userData?.name || "Developer"}
            className="w-full h-full object-cover rounded-full transition-transform duration-500 group-hover:scale-105 filter group-hover:contrast-[1.1]"
          />
          
          <div className="absolute inset-[-2px] rounded-full bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500"></div>
        </div>
      </div>
    </motion.div>
  );
}
