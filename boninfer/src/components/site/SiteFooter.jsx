import { Link } from 'react-router-dom'
import { services } from '../../content/services.js'

const FOOTER_COLS = [
    {
        heading: 'Work & Studio',
        links: [
            { label: 'Our Work', to: '/work' },
            { label: 'AI Studio', to: '/ai-studio' },
            { label: 'Opportunity Mapper', to: '/ai-studio/opportunity-mapper' },
            { label: 'Prompt Playbooks', to: '/ai-studio/prompt-playbooks' },
        ],
    },
    {
        heading: 'Services',
        links: services.map((s) => ({ label: s.title, to: `/services/${s.slug}` })),
    },
    {
        heading: 'Trust',
        links: [
            { label: 'Governance Hub', to: '/governance' },
            { label: 'Privacy Policy', to: '/privacy' },
            { label: 'Terms of Service', to: '/terms' },
        ],
    },
    {
        heading: 'Company',
        links: [
            { label: 'Insights', to: '/insights' },
            { label: 'About', to: '/about' },
            { label: 'Contact', to: '/contact' },
        ],
    },
]

export default function SiteFooter() {
    return (
        <footer
            className="bg-ink-950 text-sand-50/80 pt-16 pb-8"
            role="contentinfo"
            aria-label="Site footer"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Top grid */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-16">
                    {/* Brand column */}
                    <div className="col-span-2 md:col-span-1">
                        <Link to="/" className="font-display text-xl font-bold text-sand-50 hover:text-pulse-500 transition-colors">
                            bonInfer
                        </Link>
                        <p className="mt-3 text-sm leading-relaxed text-sand-50/55 max-w-[18rem]">
                            AI systems that move businesses. Strategy, systems, and governance — delivered responsibly.
                        </p>
                        <p className="mt-4 text-xs text-sand-50/30">
                            bonInfer Pvt Ltd
                        </p>
                    </div>

                    {/* Nav columns */}
                    {FOOTER_COLS.map((col) => (
                        <div key={col.heading}>
                            <p className="text-xs font-semibold uppercase tracking-widest text-sand-50/35 mb-3">
                                {col.heading}
                            </p>
                            <ul className="space-y-2">
                                {col.links.map((link) => (
                                    <li key={link.to}>
                                        <Link
                                            to={link.to}
                                            className="text-sm text-sand-50/60 hover:text-sand-50 transition-colors"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="border-t border-sand-50/8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-sand-50/30">
                    <p>© {new Date().getFullYear()} bonInfer Pvt Ltd. All rights reserved.</p>
                    <div className="flex gap-4">
                        <Link to="/privacy" className="hover:text-sand-50/60 transition-colors">Privacy</Link>
                        <Link to="/terms" className="hover:text-sand-50/60 transition-colors">Terms</Link>
                        <Link to="/governance" className="hover:text-sand-50/60 transition-colors">Governance</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
