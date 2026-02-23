import { SeoHead } from '../lib/SeoHead.jsx'
import CaseVignetteCard from '../components/story/CaseVignetteCard.jsx'
import Reveal from '../components/story/Reveal.jsx'
import { cases } from '../content/cases.js'
import { Link } from 'react-router-dom'

export default function Work() {
    return (
        <>
            <SeoHead
                title="Our Work"
                description="Real AI systems. Measurable outcomes. Read bonInfer case studies: RAG support deflection, finance agents, policy Q&A with governance logging."
                canonical="https://boninfer.com/work"
            />

            <section className="bg-sand-50 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center">
                    <Reveal>
                        <h1 className="font-display text-5xl font-bold text-ink-950 mb-4">Real systems. Measured outcomes.</h1>
                    </Reveal>
                    <Reveal delay={100}>
                        <p className="text-ink-950/65 text-lg leading-relaxed">
                            We label our results clearly. "Measured" means validated in production. "Target" means the goal we designed toward.
                        </p>
                    </Reveal>
                </div>
            </section>

            <section aria-label="Case studies" className="bg-sand-50 pb-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                    {cases.map((c) => (
                        <CaseVignetteCard key={c.id} caseData={c} />
                    ))}
                </div>
            </section>

            <section className="bg-ink-950 py-20 text-center px-4">
                <Reveal>
                    <h2 className="font-display text-3xl font-bold text-sand-50 mb-3">Start your story</h2>
                </Reveal>
                <Reveal delay={100}>
                    <p className="text-sand-50/55 mb-6 text-sm">Let's map your AI opportunity and build something you can measure.</p>
                </Reveal>
                <Link to="/contact" className="px-6 py-3 bg-pulse-500 text-white font-semibold rounded-xl hover:bg-pulse-600 transition-colors">
                    Contact us
                </Link>
            </section>
        </>
    )
}
