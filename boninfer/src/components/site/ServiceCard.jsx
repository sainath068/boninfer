import { Link } from 'react-router-dom'
import * as Icons from 'lucide-react'
import { cn } from '../../lib/utils.js'
import Reveal from '../story/Reveal.jsx'

export default function ServiceCard({ service, className }) {
    const { slug, title, tagline, description, icon } = service
    const IconComponent = Icons[icon] || Icons.Sparkles

    return (
        <Reveal>
            <article
                className={cn('glass-card rounded-2xl flex flex-col gap-5 p-6 h-full cursor-default', className)}
                aria-label={`Service: ${title}`}
            >
                {/* Icon */}
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-pulse-500/15 to-pulse-400/5 flex items-center justify-center text-pulse-600 shrink-0 transition-transform duration-300 group-hover:scale-110">
                    <IconComponent size={20} />
                </div>

                {/* Content */}
                <div className="flex-1">
                    <h3 className="font-display text-[1.1rem] font-bold text-ink-950 leading-snug mb-1">{title}</h3>
                    <p className="text-[11px] font-semibold uppercase tracking-widest text-pulse-600 mb-3">{tagline}</p>
                    <p className="text-[13px] text-ink-950/65 leading-relaxed line-clamp-3">{description}</p>
                </div>

                {/* Footer links */}
                <div className="flex items-center gap-5 pt-2 border-t border-ink-950/5">
                    <Link
                        to={`/services/${slug}`}
                        className="text-[13px] font-semibold text-pulse-600 hover:text-pulse-700 flex items-center gap-1 transition-all duration-200 hover:gap-2"
                        aria-label={`Explore ${title}`}
                    >
                        Explore <span aria-hidden="true">→</span>
                    </Link>
                    <Link
                        to="/contact"
                        className="text-[13px] text-ink-950/40 hover:text-ink-950/70 transition-colors duration-200"
                    >
                        Talk to us
                    </Link>
                </div>
            </article>
        </Reveal>
    )
}
