'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useAutoHover } from '@/hooks/useAutoHover'
import { Briefcase, Calendar, MapPin } from 'lucide-react'

const jobs = [
    {
        company: 'GIS Specialist',
        role: 'Spatial Data Analyst',
        period: 'Jul 2024 - Present',
        location: 'Geoinformatic, Rawalpindi',
        description: 'Lead spatial data precision initiatives using ArcMap 10.8. Spearheaded environmental metric analysis and established rigorous data reporting standards for engineering projects.'
    },
    {
        company: 'Amazon Private Label',
        role: 'E-Commerce Manager',
        period: 'Mar 2024 - Jul 2024',
        location: 'Remote',
        description: 'Orchestrated full product lifecycles from stealth research to market launch. Engineered SEO-driven listing optimizations and managed a global supply chain network.'
    },
    {
        company: 'Ovisco Builders',
        role: 'Civil Engineer',
        period: 'Aug 2023 - Dec 2023',
        location: 'Rawalpindi',
        description: 'Managed critical infrastructure developments. Supervised concrete engineering, utility deployment, and enforced uncompromising structural integrity protocols.'
    }
]

function ExperienceCard({ job, index }: { job: any, index: number }) {
    const cardRef = useRef<HTMLDivElement>(null)
    const { isAutoHovered, isMobile } = useAutoHover(cardRef)

    return (
        <div className="relative pl-12 md:pl-0">
            {/* Timeline Connectors */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-zinc-900 md:-translate-x-1/2 hidden md:block group-last:bottom-auto group-last:h-8"></div>

            <div
                ref={cardRef}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center w-full mb-16 md:mb-24 group`}
            >
                {/* Content Card */}
                <div className="w-full md:w-[45%] text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 30, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                        className={`p-8 rounded-3xl border border-zinc-800/50 bg-zinc-900/30 backdrop-blur-xl transition-all duration-500 ${isAutoHovered ? 'border-blue-500/50 shadow-[0_0_30px_rgba(59,130,246,0.1)]' : ''} group-hover:border-zinc-700`}
                    >
                        <div className="flex items-center gap-3 mb-4 justify-start">
                            <span className="font-mono text-[10px] text-blue-500 uppercase tracking-widest bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                                {job.period}
                            </span>
                        </div>

                        <h3 className="font-display text-2xl md:text-3xl text-zinc-100 mb-2 font-bold tracking-tight">
                            {job.company}
                        </h3>

                        <div className="flex items-center gap-2 mb-6 font-mono text-xs text-zinc-400 uppercase tracking-widest justify-start">
                            <Briefcase className="w-3 h-3 text-blue-400" />
                            <span className="text-blue-400 font-bold">{job.role}</span>
                        </div>

                        <p className="text-zinc-400 text-sm leading-relaxed mb-6 text-left">
                            {job.description}
                        </p>

                        <div className="flex items-center gap-4 justify-start">
                            <div className="flex items-center gap-1 text-[10px] font-mono text-zinc-600 uppercase">
                                <MapPin className="w-3 h-3" />
                                {job.location}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Center Node */}
                <div className="absolute left-[2px] md:left-1/2 top-4 md:top-1/2 w-4 h-4 rounded-full border-4 border-zinc-950 bg-blue-500 z-10 md:-translate-x-1/2 md:-translate-y-1/2 shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-500 group-hover:scale-150 group-hover:shadow-[0_0_25px_rgba(59,130,246,0.8)]">
                    <div className="absolute inset-0 animate-ping rounded-full bg-blue-500 opacity-20"></div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block md:w-[45%]"></div>
            </div>
        </div>
    )
}

export default function Experience() {
    return (
        <section id="experience" className="min-h-screen py-32 px-6 md:px-12 relative z-10 bg-zinc-950 overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-zinc-500/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="mb-24 text-center md:text-left">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="flex flex-col"
                    >
                        <span className="font-mono text-blue-500 text-xs tracking-[0.5em] uppercase mb-4 block">Journey</span>
                        <h2 className="font-display font-black text-[clamp(2.5rem,10vw,8rem)] leading-[0.8] tracking-tighter uppercase select-none flex flex-col items-center md:items-start">
                            <span className="text-zinc-100">Professional</span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-b from-zinc-400 to-zinc-700 -mt-1 md:-mt-2">Timeline</span>
                        </h2>
                    </motion.div>
                </div>

                {/* Timeline Layout */}
                <div className="relative mt-20">
                    {/* Central Line */}
                    <div className="absolute left-[10px] md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-zinc-800 to-transparent md:-translate-x-1/2"></div>

                    <div className="space-y-4">
                        {jobs.map((job, index) => (
                            <ExperienceCard key={index} job={job} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

