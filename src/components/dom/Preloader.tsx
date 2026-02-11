'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const messages = [
    "Initializing Structural Models...",
    "GIS Systems Online...",
    "Precision Engineering Sync...",
    "Syed Shafaat Ali Portfolio",
    "Calculating Spatial Data...",
    "Digital Intelligence Active"
]

export default function Preloader({ onComplete }: { onComplete: () => void }) {
    const [progress, setProgress] = useState(0)
    const [messageIndex, setMessageIndex] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(timer)
                    setTimeout(onComplete, 800) // Delay to let user see 100%
                    return 100
                }
                return prev + Math.floor(Math.random() * 5) + 2
            })
        }, 100)

        const messageTimer = setInterval(() => {
            setMessageIndex((prev) => (prev + 1) % messages.length)
        }, 800)

        return () => {
            clearInterval(timer)
            clearInterval(messageTimer)
        }
    }, [onComplete])

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ y: '-100%', opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-zinc-950"
        >
            {/* Background Grid Accent */}
            <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            <div className="relative z-10 w-full max-w-md px-8">
                <div className="flex flex-col items-center">
                    {/* Main Percentage */}
                    <div className="h-24 md:h-32 flex items-center justify-center">
                        <motion.h1
                            key={progress}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="font-mono font-black text-7xl md:text-9xl text-zinc-100 tracking-tighter tabular-nums"
                        >
                            {Math.min(progress, 100)}%
                        </motion.h1>
                    </div>

                    {/* Animated Status Message */}
                    <div className="h-6 overflow-hidden mb-8">
                        <AnimatePresence mode="wait">
                            <motion.p
                                key={messageIndex}
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -20, opacity: 0 }}
                                className="font-mono text-[10px] text-blue-500 uppercase tracking-widest text-center"
                            >
                                {messages[messageIndex]}
                            </motion.p>
                        </AnimatePresence>
                    </div>

                    {/* Progress Bar Container */}
                    <div className="w-full h-[1px] bg-zinc-800 relative overflow-hidden">
                        <motion.div
                            style={{ width: `${progress}%` }}
                            className="absolute top-0 left-0 h-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)]"
                        />
                    </div>

                    <div className="w-full flex justify-between mt-2 font-mono text-[8px] text-zinc-600 uppercase tracking-tighter">
                        <span>Loading Core Assets</span>
                        <span>Version 2.0.24</span>
                    </div>
                </div>
            </div>

            {/* Aesthetic Accents */}
            <div className="absolute top-8 left-8 font-mono text-[9px] text-zinc-700 tracking-widest uppercase">
                Establishing Link...
            </div>
            <div className="absolute bottom-8 right-8 font-mono text-[9px] text-zinc-700 tracking-widest uppercase">
                © S. Shafaat Ali Portfolio
            </div>
        </motion.div>
    )
}
