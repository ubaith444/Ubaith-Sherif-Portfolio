import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { BlogCover } from "@/components/project-visual";
import { Button } from "@/components/ui/button";
import { blogPosts, getPost } from "@/lib/blog";
import { profile } from "@/lib/profile";
import { siteUrl } from "@/lib/utils";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: siteUrl(`/blog/${post.slug}`)
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: siteUrl(`/blog/${post.slug}`),
      images: [
        {
          url: siteUrl("/visuals/ai-systems-command-center.png"),
          width: 1200,
          height: 675,
          alt: `${post.title} article cover`
        }
      ],
      type: "article"
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [siteUrl("/visuals/ai-systems-command-center.png")]
    }
  };
}

export default async function BlogPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    notFound();
  }

  const related = post.related.map(getPost).filter(Boolean);
  const articleSchema = [
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
          name: "Technical Articles",
          item: siteUrl("/#blog")
        },
        {
          "@type": "ListItem",
          position: 3,
          name: post.title,
          item: siteUrl(`/blog/${post.slug}`)
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": siteUrl(`/blog/${post.slug}#article`),
      headline: post.title,
      description: post.excerpt,
      datePublished: post.date,
      dateModified: post.date,
      author: {
        "@type": "Person",
        "@id": siteUrl("/#person"),
        name: profile.name
      },
      publisher: {
        "@type": "Person",
        "@id": siteUrl("/#person"),
        name: profile.name
      },
      image: siteUrl("/visuals/ai-systems-command-center.png"),
      mainEntityOfPage: siteUrl(`/blog/${post.slug}`)
    }
  ];

  return (
    <main className="pt-16">
      <JsonLd data={articleSchema} />
      <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <Button href="/#blog" variant="ghost">
          <ArrowLeft aria-hidden="true" size={16} />
          Back to writing
        </Button>
        <header className="mt-10">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-600 dark:text-blue-300">{post.topic}</p>
          <h1 className="mt-4 text-balance text-4xl font-semibold text-zinc-950 dark:text-white md:text-6xl">{post.title}</h1>
          <p className="mt-5 text-xl leading-9 text-zinc-600 dark:text-zinc-300">{post.excerpt}</p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm text-zinc-500 dark:text-zinc-400">
            <span>{post.readTime}</span>
            <span>{new Date(post.date).toLocaleDateString("en-IN", { month: "long", day: "numeric", year: "numeric" })}</span>
            <span>{profile.name}</span>
          </div>
        </header>

        <div className="mt-10">
          <BlogCover type={post.cover} />
        </div>

        <aside className="mt-10 rounded-[8px] border border-zinc-200 bg-zinc-50 p-5 dark:border-white/10 dark:bg-white/[0.045]">
          <h2 className="font-semibold text-zinc-950 dark:text-white">Table of contents</h2>
          <ol className="mt-4 grid gap-2 text-sm text-zinc-600 dark:text-zinc-300 sm:grid-cols-2">
            {post.tableOfContents.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </aside>

        <div className="mt-12 space-y-12">
          {post.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-2xl font-semibold text-zinc-950 dark:text-white">{section.heading}</h2>
              <div className="mt-5 space-y-5 text-lg leading-9 text-zinc-700 dark:text-zinc-300">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              {section.code ? (
                <pre className="mt-6 overflow-x-auto rounded-[8px] border border-zinc-200 bg-zinc-950 p-5 text-sm leading-6 text-blue-100 dark:border-white/10">
                  <code>{section.code}</code>
                </pre>
              ) : null}
              {section.diagram ? (
                <div className="mt-6 flex flex-wrap items-center gap-2 rounded-[8px] border border-zinc-200 bg-white p-4 dark:border-white/10 dark:bg-white/[0.045]">
                  {section.diagram.map((node, index) => (
                    <div className="flex items-center gap-2" key={node}>
                      <span className="rounded-full bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-700 dark:bg-blue-400/10 dark:text-blue-200">{node}</span>
                      {index < section.diagram!.length - 1 ? <ArrowRight aria-hidden="true" className="text-zinc-400" size={16} /> : null}
                    </div>
                  ))}
                </div>
              ) : null}
            </section>
          ))}
        </div>

        <section className="mt-12 rounded-[8px] border border-zinc-200 bg-zinc-50 p-6 dark:border-white/10 dark:bg-white/[0.045]">
          <h2 className="text-xl font-semibold text-zinc-950 dark:text-white">Key takeaways</h2>
          <ul className="mt-5 space-y-3">
            {post.takeaways.map((takeaway) => (
              <li className="flex gap-3 leading-7 text-zinc-600 dark:text-zinc-300" key={takeaway}>
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-blue-600 dark:bg-blue-300" />
                <span>{takeaway}</span>
              </li>
            ))}
          </ul>
        </section>

        {related.length ? (
          <section className="mt-12">
            <h2 className="text-xl font-semibold text-zinc-950 dark:text-white">Related articles</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {related.map((item) =>
                item ? (
                  <Link className="rounded-[8px] border border-zinc-200 bg-white p-4 transition hover:-translate-y-1 hover:border-blue-200 dark:border-white/10 dark:bg-white/[0.045]" href={`/blog/${item.slug}`} key={item.slug}>
                    <p className="text-sm font-semibold text-zinc-950 dark:text-white">{item.title}</p>
                    <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">{item.readTime}</p>
                  </Link>
                ) : null
              )}
            </div>
          </section>
        ) : null}
      </article>
    </main>
  );
}
