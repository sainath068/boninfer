import { SeoHead } from '../lib/SeoHead.jsx'
import Reveal from '../components/story/Reveal.jsx'
import { Link } from 'react-router-dom'

const VALUES = [
    { label: 'Story + Proof + Trust', desc: 'We don\'t just claim capability — we show workflow, output, and evidence.' },
    { label: 'Editorial calm', desc: 'No hype, no jargon. Clear language, honest metrics, deliberate design.' },
    { label: 'Governance first', desc: 'Responsible AI isn\'t a section we add at the end. It\'s how we design from the start.' },
]

export default function About() {
    return (
        <>
            <SeoHead
                title="About"
                description="bonInfer Pvt Ltd builds AI systems that move businesses — from strategy to agentic automation to responsible governance."
                canonical="https://boninfer.com/about"
            />
            <section className="bg-sand-50 pt-20 pb-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <Reveal>
                        <h1 className="font-display text-5xl font-bold text-ink-950 mb-6">About bonInfer</h1>
                    </Reveal>
                    <Reveal delay={100}>
                        <p className="text-lg text-ink-950/70 leading-relaxed mb-10">
                            bonInfer Pvt Ltd builds AI systems that move businesses—from strategy to agentic automation to MLOps reliability to responsible AI governance. We partner with leaders and product teams to design, ship, and govern AI responsibly.
                        </p>
                    </Reveal>
                    <div className="space-y-5 mb-12">
                        {VALUES.map((v, i) => (
                            <Reveal key={v.label} delay={i * 70}>
                                <div className="p-5 rounded-xl border border-ink-950/8 bg-white/60">
                                    <p className="font-semibold text-ink-950 mb-1">{v.label}</p>
                                    <p className="text-sm text-ink-950/65">{v.desc}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                    <Reveal delay={250}>
                        <Link to="/contact" className="inline-block px-6 py-3 bg-pulse-500 text-white font-semibold rounded-xl hover:bg-pulse-600 transition-colors">
                            Work with us
                        </Link>
                    </Reveal>
                </div>
            </section>
        </>
    )
}
