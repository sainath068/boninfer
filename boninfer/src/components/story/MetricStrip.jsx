import Reveal from './Reveal.jsx'
import { cn } from '../../lib/utils.js'

const DEFAULT_METRICS = [
    { label: 'Avg. time-to-prototype', value: '3–4 wks' },
    { label: 'Avg. time-to-production', value: '8–12 wks' },
    { label: 'Output reliability target', value: '≥ 90%' },
]

export default function MetricStrip({ metrics = DEFAULT_METRICS, dark = false }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {metrics.map((m, i) => (
                <Reveal key={m.label} delay={i * 90}>
                    <div
                        className={cn(
                            'rounded-2xl p-6 border transition-all duration-300',
                            dark
                                ? 'bg-white/5 border-white/10 hover:bg-white/8 hover:border-white/18'
                                : 'glass-card'
                        )}
                    >
                        <p className={cn(
                            'text-3xl font-display font-bold leading-none mb-2',
                            dark ? 'text-sand-50' : 'text-ink-950'
                        )}>
                            {m.value}
                        </p>
                        {m.unit && (
                            <p className={cn('text-[10px] uppercase tracking-wider mb-1', dark ? 'text-sand-50/40' : 'text-ink-950/40')}>
                                {m.unit}
                            </p>
                        )}
                        <p className={cn('text-[13px] leading-snug', dark ? 'text-sand-50/60' : 'text-ink-950/60')}>
                            {m.label}
                        </p>
                    </div>
                </Reveal>
            ))}
        </div>
    )
}
