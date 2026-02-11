'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { clsx } from 'clsx'

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [isPointer, setIsPointer] = useState(false)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768)
        }
        checkMobile()
        window.addEventListener('resize', checkMobile)

        const handleMouseMove = (e: MouseEvent) => {
            if (window.innerWidth < 768) return;
            setPosition({ x: e.clientX, y: e.clientY })

            const target = e.target as HTMLElement
            const isClickable = window.getComputedStyle(target).cursor === 'pointer' || target.tagName === 'A' || target.tagName === 'BUTTON'
            setIsPointer(isClickable)
        }

        window.addEventListener('mousemove', handleMouseMove)
        return () => {
            window.removeEventListener('resize', checkMobile)
            window.removeEventListener('mousemove', handleMouseMove)
        }
    }, [])

    if (isMobile) return null;

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 w-4 h-4 rounded-full bg-blue-500 mix-blend-difference pointer-events-none z-[9999]"
                animate={{ x: position.x - 8, y: position.y - 8, scale: isPointer ? 1.5 : 1 }}
                transition={{ type: "spring", stiffness: 100, damping: 20, mass: 0.5 }}
            />
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 rounded-full border border-blue-500 mix-blend-difference pointer-events-none z-[9999]"
                animate={{ x: position.x - 16, y: position.y - 16, scale: isPointer ? 1.5 : 1 }}
                transition={{ type: "spring", stiffness: 50, damping: 20, mass: 0.8 }}
            />
        </>
    )
}
