import { Link } from 'react-router-dom'
import { SeoHead } from '../lib/SeoHead.jsx'

export default function NotFound() {
    return (
        <>
            <SeoHead title="404 — Page Not Found" description="This page doesn't exist." />
            <section className="min-h-[80vh] flex flex-col items-center justify-center px-4 text-center bg-sand-50">
                <p className="font-display text-8xl font-bold text-ink-950/8 mb-0" aria-hidden="true">404</p>
                <h1 className="font-display text-3xl font-bold text-ink-950 -mt-4 mb-3">Page not found</h1>
                <p className="text-ink-950/55 text-sm mb-8 max-w-xs">This page doesn't exist or has moved. Let's get you back on track.</p>
                <div className="flex flex-wrap gap-3 justify-center">
                    <Link to="/" className="px-5 py-2.5 bg-pulse-500 text-white font-semibold rounded-xl hover:bg-pulse-600 transition-colors text-sm">
                        Go home
                    </Link>
                    <Link to="/contact" className="px-5 py-2.5 border border-ink-950/15 text-ink-950/65 font-medium rounded-xl hover:border-ink-950/30 transition-colors text-sm">
                        Contact us
                    </Link>
                </div>
            </section>
        </>
    )
}
