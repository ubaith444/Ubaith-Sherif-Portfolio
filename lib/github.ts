import { profile } from "@/lib/profile";

export type Repository = {
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  updated_at: string;
};

export async function getLatestRepositories(): Promise<Repository[]> {
  try {
    const response = await fetch(
      `https://api.github.com/users/${profile.githubUsername}/repos?sort=updated&per_page=6`,
      {
        next: { revalidate: 3600 },
        headers: {
          Accept: "application/vnd.github+json",
          ...(process.env.GITHUB_TOKEN ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` } : {})
        }
      }
    );

    if (!response.ok) {
      return fallbackRepositories;
    }

    const repos = (await response.json()) as Repository[];
    return repos.length ? repos : fallbackRepositories;
  } catch {
    return fallbackRepositories;
  }
}

export const fallbackRepositories: Repository[] = [
  {
    name: "AI Engineering Portfolio",
    description: "Production-style portfolio for applied AI, agents, LLM systems, and full-stack delivery.",
    html_url: profile.github,
    language: "TypeScript",
    stargazers_count: 0,
    updated_at: new Date().toISOString()
  },
  {
    name: "Multi-Agent Automation",
    description: "Agent workflow architecture with approval loops, audit trails, and operational dashboards.",
    html_url: profile.github,
    language: "Python",
    stargazers_count: 0,
    updated_at: new Date().toISOString()
  },
  {
    name: "InsightAI Agent",
    description: "Natural language analytics pattern for governed query generation and explainable reports.",
    html_url: profile.github,
    language: "Python",
    stargazers_count: 0,
    updated_at: new Date().toISOString()
  }
];
