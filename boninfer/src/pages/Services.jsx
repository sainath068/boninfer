import { SeoHead } from '../lib/SeoHead.jsx'
import Reveal from '../components/story/Reveal.jsx'
import ServiceCard from '../components/site/ServiceCard.jsx'
import { services } from '../content/services.js'
import { Link } from 'react-router-dom'

export default function Services() {
    return (
        <>
            <SeoHead
                title="AI Services"
                description="Seven AI-first services from strategy to governance. bonInfer bridges business goals and real engineering to deliver AI that holds up in production."
                canonical="https://boninfer.com/services"
            />

            {/* Hero */}
            <section className="bg-sand-50 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <Reveal>
                        <h1 className="font-display text-5xl font-bold text-ink-950 mb-4">
                            Your growth partner in AI strategy, systems, and governance.
                        </h1>
                    </Reveal>
                    <Reveal delay={100}>
                        <p className="text-lg text-ink-950/65 leading-relaxed max-w-[52ch] mx-auto">
                            We bridge business goals and real engineering to deliver AI that holds up in production.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* Services Grid */}
            <section aria-label="Service catalog" className="bg-sand-50 pb-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service) => (
                        <ServiceCard key={service.slug} service={service} />
                    ))}
                </div>
            </section>

            {/* CTA strip */}
            <section className="bg-sand-200/50 py-16 text-center px-4">
                <Reveal>
                    <h2 className="font-display text-2xl font-bold text-ink-950 mb-3">
                        Not sure where to start?
                    </h2>
                </Reveal>
                <Reveal delay={100}>
                    <p className="text-ink-950/65 mb-6 text-sm">Our Opportunity Mapper will show you the highest-value AI plays in your context.</p>
                </Reveal>
                <Reveal delay={180}>
                    <Link
                        to="/ai-studio/opportunity-mapper"
                        className="inline-block px-6 py-3 bg-pulse-500 text-white font-semibold rounded-xl hover:bg-pulse-600 transition-colors"
                    >
                        Run the Opportunity Mapper →
                    </Link>
                </Reveal>
            </section>
        </>
    )
}
