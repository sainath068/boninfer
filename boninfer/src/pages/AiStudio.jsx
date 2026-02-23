import { Link } from 'react-router-dom'
import { SeoHead } from '../lib/SeoHead.jsx'
import Reveal from '../components/story/Reveal.jsx'
import { Map, BookOpen, FileText, ArrowRight } from 'lucide-react'

const TOOLS = [
    {
        icon: Map,
        label: 'Opportunity Mapper',
        desc: 'Map your AI opportunities in minutes. Fast wins, platform plays, governance checks — tailored to your context.',
        cta: 'Run the mapper',
        to: '/ai-studio/opportunity-mapper',
        badge: 'Flagship',
    },
    {
        icon: BookOpen,
        label: 'Prompt Playbooks',
        desc: 'Role-based prompt libraries with example outputs and evaluation checklists. For CEOs, engineers, compliance — and everyone between.',
        cta: 'Browse playbooks',
        to: '/ai-studio/prompt-playbooks',
        badge: null,
    },
    {
        icon: FileText,
        label: 'Templates',
        desc: 'Starter kits to get your AI programme running: policy templates, evaluation plans, RAG readiness checklist, agent workflow canvas.',
        cta: 'Coming soon',
        to: '#',
        badge: 'P1',
        disabled: true,
    },
]

export default function AiStudio() {
    return (
        <>
            <SeoHead
                title="AI Studio"
                description="Interactive AI demos, prompt playbooks, and templates from bonInfer. Show don't tell — explore what AI can do for your team."
                canonical="https://boninfer.com/ai-studio"
            />

            <section className="bg-sand-50 pt-20 pb-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center">
                    <Reveal>
                        <h1 className="font-display text-5xl font-bold text-ink-950 mb-4">AI Studio</h1>
                    </Reveal>
                    <Reveal delay={100}>
                        <p className="text-lg text-ink-950/65 leading-relaxed">
                            Show, don't tell. Explore what AI can do for your specific context — interactively.
                        </p>
                    </Reveal>
                </div>
            </section>

            <section aria-label="AI Studio tools" className="pb-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                    {TOOLS.map((tool, i) => {
                        const Icon = tool.icon
                        return (
                            <Reveal key={tool.label} delay={i * 80}>
                                <article
                                    className={`rounded-2xl border border-ink-950/8 p-7 flex flex-col gap-5 h-full ${tool.disabled ? 'bg-sand-200/30 opacity-70' : 'bg-white/70 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300'
                                        }`}
                                    aria-label={tool.label}
                                >
                                    <div className="flex items-start justify-between">
                                        <div className="w-11 h-11 rounded-xl bg-pulse-500/10 flex items-center justify-center text-pulse-600">
                                            <Icon size={22} />
                                        </div>
                                        {tool.badge && (
                                            <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${tool.badge === 'Flagship'
                                                    ? 'bg-pulse-500 text-white'
                                                    : 'bg-sand-200 text-ink-950/50'
                                                }`}>
                                                {tool.badge}
                                            </span>
                                        )}
                                    </div>
                                    <div className="flex-1">
                                        <h2 className="font-display text-xl font-bold text-ink-950 mb-2">{tool.label}</h2>
                                        <p className="text-sm text-ink-950/65 leading-relaxed">{tool.desc}</p>
                                    </div>
                                    {tool.disabled ? (
                                        <span className="text-sm text-ink-950/30 font-medium">{tool.cta}</span>
                                    ) : (
                                        <Link
                                            to={tool.to}
                                            className="inline-flex items-center gap-1.5 text-sm font-semibold text-pulse-600 hover:text-pulse-700 transition-colors"
                                        >
                                            {tool.cta} <ArrowRight size={14} />
                                        </Link>
                                    )}
                                </article>
                            </Reveal>
                        )
                    })}
                </div>
            </section>
        </>
    )
}
