# bonInfer Pvt Ltd — Anthropic‑Inspired, Awwwards‑Grade AI Scrollytelling Website (Production Blueprint)
_Last updated: Feb 23, 2026_

This document is a **single, end‑to‑end build guide** for designing and implementing **bonInfer Pvt Ltd** as a premium, editorial, trust‑first, Anthropic‑style website with **Awwwards‑level scrollytelling** and AI‑centric content.

It merges:
- Your **Bonifore Consulting** design system + page content structure (Pulse coral, Playfair + Inter, shadcn/ui patterns, sections, forms, mega menu).
- The **Anthropic/Claude UX transfer patterns** (calm editorial layout, persona‑first nav taxonomy, trust & governance as first‑class UX, prompt demos, deep footers, accessibility signals).  
- The **bonInfer scrollytelling and AI service direction** (chaptered “Act” homepage, Opportunity Mapper, AI Transparency Hub, performance/motion constraints).

> Build principle: **Story + Proof + Trust**, without scrolljacking.

---

## 0) North Star & Product Positioning

### What the site must communicate in 8 seconds
**bonInfer Pvt Ltd builds AI systems that move businesses**—from strategy → agentic automation → MLOps reliability → responsible AI governance.

### Three non‑negotiables (Anthropic transfer)
1. **Editorial calm** (warm paper neutrals, premium typography, simple layouts).
2. **“Show, don’t tell” proof** (metrics, demos, playbooks, case vignettes).
3. **Trust as UX** (Governance hub is in top nav; clear disclosures; privacy clarity).

---

## 1) Experience Architecture (IA) — “Story World + Conventional Pages”

### 1.1 Site map (recommended)
- `/` **Home (Scrollytelling)** — 5–6 Acts
- `/services` — AI-first service grid
- `/services/:slug` — 7 service detail pages
- `/work` — case studies & outcomes (start with 2–3 “prototype” case stories if needed)
- `/ai-studio` — interactive demos + templates
- `/ai-studio/opportunity-mapper` — flagship interactive tool
- `/ai-studio/prompt-playbooks` — curated prompt patterns by function
- `/governance` — AI Transparency Hub (disclosures, data handling, risk controls)
- `/insights` — articles, POVs, “how we think”
- `/about` — values + team + operating model
- `/contact` — lead capture + calendar link
- `/privacy`, `/terms` — legal

### 1.2 Navigation taxonomy (Anthropic-like, persona-first)
Top nav:
- **Work**
- **Services** (mega menu)
- **AI Studio**
- **Governance**
- **Insights**
- **Contact**
CTAs:
- Primary: **Run the Opportunity Mapper**
- Secondary: **Book a scoping call**

Mega menu layout:
- Left rail (grouping): *AI Strategy*, *AI Systems*, *AI Experience*, *AI Governance*
- Right: featured case vignette + “Start here” CTA

---

## 2) Visual Design System — bonInfer + Anthropic Calm

### 2.1 Brand colors (keep Pulse; add warm-paper neutrals)
**Primary accent:** Pulse coral `#ff7a66` (use for CTAs, highlights).  
Add a calm editorial base:
- `sand-50`: `#faf9f5` (warm paper background)
- `sand-200`: `#e8e6dc` (warm muted)
- `ink-950`: `#141413` (near-black text)
Keep your existing dark palette for dark sections.

### 2.2 shadcn/ui token mapping (CSS variables)
Use your existing `src/index.css` shadcn tokens, updated:

```css
:root{
  --background: 250 249 245; /* sand-50 */
  --foreground: 20 20 19;    /* ink-950 */
  --muted: 232 230 220;      /* sand-200 */
  --primary: 255 122 102;    /* pulse-500 */
  --primary-foreground: 255 255 255;
  --border: 20 20 19 / 0.10;
}
.dark{
  --background: 18 18 18;
  --foreground: 241 245 249;
  --muted: 45 45 45;
}
```

### 2.3 Typography (keep your pairing; adopt editorial cadence)
- Headings: **Playfair Display**
- Body: **Inter**
- Accent: **Brockmann** (sparingly, for labels/chips)

Layout rules:
- Body line length: `max-w-[68ch]`
- Paragraph leading: `leading-[1.75]`
- Headline density: short, declarative.

### 2.4 Signature visual language (AI metaphors)
Replace generic consulting images with authored metaphors:
- **Tokens → sentences → decisions** (typographic build)
- **Signals → models → actions** (pipeline animation)
- **Memory layers** (cards stacking into knowledge base; ties to RAG)

---

## 3) Scrollytelling Model — “Acts”, not sections

### 3.1 No scrolljacking rules
- Never remap scroll wheel/touch.
- Use **reveal, pin, transform** sparingly (1–2 signature scenes).
- Provide skip controls: “Skip this scene” + “Reduce motion”.

### 3.2 Motion system (as tokens)
Define motion levels:
- `cinematic` (desktop, high-end only)
- `standard` (default)
- `reduced` (prefers-reduced-motion + manual toggle)

Animation primitives:
- `fade`, `translate`, `scale`, `blur` (avoid layout animations)
- Use GPU-friendly properties: `transform`, `opacity`.

---

## 4) Home Page — Scripted as 6 Acts (with copy)

> Home is your award submission piece. Each Act = **story beat + proof**.

### Act 0 — Prologue (Hero + “Pick your path”)
**H1:** *AI systems that move businesses.*  
**Subhead:** *bonInfer Pvt Ltd designs responsible AI—from strategy to agentic delivery—so teams ship faster, safer, and with measurable impact.*

**Path cards (links):**
1. Run the Opportunity Mapper (AI Studio)
2. See what we’ve shipped (Work)
3. How we handle risk & transparency (Governance)

**Hero stage visual:** calm aurora lighting + a subtle “token stream” that assembles into the H1 (desktop only).

---

### Act 1 — The friction (why AI pilots stall)
**Goal:** make the visitor feel understood.
- “Pilots don’t scale.”
- “Data is fragmented.”
- “Risk and compliance are unclear.”

**Proof strip (3 metrics placeholders):**
- “Time‑to‑prototype” (weeks)
- “Time‑to‑production” (months)
- “Accuracy / reliability targets” (evaluation plan)

---

### Act 2 — The lens (what AI can do) → **Opportunity Mapper reveal**
**Signature scene #1 (pin optional):**
Left narrative; right interactive stage.

**Opportunity Mapper mini version (inline):**
Inputs (5–7 questions):
- Industry
- Primary workflow pain
- Data readiness (low/med/high)
- Risk sensitivity (low/med/high)
- Target outcomes (cost/time/revenue/quality)
- Deployment constraints (cloud/on‑prem/hybrid)
- Timeline

Output (render as cards):
- Fast wins (2–3)
- Platform plays (1–2)
- Governance checks (3–5)
- ROI assumptions (editable)

**CTA:** “Open full mapper →”

---

### Act 3 — The build (how bonInfer delivers)
**Interactive pipeline** (scroll reveals):
1. Discover & prioritize
2. Data readiness + knowledge base (RAG)
3. Build agents/workflows
4. Reliability: eval, monitoring, guardrails
5. Deploy & enable teams

**Microcopy:** *From concept to dependable system—without mystery.*

---

### Act 4 — The proof (outcomes)
Case vignettes (start with 2–3):
- “Support deflection with RAG”
- “Finance reconciliation agent”
- “Policy Q&A + governance logging”

Each vignette includes:
- Problem → System → Outcome
- 2–3 KPIs (even if early: “target” vs “measured” clearly labeled)

---

### Act 5 — The trust (Governance as product)
Introduce your **AI Transparency Hub**:
- What is AI‑assisted vs human‑authored
- Data handling & retention
- Model metadata
- Risk controls (Govern / Map / Measure / Manage)

**CTA:** “Read our transparency hub →”

---

### Act 6 — Finale (Contact)
Headline: *Ready to ship AI with confidence?*  
Buttons: “Book a scoping call” / “Email us instead”  
Short form + response expectations.

---

## 5) Services — AI‑First Service Catalog (7 services)

Your services should read like modern AI delivery packages:

1. **AI Strategy & Transformation Design**
2. **Knowledge AI & Enterprise Search (RAG)**
3. **Agentic Automation & Workflow Orchestration**
4. **AI Product Design (UX for AI)**
5. **MLOps, Reliability & Evaluation Engineering**
6. **Responsible AI, Governance & Compliance**
7. **AI Content Systems & Enablement** (playbooks, training, internal adoption)

Service card anatomy:
- Icon
- Tagline
- 2-line description
- “Explore” link
- “Talk to us” secondary link

Service detail pages:
- Hero + “What you get”
- Deliverables list
- Example workflow
- “Common pitfalls we prevent”
- CTA back to Opportunity Mapper + Contact

---

## 6) AI Studio — “Show, don’t tell” Interaction Layer

### 6.1 Opportunity Mapper (flagship)
- Form → generated map (serverless call, or mocked first)
- Export: “Copy as brief” + “Download as PDF” (phase 2)
- Label outputs: **AI-generated (draft)**

### 6.2 Prompt Playbooks
Collections by role:
- CEO/Leadership
- Product
- Engineering
- Operations
- Compliance

Each playbook:
- Goal
- Prompt template
- Example input/output (tabs)
- “How to evaluate” checklist

### 6.3 Templates (lightweight lead magnets)
- AI policy starter kit
- Evaluation plan template
- RAG readiness checklist
- Agent workflow canvas

---

## 7) Governance — AI Transparency Hub (Top‑Nav, Not Footer)

Page sections:
1. **Disclosure**: what content is AI-assisted, how it’s reviewed
2. **Data handling**: what you store; retention; who can access
3. **Model metadata**: provider/family/date + limitations
4. **Risk controls**: evaluation, monitoring, red teaming, logging
5. **Provenance** (optional phase 2): content credential strategy
6. **Security**: high-level controls and contact

Inline badge system:
- “AI‑assisted”
- “Human‑reviewed”
- “Measured” vs “Target”

---

## 8) UI Component Blueprint (shadcn/ui + custom)

### 8.1 Core components
- `SiteHeader` (sticky, frosted on scroll)
- `MegaMenu` (`NavigationMenu` + custom panel grid)
- `ActLayout` (two-track layout: narrative + stage)
- `ActProgress` (chapter indicator, deep-link updates)
- `PromptDemo` (Tabs: Prompt / Output / How it works)
- `MetricStrip` (3-up KPI cards)
- `CaseVignetteCard` (problem/system/outcome)
- `GovernanceBadge` (AI-assisted labels)
- `FooterSitemap` (deep footer)

### 8.2 Deep linking behavior
- Each Act has `id="act-2"` etc.
- IntersectionObserver updates URL hash (`history.replaceState`) without disrupting scroll.

---

## 9) Engineering Plan — Vite + React + TS + Tailwind + shadcn/ui + Bun

### 9.1 Repo setup (baseline)
- Vite React TS
- Tailwind + PostCSS
- shadcn/ui
- `bun` scripts

Folder architecture:
```
src/
  app/ (routes, providers)
  components/
    ui/ (shadcn)
    site/ (header/footer/nav)
    story/ (acts, scrollytelling)
    studio/ (mapper, demos)
  content/ (mdx or json for copy)
  lib/ (utils, motion, analytics)
  styles/
```

### 9.2 Motion implementation strategy
Use a hybrid model:
- **IntersectionObserver + CSS transforms** for most reveals.
- **GSAP ScrollTrigger** only for 1–2 signature pinned scenes.
- Always support `prefers-reduced-motion` + manual toggle.

### 9.3 Performance guardrails (production)
- Lazy-load below-fold media (`loading="lazy"`)
- Always reserve aspect ratio (avoid CLS)
- Split code: load AI Studio pages as separate chunks
- Avoid heavy WebGL on mobile; gate by capability and preference.

### 9.4 Accessibility baseline
- Skip links: “Skip to main content”
- Landmarks: header/main/footer
- Keyboard-safe mega menu
- Visible focus ring on all interactive elements
- Reduced motion support
- Proper semantics for Tabs, Accordion, Breadcrumb

---

## 10) SEO & Content System (Anthropic-like clarity)

### 10.1 Metadata
Per route:
- Title, description
- OpenGraph + Twitter cards
- Canonical URL
- Structured data:
  - Organization
  - WebSite
  - BreadcrumbList (deep pages)
  - Article (Insights)

### 10.2 Editorial content rules
- Every page: one clear promise + one clear CTA
- Use scannable subheads
- Avoid buzzwords; show workflow and outputs

---

## 11) Security & Privacy (for a consulting AI brand)
- Contact form rate limiting + spam protection
- Separate marketing telemetry from AI Studio inputs
- Never request confidential client info in the mapper (use placeholders)
- Add a simple “data retention” statement in Governance

---

## 12) Build Checklist (P0 → P2)

### P0 (launchable MVP)
- Act-based scrollytelling homepage (6 acts)
- Services mega menu + services pages
- AI Studio: Opportunity Mapper (v1 output)
- Governance: AI Transparency Hub (v1)
- Contact funnel + deep footer sitemap
- Accessibility baseline + reduced motion

### P1 (polish)
- Prompt Playbooks
- Case study carousel + counters
- View transitions (with fallback)
- Newsletter/lead magnet templates

### P2 (award polish)
- Signature scene #2 (governance visualization)
- PDF export from mapper
- Provenance metadata (phase 2)
- Advanced micro-interactions (soundless, subtle)

---

## 13) Content Pack — Ready-to-use copy (starter)

### Homepage hero
**AI systems that move businesses.**  
bonInfer Pvt Ltd partners with leaders and product teams to design, ship, and govern AI—responsibly. Strategy, systems, and experience design—delivered as a story you can measure.

### Services teaser
**Your growth partner in AI strategy, systems, and governance.**  
We bridge business goals and real engineering to deliver AI that holds up in production.

### Contact CTA
**Ready to ship AI with confidence?**  
Bring a problem. We’ll map the opportunity, the system, and the governance plan—then help you deliver.

---

## 14) Implementation Notes for “Anthropic vibe” without copying
- Use **warm-paper neutrals**, restrained accents, and editorial rhythm.
- Prioritize **trust content** and clear taxonomy.
- Replace heavy decoration with **meaningful demos** and **measurable outcomes**.
- Keep motion purposeful and accessible.

---

# Appendix A — Page Templates (Quick Reference)

## A1) Services detail template
- Hero (title + 2-line promise)
- “What you get” (deliverables)
- “How it works” (steps)
- “Proof” (metrics + vignette)
- “Risks we reduce” (governance)
- CTA (Mapper + Contact)

## A2) Governance template
- Summary
- Disclosures
- Data handling
- Model metadata
- Risk controls
- Security contact
