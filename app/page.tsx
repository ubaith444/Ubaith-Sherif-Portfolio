import {
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  ShieldCheck
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { JsonLd } from "@/components/json-ld";
import { BlogCover } from "@/components/project-visual";
import { Reveal, Magnetic } from "@/components/motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { blogPosts } from "@/lib/blog";
import { certifications } from "@/lib/certifications";
import { education } from "@/lib/education";
import { internships } from "@/lib/experience";
import { profile } from "@/lib/profile";
import { projects } from "@/lib/projects";
import { siteUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Ubaith Sherif - AI Engineer Portfolio",
  description:
    "Ubaith Sherif is an AI Engineer building production-ready AI agents, RAG systems, automation platforms, and full-stack AI products with LangGraph, FastAPI, Next.js, PostgreSQL, vector databases, OpenAI, Claude, and LangChain.",
  alternates: {
    canonical: siteUrl("/")
  },
  openGraph: {
    title: "Ubaith Sherif - AI Engineer Portfolio",
    description:
      "AI Engineer portfolio with projects in AI agents, RAG, automation platforms, football analytics, natural language analytics, and classroom AI.",
    url: siteUrl("/"),
    type: "profile",
    images: [
      {
        url: siteUrl("/visuals/ai-systems-command-center.png"),
        width: 1200,
        height: 675,
        alt: "Ubaith Sherif AI Engineer portfolio preview"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Ubaith Sherif - AI Engineer Portfolio",
    description:
      "AI Engineer building AI agents, RAG systems, automation platforms, and full-stack AI products.",
    images: [siteUrl("/visuals/ai-systems-command-center.png")]
  }
};

const homeProjectStories: Record<string, { summary: string; points: string[] }> = {
  "multi-agent-business-automation-platform": {
    summary:
      "A workflow platform for teams that need approvals, traceability, and clear handoffs before automation can be trusted.",
    points: ["Human review where it matters", "Clear operating views for teams", "Audit trails that explain what happened"]
  },
  "footballiq-ai": {
    summary:
      "A football analysis workspace that keeps match context, scouting notes, and generated reports in one place.",
    points: ["Live and post-match analysis", "Scouting flows for faster comparison", "Careful handling of football claims"]
  },
  "insightai-agent": {
    summary:
      "An analytics concept for teams that want faster answers without losing the query logic behind them.",
    points: ["Question-to-query flow", "Reviewable analysis for business users", "Plain explanations before decisions"]
  },
  "ai-teacher-robot": {
    summary:
      "A classroom assistant that combines attendance, speech interaction, and learning support in a teacher-led workflow.",
    points: ["Attendance and classroom support", "Teacher-centered assistance", "Edge-device and backend thinking"]
  }
};

const homeArticlePreviews: Record<string, { category: string; title: string; excerpt: string }> = {
  "building-production-ai-agents": {
    category: "Product Engineering",
    title: "Building Model Features People Can Trust",
    excerpt:
      "How to move from a demo to software with clear boundaries, review points, and behavior a team can explain."
  },
  "langgraph-in-production": {
    category: "System Design",
    title: "Designing Workflows That Can Be Run",
    excerpt:
      "Notes on making model-driven workflows visible, recoverable, and understandable when users depend on them."
  },
  "enterprise-rag-architecture": {
    category: "Information Systems",
    title: "Making Knowledge Features Trustworthy",
    excerpt:
      "A practical look at grounding answers in useful source material, clean content, evaluation, and transparent product design."
  },
  "fastapi-for-ai-engineers": {
    category: "Backend Engineering",
    title: "API Design for Intelligent Features",
    excerpt:
      "Why the service layer matters when model behavior needs validation, observability, and a stable product contract."
  },
  "scaling-multi-agent-systems": {
    category: "Reliability",
    title: "Scaling Coordinated AI Workflows",
    excerpt:
      "How to think about queues, state, review, recovery, and monitoring when a workflow grows past one interaction."
  },
  "designing-ai-automation-platforms": {
    category: "Product Design",
    title: "Designing Automation People Actually Use",
    excerpt:
      "A product-minded approach to approvals, timelines, controls, and interfaces that make automation feel dependable."
  }
};

const skillGroups = [
  {
    title: "AI & Machine Learning",
    skills: ["AI Agents", "Generative AI", "LLM Engineering", "RAG", "LangGraph", "LangChain", "OpenAI", "Claude", "Vector Databases"]
  },
  {
    title: "Backend & APIs",
    skills: ["FastAPI", "Python", "PostgreSQL", "Redis", "REST APIs", "Webhooks", "RBAC", "Audit Logs", "Background Jobs"]
  },
  {
    title: "Frontend & UI",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Dashboards", "Case Study UI", "Responsive Layouts"]
  },
  {
    title: "Tools & Platforms",
    skills: ["Docker", "GitHub", "Vercel", "CI Workflows", "pgvector", "Raspberry Pi", "Charts", "Evaluation Flows"]
  }
];

const whatIBuild = [
  "AI agent workflows with approvals, state, tool calls, and audit trails.",
  "RAG systems with ingestion, retrieval, metadata, vector databases, and source-aware answers.",
  "Automation platforms that connect APIs, webhooks, queues, product screens, and human review.",
  "Full-stack AI products using FastAPI, Next.js, PostgreSQL, OpenAI, Claude, LangGraph, and LangChain."
];

const bestFitRoles = [
  "AI Engineer",
  "Generative AI Engineer",
  "LLM Engineer",
  "AI Agent Engineer",
  "RAG Developer",
  "Full Stack AI Developer",
  "AI Automation Engineer"
];

const proofOfWork = [
  "Multi-Agent Business Automation Platform: workflow orchestration, approval gates, RBAC, audit logging, and webhooks.",
  "FootballIQ AI: football analytics, scouting views, match summaries, and claim-aware product design.",
  "InsightAI Agent: natural language analytics with query review, chart generation, and readable explanations.",
  "AI Teacher Robot: classroom attendance, speech interaction, retrieval, computer vision, and device integration."
];

const homepageFaq = [
  {
    question: "Who is Ubaith Sherif?",
    answer:
      "Ubaith Sherif is an AI Engineer from Coimbatore, India, focused on AI agents, RAG systems, automation platforms, analytics products, and full-stack AI applications."
  },
  {
    question: "What does Ubaith Sherif build?",
    answer:
      "He builds AI agents, retrieval systems, workflow automation platforms, analytics tools, classroom AI projects, and backend-heavy full-stack products."
  },
  {
    question: "Is Ubaith Sherif an AI Engineer?",
    answer:
      "Yes. Ubaith positions himself as an AI Engineer, Generative AI Engineer, LLM Engineer, AI Agent Engineer, RAG Developer, and Full Stack AI Developer."
  },
  {
    question: "What AI projects has Ubaith Sherif built?",
    answer:
      "His flagship projects include Multi-Agent Business Automation Platform, FootballIQ AI, InsightAI Agent, and AI Teacher Robot."
  },
  {
    question: "What is Ubaith Sherif's tech stack?",
    answer:
      "His stack includes LangGraph, LangChain, FastAPI, Next.js, React, TypeScript, PostgreSQL, Redis, vector databases, OpenAI, Claude, Python, Docker, and GitHub workflows."
  },
  {
    question: "Does Ubaith Sherif build AI agents and RAG systems?",
    answer:
      "Yes. His portfolio includes agent workflow projects, retrieval-backed analytics, knowledge retrieval, vector databases, approval flows, and source-aware answers."
  },
  {
    question: "How can I contact Ubaith Sherif?",
    answer: `You can contact Ubaith Sherif by email at ${profile.email}, through LinkedIn, or through the contact page on this portfolio.`
  }
];

export default function Home() {
  const homepageSchema = [
    {
      "@context": "https://schema.org",
      "@type": "ProfilePage",
      "@id": siteUrl("/#profile-page"),
      url: siteUrl("/"),
      name: `${profile.name} - AI Engineer Portfolio`,
      description:
        "Profile page for Ubaith Sherif, an AI Engineer building AI agents, RAG systems, automation platforms, and full-stack AI products.",
      mainEntity: {
        "@type": "Person",
        "@id": siteUrl("/#person"),
        name: profile.name,
        jobTitle: "AI Engineer",
        email: profile.email,
        telephone: profile.phone,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Coimbatore",
          addressCountry: "IN"
        },
        sameAs: [profile.github, profile.linkedin],
        knowsAbout: [
          "AI Engineer",
          "Generative AI",
          "LLM Engineering",
          "AI Agents",
          "RAG",
          "LangGraph",
          "FastAPI",
          "Next.js",
          "PostgreSQL",
          "Vector Databases",
          "OpenAI",
          "Claude",
          "LangChain"
        ]
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": siteUrl("/#faq-schema"),
      mainEntity: homepageFaq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer
        }
      }))
    }
  ];

  return (
    <main id="home" className="overflow-hidden pt-16">
      <JsonLd data={homepageSchema} />
      <section className="mesh-surface relative border-b border-zinc-200/80 dark:border-white/10">
        <div className="grid-overlay absolute inset-0 opacity-35" aria-hidden="true" />
        <div className="relative mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-center gap-16 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-[1.04fr_0.96fr] lg:px-8">
          <Reveal>
            <div>
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-blue-600 dark:text-blue-300">
                AI Engineer | Generative AI | Full-Stack AI Developer
              </p>
              <h1 className="text-balance text-5xl font-semibold leading-[1.02] text-zinc-950 dark:text-white sm:text-6xl lg:text-7xl">
                I turn rough AI ideas into software that holds up in use.
              </h1>
              <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-slate-600 dark:text-zinc-300">
                I am Ubaith Sherif, an AI Engineer building production-ready AI agents, RAG systems, automation
                platforms, and full-stack AI products. I work across APIs, data flows, model integrations, and
                interfaces teams can reason about, with attention to permissions, failure states, evaluation, and handoffs.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Magnetic>
                  <Button href="#projects">
                    View My Projects
                    <ArrowRight aria-hidden="true" size={16} />
                  </Button>
                </Magnetic>
                <Magnetic>
                  <Button download="Ubaith-Sherif-Resume.pdf" href="/resume.pdf" variant="secondary">
                    Download Resume
                  </Button>
                </Magnetic>
                <div className="flex gap-2 sm:ml-2">
                  <IconLink href={profile.github} icon={<Github aria-hidden="true" size={18} />} label="GitHub" />
                  <IconLink href={profile.linkedin} icon={<Linkedin aria-hidden="true" size={18} />} label="LinkedIn" />
                  <IconLink href={`mailto:${profile.email}`} icon={<Mail aria-hidden="true" size={18} />} label="Email" />
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <AbstractEditorialVisual />
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8" aria-labelledby="what-i-build-heading">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
          <Reveal>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-600 dark:text-blue-300">What I Build</p>
              <h2 id="what-i-build-heading" className="mt-4 text-3xl font-semibold text-zinc-950 dark:text-white md:text-5xl">
                Model-backed products with clear system boundaries.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-zinc-300">
                Recruiters and AI search engines should be able to understand the work quickly: Ubaith builds AI agents,
                RAG products, automation platforms, analytics tools, and full-stack AI applications.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="grid gap-4 sm:grid-cols-2">
              {whatIBuild.map((item) => (
                <Card className="p-5" key={item}>
                  <div className="flex gap-3">
                    <ShieldCheck aria-hidden="true" className="mt-1 shrink-0 text-blue-600 dark:text-blue-300" size={18} />
                    <p className="leading-7 text-slate-600 dark:text-zinc-300">{item}</p>
                  </div>
                </Card>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8" id="about">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
          <Reveal>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-600 dark:text-blue-300">About</p>
              <h2 className="mt-4 text-3xl font-semibold text-zinc-950 dark:text-white md:text-5xl">
                I like the hard middle between a model demo and a working product.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="space-y-6 text-lg leading-9 text-slate-600 dark:text-zinc-300">
              <p>
                Ubaith treats AI engineering like product engineering: understand the workflow, define the contract,
                make the system observable, and keep the user experience simple enough to operate under pressure.
              </p>
              <p>
                His strongest work sits in the practical layer: business operations, natural-language analytics,
                classroom tools, and football analysis. The goal is not to make AI feel magical. It is to make the
                software explainable, maintainable, and worth using.
              </p>
              <Button href="/contact" variant="secondary">
                Connect with Ubaith
                <ArrowRight aria-hidden="true" size={16} />
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-zinc-200 bg-[#f3f4f6]/70 py-20 dark:border-white/10 dark:bg-white/[0.025]" id="projects">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Featured Projects" title="Selected work with the constraints left in.">
            Four projects that show how Ubaith handles product shape, data flow, review, and the unglamorous details.
          </SectionHeading>
          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((project, index) => {
              const Icon = project.icon;
              const story = homeProjectStories[project.slug];
              return (
                <Reveal delay={index * 0.04} key={project.slug}>
                  <Card className="group h-full p-6 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_16px_42px_rgba(37,99,235,0.10)] md:p-7 dark:hover:border-blue-400/30">
                    <div className="flex h-full flex-col">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="mb-4 flex flex-wrap gap-2">
                            <span className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 dark:bg-blue-400/10 dark:text-blue-200">{project.industry}</span>
                          </div>
                          <h3 className="mt-3 text-2xl font-semibold text-zinc-950 dark:text-white">{project.title}</h3>
                        </div>
                        <span className="grid size-11 shrink-0 place-items-center rounded-[8px] bg-zinc-950 text-white dark:bg-white dark:text-zinc-950">
                          <Icon aria-hidden="true" size={20} />
                        </span>
                      </div>
                      <p className="mt-4 text-pretty leading-7 text-slate-600 dark:text-zinc-300">{story.summary}</p>
                      <div className="mt-5 rounded-[8px] border border-zinc-200 bg-[#f9fafb] p-4 dark:border-white/10 dark:bg-white/[0.045]">
                        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">What it demonstrates</p>
                        {story.points.map((item) => (
                          <div className="flex items-center gap-2 py-1 text-sm text-slate-600 dark:text-zinc-300" key={item}>
                            <span className="size-1.5 rounded-full bg-blue-600 dark:bg-blue-300" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-auto pt-7">
                        <Button href={`/projects/${project.slug}`} variant="secondary">
                          View Case Study
                          <ArrowRight aria-hidden="true" size={16} />
                        </Button>
                      </div>
                    </div>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8" id="skills">
        <SectionHeading eyebrow="Skills" title="Technical Strengths">
          A clean summary of the technologies and engineering areas represented across the portfolio.
        </SectionHeading>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map((group, index) => (
            <Reveal delay={index * 0.04} key={group.title}>
              <Card className="h-full p-6">
                <h3 className="text-xl font-semibold text-zinc-950 dark:text-white">{group.title}</h3>
                <div className="mt-5 flex min-w-0 max-w-full flex-wrap gap-2 overflow-hidden">
                  {group.skills.map((skill) => (
                    <span
                      className="skill-chip rounded-full border border-zinc-200 bg-[#f9fafb] px-3 py-1.5 text-sm font-medium text-slate-700 dark:border-white/10 dark:bg-white/8 dark:text-zinc-200"
                      key={skill}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-zinc-200 bg-[#f3f4f6]/70 py-20 dark:border-white/10 dark:bg-white/[0.025]" aria-labelledby="fit-proof-heading">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <Card className="h-full p-6 md:p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-600 dark:text-blue-300">Best Fit Roles</p>
              <h2 id="fit-proof-heading" className="mt-4 text-3xl font-semibold text-zinc-950 dark:text-white">Roles Ubaith fits clearly.</h2>
              <div className="mt-6 flex flex-wrap gap-2">
                {bestFitRoles.map((role) => (
                  <span className="rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 dark:border-white/10 dark:bg-white/8 dark:text-zinc-200" key={role}>
                    {role}
                  </span>
                ))}
              </div>
            </Card>
          </Reveal>
          <Reveal delay={0.08}>
            <Card className="h-full p-6 md:p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-600 dark:text-blue-300">Proof of Work</p>
              <h2 className="mt-4 text-3xl font-semibold text-zinc-950 dark:text-white">Four flagship project signals.</h2>
              <ul className="mt-6 space-y-3">
                {proofOfWork.map((item) => (
                  <li className="flex gap-3 leading-7 text-slate-600 dark:text-zinc-300" key={item}>
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-blue-600 dark:bg-blue-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-zinc-200 bg-zinc-950 py-20 text-white dark:border-white/10" id="experience">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Experience" title="Hands-on AI and data work." tone="inverted">
            Resume-backed experience across machine learning, data workflows, and application development.
          </SectionHeading>
          <div className="relative space-y-6 before:absolute before:left-4 before:top-0 before:h-full before:w-px before:bg-white/12 md:before:left-1/2">
            {internships.map((item, index) => (
              <Reveal delay={index * 0.06} key={item.company}>
                <div className={`relative grid gap-6 md:grid-cols-2 ${index % 2 ? "" : "md:[&>div:first-child]:col-start-2"}`}>
                  <span className="absolute left-2 top-6 z-10 size-4 rounded-full border-4 border-zinc-950 bg-blue-300 md:left-[calc(50%-8px)]" />
                  <div className="rounded-[8px] border border-white/12 bg-white/[0.055] p-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-200">{item.duration}</p>
                    <h3 className="mt-3 text-2xl font-semibold">{item.role}</h3>
                    <p className="mt-1 text-zinc-300">{item.company}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {item.technologies.map((tech) => (
                        <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-blue-100" key={tech}>{tech}</span>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-[8px] border border-white/12 bg-white/[0.04] p-6 md:col-start-auto">
                    <h4 className="font-semibold">Responsibilities and outcomes</h4>
                    <ul className="mt-4 space-y-3 text-sm leading-6 text-zinc-300">
                      {[...item.responsibilities, ...item.achievements].map((point) => (
                        <li className="flex gap-3" key={point}>
                          <CheckCircle2 className="mt-0.5 shrink-0 text-blue-300" size={16} />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8" id="education">
        <SectionHeading eyebrow="Education" title="Academic base in AI and Data Science.">
          Coursework and final-year work shaped around machine learning, data systems, computer vision, NLP, and software delivery.
        </SectionHeading>
        <Card className="grid gap-8 p-6 md:grid-cols-[0.82fr_1.18fr] md:p-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-600 dark:text-blue-300">{education.duration}</p>
            <h3 className="mt-4 text-3xl font-semibold text-zinc-950 dark:text-white">{education.degree}</h3>
            <p className="mt-2 text-xl text-zinc-700 dark:text-zinc-200">{education.field}</p>
            <p className="mt-4 text-zinc-600 dark:text-zinc-300">{education.institution}, {education.location}</p>
          </div>
          <div className="space-y-5">
            <p className="leading-8 text-zinc-600 dark:text-zinc-300">{education.focus}</p>
            <p className="leading-8 text-zinc-600 dark:text-zinc-300">{education.finalYearWork}</p>
            <div className="flex flex-wrap gap-2">
              {education.coursework.map((course) => (
                <span className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-sm text-zinc-700 dark:border-white/10 dark:bg-white/8 dark:text-zinc-200" key={course}>{course}</span>
              ))}
            </div>
          </div>
        </Card>
      </section>

      <section className="border-y border-zinc-200 bg-[#f3f4f6]/70 py-20 dark:border-white/10 dark:bg-white/[0.025]" id="certifications">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Certificates" title="Relevant credentials, kept simple.">
            Short, verifiable cards for the certifications most connected to the work shown here.
          </SectionHeading>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {certifications.map((certification, index) => (
              <Reveal delay={index * 0.05} key={certification.title}>
                <Card className="flex h-full flex-col p-6 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_16px_42px_rgba(15,23,42,0.08)]">
                  <div className="mb-6 flex items-center justify-between gap-4">
                    <span className="grid size-14 place-items-center rounded-[8px] border border-zinc-200 bg-zinc-950 text-sm font-bold tracking-wide text-white shadow-sm dark:border-white/10 dark:bg-white dark:text-zinc-950">
                      {certification.logo}
                    </span>
                    <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-200">Verified</span>
                  </div>
                  <h3 className="text-lg font-semibold leading-7 text-zinc-950 dark:text-white">{certification.title}</h3>
                  <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-300">{certification.organization}</p>
                  <div className="mt-5 space-y-2 text-sm text-zinc-500 dark:text-zinc-400">
                    <p>Issued: {certification.issueDate}</p>
                    <p className="break-words">Credential ID: {certification.credentialId}</p>
                  </div>
                  <Button className="mt-6" href={certification.credentialUrl} variant="secondary">
                    Show Credential
                    <ExternalLink aria-hidden="true" size={16} />
                  </Button>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-zinc-200 bg-[#f3f4f6]/70 py-20 dark:border-white/10 dark:bg-white/[0.025]" id="blog">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Technical Articles" title="Writing with implementation details.">
            Notes on architecture, reliability, evaluation, and product decisions from an engineer&apos;s point of view.
          </SectionHeading>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {blogPosts.map((post, index) => {
              const preview = homeArticlePreviews[post.slug];
              return (
                <Reveal delay={index * 0.03} key={post.slug}>
                  <Link className="block h-full overflow-hidden rounded-[8px] border border-zinc-200 bg-white shadow-[0_10px_30px_rgba(15,23,42,0.045)] transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_16px_42px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-white/[0.045]" href={`/blog/${post.slug}`}>
                    <BlogCover type={post.cover} />
                    <div className="p-5">
                      <div className="mb-4 flex items-center justify-between gap-3 text-xs">
                        <span className="rounded-full bg-blue-50 px-3 py-1 font-semibold text-blue-700 dark:bg-blue-400/10 dark:text-blue-200">{preview.category}</span>
                        <span className="text-zinc-500 dark:text-zinc-400">{post.readTime}</span>
                      </div>
                      <h3 className="text-xl font-semibold leading-7 text-zinc-950 dark:text-white">{preview.title}</h3>
                        <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600 dark:text-zinc-300">{preview.excerpt}</p>
                      <div className="mt-5 flex items-center justify-between gap-3 border-t border-zinc-200 pt-4 text-xs text-zinc-500 dark:border-white/10 dark:text-zinc-400">
                        <span>{profile.name}</span>
                        <span>{new Date(post.date).toLocaleDateString("en-IN", { month: "short", day: "numeric", year: "numeric" })}</span>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8" id="faq">
        <SectionHeading eyebrow="FAQ" title="Quick answers for recruiters and search engines.">
          Direct answers to the questions people and AI search tools are likely to ask about Ubaith Sherif.
        </SectionHeading>
        <div className="grid gap-4 md:grid-cols-2">
          {homepageFaq.map((item, index) => (
            <Reveal delay={index * 0.03} key={item.question}>
              <Card className="h-full p-6">
                <h3 className="text-lg font-semibold text-zinc-950 dark:text-white">{item.question}</h3>
                <p className="mt-3 leading-7 text-slate-600 dark:text-zinc-300">{item.answer}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8" id="contact">
        <Reveal>
          <div className="relative overflow-hidden rounded-[8px] border border-zinc-200 bg-[#111827] p-8 text-white shadow-[0_18px_54px_rgba(15,23,42,0.18)] md:p-12 dark:border-white/10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(37,99,235,0.18),transparent_30%)]" />
            <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-300">Contact</p>
                <h2 className="mt-4 text-balance text-4xl font-semibold md:text-6xl">Tell me what you need built.</h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-300">
                  If you need an engineer who can move from model behavior to APIs, data flow, and usable screens,
                  send the context. I will read it properly.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <Button href="/contact">
                  Contact Me
                  <ArrowRight aria-hidden="true" size={16} />
                </Button>
                <Button href={profile.linkedin} variant="secondary">
                  <Linkedin aria-hidden="true" size={16} />
                  LinkedIn
                </Button>
                <Button href={profile.github} variant="secondary">
                  <Github aria-hidden="true" size={16} />
                  GitHub
                </Button>
                <Button download="Ubaith-Sherif-Resume.pdf" href="/resume.pdf" variant="secondary">
                  Download Resume
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <Footer />
    </main>
  );
}

function AbstractEditorialVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[560px]">
      <div className="absolute inset-8 rounded-full bg-[radial-gradient(circle_at_35%_30%,rgba(37,99,235,0.22),transparent_34%),radial-gradient(circle_at_68%_64%,rgba(124,58,237,0.16),transparent_32%)] blur-2xl" />
      <svg className="relative h-full w-full" viewBox="0 0 600 600" role="img" aria-label="Abstract editorial AI engineering visual">
        <defs>
          <linearGradient id="editorial-blue" x1="90" x2="510" y1="80" y2="520">
            <stop stopColor="#2563eb" stopOpacity="0.85" />
            <stop offset="1" stopColor="#7c3aed" stopOpacity="0.65" />
          </linearGradient>
        </defs>
        <circle cx="300" cy="300" r="210" fill="none" stroke="url(#editorial-blue)" strokeWidth="1.5" opacity="0.45" />
        <circle className="pulse-soft" cx="300" cy="300" r="150" fill="none" stroke="url(#editorial-blue)" strokeWidth="1.5" opacity="0.55" />
        <path className="float-slow" d="M180 330c42-110 170-166 258-104 72 51 55 173-31 220-98 54-266-3-227-116Z" fill="url(#editorial-blue)" opacity="0.16" />
        <path className="float-medium" d="M154 252c60-82 174-116 271-75 72 30 111 111 82 184-28 72-116 112-205 89-111-29-207-118-148-198Z" fill="none" stroke="url(#editorial-blue)" strokeWidth="2" opacity="0.75" />
        <path d="M160 370 444 206M204 180l216 238M142 292h316M286 130v346" stroke="#2563eb" strokeWidth="1.5" opacity="0.28" />
        {[
          [160, 370],
          [444, 206],
          [204, 180],
          [420, 418],
          [142, 292],
          [458, 292],
          [286, 130],
          [286, 476]
        ].map(([cx, cy], index) => (
          <circle className={index % 2 ? "float-fast" : "pulse-soft"} cx={cx} cy={cy} fill={index % 2 ? "#7c3aed" : "#2563eb"} key={`${cx}-${cy}`} r="7" opacity="0.78" />
        ))}
        <rect x="220" y="244" width="160" height="112" rx="28" fill="white" opacity="0.7" />
        <rect x="220" y="244" width="160" height="112" rx="28" fill="none" stroke="#d4d4d8" />
        <path d="M252 285h96M252 310h62" stroke="#18181b" strokeWidth="8" strokeLinecap="round" opacity="0.72" />
      </svg>
    </div>
  );
}

function IconLink({ href, icon, label }: { href: string; icon: ReactNode; label: string }) {
  return (
    <a
      aria-label={label}
      className="grid size-11 place-items-center rounded-[8px] border border-[#d1d5db] bg-white text-[#111827] shadow-none transition hover:-translate-y-0.5 hover:border-[#9ca3af] hover:bg-[#f3f4f6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:border-white/20 dark:bg-white/8 dark:text-zinc-100 dark:hover:border-blue-300 dark:hover:bg-blue-400/10"
      href={href}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      target={href.startsWith("http") ? "_blank" : undefined}
    >
      {icon}
    </a>
  );
}

function Footer() {
  return (
    <footer className="border-t border-zinc-200 px-4 py-8 dark:border-white/10">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between dark:text-zinc-400">
        <p>2026 {profile.name}. AI engineering, backend systems, and clear product interfaces.</p>
        <div className="flex flex-wrap gap-3">
          <a className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 transition hover:bg-zinc-100 hover:text-zinc-950 dark:hover:bg-white/10 dark:hover:text-white" href={profile.github} rel="noreferrer" target="_blank">
            <Github aria-hidden="true" size={15} />
            GitHub
          </a>
          <a className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 transition hover:bg-zinc-100 hover:text-zinc-950 dark:hover:bg-white/10 dark:hover:text-white" href={profile.linkedin} rel="noreferrer" target="_blank">
            <Linkedin aria-hidden="true" size={15} />
            LinkedIn
          </a>
          <a className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 transition hover:bg-zinc-100 hover:text-zinc-950 dark:hover:bg-white/10 dark:hover:text-white" href={`mailto:${profile.email}`}>
            <Mail aria-hidden="true" size={15} />
            Email
          </a>
          <a className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 transition hover:bg-zinc-100 hover:text-zinc-950 dark:hover:bg-white/10 dark:hover:text-white" href="/resume.pdf">
            Resume
          </a>
          <a className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 transition hover:bg-zinc-100 hover:text-zinc-950 dark:hover:bg-white/10 dark:hover:text-white" href="#home">
            Back to Top
          </a>
        </div>
      </div>
    </footer>
  );
}
