
import { useEffect, useState } from "react";
import { PageTransition } from "@/components/PageTransition";
import { useGitHubUser, useGitHubRepos, useLanguageStats, Repository, GITHUB_USERNAME, languageColors } from "@/api/github";
import { HeroSection } from "@/components/home/HeroSection";
import { SkillsSection } from "@/components/home/SkillsSection";
import { ProjectsSection } from "@/components/home/ProjectsSection";

const customSkills = [
  { name: "React", color: "#61DAFB" },
  { name: "Tailwind CSS", color: "#38B2AC" },
  { name: "Node.js", color: "#68A063" },
  { name: "Next.js", color: "#000000" },
  { name: "RISC-V", color: "#A6A6A6" },
  { name: "Cisco", color: "#1BA0D7" }
];

export default function Home() {
  const [featuredProjects, setFeaturedProjects] = useState<Repository[]>([]);
  const { userData, loading: userLoading } = useGitHubUser(GITHUB_USERNAME);
  const { repositories, loading: reposLoading } = useGitHubRepos(GITHUB_USERNAME);
  const languages = useLanguageStats(repositories);
  
  const [allSkills, setAllSkills] = useState<Array<{name: string, color: string, isGithub: boolean}>>([]);
  
  useEffect(() => {
    if (languages.length > 0) {
      const existingLanguageNames = new Set(languages.map(lang => lang.name));
      
      const combinedSkills = [
        ...languages.map(lang => ({ 
          name: lang.name, 
          color: lang.color, 
          isGithub: true 
        })),
        ...customSkills
          .filter(skill => !existingLanguageNames.has(skill.name))
          .map(skill => ({ 
            name: skill.name, 
            color: skill.color, 
            isGithub: false 
          }))
      ];
      
      setAllSkills(combinedSkills);
    }
  }, [languages]);
  
  const userName = userData?.name || 'Tousif Dewan';
  
  useEffect(() => {
    if (repositories.length > 0) {
      setFeaturedProjects(repositories.slice(0, 3));
    }
  }, [repositories]);
  
  const isLoading = userLoading || reposLoading;
  
  return (
    <PageTransition>
      <HeroSection userName={userName} userData={userData} />
      <SkillsSection allSkills={allSkills} isLoading={isLoading} />
      <ProjectsSection 
        featuredProjects={featuredProjects} 
        isLoading={isLoading} 
        username={GITHUB_USERNAME} 
      />
    </PageTransition>
  );
}
