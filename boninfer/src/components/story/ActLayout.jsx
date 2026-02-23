import { useContext } from 'react'
import { cn } from '../../lib/utils.js'

/**
 * Two-track layout primitive for scrollytelling Acts.
 * narrative (left, ~45%) + stage (right, ~55%)
 * On mobile: stacked single column.
 */
export default function ActLayout({ id, label, narrative, stage, className, dark = false }) {
    return (
        <section
            id={id}
            aria-label={label}
            className={cn(
                'relative py-24 md:py-32 scroll-mt-20',
                dark ? 'bg-ink-950 text-sand-50' : 'bg-sand-50 text-ink-950',
                className
            )}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">
                    {/* Narrative track */}
                    <div className="narrative-track">
                        {label && (
                            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-pulse-500 mb-4">
                                {label}
                            </span>
                        )}
                        <div className="prose-body">{narrative}</div>
                    </div>

                    {/* Stage track */}
                    <div className="stage-track">{stage}</div>
                </div>
            </div>
        </section>
    )
}
