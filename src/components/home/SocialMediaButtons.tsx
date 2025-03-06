
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, MessageCircle, SquareStack } from "lucide-react";

export function SocialMediaButtons() {
  return (
    <div className="mb-4">
      <div className="flex items-center gap-2 mb-3">
        <div className="h-px bg-gradient-to-r from-primary/30 to-transparent flex-grow max-w-[60px]"></div>
        <span className="text-sm font-medium text-foreground/70">Connect on Social Media</span>
        <div className="h-px bg-gradient-to-l from-primary/30 to-transparent flex-grow max-w-[60px]"></div>
      </div>
      
      <div className="flex flex-wrap gap-4">
        {/* Facebook - Blue */}
        <Button variant="outline" size="icon" asChild className="rounded-full w-11 h-11 bg-gradient-to-br from-blue-500/10 to-blue-600/5 hover:from-blue-500/20 hover:to-blue-600/10 border-blue-500/30 hover:border-blue-500/60 transition-all duration-300 shadow-sm hover:shadow-blue-500/20 hover:-translate-y-1">
          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex items-center justify-center">
            <Facebook className="h-5 w-5 text-blue-500" />
          </a>
        </Button>
        
        {/* Instagram - Pink/Purple gradient */}
        <Button variant="outline" size="icon" asChild className="rounded-full w-11 h-11 bg-gradient-to-br from-pink-500/10 to-purple-600/5 hover:from-pink-500/20 hover:to-purple-600/10 border-pink-500/30 hover:border-pink-500/60 transition-all duration-300 shadow-sm hover:shadow-pink-500/20 hover:-translate-y-1">
          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex items-center justify-center">
            <Instagram className="h-5 w-5 text-transparent bg-clip-text bg-gradient-to-br from-pink-500 to-purple-600" />
          </a>
        </Button>
        
        {/* Snapchat - Yellow (Using custom SVG since Snapchat icon isn't available in lucide) */}
        <Button variant="outline" size="icon" asChild className="rounded-full w-11 h-11 bg-gradient-to-br from-yellow-400/10 to-yellow-500/5 hover:from-yellow-400/20 hover:to-yellow-500/10 border-yellow-400/30 hover:border-yellow-400/60 transition-all duration-300 shadow-sm hover:shadow-yellow-400/20 hover:-translate-y-1">
          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Snapchat" className="flex items-center justify-center">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="#FFFC00" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="h-5 w-5"
            >
              <path d="M12 2c4 0 8 3 8 9s-2 9-8 9-8-3-8-9 4-9 8-9Z" />
              <path d="M8 15c0 2 2 3 4 3s4-1 4-3" />
              <path d="M8 9v2" />
              <path d="M16 9v2" />
            </svg>
          </a>
        </Button>
        
        {/* Reddit - Orange */}
        <Button variant="outline" size="icon" asChild className="rounded-full w-11 h-11 bg-gradient-to-br from-orange-500/10 to-red-500/5 hover:from-orange-500/20 hover:to-red-500/10 border-orange-500/30 hover:border-orange-500/60 transition-all duration-300 shadow-sm hover:shadow-orange-500/20 hover:-translate-y-1">
          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Reddit" className="flex items-center justify-center">
            <SquareStack className="h-5 w-5 text-orange-500" />
          </a>
        </Button>
        
        {/* Discord - Purple */}
        <Button variant="outline" size="icon" asChild className="rounded-full w-11 h-11 bg-gradient-to-br from-indigo-500/10 to-purple-500/5 hover:from-indigo-500/20 hover:to-purple-500/10 border-indigo-500/30 hover:border-indigo-500/60 transition-all duration-300 shadow-sm hover:shadow-indigo-500/20 hover:-translate-y-1">
          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Discord" className="flex items-center justify-center">
            <MessageCircle className="h-5 w-5 text-indigo-500" />
          </a>
        </Button>
      </div>
    </div>
  );
}
