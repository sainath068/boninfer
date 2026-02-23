import { useState } from 'react'
import { SeoHead } from '../lib/SeoHead.jsx'
import Reveal from '../components/story/Reveal.jsx'
import GovernanceBadge from '../components/ui/GovernanceBadge.jsx'
import { playbooks } from '../content/playbooks.js'
import { Copy, Check } from 'lucide-react'

const ROLES = ['All', 'CEO/Leadership', 'Product', 'Engineering', 'Operations', 'Compliance']

function PromptDemo({ playbook }) {
    const [activeTab, setActiveTab] = useState('prompt')
    const [copied, setCopied] = useState(false)

    const tabs = [
        { id: 'prompt', label: 'Prompt' },
        { id: 'output', label: 'Example output' },
        { id: 'evaluate', label: 'How to evaluate' },
    ]

    const copyPrompt = () => {
        navigator.clipboard.writeText(playbook.prompt).then(() => {
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        })
    }

    return (
        <Reveal>
            <article
                className="glass-card rounded-2xl overflow-hidden"
                aria-label={`Prompt playbook: ${playbook.title}`}
            >
                <div className="p-6 border-b border-ink-950/6">
                    <div className="flex items-start justify-between gap-3">
                        <div>
                            <span className="text-xs font-semibold uppercase tracking-wider text-pulse-500">{playbook.role}</span>
                            <h3 className="font-display text-xl font-bold text-ink-950 mt-1">{playbook.title}</h3>
                            <p className="text-sm text-ink-950/60 mt-1">{playbook.goal}</p>
                        </div>
                        <GovernanceBadge variant="ai-assisted" />
                    </div>

                    {/* Tabs */}
                    <div role="tablist" aria-label="Playbook sections" className="flex gap-1 mt-5 border-b border-ink-950/8">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                role="tab"
                                aria-selected={activeTab === tab.id}
                                aria-controls={`panel-${playbook.id}-${tab.id}`}
                                id={`tab-${playbook.id}-${tab.id}`}
                                onClick={() => setActiveTab(tab.id)}
                                onKeyDown={(e) => {
                                    const idx = tabs.findIndex((t) => t.id === activeTab)
                                    if (e.key === 'ArrowRight') setActiveTab(tabs[(idx + 1) % tabs.length].id)
                                    if (e.key === 'ArrowLeft') setActiveTab(tabs[(idx - 1 + tabs.length) % tabs.length].id)
                                }}
                                className={`px-3 py-2 text-xs font-medium rounded-t-md -mb-px transition-all duration-200 ${activeTab === tab.id
                                    ? 'border-b-2 border-pulse-500 text-pulse-600'
                                    : 'text-ink-950/45 hover:text-ink-950/80 hover:bg-sand-100/60'
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Tab panels */}
                <div className="p-6">
                    <div
                        id={`panel-${playbook.id}-prompt`}
                        role="tabpanel"
                        aria-labelledby={`tab-${playbook.id}-prompt`}
                        hidden={activeTab !== 'prompt'}
                    >
                        <div className="relative">
                            <pre className="text-xs font-mono bg-ink-950/4 text-ink-950/80 rounded-xl p-4 leading-relaxed overflow-x-auto whitespace-pre-wrap">
                                {playbook.prompt}
                            </pre>
                            <button
                                onClick={copyPrompt}
                                className="absolute top-3 right-3 flex items-center gap-1.5 text-xs bg-white/80 border border-ink-950/10 text-ink-950/60 hover:text-ink-950 rounded-lg px-2.5 py-1.5 transition-colors"
                                aria-label="Copy prompt template"
                            >
                                {copied ? <Check size={11} className="text-green-500" /> : <Copy size={11} />}
                                {copied ? 'Copied' : 'Copy'}
                            </button>
                        </div>
                    </div>

                    <div
                        id={`panel-${playbook.id}-output`}
                        role="tabpanel"
                        aria-labelledby={`tab-${playbook.id}-output`}
                        hidden={activeTab !== 'output'}
                    >
                        <div className="mb-3">
                            <p className="text-xs font-medium text-ink-950/40 mb-2">Example input used:</p>
                            <p className="text-xs text-ink-950/60 italic bg-sand-200/40 rounded-lg px-3 py-2">{playbook.exampleInput}</p>
                        </div>
                        <p className="text-xs font-medium text-ink-950/40 mb-2">Example output (AI-generated):</p>
                        <pre className="text-xs text-ink-950/75 bg-sand-50 border border-ink-950/6 rounded-xl p-4 leading-relaxed whitespace-pre-wrap overflow-x-auto">
                            {playbook.exampleOutput}
                        </pre>
                    </div>

                    <div
                        id={`panel-${playbook.id}-evaluate`}
                        role="tabpanel"
                        aria-labelledby={`tab-${playbook.id}-evaluate`}
                        hidden={activeTab !== 'evaluate'}
                    >
                        <p className="text-xs font-semibold uppercase tracking-wider text-ink-950/40 mb-3">How to evaluate this output</p>
                        <ul className="space-y-2">
                            {playbook.howToEvaluate.map((item) => (
                                <li key={item} className="flex items-start gap-2 text-sm text-ink-950/75">
                                    <span className="text-pulse-500 mt-0.5 shrink-0">✓</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </article>
        </Reveal>
    )
}

export default function PromptPlaybooks() {
    const [role, setRole] = useState('All')

    const filtered = role === 'All' ? playbooks : playbooks.filter((p) => p.role === role)

    return (
        <>
            <SeoHead
                title="Prompt Playbooks — AI Studio"
                description="Role-based prompt libraries for AI strategy, engineering, operations, and compliance teams. Each playbook includes a prompt template, example output, and evaluation checklist."
                canonical="https://boninfer.com/ai-studio/prompt-playbooks"
            />

            <section className="bg-sand-50 pt-20 pb-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center">
                    <Reveal>
                        <h1 className="font-display text-5xl font-bold text-ink-950 mb-3">Prompt Playbooks</h1>
                    </Reveal>
                    <Reveal delay={100}>
                        <p className="text-ink-950/65 text-lg leading-relaxed">
                            Curated prompt patterns by role. Each playbook includes a template, an example output, and an evaluation checklist.
                        </p>
                    </Reveal>
                </div>
            </section>

            <section className="pb-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    {/* Role filter tabs */}
                    <div
                        role="tablist"
                        aria-label="Filter by role"
                        className="flex flex-wrap gap-2 mb-10 border-b border-ink-950/8 pb-4"
                    >
                        {ROLES.map((r) => (
                            <button
                                key={r}
                                role="tab"
                                aria-selected={role === r}
                                onClick={() => setRole(r)}
                                onKeyDown={(e) => {
                                    const idx = ROLES.indexOf(role)
                                    if (e.key === 'ArrowRight') setRole(ROLES[(idx + 1) % ROLES.length])
                                    if (e.key === 'ArrowLeft') setRole(ROLES[(idx - 1 + ROLES.length) % ROLES.length])
                                }}
                                className={`pill-tab px-4 py-1.5 rounded-full text-sm font-medium border ${role === r
                                    ? 'bg-pulse-500 border-pulse-500 text-white shadow-sm'
                                    : 'border-ink-950/12 text-ink-950/55 hover:border-pulse-500/40 hover:text-pulse-600 hover:bg-pulse-500/5'
                                    }`}
                            >
                                {r}
                            </button>
                        ))}
                    </div>

                    <div className="space-y-6">
                        {filtered.map((p) => (
                            <PromptDemo key={p.id} playbook={p} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
