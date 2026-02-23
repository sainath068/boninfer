import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { SeoHead } from '../lib/SeoHead.jsx'
import { useActObserver } from '../lib/useActObserver.js'
import { useMotion } from '../app/Router.jsx'
import ActLayout from '../components/story/ActLayout.jsx'
import ActProgress from '../components/story/ActProgress.jsx'
import MetricStrip from '../components/story/MetricStrip.jsx'
import CaseVignetteCard from '../components/story/CaseVignetteCard.jsx'
import Reveal from '../components/story/Reveal.jsx'
import GovernanceBadge from '../components/ui/GovernanceBadge.jsx'
import { cases } from '../content/cases.js'
import { governanceContent } from '../content/governance.js'
import { ArrowRight, ChevronDown } from 'lucide-react'

const ACT_IDS = ['act-0', 'act-1', 'act-2', 'act-3', 'act-4', 'act-5', 'act-6']

const PIPELINE_STEPS = [
    { n: '01', label: 'Discover & prioritise', desc: 'Stakeholder interviews, data landscape audit, opportunity scoring.' },
    { n: '02', label: 'Data readiness + knowledge base', desc: 'RAG pipeline design, embedding strategy, data quality gates.' },
    { n: '03', label: 'Build agents/workflows', desc: 'Orchestration, tool integrations, human-in-the-loop checkpoints.' },
    { n: '04', label: 'Reliability: eval, monitoring, guardrails', desc: 'Automated evals, drift detection, output filtering.' },
    { n: '05', label: 'Deploy & enable teams', desc: 'Staged rollout, playbooks, adoption measurement.' },
]

// ─── Hero token stream (desktop only) ───────────────────────────
function TokenH1({ text, prefersReduced }) {
    if (prefersReduced) {
        return (
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-ink-950 leading-tight">
                {text}
            </h1>
        )
    }
    return (
        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-ink-950 leading-tight" aria-label={text}>
            {text.split('').map((char, i) => (
                <span
                    key={i}
                    className="token-char"
                    style={{ animationDelay: `${i * 18}ms` }}
                    aria-hidden="true"
                >
                    {char === ' ' ? '\u00A0' : char}
                </span>
            ))}
        </h1>
    )
}

// ─── Mini Opportunity Mapper (Act 2 inline) ──────────────────────
const INDUSTRIES = ['Insurance', 'Financial Services', 'Healthcare', 'SaaS', 'Retail', 'Manufacturing', 'Government', 'Other']
const PAINS = ['Manual data processing', 'Repetitive customer support', 'Slow reporting/analytics', 'Complex document review', 'Fragmented knowledge', 'Other']
const OUTCOMES = ['Cost reduction', 'Time savings', 'Revenue growth', 'Quality improvement']
const TIMELINES = ['< 3 months', '3–6 months', '6–12 months', '12+ months']

function MiniMapper() {
    const [step, setStep] = useState(0)
    const [form, setForm] = useState({ industry: '', pain: '', outcomes: [], timeline: '' })
    const [done, setDone] = useState(false)

    const sel = (field, val) => setForm((f) => ({ ...f, [field]: val }))
    const toggleOutcome = (o) =>
        setForm((f) => ({
            ...f,
            outcomes: f.outcomes.includes(o) ? f.outcomes.filter((x) => x !== o) : [...f.outcomes, o],
        }))

    const InputCard = ({ children }) => (
        <div className="bg-white/80 border border-ink-950/10 rounded-2xl p-6 shadow-card">
            {children}
        </div>
    )

    if (done) {
        return (
            <div className="space-y-3">
                <GovernanceBadge variant="ai-assisted" label="✦ AI-generated (draft)" />
                <div className="bg-pulse-500/8 border border-pulse-500/20 rounded-xl p-4">
                    <p className="text-sm font-semibold text-pulse-700 mb-1">Fast win identified</p>
                    <p className="text-sm text-ink-950/70">
                        Based on your inputs, a <strong>Knowledge AI assistant</strong> maps to your workflow pain
                        with high feasibility. Estimated Tier-1 deflection: 30–50%.
                    </p>
                </div>
                <div className="bg-sand-200/50 rounded-xl p-4">
                    <p className="text-sm font-semibold text-ink-950 mb-1">Governance check</p>
                    <p className="text-xs text-ink-950/60">Output logging + human review gate recommended before production.</p>
                </div>
                <Link
                    to="/ai-studio/opportunity-mapper"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-pulse-600 hover:text-pulse-700 transition-colors"
                >
                    Open full mapper <ArrowRight size={14} />
                </Link>
            </div>
        )
    }

    return (
        <div className="space-y-4">
            {step === 0 && (
                <InputCard>
                    <p className="text-xs font-semibold uppercase tracking-wider text-ink-950/40 mb-3">Your industry</p>
                    <div className="flex flex-wrap gap-2">
                        {INDUSTRIES.map((i) => (
                            <button
                                key={i}
                                onClick={() => { sel('industry', i); setStep(1) }}
                                className="px-3 py-1.5 rounded-lg border text-sm transition-colors border-ink-950/15 hover:border-pulse-500 hover:text-pulse-600"
                            >
                                {i}
                            </button>
                        ))}
                    </div>
                </InputCard>
            )}
            {step === 1 && (
                <InputCard>
                    <p className="text-xs font-semibold uppercase tracking-wider text-ink-950/40 mb-3">Main workflow pain</p>
                    <div className="flex flex-col gap-2">
                        {PAINS.map((p) => (
                            <button
                                key={p}
                                onClick={() => { sel('pain', p); setStep(2) }}
                                className="text-left px-3 py-2 rounded-lg border text-sm transition-colors border-ink-950/15 hover:border-pulse-500 hover:text-pulse-600"
                            >
                                {p}
                            </button>
                        ))}
                    </div>
                </InputCard>
            )}
            {step === 2 && (
                <InputCard>
                    <p className="text-xs font-semibold uppercase tracking-wider text-ink-950/40 mb-3">Target outcomes (select all)</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {OUTCOMES.map((o) => (
                            <button
                                key={o}
                                onClick={() => toggleOutcome(o)}
                                className={`px-3 py-1.5 rounded-lg border text-sm transition-colors ${form.outcomes.includes(o)
                                        ? 'border-pulse-500 bg-pulse-500/10 text-pulse-700'
                                        : 'border-ink-950/15 hover:border-pulse-500/50'
                                    }`}
                            >
                                {o}
                            </button>
                        ))}
                    </div>
                    <button
                        onClick={() => setDone(true)}
                        disabled={form.outcomes.length === 0}
                        className="w-full py-2 bg-pulse-500 text-white text-sm font-semibold rounded-lg hover:bg-pulse-600 disabled:opacity-40 transition-colors"
                    >
                        Map my opportunities
                    </button>
                </InputCard>
            )}
            <p className="text-xs text-ink-950/40">Step {step + 1} of 3</p>
        </div>
    )
}

// ─── Contact form (Act 6) ─────────────────────────────────────────
function QuickContactForm() {
    const [sent, setSent] = useState(false)
    const [form, setForm] = useState({ name: '', email: '', message: '' })
    const [errors, setErrors] = useState({})

    const validate = () => {
        const e = {}
        if (!form.name.trim()) e.name = 'Name is required.'
        if (!form.email.trim()) e.email = 'Email is required.'
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email.'
        if (!form.message.trim()) e.message = 'Message is required.'
        return e
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const e2 = validate()
        setErrors(e2)
        if (Object.keys(e2).length === 0) setSent(true)
    }

    if (sent) {
        return (
            <div className="text-center py-8" role="status">
                <p className="text-2xl font-display font-bold text-sand-50 mb-2">Thanks! We'll be in touch.</p>
                <p className="text-sand-50/60 text-sm">We aim to respond within 1 business day.</p>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit} noValidate className="space-y-4">
            {/* Honeypot spam field */}
            <input type="text" name="_honeypot" className="hidden" tabIndex={-1} aria-hidden="true" />

            <div>
                <label htmlFor="contact-name" className="block text-xs font-medium text-sand-50/60 mb-1">Name</label>
                <input
                    id="contact-name"
                    type="text"
                    required
                    aria-required="true"
                    aria-describedby={errors.name ? 'contact-name-error' : undefined}
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    className="w-full px-3 py-2 rounded-lg bg-sand-50/10 border border-sand-50/15 text-sand-50 placeholder-sand-50/30 text-sm focus:outline-none focus:border-pulse-500"
                    placeholder="Your name"
                />
                {errors.name && <p id="contact-name-error" role="alert" className="mt-1 text-xs text-red-400">{errors.name}</p>}
            </div>

            <div>
                <label htmlFor="contact-email" className="block text-xs font-medium text-sand-50/60 mb-1">Email</label>
                <input
                    id="contact-email"
                    type="email"
                    required
                    aria-required="true"
                    aria-describedby={errors.email ? 'contact-email-error' : undefined}
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    className="w-full px-3 py-2 rounded-lg bg-sand-50/10 border border-sand-50/15 text-sand-50 placeholder-sand-50/30 text-sm focus:outline-none focus:border-pulse-500"
                    placeholder="you@company.com"
                />
                {errors.email && <p id="contact-email-error" role="alert" className="mt-1 text-xs text-red-400">{errors.email}</p>}
            </div>

            <div>
                <label htmlFor="contact-message" className="block text-xs font-medium text-sand-50/60 mb-1">What would you like to explore?</label>
                <textarea
                    id="contact-message"
                    required
                    aria-required="true"
                    aria-describedby={errors.message ? 'contact-message-error' : undefined}
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    className="w-full px-3 py-2 rounded-lg bg-sand-50/10 border border-sand-50/15 text-sand-50 placeholder-sand-50/30 text-sm focus:outline-none focus:border-pulse-500 resize-none"
                    placeholder="Describe your challenge or opportunity..."
                />
                {errors.message && <p id="contact-message-error" role="alert" className="mt-1 text-xs text-red-400">{errors.message}</p>}
            </div>

            <button
                type="submit"
                className="w-full py-3 bg-pulse-500 text-white font-semibold rounded-lg hover:bg-pulse-600 transition-colors"
            >
                Send message
            </button>
            <p className="text-xs text-sand-50/40 text-center">We respond within 1 business day.</p>
        </form>
    )
}

// ─── Main Home Page ───────────────────────────────────────────────
export default function Home() {
    const { activeId } = useActObserver(ACT_IDS)
    const { prefersReduced } = useMotion()

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'bonInfer Pvt Ltd',
        url: 'https://boninfer.com',
        description: 'bonInfer Pvt Ltd designs responsible AI—from strategy to agentic delivery.',
        potentialAction: { '@type': 'SearchAction', target: 'https://boninfer.com/search?q={query}', 'query-input': 'required name=query' },
    }

    return (
        <>
            <SeoHead
                title="AI Systems That Move Businesses"
                description="bonInfer Pvt Ltd designs responsible AI—from strategy to agentic delivery—so teams ship faster, safer, and with measurable impact."
                canonical="https://boninfer.com/"
                jsonLd={jsonLd}
            />

            <ActProgress actIds={ACT_IDS} activeId={activeId} />

            {/* ═══════════════════════════════════════════════════════
          ACT 0 — Hero + "Pick your path"
      ═══════════════════════════════════════════════════════ */}
            <section
                id="act-0"
                aria-label="Prologue: Hero"
                className="aurora-bg relative min-h-[100svh] flex flex-col justify-center scroll-mt-10"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    {/* Narrative */}
                    <div>
                        <TokenH1 text="AI systems that move businesses." prefersReduced={prefersReduced} />
                        <Reveal delay={200}>
                            <p className="mt-6 text-lg text-ink-950/70 leading-relaxed max-w-[52ch]">
                                bonInfer Pvt Ltd partners with leaders and product teams to design, ship, and govern AI—responsibly.
                                Strategy, systems, and experience design—delivered as a story you can measure.
                            </p>
                        </Reveal>
                        <Reveal delay={350}>
                            <div className="mt-8 flex flex-wrap gap-3">
                                <Link
                                    to="/ai-studio/opportunity-mapper"
                                    className="px-6 py-3 bg-pulse-500 text-white font-semibold rounded-xl hover:bg-pulse-600 transition-colors shadow-sm"
                                >
                                    Run the Opportunity Mapper
                                </Link>
                                <Link
                                    to="/contact"
                                    className="px-6 py-3 border border-ink-950/15 text-ink-950/70 font-medium rounded-xl hover:border-ink-950/30 hover:text-ink-950 transition-colors"
                                >
                                    Book a scoping call
                                </Link>
                            </div>
                        </Reveal>
                    </div>

                    {/* Stage — path cards */}
                    <div className="grid grid-cols-1 gap-4">
                        {[
                            { label: 'Run the Opportunity Mapper', sub: 'Find your AI fast wins in 3 minutes.', to: '/ai-studio/opportunity-mapper', cta: 'Start →' },
                            { label: "See what we've shipped", sub: 'Real systems, real teams, real outcomes.', to: '/work', cta: 'View work →' },
                            { label: 'How we handle risk & transparency', sub: 'Governance is in our top nav, not our footer.', to: '/governance', cta: 'Read our hub →' },
                        ].map((card, i) => (
                            <Reveal key={card.to} delay={i * 120}>
                                <Link
                                    to={card.to}
                                    className="group block rounded-2xl border border-ink-950/8 bg-white/60 p-5 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300"
                                >
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <p className="font-semibold text-ink-950 text-[15px]">{card.label}</p>
                                            <p className="text-sm text-ink-950/55 mt-1">{card.sub}</p>
                                        </div>
                                        <span className="text-pulse-500 text-sm font-medium group-hover:translate-x-0.5 transition-transform">
                                            {card.cta}
                                        </span>
                                    </div>
                                </Link>
                            </Reveal>
                        ))}
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ink-950/30 animate-bounce" aria-hidden="true">
                    <ChevronDown size={20} />
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════
          ACT 1 — Friction (why AI pilots stall)
      ═══════════════════════════════════════════════════════ */}
            <ActLayout
                id="act-1"
                label="Act 1 — Friction"
                narrative={
                    <div className="space-y-8">
                        <Reveal>
                            <h2 className="font-display text-4xl md:text-5xl font-bold text-ink-950 leading-tight">
                                Most AI pilots don't make it to production.
                            </h2>
                        </Reveal>
                        <div className="space-y-5">
                            {[
                                { headline: 'Pilots don\'t scale.', body: 'What works in a notebook rarely survives contact with real data volumes, integrations, and team handoffs.' },
                                { headline: 'Data is fragmented.', body: 'AI promises assume clean, connected data. Most organisations are still managing siloed, inconsistent sources.' },
                                { headline: 'Risk and compliance are unclear.', body: 'Without a governance plan, legal and compliance block deployment. Trust becomes a blocker, not a feature.' },
                            ].map((point, i) => (
                                <Reveal key={point.headline} delay={i * 80}>
                                    <div className="border-l-2 border-pulse-500/30 pl-4">
                                        <p className="font-semibold text-ink-950">{point.headline}</p>
                                        <p className="text-sm text-ink-950/65 mt-1 leading-relaxed">{point.body}</p>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                }
                stage={<MetricStrip />}
            />

            {/* ═══════════════════════════════════════════════════════
          ACT 2 — Opportunity Mapper Reveal
      ═══════════════════════════════════════════════════════ */}
            <section
                id="act-2"
                aria-label="Act 2 — Opportunity: Try the mapper"
                className="bg-sand-200/40 py-24 md:py-32 scroll-mt-20"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                    <div>
                        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-pulse-500 mb-4">Act 2 — The lens</span>
                        <Reveal>
                            <h2 className="font-display text-4xl font-bold text-ink-950 mb-4">
                                Where does AI move the needle for you?
                            </h2>
                        </Reveal>
                        <Reveal delay={100}>
                            <p className="text-ink-950/70 leading-relaxed mb-6 max-w-[46ch]">
                                In 3 steps, our Opportunity Mapper shows you where AI has the highest value and lowest friction in your specific context.
                            </p>
                        </Reveal>
                        <Reveal delay={180}>
                            <Link
                                to="/ai-studio/opportunity-mapper"
                                className="inline-flex items-center gap-2 text-sm font-semibold text-pulse-600 hover:text-pulse-700 transition-colors"
                            >
                                Open full mapper <ArrowRight size={14} />
                            </Link>
                        </Reveal>
                    </div>
                    <Reveal direction="left">
                        <MiniMapper />
                    </Reveal>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════
          ACT 3 — The Build (delivery pipeline)
      ═══════════════════════════════════════════════════════ */}
            <ActLayout
                id="act-3"
                label="Act 3 — The build"
                narrative={
                    <div className="space-y-6">
                        <Reveal>
                            <h2 className="font-display text-4xl font-bold text-ink-950">
                                From concept to dependable system—without mystery.
                            </h2>
                        </Reveal>
                        <Reveal delay={100}>
                            <p className="text-ink-950/70 leading-relaxed">
                                Every bonInfer engagement follows a disciplined delivery model. No black boxes. No "trust us—it works". Each phase has clear artefacts and sign-off criteria.
                            </p>
                        </Reveal>
                    </div>
                }
                stage={
                    <div className="space-y-3">
                        {PIPELINE_STEPS.map((step, i) => (
                            <Reveal key={step.n} delay={i * 90}>
                                <div className="flex gap-4 p-4 rounded-xl border border-ink-950/8 bg-white/50 group hover:border-pulse-500/30 hover:bg-white/80 transition-all">
                                    <span className="font-accent text-xs font-bold text-pulse-500/60 pt-0.5 min-w-[2rem]">{step.n}</span>
                                    <div>
                                        <p className="text-sm font-semibold text-ink-950">{step.label}</p>
                                        <p className="text-xs text-ink-950/55 mt-0.5 leading-relaxed">{step.desc}</p>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                }
            />

            {/* ═══════════════════════════════════════════════════════
          ACT 4 — The Proof (case vignettes)
      ═══════════════════════════════════════════════════════ */}
            <section
                id="act-4"
                aria-label="Act 4 — Proof: Case studies"
                className="bg-sand-200/30 py-24 md:py-32 scroll-mt-20"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl mb-12">
                        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-pulse-500 mb-3">Act 4 — The proof</span>
                        <Reveal>
                            <h2 className="font-display text-4xl font-bold text-ink-950">Real systems. Measurable outcomes.</h2>
                        </Reveal>
                        <Reveal delay={100}>
                            <p className="mt-3 text-ink-950/65 leading-relaxed">
                                We label our results clearly. "Measured" means validated in production. "Target" means the goal we designed toward.
                            </p>
                        </Reveal>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {cases.map((c, i) => (
                            <CaseVignetteCard key={c.id} caseData={c} />
                        ))}
                    </div>
                    <Reveal delay={200}>
                        <div className="mt-10 text-center">
                            <Link
                                to="/work"
                                className="inline-flex items-center gap-2 text-sm font-semibold text-pulse-600 hover:text-pulse-700 transition-colors"
                            >
                                See all work <ArrowRight size={14} />
                            </Link>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════
          ACT 5 — The Trust (Governance preview)
      ═══════════════════════════════════════════════════════ */}
            <ActLayout
                id="act-5"
                label="Act 5 — Trust"
                narrative={
                    <div className="space-y-6">
                        <Reveal>
                            <h2 className="font-display text-4xl font-bold text-ink-950">
                                Governance is a product feature, not an afterthought.
                            </h2>
                        </Reveal>
                        <Reveal delay={100}>
                            <p className="text-ink-950/70 leading-relaxed">
                                Our AI Transparency Hub puts disclosure, data handling, and risk controls front and centre—in our top nav, not buried in a policy page footer.
                            </p>
                        </Reveal>
                        <Reveal delay={200}>
                            <div className="flex flex-wrap gap-2">
                                <GovernanceBadge variant="ai-assisted" />
                                <GovernanceBadge variant="human-reviewed" />
                                <GovernanceBadge variant="measured" />
                                <GovernanceBadge variant="target" />
                            </div>
                        </Reveal>
                        <Reveal delay={280}>
                            <Link
                                to="/governance"
                                className="inline-flex items-center gap-2 text-sm font-semibold text-pulse-600 hover:text-pulse-700 transition-colors"
                            >
                                Read our transparency hub <ArrowRight size={14} />
                            </Link>
                        </Reveal>
                    </div>
                }
                stage={
                    <div className="grid grid-cols-2 gap-4">
                        {governanceContent.riskControls.map((ctrl, i) => (
                            <Reveal key={ctrl.pillar} delay={i * 80}>
                                <div className="rounded-xl border border-ink-950/8 bg-white/60 p-5">
                                    <p className="font-semibold text-ink-950 mb-1">{ctrl.pillar}</p>
                                    <p className="text-xs text-ink-950/55 leading-relaxed">{ctrl.description}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                }
            />

            {/* ═══════════════════════════════════════════════════════
          ACT 6 — Finale (Contact CTA)
      ═══════════════════════════════════════════════════════ */}
            <section
                id="act-6"
                aria-label="Act 6 — Finale: Contact"
                className="bg-ink-950 text-sand-50 py-24 md:py-32 scroll-mt-20"
            >
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                    <div>
                        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-pulse-500 mb-4">Act 6 — Finale</span>
                        <Reveal>
                            <h2 className="font-display text-4xl md:text-5xl font-bold text-sand-50 leading-tight mb-5">
                                Ready to ship AI with confidence?
                            </h2>
                        </Reveal>
                        <Reveal delay={100}>
                            <p className="text-sand-50/65 leading-relaxed mb-8">
                                Bring a problem. We'll map the opportunity, the system, and the governance plan—then help you deliver.
                            </p>
                        </Reveal>
                        <Reveal delay={180}>
                            <div className="flex flex-wrap gap-3">
                                <Link
                                    to="/contact"
                                    className="px-6 py-3 bg-pulse-500 text-white font-semibold rounded-xl hover:bg-pulse-600 transition-colors"
                                >
                                    Book a scoping call
                                </Link>
                                <a
                                    href="mailto:hello@boninfer.com"
                                    className="px-6 py-3 border border-sand-50/15 text-sand-50/70 font-medium rounded-xl hover:border-sand-50/30 hover:text-sand-50 transition-colors"
                                >
                                    Email us instead
                                </a>
                            </div>
                        </Reveal>
                    </div>

                    <Reveal direction="left" delay={150}>
                        <QuickContactForm />
                    </Reveal>
                </div>
            </section>
        </>
    )
}
