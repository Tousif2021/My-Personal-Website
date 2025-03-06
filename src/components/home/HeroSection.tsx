
import { ArrowDown, ArrowRight, Github, Linkedin, Rocket, ExternalLink, Terminal, Code, Sparkles, GraduationCap, BookOpen } from "lucide-react";
import { ProfileAvatar } from './ProfileAvatar';
import { HeroBio } from './HeroBio';
import { ActionButtons } from './ActionButtons';
import { SocialMediaButtons } from './SocialMediaButtons';
import { ScrollIndicator } from './ScrollIndicator';
import { HeroBackground } from './HeroBackground';
import { motion } from "framer-motion";

interface HeroSectionProps {
  userName: string;
  userData: any;
}

export function HeroSection({ userName, userData }: HeroSectionProps) {
  const bioParts = [
    "CSE Major @ KTH",
    "Building AI-driven solutions",
    "Passionate about innovation & telecom R&D"
  ];

  return (
    <section className="min-h-[65vh] flex flex-col justify-center relative overflow-hidden">
      {/* Background effects */}
      <HeroBackground />
      
      <div className="container max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-2 md:py-4 flex flex-col lg:flex-row items-center gap-6 md:gap-10">
        <div className="w-full lg:w-1/2 animate-fade-in order-2 lg:order-1" style={{ animationDelay: '0.2s' }}>
          {/* Bio section with name, institution, and description */}
          <HeroBio userName={userName} bioParts={bioParts} />
          
          {/* Action buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, staggerChildren: 0.1 }}
          >
            <ActionButtons />
          </motion.div>
          
          {/* Social Media Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <SocialMediaButtons />
          </motion.div>
        </div>
        
        <ProfileAvatar userData={userData} />
      </div>
      
      {/* Scroll indicator */}
      <ScrollIndicator />
    </section>
  );
}
