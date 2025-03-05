
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { PageTransition } from "@/components/PageTransition";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <PageTransition>
      <div className="min-h-screen flex items-center justify-center soft-blue-gradient">
        <div className="text-center glass p-8 rounded-xl shadow-lg">
          <h1 className="text-6xl font-bold mb-4 text-gradient">404</h1>
          <p className="text-xl text-foreground/80 mb-6">Oops! Page not found</p>
          <a href="/" className="text-primary hover:text-primary/80 underline transition-colors">
            Return to Home
          </a>
        </div>
      </div>
    </PageTransition>
  );
};

export default NotFound;
