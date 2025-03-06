
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Rocket, ExternalLink, Terminal, Code, Sparkles, GraduationCap, BookOpen, ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useTypingEffect } from "@/hooks/use-typing-effect";
import { motion } from "framer-motion";
import { GITHUB_USERNAME } from "@/api/github";
import { ProfileAvatar } from './ProfileAvatar';

interface HeroSectionProps {
  userName: string;
  userData: any;
}

export function HeroSection({ userName, userData }: HeroSectionProps) {
  const { displayText, cursor } = useTypingEffect(userName, {
    typingSpeed: 90,
    delayBeforeStart: 600,
    cursorBlinkSpeed: 500
  });

  const bioParts = [
    "CSE Major @ KTH",
    "Building AI-driven solutions",
    "Passionate about innovation & telecom R&D"
  ];
  
  const { displayText: bioText, cursor: bioCursor } = useTypingEffect(bioParts.join(" | "), {
    typingSpeed: 50,
    delayBeforeStart: 1500,
    cursorBlinkSpeed: 500
  });

  return (
    <section className="min-h-[70vh] flex flex-col justify-center relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 opacity-10">
          <pre className="text-primary font-mono text-[8px] leading-tight">
            {Array(30).fill(0).map(() => 
              Math.random() > 0.5 ? '10101001001010101001' : '01001010100101001010'
            ).join('\n')}
          </pre>
        </div>
      </div>
      
      <div className="container max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-4 md:py-6 flex flex-col lg:flex-row items-center gap-8 md:gap-12">
        <div className="w-full lg:w-1/2 animate-fade-in order-2 lg:order-1" style={{ animationDelay: '0.2s' }}>
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
            className="text-lg font-medium mb-6 max-w-xl relative"
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
          
          {/* Action buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, staggerChildren: 0.1 }}
            className="flex flex-wrap gap-4"
          >
            <Button asChild size="lg" className="group relative overflow-hidden bg-gradient-to-r from-primary to-blue-400 hover:from-primary/90 hover:to-blue-400/90 transition-all duration-500 shadow-md hover:shadow-lg hover:shadow-primary/20">
              <Link to="/projects" className="group flex items-center">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary to-blue-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                <Rocket className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:rotate-12" /> 
                <span>View Projects</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
            
            <Button variant="outline" size="lg" asChild className="group relative overflow-hidden border-primary/20 hover:border-primary/40 backdrop-blur-sm bg-background/30 hover:bg-background/50 transition-all duration-300 shadow-sm hover:shadow-md">
              <a href={`https://github.com/${GITHUB_USERNAME}`} target="_blank" rel="noopener noreferrer" className="flex items-center">
                <span className="absolute inset-0 w-full h-full bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <Github className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:scale-110" /> 
                <span>GitHub Profile</span>
                <ExternalLink className="ml-2 h-3.5 w-3.5 opacity-70 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-[-2px]" />
              </a>
            </Button>
            
            <Button variant="outline" size="lg" asChild className="group relative overflow-hidden border-primary/20 hover:border-primary/40 backdrop-blur-sm bg-background/30 hover:bg-background/50 transition-all duration-300 shadow-sm hover:shadow-md">
              <a href="https://www.linkedin.com/in/tousifdewan" target="_blank" rel="noopener noreferrer" className="flex items-center">
                <span className="absolute inset-0 w-full h-full bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <Linkedin className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:scale-110" /> 
                <span>LinkedIn</span>
                <ExternalLink className="ml-2 h-3.5 w-3.5 opacity-70 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-[-2px]" />
              </a>
            </Button>
          </motion.div>
        </div>
        
        <ProfileAvatar userData={userData} />
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-2 md:bottom-6 left-0 right-0 flex justify-center animate-bounce"
      >
        <button
          onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
          className="text-foreground/60 hover:text-foreground transition-colors group glass p-2 rounded-full"
          aria-label="Scroll down"
        >
          <ArrowDown className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-1" />
        </button>
      </motion.div>
    </section>
  );
}
