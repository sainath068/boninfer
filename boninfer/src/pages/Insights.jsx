import { SeoHead } from '../lib/SeoHead.jsx'
import Reveal from '../components/story/Reveal.jsx'
import { Link } from 'react-router-dom'
import { BookOpen } from 'lucide-react'

const PLACEHOLDER_ARTICLES = [
    { slug: 'why-rag-systems-fail', title: 'Why RAG Systems Fail in Production', date: 'Feb 2026', tag: 'Engineering', reading: '6 min' },
    { slug: 'ai-governance-not-checkbox', title: 'AI Governance Isn\'t a Checkbox', date: 'Jan 2026', tag: 'Governance', reading: '4 min' },
    { slug: 'opportunity-mapping-framework', title: 'Our Framework for Mapping AI Opportunities', date: 'Dec 2025', tag: 'Strategy', reading: '5 min' },
]

export default function Insights() {
    return (
        <>
            <SeoHead
                title="Insights"
                description="Articles, POVs, and frameworks from bonInfer on responsible AI, engineering, and strategy."
                canonical="https://boninfer.com/insights"
            />
            <section className="bg-sand-50 pt-20 pb-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <Reveal>
                        <h1 className="font-display text-5xl font-bold text-ink-950 mb-4">Insights</h1>
                    </Reveal>
                    <Reveal delay={100}>
                        <p className="text-ink-950/65 text-lg leading-relaxed mb-12">How we think about AI strategy, systems, and governance.</p>
                    </Reveal>
                    <div className="space-y-6">
                        {PLACEHOLDER_ARTICLES.map((a, i) => (
                            <Reveal key={a.slug} delay={i * 70}>
                                <article className="flex gap-5 p-5 rounded-2xl border border-ink-950/8 bg-white/60 hover:shadow-card transition-shadow">
                                    <div className="w-10 h-10 rounded-xl bg-sand-200 flex items-center justify-center text-ink-950/40 shrink-0 mt-0.5">
                                        <BookOpen size={18} />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-xs font-medium bg-sand-200 text-ink-950/50 px-2 py-0.5 rounded-full">{a.tag}</span>
                                            <span className="text-xs text-ink-950/35">{a.date} · {a.reading} read</span>
                                        </div>
                                        <h2 className="font-display text-lg font-bold text-ink-950">{a.title}</h2>
                                    </div>
                                </article>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
