# Production Deployment Checklist

## Pre-Release

- [ ] `npm ci`
- [ ] `npm run typecheck`
- [ ] `npm run lint`
- [ ] `npm run build`
- [ ] `npm run test:smoke`
- [ ] `npm run test:e2e`
- [ ] `npm audit --audit-level=moderate` reviewed
- [ ] `.env.local` is not committed
- [ ] `.next/`, `node_modules/`, `test-results/`, `playwright-report/`, and `tmp/` are not committed

## GitHub

- [ ] Repository description added
- [ ] Repository topics added
- [ ] Social preview image uploaded
- [ ] Default branch set to `main`
- [ ] Branch protection enabled for `main`
- [ ] Release `v1.0.0` created
- [ ] Repository pinned on profile

## Vercel

- [ ] GitHub repository connected
- [ ] Production environment variables added
- [ ] Deployment succeeds
- [ ] Custom domain configured, if available
- [ ] Vercel Analytics enabled
- [ ] Speed Insights enabled

## SEO, GEO, AEO

- [ ] `NEXT_PUBLIC_SITE_URL` matches deployed URL
- [ ] `/sitemap.xml` verified
- [ ] `/robots.txt` verified
- [ ] Canonical URLs verified
- [ ] Open Graph preview verified
- [ ] Twitter card preview verified
- [ ] JSON-LD schema validated
- [ ] Google Search Console submitted
- [ ] Bing Webmaster Tools submitted

## Post-Launch

- [ ] Lighthouse run against deployed URL
- [ ] Core Web Vitals monitored
- [ ] Dependency alerts enabled
- [ ] Security policy visible
- [ ] Contact links tested
