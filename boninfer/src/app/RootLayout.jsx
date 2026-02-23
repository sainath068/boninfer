import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import SiteHeader from '../components/site/SiteHeader.jsx'
import SiteFooter from '../components/site/SiteFooter.jsx'
import { useMotion } from './Router.jsx'

export default function RootLayout() {
    const { prefersReduced } = useMotion()
    const { pathname } = useLocation()

    // Scroll to top on route change
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' })
    }, [pathname])

    return (
        // Apply .reduced-motion class to root when active — CSS globally disables animations
        <div className={prefersReduced ? 'reduced-motion' : ''}>
            {/* Skip navigation link — visually hidden until focused */}
            <a href="#main-content" className="skip-link">
                Skip to main content
            </a>

            <SiteHeader />

            <main id="main-content" tabIndex={-1}>
                <Outlet />
            </main>

            <SiteFooter />
        </div>
    )
}
