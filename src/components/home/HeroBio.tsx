
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
        className="relative mb-3 group"
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary/0 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <h1 className="relative text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold tracking-tight">
          <span className="hover:text-primary transition-all duration-500 inline-flex items-center bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
            {displayText}{cursor}
          </span>
        </h1>
      </motion.div>
      
      {/* Institution */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="relative mb-4 group"
      >
        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/10 to-primary/0 rounded-md blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="relative flex items-center gap-2">
          <GraduationCap className="h-5 w-5 text-blue-400/80" />
          <h2 className="text-xl md:text-2xl lg:text-3xl font-display font-semibold bg-gradient-to-r from-blue-400 to-primary bg-clip-text text-transparent">
            KTH ROYAL INSTITUTE OF TECHNOLOGY
          </h2>
        </div>
      </motion.div>
      
      {/* Bio */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-lg font-medium mb-5 max-w-xl relative"
      >
        <div className="glass p-4 rounded-md border border-primary/10 backdrop-blur-md shadow-sm">
          <div className="absolute top-0 right-0 -mt-2 -mr-2">
            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-r from-primary to-blue-400 text-white shadow-md">
              <BookOpen className="w-3.5 h-3.5" />
            </div>
          </div>
          <div className="flex gap-3">
            <div className="w-1 self-stretch bg-gradient-to-b from-primary to-blue-400 rounded-full"></div>
            <span className="font-mono text-foreground/90 tracking-tight">{bioText}{bioCursor}</span>
          </div>
        </div>
      </motion.div>
    </>
  );
}
