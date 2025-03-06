
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Home, FolderKanban, Info, Mail, Code, Terminal, ChevronRight } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const routes = [
  { path: "/", label: "Home", icon: <Terminal className="h-4 w-4 mr-1.5" /> },
  { path: "/projects", label: "Projects", icon: <Code className="h-4 w-4 mr-1.5" /> },
  { path: "/about", label: "About", icon: <Info className="h-4 w-4 mr-1.5" /> },
  { path: "/contact", label: "Contact", icon: <Mail className="h-4 w-4 mr-1.5" /> },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300 py-3 px-4 md:px-6",
        scrolled 
          ? "backdrop-blur-lg border-b border-border/30 shadow-sm bg-background/70" 
          : "backdrop-blur-md bg-background/40"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="relative z-10 flex items-center"
        >
          <div className="font-mono font-semibold tracking-tighter relative overflow-hidden group">
            <div className="flex items-center space-x-1">
              <span className="text-primary font-bold text-xl md:text-2xl">&lt;</span>
              <div className="relative">
                <span className="text-lg md:text-xl font-bold text-foreground hover:text-primary transition-all duration-500 terminal-glitch" data-text="dev@tousif:~$">
                  dev@tousif:~$
                </span>
                <div className="absolute inset-0 bg-primary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100"></div>
              </div>
              <span className="text-primary font-bold text-xl md:text-2xl inline-block animate-terminal-blink">_</span>
            </div>
            <div className="text-xs text-foreground/80 font-mono mt-0.5 pl-6 flex items-center">
              <span className="bg-code/40 px-1.5 py-0.5 rounded font-mono text-code-foreground/90 text-[10px] md:text-xs">
                <span className="text-green-400">~/</span>
                projects<span className="text-primary/90">@main</span>
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {routes.map((route) => (
            <Link
              key={route.path}
              to={route.path}
              className={cn(
                "px-3 py-1.5 rounded-md transition-all duration-300 font-mono text-sm flex items-center relative hover:bg-code-pulse",
                location.pathname === route.path
                  ? "text-primary bg-code/40 after:absolute after:bottom-0 after:left-1/4 after:right-1/4 after:h-0.5 after:bg-primary after:rounded-full"
                  : "text-foreground/70 hover:text-foreground hover:bg-code/20 after:absolute after:bottom-0 after:left-1/2 after:right-1/2 after:h-0.5 after:bg-primary/70 after:rounded-full hover:after:left-1/4 hover:after:right-1/4 after:transition-all after:duration-300"
              )}
            >
              {route.icon}
              {route.label}
            </Link>
          ))}
          <div className="ml-2">
            <ThemeToggle />
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className="ml-1"
          >
            {isOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-background/95 backdrop-blur-md z-30 flex flex-col items-center justify-center transform transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col items-center space-y-6">
          {routes.map((route) => (
            <Link
              key={route.path}
              to={route.path}
              className={cn(
                "text-xl font-mono transition-colors flex items-center space-x-2",
                location.pathname === route.path
                  ? "text-primary"
                  : "text-foreground/70 hover:text-foreground"
              )}
            >
              {route.icon}
              <span>{route.label}</span>
              {location.pathname === route.path && (
                <ChevronRight className="h-4 w-4 text-primary" />
              )}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
