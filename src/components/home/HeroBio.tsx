
import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Terminal } from "lucide-react";
import { useTypingEffect } from "@/hooks/use-typing-effect";

interface HeroBioProps {
  userName: string;
  bioParts: string[];
}

export function HeroBio({ userName, bioParts }: HeroBioProps) {
  const { displayText, cursor } = useTypingEffect(userName, {
    typingSpeed: 90,
    delayBeforeStart: 600,
    cursorBlinkSpeed: 500
  });
  
  const { displayText: bioText, cursor: bioCursor } = useTypingEffect(bioParts.join(" | "), {
    typingSpeed: 50,
    delayBeforeStart: 1500,
    cursorBlinkSpeed: 500
  });

  return (
    <>
      {/* Header badge */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="flex items-center gap-2 mb-4 group"
      >
        <Terminal className="h-4 w-4 text-primary group-hover:animate-pulse transition-all" />
        <p className="text-primary font-mono tracking-wider">Hello, my name is</p>
      </motion.div>
      
      {/* Name */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative mb-4 group"
      >
        <div className="absolute -inset-2 gradient-primary rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
        <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 via-accent/20 to-primary-glow/30 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <h1 className="relative text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-black tracking-tight leading-[0.9]">
          <span className="gradient-text hover:scale-105 transition-transform duration-500 inline-block">
            {displayText}{cursor}
          </span>
        </h1>
      </motion.div>
      
      {/* Institution */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="relative mb-6 group"
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 via-primary/15 to-primary-glow/20 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="relative glass-card p-4 rounded-xl border border-primary/20">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-gradient-to-br from-accent/20 to-primary/20 group-hover:from-accent/30 group-hover:to-primary/30 transition-all duration-300">
              <GraduationCap className="h-6 w-6 text-primary-glow" />
            </div>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-display font-bold gradient-text tracking-wide">
              KTH ROYAL INSTITUTE OF TECHNOLOGY
            </h2>
          </div>
        </div>
      </motion.div>
      
      {/* Bio */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-lg font-medium mb-6 max-w-2xl relative"
      >
        <div className="surface-elevated p-6 rounded-2xl border border-primary/20 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          
          <div className="absolute top-4 right-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl gradient-primary text-white shadow-lg glow-primary">
              <BookOpen className="w-5 h-5" />
            </div>
          </div>
          
          <div className="flex gap-4 relative z-10">
            <div className="w-1.5 self-stretch gradient-primary rounded-full shadow-sm"></div>
            <div className="flex-1">
              <span className="font-mono text-lg text-foreground/95 tracking-tight leading-relaxed">
                {bioText}{bioCursor}
              </span>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute bottom-0 left-0 w-full h-1 gradient-primary opacity-30"></div>
        </div>
      </motion.div>
    </>
  );
}
