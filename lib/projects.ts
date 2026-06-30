import { Bot, BrainCircuit, ChartSpline, GraduationCap, type LucideIcon } from "lucide-react";

export type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  industry: string;
  status: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  tags: string[];
  problem: string;
  solution: string;
  architecture: string[];
  architecturePreview: string[];
  features: string[];
  stack: string[];
  challenges: string[];
  metrics: string[];
  impact: string;
  timeline: string;
  github?: string;
  demo?: string;
  roadmap: string[];
};

export const projects: Project[] = [
  {
    slug: "multi-agent-business-automation-platform",
    title: "Multi-Agent Business Automation Platform",
    eyebrow: "Workflow automation",
    industry: "Business automation",
    status: "Flagship system",
    subtitle: "Human-reviewed automation for sales, support, and reporting operations.",
    description:
      "A full-stack workflow platform built around approvals, audit trails, role-based access, webhook security, and business communication channels.",
    icon: Bot,
    tags: ["LangGraph", "FastAPI", "PostgreSQL", "Redis", "RBAC", "Audit Logs"],
    problem:
      "Most automation demos skip the operational details teams actually need: permissions, retries, approvals, traceability, and safe handoffs.",
    solution:
      "The platform models work as reviewable workflows with approval checkpoints, secure webhooks, structured execution logs, and screens for monitoring each step.",
    architecture: [
      "Next.js product console for workflows, approvals, timelines, and monitoring.",
      "FastAPI service layer for authentication, RBAC, webhook validation, and API contracts.",
      "LangGraph orchestration for agent planning, tool calls, state transitions, and recovery paths.",
      "PostgreSQL for durable workflow records, Redis for queues/cache, and audit logs for traceability.",
      "Email and WhatsApp integration points for day-to-day communication loops."
    ],
    architecturePreview: ["LangGraph state machine", "FastAPI service layer", "PostgreSQL audit trail"],
    features: [
      "Workflow builder with agent assignment and approval gates.",
      "Role-aware dashboards for operators, reviewers, and admins.",
      "Immutable audit timeline for prompts, outputs, approvals, and external events.",
      "Webhook security with signed events and replay protection."
    ],
    stack: ["LangGraph", "FastAPI", "PostgreSQL", "Redis", "Next.js", "OpenAI", "Claude", "JWT", "Docker"],
    challenges: [
      "Designing agent flows that can pause cleanly for human approval.",
      "Separating product-visible audit logs from low-level debug traces.",
      "Keeping webhook and communication events idempotent under retry conditions."
    ],
    metrics: [
      "Engineering patterns: RBAC, approvals, audit logs, signed webhooks.",
      "Designed for measurable workflow cycle time, retry rate, and review latency.",
      "Built as a recruiter-facing proof of engineering depth."
    ],
    impact: "Shows judgment around approvals, observability, security boundaries, and full-stack orchestration.",
    timeline: "System design, API contracts, orchestration, product console, release hardening.",
    github: "https://github.com/Ubaith444",
    demo: "mailto:ubaithsherif22@gmail.com?subject=Multi-Agent%20Automation%20Demo",
    roadmap: [
      "Add per-tool cost accounting and prompt/version lineage.",
      "Introduce organization-level policy controls for agent autonomy.",
      "Ship reusable workflow templates for CRM, reporting, and operations."
    ]
  },
  {
    slug: "footballiq-ai",
    title: "FootballIQ AI",
    eyebrow: "Football analysis",
    industry: "Sports analytics",
    status: "Flagship prototype",
    subtitle: "Football analytics, scouting views, transfer context, and generated match reports.",
    description:
      "A football analysis platform that combines match context, model-assisted summaries, player notes, scouting workflows, and dashboard-driven analysis.",
    icon: ChartSpline,
    tags: ["Live Analytics", "Predictions", "LLM Reports", "Dashboards"],
    problem:
      "Football analysis tools often split live data, scouting notes, transfer context, and written match reports across disconnected surfaces.",
    solution:
      "FootballIQ AI brings match analytics, player notes, generated summaries, and scouting views into one product surface for faster review.",
    architecture: [
      "Frontend match center with live analytics, dashboards, and report surfaces.",
      "Prediction and summarization APIs that separate model outputs from verified source data.",
      "Player and club context layer for scouting, transfer notes, and comparisons.",
      "Report generation pipeline for post-match summaries and decision notes."
    ],
    architecturePreview: ["Live match feed", "Prediction service", "LLM report generator"],
    features: [
      "Live match analytics and momentum views.",
      "AI predictions with confidence-oriented presentation.",
      "Player context and scouting profiles.",
      "LLM summaries for match reports and tactical notes."
    ],
    stack: ["Python", "FastAPI", "React", "TypeScript", "LLMs", "RAG", "PostgreSQL", "Charts"],
    challenges: [
      "Avoiding unsupported transfer or player claims without a verified source path.",
      "Designing dashboards that work for live scanning and deep analysis.",
      "Balancing AI summaries with visible provenance and confidence cues."
    ],
    metrics: [
      "Built around verified-data boundaries instead of unsourced claims.",
      "Optimized for analyst workflows: scan, compare, summarize, decide.",
      "Product direction supports live, post-match, and scouting workflows."
    ],
    impact: "Turns match, player, and scouting context into a single analysis workspace.",
    timeline: "Live hub, data model, dashboards, intelligence views, reporting UX.",
    github: "https://github.com/Ubaith444",
    demo: "mailto:ubaithsherif22@gmail.com?subject=FootballIQ%20AI%20Demo",
    roadmap: [
      "Add source attribution cards for every generated claim.",
      "Expand scouting comparison workflows.",
      "Introduce match timeline embeddings for retrieval-backed reports."
    ]
  },
  {
    slug: "insightai-agent",
    title: "InsightAI Agent",
    eyebrow: "Natural language analytics",
    industry: "Business intelligence",
    status: "Flagship concept",
    subtitle: "Ask questions over business data and review the query, chart, and explanation.",
    description:
      "A natural language analytics concept for turning business questions into governed queries, generated charts, and readable explanations.",
    icon: BrainCircuit,
    tags: ["RAG", "Analytics", "SQL", "Dashboards"],
    problem:
      "Teams need faster analytical answers, but raw text-to-SQL flows can be unsafe, opaque, and hard to trust without schema awareness and reviewable reasoning.",
    solution:
      "InsightAI Agent uses a governed analytics flow: understand intent, map schema, generate a checked query, render visual output, and explain the result in plain language.",
    architecture: [
      "Question intake and schema retrieval for grounded query generation.",
      "Query validation layer before execution.",
      "Chart and narrative generation for decision-ready output.",
      "History and audit views for repeated analysis and review."
    ],
    architecturePreview: ["Schema retrieval", "Safe SQL generation", "Insight narrative"],
    features: [
      "Natural language question input.",
      "Generated SQL with reviewable query preview.",
      "Chart recommendations and short summaries.",
      "Dataset-aware constraints and prompt templates."
    ],
    stack: ["Python", "FastAPI", "Next.js", "PostgreSQL", "OpenAI", "Vector Databases", "RAG"],
    challenges: [
      "Constraining query generation to known schema and allowed operations.",
      "Making generated insights explainable instead of magical.",
      "Designing the product for analysts and non-technical operators."
    ],
    metrics: [
      "Designed for traceable question-to-query workflows.",
      "Prioritizes governed analytics over unrestricted chatbot behavior.",
      "Supports future evaluation on query validity and answer usefulness."
    ],
    impact: "Makes analytics faster without hiding query logic, schema constraints, or model uncertainty.",
    timeline: "Schema grounding, query flow, dashboard UX, report generation.",
    github: "https://github.com/Ubaith444",
    demo: "mailto:ubaithsherif22@gmail.com?subject=InsightAI%20Agent%20Demo",
    roadmap: [
      "Add dataset connectors and permission-aware semantic layers.",
      "Introduce query evaluation test sets.",
      "Build reusable executive report templates."
    ]
  },
  {
    slug: "ai-teacher-robot",
    title: "AI Teacher Robot",
    eyebrow: "Robotics and classroom AI",
    industry: "Education technology",
    status: "Flagship resume project",
    subtitle: "Classroom assistant with face recognition attendance, speech interaction, and knowledge retrieval.",
    description:
      "A classroom assistant combining computer vision, voice interaction, FastAPI services, PostgreSQL, pgvector, WebSockets, and Raspberry Pi integration.",
    icon: GraduationCap,
    tags: ["OpenCV", "InsightFace", "RAG", "Raspberry Pi", "STT", "TTS"],
    problem:
      "Classroom support tasks such as attendance, repeated explanations, and student query handling can consume time that teachers need for instruction.",
    solution:
      "The teacher robot uses face recognition, speech-to-text, text-to-speech, and retrieval-augmented responses to support attendance and personalized learning assistance.",
    architecture: [
      "FastAPI backend for classroom workflows, WebSocket updates, and device integration.",
      "OpenCV and InsightFace pipeline for real-time face recognition attendance.",
      "PostgreSQL with pgvector for retrieval-backed learning content.",
      "STT, TTS, and NLP services for conversational classroom interaction.",
      "Raspberry Pi integration for edge-device behavior."
    ],
    architecturePreview: ["Camera recognition", "Voice interface", "RAG knowledge base"],
    features: [
      "Face recognition attendance workflow.",
      "Speech interaction through STT and TTS.",
      "Retrieval-Augmented Generation for learning support.",
      "Real-time classroom dashboard using WebSockets."
    ],
    stack: ["Python", "FastAPI", "OpenCV", "InsightFace", "PostgreSQL", "pgvector", "STT", "TTS", "RAG", "Raspberry Pi"],
    challenges: [
      "Coordinating camera, voice, and retrieval workflows in one assistant.",
      "Keeping real-time classroom updates responsive.",
      "Designing assistance that supports teachers rather than replacing instruction."
    ],
    metrics: [
      "Covers computer vision, speech systems, retrieval, and backend engineering.",
      "Built around practical classroom automation use cases.",
      "Demonstrates edge-device to backend integration."
    ],
    impact: "Connects computer vision and language AI to a real education workflow: attendance and assisted learning.",
    timeline: "Computer vision pipeline, FastAPI services, classroom dashboard, device integration.",
    github: "https://github.com/Ubaith444",
    demo: "mailto:ubaithsherif22@gmail.com?subject=AI%20Teacher%20Robot%20Demo",
    roadmap: [
      "Add teacher-controlled knowledge base updates.",
      "Improve classroom analytics and attendance export flows.",
      "Introduce evaluation for answer quality and recognition reliability."
    ]
  }
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
