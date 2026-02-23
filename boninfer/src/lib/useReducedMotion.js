import { useState, useEffect } from 'react'

const STORAGE_KEY = 'boninfer:reducedMotion'

/**
 * Reads OS `prefers-reduced-motion` AND a manual localStorage toggle.
 * Either source being true means motion is reduced.
 *
 * Returns:
 *   prefersReduced {boolean}  — combined state
 *   setReduced     {function} — manual override setter
 */
export function useReducedMotion() {
    const getOsPreference = () =>
        typeof window !== 'undefined'
            ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
            : false

    const getStoredOverride = () => {
        try {
            const stored = localStorage.getItem(STORAGE_KEY)
            if (stored === null) return null
            return stored === 'true'
        } catch {
            return null
        }
    }

    const [osReduced, setOsReduced] = useState(getOsPreference)
    const [manualOverride, setManualOverride] = useState(getStoredOverride)

    // Listen for OS-level changes
    useEffect(() => {
        const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
        const handler = (e) => setOsReduced(e.matches)
        mq.addEventListener('change', handler)
        return () => mq.removeEventListener('change', handler)
    }, [])

    const setReduced = (value) => {
        setManualOverride(value)
        try {
            if (value === null) {
                localStorage.removeItem(STORAGE_KEY)
            } else {
                localStorage.setItem(STORAGE_KEY, String(value))
            }
        } catch {
            // ignore storage errors
        }
    }

    // Manual override takes precedence; fall back to OS
    const prefersReduced = manualOverride !== null ? manualOverride : osReduced

    return { prefersReduced, setReduced, osReduced }
}
