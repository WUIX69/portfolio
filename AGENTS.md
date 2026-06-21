## graphify

This project has a knowledge graph at graphify-out/ with god nodes, community structure, and cross-file relationships.

When the user types `/graphify`, invoke the `skill` tool with `skill: "graphify"` before doing anything else.

Rules:
- For codebase questions, first run `graphify query "<question>"` when graphify-out/graph.json exists. Use `graphify path "<A>" "<B>"` for relationships and `graphify explain "<concept>"` for focused concepts. These return a scoped subgraph, usually much smaller than GRAPH_REPORT.md or raw grep output.
- Dirty graphify-out/ files are expected after hooks or incremental updates; dirty graph files are not a reason to skip graphify. Only skip graphify if the task is about stale or incorrect graph output, or the user explicitly says not to use it.
- If graphify-out/wiki/index.md exists, use it for broad navigation instead of raw source browsing.
- Read graphify-out/GRAPH_REPORT.md only for broad architecture review or when query/path/explain do not surface enough context.
- After modifying code, run `graphify update .` to keep the graph current (AST-only, no API cost).

## repo

- **Package manager:** pnpm (not npm/yarn). Lockfile: `pnpm-lock.yaml`.
- **Dev server:** `pnpm dev` — uses Turbopack.
- **Build:** `pnpm build` — triggers Sentry source map upload (requires `SENTRY_AUTH_TOKEN`, `NEXT_PUBLIC_SENTRY_DSN` in `.env`).
- **Validate (no build, no tests):** `pnpm validate` runs lint then typecheck.
- **Format:** `pnpm format` — Prettier for `*.{ts,tsx}` only.
- **Component generator:** `pnpm generate:component <Name> --shared|--feature <name>`.
- **No test framework** is configured (no Vitest, Jest, Playwright, testing-library in deps). Do not assume tests exist.
- **Sentry** wired at root: `sentry.server.config.ts`, `sentry.edge.config.ts`, `src/instrumentation.ts`.

## architecture

- **Feature-Sliced Design** at `src/features/` (hero, experience, projects, contact). Each feature is self-contained and must NOT import from another feature.
- Shared code lives in `src/components/` (layout/, shared/, ui/), `src/hooks/`, `src/types/`, `src/data/`, `src/lib/`.
- Path alias `@/*` maps to `./src/*`.
- `src/data/` and `src/types/` mirror feature names (hero, navigation, projects, etc.) — update both when adding data.
- Entrypoint: `src/app/page.tsx` composes sections via `next/dynamic` (lazy). Root layout at `src/app/layout.tsx`.
- `schemas/` dirs inside features are empty stubs (Zod scaffolded but unused). API routes dir exists but is empty.

## conventions

- **Prettier enforced:** no semicolons, double quotes, trailing commas (es5), LF line endings. Prettier-plugin-tailwindcss sorts utility classes.
- **`cn()`** from `@/lib/utils` for class merging (clsx + tailwind-merge).
- **Tailwind CSS v4** uses `@import "tailwindcss"` (not `@tailwind` directives). CSS vars in `:root`/`.dark`, re-exported via `@theme inline`. Custom shadow and tracking token system defined in `src/app/globals.css`.
- **Icons:** `lucide-react` (via shadcn) and `@icons-pack/react-simple-icons` for brand icons.
- **Animations:** `motion` (Framer Motion) for UI animations; `ogl` for WebGL canvas components (e.g. `src/components/Threads.jsx`).
- **Carousel:** Embla (embla-carousel-react + autoplay).
- **Forms:** Contact form at `src/features/contact/components/contact-form.tsx` — vanilla useState, no react-hook-form or Zod validation wired yet.
