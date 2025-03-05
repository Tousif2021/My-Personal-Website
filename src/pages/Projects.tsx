
import { useState, useEffect } from "react";
import { PageTransition } from "@/components/PageTransition";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { useGitHubRepos, useLanguageStats, Repository } from "@/api/github";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const GITHUB_USERNAME = 'yourusername'; // Replace with your GitHub username

export default function Projects() {
  const { repositories, loading } = useGitHubRepos(GITHUB_USERNAME);
  const languages = useLanguageStats(repositories);
  
  const [filteredProjects, setFilteredProjects] = useState<Repository[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentLanguage, setCurrentLanguage] = useState('all');
  
  useEffect(() => {
    if (repositories.length === 0) return;
    
    let filtered = [...repositories];
    
    // Apply language filter
    if (currentLanguage !== 'all') {
      filtered = filtered.filter(project => project.language === currentLanguage);
    }
    
    // Apply search
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(
        project => 
          project.name.toLowerCase().includes(term) || 
          (project.description && project.description.toLowerCase().includes(term))
      );
    }
    
    setFilteredProjects(filtered);
  }, [repositories, currentLanguage, searchTerm]);
  
  return (
    <PageTransition>
      <section className="pt-24 pb-12">
        <div className="container max-w-7xl mx-auto px-6 md:px-8">
          <SectionHeading 
            heading="Projects"
            subheading="My Work"
          >
            <p className="mt-4 text-muted-foreground max-w-3xl mx-auto">
              Browse through my GitHub projects. Use the filters below to find specific technologies or search by keyword.
            </p>
          </SectionHeading>
          
          {/* Search and Filters */}
          <div className="mt-10 mb-12">
            <div className="relative max-w-md mx-auto mb-8">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder="Search projects..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <Tabs 
              defaultValue="all" 
              className="flex flex-col items-center"
              onValueChange={setCurrentLanguage}
            >
              <TabsList className="mb-8 flex flex-wrap h-auto bg-transparent space-x-2">
                <TabsTrigger 
                  value="all" 
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  All
                </TabsTrigger>
                {languages.map((language) => (
                  <TabsTrigger 
                    key={language.name} 
                    value={language.name}
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                    {language.name}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              <TabsContent value="all" className="w-full mt-0">
                {loading ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Array.from({ length: 6 }).map((_, index) => (
                      <div 
                        key={index}
                        className="h-96 bg-muted rounded-lg animate-pulse"
                      />
                    ))}
                  </div>
                ) : filteredProjects.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProjects.map((project) => (
                      <ProjectCard
                        key={project.id}
                        project={project}
                        username={GITHUB_USERNAME}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">No projects found matching your criteria.</p>
                    <Button 
                      variant="outline" 
                      className="mt-4"
                      onClick={() => {
                        setSearchTerm('');
                        setCurrentLanguage('all');
                      }}
                    >
                      Reset Filters
                    </Button>
                  </div>
                )}
              </TabsContent>
              
              {/* Generate a TabsContent for each language */}
              {languages.map((language) => (
                <TabsContent key={language.name} value={language.name} className="w-full mt-0">
                  {loading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {Array.from({ length: 3 }).map((_, index) => (
                        <div 
                          key={index}
                          className="h-96 bg-muted rounded-lg animate-pulse"
                        />
                      ))}
                    </div>
                  ) : filteredProjects.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {filteredProjects.map((project) => (
                        <ProjectCard
                          key={project.id}
                          project={project}
                          username={GITHUB_USERNAME}
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <p className="text-muted-foreground">No projects found matching your criteria.</p>
                      <Button 
                        variant="outline" 
                        className="mt-4"
                        onClick={() => {
                          setSearchTerm('');
                          setCurrentLanguage('all');
                        }}
                      >
                        Reset Filters
                      </Button>
                    </div>
                  )}
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
