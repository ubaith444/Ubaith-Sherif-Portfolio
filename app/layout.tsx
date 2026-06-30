import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Navbar } from "@/components/navbar";
import { profile } from "@/lib/profile";
import { defaultSiteUrl, siteUrl } from "@/lib/utils";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fafaf7"
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? defaultSiteUrl),
  title: {
    default: `${profile.name} - AI Engineer`,
    template: `%s - ${profile.name}`
  },
  description:
    "Portfolio of Ubaith Sherif, an AI Engineer building LLM applications, agent workflows, RAG systems, and full-stack automation products.",
  keywords: [
    "AI Engineer",
    "Generative AI Engineer",
    "LLM Engineer",
    "AI Agent Engineer",
    "Applied AI Engineer",
    "FastAPI",
    "LangGraph",
    "Next.js"
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: ["/icon.svg"],
    apple: [{ url: "/icon.svg", type: "image/svg+xml" }]
  },
  alternates: {
    canonical: siteUrl("/")
  },
  openGraph: {
    title: `${profile.name} - AI Engineer`,
    description: "AI engineering work across agents, LLM applications, RAG, backend systems, and automation platforms.",
    url: siteUrl("/"),
    siteName: `${profile.name} Portfolio`,
    images: [
      {
        url: "/visuals/ai-systems-command-center.png",
        width: 1200,
        height: 675,
        alt: "AI engineering portfolio preview"
      }
    ],
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} - AI Engineer`,
    description: "AI engineering work across model integrations, backend systems, and automation products.",
    images: ["/visuals/ai-systems-command-center.png"]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = [
    {
      "@context": "https://schema.org",
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
      url: siteUrl("/"),
      sameAs: [profile.github, profile.linkedin],
      knowsAbout: ["AI Agents", "LLM Applications", "RAG", "FastAPI", "LangGraph", "Next.js"]
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": siteUrl("/#website"),
      name: `${profile.name} Portfolio`,
      url: siteUrl("/"),
      description:
        "AI Engineer portfolio covering AI agents, RAG systems, LLM applications, automation platforms, backend APIs, and full-stack AI products.",
      inLanguage: "en-IN",
      publisher: {
        "@type": "Person",
        "@id": siteUrl("/#person"),
        name: profile.name
      }
    }
  ];

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen antialiased">
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{const r=document.documentElement;const s=localStorage.getItem('theme');const d=s?s==='dark':matchMedia('(prefers-color-scheme: dark)').matches;r.classList.toggle('dark',d);document.addEventListener('click',function(e){const b=e.target.closest('[data-theme-toggle]');if(!b)return;const n=!r.classList.contains('dark');r.classList.toggle('dark',n);localStorage.setItem('theme',n?'dark':'light')})}catch(e){}"
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <div id="main-content">{children}</div>
        {process.env.VERCEL ? <Analytics /> : null}
      </body>
    </html>
  );
}
