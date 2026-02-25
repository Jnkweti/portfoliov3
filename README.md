# Portfolio (jnkweti.dev)

This is my personal portfolio site: **[jnkweti.dev](https://jnkweti.dev)**.

I rebuilt it in Astro to keep it fast, clean, and easy to maintain without a backend.

## What's on the site

- About
- Skills (with category filtering + animated skill bars)
- Experience timeline
- Certifications
- Projects (currently a "work in progress" section that links to my GitHub)
- Resume download
- Contact page

## Stack I'm using

- Astro 5
- TypeScript (strict config)
- Tailwind CSS v4
- GitHub Actions for CI/CD
- GitHub Pages for hosting
- Custom domain via `CNAME` (`jnkweti.dev`)

## CI/CD workflows

- `deploy-github-pages.yml` — dependency audit gate → build → upload `dist/` → deploy to GitHub Pages.
- `ci.yml` — Astro type-check, build artifact, Lighthouse perf/a11y report, Gitleaks secret scan, dependency review on PRs.
- `weekly-audit.yml` — Monday npm audit (high/critical) + `npm outdated` report.
- `codeql.yml` — CodeQL SAST for JS/TS on push/PR and weekly schedule.

Recommended branch protections: require `lint_typecheck`, `build`, `lighthouse`, `gitleaks`, `dependency_review` (PRs), `dependency-audit` (deploy workflow).

## Local dev

```bash
npm install
npm run dev
```

Build + preview:

```bash
npm run build
npm run preview
```

## Notes

- This is a static site. The contact form does not hit a backend API.
- Contact submit opens a `mailto:` draft with sanitized form input.
- `astro.config.mjs` handles `site`/`base` automatically so paths work on GitHub Pages and with a custom domain.
- Shared layout includes CSP/referrer/permissions hardening meta headers.

## Where I edit content

- `src/data/portfolio.ts` - skills, experience, certs, links, etc.
- `src/pages/` - page-level layout/content
- `src/styles/global.css` - global styling, transitions, interaction effects

## Project structure

```text
src/
  assets/
  components/
  data/
  layouts/
  lib/
  pages/
  styles/
.github/workflows/
astro.config.mjs
CNAME
```
