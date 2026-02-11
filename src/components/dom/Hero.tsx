'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import gsap from 'gsap'

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null)
    const titleRef = useRef<HTMLHeadingElement>(null)
    const line1Ref = useRef<HTMLSpanElement>(null)
    const line2Ref = useRef<HTMLSpanElement>(null)
    const line3Ref = useRef<HTMLSpanElement>(null)
    const subtextRef = useRef<HTMLDivElement>(null)
    const badgeRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                defaults: { ease: 'power3.out', duration: 1.5 },
                onComplete: () => {
                    // Remove overflow-hidden once intro is done to allow floating/glows
                    gsap.set('.line-wrapper', { overflow: 'visible' })
                }
            })

            // Badge Reveal
            tl.from(badgeRef.current, {
                y: -20,
                opacity: 0,
                filter: 'blur(10px)',
                duration: 1.2
            })

            // Title Reveal (Lines) - Staggered & Powerful
            tl.from([line1Ref.current, line2Ref.current, line3Ref.current], {
                y: 100,
                opacity: 0,
                rotateX: -20,
                filter: 'blur(20px)',
                stagger: 0.1,
                duration: 1.8,
                ease: 'expo.out'
            }, '-=0.8')

            // Subtext Reveal
            tl.from(subtextRef.current, {
                y: 20,
                opacity: 0,
                filter: 'blur(5px)',
                duration: 1
            }, '-=1.2')

        }, containerRef)

        return () => ctx.revert()
    }, [])

    return (
        <section
            id="hero"
            ref={containerRef}
            className="relative h-screen w-full flex flex-col items-center justify-center z-10 overflow-hidden bg-transparent perspective-1000"
        >
            <div className="w-full max-w-[90vw] md:max-w-7xl flex flex-col items-center justify-center text-center gap-6 md:gap-10">

                {/* Badge */}
                <div ref={badgeRef} className="z-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-5 md:py-2 rounded-full border border-zinc-800 bg-zinc-900/30 backdrop-blur-md">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        <span className="font-mono text-[10px] md:text-xs text-zinc-300 tracking-wider uppercase">
                            Available for New Projects
                        </span>
                    </div>
                </div>

                {/* Main Heading */}
                <h1 ref={titleRef} className="flex flex-col items-center leading-[0.8] md:leading-[0.85] font-black tracking-tighter uppercase select-none">
                    {/* Line 1 */}
                    <div className="line-wrapper overflow-hidden py-4 md:py-8">
                        <span
                            ref={line1Ref}
                            className="block text-[clamp(4rem,14vw,11rem)] text-transparent bg-clip-text bg-gradient-to-b from-zinc-200 to-zinc-500"
                        >
                            SYED
                        </span>
                    </div>
                    {/* Line 2 - Accent */}
                    <div className="line-wrapper overflow-hidden py-4 md:py-8 -mt-6 md:-mt-12">
                        <span
                            ref={line2Ref}
                            className="block text-[clamp(4rem,14vw,11rem)] text-blue-600 mix-blend-difference text-accent-glow"
                        >
                            SHAFAAT
                        </span>
                    </div>
                    {/* Line 3 */}
                    <div className="line-wrapper overflow-hidden py-4 md:py-8 -mt-6 md:-mt-12">
                        <span
                            ref={line3Ref}
                            className="block text-[clamp(4rem,14vw,11rem)] text-transparent bg-clip-text bg-gradient-to-b from-zinc-200 to-zinc-500"
                        >
                            ALI
                        </span>
                    </div>
                </h1>

                {/* Subtext description */}
                <div ref={subtextRef} className="mt-4 md:mt-8 max-w-lg mx-auto">
                    <p className="font-mono text-xs md:text-sm text-zinc-400 text-center leading-relaxed">
                        Senior Civil Engineer & GIS Specialist merging <span className="text-zinc-100">structural precision</span> with <span className="text-blue-400">digital intelligence</span>.
                    </p>
                </div>

            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.5, duration: 1.5 }}
                className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20 mix-blend-difference"
            >
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">Scroll</span>
                <motion.div
                    animate={{ y: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                >
                    <ArrowDown className="w-4 h-4 text-zinc-500" />
                </motion.div>
            </motion.div>
        </section>
    )
}

