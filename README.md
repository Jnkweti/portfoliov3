# Portfolio V3

Static portfolio site built with Astro, TypeScript, and Tailwind CSS.  
Deployment is handled by GitHub Actions to GitHub Pages.

## Stack
- Astro
- TypeScript (`astro/tsconfigs/strict`)
- Tailwind CSS v4
- GitHub Actions (`deploy-github-pages.yml`)

## Local Development
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

Build output is generated in `dist/`.

## GitHub Pages Deployment
This repository includes a workflow at:

- `.github/workflows/deploy-github-pages.yml`

Deployment flow:
1. Push to `main`.
2. Workflow runs `npm ci` and `npm run build`.
3. `dist/` is uploaded and deployed to GitHub Pages.

## Base Path Handling
`astro.config.mjs` is configured to set `site` and `base` automatically in GitHub Actions using:
- `GITHUB_REPOSITORY`
- `GITHUB_REPOSITORY_OWNER`
- `GITHUB_PAGES` / `GITHUB_ACTIONS`

This keeps internal links/assets working correctly for repository-based pages URLs.
