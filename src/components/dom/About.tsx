'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FileText, Map, Box } from 'lucide-react'

const features = [
    {
        title: 'Civil Engineering',
        icon: <Box className="w-5 h-5" />,
        description: 'Structural design, concrete supervision, and site management expertise.',
        skills: ['AutoCAD', 'Site Supervision', 'Concrete', 'Structure']
    },
    {
        title: 'GIS Specialist',
        icon: <Map className="w-5 h-5" />,
        description: 'Spatial data analysis and mapping using ArcMap 10.8 for environmental metrics.',
        skills: ['ArcMap 10.8', 'Spatial Data', 'Mapping', 'Analysis']
    },
    {
        title: 'Digital Architecture',
        icon: <FileText className="w-5 h-5" />,
        description: 'Bridging physical engineering with digital experiences and e-commerce.',
        skills: ['Next.js', 'React', 'Three.js', 'Amazon PL']
    }
]

import { useRef } from 'react'
import { useAutoHover } from '@/hooks/useAutoHover'

function FeatureCard({ feature, index }: { feature: any, index: number }) {
    const cardRef = useRef<HTMLDivElement>(null)
    const { isAutoHovered, isMobile } = useAutoHover(cardRef)

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className={`group relative p-6 bg-zinc-950/20 border transition-all duration-500 rounded-xl overflow-hidden ${isAutoHovered ? 'border-blue-500/50 bg-zinc-950/40' : 'border-zinc-800/50'} md:hover:border-blue-500/50 md:hover:bg-zinc-950/40`}
        >
            {/* Mobile Center Animation BG */}
            {isMobile && (
                <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
                    <div className={`w-0 h-0 bg-blue-500/5 rounded-full transition-all duration-700 ease-out ${isAutoHovered ? 'w-[200%] h-[200%]' : 'w-0 h-0'}`}></div>
                </div>
            )}

            <div className="flex items-start gap-4 relative z-10">
                <div className={`p-3 bg-zinc-900 rounded-lg transition-colors ${isAutoHovered ? 'text-blue-400 bg-blue-500/10' : 'text-zinc-400'} md:group-hover:text-blue-400 md:group-hover:bg-blue-500/10`}>
                    {feature.icon}
                </div>
                <div>
                    <h3 className="font-display text-xl text-zinc-200 mb-2">{feature.title}</h3>
                    <p className="font-mono text-xs text-zinc-500 leading-relaxed mb-4">
                        {feature.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                        {feature.skills.map((skill: string) => (
                            <span key={skill} className="text-[9px] text-zinc-600 font-mono tracking-wider uppercase flex items-center gap-1">
                                <span className="w-1 h-1 bg-zinc-800 rounded-full"></span>
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default function About() {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768)
        }
        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    return (
        <section id="about" className="relative min-h-screen py-32 px-6 md:px-24 overflow-hidden z-20">
            {/* Background Layer with visual separation */}
            <div className="absolute inset-0 bg-zinc-900/40 backdrop-blur-3xl -z-10"></div>
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent"></div>

            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    {/* Left: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            viewport={{ once: true }}
                            className="font-mono text-blue-500 text-[10px] uppercase tracking-[0.4em] mb-4 block"
                        >
                            Core Competencies
                        </motion.span>
                        <h2 className="font-display text-5xl md:text-7xl text-zinc-100 mb-8 leading-none font-bold uppercase tracking-tighter">
                            Engineering<br />
                            <span className="text-zinc-700">Foundations</span>
                        </h2>
                        <p className="font-mono text-zinc-400 max-w-xl text-sm md:text-base mb-16 leading-relaxed">
                            My background in Civil Engineering provides a unique perspective on structure and design. I apply the same rigorous standards of stability and functionality of the physical world to my digital creations.
                        </p>

                        <div className="grid grid-cols-1 gap-6">
                            {features.map((feature, index) => (
                                <FeatureCard key={index} feature={feature} index={index} />
                            ))}
                        </div>
                    </motion.div>


                    {/* Right: Image Visual with enhanced presentation */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="relative h-[500px] md:h-[700px] w-full group"
                    >
                        <div className="absolute -inset-4 bg-blue-500/5 rounded-[2rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                        <div className="relative h-full w-full rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl">
                            <div
                                className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 scale-105 group-hover:scale-100 ${isMobile ? 'grayscale-0' : 'grayscale'} group-hover:grayscale-0`}
                                style={{ backgroundImage: "url('/images/About Section  Personal Branding.jpeg')" }}
                            ></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent"></div>

                            {/* Overlay UI elements */}
                            <div className="absolute bottom-10 left-10 font-mono text-[10px] tracking-widest uppercase">
                                <div className="flex items-center gap-2 mb-2 text-zinc-400">
                                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                    System Status: Active
                                </div>
                                <div className="text-blue-500/80">Structural Integrity Validated</div>
                            </div>
                        </div>

                        {/* Decorative grid elements */}
                        <div className="absolute -top-6 -right-6 w-32 h-32 border-t border-r border-zinc-800/100 pointer-events-none"></div>
                        <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b border-l border-zinc-800/100 pointer-events-none"></div>
                    </motion.div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent"></div>
        </section>
    )
}
