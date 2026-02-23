import { useParams, Navigate, Link } from 'react-router-dom'
import { SeoHead } from '../lib/SeoHead.jsx'
import Reveal from '../components/story/Reveal.jsx'
import GovernanceBadge from '../components/ui/GovernanceBadge.jsx'
import { services } from '../content/services.js'
import { CheckCircle, ArrowRight } from 'lucide-react'
import * as Icons from 'lucide-react'

export default function ServiceDetail() {
    const { slug } = useParams()
    const service = services.find((s) => s.slug === slug)

    if (!service) return <Navigate to="/services" replace />

    const { title, tagline, description, icon, deliverables, workflow, pitfalls } = service
    const IconComponent = Icons[icon] || Icons.Sparkles

    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Services', item: 'https://boninfer.com/services' },
            { '@type': 'ListItem', position: 2, name: title, item: `https://boninfer.com/services/${slug}` },
        ],
    }

    return (
        <>
            <SeoHead
                title={title}
                description={`${tagline} — ${description}`}
                canonical={`https://boninfer.com/services/${slug}`}
                jsonLd={breadcrumbJsonLd}
            />

            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="bg-sand-50 border-b border-ink-950/6 px-4 sm:px-6 lg:px-8 py-3">
                <ol className="max-w-7xl mx-auto flex items-center gap-2 text-sm text-ink-950/50">
                    <li><Link to="/" className="hover:text-ink-950 transition-colors">Home</Link></li>
                    <li aria-hidden="true">›</li>
                    <li><Link to="/services" className="hover:text-ink-950 transition-colors">Services</Link></li>
                    <li aria-hidden="true">›</li>
                    <li aria-current="page" className="text-ink-950 font-medium">{title}</li>
                </ol>
            </nav>

            {/* Hero */}
            <section className="bg-sand-50 py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <Reveal>
                        <div className="w-12 h-12 rounded-2xl bg-pulse-500/10 flex items-center justify-center text-pulse-600 mb-6">
                            <IconComponent size={24} />
                        </div>
                    </Reveal>
                    <Reveal delay={80}>
                        <h1 className="font-display text-5xl font-bold text-ink-950 mb-3">{title}</h1>
                    </Reveal>
                    <Reveal delay={150}>
                        <p className="text-xl text-pulse-600 font-medium mb-4">{tagline}</p>
                    </Reveal>
                    <Reveal delay={200}>
                        <p className="text-lg text-ink-950/70 leading-relaxed max-w-[58ch]">{description}</p>
                    </Reveal>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Deliverables */}
                <div>
                    <Reveal>
                        <h2 className="font-display text-2xl font-bold text-ink-950 mb-5">What you get</h2>
                    </Reveal>
                    <ul className="space-y-3">
                        {deliverables.map((d, i) => (
                            <Reveal key={d} delay={i * 60}>
                                <li className="flex items-start gap-3 text-sm text-ink-950/80">
                                    <CheckCircle size={16} className="text-pulse-500 mt-0.5 shrink-0" />
                                    {d}
                                </li>
                            </Reveal>
                        ))}
                    </ul>
                </div>

                {/* Workflow */}
                <div>
                    <Reveal>
                        <h2 className="font-display text-2xl font-bold text-ink-950 mb-5">How it works</h2>
                    </Reveal>
                    <ol className="space-y-4">
                        {workflow.map((step, i) => (
                            <Reveal key={step} delay={i * 60}>
                                <li className="flex items-start gap-4">
                                    <span className="w-6 h-6 rounded-full bg-pulse-500/10 text-pulse-600 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                                        {i + 1}
                                    </span>
                                    <p className="text-sm text-ink-950/80 leading-relaxed">{step}</p>
                                </li>
                            </Reveal>
                        ))}
                    </ol>
                </div>
            </div>

            {/* Pitfalls */}
            <section className="bg-sand-200/40 py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <Reveal>
                        <h2 className="font-display text-2xl font-bold text-ink-950 mb-5">Risks we reduce</h2>
                    </Reveal>
                    <ul className="space-y-2">
                        {pitfalls.map((p, i) => (
                            <Reveal key={p} delay={i * 60}>
                                <li className="flex items-start gap-3 text-sm text-ink-950/75">
                                    <span className="text-pulse-500 font-bold mt-0.5">×</span>
                                    {p}
                                </li>
                            </Reveal>
                        ))}
                    </ul>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 text-center bg-sand-50">
                <Reveal>
                    <h2 className="font-display text-3xl font-bold text-ink-950 mb-4">Ready to explore this service?</h2>
                </Reveal>
                <Reveal delay={100}>
                    <div className="flex flex-wrap justify-center gap-3 mt-6">
                        <Link to="/ai-studio/opportunity-mapper" className="px-6 py-3 bg-pulse-500 text-white font-semibold rounded-xl hover:bg-pulse-600 transition-colors">
                            Run the Opportunity Mapper
                        </Link>
                        <Link to="/contact" className="px-6 py-3 border border-ink-950/15 text-ink-950/70 font-medium rounded-xl hover:border-ink-950/30 hover:text-ink-950 transition-colors">
                            Contact us
                        </Link>
                    </div>
                </Reveal>
            </section>
        </>
    )
}
