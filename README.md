# CAM Knowledge Base

An evidence-backed operator's playbook for the **Commercial Account Manager (CAM)**
role at Rossum. React + TypeScript + Tailwind, built with Vite.

## Run

```bash
npm install
npm run dev      # dev server
npm run build    # typecheck + production build
npm run preview  # serve the production build
```

## Structure

```
src/
  App.tsx                  # shell: persistent nav (Overview · Customer Health · Sources) + footer
  main.tsx                 # router
  components/
    ValueChain.tsx         # the site's spine — the customer-lifecycle map
    Cite.tsx               # superscript citation marker → Sources anchor
    ui.tsx                 # MiniLabel, Card, Section primitives
  pages/
    Overview.tsx           # ValueChain hero + the reactive→proactive shift
    CustomerHealth.tsx     # Theory · Do this · Sources (reference focus-area page)
    Sources.tsx            # data-driven library from src/data/sources.ts
  data/
    sources.ts             # typed source array — append to extend
  index.css                # design tokens (@theme) + the mini-label convention
public/
  papers/                  # host openly-licensed PDFs here; set pdfUrl in sources.ts
```

## Design system

Near-white surface, ink `#111827`, secondary `#6B7280`, indigo accent `#4338CA`,
hairline borders `#E5E7EB`. Flat cards, no shadows. UPPERCASE letter-spaced
mini-labels above headings. Owner colours — Sales `#64748B`, Professional
Services `#B45309`, CAM `#4338CA`; segments Grow `#16803C` / Rescue & Grow
`#B45309` / Retain `#4338CA` / Stabilize `#B91C1C`. All exposed as Tailwind
theme colours in `src/index.css`.

## Adding a source

Append an entry to `src/data/sources.ts`. `canonicalUrl` is always required
(DOI / publisher / SSRN). Set `pdfUrl` **only** for openly-licensed works you
may redistribute — drop the file in `public/papers/` and point to it. Leave
paywalled journal PDFs as `null` and rely on the canonical link.
