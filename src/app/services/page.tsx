import type { Metadata } from 'next'
import Link from 'next/link'

const services = [
  {
    title: 'Structural Design',
    description:
      'Structural planning and design support for safe, efficient, and practical civil engineering outcomes.',
  },
  {
    title: 'GIS Mapping',
    description:
      'Spatial data collection, ArcMap-based analysis, and map outputs for engineering and environmental decision-making.',
  },
  {
    title: 'Project Management',
    description:
      'Planning, coordination, and execution support to keep construction and engineering work on track.',
  },
  {
    title: 'Surveying Solutions',
    description:
      'Site-oriented surveying workflows and field data practices tailored to real project conditions.',
  },
]

export const metadata: Metadata = {
  title: 'Civil Engineering and GIS Services',
  description:
    'Services by Syed Shafaat Ali including structural design, GIS mapping, project management, and surveying solutions.',
  keywords: [
    'structural design services',
    'GIS mapping services',
    'project management civil engineering',
    'surveying solutions Pakistan',
    'Syed Shafaat Ali services',
  ],
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Syed Shafaat Ali Services',
    description:
      'Civil engineering and GIS services: structural design, GIS mapping, project management, and surveying solutions.',
    url: '/services',
  },
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen px-6 md:px-12 py-32 bg-zinc-950 text-zinc-100">
      <div className="max-w-5xl mx-auto space-y-16">
        <header className="space-y-6">
          <p className="font-mono text-xs tracking-[0.35em] uppercase text-blue-500">Services</p>
          <h1 className="font-display text-5xl md:text-7xl font-black tracking-tight uppercase">
            Civil Engineering and GIS Services
          </h1>
          <p className="text-zinc-300 leading-relaxed max-w-3xl">
            Syed Shafaat Ali provides civil engineering and GIS-focused services for projects that
            require technical accuracy, clear coordination, and practical field execution.
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-2" aria-label="Service list">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 space-y-3"
            >
              <h2 className="font-display text-3xl tracking-tight">{service.title}</h2>
              <p className="text-zinc-400 leading-relaxed">{service.description}</p>
            </article>
          ))}
        </section>

        <section className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-8 space-y-4">
          <h2 className="font-display text-3xl tracking-tight">Need a custom scope?</h2>
          <p className="text-zinc-400 leading-relaxed">
            Discuss project goals, timelines, and deliverables directly through the portfolio
            contact form.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center rounded-full bg-zinc-100 px-6 py-3 text-zinc-950 text-xs tracking-[0.2em] uppercase font-black hover:bg-blue-600 hover:text-white transition-colors"
          >
            Contact Now
          </Link>
        </section>
      </div>
    </main>
  )
}
