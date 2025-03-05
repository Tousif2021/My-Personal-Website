
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, FileText } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t py-12 mt-24">
      <div className="container max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-muted-foreground">&copy; {new Date().getFullYear()} Tousif Dewan. All rights reserved.</p>
          </div>
          
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/Tousif2021"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/tousifdewan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:tsdewan@kth.se"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Resume"
            >
              <FileText className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
