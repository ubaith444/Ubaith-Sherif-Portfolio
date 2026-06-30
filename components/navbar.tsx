import { ArrowDownToLine, BriefcaseBusiness, Contact, GraduationCap, Home, Linkedin, Medal, Moon, Newspaper, PanelsTopLeft, Sun, UserRound, Wrench } from "lucide-react";
import Link from "next/link";
import { profile } from "@/lib/profile";
import { Button } from "@/components/ui/button";

const links = [
  { label: "Home", href: "/#home", id: "home", icon: Home },
  { label: "About", href: "/#about", id: "about", icon: UserRound },
  { label: "Projects", href: "/#projects", id: "projects", icon: BriefcaseBusiness },
  { label: "Skills", href: "/#skills", id: "skills", icon: Wrench },
  { label: "Experience", href: "/#experience", id: "experience", icon: PanelsTopLeft },
  { label: "Education", href: "/#education", id: "education", icon: GraduationCap },
  { label: "Certificates", href: "/#certifications", id: "certifications", icon: Medal },
  { label: "Blog", href: "/#blog", id: "blog", icon: Newspaper },
  { label: "Contact", href: "/contact", id: "contact", icon: Contact }
];

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-200/70 bg-white/84 backdrop-blur-xl dark:border-white/10 dark:bg-zinc-950/76">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8" aria-label="Primary">
        <Link href="/#home" className="flex shrink-0 items-center gap-3 font-semibold text-zinc-950 dark:text-white" aria-label="Ubaith Sherif home">
          <span className="grid size-10 place-items-center rounded-[8px] border border-zinc-200 bg-white shadow-sm dark:border-white/12 dark:bg-white/8">
            <PanelsTopLeft aria-hidden="true" className="text-blue-600 dark:text-blue-300" size={19} />
          </span>
          <span className="hidden xl:inline">Ubaith Sherif</span>
        </Link>
        <div className="no-scrollbar hidden flex-1 items-center justify-center gap-1 overflow-x-auto lg:flex">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                aria-label={link.label}
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-medium text-zinc-600 transition hover:-translate-y-0.5 hover:bg-zinc-100 hover:text-zinc-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:text-zinc-300 dark:hover:bg-white/10 dark:hover:text-white"
                href={link.href}
                key={link.href}
              >
                <Icon aria-hidden="true" size={15} />
                <span className="hidden 2xl:inline">{link.label}</span>
              </Link>
            );
          })}
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <a
            aria-label="LinkedIn"
            className="hidden size-10 place-items-center rounded-full border border-zinc-200 bg-white text-[#0A66C2] shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:border-white/12 dark:bg-white/8 dark:hover:bg-white/12 sm:grid"
            href={profile.linkedin}
            rel="noreferrer"
            target="_blank"
          >
            <Linkedin aria-hidden="true" size={18} />
          </a>
          <button
            aria-label="Toggle color theme"
            className="inline-flex size-10 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 shadow-sm transition hover:border-zinc-300 hover:text-zinc-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:border-white/12 dark:bg-white/8 dark:text-zinc-200 dark:hover:bg-white/12"
            data-theme-toggle
            type="button"
          >
            <Moon aria-hidden="true" className="dark:hidden" size={18} />
            <Sun aria-hidden="true" className="hidden dark:block" size={18} />
          </button>
          <Button className="hidden sm:inline-flex" download="Ubaith-Sherif-Resume.pdf" href="/resume.pdf" variant="secondary">
            <ArrowDownToLine aria-hidden="true" size={16} />
            Resume
          </Button>
        </div>
      </nav>
    </header>
  );
}
