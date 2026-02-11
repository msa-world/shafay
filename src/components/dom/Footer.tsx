'use client'

import Link from 'next/link'
import { ArrowUpRight, MessageCircle } from 'lucide-react'

const socialLinks = [
    { name: 'WhatsApp', href: 'https://wa.me/923231598396', icon: <MessageCircle className="w-4 h-4" /> },
]

const quickLinks = [
    { label: 'About', href: '/#about' },
    { label: 'Works', href: '/#works' },
    { label: 'Experience', href: '/#experience' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/#contact' },
]

export default function Footer() {
    return (
        <footer className="relative w-full py-20 px-6 md:px-24 bg-zinc-950 border-t border-zinc-900 z-20">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-24 mb-20">
                    {/* Brand Info */}
                    <div className="lg:col-span-2">
                        <h2 className="font-display font-bold text-4xl mb-6 tracking-tighter uppercase">
                            LET&apos;S BUILD THE <br />
                            <span className="text-zinc-600">FUTURE TOGETHER.</span>
                        </h2>
                        <p className="font-mono text-zinc-500 text-sm max-w-sm leading-relaxed mb-8 font-medium">
                            Based in Pakistan. Open for worldwide collaborations in Civil Engineering, GIS, and Digital Architecture.
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map((social) => (
                                <Link
                                    key={social.name}
                                    href={social.href}
                                    className="p-3 bg-zinc-900 rounded-lg text-zinc-400 hover:text-green-500 hover:bg-zinc-800 transition-all duration-300 group"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {social.icon}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-600 mb-8 font-black">Directory</h4>
                        <div className="flex flex-col gap-4">
                            {quickLinks.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className="font-mono text-sm text-zinc-400 hover:text-zinc-100 flex items-center justify-between group font-bold"
                                >
                                    {item.label}
                                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-600 mb-8 font-black">Contact</h4>
                        <div className="flex flex-col gap-4">
                            <a href="mailto:syedshafatx69@gmail.com" className="font-mono text-sm text-zinc-400 hover:text-zinc-100 transition-colors font-bold">
                                syedshafatx69@gmail.com
                            </a>
                            <p className="font-mono text-sm text-zinc-500 font-bold">
                                Rawalpindi, Pakistan
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-10 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6 relative">
                    <p className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest font-bold">
                        &copy; 2026 SYED SHAFAAT ALI. ALL RIGHTS RESERVED.
                    </p>

                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="group flex items-center gap-3 font-mono text-[10px] text-blue-500 uppercase tracking-[0.3em] font-black hover:text-white transition-colors"
                    >
                        Back to Top
                        <div className="w-8 h-8 rounded-full border border-blue-500/30 flex items-center justify-center group-hover:bg-blue-500 group-hover:border-blue-500 transition-all">
                            <ArrowUpRight className="w-3 h-3 -rotate-45" />
                        </div>
                    </button>

                    <div className="flex gap-8">
                        <span className="font-mono text-[10px] text-zinc-700 uppercase tracking-widest cursor-default font-bold">
                            PRIVACY POLICY
                        </span>
                        <span className="font-mono text-[10px] text-zinc-700 uppercase tracking-widest cursor-default font-bold">
                            TERMS
                        </span>
                    </div>
                </div>
            </div>

            {/* Decorative Corner grid */}
            <div className="absolute top-0 right-0 w-32 h-32 border-t border-r border-zinc-900/50 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 border-b border-l border-zinc-900/50 pointer-events-none"></div>
        </footer>
    )
}
