# Mikhail Tabong Portfolio (Next.js + Tailwind)

Modern portfolio site rebuilt with Next.js 14 (App Router), TypeScript, and Tailwind CSS.

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:3000 to see the site.

## Project structure

```
.
├── app/
│   ├── layout.tsx        # Root layout: fonts, metadata
│   ├── page.tsx          # Main page composing all sections
│   └── globals.css       # Custom CSS (animations, atmosphere) + Tailwind
├── components/
│   ├── Nav.tsx           # Top nav + scroll progress bar
│   ├── Hero.tsx          # Hero with photo + headline
│   ├── Section.tsx       # Reusable section wrapper
│   ├── Expertise.tsx
│   ├── About.tsx         # Bio + terminal-style profile card
│   ├── Education.tsx
│   ├── Experience.tsx
│   ├── Skills.tsx
│   ├── Portfolio.tsx     # Filterable project grid
│   ├── Contact.tsx       # Contact + footer
│   ├── Timeline.tsx      # Shared timeline component
│   └── RevealObserver.tsx # Scroll reveal logic
├── public/               # Static assets (images, resume.pdf)
├── tailwind.config.ts    # Design tokens (colors, fonts, animations)
├── next.config.js        # Configured for static export to GitHub Pages
└── package.json
```

## Migrating from the old HTML site

1. Move all your image assets (`profile.png`, `umd-logo.png`, `protiviti-logo.png`, `chosan-logo.png`, `aacc-logo.png`, `pdsigma-logo.png`) into a new `public/` folder at the project root.
2. Move `resume.pdf` into `public/` as well.
3. Delete the old `index.html`.
4. Run `npm install`, then `npm run dev` to verify locally.

## Deploying to GitHub Pages

Since `next.config.js` is set to `output: 'export'`, building the site produces a static `out/` folder you can publish.

```bash
npm run build
```

Push the contents of `out/` to your `gh-pages` branch (or use a GitHub Action to automate it). The site will work at `mikhail-tabong.github.io` exactly like the previous static HTML version.

## Design tokens

All colors and fonts live in `tailwind.config.ts`. Tweak them there to update the whole site. Custom animations that are awkward in pure Tailwind (border-glow on the hero photo, scroll reveals, the blinking cursor) live in `app/globals.css`.

## Notes

- `'use client'` is only used in components that need browser APIs or React state (Nav, Portfolio filter, RevealObserver). Everything else stays as a server component for better performance.
- The atmospheric background (radial gradients + subtle grid) is applied via `body::before` and `body::after` in `globals.css`. This keeps it out of the way of your content layout.
- Scroll reveal uses a single IntersectionObserver in `RevealObserver.tsx` rather than per-component hooks.
