
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure component is mounted before rendering to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Improved visibility and reliability for the toggle
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="relative rounded-full w-9 h-9 flex items-center justify-center hover:bg-muted/60 transition-colors"
      aria-label="Toggle theme"
      disabled={!mounted} // Disable button until mounted to prevent interaction issues
    >
      {mounted && (
        <>
          <Sun className={`h-[1.2rem] w-[1.2rem] absolute transition-all duration-300 ${
            theme === 'light' ? 'opacity-100 transform-none' : 'opacity-0 rotate-90 scale-0'
          }`} />
          <Moon className={`h-[1.2rem] w-[1.2rem] absolute transition-all duration-300 ${
            theme === 'dark' ? 'opacity-100 transform-none' : 'opacity-0 -rotate-90 scale-0'
          }`} />
        </>
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
