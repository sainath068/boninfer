import { cn } from '../../lib/utils.js'
import Reveal from './Reveal.jsx'
import GovernanceBadge from '../ui/GovernanceBadge.jsx'

/**
 * KPI pill — clean stat + provenance dot (no badge text clutter)
 */
function KpiPill({ kpi }) {
    const isDot = kpi.type === 'measured' || kpi.type === 'target'
    const dotClass = kpi.type === 'measured' ? 'kpi-dot--measured' : 'kpi-dot--target'
    const dotTitle = kpi.type === 'measured' ? 'Measured in production' : 'Target metric'
    return (
        <div className="min-w-0">
            <p className="text-xl font-display font-bold text-ink-950 leading-none">{kpi.value}</p>
            <div className="flex items-center gap-1 mt-1">
                {isDot && (
                    <span
                        className={cn('kpi-dot', dotClass)}
                        title={dotTitle}
                        aria-label={dotTitle}
                    />
                )}
                <p className="text-xs text-ink-950/50 leading-snug truncate">{kpi.label}</p>
            </div>
        </div>
    )
}

/**
 * Case vignette card: Problem → System → Outcome + KPI strip
 */
export default function CaseVignetteCard({ caseData, className }) {
    const { title, industry, badge, problem, system, outcome, kpis } = caseData

    return (
        <Reveal>
            <article
                className={cn(
                    'glass-card rounded-2xl overflow-hidden flex flex-col',
                    className
                )}
                aria-label={`Case study: ${title}`}
            >
                {/* Accent stripe top */}
                <div className="h-0.5 bg-gradient-to-r from-pulse-500/60 via-pulse-400/40 to-transparent" aria-hidden="true" />

                <div className="p-6 flex flex-col gap-4 flex-1">
                    {/* Header */}
                    <div className="flex items-start justify-between gap-3">
                        <div>
                            <p className="text-[10px] font-semibold uppercase tracking-widest text-pulse-600 mb-1.5">
                                {industry}
                            </p>
                            <h3 className="font-display text-[1.15rem] font-bold text-ink-950 leading-snug">
                                {title}
                            </h3>
                        </div>
                        {badge && (
                            <span className="shrink-0 text-[10px] font-semibold bg-sand-200 text-ink-950/50 px-2.5 py-1 rounded-full whitespace-nowrap">
                                {badge}
                            </span>
                        )}
                    </div>

                    {/* P→S→O */}
                    <div className="space-y-3.5 flex-1">
                        {[
                            { key: 'Problem', text: problem },
                            { key: 'System', text: system },
                            { key: 'Outcome', text: outcome },
                        ].map(({ key, text }) => (
                            <div key={key}>
                                <p className="text-[10px] font-semibold uppercase tracking-widest text-ink-950/35 mb-0.5">
                                    {key}
                                </p>
                                <p className="text-[13px] text-ink-950/75 leading-relaxed">{text}</p>
                            </div>
                        ))}
                    </div>

                    {/* KPI strip */}
                    {kpis && (
                        <div className="pt-4 border-t border-ink-950/6 grid grid-cols-3 gap-3">
                            {kpis.map((kpi) => (
                                <KpiPill key={kpi.label} kpi={kpi} />
                            ))}
                        </div>
                    )}

                    {/* Provenance footer */}
                    <div className="flex items-center gap-1.5 pt-1">
                        <span className="kpi-dot kpi-dot--measured" title="Measured in production" />
                        <span className="text-[10px] text-ink-950/35">Measured</span>
                        <span className="mx-1 text-ink-950/15">·</span>
                        <span className="kpi-dot kpi-dot--target" title="Target metric" />
                        <span className="text-[10px] text-ink-950/35">Target</span>
                    </div>
                </div>
            </article>
        </Reveal>
    )
}
