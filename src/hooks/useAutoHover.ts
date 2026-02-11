'use client'

import { useState, useEffect, RefObject } from 'react'

export function useAutoHover(ref: RefObject<HTMLElement | null>, threshold: number = 0.7) {
    const [isAutoHovered, setIsAutoHovered] = useState(false)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768)
        }

        checkMobile()
        window.addEventListener('resize', checkMobile)

        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    useEffect(() => {
        if (!isMobile || !ref.current) {
            setIsAutoHovered(false)
            return
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                // If the element is mostly in the center of the viewport
                setIsAutoHovered(entry.isIntersecting)
            },
            {
                threshold: threshold,
                rootMargin: '-10% 0px -10% 0px' // Focus on the middle 80% of the screen
            }
        )

        observer.observe(ref.current)

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current)
            }
        }
    }, [isMobile, ref, threshold])

    return { isAutoHovered, isMobile }
}
