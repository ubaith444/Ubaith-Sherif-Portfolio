import {
  ArrowRight,
  BriefcaseBusiness,
  Github,
  Linkedin,
  Mail,
  MapPin,
  ShieldCheck
} from "lucide-react";
import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { JsonLd } from "@/components/json-ld";
import { Reveal } from "@/components/motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { profile } from "@/lib/profile";
import { siteUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Ubaith Sherif for AI engineering, model integration, backend, automation, and full-stack product work.",
  alternates: {
    canonical: siteUrl("/contact")
  },
  openGraph: {
    title: `Contact ${profile.name}`,
    description:
      "Contact Ubaith Sherif for AI engineering, model integration, backend, automation, and full-stack product work.",
    url: siteUrl("/contact"),
    type: "profile",
    images: [
      {
        url: siteUrl("/visuals/ai-systems-command-center.png"),
        width: 1200,
        height: 675,
        alt: `Contact ${profile.name}`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: `Contact ${profile.name}`,
    description:
      "Contact Ubaith Sherif for AI engineering, model integration, backend, automation, and full-stack product work.",
    images: [siteUrl("/visuals/ai-systems-command-center.png")]
  }
};

const contactCards = [
  {
    title: "Email",
    value: profile.email,
    action: "Send Email",
    href: `mailto:${profile.email}`,
    icon: Mail
  },
  {
    title: "GitHub",
    value: "github.com/Ubaith444",
    action: "View Code",
    href: profile.github,
    icon: Github
  },
  {
    title: "LinkedIn",
    value: "Connect professionally",
    action: "Open Profile",
    href: profile.linkedin,
    icon: Linkedin
  },
  {
    title: "Location",
    value: profile.location,
    action: "India",
    href: "#availability",
    icon: MapPin
  }
];

const socialCards = [
  {
    title: "GitHub",
    description: "Review repositories, architecture decisions, and implementation details.",
    href: profile.github,
    icon: Github,
    action: "Open GitHub"
  },
  {
    title: "LinkedIn",
    description: "Connect for hiring, collaboration, or a technical conversation.",
    href: profile.linkedin,
    icon: Linkedin,
    action: "Open LinkedIn"
  },
  {
    title: "Email",
    description: "Send a direct note with the role, project, or problem context.",
    href: `mailto:${profile.email}`,
    icon: Mail,
    action: "Send Email"
  }
];

export default function ContactPage() {
  const contactSchema = [
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
          name: "Contact",
          item: siteUrl("/contact")
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "@id": siteUrl("/contact#contact-page"),
      url: siteUrl("/contact"),
      name: `Contact ${profile.name}`,
      description:
        "Contact page for Ubaith Sherif, AI Engineer focused on AI agents, RAG systems, automation platforms, and full-stack AI products.",
      mainEntity: {
        "@type": "Person",
        "@id": siteUrl("/#person"),
        name: profile.name,
        email: profile.email,
        telephone: profile.phone,
        sameAs: [profile.github, profile.linkedin]
      }
    }
  ];

  return (
    <main className="overflow-hidden pt-16" id="top">
      <JsonLd data={contactSchema} />
      <section className="mesh-surface relative border-b border-zinc-200 dark:border-white/10">
        <div className="grid-overlay absolute inset-0 opacity-35" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <Reveal>
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-600 dark:text-blue-300">Contact</p>
              <h1 className="mt-5 text-balance text-6xl font-semibold leading-[0.98] text-zinc-950 dark:text-white md:text-8xl">
                Let&apos;s make the first message useful.
              </h1>
              <p className="mt-6 max-w-2xl text-xl leading-9 text-slate-600 dark:text-zinc-300">
                Send the role, product idea, or workflow you are trying to improve. I respond best to clear context:
                what exists, what is broken, and what needs to ship.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {contactCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <Reveal delay={index * 0.04} key={card.title}>
                <Card className="h-full p-6 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_16px_42px_rgba(15,23,42,0.08)]">
                  <span className="grid size-11 place-items-center rounded-[8px] bg-blue-50 text-blue-700 dark:bg-blue-400/10 dark:text-blue-200">
                    <Icon aria-hidden="true" size={20} />
                  </span>
                  <h2 className="mt-5 text-xl font-semibold text-zinc-950 dark:text-white">{card.title}</h2>
                  <p className="mt-2 min-h-12 text-sm leading-6 text-slate-600 dark:text-zinc-300">{card.value}</p>
                  <Button className="mt-5" href={card.href} variant="secondary">
                    {card.action}
                    <ArrowRight aria-hidden="true" size={16} />
                  </Button>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:px-8" id="availability">
        <Reveal>
          <Card className="h-full bg-[#111827] p-6 text-white shadow-[0_18px_54px_rgba(15,23,42,0.16)] dark:border-white/10 md:p-8">
            <div className="flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-[8px] bg-blue-400 text-zinc-950">
                <BriefcaseBusiness aria-hidden="true" size={20} />
              </span>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">Availability</p>
                <h2 className="text-3xl font-semibold">Availability</h2>
              </div>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {["AI Engineer", "GenAI Engineer", "LLM Engineer", "Applied AI Engineer", "Remote", "Hybrid", "On-site"].map((item) => (
                <div className="flex items-center gap-3 rounded-[8px] border border-white/12 bg-white/[0.055] p-3" key={item}>
                  <ShieldCheck aria-hidden="true" className="text-blue-300" size={17} />
                  <span className="text-sm text-zinc-200">{item}</span>
                </div>
              ))}
            </div>
          </Card>
        </Reveal>
        <Reveal delay={0.08}>
          <ContactForm />
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          {socialCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <Reveal delay={index * 0.05} key={card.title}>
                <Card className="h-full p-6 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_16px_42px_rgba(15,23,42,0.08)]">
                  <span className="grid size-12 place-items-center rounded-[8px] bg-[#111827] text-white dark:bg-white dark:text-zinc-950">
                    <Icon aria-hidden="true" size={20} />
                  </span>
                  <h2 className="mt-5 text-2xl font-semibold text-zinc-950 dark:text-white">{card.title}</h2>
                  <p className="mt-3 leading-7 text-slate-600 dark:text-zinc-300">{card.description}</p>
                  <Button className="mt-6" href={card.href} variant="secondary">
                    {card.action}
                    <ArrowRight aria-hidden="true" size={16} />
                  </Button>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[8px] border border-zinc-200 bg-[#111827] p-8 text-white shadow-[0_18px_54px_rgba(15,23,42,0.18)] md:p-12 dark:border-white/10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(37,99,235,0.18),transparent_30%)]" />
            <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <div>
                <h2 className="text-balance text-4xl font-semibold md:text-6xl">Have a role or project that needs careful engineering?</h2>
                <p className="mt-4 text-xl text-zinc-300">Send the context. I will take it from there.</p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <Button href={`mailto:${profile.email}?subject=AI%20Engineering%20Conversation`}>
                  Schedule a Conversation
                  <ArrowRight aria-hidden="true" size={16} />
                </Button>
                <Button href={`mailto:${profile.email}`} variant="secondary">
                  Send Email
                  <Mail aria-hidden="true" size={16} />
                </Button>
                <Button href={profile.github} variant="secondary">
                  <Github aria-hidden="true" size={16} />
                  GitHub
                </Button>
                <Button href={profile.linkedin} variant="secondary">
                  <Linkedin aria-hidden="true" size={16} />
                  LinkedIn
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <footer className="border-t border-zinc-200 px-4 py-8 dark:border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between dark:text-zinc-400">
          <p>2026 {profile.name}</p>
          <div className="flex flex-wrap gap-3">
            <FooterLink href={profile.github} label="GitHub" />
            <FooterLink href={profile.linkedin} label="LinkedIn" />
            <FooterLink href={`mailto:${profile.email}`} label="Email" />
            <FooterLink href="/resume.pdf" label="Resume" />
            <FooterLink href="#top" label="Back to Top" />
          </div>
        </div>
      </footer>
    </main>
  );
}

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 transition hover:bg-zinc-100 hover:text-zinc-950 dark:hover:bg-white/10 dark:hover:text-white"
      href={href}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      target={href.startsWith("http") ? "_blank" : undefined}
    >
      {label}
    </a>
  );
}
