import { Shield, Zap, Sparkles } from 'lucide-react'

const items = [
  {
    icon: Shield,
    title: 'Trusted Framework',
    desc: 'Built with proven methods and clean structure so you can start right and scale effortlessly.'
  },
  {
    icon: Zap,
    title: 'Fast Results',
    desc: 'Action-first pages, templates, and checklists that move you from idea to execution quickly.'
  },
  {
    icon: Sparkles,
    title: 'Premium Feel',
    desc: 'Sleek dark aesthetic with neon accents to position your brand as modern and professional.'
  }
]

export default function Features() {
  return (
    <section id="features" className="relative bg-black py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Why this works</h2>
          <p className="mt-3 text-white/70">A minimal, focused approach designed to convert.</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-white/10 bg-white/[0.03] p-6 shadow-lg hover:border-white/20 transition">
              <Icon className="h-6 w-6 text-cyan-300" />
              <h3 className="mt-4 text-lg font-medium text-white">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_45%_at_50%_0%,rgba(59,130,246,0.08),transparent)]" />
    </section>
  )
}
