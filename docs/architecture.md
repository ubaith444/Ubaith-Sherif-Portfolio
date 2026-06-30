# Architecture

## Application Architecture

The portfolio uses the Next.js App Router with a structured content layer. The homepage is a recruiter-focused product surface, while each project and blog post has its own route for SEO and deeper evaluation.

## Folder Structure

```text
app/                  Route entry points, metadata, sitemap, robots
components/           Reusable UI, navigation, motion primitives
components/ui/        Button, card, and section primitives
lib/                  Profile, projects, stack, GitHub, and blog data
public/visuals/       Generated and static visual assets
docs/                 Architecture, design system, and deployment docs
```

## Component Hierarchy

```text
RootLayout
  Navbar
  Home
    Hero
    About
    Project cards
    Stack groups
    Experience timeline
    GitHub activity
    Blog cards
    Contact
  ProjectPage
    Case study hero
    Problem / Solution / Timeline
    Architecture list
    Feature, challenge, metric, roadmap lists
  BlogPage
    Article header
    Article body
```

## Data Model

- `lib/profile.ts` contains contact and positioning data.
- `lib/projects.ts` powers project cards and project detail routes.
- `lib/blog.ts` powers engineering notes and article routes.
- `lib/stack.ts` powers the interactive technology cards.
- `lib/github.ts` fetches latest public repositories and falls back safely if GitHub is unavailable.

## SEO

The site includes:

- Dynamic metadata for project and blog pages.
- Open Graph and Twitter card metadata.
- JSON-LD Person schema.
- Sitemap generation.
- Robots configuration.
- Canonical URL helper.

## Accessibility

The UI includes semantic sections, keyboard focus states, accessible labels for icon controls, sufficient contrast, and responsive layouts for desktop, tablet, mobile, and wide screens.
