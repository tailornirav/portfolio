# SYSTEM_ARCHITECT // Portfolio

Edge-first portfolio built on **SvelteKit 2 + Svelte 5 runes**, styled with **Tailwind CSS v4**,
backed by **Supabase**, and deployed to **Vercel's edge runtime** via `@sveltejs/adapter-vercel`.

## Stack

| Layer         | Tooling                                                           |
| ------------- | ----------------------------------------------------------------- |
| Framework     | SvelteKit 2 (Svelte 5 runes)                                      |
| Package mgr   | [Bun](https://bun.sh)                                             |
| Styling       | Tailwind CSS v4 (`@tailwindcss/forms`, `@tailwindcss/typography`) |
| Data          | Supabase (`@supabase/supabase-js`, `@supabase/ssr`)               |
| Deploy target | Vercel Edge Runtime via `@sveltejs/adapter-vercel`                |
| Types         | Strict TypeScript everywhere, incl. generated Supabase types      |
| Lint / format | ESLint (flat config), Prettier, `prettier-plugin-tailwindcss`     |

## Directory layout

```
src/
├── app.d.ts                    # Global App.Locals / App.PageData types
├── app.html                    # HTML shell
├── hooks.server.ts             # Supabase SSR client + session helper
├── lib/
│   ├── components/             # Atomic, reusable Svelte components
│   ├── experience.ts           # Shared (client-safe) helpers
│   ├── server/                 # Server-only modules (never ship to client)
│   └── supabase/               # Supabase client factory + generated types
└── routes/                     # File-based routing
    ├── +layout.svelte          # Header / footer chrome
    ├── +layout.server.ts       # Session hydration on the edge
    ├── +page.svelte            # The Hub (home)
    ├── architecture/
    ├── connect/                # Contact form w/ Supabase action
    ├── experience/             # EXPERIENCE_LOG
    ├── logs/
    └── manifesto/
```

Path aliases configured in `svelte.config.js`:

- `$lib` → `src/lib`
- `$components` → `src/lib/components`
- `$server` → `src/lib/server`
- `$supabase` → `src/lib/supabase`

## Supabase

1. Copy `.env.example` to `.env` and set:

   ```
   PUBLIC_SUPABASE_URL=...
   PUBLIC_SUPABASE_ANON_KEY=...
   ```

2. Create the two tables used by this app (example DDL):

   ```sql
   create table public.experiences (
     id text primary key,
     created_at timestamptz not null default now(),
     period text not null,
     status text not null check (status in (
       'current_execution','terminated_process','contractor',
       'freelance_module','remote_node','initialization'
     )),
     title text not null,
     company text not null,
     highlights text[] not null default '{}',
     ordinal int not null default 0
   );

   create table public.messages (
     id uuid primary key default gen_random_uuid(),
     created_at timestamptz not null default now(),
     email text not null,
     body text not null
   );
   ```

3. Regenerate types into `src/lib/supabase/types.ts`:

   ```sh
   bunx supabase gen types typescript --project-id <ref> --schema public > src/lib/supabase/types.ts
   ```

If the env vars are missing, the app gracefully falls back to in-memory seed data
(`src/lib/server/experiences.ts`) so preview deployments keep working.

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
bun run build      # production build
bun run preview    # preview the production bundle
bun run test       # vitest (client + server projects)
```

## Deployment

The adapter is pre-configured for Vercel edge:

```js
// svelte.config.js
adapter({ runtime: 'edge', regions: ['iad1'], split: false });
```

> Note: Vercel has announced that the `edge` runtime is being superseded by Fluid Compute.
> `@sveltejs/adapter-vercel` still honours `runtime: 'edge'` today; drop the option to let
> Vercel pick the default Node runtime if/when you migrate.

Push to a Vercel-connected git remote and add the `PUBLIC_SUPABASE_URL` / `PUBLIC_SUPABASE_ANON_KEY`
environment variables to the project.
