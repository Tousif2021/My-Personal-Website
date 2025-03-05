
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const routes = [
  { path: "/", label: "Home" },
  { path: "/projects", label: "Projects" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
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
          ? "bg-gradient-to-r from-background/95 via-background/90 to-background/95 backdrop-blur-lg border-b" 
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
              <span className="text-primary font-bold text-xl">&lt;</span>
              <div className="relative">
                <span className="text-lg md:text-xl font-bold bg-gradient-to-r from-[#8B5CF6] to-[#0EA5E9] bg-clip-text text-transparent hover:from-[#0EA5E9] hover:to-[#8B5CF6] transition-all duration-500">Commit.Push.Build</span>
                <div className="absolute inset-0 bg-primary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100"></div>
              </div>
              <span className="text-primary font-bold text-xl">/&gt;</span>
            </div>
            <div className="text-xs text-foreground font-medium mt-0.5 pl-6">
              DevLog by Tousif Dewan
              <span className="inline-block w-1.5 h-3 bg-[#8B5CF6] ml-1 animate-pulse"></span>
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
                "px-4 py-2 rounded-full transition-colors font-medium",
                location.pathname === route.path
                  ? "text-primary bg-primary/10"
                  : "text-foreground/60 hover:text-foreground hover:bg-muted"
              )}
            >
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
                "text-2xl font-medium transition-colors",
                location.pathname === route.path
                  ? "text-primary"
                  : "text-foreground/70 hover:text-foreground"
              )}
            >
              {route.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
