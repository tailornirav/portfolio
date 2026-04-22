# Nirav Tailor // Portfolio

A fully static, single-page, terminal-themed portfolio built on **SvelteKit 2 + Svelte 5 runes**,
styled with **Tailwind CSS v4** (Space Grotesk + Space Mono typography), and prerendered for
deployment on **Vercel** via `@sveltejs/adapter-vercel`. No database, no API, no server
functions — the entire site compiles to a single static HTML file at build time.

## Stack

| Layer         | Tooling                                                           |
| ------------- | ----------------------------------------------------------------- |
| Framework     | SvelteKit 2 (Svelte 5 runes)                                      |
| Package mgr   | [Bun](https://bun.sh)                                             |
| Styling       | Tailwind CSS v4 (`@tailwindcss/forms`, `@tailwindcss/typography`) |
| Deploy target | Vercel (fully prerendered static output)                          |
| Types         | Strict TypeScript                                                 |
| Lint / format | ESLint (flat config), Prettier, `prettier-plugin-tailwindcss`     |

## Directory layout

```
src/
├── app.d.ts                    # Global App namespace
├── app.html                    # HTML shell (fonts preconnected + preloaded)
├── lib/
│   ├── components/             # Atomic, reusable Svelte components
│   │   ├── HeroSection.svelte
│   │   ├── HubSection.svelte           # Digital identity card + mailto CTA
│   │   ├── SentieroSection.svelte      # Case-study strip for Sentiero
│   │   ├── SkillsSection.svelte
│   │   ├── TimelineSection.svelte      # Generic, used for Experience + Education
│   │   ├── TerminalHeader.svelte       # Sticky nav with active-section tracking
│   │   └── TerminalFooter.svelte
│   └── experience.ts           # Typed data: experiences, education, capabilities
└── routes/
    ├── +layout.svelte          # Chrome + global styles
    ├── +page.ts                # `export const prerender = true`
    ├── +page.svelte            # Single-page composition of all sections
    └── layout.css              # Tailwind v4 @theme + terminal utilities
```

Path aliases configured in `svelte.config.js`:

- `$lib` → `src/lib`
- `$components` → `src/lib/components`

## Development

```sh
bun install
bun run dev        # http://localhost:5173
```

Useful scripts:

```sh
bun run check      # svelte-kit sync + svelte-check
bun run lint       # prettier --check && eslint
bun run format     # prettier --write
bun run build      # production build (prerenders every route)
bun run preview    # preview the production bundle
bun run test       # vitest (client + server projects)
```

## Deployment

`@sveltejs/adapter-vercel` is configured with no options, which lets Vercel
pick the default runtime. Because `src/routes/+page.ts` exports
`prerender = true`, the landing page is baked to static HTML during `vite build`
and served directly from the edge CDN — no server functions required.

Push to a Vercel-connected git remote and it deploys as-is; no environment
variables or secrets are needed.
