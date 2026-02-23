import { Link } from 'react-router-dom'
import { services } from '../../content/services.js'
import { ArrowRight } from 'lucide-react'

const GROUPS = [
    {
        label: 'AI Strategy',
        slugs: ['ai-strategy'],
    },
    {
        label: 'AI Systems',
        slugs: ['knowledge-ai-rag', 'agentic-automation', 'mlops-reliability'],
    },
    {
        label: 'AI Experience',
        slugs: ['ai-product-design', 'ai-content-enablement'],
    },
    {
        label: 'AI Governance',
        slugs: ['responsible-ai-governance'],
    },
]

export default function MegaMenu({ id, onClose }) {
    const bySlug = Object.fromEntries(services.map((s) => [s.slug, s]))

    return (
        <div
            id={id}
            role="region"
            aria-label="Services menu"
            className="absolute left-0 right-0 top-full bg-sand-50 border-t border-b border-ink-950/8 shadow-lg"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-3 gap-8">

                {/* Left rail — service groups */}
                <div className="col-span-2 grid grid-cols-2 gap-6">
                    {GROUPS.map((group) => (
                        <div key={group.label}>
                            <p className="text-xs font-semibold uppercase tracking-widest text-ink-950/40 mb-3">
                                {group.label}
                            </p>
                            <ul className="space-y-1">
                                {group.slugs.map((slug) => {
                                    const svc = bySlug[slug]
                                    if (!svc) return null
                                    return (
                                        <li key={slug}>
                                            <Link
                                                to={`/services/${slug}`}
                                                onClick={onClose}
                                                className="block px-2 py-1.5 rounded-md hover:bg-sand-200/60 transition-colors group"
                                            >
                                                <span className="text-sm font-medium text-ink-950 group-hover:text-pulse-600 transition-colors">
                                                    {svc.title}
                                                </span>
                                                <span className="block text-xs text-ink-950/50 mt-0.5">
                                                    {svc.tagline}
                                                </span>
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Right — featured case + CTA */}
                <div className="bg-sand-200/40 rounded-xl p-5 flex flex-col justify-between">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-widest text-ink-950/40 mb-2">
                            Featured
                        </p>
                        <p className="text-sm font-semibold text-ink-950 mb-1">Support Deflection with RAG</p>
                        <p className="text-xs text-ink-950/60 leading-relaxed">
                            A SaaS company reduced Tier-1 support by 41% in 8 weeks with a knowledge retrieval assistant.
                        </p>
                    </div>
                    <div className="mt-4 flex flex-col gap-2">
                        <Link
                            to="/work"
                            onClick={onClose}
                            className="flex items-center gap-1 text-sm font-medium text-pulse-600 hover:text-pulse-700 transition-colors"
                        >
                            See all work <ArrowRight size={14} />
                        </Link>
                        <Link
                            to="/ai-studio/opportunity-mapper"
                            onClick={onClose}
                            className="inline-flex items-center justify-center px-4 py-2 bg-pulse-500 text-white text-sm font-semibold rounded-lg hover:bg-pulse-600 transition-colors"
                        >
                            Start here →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
