import { SeoHead } from '../lib/SeoHead.jsx'
import Reveal from '../components/story/Reveal.jsx'
import GovernanceBadge from '../components/ui/GovernanceBadge.jsx'
import { governanceContent } from '../content/governance.js'
import { Shield, Map, BarChart2, Settings } from 'lucide-react'

const PILLAR_ICONS = { Shield, Map, BarChart2, Settings }

function SectionAnchor({ id, title, children }) {
    return (
        <section id={id} aria-labelledby={`${id}-heading`} className="scroll-mt-24 py-12 border-b border-ink-950/6 last:border-0">
            <Reveal>
                <h2 id={`${id}-heading`} className="font-display text-2xl font-bold text-ink-950 mb-6">{title}</h2>
            </Reveal>
            {children}
        </section>
    )
}

export default function Governance() {
    const { disclosure, dataHandling, modelMetadata, riskControls, security } = governanceContent

    const governanceJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://boninfer.com' },
            { '@type': 'ListItem', position: 2, name: 'AI Transparency Hub', item: 'https://boninfer.com/governance' },
        ],
    }

    return (
        <>
            <SeoHead
                title="AI Transparency Hub"
                description="bonInfer's AI governance page: what content is AI-assisted, data handling, model metadata, and our four-pillar risk control framework."
                canonical="https://boninfer.com/governance"
                jsonLd={governanceJsonLd}
            />

            {/* Hero */}
            <section className="bg-sand-50 pt-20 pb-12 px-4 sm:px-6 lg:px-8 border-b border-ink-950/6">
                <div className="max-w-4xl mx-auto">
                    <Reveal>
                        <div className="flex flex-wrap gap-2 mb-5">
                            <GovernanceBadge variant="ai-assisted" />
                            <GovernanceBadge variant="human-reviewed" />
                        </div>
                    </Reveal>
                    <Reveal delay={80}>
                        <h1 className="font-display text-5xl font-bold text-ink-950 mb-4">AI Transparency Hub</h1>
                    </Reveal>
                    <Reveal delay={150}>
                        <p className="text-lg text-ink-950/65 leading-relaxed max-w-[58ch]">
                            Governance is a product feature at bonInfer — not an afterthought. This page documents what AI does on our site, how we handle data, and the controls we maintain.
                        </p>
                    </Reveal>

                    {/* Page nav */}
                    <Reveal delay={220}>
                        <nav aria-label="Jump to section" className="mt-8 flex flex-wrap gap-2">
                            {[
                                ['#disclosure', 'Disclosure'],
                                ['#data-handling', 'Data Handling'],
                                ['#model-metadata', 'Model Metadata'],
                                ['#risk-controls', 'Risk Controls'],
                                ['#security', 'Security'],
                            ].map(([href, label]) => (
                                <a
                                    key={href}
                                    href={href}
                                    className="px-3 py-1.5 text-sm rounded-lg border border-ink-950/12 text-ink-950/60 hover:border-pulse-500/40 hover:text-pulse-600 transition-colors"
                                >
                                    {label}
                                </a>
                            ))}
                        </nav>
                    </Reveal>
                </div>
            </section>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* 1 — Disclosure */}
                <SectionAnchor id="disclosure" title={disclosure.title}>
                    <p className="text-ink-950/65 mb-6 text-sm">{disclosure.summary}</p>
                    <div className="space-y-5">
                        {disclosure.items.map((item, i) => (
                            <Reveal key={item.label} delay={i * 60}>
                                <div className="flex gap-4 p-5 rounded-xl border border-ink-950/8 bg-white/60">
                                    <div>
                                        <p className="font-semibold text-ink-950 text-sm mb-1">{item.label}</p>
                                        <p className="text-sm text-ink-950/65 leading-relaxed">{item.description}</p>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </SectionAnchor>

                {/* 2 — Data Handling */}
                <SectionAnchor id="data-handling" title={dataHandling.title}>
                    <p className="text-ink-950/65 mb-6 text-sm">{dataHandling.summary}</p>
                    <div className="divide-y divide-ink-950/6 rounded-xl border border-ink-950/8 overflow-hidden">
                        {dataHandling.items.map((item, i) => (
                            <Reveal key={item.label} delay={i * 50}>
                                <div className="p-5 bg-white/60">
                                    <p className="font-semibold text-ink-950 text-sm mb-1">{item.label}</p>
                                    <p className="text-sm text-ink-950/65 leading-relaxed">{item.description}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </SectionAnchor>

                {/* 3 — Model Metadata */}
                <SectionAnchor id="model-metadata" title={modelMetadata.title}>
                    <p className="text-ink-950/65 mb-6 text-sm">{modelMetadata.summary}</p>
                    <div className="space-y-4">
                        {modelMetadata.items.map((item, i) => (
                            <Reveal key={item.label} delay={i * 60}>
                                <div className="rounded-xl border border-ink-950/8 bg-white/60 p-5">
                                    <div className="flex items-start justify-between gap-4 mb-3">
                                        <p className="font-semibold text-ink-950 text-sm">{item.label}</p>
                                        <GovernanceBadge variant="ai-assisted" />
                                    </div>
                                    <div className="grid grid-cols-2 gap-3 text-xs mb-3">
                                        <div>
                                            <p className="text-ink-950/40 uppercase tracking-wider mb-0.5">Provider</p>
                                            <p className="text-ink-950/75">{item.provider}</p>
                                        </div>
                                        <div>
                                            <p className="text-ink-950/40 uppercase tracking-wider mb-0.5">Family / Version</p>
                                            <p className="text-ink-950/75">{item.family}</p>
                                        </div>
                                    </div>
                                    <div className="bg-amber-50 border border-amber-100 rounded-lg px-3 py-2 text-xs text-amber-800">
                                        <span className="font-semibold">Limitations: </span>{item.limitations}
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </SectionAnchor>

                {/* 4 — Risk Controls */}
                <SectionAnchor id="risk-controls" title="Risk Controls">
                    <p className="text-ink-950/65 mb-6 text-sm">Our four-pillar risk control framework — Govern, Map, Measure, Manage.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {riskControls.map((ctrl, i) => {
                            const IconComp = PILLAR_ICONS[ctrl.icon] || Shield
                            return (
                                <Reveal key={ctrl.pillar} delay={i * 70}>
                                    <div className="rounded-xl border border-ink-950/8 bg-white/60 p-5">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-9 h-9 rounded-lg bg-pulse-500/10 flex items-center justify-center text-pulse-600">
                                                <IconComp size={16} />
                                            </div>
                                            <p className="font-semibold text-ink-950">{ctrl.pillar}</p>
                                        </div>
                                        <p className="text-sm text-ink-950/60 mb-3">{ctrl.description}</p>
                                        <ul className="space-y-1.5">
                                            {ctrl.controls.map((c) => (
                                                <li key={c} className="flex items-start gap-2 text-xs text-ink-950/70">
                                                    <span className="text-pulse-500 mt-0.5 shrink-0">›</span>{c}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </Reveal>
                            )
                        })}
                    </div>
                </SectionAnchor>

                {/* 5 — Provenance (Phase 2 note) */}
                <SectionAnchor id="provenance" title="Provenance">
                    <Reveal>
                        <div className="rounded-xl border border-dashed border-ink-950/15 bg-sand-200/30 p-5">
                            <p className="text-sm font-medium text-ink-950/60 mb-1">Coming in Phase 2</p>
                            <p className="text-sm text-ink-950/50">
                                Content credential strategy — machine-readable provenance metadata attached to AI-generated content, verifiable by third-party tools.
                            </p>
                        </div>
                    </Reveal>
                </SectionAnchor>

                {/* 6 — Security */}
                <SectionAnchor id="security" title={security.title}>
                    <p className="text-ink-950/65 mb-5 text-sm">{security.summary}</p>
                    <ul className="space-y-3 mb-6">
                        {security.items.map((item, i) => (
                            <Reveal key={item} delay={i * 50}>
                                <li className="flex items-start gap-3 text-sm text-ink-950/75">
                                    <span className="text-pulse-500 mt-0.5 shrink-0">✓</span>{item}
                                </li>
                            </Reveal>
                        ))}
                    </ul>
                    <Reveal delay={200}>
                        <div className="inline-flex items-center gap-2 text-sm">
                            <span className="text-ink-950/50">Security contact:</span>
                            <a
                                href={`mailto:${security.contact}`}
                                className="font-medium text-pulse-600 hover:text-pulse-700 transition-colors"
                            >
                                {security.contact}
                            </a>
                        </div>
                    </Reveal>
                </SectionAnchor>
            </div>

            {/* Bottom padding */}
            <div className="h-16" />
        </>
    )
}
