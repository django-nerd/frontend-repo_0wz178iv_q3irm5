import { ArrowRight, BookOpen } from 'lucide-react'

export default function Products({ items = [] }) {
  return (
    <section id="products" className="relative bg-black py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-white">Products</h2>
            <p className="mt-2 text-white/70">Add more anytime. Each card automatically adapts.</p>
          </div>
          <a href="#cta" className="hidden md:inline-flex items-center gap-2 rounded-md border border-white/10 px-4 py-2 text-sm text-white hover:border-white/30 transition">
            View all <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {items.map((p) => (
            <article key={p.id} className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] p-6">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-md bg-gradient-to-tr from-cyan-500 to-blue-500 ring-1 ring-white/20" />
                <div>
                  <h3 className="text-white font-medium">{p.title}</h3>
                  <p className="text-white/60 text-sm">{p.subtitle}</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-white/70 line-clamp-3">{p.description}</p>
              <div className="mt-5 flex items-center justify-between">
                <div className="text-white">
                  <span className="text-lg font-semibold">{p.price}</span>
                  <span className="ml-2 text-white/60 text-sm">{p.badge}</span>
                </div>
                <a href="#cta" className="inline-flex items-center gap-2 rounded-md bg-white text-black px-3 py-2 text-sm font-medium shadow-[0_0_25px_rgba(255,255,255,0.2)] group-hover:translate-x-px transition">
                  <BookOpen className="h-4 w-4" /> Get
                </a>
              </div>
              <div className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(59,130,246,0.18),transparent)]" />
            </article>
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_45%_at_50%_0%,rgba(59,130,246,0.08),transparent)]" />
    </section>
  )
}
