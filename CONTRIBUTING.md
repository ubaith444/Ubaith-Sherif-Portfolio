# Contributing

Thanks for taking the time to improve this portfolio.

## Development Setup

```bash
npm ci
npm run dev
```

## Quality Checks

Run these before opening a pull request:

```bash
npm run typecheck
npm run lint
npm run build
npm run test:smoke
npm run test:e2e
```

## Pull Request Guidelines

- Keep changes scoped and easy to review.
- Do not redesign the site unless the issue explicitly asks for it.
- Preserve SEO, GEO, AEO, accessibility, sitemap, robots, and JSON-LD behavior.
- Do not commit secrets, `.env.local`, build output, test reports, or local cache directories.
- Include screenshots for visible UI changes.

## Content Guidelines

- Keep claims factual and verifiable.
- Do not add fake metrics or unsupported outcomes.
- Use clear engineering language instead of hype-heavy marketing copy.
