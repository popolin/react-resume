# Michel Popolin — Personal Website

Personal portfolio for Michel Popolin, Senior Software Engineer (backend & distributed systems).
Built with React, TypeScript, Vite, and Tailwind CSS.

## Stack

- React 19 + TypeScript
- Vite 8
- Tailwind CSS v4 (via `@tailwindcss/vite`)
- Framer Motion for subtle motion
- Lucide icons (plus two local brand SVGs for GitHub/LinkedIn)
- Self-hosted Inter + JetBrains Mono via Fontsource

## Project structure

- `src/data/` — all résumé-sourced content (experience, highlights, skills, projects, site meta, assistant knowledge base). Update here to change site copy.
- `src/components/` — presentational components grouped by section (hero, experience, expertise, projects, contact, assistant, layout).
- `src/services/assistantService.ts` — the AI assistant's answer logic. Currently matches locally against `src/data/assistantKnowledge.ts`. To wire up a real LLM backend, set `VITE_ASSISTANT_API_URL` and implement a server endpoint that accepts `{ query, history }` and returns `{ answer }` — never call an LLM provider directly from the browser or embed API keys client-side.
- `public/resume/michel_popolin.pdf` — the actual downloadable resume, linked from the Resume button/nav.

## Development

```bash
npm install
npm run dev      # start dev server
npm run lint      # eslint
npm run build     # typecheck + production build
```

## Deployment

Netlify builds this site with Node.js 24 and `npm run build`, then publishes `dist/`.
These settings are versioned in `netlify.toml` and replace the old Create React App configuration.
The previous résumé download URL redirects to the current PDF. Other paths fall back to the site entry point.
