# VocaTOEIC

TOEIC vocabulary learning app with React 18, TypeScript, Vite, Tailwind v3, Supabase, FSRS-4.5, gamification, admin CRUD, and PWA shell.

## Local setup

```bash
npm install
cp .env.example .env
npm run dev
```

App runs with mock data if Supabase env values are empty.

## Scripts

- `npm run dev` - start Vite dev server
- `npm run build` - TypeScript + production build
- `npm run lint` - ESLint
- `npm run test -- --run` - Vitest

## Supabase

```bash
supabase db reset
supabase functions serve calculate-srs
supabase functions serve leaderboard-sync
supabase functions serve send-reminder
```

Set:

```env
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
```

## Features

- Mobile-first dashboard, flashcards, quiz, listening, leaderboard, profile, admin panel.
- Local/mock-first query layer in [src/lib/api.ts](file:///d:/web-toeic-vocab/src/lib/api.ts).
- Realtime-ready admin word CRUD when Supabase env configured.
- FSRS wrapper and unit test in [src/lib/fsrs.ts](file:///d:/web-toeic-vocab/src/lib/fsrs.ts).
- RLS migrations and seed data under [supabase](file:///d:/web-toeic-vocab/supabase).
