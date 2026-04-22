# SYSTEM_ARCHITECT // Portfolio

A fully static, terminal-themed portfolio built on **SvelteKit 2 + Svelte 5 runes**,
styled with **Tailwind CSS v4**, and prerendered for deployment on **Vercel** via
`@sveltejs/adapter-vercel`. No database, no backend — every route is compiled to
static HTML at build time.

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
├── app.html                    # HTML shell
├── lib/
│   ├── components/             # Atomic, reusable Svelte components
│   │   ├── ExperienceEntry.svelte
│   │   ├── Panel.svelte
│   │   ├── TerminalFooter.svelte
│   │   └── TerminalHeader.svelte
│   └── experience.ts           # Experience data + types
└── routes/                     # File-based routing
    ├── +layout.svelte          # Header / footer chrome
    ├── +layout.ts              # `export const prerender = true`
    ├── +page.svelte            # The Hub (home)
    ├── architecture/
    ├── connect/                # Static contact page (mailto + socials)
    ├── experience/             # EXPERIENCE_LOG
    ├── logs/
    └── manifesto/
```

Path alias configured in `svelte.config.js`:

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
pick the default runtime. Because `src/routes/+layout.ts` exports
`prerender = true`, every page is baked to static HTML during `vite build`
and served directly from the edge CDN — no server functions required.

Push to a Vercel-connected git remote and it deploys as-is; no environment
variables or secrets are needed.
