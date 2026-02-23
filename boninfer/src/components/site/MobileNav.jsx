import { useEffect, useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { X, ChevronDown } from 'lucide-react'
import { cn } from '../../lib/utils.js'
import { services } from '../../content/services.js'

const NAV_GROUPS = [
    {
        label: 'Explore',
        links: [
            { label: 'Work', to: '/work' },
            { label: 'AI Studio', to: '/ai-studio' },
            { label: 'Governance', to: '/governance' },
            { label: 'Insights', to: '/insights' },
        ],
    },
    {
        label: 'Services',
        links: services.map((s) => ({ label: s.title, to: `/services/${s.slug}` })),
    },
    {
        label: 'Company',
        links: [
            { label: 'About', to: '/about' },
            { label: 'Contact', to: '/contact' },
            { label: 'Privacy', to: '/privacy' },
            { label: 'Terms', to: '/terms' },
        ],
    },
]

export default function MobileNav({ id, open, onClose }) {
    const closeRef = useRef(null)

    // Focus the close button when drawer opens
    useEffect(() => {
        if (open) {
            setTimeout(() => closeRef.current?.focus(), 50)
        }
    }, [open])

    // Trap focus inside + close on Escape
    useEffect(() => {
        const handleKey = (e) => {
            if (!open) return
            if (e.key === 'Escape') onClose()
        }
        document.addEventListener('keydown', handleKey)
        return () => document.removeEventListener('keydown', handleKey)
    }, [open, onClose])

    if (!open) return null

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 z-40 bg-ink-950/30 backdrop-blur-sm"
                onClick={onClose}
                aria-hidden="true"
            />

            {/* Drawer */}
            <div
                id={id}
                role="dialog"
                aria-modal="true"
                aria-label="Mobile navigation"
                className="fixed top-0 right-0 z-50 h-full w-80 max-w-full bg-sand-50 shadow-xl overflow-y-auto"
            >
                <div className="flex items-center justify-between px-5 py-4 border-b border-ink-950/8">
                    <Link to="/" onClick={onClose} className="font-display font-bold text-ink-950">
                        bonInfer
                    </Link>
                    <button
                        ref={closeRef}
                        onClick={onClose}
                        aria-label="Close navigation"
                        className="p-2 rounded-md text-ink-950/50 hover:text-ink-950"
                    >
                        <X size={20} />
                    </button>
                </div>

                <nav aria-label="Mobile navigation links" className="px-5 py-6 space-y-6">
                    {NAV_GROUPS.map((group) => (
                        <div key={group.label}>
                            <p className="text-xs font-semibold uppercase tracking-widest text-ink-950/40 mb-2">
                                {group.label}
                            </p>
                            <ul className="space-y-1">
                                {group.links.map((link) => (
                                    <li key={link.to}>
                                        <NavLink
                                            to={link.to}
                                            onClick={onClose}
                                            className={({ isActive }) =>
                                                cn(
                                                    'block px-3 py-2 rounded-md text-sm transition-colors',
                                                    isActive
                                                        ? 'bg-pulse-500/10 text-pulse-600 font-medium'
                                                        : 'text-ink-950/70 hover:text-ink-950 hover:bg-sand-200/60'
                                                )
                                            }
                                        >
                                            {link.label}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </nav>

                {/* Mobile CTAs */}
                <div className="px-5 pb-8 flex flex-col gap-3">
                    <Link
                        to="/ai-studio/opportunity-mapper"
                        onClick={onClose}
                        className="w-full text-center px-4 py-3 bg-pulse-500 text-white text-sm font-semibold rounded-lg hover:bg-pulse-600 transition-colors"
                    >
                        Run the Opportunity Mapper
                    </Link>
                    <Link
                        to="/contact"
                        onClick={onClose}
                        className="w-full text-center px-4 py-3 border border-ink-950/15 text-ink-950/70 text-sm font-medium rounded-lg hover:border-ink-950/30 hover:text-ink-950 transition-colors"
                    >
                        Book a scoping call
                    </Link>
                </div>
            </div>
        </>
    )
}
