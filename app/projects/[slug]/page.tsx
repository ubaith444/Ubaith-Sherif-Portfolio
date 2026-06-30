import { ArrowLeft, ExternalLink, Github, Linkedin } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { profile } from "@/lib/profile";
import { getProject, projects } from "@/lib/projects";
import { siteUrl } from "@/lib/utils";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {};
  }

  return {
    title: project.title,
    description: project.description,
    alternates: {
      canonical: siteUrl(`/projects/${project.slug}`)
    },
    openGraph: {
      title: project.title,
      description: project.description,
      url: siteUrl(`/projects/${project.slug}`),
      images: [
        {
          url: siteUrl("/visuals/ai-systems-command-center.png"),
          width: 1200,
          height: 675,
          alt: `${project.title} architecture preview`
        }
      ],
      type: "article"
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
      images: [siteUrl("/visuals/ai-systems-command-center.png")]
    }
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const Icon = project.icon;
  const relatedProjects = projects.filter((item) => item.slug !== project.slug).slice(0, 3);
  const projectFaq = [
    {
      question: `What is ${project.title}?`,
      answer: project.description
    },
    {
      question: `What problem does ${project.title} solve?`,
      answer: project.problem
    },
    {
      question: `What technologies are used in ${project.title}?`,
      answer: project.stack.join(", ")
    },
    {
      question: `Can recruiters view ${project.title} code or request a demo?`,
      answer: `${project.github ? "A GitHub link is provided." : "No public GitHub link is listed."} ${project.demo ? "A demo request link is provided." : "No public demo URL is listed."}`
    }
  ];
  const projectSchema = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteUrl("/")
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Projects",
          item: siteUrl("/#projects")
        },
        {
          "@type": "ListItem",
          position: 3,
          name: project.title,
          item: siteUrl(`/projects/${project.slug}`)
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareSourceCode",
      "@id": siteUrl(`/projects/${project.slug}#software-source-code`),
      name: project.title,
      description: project.description,
      codeRepository: project.github,
      programmingLanguage: project.stack.filter((item) => ["Python", "TypeScript", "JavaScript"].includes(item)),
      runtimePlatform: project.stack,
      creator: {
        "@type": "Person",
        "@id": siteUrl("/#person"),
        name: profile.name
      },
      url: siteUrl(`/projects/${project.slug}`),
      image: siteUrl("/visuals/ai-systems-command-center.png")
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": siteUrl(`/projects/${project.slug}#faq-schema`),
      mainEntity: projectFaq.map((item) => ({
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
    <main className="pt-16">
      <JsonLd data={projectSchema} />
      <section className="mesh-surface border-b border-zinc-200 dark:border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <Button href="/#projects" variant="ghost">
            <ArrowLeft aria-hidden="true" size={16} />
            Back to projects
          </Button>
          <div className="mt-10 grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/80 px-3 py-1.5 text-sm text-zinc-700 shadow-sm dark:border-white/12 dark:bg-white/8 dark:text-zinc-200">
                <Icon aria-hidden="true" size={16} className="text-blue-600 dark:text-blue-300" />
                {project.eyebrow}
              </div>
              <h1 className="text-balance text-4xl font-semibold text-zinc-950 dark:text-white md:text-6xl">{project.title}</h1>
              <p className="mt-5 text-pretty text-xl leading-9 text-zinc-600 dark:text-zinc-300">{project.subtitle}</p>
              <p className="mt-4 max-w-2xl leading-8 text-slate-600 dark:text-zinc-300">{project.description}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                {project.github ? (
                  <Button href={project.github} variant="secondary">
                    <Github aria-hidden="true" size={16} />
                    GitHub
                  </Button>
                ) : null}
                {project.demo ? (
                  <Button href={project.demo}>
                    Request demo
                    <ExternalLink aria-hidden="true" size={16} />
                  </Button>
                ) : null}
                <Button href={profile.linkedin} variant="secondary">
                  <Linkedin aria-hidden="true" size={16} />
                  LinkedIn
                </Button>
              </div>
            </div>
            <div className="rounded-[8px] border border-zinc-200 bg-white p-6 shadow-[0_12px_34px_rgba(15,23,42,0.07)] dark:border-white/10 dark:bg-white/[0.045]">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-300">Architecture preview</p>
              <div className="mt-5 grid gap-3">
                {project.architecturePreview.map((item) => (
                  <div className="rounded-[8px] border border-zinc-200 bg-zinc-50 p-4 text-sm font-medium text-zinc-700 dark:border-white/10 dark:bg-white/[0.045] dark:text-zinc-200" key={item}>
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.slice(0, 8).map((item) => (
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 dark:bg-blue-400/10 dark:text-blue-200" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8" aria-labelledby="project-preview-heading">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-600 dark:text-blue-300">Project Preview</p>
            <h2 id="project-preview-heading" className="mt-4 text-3xl font-semibold text-zinc-950 dark:text-white">Visual context for the case study.</h2>
            <p className="mt-4 leading-8 text-slate-600 dark:text-zinc-300">
              This preview image represents the portfolio&apos;s AI engineering work and gives the project page an accessible visual asset for search and sharing.
            </p>
          </div>
          <figure className="overflow-hidden rounded-[8px] border border-zinc-200 bg-white shadow-[0_12px_34px_rgba(15,23,42,0.07)] dark:border-white/10 dark:bg-white/[0.045]">
            <Image
              alt={`${project.title} project preview showing AI engineering architecture and product workflow context`}
              className="h-auto w-full"
              height={675}
              priority={false}
              src="/visuals/ai-systems-command-center.png"
              width={1200}
            />
            <figcaption className="border-t border-zinc-200 px-4 py-3 text-sm text-slate-600 dark:border-white/10 dark:text-zinc-300">
              Project preview image for {project.title}. Replace this with a product screenshot when a public screenshot is available.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            ["Problem", project.problem],
            ["Solution", project.solution],
            ["Timeline", project.timeline]
          ].map(([label, body]) => (
            <Card className="p-6" key={label}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-300">{label}</p>
              <p className="mt-4 leading-8 text-zinc-600 dark:text-zinc-300">{body}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-y border-zinc-200 bg-zinc-50/80 py-16 dark:border-white/10 dark:bg-white/[0.025]">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.7fr_1.3fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-600 dark:text-blue-300">Architecture</p>
            <h2 className="mt-4 text-3xl font-semibold text-zinc-950 dark:text-white">System design decisions.</h2>
          </div>
          <div className="grid gap-4">
            {project.architecture.map((item) => (
              <div className="rounded-[8px] border border-zinc-200 bg-white p-5 text-zinc-700 shadow-sm dark:border-white/10 dark:bg-white/[0.045] dark:text-zinc-300" key={item}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <InfoList title="Features" items={project.features} />
          <InfoList title="Challenges" items={project.challenges} />
          <InfoList title="Results and signals" items={project.metrics} />
          <InfoList title="Future roadmap" items={project.roadmap} />
        </div>
        <div className="mt-8 rounded-[8px] border border-zinc-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.045]">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-300">Tech stack</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-sm text-zinc-700 dark:border-white/10 dark:bg-white/8 dark:text-zinc-200" key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-zinc-200 bg-[#f3f4f6]/70 py-16 dark:border-white/10 dark:bg-white/[0.025]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-600 dark:text-blue-300">Project FAQ</p>
              <h2 className="mt-4 text-3xl font-semibold text-zinc-950 dark:text-white">Concise answers about {project.title}.</h2>
            </div>
            <div className="grid gap-4">
              {projectFaq.map((item) => (
                <Card className="p-5" key={item.question}>
                  <h3 className="font-semibold text-zinc-950 dark:text-white">{item.question}</h3>
                  <p className="mt-3 leading-7 text-slate-600 dark:text-zinc-300">{item.answer}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-zinc-950 dark:text-white">Related projects</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {relatedProjects.map((item) => (
            <Link className="rounded-[8px] border border-zinc-200 bg-white p-5 transition hover:-translate-y-1 hover:border-blue-200 dark:border-white/10 dark:bg-white/[0.045]" href={`/projects/${item.slug}`} key={item.slug}>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-300">{item.industry}</p>
              <h3 className="mt-3 text-lg font-semibold text-zinc-950 dark:text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-zinc-300">{item.subtitle}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-[8px] border border-zinc-200 bg-zinc-950 p-8 text-white dark:border-white/10">
          <h2 className="text-2xl font-semibold">Discuss this project with {profile.name}.</h2>
          <p className="mt-3 max-w-2xl leading-7 text-zinc-300">
            The demo links use email where no public deployment URL has been provided, keeping the portfolio honest while still giving recruiters a direct path to request access.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href={`mailto:${profile.email}?subject=${encodeURIComponent(project.title)}%20case%20study`}>
              Contact about this project
              <ExternalLink aria-hidden="true" size={16} />
            </Button>
            <Button href={profile.linkedin} variant="secondary">
              <Linkedin aria-hidden="true" size={16} />
              LinkedIn
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

function InfoList({ title, items }: { title: string; items: string[] }) {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold text-zinc-950 dark:text-white">{title}</h2>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li className="flex gap-3 leading-7 text-zinc-600 dark:text-zinc-300" key={item}>
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-blue-600 dark:bg-blue-300" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}
