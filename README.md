# Nirav Tailor // Portfolio

A single-page terminal-themed portfolio built on **SvelteKit 2 + Svelte 5 runes**,
styled with **Tailwind CSS v4** (Space Grotesk + Space Mono typography), and
deployed to **Vercel** via `@sveltejs/adapter-vercel`.

- The landing page is **prerendered to static HTML** at build time and served
  directly from Vercel's CDN.
- A single **Vercel Function** powers TestFlight notifications — see
  [Server endpoints](#server-endpoints) below.

## Stack

| Layer         | Tooling                                                           |
| ------------- | ----------------------------------------------------------------- |
| Framework     | SvelteKit 2 (Svelte 5 runes)                                      |
| Package mgr   | [Bun](https://bun.sh)                                             |
| Styling       | Tailwind CSS v4 (`@tailwindcss/forms`, `@tailwindcss/typography`) |
| Email         | [Resend](https://resend.com) (fetch-only, no SDK)                 |
| Deploy target | Vercel (hybrid: prerendered page + API functions)                 |
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
│   │   ├── SentieroSection.svelte      # TestFlight form → /api/testflight
│   │   ├── SkillsSection.svelte
│   │   ├── TimelineSection.svelte      # Generic, used for Experience + Education
│   │   ├── TerminalHeader.svelte       # Sticky nav with active-section tracking
│   │   └── TerminalFooter.svelte
│   ├── server/
│   │   └── email.ts            # Resend HTTP wrapper (server-only)
│   └── experience.ts           # Typed data: experiences, education, capabilities
└── routes/
    ├── +layout.svelte          # Chrome + global styles
    ├── +page.ts                # `export const prerender = true`
    ├── +page.svelte            # Single-page composition of all sections
    ├── layout.css              # Tailwind v4 @theme + terminal utilities
    └── api/
        └── testflight/+server.ts   # POST   { email } → emails the owner
```

Path aliases configured in `svelte.config.js`:

- `$lib` → `src/lib`
- `$components` → `src/lib/components`

## Environment variables

**All secrets live in Vercel — never commit `.env`.** `.env` / `.env.*` are
already listed in `.gitignore`; the public-safe template is in
[`.env.example`](./.env.example).

| Variable               | Where used             | Notes                                                              |
| ---------------------- | ---------------------- | ------------------------------------------------------------------ |
| `RESEND_API_KEY`       | `$lib/server/email.ts` | Resend API key. Used only server-side to send notification emails. |
| `CONTACT_NOTIFY_EMAIL` | `/api/testflight`      | The owner's notification inbox (e.g. `me@tailornirav.dev`).        |
| `CONTACT_FROM_EMAIL`   | `$lib/server/email.ts` | Verified sender identity inside Resend.                            |

If the env vars are not set, the TestFlight endpoint returns a clean
`502`/`503` error response — the rest of the landing page still works.

## Server endpoints

### `POST /api/testflight`

Body: `{ "email": "visitor@example.com" }`

Validates the email and emails the owner at `CONTACT_NOTIFY_EMAIL` with the
request details (email, IP, timestamp). Sets `reply_to` so the owner can
respond directly.

## Development

```sh
bun install
cp .env.example .env           # fill in secrets locally (do NOT commit)
bun run dev                    # http://localhost:5173
```

Useful scripts:

```sh
bun run check      # svelte-kit sync + svelte-check
bun run lint       # prettier --check && eslint
bun run format     # prettier --write
bun run build      # production build
bun run preview    # preview the production bundle
bun run test       # vitest (client + server projects)
```

## Deployment

Push to a Vercel-connected git remote. Add the env vars above in
**Project → Settings → Environment Variables** (Production scope). The
landing page is served as static HTML and the single API route is deployed
as a serverless function.
