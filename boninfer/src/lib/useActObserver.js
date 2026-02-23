import { useState, useCallback, useRef, useEffect } from 'react'

/**
 * Observes a list of act section IDs using IntersectionObserver.
 * When an act enters the viewport (threshold 0.4), it:
 *  - sets it as the active act ID
 *  - updates URL hash via history.replaceState (no scroll jump)
 *
 * @param {string[]} actIds  — ordered list of element IDs
 * @returns {{ activeId: string }}
 */
export function useActObserver(actIds) {
    const [activeId, setActiveId] = useState(actIds[0] || '')
    const observerRef = useRef(null)

    const handleIntersect = useCallback(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const id = entry.target.id
                    setActiveId(id)
                    if (history.replaceState) {
                        history.replaceState(null, '', `#${id}`)
                    }
                }
            })
        },
        []
    )

    useEffect(() => {
        observerRef.current = new IntersectionObserver(handleIntersect, {
            root: null,
            rootMargin: '-30% 0px -30% 0px',
            threshold: 0,
        })

        actIds.forEach((id) => {
            const el = document.getElementById(id)
            if (el) observerRef.current.observe(el)
        })

        return () => {
            if (observerRef.current) observerRef.current.disconnect()
        }
    }, [actIds, handleIntersect])

    return { activeId }
}
