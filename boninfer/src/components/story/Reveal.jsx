import { useRef, useEffect, useState } from 'react'
import { useMotion } from '../../app/Router.jsx'
import { cn } from '../../lib/utils.js'

/**
 * IntersectionObserver scroll-reveal with expo easing.
 * When prefersReduced = true → shows content immediately with no motion.
 *
 * Props:
 *   direction: 'up' | 'down' | 'left' | 'right' | 'none'
 *   delay:  number (ms) — stagger offset
 *   once:   boolean — disconnect observer after first trigger (default true)
 */
export default function Reveal({
    children,
    direction = 'up',
    delay = 0,
    once = true,
    threshold = 0.08,
    rootMargin = '0px 0px -48px 0px',
    className,
}) {
    const { prefersReduced } = useMotion()
    const ref = useRef(null)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        if (prefersReduced) {
            setVisible(true)
            return
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true)
                    if (once) observer.disconnect()
                }
            },
            { threshold, rootMargin }
        )

        const el = ref.current
        if (el) observer.observe(el)
        return () => observer.disconnect()
    }, [prefersReduced, once, threshold, rootMargin])

    /* Initial hidden transform per direction */
    const hiddenStyles = {
        up: { opacity: 0, transform: 'translateY(28px)' },
        down: { opacity: 0, transform: 'translateY(-28px)' },
        left: { opacity: 0, transform: 'translateX(-28px)' },
        right: { opacity: 0, transform: 'translateX(28px)' },
        none: { opacity: 0 },
    }
    const initial = hiddenStyles[direction] || hiddenStyles.up

    return (
        <div
            ref={ref}
            className={cn('will-change-transform', className)}
            style={
                visible
                    ? {
                        opacity: 1,
                        transform: 'translate(0,0)',
                        transition: `
                opacity 0.65s cubic-bezier(0.16,1,0.3,1) ${delay}ms,
                transform 0.65s cubic-bezier(0.16,1,0.3,1) ${delay}ms
              `,
                    }
                    : {
                        ...initial,
                        transition: 'none',
                    }
            }
        >
            {children}
        </div>
    )
}
