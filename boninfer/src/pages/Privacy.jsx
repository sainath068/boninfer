import { SeoHead } from '../lib/SeoHead.jsx'
import Reveal from '../components/story/Reveal.jsx'

export default function Privacy() {
    return (
        <>
            <SeoHead title="Privacy Policy" description="bonInfer Pvt Ltd privacy policy — what data we collect, how we use it, and your rights." canonical="https://boninfer.com/privacy" />
            <section className="bg-sand-50 pt-20 pb-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto prose-body">
                    <Reveal><h1 className="font-display text-4xl font-bold text-ink-950 mb-3">Privacy Policy</h1></Reveal>
                    <Reveal delay={80}><p className="text-sm text-ink-950/45 mb-8">Last updated: February 2026</p></Reveal>
                    {[
                        { h: 'What we collect', p: 'We collect information you provide directly (contact form submissions, Opportunity Mapper inputs). We may also collect standard access logs (IP address, browser type, page visited) for security and performance purposes.' },
                        { h: 'How we use it', p: 'Contact submissions are used to respond to your enquiry. Opportunity Mapper inputs are processed in-session only and are not stored. We do not sell or share personal data with third parties for marketing.' },
                        { h: 'Cookies & analytics', p: 'We use privacy-respecting analytics. We do not use cross-site tracking cookies or fingerprinting. You can disable cookies in your browser settings.' },
                        { h: 'Data retention', p: 'Contact form data is retained for up to 24 months or until you request deletion. Session data (Mapper inputs) is not persisted.' },
                        { h: 'Your rights', p: 'You may request access to, correction of, or deletion of your personal data at any time. Email privacy@boninfer.com and we will respond within 30 days.' },
                        { h: 'Contact', p: 'For privacy enquiries: privacy@boninfer.com' },
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
