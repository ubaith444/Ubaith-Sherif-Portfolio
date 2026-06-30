import { Brain, DatabaseZap, Network, Workflow, type LucideIcon } from "lucide-react";

export type ExpertiseCard = {
  title: string;
  description: string;
  icon: LucideIcon;
  tags: string[];
};

export const expertiseCards: ExpertiseCard[] = [
  {
    title: "AI Agents",
    description:
      "Designing autonomous multi-agent workflows using LangGraph, tool calling, memory, and human-in-the-loop approvals.",
    icon: Workflow,
    tags: ["LangGraph", "Tools", "Approvals"]
  },
  {
    title: "Large Language Models",
    description:
      "Building production-ready LLM applications using OpenAI, Claude, Gemini, prompt engineering, structured outputs, and evaluation pipelines.",
    icon: Brain,
    tags: ["OpenAI", "Claude", "Evaluation"]
  },
  {
    title: "Retrieval-Augmented Generation",
    description:
      "Developing enterprise RAG systems with vector databases, semantic search, document ingestion, reranking, and contextual reasoning.",
    icon: DatabaseZap,
    tags: ["Vectors", "Reranking", "pgvector"]
  },
  {
    title: "AI Automation",
    description:
      "Automating complex business workflows through APIs, event-driven architecture, AI orchestration, webhooks, and intelligent agents.",
    icon: Network,
    tags: ["APIs", "Webhooks", "Orchestration"]
  }
];
