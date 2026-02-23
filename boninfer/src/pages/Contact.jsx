import { useState } from 'react'
import { SeoHead } from '../lib/SeoHead.jsx'
import Reveal from '../components/story/Reveal.jsx'
import { Mail, Calendar } from 'lucide-react'

const INITIAL = { name: '', email: '', company: '', message: '' }

export default function Contact() {
    const [form, setForm] = useState(INITIAL)
    const [errors, setErrors] = useState({})
    const [sent, setSent] = useState(false)

    const set = (k, v) => setForm((f) => ({ ...f, [k]: v }))

    const validate = () => {
        const e = {}
        if (!form.name.trim()) e.name = 'Name is required.'
        if (!form.email.trim()) e.email = 'Email is required.'
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email address.'
        if (!form.message.trim()) e.message = 'Message is required.'
        return e
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const errs = validate()
        setErrors(errs)
        if (Object.keys(errs).length === 0) setSent(true)
    }

    return (
        <>
            <SeoHead
                title="Contact"
                description="Book a scoping call with bonInfer or drop us a message. We respond within 1 business day."
                canonical="https://boninfer.com/contact"
            />

            <section className="bg-sand-50 pt-20 pb-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">

                    {/* Info column */}
                    <div>
                        <Reveal>
                            <h1 className="font-display text-5xl font-bold text-ink-950 mb-4">Let's talk</h1>
                        </Reveal>
                        <Reveal delay={100}>
                            <p className="text-ink-950/65 leading-relaxed mb-10">
                                Bring a problem. We'll map the opportunity, the system, and the governance plan—then help you deliver.
                            </p>
                        </Reveal>

                        <div className="space-y-5">
                            <Reveal delay={160}>
                                <a
                                    href="mailto:hello@boninfer.com"
                                    className="flex items-center gap-3 group"
                                    aria-label="Email bonInfer"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-pulse-500/10 flex items-center justify-center text-pulse-600">
                                        <Mail size={18} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-ink-950/40 mb-0.5">Email</p>
                                        <p className="text-sm font-medium text-pulse-600 group-hover:text-pulse-700 transition-colors">
                                            hello@boninfer.com
                                        </p>
                                    </div>
                                </a>
                            </Reveal>

                            <Reveal delay={220}>
                                <a
                                    href="#"
                                    aria-label="Book a scoping call (calendar link)"
                                    className="flex items-center gap-3 group"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-pulse-500/10 flex items-center justify-center text-pulse-600">
                                        <Calendar size={18} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-ink-950/40 mb-0.5">Calendar</p>
                                        <p className="text-sm font-medium text-pulse-600 group-hover:text-pulse-700 transition-colors">
                                            Book a scoping call →
                                        </p>
                                    </div>
                                </a>
                            </Reveal>
                        </div>

                        <Reveal delay={280}>
                            <div className="mt-10 p-5 rounded-xl bg-sand-200/50 border border-ink-950/6">
                                <p className="text-xs font-semibold text-ink-950/50 uppercase tracking-wider mb-2">Response time</p>
                                <p className="text-sm text-ink-950/70">We respond to all messages within 1 business day. For urgent needs, use the calendar link above.</p>
                            </div>
                        </Reveal>
                    </div>

                    {/* Form column */}
                    <Reveal direction="left">
                        {sent ? (
                            <div
                                role="status"
                                className="flex flex-col items-center justify-center h-full py-16 text-center"
                            >
                                <div className="w-14 h-14 rounded-full bg-pulse-500/10 flex items-center justify-center text-pulse-500 text-2xl mb-4">✓</div>
                                <h2 className="font-display text-2xl font-bold text-ink-950 mb-2">Message received.</h2>
                                <p className="text-ink-950/60 text-sm">We'll be in touch within 1 business day.</p>
                            </div>
                        ) : (
                            <form
                                onSubmit={handleSubmit}
                                noValidate
                                aria-label="Contact form"
                                className="space-y-5"
                            >
                                {/* Honeypot */}
                                <input type="text" name="_trap" tabIndex={-1} aria-hidden="true" className="hidden" />

                                {/* Name */}
                                <div>
                                    <label htmlFor="c-name" className="block text-sm font-medium text-ink-950/70 mb-1.5">
                                        Full name <span aria-hidden="true" className="text-pulse-500">*</span>
                                    </label>
                                    <input
                                        id="c-name" type="text" required aria-required="true"
                                        aria-describedby={errors.name ? 'c-name-err' : undefined}
                                        value={form.name} onChange={(e) => set('name', e.target.value)}
                                        placeholder="Jane Smith"
                                        className="w-full px-3 py-2.5 rounded-xl border border-ink-950/15 text-sm text-ink-950 bg-white placeholder-ink-950/30 focus:outline-none focus:border-pulse-500 transition-colors"
                                    />
                                    {errors.name && <p id="c-name-err" role="alert" className="mt-1 text-xs text-red-500">{errors.name}</p>}
                                </div>

                                {/* Email */}
                                <div>
                                    <label htmlFor="c-email" className="block text-sm font-medium text-ink-950/70 mb-1.5">
                                        Work email <span aria-hidden="true" className="text-pulse-500">*</span>
                                    </label>
                                    <input
                                        id="c-email" type="email" required aria-required="true"
                                        aria-describedby={errors.email ? 'c-email-err' : undefined}
                                        value={form.email} onChange={(e) => set('email', e.target.value)}
                                        placeholder="jane@company.com"
                                        className="w-full px-3 py-2.5 rounded-xl border border-ink-950/15 text-sm text-ink-950 bg-white placeholder-ink-950/30 focus:outline-none focus:border-pulse-500 transition-colors"
                                    />
                                    {errors.email && <p id="c-email-err" role="alert" className="mt-1 text-xs text-red-500">{errors.email}</p>}
                                </div>

                                {/* Company */}
                                <div>
                                    <label htmlFor="c-company" className="block text-sm font-medium text-ink-950/70 mb-1.5">Company</label>
                                    <input
                                        id="c-company" type="text"
                                        value={form.company} onChange={(e) => set('company', e.target.value)}
                                        placeholder="Acme Corp"
                                        className="w-full px-3 py-2.5 rounded-xl border border-ink-950/15 text-sm text-ink-950 bg-white placeholder-ink-950/30 focus:outline-none focus:border-pulse-500 transition-colors"
                                    />
                                </div>

                                {/* Message */}
                                <div>
                                    <label htmlFor="c-message" className="block text-sm font-medium text-ink-950/70 mb-1.5">
                                        What would you like to explore? <span aria-hidden="true" className="text-pulse-500">*</span>
                                    </label>
                                    <textarea
                                        id="c-message" required aria-required="true"
                                        aria-describedby={errors.message ? 'c-message-err' : undefined}
                                        rows={5} value={form.message} onChange={(e) => set('message', e.target.value)}
                                        placeholder="Describe your challenge, question, or project..."
                                        className="w-full px-3 py-2.5 rounded-xl border border-ink-950/15 text-sm text-ink-950 bg-white placeholder-ink-950/30 focus:outline-none focus:border-pulse-500 transition-colors resize-none"
                                    />
                                    {errors.message && <p id="c-message-err" role="alert" className="mt-1 text-xs text-red-500">{errors.message}</p>}
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-3 bg-pulse-500 text-white font-semibold rounded-xl hover:bg-pulse-600 transition-colors shadow-sm"
                                >
                                    Send message
                                </button>
                                <p className="text-xs text-ink-950/40 text-center">
                                    We respond within 1 business day. No spam, ever.
                                </p>
                            </form>
                        )}
                    </Reveal>
                </div>
            </section>
        </>
    )
}
