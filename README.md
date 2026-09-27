# Basic Portfolio Page

A visually striking personal portfolio page generated with [v0](https://v0.app): a space-themed hero (animated interstellar nebula canvas + particle field), a media showcase drop zone, and a contact section — all client-rendered, fully static, and deployable to any static host.

## What it does

- Full-screen **hero** with staggered fade/slide entrance, social icons, and smooth-scroll navigation
- **Interstellar Nebula** — canvas-rendered animated nebula backdrop
- **Particle Field** — drifting canvas particles layered over the nebula
- **Media Drop Zone** — drag-and-drop area to preview media files client-side (nothing is uploaded)
- **Contact section** with shadcn/ui form inputs

## Features

- Animated canvas backgrounds (nebula + particles), pure client-side
- Responsive Tailwind layout with `next-themes` dark theme
- shadcn/ui components (`button`, `card`, `input`, `textarea`)
- Smooth-scroll section navigation
- Geist font family

## Tech stack

- **Next.js 15** (App Router, `output: "export"` static build)
- **React 19**, **TypeScript**
- **Tailwind CSS 4**, `tw-animate-css`
- **shadcn/ui**, **Radix UI** primitives, **Lucide** icons
- **pnpm** (package manager)

## Quick start

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev
# → http://localhost:3000

# 3. Build a static export
npm run build
# → static HTML in ./out
```

## Project structure

```
basic-portfolio-page/
├── app/
│   ├── page.tsx                 # Hero, media showcase, contact sections
│   ├── layout.tsx               # Root layout, theme provider
│   └── globals.css
├── components/
│   ├── interstellar-nebula.tsx  # Animated nebula canvas background
│   ├── particle-field.tsx       # Drifting particle canvas layer
│   ├── media-drop-zone.tsx      # Client-side drag-and-drop media preview
│   ├── theme-provider.tsx
│   └── ui/                      # shadcn/ui primitives
├── lib/utils.ts
├── next.config.mjs              # output: "export"
└── tailwind.config.ts
```

## Environment variables

None.

## Deployment notes

- Fully static: `npm run build` emits `./out` — deploy to **Cloudflare Pages**, GitHub Pages, or any static host.
- No API routes, no server actions, no secrets — everything renders in the browser.
- Note: this repo pins `next@15.2.4`; if you take it to production, bump to the latest patched 15.x (e.g. 15.2.8+) to cover known Next.js security advisories.

---

Built by Girish Lade — [ladestack.in](https://ladestack.in)
