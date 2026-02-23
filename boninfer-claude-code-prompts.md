# Prompt Pack — Claude Code / LLM Build Instructions for bonInfer Pvt Ltd (Anthropic‑style Scrollytelling)

You are a senior creative developer + UI/UX designer + staff frontend engineer.
Goal: implement a production‑grade website for **bonInfer Pvt Ltd** using:

- React + Tailwind CSS + shadcn/ui
- Vite
- Bun
- Anthropic‑inspired editorial calm + trust‑first UX
- Awwwards‑grade scrollytelling (NO scrolljacking), with reduced‑motion support
- AI‑centric content + AI Studio demos (Opportunity Mapper)

## Inputs you must follow

- Primary accent color: #ff7a66 (pulse)
- Fonts: Playfair Display (headings), Inter (body), optional Brockmann (accent)
- Use warm-paper neutrals: sand-50 (#faf9f5), sand-200 (#e8e6dc), ink-950 (#141413)
- Build a chaptered homepage with 6 Acts and deep linking (#act-1 … #act-6)
- Top nav: Work, Services (mega menu), AI Studio, Governance, Insights, Contact
- CTAs: “Run the Opportunity Mapper” (primary), “Book a scoping call” (secondary)
- Add Governance hub as top-level page with AI disclosure content and badges: AI-assisted / Human-reviewed
- Keep the UX calm and editorial. Avoid neon sci‑fi and avoid excessive gradients.
- Performance + accessibility are non-negotiable (skip links, keyboard nav, focus rings, reduced motion).

## Output format required

1. A step-by-step implementation plan (checklist)
2. Exact file/folder structure
3. Code changes in batches (commit-style), each batch includes:
   - files created/modified
   - code snippets (complete, runnable)
   - any new dependencies
4. A final QA checklist (performance + accessibility + SEO)

## Implementation Plan (do it in this order)

### Batch 1 — Project foundation

- Create Vite React TS project (bun)
- Install Tailwind + configure
- Install shadcn/ui + base components
- Add fonts (Playfair + Inter) and set tailwind theme tokens
- Implement CSS variables for background/foreground/muted/primary based on color system
- Add global layout: header/main/footer with skip link

### Batch 2 — Routing & page shells

- Add React Router
- Create routes:
  /, /services, /services/:slug, /work, /ai-studio, /ai-studio/opportunity-mapper,
  /ai-studio/prompt-playbooks, /governance, /insights, /about, /contact, /privacy, /terms, /notfound
- Add SEO head manager (react-helmet-async) and per-page meta

### Batch 3 — Navigation (Anthropic-like)

- Implement sticky header that becomes frosted on scroll
- Desktop mega menu for Services using shadcn NavigationMenu
- Mobile drawer using Sheet + Accordion
- Add CTA buttons in header

### Batch 4 — Scrollytelling Home (6 Acts)

- Implement Act layout (two-track: narrative + stage)
- Add Act progress indicator and deep-link URL hash sync using IntersectionObserver
- Add motion primitives using Framer Motion or CSS (prefer CSS where possible)
- Absolutely NO scrolljacking:
  - do not intercept wheel/touch
  - pin at most one scene using GSAP ScrollTrigger; provide skip button
- Add reduced-motion mode:
  - auto detect prefers-reduced-motion
  - add manual toggle that persists (localStorage)
  - in reduced motion, replace pinned scenes with simple fades

Acts:

- Act 0 hero + “Pick your path” cards
- Act 1 friction
- Act 2 Opportunity Mapper reveal (mini embed)
- Act 3 delivery pipeline
- Act 4 proof vignettes
- Act 5 governance preview
- Act 6 contact CTA

### Batch 5 — AI Studio

- Build Opportunity Mapper page:
  - Form with 5–7 fields
  - On submit, generate structured output (use mock generator first; later API)
  - Output is cards + “Copy as brief”
  - Label clearly “AI-generated (draft)”
- Build Prompt Playbooks:
  - Categories + PromptDemo component with Tabs: Prompt / Output / How it works

### Batch 6 — Governance Hub

- Create governance page with:
  - AI-generated content disclosure
  - Data handling policy summary
  - Model metadata placeholder
  - Risk controls list (Govern/Map/Measure/Manage)
  - Badge system
- Ensure content is readable, not hidden behind tooltips only

### Batch 7 — Services + Work + Contact

- Services grid (7 AI-first services)
- Service detail template pages (data-driven)
- Work case vignettes (2–3)
- Contact page (info + form) + spam protection placeholder

### Batch 8 — Footer as sitemap + final polish

- Deep footer columns mirroring nav taxonomy
- Add breadcrumbs on deep pages using shadcn Breadcrumb
- Add view transitions if supported (optional, with fallback)
- Audit for CWV risks (lazy-load, aspect ratio, code splitting)

## Content requirements

- Every page has:
  - one declarative headline
  - one short subhead
  - one primary CTA
- Avoid generic claims. Show workflow and outputs.
- Include a short “AI-assisted content” note in Governance and where AI outputs appear.

## QA checklist (must provide)

- Lighthouse: performance, accessibility, best practices, SEO
- Keyboard navigation: header, mega menu, tabs, forms
- Reduced motion: verify all scenes behave
- Mobile viewport: test dvh usage for hero scenes
- CLS: media has reserved space
- Copy: consistent voice, no placeholders left

## Important constraints

- Don’t use TypeScript “any” excessively.
- Don’t add heavy libraries unless justified.
- If you use GSAP ScrollTrigger, keep it limited to 1 signature scene and provide skip/reduced motion fallback.
