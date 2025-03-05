
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Home, FolderKanban, Info, Mail } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const routes = [
  { path: "/", label: "Home", icon: <Home className="h-4 w-4 mr-1.5" /> },
  { path: "/projects", label: "Projects", icon: <FolderKanban className="h-4 w-4 mr-1.5" /> },
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
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300 py-4 px-6 md:px-8",
        scrolled 
          ? "bg-gradient-to-r from-background/95 via-background/90 to-background/95 backdrop-blur-lg border-b shadow-sm" 
          : "bg-gradient-to-r from-background/80 via-background/70 to-background/80 backdrop-blur-md"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="relative z-10 flex items-center"
        >
          <div className="font-mono font-semibold tracking-tighter relative overflow-hidden group">
            <div className="flex items-center space-x-1">
              <span className="text-primary font-bold text-2xl">&lt;</span>
              <div className="relative">
                <span className="text-xl md:text-2xl font-bold text-foreground hover:text-primary transition-all duration-500 terminal-glitch" data-text="Commit.Push.Build">
                  Commit.Push.Build
                </span>
                <div className="absolute inset-0 bg-primary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100"></div>
              </div>
              <span className="text-primary font-bold text-2xl">/&gt;</span>
            </div>
            <div className="text-xs text-foreground/80 font-medium mt-0.5 pl-6 flex items-center">
              <span className="bg-muted/60 px-1.5 py-0.5 rounded font-mono text-foreground/70">&lt;DevLog by Tousif Dewan/&gt;</span>
              <span className="inline-block w-1.5 h-3 bg-[#8B5CF6] ml-1.5 animate-pulse"></span>
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
                "px-4 py-2 rounded-full transition-all duration-300 font-medium flex items-center relative",
                location.pathname === route.path
                  ? "text-primary bg-primary/10 after:absolute after:bottom-0 after:left-1/4 after:right-1/4 after:h-0.5 after:bg-primary after:rounded-full"
                  : "text-foreground/60 hover:text-foreground hover:bg-muted after:absolute after:bottom-0 after:left-1/2 after:right-1/2 after:h-0.5 after:bg-primary/70 after:rounded-full hover:after:left-1/4 hover:after:right-1/4 after:transition-all after:duration-300"
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
                "text-2xl font-medium transition-colors flex items-center",
                location.pathname === route.path
                  ? "text-primary"
                  : "text-foreground/70 hover:text-foreground"
              )}
            >
              {route.icon}
              {route.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
