# Husni Attin — Portfolio

A single-page professional portfolio for Husni Attin, focused on healthcare administration, patient service, and environmental health. The site is built with Astro and keeps profile content separate from page markup.

## Requirements

- Node.js (use a current LTS release)
- npm

## Getting Started

```sh
npm install
npm run dev
```

Open the local URL printed by Astro to view the site.

## Available Commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server. |
| `npm run check` | Run Astro and TypeScript diagnostics. |
| `npm run build` | Build the production site into `dist/`. |
| `npm run preview` | Preview the latest production build locally. |

## Project Structure

```text
src/
  assets/       Processed images, including the profile portrait
  data/         Portfolio profile and experience content
  layouts/      Shared page layout and document metadata
  pages/        Astro routes
  scripts/      Client-side interactions
  styles/       Global styles
public/
  certificates/ Downloadable certificates
  cv/           Downloadable CV
  og/           Social sharing image
assets/         Original source documents and images
```

Update portfolio details in `src/data/profile.ts`. Put files that should be served directly, such as the CV and certificates, in `public/`; reference them from the site with root-relative paths (for example, `/cv/husni-attin-cv.pdf`).

## Deployment Configuration

Set `SITE_URL` to the canonical absolute URL when building for production. If it is not set, the Astro configuration uses `VERCEL_URL` when available. The sitemap integration is enabled when either deployment URL is configured.

```sh
SITE_URL=https://example.com npm run build
```

Do not commit secrets or deployment-specific credentials to the repository.
