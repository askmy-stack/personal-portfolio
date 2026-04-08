# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server (Next.js)
npm run build    # Production build
npm run lint     # ESLint check
npm run start    # Start production server
```

No test framework is configured.

## Environment Variables

- `ANTHROPIC_API_KEY` — required for the AI chatbot (`/api/chat`). Set in `.env.local`.

## Architecture

This is a **Next.js 14 App Router** portfolio site using TypeScript and Tailwind CSS v4.

**Route structure:**
- `app/page.tsx` — Single-page home with all sections assembled in order
- `app/projects/[slug]/` — Individual project detail pages (byu-flagellar-motors, eeg-seizure-detection, nasa-landslide)
- `app/api/chat/route.ts` — Streaming SSE endpoint using Anthropic SDK (`claude-sonnet-4-20250514`), with in-memory IP-based rate limiting (30 req/hr)

**Component model:**
- All section components live flat in `components/` (Hero, About, Experience, Projects, Skills, etc.)
- `lib/constants.ts` — Site-wide config (name, email, socials, nav links)
- `lib/projects.ts` — Project data used by both the homepage featured section and individual project pages

**Theming:**
- `next-themes` with `data-theme` attribute; dark mode default
- CSS custom properties (`--bg`, `--fg`, `--accent`) defined in `app/globals.css`
- Fonts: `Plus_Jakarta_Sans` (heading) and `JetBrains_Mono` (mono), exposed as CSS vars `--font-heading` / `--font-mono`

**Chatbot (AK-Bot):**
- `components/ChatBot.tsx` — client-side chat UI
- `app/api/chat/route.ts` — server-side streaming via Anthropic SDK
- Full knowledge base (bio, experience, projects, skills) is embedded in the system prompt in `route.ts`; update it there when content changes
