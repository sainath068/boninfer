import { cn } from '../../lib/utils.js'

const ACT_LABELS = {
    'act-0': 'Prologue',
    'act-1': 'Friction',
    'act-2': 'Opportunity',
    'act-3': 'Build',
    'act-4': 'Proof',
    'act-5': 'Trust',
    'act-6': 'Contact',
}

/**
 * Fixed chapter progress indicator on the right side (desktop only).
 * Dot per act, click scrolls to that act.
 * Active dot highlighted.
 */
export default function ActProgress({ actIds, activeId }) {
    const scrollTo = (id) => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    return (
        <nav
            aria-label="Chapter progress"
            className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-3"
        >
            {actIds.map((id, i) => {
                const isActive = id === activeId
                return (
                    <button
                        key={id}
                        onClick={() => scrollTo(id)}
                        aria-label={`Go to ${ACT_LABELS[id] || `Act ${i}`}`}
                        aria-current={isActive ? 'true' : undefined}
                        className={cn(
                            'w-2 h-2 rounded-full transition-all duration-300 outline-none',
                            isActive ? 'bg-pulse-500 scale-150' : 'bg-ink-950/20 hover:bg-ink-950/50'
                        )}
                    />
                )
            })}
        </nav>
    )
}
