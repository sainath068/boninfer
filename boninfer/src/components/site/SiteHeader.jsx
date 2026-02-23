import { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { cn } from '../../lib/utils.js'
import { useMotion } from '../../app/Router.jsx'
import MegaMenu from './MegaMenu.jsx'
import MobileNav from './MobileNav.jsx'
import { Menu, Zap } from 'lucide-react'

const NAV_LINKS = [
    { label: 'Work', to: '/work' },
    { label: 'Services', to: '/services', hasMega: true },
    { label: 'AI Studio', to: '/ai-studio' },
    { label: 'Governance', to: '/governance' },
    { label: 'Insights', to: '/insights' },
    { label: 'Contact', to: '/contact' },
]

export default function SiteHeader() {
    const [scrolled, setScrolled] = useState(false)
    const [megaOpen, setMegaOpen] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)
    const { prefersReduced, setReduced } = useMotion()
    const location = useLocation()
    const megaTriggerRef = useRef(null)

    // Close mega/mobile on route change
    useEffect(() => {
        setMegaOpen(false)
        setMobileOpen(false)
    }, [location.pathname])

    // Frosted glass on scroll
    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handler, { passive: true })
        return () => window.removeEventListener('scroll', handler)
    }, [])

    // Close mega menu on Escape
    useEffect(() => {
        const handler = (e) => {
            if (e.key === 'Escape' && megaOpen) {
                setMegaOpen(false)
                megaTriggerRef.current?.focus()
            }
        }
        document.addEventListener('keydown', handler)
        return () => document.removeEventListener('keydown', handler)
    }, [megaOpen])

    return (
        <header
            className={cn(
                'sticky top-0 z-50 w-full transition-all duration-300',
                scrolled
                    ? 'backdrop-blur-md bg-sand-50/85 shadow-sm border-b border-ink-950/8'
                    : 'bg-sand-50'
            )}
            role="banner"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    {/* Logo */}
                    <Link
                        to="/"
                        className="flex items-center gap-2 font-display text-xl font-bold text-ink-950 hover:text-pulse-500 transition-colors"
                        aria-label="bonInfer — Home"
                    >
                        <span className="w-7 h-7 rounded bg-pulse-500 flex items-center justify-center text-white text-xs font-bold">bI</span>
                        <span>bonInfer</span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav aria-label="Main navigation" className="hidden md:flex items-center gap-1">
                        {NAV_LINKS.map((link) =>
                            link.hasMega ? (
                                <button
                                    key={link.label}
                                    ref={megaTriggerRef}
                                    onClick={() => setMegaOpen((o) => !o)}
                                    onMouseEnter={() => setMegaOpen(true)}
                                    aria-expanded={megaOpen}
                                    aria-haspopup="true"
                                    aria-controls="mega-menu"
                                    className={cn(
                                        'px-3 py-2 text-sm font-medium rounded-md transition-colors',
                                        'text-ink-950/70 hover:text-ink-950 hover:bg-sand-200/60'
                                    )}
                                >
                                    {link.label}
                                    <span className="ml-1 text-xs opacity-50">▾</span>
                                </button>
                            ) : (
                                <NavLink
                                    key={link.label}
                                    to={link.to}
                                    className={({ isActive }) =>
                                        cn(
                                            'px-3 py-2 text-sm font-medium rounded-md transition-colors',
                                            isActive
                                                ? 'text-pulse-500 bg-pulse-500/8 font-semibold'
                                                : 'text-ink-950/70 hover:text-ink-950 hover:bg-sand-200/60'
                                        )
                                    }
                                >
                                    {link.label}
                                </NavLink>
                            )
                        )}
                    </nav>

                    {/* Right CTAs */}
                    <div className="hidden md:flex items-center gap-2">
                        {/* Reduced motion toggle */}
                        <button
                            onClick={() => setReduced(!prefersReduced)}
                            aria-label={prefersReduced ? 'Enable animations' : 'Reduce motion'}
                            title={prefersReduced ? 'Enable animations' : 'Reduce motion'}
                            className={cn(
                                'p-2 rounded-md text-sm transition-colors',
                                prefersReduced
                                    ? 'text-pulse-500 bg-pulse-500/10'
                                    : 'text-ink-950/40 hover:text-ink-950/70'
                            )}
                        >
                            <Zap size={16} />
                        </button>

                        <Link
                            to="/ai-studio/opportunity-mapper"
                            className="px-4 py-2 text-sm font-semibold bg-pulse-500 text-white rounded-lg hover:bg-pulse-600 transition-colors shadow-sm"
                        >
                            Run the Opportunity Mapper
                        </Link>
                        <Link
                            to="/contact"
                            className="px-4 py-2 text-sm font-medium border border-ink-950/15 text-ink-950/70 rounded-lg hover:border-ink-950/30 hover:text-ink-950 transition-colors"
                        >
                            Book a scoping call
                        </Link>
                    </div>

                    {/* Mobile menu trigger */}
                    <button
                        className="md:hidden p-2 rounded-md text-ink-950/70 hover:text-ink-950"
                        onClick={() => setMobileOpen(true)}
                        aria-label="Open mobile navigation"
                        aria-expanded={mobileOpen}
                        aria-controls="mobile-nav"
                    >
                        <Menu size={22} />
                    </button>
                </div>
            </div>

            {/* Mega menu panel */}
            {megaOpen && (
                <div onMouseLeave={() => setMegaOpen(false)}>
                    <MegaMenu id="mega-menu" onClose={() => setMegaOpen(false)} />
                </div>
            )}

            {/* Mobile drawer */}
            <MobileNav
                id="mobile-nav"
                open={mobileOpen}
                onClose={() => setMobileOpen(false)}
            />
        </header>
    )
}
