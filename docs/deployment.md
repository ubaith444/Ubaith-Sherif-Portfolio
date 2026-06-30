# Deployment Guide

Primary target: Vercel

Secondary targets: Netlify and Cloudflare Pages

## Environment Variables

Set these in the deployment provider:

```bash
NEXT_PUBLIC_SITE_URL=https://ubaith-sherif-portfolio.vercel.app
NEXT_PUBLIC_GA_ID=
GITHUB_TOKEN=
```

`NEXT_PUBLIC_SITE_URL` should be the final production URL. Update it again after adding a custom domain.

`GITHUB_TOKEN` is optional and should be added as a secret only if GitHub API rate limits become a problem.

## Vercel

Vercel is the recommended hosting platform for this portfolio.

### Dashboard Flow

1. Open Vercel.
2. Select **Add New Project**.
3. Import `ubaith444/Ubaith-Sherif-Portfolio`.
4. Keep the framework preset as **Next.js**.
5. Add environment variables.
6. Deploy.

### CLI Flow

```bash
npm i -g vercel
vercel login
vercel link
vercel env add NEXT_PUBLIC_SITE_URL production
vercel env add GITHUB_TOKEN production
vercel --prod
```

### Recommended Vercel Settings

- Framework preset: Next.js
- Install command: `npm ci`
- Build command: `npm run build`
- Output directory: managed by Vercel
- Node.js version: 22.x
- Analytics: enabled
- Speed Insights: enabled

## Custom Domain

1. Add the domain in Vercel project settings.
2. Configure DNS records through the domain provider.
3. Update `NEXT_PUBLIC_SITE_URL` to the final `https://` domain.
4. Redeploy.
5. Verify canonical URLs, sitemap, Open Graph, and JSON-LD.

## Netlify

`netlify.toml` is included for Netlify deployment.

Recommended settings:

```bash
npm run build
```

- Build command: `npm run build`
- Publish directory: `.next`
- Node.js version: 22.x
- Plugin: `@netlify/plugin-nextjs`

## Cloudflare Pages

Cloudflare Pages requires a Next.js adapter for full Next.js support.

Recommended path:

```bash
npm run build
npx @cloudflare/next-on-pages
```

Then deploy the generated Pages output through the Cloudflare dashboard or Wrangler.

Use Cloudflare only after validating the adapter output because Vercel is the primary target for this repository.

## GitHub Actions

The release CI workflow runs:

- `npm ci`
- `npm run typecheck`
- `npm run lint`
- `npm run build`
- production smoke tests
- Playwright E2E tests

Optional Vercel preview and production jobs are included but disabled by default. To enable them:

1. Add repository variable `ENABLE_VERCEL_GITHUB_ACTIONS=true`.
2. Add secrets:
   - `VERCEL_TOKEN`
   - `VERCEL_ORG_ID`
   - `VERCEL_PROJECT_ID`

## Post-Deployment Verification

- HTTPS loads correctly.
- `/sitemap.xml` returns the production domain.
- `/robots.txt` references the sitemap.
- Homepage metadata uses the production URL.
- JSON-LD validates in Rich Results Test or Schema Markup Validator.
- Open Graph image renders in social previews.
- Twitter card renders with `summary_large_image`.
- Vercel Analytics receives page views.
- Speed Insights records Core Web Vitals.
- Google Search Console property is verified.
- Bing Webmaster Tools property is verified.
