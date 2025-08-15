
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

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
      <div className="relative w-full max-w-[260px] md:max-w-[320px] lg:max-w-lg aspect-square mx-auto">
        {/* Outer orbital rings */}
        <div className="absolute inset-0 gradient-primary rounded-full animate-pulse-slow opacity-20 blur-xl"></div>
        <div className="absolute inset-4 bg-gradient-to-tr from-accent/30 via-primary/20 to-primary-glow/30 rounded-full animate-pulse-slow blur-lg" style={{ animationDelay: '1s' }}></div>
        <div className="absolute inset-8 bg-gradient-to-bl from-primary-glow/40 to-accent/25 rounded-full animate-pulse-slow blur-md" style={{ animationDelay: '2s' }}></div>
        
        {/* Rotating geometric borders */}
        <div className="absolute inset-[-15px] rounded-full border-2 border-dashed border-primary/30 animate-rotate-slow"></div>
        <div className="absolute inset-[-8px] rounded-full border border-dotted border-accent/40 animate-orbit-reverse"></div>
        
        {/* Main profile container */}
        <div className="absolute inset-14 surface-elevated rounded-full z-10 animate-float-very-slow overflow-hidden flex items-center justify-center group transition-all duration-700 hover:shadow-2xl glow-primary border-2 border-primary/20">
          {/* Sparkle constellation on hover */}
          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-700 transform group-hover:rotate-12 group-hover:scale-110">
            <Sparkles className="w-6 h-6 text-primary-glow animate-pulse" />
          </div>
          <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-80 transition-all duration-500 transform group-hover:rotate-45" style={{ animationDelay: '200ms' }}>
            <Sparkles className="w-4 h-4 text-accent animate-pulse" />
          </div>
          <div className="absolute top-6 left-6 opacity-0 group-hover:opacity-60 transition-all duration-600 transform group-hover:-rotate-12" style={{ animationDelay: '400ms' }}>
            <Sparkles className="w-3 h-3 text-primary animate-pulse" />
          </div>
          
          {/* Dynamic background gradient */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-accent/5 to-primary-glow/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
          
          {/* Profile image with enhanced effects */}
          <div className="relative w-full h-full rounded-full overflow-hidden">
            <img 
              src={userData?.avatar_url || "https://via.placeholder.com/300?text=Profile"} 
              alt={userData?.name || "Developer"}
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 filter group-hover:contrast-[1.15] group-hover:brightness-110"
            />
            
            {/* Holographic overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay"></div>
          </div>
          
          {/* Advanced edge glow */}
          <div className="absolute inset-[-3px] rounded-full bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-700"></div>
          <div className="absolute inset-[-1px] rounded-full bg-gradient-to-b from-accent/0 via-accent/30 to-accent/0 opacity-0 group-hover:opacity-80 blur-sm transition-opacity duration-500"></div>
        </div>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 right-0 w-2 h-2 bg-primary/60 rounded-full animate-float opacity-40" style={{ animationDelay: '0s' }}></div>
        <div className="absolute bottom-1/3 left-4 w-1.5 h-1.5 bg-accent/50 rounded-full animate-float opacity-50" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-2/3 right-8 w-1 h-1 bg-primary-glow/70 rounded-full animate-float opacity-60" style={{ animationDelay: '2s' }}></div>
      </div>
    </motion.div>
  );
}
