export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  topic: string;
  readTime: string;
  date: string;
  cover: string;
  tableOfContents: string[];
  sections: {
    heading: string;
    body: string[];
    code?: string;
    diagram?: string[];
  }[];
  takeaways: string[];
  related: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "building-production-ai-agents",
    title: "Building Production AI Agents",
    excerpt:
      "A practical guide to moving from agent demos to systems with state, permissions, approvals, retries, and auditability.",
    topic: "AI Agents",
    readTime: "8 min read",
    date: "2026-06-29",
    cover: "agents",
    tableOfContents: ["Why demos fail", "Agent architecture", "Approval loops", "Operational checks"],
    sections: [
      {
        heading: "Why agent demos fail in production",
        body: [
          "A useful agent is not only a prompt with tools. It needs durable state, a clear execution contract, access control, retries, and a way to explain what happened after the fact.",
          "The moment an agent touches business workflows, the product needs approval checkpoints and traceability."
        ]
      },
      {
        heading: "A production-friendly agent shape",
        body: ["A strong baseline separates orchestration, tools, policy, and user-visible audit logs."],
        code: `type AgentRun = {
  id: string;
  workflowId: string;
  status: "queued" | "running" | "awaiting_approval" | "completed" | "failed";
  toolCalls: ToolCall[];
  auditEvents: AuditEvent[];
};`
      },
      {
        heading: "Approval loops",
        body: ["Human-in-the-loop design is a control surface for deciding where the agent can act and where business judgment is required."],
        diagram: ["Request", "Plan", "Tool call", "Approval", "Audit log", "Action"]
      }
    ],
    takeaways: [
      "State and auditability matter as much as model capability.",
      "Approval gates make autonomy safer and more useful.",
      "Agent products need operational dashboards, not only chat interfaces."
    ],
    related: ["langgraph-in-production", "designing-ai-automation-platforms"]
  },
  {
    slug: "langgraph-in-production",
    title: "LangGraph in Production",
    excerpt:
      "How state graphs, nodes, edges, checkpoints, and human approval flows help structure reliable agent workflows.",
    topic: "LangGraph",
    readTime: "7 min read",
    date: "2026-06-29",
    cover: "workflow",
    tableOfContents: ["State graph basics", "Node contracts", "Checkpoints", "Approval paths"],
    sections: [
      {
        heading: "State graph basics",
        body: [
          "LangGraph is useful because it turns agent execution into an explicit graph instead of an invisible chain of prompt calls.",
          "Each node can own a specific responsibility: planning, retrieval, tool execution, review, or response."
        ],
        diagram: ["Input", "Planner", "Retriever", "Tool node", "Approval node", "Responder"]
      },
      {
        heading: "Node contracts",
        body: ["Reliable graphs depend on typed state, clear transitions, and recovery paths."],
        code: `const workflowState = {
  request: userRequest,
  retrievedContext: [],
  proposedActions: [],
  approvalRequired: true
};`
      }
    ],
    takeaways: [
      "Graphs make agent systems inspectable.",
      "Checkpoints are essential for pause-and-resume workflows.",
      "Human approval should be modeled as part of the graph."
    ],
    related: ["building-production-ai-agents", "scaling-multi-agent-systems"]
  },
  {
    slug: "enterprise-rag-architecture",
    title: "Enterprise RAG Architecture",
    excerpt:
      "Retrieval quality depends on ingestion, chunking, metadata, ranking, evaluation, provenance, and product feedback loops.",
    topic: "RAG",
    readTime: "9 min read",
    date: "2026-06-29",
    cover: "rag",
    tableOfContents: ["Ingestion", "Chunking", "Retrieval", "Evaluation"],
    sections: [
      {
        heading: "Start with ingestion quality",
        body: ["A RAG system is only as reliable as the text it retrieves. Clean documents, metadata, deduplication, and chunk boundaries shape answer quality before the model is called."]
      },
      {
        heading: "Make retrieval testable",
        body: ["Create expected-question sets and inspect whether the retriever returns useful evidence before optimizing prompts."],
        code: `const evalCase = {
  question: "What policy covers refund eligibility?",
  expectedSources: ["refund-policy-v3"],
  mustInclude: ["eligibility", "time window"]
};`
      },
      {
        heading: "Expose provenance",
        body: ["The interface should show sources and uncertainty so users can verify the answer instead of treating the model as an oracle."],
        diagram: ["Documents", "Chunks", "Embeddings", "Retriever", "Reranker", "Answer"]
      }
    ],
    takeaways: [
      "Chunking and metadata are product decisions.",
      "RAG should be evaluated with real questions.",
      "Good UI makes provenance visible."
    ],
    related: ["fastapi-for-ai-engineers", "building-production-ai-agents"]
  },
  {
    slug: "fastapi-for-ai-engineers",
    title: "FastAPI for AI Engineers",
    excerpt:
      "Typed request boundaries, background jobs, streaming responses, and observability patterns for LLM-backed software.",
    topic: "FastAPI",
    readTime: "7 min read",
    date: "2026-06-29",
    cover: "fastapi",
    tableOfContents: ["Typed boundaries", "Background work", "Streaming", "Observability"],
    sections: [
      {
        heading: "Typed boundaries",
        body: ["FastAPI works well for AI products because request and response models make the contract between product UI and model services explicit."],
        code: `class GenerateReportRequest(BaseModel):
    workflow_id: str
    user_prompt: str
    require_approval: bool = True`
      },
      {
        heading: "Background work",
        body: ["Long-running model calls should expose progress states and retries rather than blocking the user interface."]
      }
    ],
    takeaways: [
      "Typed APIs make AI features easier to debug.",
      "Background jobs improve user experience for slow model calls.",
      "Validation protects both the model and the product."
    ],
    related: ["scaling-multi-agent-systems", "designing-ai-automation-platforms"]
  },
  {
    slug: "scaling-multi-agent-systems",
    title: "Scaling Multi-Agent Systems",
    excerpt:
      "Scalable agent products depend on queues, model routing, tool contracts, monitoring, caching, and evaluation loops.",
    topic: "Multi-Agent Systems",
    readTime: "8 min read",
    date: "2026-06-29",
    cover: "systems",
    tableOfContents: ["Service boundaries", "Queues", "Tool contracts", "Evaluation"],
    sections: [
      {
        heading: "Service boundaries",
        body: ["Separate product workflows, model calls, retrieval, and external integrations so each part can be monitored and improved independently."],
        diagram: ["Product UI", "API gateway", "Workflow service", "Model service", "Database", "Observability"]
      },
      {
        heading: "Tool contracts",
        body: ["Each tool should define inputs, outputs, failure states, retry behavior, and audit events."],
        code: `type ToolContract = {
  name: string;
  inputSchema: unknown;
  retryable: boolean;
  auditLevel: "standard" | "sensitive";
};`
      }
    ],
    takeaways: [
      "Scalability starts with boundaries.",
      "Observability is required for model-backed systems.",
      "Evaluation should run alongside shipping."
    ],
    related: ["langgraph-in-production", "building-production-ai-agents"]
  },
  {
    slug: "designing-ai-automation-platforms",
    title: "Designing AI Automation Platforms",
    excerpt:
      "AI automation platforms need permissions, policy controls, queues, webhook security, and reviewable events.",
    topic: "AI Automation",
    readTime: "8 min read",
    date: "2026-06-29",
    cover: "enterprise",
    tableOfContents: ["Workflow boundaries", "Security", "Observability", "Review"],
    sections: [
      {
        heading: "Workflow boundaries",
        body: ["Automation workflows should define where AI recommends, where it drafts, where it acts, and where humans must approve."]
      },
      {
        heading: "Secure event handling",
        body: ["Signed webhooks, idempotency keys, and replay protection keep automation reliable when external systems retry events."],
        code: `const signature = createHmac("sha256", secret)
  .update(rawBody)
  .digest("hex");`
      }
    ],
    takeaways: [
      "AI workflow design is product, security, and backend engineering at once.",
      "Human review should be visible and measurable.",
      "Webhook safety matters for automation credibility."
    ],
    related: ["building-production-ai-agents", "fastapi-for-ai-engineers"]
  }
];

export function getPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
