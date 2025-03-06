
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Github, Linkedin } from "lucide-react";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";

export function SocialMediaButtons() {
  return (
    <div className="mb-4">
      <div className="flex items-center gap-2 mb-3">
        <div className="h-px bg-gradient-to-r from-primary/30 to-transparent flex-grow max-w-[60px]"></div>
        <span className="text-sm font-medium text-foreground/70">Connect on Social Media</span>
        <div className="h-px bg-gradient-to-l from-primary/30 to-transparent flex-grow max-w-[60px]"></div>
      </div>
      
      <TooltipProvider>
        <div className="flex flex-wrap gap-4">
          {/* Facebook */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="icon" asChild className="rounded-full w-12 h-12 bg-gradient-to-br from-blue-600/10 to-blue-700/5 hover:from-blue-600/20 hover:to-blue-700/10 border-blue-600/30 hover:border-blue-600/60 transition-all duration-300 shadow-sm hover:shadow-blue-600/20 hover:-translate-y-1">
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex items-center justify-center">
                  <Facebook className="h-5 w-5 text-blue-600" />
                </a>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Facebook</p>
            </TooltipContent>
          </Tooltip>
          
          {/* Instagram - Updated for better visibility */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="icon" asChild className="rounded-full w-12 h-12 bg-gradient-to-br from-rose-500/10 via-purple-500/10 to-amber-500/5 hover:from-rose-500/20 hover:via-purple-500/20 hover:to-amber-500/10 border-rose-500/30 hover:border-rose-500/60 transition-all duration-300 shadow-sm hover:shadow-rose-500/20 hover:-translate-y-1">
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex items-center justify-center">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="22" 
                    height="22" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="url(#instagram-gradient)" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <defs>
                      <linearGradient id="instagram-gradient" x1="0" y1="0" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#F56040" />
                        <stop offset="50%" stopColor="#E1306C" />
                        <stop offset="100%" stopColor="#833AB4" />
                      </linearGradient>
                    </defs>
                    <rect width="20" height="20" x="2" y="2" rx="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Instagram</p>
            </TooltipContent>
          </Tooltip>
          
          {/* Snapchat - Updated for better visibility */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="icon" asChild className="rounded-full w-12 h-12 bg-gradient-to-br from-yellow-400/10 to-yellow-500/5 hover:from-yellow-400/20 hover:to-yellow-500/10 border-yellow-400/30 hover:border-yellow-400/60 transition-all duration-300 shadow-sm hover:shadow-yellow-400/20 hover:-translate-y-1">
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Snapchat" className="flex items-center justify-center">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="22" 
                    height="22" 
                    viewBox="0 0 24 24" 
                    fill="#FFFC00"
                    stroke="none"
                    className="h-5 w-5"
                  >
                    <path d="M12.031 2c1.212 0 5.406.078 7.383 5.2.675 1.756.675 4.753.675 4.753s.129 4.839-3.741 7.329c-.454.291-.757.393-1.236.694-.415.261-.696.694-.696.694s-.497-.029-.675-.261a1.096 1.096 0 0 0-.535-.261c-.131 0-.261.037-.261.037s.261.694.327 1.041c.078.415.131 1.246-.922 1.246s-1.414-.454-2.795-.924c-1.363-.454-2.519-1.661-2.825-2.303-.261-.535-.366-.731-.366-.732h-.131c0 .001-.105.197-.366.732-.306.642-1.462 1.849-2.825 2.303-1.381.47-1.742.924-2.795.924-1.053 0-1-.831-.922-1.246.066-.347.327-1.041.327-1.041s-.13-.037-.261-.037a1.096 1.096 0 0 0-.535.261c-.178.233-.675.261-.675.261s-.282-.433-.696-.694c-.479-.301-.782-.403-1.236-.694-3.87-2.49-3.741-7.329-3.741-7.329s0-2.997.675-4.753C4.594 2.078 8.788 2 10 2h2.031Z" />
                  </svg>
                </a>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Snapchat</p>
            </TooltipContent>
          </Tooltip>
          
          {/* Reddit */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="icon" asChild className="rounded-full w-12 h-12 bg-gradient-to-br from-orange-600/10 to-red-600/5 hover:from-orange-600/20 hover:to-red-600/10 border-orange-600/30 hover:border-orange-600/60 transition-all duration-300 shadow-sm hover:shadow-orange-600/20 hover:-translate-y-1">
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Reddit" className="flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="#FF4500"
                    stroke="none"
                    className="h-5 w-5"
                  >
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                    <path d="M14.5 15.5c-1.2.68-2.58.7-3.2.01" fill="none" stroke="#FFF" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M6.532 9.32c-.51-.97.319-2.11 1.415-2.1 1.095.01 1.485 1.07 1.485 2.2l3.035.09c.475-.705 1.235-.505 1.62-.08.62.72.595 1.485-.1 1.875h.02c0 2.24-2.94 4.495-6 4.495-3.075 0-6-2.13-6-4.495l.065-.035c-.735-.34-.695-1.58-.04-1.895.655-.315 1.185-.05 1.62.29l2.88-.345Z" fill="#FFF" />
                    <circle cx="16" cy="9" r="1.25" fill="#FF4500" />
                    <circle cx="8" cy="9" r="1.25" fill="#FF4500" />
                  </svg>
                </a>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Reddit</p>
            </TooltipContent>
          </Tooltip>
          
          {/* Discord */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="icon" asChild className="rounded-full w-12 h-12 bg-gradient-to-br from-indigo-500/10 to-blue-600/5 hover:from-indigo-500/20 hover:to-blue-600/10 border-indigo-500/30 hover:border-indigo-500/60 transition-all duration-300 shadow-sm hover:shadow-indigo-500/20 hover:-translate-y-1">
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Discord" className="flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="#5865F2"
                    stroke="none"
                    className="h-5 w-5"
                  >
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
                  </svg>
                </a>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Discord</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </TooltipProvider>
    </div>
  );
}
