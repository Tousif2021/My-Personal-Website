
import { CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function PhilosophyTab() {
  return (
    <>
      <h3 className="text-2xl font-display font-semibold mb-8 text-center">My Development Philosophy</h3>
      
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="bg-gradient-to-br from-background to-muted/30 backdrop-blur border border-primary/10">
          <CardContent className="pt-6">
            <h4 className="text-xl font-display font-semibold mb-4">User-Centered Design</h4>
            <p className="text-muted-foreground">
              I believe that technology should serve humans, not the other way around. 
              Every line of code I write aims to create intuitive, accessible, and 
              delightful user experiences.
            </p>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-background to-muted/30 backdrop-blur border border-primary/10">
          <CardContent className="pt-6">
            <h4 className="text-xl font-display font-semibold mb-4">Performance & Efficiency</h4>
            <p className="text-muted-foreground">
              Speed matters. I'm obsessed with optimizing code for maximum performance
              while maintaining readability and maintainability. Every millisecond counts.
            </p>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-background to-muted/30 backdrop-blur border border-primary/10">
          <CardContent className="pt-6">
            <h4 className="text-xl font-display font-semibold mb-4">Clean Architecture</h4>
            <p className="text-muted-foreground">
              I follow SOLID principles and maintain clean, modular codebases that are easy to 
              extend and maintain. Simplicity and clarity are my guiding principles.
            </p>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-background to-muted/30 backdrop-blur border border-primary/10">
          <CardContent className="pt-6">
            <h4 className="text-xl font-display font-semibold mb-4">Continuous Learning</h4>
            <p className="text-muted-foreground">
              Technology evolves rapidly. I'm committed to continuous learning and 
              staying current with emerging technologies, best practices, and industry trends.
            </p>
          </CardContent>
        </Card>
      </div>
      
      <div className="mt-8">
        <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20">
          <CardContent className="pt-6">
            <h4 className="text-xl font-display font-semibold mb-4">My Code Principles</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                <p><span className="font-medium">Minimize Global State:</span> I keep global variables to a minimum to prevent unintended side effects and improve maintainability.</p>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                <p><span className="font-medium">Meaningful Names:</span> I use descriptive variable and function names to make code self-documenting and easier to understand.</p>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                <p><span className="font-medium">Write Tests First:</span> I practice test-driven development whenever possible to ensure code reliability and prevent regressions.</p>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                <p><span className="font-medium">Single Responsibility:</span> I design components and functions that do one thing and do it well, making code easier to test and maintain.</p>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
