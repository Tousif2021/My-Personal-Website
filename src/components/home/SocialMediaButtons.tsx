
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Github, Linkedin, MessageSquare } from "lucide-react";
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
          
          {/* Instagram */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="icon" asChild className="rounded-full w-12 h-12 bg-gradient-to-br from-rose-500/10 via-purple-500/10 to-amber-500/5 hover:from-rose-500/20 hover:via-purple-500/20 hover:to-amber-500/10 border-rose-500/30 hover:border-rose-500/60 transition-all duration-300 shadow-sm hover:shadow-rose-500/20 hover:-translate-y-1">
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex items-center justify-center relative group">
                  <Instagram className="h-5 w-5 text-transparent bg-clip-text bg-gradient-to-br from-rose-500 via-purple-500 to-amber-500" />
                </a>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Instagram</p>
            </TooltipContent>
          </Tooltip>
          
          {/* Snapchat */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="icon" asChild className="rounded-full w-12 h-12 bg-gradient-to-br from-yellow-400/10 to-yellow-500/5 hover:from-yellow-400/20 hover:to-yellow-500/10 border-yellow-400/30 hover:border-yellow-400/60 transition-all duration-300 shadow-sm hover:shadow-yellow-400/20 hover:-translate-y-1">
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Snapchat" className="flex items-center justify-center">
                  {/* Custom Snapchat ghost icon */}
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="22" 
                    height="22" 
                    viewBox="0 0 512 512" 
                    fill="#FFFC00"
                    className="h-5 w-5"
                  >
                    <path d="M255.5 15c-28.1 0-56.1 6.8-83.8 20.3C95.9 75.3 64.3 139.3 48.8 153.3c-4.1 3.7-7.2 19.1-7.2 33.7 0 11.6 3.2 15.8 3.2 15.8 3.8 6.5 11.8 7.4 13.9 7.4.8 0 1.4-.1 1.9-.2 3.6-.4 7.5-.8 11.4-1.2 4.7-.4 9.9-.9 15.7-1.4-3.1 7.1-8.1 23.6-5 44.2 4.7 29.9 26.2 53.8 52.5 62.9-3 5.7-13.9 29.1 9 46.9 1.3 1 2.7 1.9 4.4 2.8 0 0 5.9 31-42.5 31-14.3 0-24 7.5-24 7.5-.9.5-1.4 1.2-1.5 2.1-.1 2.2 3.6 5.5 8.1 8.1l.6.4c3.2 1.8 8.1 4.5 14.3 7.8 10.2 5.5 23.5 12.5 42.3 20.3 3.5 1.5 7.2 2.5 11.1 3.1-6.2 12.1-13.1 25.3-21.5 38.4-8.5 13.3-17.5 25.2-27.1 35.1-17.2 18.3-33.5 28.8-49.6 28.8-7.1 0-13.8-2-19.9-5.9l-4.2-2.7h-4.2c-27.1 0-39.5 19.4-39.5 34.8 0 15 14.4 30.1 37.7 30.1 9.7 0 18.9-3 24.9-5.3l1.2-.4c35.9-16.2 69.1-50.3 108.5-110.4 39.4 60.1 72.6 94.2 108.5 110.4l1.2.4c6 2.3 15.2 5.3 24.9 5.3 23.3 0 37.7-15.1 37.7-30.1 0-15.4-12.4-34.8-39.5-34.8h-4.2l-4.2 2.7c-6.1 3.9-12.8 5.9-19.9 5.9-16.1 0-32.4-10.5-49.6-28.8-9.6-9.9-18.6-21.8-27.1-35.1-8.4-13.1-15.3-26.3-21.5-38.4 3.9-.6 7.6-1.6 11.1-3.1 18.8-7.8 32.1-14.8 42.3-20.3 6.2-3.3 11.1-6 14.3-7.8l.6-.4c4.5-2.6 8.2-5.9 8.1-8.1-.1-.9-.6-1.6-1.5-2.1 0 0-9.7-7.5-24-7.5-48.4 0-42.5-31-42.5-31 1.7-.9 3.1-1.8 4.4-2.8 22.9-17.8 12-41.2 9-46.9 26.3-9.1 47.8-33 52.5-62.9 3.1-20.6-1.9-37.1-5-44.2 5.8.5 11 1 15.7 1.4 3.9.4 7.8.8 11.4 1.2.5.1 1.1.2 1.9.2 2.1 0 10.1-.9 13.9-7.4 0 0 3.2-4.2 3.2-15.8 0-14.6-3.1-30-7.2-33.7-15.5-14-47.1-78-123.8-118C311.6 21.8 283.6 15 255.5 15zm-.5 51c38.4 0 69.5 31.1 69.5 69.5S293.4 205 255 205s-69.5-31.1-69.5-69.5S216.6 66 255 66z"/>
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
                    fill="none"
                    stroke="#FF4500"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <circle cx="12" cy="8" r="2" />
                    <path d="M10.95 15.5c.5.35 1.2.55 1.95.55 1.75 0 3.15-1.2 3.45-2.8m-8.7 0c.3 1.6 1.7 2.8 3.45 2.8.75 0 1.45-.2 1.95-.55" />
                    <path d="M12 13a18.4 18.4 0 0 1-4.2-.9 3.76 3.76 0 0 0-.9 1.65 3.75 3.75 0 0 0 1.1 3 8.53 8.53 0 0 0 8 0 3.75 3.75 0 0 0 1.1-3 3.76 3.76 0 0 0-.9-1.65A18.4 18.4 0 0 1 12 13Z" />
                    <path d="M19.83 7.35a2.95 2.95 0 0 0-4.25-4.07" />
                    <path d="M4.17 7.35a2.95 2.95 0 0 1 4.25-4.07" />
                    <path d="M12 20c-5.4 0-9.6-2-10-6 0-2 1-3 3-4l1 3h12l1-3c2 1 3 2 3 4-.4 4-4.6 6-10 6Z" />
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
                    fill="none"
                    stroke="#5865F2"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <circle cx="9" cy="12" r="1" />
                    <circle cx="15" cy="12" r="1" />
                    <path d="M7.5 7.5c3.5-1 5.5-1 9 0" />
                    <path d="M7 16.5c3.5 1 6.5 1 10 0" />
                    <path d="M15.5 17c0 1 1.5 3 2 3 1.5 0 2.833-1.667 3.5-3 .667-1.667.5-5.833-1.5-11.5-1.457-1.015-3-1.34-4.5-1.5l-1 2.5" />
                    <path d="M8.5 17c0 1-1.356 3-1.832 3-1.429 0-2.698-1.667-3.333-3-.635-1.667-.48-5.833 1.428-11.5C6.151 4.485 7.545 4.16 9 4l1 2.5" />
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
