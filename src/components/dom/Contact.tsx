'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Phone, CheckCircle2, AlertCircle, Loader2, ArrowRight } from 'lucide-react'

export default function Contact() {
    const initialFormData = {
        name: '',
        email: '',
        service: 'Structural Design',
        message: ''
    }

    const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
    const [formData, setFormData] = useState(initialFormData)
    const [errorMessage, setErrorMessage] = useState('')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setFormState('submitting')
        setErrorMessage('')

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })

            if (!response.ok) {
                const errorPayload = await response.json().catch(() => null)
                const apiMessage = typeof errorPayload?.error === 'string' ? errorPayload.error : null
                throw new Error(apiMessage ?? 'Unable to send your message right now.')
            }

            setFormState('success')

            setTimeout(() => {
                setFormState('idle')
                setFormData(initialFormData)
            }, 5000)
        } catch (error) {
            setFormState('error')
            setErrorMessage(error instanceof Error ? error.message : 'Unable to send your message right now.')
        }
    }

    const services = [
        'Structural Design',
        'GIS Mapping',
        'Project Management',
        'Surveying Solutions',
        'Other'
    ]

    return (
        <section id="contact" className="min-h-screen py-24 px-6 md:px-12 relative z-10 bg-zinc-950 overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

                    {/* Left Column: Content */}
                    <div className="flex flex-col justify-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <span className="font-mono text-blue-500 text-xs md:text-sm tracking-[0.4em] uppercase mb-4 block">Get In Touch</span>
                            <h2 className="font-display text-5xl md:text-8xl font-black tracking-tighter text-zinc-100 leading-[0.9] mb-8 uppercase">
                                Let&apos;s build<br />
                                <span className="text-zinc-500">something</span><br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-blue-700">great.</span>
                            </h2>
                            <p className="font-mono text-zinc-400 text-sm md:text-base max-w-md leading-relaxed mb-12">
                                I&apos;m always open to discussing new projects, creative ideas or original opportunities. Let&apos;s start a conversation.
                            </p>

                            <div className="space-y-6">
                                <a href="mailto:syedshafatx69@gmail.com" className="group flex items-center gap-4 text-zinc-300 hover:text-white transition-colors">
                                    <div className="w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center group-hover:bg-blue-500 group-hover:border-blue-500 transition-all">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Email me at</p>
                                        <p className="font-mono font-bold">syedshafatx69@gmail.com</p>
                                    </div>
                                </a>
                                <a href="tel:+923231598396" className="group flex items-center gap-4 text-zinc-300 hover:text-white transition-colors">
                                    <div className="w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center group-hover:bg-blue-500 group-hover:border-blue-500 transition-all">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Call me at</p>
                                        <p className="font-mono font-bold">+92-323-1598396</p>
                                    </div>
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="bg-zinc-900/40 backdrop-blur-xl border border-zinc-800/50 p-8 md:p-12 rounded-3xl"
                        >
                            <AnimatePresence mode="wait">
                                {formState === 'success' ? (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 1.1 }}
                                        className="py-12 flex flex-col items-center text-center"
                                    >
                                        <div className="w-20 h-20 rounded-full bg-blue-500/20 flex items-center justify-center mb-6">
                                            <CheckCircle2 className="w-10 h-10 text-blue-500" />
                                        </div>
                                        <h3 className="text-2xl font-display font-bold text-zinc-100 mb-2">Message Received</h3>
                                        <p className="text-zinc-400 font-mono text-sm leading-relaxed">
                                            Thank you for reaching out! I&apos;ll get back to you within 24 hours.
                                        </p>
                                    </motion.div>
                                ) : (
                                    <motion.form
                                        key="form"
                                        initial={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        onSubmit={handleSubmit}
                                        className="space-y-6"
                                    >
                                        {formState === 'error' && (
                                            <div className="rounded-xl border border-red-500/40 bg-red-500/10 p-4 flex items-start gap-3">
                                                <AlertCircle className="w-4 h-4 text-red-300 mt-0.5 shrink-0" />
                                                <p className="font-mono text-xs text-red-200 leading-relaxed">
                                                    {errorMessage}
                                                </p>
                                            </div>
                                        )}

                                        <div className="space-y-4">
                                            <div className="relative">
                                                <input
                                                    type="text"
                                                    required
                                                    value={formData.name}
                                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                    className="w-full bg-zinc-950/50 border border-zinc-800 text-zinc-100 px-6 py-4 rounded-xl outline-none focus:border-blue-500 transition-all peer placeholder:text-transparent"
                                                    placeholder="Name"
                                                    id="name"
                                                />
                                                <label htmlFor="name" className="absolute left-6 top-4 text-zinc-500 font-mono text-xs uppercase tracking-widest transition-all pointer-events-none peer-focus:-top-2.5 peer-focus:bg-zinc-900 peer-focus:px-2 peer-focus:text-blue-500 peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:bg-zinc-900 peer-[:not(:placeholder-shown)]:px-2">Name</label>
                                            </div>

                                            <div className="relative">
                                                <input
                                                    type="email"
                                                    required
                                                    value={formData.email}
                                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                    className="w-full bg-zinc-950/50 border border-zinc-800 text-zinc-100 px-6 py-4 rounded-xl outline-none focus:border-blue-500 transition-all peer placeholder:text-transparent"
                                                    placeholder="Email"
                                                    id="email"
                                                />
                                                <label htmlFor="email" className="absolute left-6 top-4 text-zinc-500 font-mono text-xs uppercase tracking-widest transition-all pointer-events-none peer-focus:-top-2.5 peer-focus:bg-zinc-900 peer-focus:px-2 peer-focus:text-blue-500 peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:bg-zinc-900 peer-[:not(:placeholder-shown)]:px-2">Email Address</label>
                                            </div>

                                            <div className="space-y-2">
                                                <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest px-2">Interested In</p>
                                                <div className="flex flex-wrap gap-2">
                                                    {services.map((service) => (
                                                        <button
                                                            key={service}
                                                            type="button"
                                                            onClick={() => setFormData({ ...formData, service })}
                                                            className={`px-4 py-2 rounded-full font-mono text-[10px] uppercase tracking-wider transition-all border ${formData.service === service ? 'bg-blue-600 border-blue-600 text-white' : 'bg-transparent border-zinc-800 text-zinc-500 hover:border-zinc-600'}`}
                                                        >
                                                            {service}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="relative">
                                                <textarea
                                                    required
                                                    rows={4}
                                                    value={formData.message}
                                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                                    className="w-full bg-zinc-950/50 border border-zinc-800 text-zinc-100 px-6 py-4 rounded-xl outline-none focus:border-blue-500 transition-all peer placeholder:text-transparent resize-none"
                                                    placeholder="Message"
                                                    id="message"
                                                />
                                                <label htmlFor="message" className="absolute left-6 top-4 text-zinc-500 font-mono text-xs uppercase tracking-widest transition-all pointer-events-none peer-focus:-top-2.5 peer-focus:bg-zinc-900 peer-focus:px-2 peer-focus:text-blue-500 peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:bg-zinc-900 peer-[:not(:placeholder-shown)]:px-2">Your Message</label>
                                            </div>
                                        </div>

                                        <button
                                            disabled={formState === 'submitting'}
                                            type="submit"
                                            className="group relative w-full bg-zinc-100 hover:bg-blue-600 text-zinc-950 hover:text-white py-5 rounded-xl font-mono text-[10px] uppercase tracking-[0.3em] font-black transition-all duration-500 overflow-hidden"
                                        >
                                            <div className="relative z-10 flex items-center justify-center gap-3">
                                                {formState === 'submitting' ? (
                                                    <>
                                                        <Loader2 className="w-4 h-4 animate-spin" />
                                                        <span>Sending...</span>
                                                    </>
                                                ) : (
                                                    <>
                                                        <span>Send Message</span>
                                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                                    </>
                                                )}
                                            </div>
                                        </button>
                                    </motion.form>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    )
}
