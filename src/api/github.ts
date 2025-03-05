import { useState, useEffect } from 'react';

export interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  homepage: string;
  topics: string[];
  created_at: string;
  updated_at: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

export interface Language {
  name: string;
  value: number;
  color: string;
}

export const languageColors: Record<string, string> = {
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Python: '#3572A5',
  Java: '#b07219',
  'C#': '#178600',
  PHP: '#4F5D95',
  C: '#555555',
  'C++': '#f34b7d',
  Ruby: '#701516',
  Go: '#00ADD8',
  Swift: '#F05138',
  Kotlin: '#A97BFF',
  Rust: '#DEA584',
  Dart: '#00B4AB',
  Shell: '#89e051',
  'Objective-C': '#438eff',
  Scala: '#c22d40',
  Perl: '#0298c3',
  Lua: '#000080',
  Haskell: '#5e5086',
  R: '#198CE7',
  Vue: '#41B883',
  React: '#61DAFB',
  Angular: '#DD0031',
  default: '#8b949e',
};

export const GITHUB_USERNAME = 'Tousif2021';

const cache: Record<string, any> = {};

async function fetchWithCache<T>(url: string, cacheKey: string): Promise<T> {
  if (cache[cacheKey]) {
    return cache[cacheKey] as T;
  }
  
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`GitHub API error: ${response.status}`);
  }
  
  const data = await response.json();
  cache[cacheKey] = data;
  return data as T;
}

export const useGitHubUser = (username: string) => {
  const [userData, setUserData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);
      try {
        const data = await fetchWithCache(`https://api.github.com/users/${username}`, `user-${username}`);
        setUserData(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [username]);

  return { userData, loading, error };
};

export const useGitHubRepos = (username: string) => {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      setLoading(true);
      try {
        const data = await fetchWithCache<Repository[]>(
          `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`,
          `repos-${username}`
        );
        
        const sortedData = [...data].sort((a, b) => b.stargazers_count - a.stargazers_count);
        setRepositories(sortedData);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, [username]);

  return { repositories, loading, error };
};

export const useLanguageStats = (repositories: Repository[]) => {
  const [languages, setLanguages] = useState<Language[]>([]);

  useEffect(() => {
    const languageMap: Record<string, number> = {};
    
    repositories.forEach(repo => {
      if (repo.language) {
        languageMap[repo.language] = (languageMap[repo.language] || 0) + 1;
      }
    });
    
    const languageArray = Object.entries(languageMap)
      .map(([name, value]) => ({
        name,
        value,
        color: languageColors[name] || languageColors.default
      }))
      .sort((a, b) => b.value - a.value);
    
    setLanguages(languageArray);
  }, [repositories]);

  return languages;
};

export const extractImageFromReadme = async (username: string, repo: string): Promise<string | null> => {
  try {
    const readme = await fetchWithCache<{ content: string }>(
      `https://api.github.com/repos/${username}/${repo}/readme`,
      `readme-${username}-${repo}`
    );
    
    const content = atob(readme.content);
    
    const imageRegex = /!\[.*?\]\((.*?)\)/;
    const match = content.match(imageRegex);
    
    if (match && match[1]) {
      let imagePath = match[1];
      
      if (!imagePath.startsWith('http')) {
        imagePath = `https://raw.githubusercontent.com/${username}/${repo}/main/${imagePath}`;
      }
      
      return imagePath;
    }
    
    return null;
  } catch (error) {
    console.error('Error fetching README:', error);
    return null;
  }
};
