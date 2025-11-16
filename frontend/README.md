# NNMKC Frontend

This is the React/Vite/TypeScript frontend for the church site (NNMKC). Goal: fast, accessible, easy to extend (think sermons, events, ministries, online giving, prayer requests) without fighting the stack.

## Quick Start
```powershell
cd frontend
npm install
npm run dev
```
Dev server will open on the default Vite port (check terminal output). If you need a different port, tweak `server.port` in `vite.config.ts`.

## Scripts
- `dev` – Local dev with HMR.
- `build` – Production bundle (code splitting, minification).
- `preview` – Serve the production build locally.
- `lint` – TypeScript + ESLint rules over `src`.
- `format` – Prettier write.

## Tech Stack (Why These) 
**React + React Router** – Familiar component model + client routing for page sections (home, sermons, events, give).

**Chakra UI (+ Emotion)** – Accessible components, theming, dark/light mode out of the box. We’ll layer custom brand colors later.

**Framer Motion** – Page and element transitions (hero fades, subtle motion cues) without manual animation plumbing.

**React Query** – Caching and async state (events, sermon lists) reduces repeat fetches and simplifies loading/error UI.

**Axios** – Interceptors for auth tokens/logging; if backend shifts we just swap base config.

**react-hook-form + zod** – Lightweight forms and schema validation (contact, prayer, registration). Keeps form code tight.

**react-helmet-async** – SEO/meta tags per page (sermon titles, event descriptions) without race conditions.

**dayjs** – Date formatting for service times and event notices. Small and sufficient.

**Icons (react-icons, lucide-react)** – Blend of icon packs for flexibility in navigation and ministry visuals.

**vite-plugin-svgr** – Inline SVGs (logo, decorative marks) as components.

## Project Layout
```
frontend/
  index.html
  vite.config.ts
  tsconfig.json
  package.json
  src/
    components/   # Reusable UI bits (buttons, cards, nav pieces)
    pages/        # Route-level pages
    routes/       # Central route definitions / lazy imports
    layouts/      # Shared shells (main layout, alt layout)
    hooks/        # Custom hooks (data fetching, utilities)
    context/      # React contexts (auth, app settings)
    styles/       # Theme extension, global styles
    icons/        # Icon export barrel
    assets/       # Static images/fonts
      images/
      fonts/
    lib/          # API, constants, helpers
    App.tsx       # App shell
    main.tsx      # Entry + providers
```

Empty folders have `.gitkeep` so Git tracks them until populated.

## Environment Vars
Copy `.env.example` to `.env` and adjust:
```
VITE_API_BASE_URL=https://api.yourchurch.org
VITE_ANALYTICS_ID=UA-XXXXXXX-X
```
Access with `import.meta.env.VITE_API_BASE_URL` etc.

## Conventions
- Use Chakra components first; fall back to custom styling only when needed.
- Prefer functional components + hooks over prop drilling.
- Co-locate component-specific helpers in the same folder if they’re only used there.
- Name hooks `useSomething.ts` and keep them pure (no direct DOM manipulation unless absolutely required).

## Development Flow
1. Create or update a page in `pages/`.
2. Register it (or lazy-load it) in `routes/`.
3. Add any API calls via a module in `lib/` and wrap them with React Query hooks.
4. Wire forms using `react-hook-form` + `zod` schemas in a local `schema.ts`.
5. Update SEO via a `<Helmet>` block or a shared `Seo` component.

## What’s Next
- Theme extension (`styles/theme.ts`) for brand palette & typography.
- Sermons API integration (listing + single view).
- Events calendar fetching and caching.
- Basic analytics wrapper using `VITE_ANALYTICS_ID`.
- Global SEO defaults component.

## Performance & A11y
- Chakra handles baseline accessibility; still run Lighthouse audits.
- React Query avoids duplicate network trips; tune cache time per resource.
- Use dynamic `import()` for admin/moderation pages if added later.

## Deployment Notes
Build output is static; host on Netlify/Vercel or behind any CDN. If served from a sub-path, adjust `base` in `vite.config.ts`.

## Optional Future Adds
- SSG/prerender pass if SEO needs improve for dynamic pages.
- `@fontsource` packages for fonts instead of bundling binary files.
- Error monitoring (Sentry or similar) once live.

## Contributing
Open a branch, keep changes focused, run `npm run lint` + `npm run format` before pushing. Small PRs are easier to review.