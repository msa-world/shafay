'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const navLinks = [
    { name: 'About', href: '/#about' },
    { name: 'Experience', href: '/#experience' },
    { name: 'Works', href: '/#works' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/#contact' },
]

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Close menu on link click
    const handleLinkClick = () => setIsOpen(false)

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${scrolled ? 'py-4' : 'py-8'}`}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <nav className="flex items-center justify-between gap-8">
                    {/* Logo/Brand */}
                    <Link href="/#hero" className="group relative flex-shrink-0 z-[110]" onClick={handleLinkClick}>
                        <span className="font-display font-black text-xl md:text-2xl tracking-tighter text-zinc-100 group-hover:text-blue-500 transition-colors duration-500">
                            S.ALI
                        </span>
                        <div className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-500 group-hover:w-full"></div>
                    </Link>

                    {/* Navigation - Regular Desktop */}
                    <div className="hidden lg:flex items-center justify-center gap-12 flex-1">
                        {navLinks.map((link, i) => (
                            <motion.div
                                key={link.name}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.1 + 0.3 }}
                            >
                                <Link
                                    href={link.href}
                                    className="relative group font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-400 hover:text-zinc-100 transition-colors duration-300"
                                >
                                    {link.name}
                                    <span className="absolute -bottom-2 left-0 w-0 h-[1.5px] bg-blue-500 transition-all duration-500 group-hover:w-full"></span>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right Action + Hamburger */}
                    <div className="flex items-center gap-6 z-[110]">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                            className="hidden md:block"
                        >
                            <Link
                                href="/#contact"
                                className="inline-block bg-zinc-100 text-zinc-950 px-5 md:px-7 py-2 md:py-2.5 rounded-full font-mono text-[9px] md:text-[10px] uppercase tracking-widest font-bold hover:bg-blue-600 hover:text-white transition-all duration-500 shadow-lg shadow-blue-500/10"
                            >
                                Let&apos;s Talk
                            </Link>
                        </motion.div>

                        {/* Hamburger Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="lg:hidden flex flex-col gap-1.5 p-2 bg-zinc-900/50 rounded-lg border border-zinc-800 backdrop-blur-md"
                            aria-label="Toggle Menu"
                            title="Toggle Menu"
                        >
                            <motion.div
                                animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }}
                                className="w-6 h-0.5 bg-zinc-100"
                            />
                            <motion.div
                                animate={{ opacity: isOpen ? 0 : 1 }}
                                className="w-6 h-0.5 bg-zinc-100"
                            />
                            <motion.div
                                animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }}
                                className="w-6 h-0.5 bg-zinc-100"
                            />
                        </button>
                    </div>
                </nav>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 z-[100] bg-zinc-950/95 backdrop-blur-2xl lg:hidden flex flex-col items-center justify-center p-12"
                    >
                        <div className="flex flex-col gap-12 items-center w-full">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={handleLinkClick}
                                        className="font-display text-4xl md:text-6xl font-black italic text-zinc-100 hover:text-blue-500 transition-all uppercase tracking-tighter"
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="mt-12 w-full pt-12 border-t border-zinc-900 flex flex-col items-center gap-6"
                            >
                                <span className="font-mono text-[10px] text-zinc-500 tracking-[0.5em] uppercase">Connect</span>
                                <div className="flex gap-8 font-mono text-xs text-zinc-400">
                                    <a href="#" className="hover:text-blue-400">LI</a>
                                    <a href="#" className="hover:text-blue-400">GH</a>
                                    <a href="#" className="hover:text-blue-400">X</a>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Glassmorphic Background that appears on scroll */}
            <AnimatePresence>
                {scrolled && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 -z-10 bg-zinc-950/40 backdrop-blur-xl border-b border-zinc-800/50"
                    />
                )}
            </AnimatePresence>
        </motion.header>
    )
}

