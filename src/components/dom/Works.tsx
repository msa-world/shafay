'use client'

import { motion } from 'framer-motion'

const projects = [
    {
        title: 'Ovisco Builders',
        role: 'Civil Engineer',
        period: '2023',
        description: 'Supervised site activities including excavation, grading, and concrete pouring. Monitored progress against rigorous schedules.',
        stats: ['Site Supervision', 'Utility Installation', 'Project Management'],
        image: '/images/Ovisco Builders (ConstructionEngineering).jpeg'
    },
    {
        title: 'Amazon Private Label',
        role: 'E-Commerce Manager',
        period: '2024',
        description: 'Managed inventory, optimized listings, and coordinated with suppliers for a private label brand.',
        stats: ['Inventory Mgmt', 'Listing Optimization', 'Supplier Relations'],
        image: '/images/Amazon Private Label.jpeg'
    },
    {
        title: 'GIS Mapping Initiative',
        role: 'GIS Specialist',
        period: '2024 - Present',
        description: 'Collected and maintained spatial data using ArcMap 10.8. Analyzed environmental data for reporting.',
        stats: ['ArcMap 10.8', 'Spatial Analysis', 'Data Collection'],
        image: '/images/GIS Specialist.jpeg'
    }
]

import { useRef } from 'react'
import { useAutoHover } from '@/hooks/useAutoHover'

function ProjectCard({ project, index }: { project: any, index: number }) {
    const cardRef = useRef<HTMLDivElement>(null)
    const { isAutoHovered, isMobile } = useAutoHover(cardRef)

    const isHovered = isMobile ? isAutoHovered : undefined

    return (
        <div
            ref={cardRef}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center group/project relative"
        >
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={`order-2 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'} relative z-10`}
            >
                <div className="flex items-center gap-4 mb-6">
                    <span className="text-blue-500 font-mono text-xs tracking-widest">{project.period}</span>
                    <div className="h-[1px] w-12 bg-zinc-800"></div>
                    <span className="text-zinc-500 font-mono text-xs tracking-widest uppercase">{project.role}</span>
                </div>
                <h3 className={`font-display text-4xl md:text-5xl mb-6 transition-colors duration-500 ${isAutoHovered ? 'text-blue-400' : 'text-zinc-100'} md:group-hover/project:text-blue-400`}>
                    {project.title}
                </h3>
                <p className="font-mono text-zinc-400 text-sm leading-relaxed mb-8 max-w-md">
                    {project.description}
                </p>
                <ul className="flex flex-wrap gap-4">
                    {project.stats.map((stat: string) => (
                        <li key={stat} className="text-xs font-mono text-zinc-500 border-b border-zinc-800 pb-1">
                            {stat}
                        </li>
                    ))}
                </ul>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={`order-1 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'} h-[400px] bg-zinc-900 border border-zinc-800 relative overflow-hidden group rounded-lg z-10`}
            >
                {/* Real Image Integration */}
                <div
                    className={`absolute inset-0 bg-cover bg-center transition-transform duration-700 ${isMobile ? 'grayscale-0' : 'grayscale'} ${isAutoHovered ? 'scale-110 grayscale-0' : ''} md:group-hover:scale-110 md:group-hover:grayscale-0`}
                    style={{ backgroundImage: `url('${project.image}')` }}
                ></div>

                {/* Mobile Simple Center Animation BG */}
                {isMobile && (
                    <div className={`absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden`}>
                        <div className={`w-0 h-0 bg-blue-500/10 rounded-full transition-all duration-700 ease-out ${isAutoHovered ? 'w-[200%] h-[200%]' : 'w-0 h-0'}`}></div>
                    </div>
                )}

                <div className={`absolute inset-0 bg-zinc-950/60 transition-colors duration-500 ${isAutoHovered ? 'bg-zinc-950/20' : ''} md:group-hover:bg-zinc-950/20`}></div>

                <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 opacity-20 pointer-events-none">
                    {Array.from({ length: 36 }).map((_, i) => (
                        <div key={i} className="border-[0.5px] border-zinc-700/30"></div>
                    ))}
                </div>

                <div className={`absolute top-4 right-4 font-display text-6xl text-white font-bold transition-all duration-500 ${isAutoHovered ? 'opacity-100 translate-x-0' : 'opacity-10 translate-x-10'} md:group-hover:opacity-100 md:group-hover:translate-x-0`}>
                    0{index + 1}
                </div>
            </motion.div>
        </div>
    )
}

export default function Works() {
    return (
        <section id="works" className="min-h-screen py-24 px-8 md:px-24 border-t border-zinc-900 bg-zinc-950 relative z-10">
            <div className="max-w-6xl mx-auto">
                <div className="mb-32 relative">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="flex flex-col"
                    >
                        <span className="font-mono text-blue-500 text-xs tracking-[0.5em] uppercase mb-4 block">Archive</span>
                        <h2 className="font-display font-black text-6xl md:text-9xl leading-[0.8] tracking-tighter uppercase select-none flex flex-col">
                            <span className="text-zinc-100">Selected</span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-b from-zinc-400 to-zinc-700 -mt-2 md:-mt-4">Works</span>
                        </h2>
                    </motion.div>
                </div>

                <div className="space-y-32">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}

