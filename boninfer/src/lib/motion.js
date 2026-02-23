/**
 * Motion level constants and animation timing tokens.
 * Consumed by Reveal.jsx, ActLayout, and GSAP scenes.
 */

export const MOTION_LEVELS = {
    cinematic: 'cinematic',  // desktop, high-end — GSAP pinned scene
    standard: 'standard',    // default CSS + Framer Motion reveals
    reduced: 'reduced',      // prefers-reduced-motion OR manual toggle
}

export const DURATION = {
    fast: 0.15,
    base: 0.3,
    slow: 0.6,
    cinematic: 1.0,
}

export const EASING = {
    outExpo: [0.16, 1, 0.3, 1],
    outCubic: [0.33, 1, 0.68, 1],
    inOutQuad: [0.45, 0, 0.55, 1],
}

/** Framer Motion variants for fade-in-up reveals */
export const fadeUpVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: DURATION.slow,
            ease: EASING.outExpo,
            delay,
        },
    }),
}

/** Framer Motion variants for fade-in */
export const fadeVariants = {
    hidden: { opacity: 0 },
    visible: (delay = 0) => ({
        opacity: 1,
        transition: { duration: DURATION.base, delay },
    }),
}

/** Framer Motion variants for stagger container */
export const staggerContainerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
}
