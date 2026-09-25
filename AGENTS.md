# Repository Guidelines

## Project Structure & Module Organization

This repository is a single-page portfolio built with Astro. The main page is `src/pages/index.astro`; shared document markup belongs in `src/layouts/BaseLayout.astro`. Keep editable profile and portfolio content in `src/data/profile.ts`, global styles in `src/styles/global.css`, and imported/optimized images in `src/assets/`. Files served directly without processing (such as the CV, certificate, and social preview image) belong in `public/`. The top-level `assets/` directory contains source documents and images; avoid duplicating these into the page unless needed. Astro-generated output and dependencies are in `.astro/` and `node_modules/` and should not be edited directly.

## Build, Test, and Development Commands

- `npm install` installs the dependencies recorded in `package-lock.json`.
- `npm run dev` starts the local Astro development server.
- `npm run check` runs Astro and TypeScript diagnostics; run it after content or component changes.
- `npm run build` creates the production site in `dist/` and checks that it can be built.
- `npm run preview` serves the most recent production build locally.

There is no configured unit-test or lint script; do not assume one exists.

## Coding Style & Naming Conventions

Follow the existing two-space indentation in Astro, TypeScript, and CSS. Keep Astro component logic in the frontmatter block and use semantic HTML, accessible labels, and descriptive image alt text. Use PascalCase for Astro component/layout filenames, camelCase for TypeScript values, and kebab-case for CSS classes and static asset filenames. Keep profile facts in `src/data/profile.ts` rather than hard-coding duplicates in page markup. TypeScript uses Astro's strict configuration; preserve types and avoid `any`.

## Testing Guidelines

No test framework or coverage requirement is configured. Validate changes with `npm run check` and `npm run build`. For visual changes, also inspect the page in the development server at desktop and mobile widths, and verify navigation and document links.

## Commit & Pull Request Guidelines

No Git commits are available yet to establish a repository-specific convention. Use short, imperative commit subjects (for example, `feat: refresh portfolio profile`) and keep each change focused. PRs should explain the user-visible change, list validation commands and results, link related issues when applicable, and include screenshots for visual updates.

## Security & Configuration Tips

Do not commit secrets or add private personal information beyond the portfolio content intentionally published here. Configure the canonical deployment URL through `SITE_URL`; do not hard-code deployment-specific URLs in page content.
