# Nirav Tailor // Portfolio

A single-page terminal-themed portfolio built on **SvelteKit 2 + Svelte 5 runes**,
styled with **Tailwind CSS v4** (Space Grotesk + Space Mono typography), and
deployed to **Vercel** via `@sveltejs/adapter-vercel`.

- The landing page is **prerendered to static HTML** at build time and served
  directly from Vercel's CDN.
- Three **Vercel Functions** power the private contact flow and TestFlight
  notifications — see [Server endpoints](#server-endpoints) below.

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
│   │   ├── HubSection.svelte           # PIN-gated contact + vCard download
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
        ├── testflight/+server.ts   # POST   { email } → emails the owner
        ├── contact/+server.ts      # POST   { action: 'request-pin' | 'verify-pin', ... }
        └── vcard/+server.ts        # GET    ?pin=…  → downloadable .vcf
```

Path aliases configured in `svelte.config.js`:

- `$lib` → `src/lib`
- `$components` → `src/lib/components`

## Environment variables

**All secrets live in Vercel — never commit `.env`.** `.env` / `.env.*` are
already listed in `.gitignore`; the public-safe template is in
[`.env.example`](./.env.example).

| Variable               | Where used                        | Notes                                                                                    |
| ---------------------- | --------------------------------- | ---------------------------------------------------------------------------------------- |
| `CONTACT_PIN`          | `/api/contact`, `/api/vcard`      | 6-digit PIN required to unlock the phone number. Never shipped to the browser.           |
| `CONTACT_PHONE`        | `/api/contact`, `/api/vcard`      | Full phone number revealed on successful PIN verification. Never shipped to the browser. |
| `CONTACT_NOTIFY_EMAIL` | `/api/testflight`, `/api/contact` | The owner's notification inbox (e.g. `me@tailornirav.dev`).                              |
| `RESEND_API_KEY`       | `$lib/server/email.ts`            | Resend API key. Used only server-side to send notification emails.                       |
| `CONTACT_FROM_EMAIL`   | `$lib/server/email.ts`            | Verified sender identity inside Resend.                                                  |

If the env vars are not set, the contact endpoints return a clean
`503 Contact flow is not configured.` response and the vCard endpoint simply
omits the phone number — the site still works.

## Server endpoints

### `POST /api/testflight`

Body: `{ "email": "visitor@example.com" }`

Validates the email and emails the owner at `CONTACT_NOTIFY_EMAIL` with the
request details (email, IP, timestamp). Sets `reply_to` so the owner can
respond directly.

### `POST /api/contact`

Two actions, both POSTed as JSON:

1. `{ "action": "request-pin", "email": "visitor@example.com" }` — emails the
   owner that a visitor has asked to unlock the phone number. Always returns
   `{ ok: true }` for valid emails so probers can't distinguish success from
   failure.
2. `{ "action": "verify-pin", "pin": "123456" }` — **constant-time** PIN
   compare; on success returns `{ ok: true, phone: "+44 …" }`. On failure
   returns a generic `401 Invalid PIN.`

### `GET /api/vcard?pin=<optional>`

Returns a `text/vcard` attachment named `nirav-tailor.vcf`. Includes the phone
number **only** when the correct PIN is supplied; otherwise returns the card
with name, email, website, GitHub and LinkedIn only.

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
landing page is served as static HTML and the three API routes are deployed
as individual serverless functions.
