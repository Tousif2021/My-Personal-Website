
import { useEffect } from "react";
import { useGitHubUser } from "@/api/github";

interface ProfilePictureProps {
  username: string;
}

export function ProfilePicture({ username }: ProfilePictureProps) {
  const { userData, loading } = useGitHubUser(username);

  return (
    <div className="relative w-full aspect-square max-w-md mx-auto group">
      {/* Animated rotating borders */}
      <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-spin-slow"></div>
      <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/20 animate-reverse-spin-slow"></div>
      
      {/* Binary code ring */}
      <div className="absolute inset-0 rounded-full flex items-center justify-center overflow-hidden">
        <div className="absolute w-[150%] h-[150%] flex items-center justify-center animate-slow-spin">
          <div className="text-[4px] sm:text-[6px] text-primary/10 font-mono tracking-tighter leading-none select-none" style={{ transform: 'rotate(0deg)' }}>
            {Array(360).fill("01").map((binary, i) => (
              <span key={i} style={{ position: 'absolute', transform: `rotate(${i}deg) translateY(-110px) rotate(-${i}deg)` }}>
                {Math.random() > 0.5 ? '0' : '1'}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      {/* Pulsing gradients */}
      <div className="absolute inset-[10%] rounded-full bg-gradient-to-br from-primary/5 to-transparent animate-pulse-slow"></div>
      <div className="absolute inset-[15%] rounded-full bg-gradient-to-tr from-transparent to-primary/10 animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
      
      {/* Code symbol particles */}
      <div className="absolute inset-0 rounded-full overflow-hidden">
        <div className="absolute inset-0 code-particles"></div>
      </div>
      
      {/* Profile image container */}
      <div className="absolute inset-[10%] glass rounded-full z-10 overflow-hidden flex items-center justify-center shadow-lg shadow-primary/10 border border-primary/20 animate-float-very-slow group-hover:border-primary/40 transition-all duration-500">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <img 
          src={userData?.avatar_url || "https://via.placeholder.com/400"} 
          alt={userData?.name || "Developer"} 
          className="w-full h-full object-cover rounded-full transition-all duration-500 group-hover:scale-105"
          loading="lazy"
        />
        
        {/* Scan line effect */}
        <div className="absolute w-full h-1 bg-primary/10 top-1/2 left-0 -translate-y-1/2 animate-scan-line"></div>
      </div>
      
      {/* Tech corner accents */}
      <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-primary/40 rounded-tl-xl"></div>
      <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-primary/40 rounded-tr-xl"></div>
      <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-primary/40 rounded-bl-xl"></div>
      <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-primary/40 rounded-br-xl"></div>
    </div>
  );
}
