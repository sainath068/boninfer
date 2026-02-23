import { cn } from '../../lib/utils.js'

/**
 * GovernanceBadge — inline label for AI provenance signals.
 * Variants: 'ai-assisted' | 'human-reviewed' | 'measured' | 'target'
 */
const VARIANTS = {
    'ai-assisted': 'bg-amber-100 text-amber-800 border-amber-200',
    'human-reviewed': 'bg-green-100 text-green-800 border-green-200',
    measured: 'bg-blue-100 text-blue-800 border-blue-200',
    target: 'bg-sand-200 text-ink-950/60 border-sand-200',
}

const LABELS = {
    'ai-assisted': '✦ AI-assisted',
    'human-reviewed': '✓ Human-reviewed',
    measured: '● Measured',
    target: '○ Target',
}

export default function GovernanceBadge({ variant = 'ai-assisted', label, className }) {
    const displayLabel = label || LABELS[variant] || variant
    return (
        <span
            className={cn(
                'inline-flex items-center px-2 py-0.5 rounded text-xs font-medium border',
                VARIANTS[variant] || VARIANTS['ai-assisted'],
                className
            )}
        >
            {displayLabel}
        </span>
    )
}
