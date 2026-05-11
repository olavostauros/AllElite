# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```sh
npm run dev       # Start dev server at localhost:4321
npm run build     # Build production site to ./dist/
npm run preview   # Preview production build locally
npm run astro ... # Run Astro CLI commands (e.g. astro add, astro check)
```

Requires Node >= 22.12.0.

## Architecture

This is an [Astro](https://astro.build) site using the minimal template, with TypeScript strict mode enabled.

- `src/pages/` — file-based routing; each `.astro` or `.md` file becomes a route
- `public/` — static assets served at the root
- `astro.config.mjs` — Astro configuration (currently default/empty)
- `tsconfig.json` — extends `astro/tsconfigs/strict`

No UI framework (React, Vue, etc.) is integrated yet. Components can be added to `src/components/` and integrations registered in `astro.config.mjs` via `astro add`.
