import { SeoHead } from '../lib/SeoHead.jsx'
import Reveal from '../components/story/Reveal.jsx'

export default function Terms() {
    return (
        <>
            <SeoHead title="Terms of Service" description="bonInfer Pvt Ltd terms of service." canonical="https://boninfer.com/terms" />
            <section className="bg-sand-50 pt-20 pb-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto prose-body">
                    <Reveal><h1 className="font-display text-4xl font-bold text-ink-950 mb-3">Terms of Service</h1></Reveal>
                    <Reveal delay={80}><p className="text-sm text-ink-950/45 mb-8">Last updated: February 2026</p></Reveal>
                    {[
                        { h: 'Use of this site', p: 'This website is provided for informational and demonstration purposes. By using this site, you agree not to misuse, scrape, or reverse-engineer any part of it.' },
                        { h: 'AI-generated content', p: 'Content produced by AI tools on this site (Opportunity Mapper outputs, Prompt Playbook examples) is clearly labelled as AI-generated and should be treated as a draft starting point only. bonInfer does not warrant the accuracy of AI-generated outputs.' },
                        { h: 'Intellectual property', p: 'All site content, design, and code are the property of bonInfer Pvt Ltd unless otherwise stated. Do not reproduce without permission.' },
                        { h: 'Limitation of liability', p: 'bonInfer is not liable for any indirect or consequential loss arising from use of this site or its AI tools. All outputs are provided for informational purposes only.' },
                        { h: 'Changes', p: 'We may update these terms from time to time. Continued use of the site after changes constitutes acceptance.' },
                        { h: 'Contact', p: 'For legal enquiries: legal@boninfer.com' },
                    ].map(({ h, p }, i) => (
                        <Reveal key={h} delay={i * 50}>
                            <div className="mb-7">
                                <h2 className="font-display text-xl font-bold text-ink-950 mb-2">{h}</h2>
                                <p className="text-ink-950/70 leading-relaxed text-sm">{p}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </section>
        </>
    )
}
